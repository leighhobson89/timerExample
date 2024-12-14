import {
    getCurrencySymbol,
    setCurrencySymbol,
    setCash,
    getCash,
    setSalePreview,
    getFunctionRegistryResourceQuantity,
    getResourcesToIncreasePrice,
    setResourcesToIncreasePrice,
    getResourcesToDeduct,
    setResourcesToDeduct,
    functionRegistryUpgrade,
    getCurrentOptionPane,
    setCurrentOptionPane,
    getIncreaseStorageFactor,
    setHydrogenStorage,
    getHydrogenStorage,
    setHydrogenRate,
    setResearchRate,
    getHydrogenRate,
    getResearchRate,
    getHydrogenQuantity,
    setHydrogenQuantity,
    getResearchQuantity,
    setResearchQuantity,
    getIncrement,
    setIncrement,
    setBeginGameStatus, 
    setGameStateVariable, 
    getBeginGameStatus, 
    getMenuState, 
    getGameVisibleActive, 
    getElements, 
    getLanguage, 
    gameState, 
    getCurrentTab,
    getScienceKitQuantity,
    getScienceClubQuantity,
    getUpgradeResearch,
    setUpgradeResearch,
    getUpgradeHydrogen,
    setUpgradeHydrogen,
    getLastScreenOpenRegister
} from './constantsAndGlobalVars.js';

//--------------------------------------------------------------------------------------------------------

let deferredActions = [];

export function startGame() {
    if (getBeginGameStatus()) {
        setBeginGameStatus(false);
    }
    setGameState(getGameVisibleActive());

    gameLoop();
}

export async function gameLoop() {
    if (gameState === getGameVisibleActive()) {

        //Check and update what can afford to buy
        const elementsResourcesCheck = document.querySelectorAll('.resource-cost-sell-check');
        elementsResourcesCheck.forEach((elementResourceCheck) => {
            monitorResourceCostChecks(elementResourceCheck);
        });

        //updateAndIncrementQuantities
        const allQuantities = getAllQuantities();
        const allStorages = getAllStorages();
        const allResourceElements = getAllResourceElements();
        const allResourceDescElements = getAllResourceDescriptionElements();
        updateUIQuantities(allQuantities, allStorages, allResourceElements, allResourceDescElements);
        updateStats();

        if (getResourcesToDeduct() && Object.keys(getResourcesToDeduct()).length > 0) {
            checkAndDeductResources();
        }

        if (getResourcesToIncreasePrice() && Object.keys(getResourcesToIncreasePrice()).length > 0) {
            checkAndIncreasePrices();
        }

        updateAllSalePricePreviews();

        while (deferredActions.length > 0) { //mainly for increasing storage at the moment
            const runDeferredJobs = deferredActions.shift();
            runDeferredJobs();
        }

        requestAnimationFrame(gameLoop);
    }
}

function updateStats() {
    //cash
    getElements().cashStat.textContent = `${getCurrencySymbol()}${getCash().toFixed(2)}`;
}

export function sellResource(getResourceQuantity, setResourceQuantity, functionRegistryRef) {
    const functionRegistryResourceQuantity = getFunctionRegistryResourceQuantity();
    const resourceQuantity = getResourceQuantity();
    const saleData = functionRegistryResourceQuantity[functionRegistryRef].getSalePreview();

    const cashRaised = parseFloat(saleData.slice(1).split(' ')[0]);
    const quantityToDeduct = parseInt(saleData.match(/\((\d+)/)[1], 10);

    setResourceQuantity(resourceQuantity - quantityToDeduct);
    setCash(getCash() + cashRaised);
}

function updateAllSalePricePreviews() {
    const functionRegistryResourceQuantity = getFunctionRegistryResourceQuantity();
    const currentScreen = getCurrentOptionPane();
    console.log(currentScreen);

    for (const resource in functionRegistryResourceQuantity) {
        if (functionRegistryResourceQuantity.hasOwnProperty(resource) && resource === currentScreen) {
            const dropDownElementId = currentScreen + "SellSelectQuantity";
            setSalePreview(currentScreen, document.getElementById(dropDownElementId).value);

            const resourceFunctions = functionRegistryResourceQuantity[resource];

            const salePreviewString = resourceFunctions.getSalePreview();
            const salePreviewElement = document.getElementById(resourceFunctions.salePreviewElement);

            if (salePreviewElement) {
                salePreviewElement.textContent = salePreviewString;
            }
        }
    }
}

function checkAndIncreasePrices() {
    const priceIncreaseObject = getResourcesToIncreasePrice();

    for (const resource in priceIncreaseObject) {
        if (priceIncreaseObject.hasOwnProperty(resource)) {
            const { currentPrice, setPriceTarget } = priceIncreaseObject[resource];
            setNewResourcePrice(currentPrice, setPriceTarget);
        }
    }

    setResourcesToIncreasePrice('clear');
}

function setNewResourcePrice(currentPrice, setPriceTarget) {
    if (setPriceTarget) {
        let newPrice;

        switch (setPriceTarget) {
            case 'hydrogenAutoGainPrice':
                newPrice = Math.ceil(currentPrice * 1.15);
                setUpgradeHydrogen('autobuyer', 'price', newPrice);
                break;
            case 'scienceKitPrice':
                newPrice = Math.ceil(currentPrice * 1.15);
                setUpgradeResearch('scienceKit', 'price', newPrice);
                break;
            case 'scienceClubPrice':
                newPrice = Math.ceil(currentPrice * 1.15);
                setUpgradeResearch('scienceClub', 'price', newPrice);
                break;
        }
    }
}

function checkAndDeductResources() {
    const deductObject = getResourcesToDeduct();
    let deductAmount;

    for (const resource in deductObject) {
        if (deductObject.hasOwnProperty(resource)) {
            const { deductQuantity, setFunction, getFunction } = deductObject[resource];

            if (typeof deductQuantity === 'function') { //in case of storage upgrades
                deductAmount = deductQuantity();
            } else {
                deductAmount = deductQuantity;
            }

            if (typeof getFunction === 'function' && typeof setFunction === 'function') {
                const currentQuantity = getFunction();
                setFunction(currentQuantity - deductAmount);
            } else {
                console.error(`Error: getFunction or setFunction for resource '${resource}' is not callable.`);
            }
        }
    }

    setResourcesToDeduct('clear');
}

function getAllQuantities() {
    const hydrogenQuantity = getHydrogenQuantity();
    const researchQuantity = getResearchQuantity();
    const scienceKitQuantity = getScienceKitQuantity();
    const scienceClubQuantity = getScienceClubQuantity();

    const allQuantities = {
        hydrogen: hydrogenQuantity,
        research: researchQuantity,
        scienceKit: scienceKitQuantity,
        scienceClub: scienceClubQuantity,
    };

    return allQuantities;
}

function getAllStorages() {
    const hydrogenStorage = getHydrogenStorage();
    const researchStorage = null;
    const scienceKitStorage = null;
    const scienceClubStorage = null;

    const allStorages = {
        hydrogen: hydrogenStorage,
        research: researchStorage,
        scienceKit: scienceKitStorage,
        scienceClub: scienceClubStorage,
    };

    return allStorages;
}

function getAllResourceElements() {
    const hydrogenElement = getElements().hydrogenQuantity;
    const researchElement = getElements().researchQuantity;
    const scienceKitElement = document.getElementById('scienceKitQuantity');
    const scienceClubElement = document.getElementById('scienceClubQuantity');

    const allResourceElements = {
        hydrogen: hydrogenElement,
        research: researchElement,
        scienceKit: scienceKitElement,
        scienceClub: scienceClubElement,
    };

    return allResourceElements;
}

function getAllResourceDescriptionElements() {
    const hydrogenIncreaseStorageDescElement = document.getElementById('increaseContainerSizeDescription');
    const hydrogenStoragePrice = getHydrogenStorage();

    const scienceKitBuyDescElement = document.getElementById('scienceKitDescription');
    const scienceKitBuyPrice = getUpgradeResearch('scienceKit').price;

    const scienceClubBuyDescElement = document.getElementById('openScienceClubDescription');
    const scienceClubBuyPrice = getUpgradeResearch('scienceClub').price;

    const allResourceDescElements = {
        hydrogenIncreaseStorage: {element: hydrogenIncreaseStorageDescElement, price: hydrogenStoragePrice, string: ' Hydrogen'},
        scienceKitBuy: {element: scienceKitBuyDescElement, price: scienceKitBuyPrice, string: ' Hydrogen'},
        scienceClubBuy: {element: scienceClubBuyDescElement, price: scienceClubBuyPrice, string: 'Hydrogen'}
    };

    return allResourceDescElements;
}


function updateUIQuantities(allQuantities, allStorages, allResourceElements, allResourceDescriptionElements) {
    for (const resource in allQuantities) {
        if (allQuantities.hasOwnProperty(resource)) {
            const quantity = allQuantities[resource];
            const storage = allStorages[resource];
            const element = allResourceElements[resource];

            updateDisplay(element, quantity, storage, false);
        }
    }

    for (const allResourceDescriptionElement in allResourceDescriptionElements) {
        if (allResourceDescriptionElements.hasOwnProperty(allResourceDescriptionElement)) {
            const price = allResourceDescriptionElements[allResourceDescriptionElement].price;
            const resourceName = allResourceDescriptionElements[allResourceDescriptionElement].string;
            const element = allResourceDescriptionElements[allResourceDescriptionElement].element;

            updateDisplay(element, price, resourceName, true);
        }
    }
}

class Timer {
    constructor(duration, onExpire) {
        this.duration = duration;
        this.onExpire = onExpire;
        this.timerId = null;
    }

    start() {
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timerId = setInterval(() => {
            this.onExpire();
        }, this.duration);
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
}

class TimerManager {
    constructor() {
        this.timers = new Map();
    }

    addTimer(key, duration, onExpire) {
        if (this.timers.has(key)) {
            console.error(`Timer with key "${key}" already exists.`);
            return;
        }
        const timer = new Timer(duration, onExpire);
        this.timers.set(key, timer);
        timer.start();
    }

    removeTimer(key) {
        if (this.timers.has(key)) {
            this.timers.get(key).stop();
            this.timers.delete(key);
        }
    }

    stopAllTimers() {
        this.timers.forEach(timer => timer.stop());
    }

    getTimer(key) {
        return this.timers.get(key);
    }
}

const timerManager = new TimerManager();

const updateDisplay = (element, data1, data2, desc) => {
    if (desc) {
        if (element && data2) {
            element.textContent = data1 + ' ' + data2;
        }
    } else {
        if (element && data2) {
            element.textContent = data1 + '/' + data2;
        } else if (element) {
            element.textContent = data1;
        }
    
        if (element && data2 && data1 === data2) {
            element.classList.add('green-text');
        }

        if (element && element.classList.contains('green-text') && data1 !== data2) {
            element.classList.remove('green-text');
        }
    }   
};

export function toggleTimer(key, buttonId) {
    const timer = timerManager.getTimer(key);
    if (timer) {
        const button = document.getElementById(buttonId);
        if (timer.timerId) {
            timer.stop();
            button.textContent = `Resume ${key.charAt(0).toUpperCase() + key.slice(1)}`;
        } else {
            timer.start();
            button.textContent = `Pause ${key.charAt(0).toUpperCase() + key.slice(1)}`;
        }
    }
}

export function doubleRate(key) {
    const timer = timerManager.getTimer(key);
    if (timer) {
        const currentIncrement = getIncrement(key);
        const currentDuration = timer.duration;

        if (currentIncrement === 1) {
            const newDuration = Math.max(currentDuration / 2, 1);
            if (newDuration >= 10) {
                timer.stop();
                timer.duration = newDuration;
                timer.start();
                console.log(`${key} Rate doubled, new interval: ${newDuration}ms`);
                updateRate(key, false);
            } else {
                setIncrement(key, 2);
                updateRate(key, true);
            }
        } else {
            const newIncrement = currentIncrement * 2;
            setIncrement(key, newIncrement);
            console.log(`${key} increment doubled, new increment: ${newIncrement}`);
            updateRate(key, true);
        }
    }
}

// export function resetCounter(key) {
//     if (key === "hydrogenTimer") {
//         setHydrogenQuantity(0);
//         updateDisplay("hydrogenQuantity", getHydrogenQuantity());
//     } else if (key === "silverTimer") {
//         setResearchQuantity(0);
//         updateDisplay("silverQuantity", getResearchQuantity());
//     }
// }

export function manualIncrementer(getResourceQuantity, setResourceQuantity, getResourceStorage, incrementAmount, elementId, getResourceObject, resource) {
    let currentResource = getResourceQuantity();

    if (getResourceStorage && getResourceQuantity() < getResourceStorage()) { //buying upgrades affecting standard resources with storage like hydrogen
        getElements()[elementId].classList.remove('green-text');
        setResourceQuantity(currentResource + incrementAmount);
    } else if (!getResourceStorage || getResourceQuantity() < getResourceStorage()) { //buying upgrades affecting resources without storage like research 
        setResourceQuantity(currentResource + incrementAmount); 
    }
    
    if (getResourceObject) {
        const getResourceObjectFn = functionRegistryUpgrade[getResourceObject];
        const resourceObject = getResourceObjectFn(resource);
        const resourceAmountToDeductOrPrice = resourceObject.price;
        const resourceToDeductName = resourceObject.resource;
        const resourceToDeductSetFn = resourceObject.deduct;
        const resourceToDeductGetFn = resourceObject.checkQuantity;
        const resourceSetNewPrice = resourceObject.setPrice;

        //set resource to deduct
        setResourcesToDeduct(resourceToDeductName, resourceToDeductSetFn, resourceToDeductGetFn, resourceAmountToDeductOrPrice);
        setResourcesToIncreasePrice(resourceToDeductName, resourceSetNewPrice, resourceAmountToDeductOrPrice);
    }
}

export function increaseResourceStorage(setResourceStorage, getResourceStorage, elementId, getResourceObject, resource) {
    const increaseFactor = getIncreaseStorageFactor();

    if (getResourceObject) {
        const getResourceObjectFn = functionRegistryUpgrade[getResourceObject];
        const resourceObject = getResourceObjectFn(resource);
        const resourceAmountToDeduct = resourceObject.price;
        const resourceToDeductName = resourceObject.resource;
        const resourceToDeductSetFn = resourceObject.deduct;
        const resourceToDeductGetFn = resourceObject.checkQuantity;

        //set resource to deduct
        setResourcesToDeduct(resourceToDeductName, resourceToDeductSetFn, resourceToDeductGetFn, resourceAmountToDeduct);
    }

    deferredActions.push(() => {
        setResourceStorage(getResourceStorage() * increaseFactor);
        getElements()[elementId].classList.remove('green-text');
    });
}

// export function startAutoIncrementer(resourceKey) {
//     if (resourceKey === "hydrogen") {
//         setHydrogenRate(getIncrement("hydrogenTimer"));
//         timerManager.addTimer("hydrogenTimer", 1000, () => {
//             const currentHydrogen = getHydrogenQuantity();
//             setHydrogenQuantity(currentHydrogen + getIncrement("hydrogenTimer"));
//             updateDisplay("hydrogenQuantity", getHydrogenQuantity());
//             updateSummary();
//         });
//     } else if (resourceKey === "silver") {
//         setResearchRate(getIncrement("silverTimer"));
//         timerManager.addTimer("silverTimer", 1000, () => {
//             const currentSilver = getResearchQuantity();
//             setResearchQuantity(currentSilver + getIncrement("silverTimer"));
//             updateDisplay("silverQuantity", getResearchQuantity());
//             updateSummary();
//         });
//     }
// }

function calculateRate(resourceKey) {
    const timer = timerManager.getTimer(resourceKey);
    const currentIncrement = getIncrement(resourceKey);
    const currentDuration = timer.duration;

    let rate = 0;

    if (currentIncrement === 1) {
        rate = 1000 / currentDuration * currentIncrement;
    } else {
        rate = currentIncrement;
    }

    return rate;
}

function updateRate(resourceKey, reachedFastestInterval) {
    let rate;
    reachedFastestInterval ? rate = calculateRate(resourceKey) * 64 : rate = calculateRate(resourceKey);
    if (resourceKey === "hydrogenTimer") {
        setHydrogenRate(rate);
    } else if (resourceKey === "silverTimer") {
        setResearchRate(rate);
    }
    updateSummary();
}

function updateSummary() {
    document.getElementById("hydrogenPerSec").textContent = `Hydrogen: ${getHydrogenRate()}/s`;
    document.getElementById("silverPerSec").textContent = `Silver: ${getResearchRate()}/s`;
}

//===============================================================================================================

export function setGameState(newState) {
    console.log("Setting game state to " + newState);
    setGameStateVariable(newState);

    switch (newState) {
        case getMenuState():
            getElements().menu.classList.remove('d-none');
            getElements().menu.classList.add('d-flex');
            getElements().statsContainer.classList.remove('d-flex');
            getElements().statsContainer.classList.add('d-none');
            getElements().tabsContainer.classList.remove('d-flex');
            getElements().tabsContainer.classList.add('d-none');
            getElements().mainContainer.classList.remove('d-flex');
            getElements().mainContainer.classList.add('d-none');
            break;
        case getGameVisibleActive():
            getElements().menu.classList.remove('d-flex');
            getElements().menu.classList.add('d-none');
            getElements().statsContainer.classList.remove('d-none');
            getElements().statsContainer.classList.add('d-flex');
            getElements().tabsContainer.classList.remove('d-none');
            getElements().tabsContainer.classList.add('d-flex');
            getElements().mainContainer.classList.remove('d-none');
            getElements().mainContainer.classList.add('d-flex');

            manageTabSpecificUi();
            break;
    }
}

function manageTabSpecificUi() {
    const currentTab = getCurrentTab();
    const tabElements = document.querySelectorAll(`.tab-${currentTab}`);
    const allTabElements = document.querySelectorAll('[class^="tab-"]');
    allTabElements.forEach(element => {
        const tabNumberMatch = element.className.match(/tab-(\d+)/);
        if (tabNumberMatch) {
            const tabNumber = parseInt(tabNumberMatch[1], 10);

            if (tabNumber !== currentTab) {
                element.classList.remove('d-flex');
                element.classList.add('d-none');
            }
        }
    });

    if (tabElements.length > 0) {
        tabElements.forEach(element => {
            element.classList.remove('d-none');
            element.classList.add('d-flex');
        });

        console.log(`Showing UI for Tab ${currentTab}.`);
    } else {
        console.log(`No tab-specific UI to show for Tab ${currentTab}, but other tabs are hidden.`);
    }
}

function monitorResourceCostChecks(element) {
    if (element.dataset && element.dataset.conditionCheck !== 'undefined' && element.dataset.resourcePriceObject !== 'undefined') {
        const functionName = element.dataset.resourcePriceObject;
        const functionObjectRetrieval = functionRegistryUpgrade[functionName];
        const resourceObjectSectionKey = element.dataset.argumentToPass;
        const checkQuantityString = element.dataset.argumentCheckQuantity;
        const functionGetResourceQuantity = functionRegistryUpgrade[checkQuantityString];

        if (element.classList.contains('sell') && element.dataset.conditionCheck === 'sellResource') {    
            if (typeof functionGetResourceQuantity === 'function') {
                const checkQuantity = functionGetResourceQuantity();
    
                if (checkQuantity > 0) { 
                    element.classList.remove('red-text');
                } else {
                    element.classList.add('red-text');
                }
            }
            return;
        }
        
        if (typeof functionObjectRetrieval === 'function' && typeof functionGetResourceQuantity === 'function') {
            const resourceObjectSection = functionObjectRetrieval(resourceObjectSectionKey);
            const checkQuantity = functionGetResourceQuantity();
            let price = resourceObjectSection.price;

            if (typeof price === 'function') {
                price = price();
            }
            
            // Perform the check and update the element's class
            if (element.dataset.conditionCheck === 'upgradeCheck' && checkQuantity >= price) { 
                element.classList.remove('red-text');
            } else {
                element.classList.add('red-text');
            }
        } else {
            console.error(`Function ${functionName} is not defined or not callable.`);
        }
    }
}