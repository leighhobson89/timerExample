import {
    getTechRenderCounter,
    setTechRenderCounter,
    setTechRenderChange,
    getTechRenderChange,
    setTempSellRowValue,
    getTempSellRowValue,
    deferredActions,
    getCanAffordDeferred,
    setCanAffordDeferred,
    getTemporaryRowsRepo,
    setTemporaryRowsRepo,
    setOriginalFrameNumbers,
    getOriginalFrameNumbers,
    getUnlockedResourcesArray,
    setUnlockedResourcesArray,
    setRevealedTechArray,
    getTimerRateRatio,
    getTimerUpdateInterval,
    getCurrencySymbol,
    setSalePreview,
    getResourcesToIncreasePrice,
    setResourcesToIncreasePrice,
    getResourcesToDeduct,
    setResourcesToDeduct,
    getCurrentOptionPane,
    getIncreaseStorageFactor,
    setBeginGameStatus, 
    setGameStateVariable, 
    getBeginGameStatus, 
    getMenuState, 
    getGameVisibleActive, 
    getElements, 
    gameState, 
    getCurrentTab,
    getRevealedTechArray,
    getTechUnlockedArray,
    getResourceSalePreview,
    getNotationType
} from './constantsAndGlobalVars.js';

import {
    getAutoBuyerTierLevel,
    getResourceDataObject,
    setResourceDataObject,
} from "./resourceDataObject.js";

import { 
    updateContent,
    sortTechRows,
    showNotification,
    showTabsUponUnlock,
    generateStarfield
} from "./ui.js";

import { 
    capitaliseString
 } from './utilityFunctions.js';

//---------------------------------------------------------------------------------------------------------

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

//--------------------------------------------------------------------------------------------------------
const timerManager = new TimerManager();

export function startGame() {
    if (getBeginGameStatus()) {
        setBeginGameStatus(false);
    }
    setGameState(getGameVisibleActive());
    updateContent('Resources', `tab1`, 'intro');
    gameLoop();
}

export async function gameLoop() {
    if (gameState === getGameVisibleActive()) {
        showTabsUponUnlock();

        const resourceNames = Object.keys(getResourceDataObject('resources'));
        const resourceTierPairs = [];
        resourceNames.forEach(resourceName => {
            for (let tier = 1; tier <= 4; tier++) {
                resourceTierPairs.push([resourceName, tier]);
            }
        });

        const allQuantities = getAllQuantities();
        const allStorages = getAllStorages();
        const allResourceElements = getAllResourceElements(resourceTierPairs);
        const allResourceDescElements = getAllDynamicResourceDescriptionElements(resourceTierPairs);
        updateUIQuantities(allQuantities, allStorages, allResourceElements, allResourceDescElements);
        updateStats();

        if (getResourcesToDeduct() && Object.keys(getResourcesToDeduct()).length > 0) {
            checkAndDeductResources();
        }

        if (getResourcesToIncreasePrice() && Object.keys(getResourcesToIncreasePrice()).length > 0) {
            checkAndIncreasePrices();
        }

        const elementsResourcesCheck = document.querySelectorAll('.resource-cost-sell-check');
        elementsResourcesCheck.forEach((elementResourceCheck) => {
            monitorResourceCostChecks(elementResourceCheck);
        });

        const revealRowsCheck = document.querySelectorAll('.option-row');
        revealRowsCheck.forEach((revealRowCheck) => {
            monitorRevealRowsChecks(revealRowCheck);
        });

        updateAllSalePricePreviews();

        while (deferredActions.length > 0) {
            const runDeferredJobs = deferredActions.shift();
            runDeferredJobs();
        }

        if (getCurrentOptionPane() === 'tech tree') {
            updateClassesInRowsToRender();

            const sortedRows = sortRowsByRenderPosition(getTemporaryRowsRepo('rows'), 'techs');
            const containerToRenderTo = getTemporaryRowsRepo('container');
        
            if (getTechRenderChange()) {
                setTechRenderCounter(getTechRenderCounter() + 1);
            
                if (getTechRenderCounter() >= 150) { //minimise interaction disruptions while sorting rows
                    sortedRows.forEach(item => containerToRenderTo.appendChild(item.row));
                    setTechRenderChange(false);
                    setTechRenderCounter(0);
                }
            }
        }

        formatAllNotationElements(getNotationType());
        requestAnimationFrame(gameLoop);
    }
}

function updateStats() {
    const cash = getResourceDataObject('currency', ['cash']);
    if (getCurrencySymbol() !== "€") {
        getElements().cashStat.textContent = `${getCurrencySymbol()}${cash.toFixed(2)}`;
        //updateOriginalValue(getElements().cashStat, `${getCurrencySymbol()}${cash.toFixed(2)}`);
    } else {
        getElements().cashStat.textContent = `${cash.toFixed(2) + getCurrencySymbol()}`;
        //updateOriginalValue(getElements().cashStat, `${cash.toFixed(2) + getCurrencySymbol()}`);
    }
}

export function fuseResource(resource, fuseTargets) {
    const resourceString = getResourceDataObject('resources', [resource, 'nameResource']);
    const resourceQuantity = getResourceDataObject('resources', [resource, 'quantity']);
    let totalDeducted = 0;
    let iterationCounter = 0;

    for (let target of fuseTargets) {
        iterationCounter++;
        const { fuseTo, ratio, resourceRowToShow, categoryToShow, mainCategoryToShow } = target;

        const fuseToString = getResourceDataObject('resources', [fuseTo, 'nameResource']);
        const fuseToStorageCapacity = getResourceDataObject('resources', [fuseTo, 'storageCapacity']);
        const fuseToQuantity = getResourceDataObject('resources', [fuseTo, 'quantity']);
        
        let fuseData, amountToDeductFromResource, amountToAddToResource, realAmountToAdd = 0, lostQuantity = 0;

        if (!getUnlockedResourcesArray().includes(fuseTo)) {
            resourceRowToShow.classList.remove('invisible');
            mainCategoryToShow.classList.remove('invisible');
            categoryToShow.classList.remove('invisible');
            setUnlockedResourcesArray(fuseTo);
            fuseData = getResourceSalePreview(resource);
            amountToDeductFromResource = parseInt(fuseData.match(/\((\d+)/)[1], 10);
            const amountToAdd = Math.ceil((amountToDeductFromResource * ratio) / 4);

            showNotification(
                `Discovered ${fuseToString} and made ${amountToAdd} ${fuseToString} from ${amountToDeductFromResource} ${resourceString}!`,
                'info'
            );
            setResourceDataObject(resourceQuantity - amountToDeductFromResource, 'resources', [resource, 'quantity']);
            setResourceDataObject(fuseToQuantity + amountToAdd, 'resources', [fuseTo, 'quantity']);
            totalDeducted = amountToDeductFromResource;
        } else {
            let fusionEfficiency = 1; // Default full efficiency

            if (!getTechUnlockedArray().includes("fusionEfficiencyI")) {
                fusionEfficiency = Math.random() * (0.30 - 0.20) + 0.20;
            } else if (!getTechUnlockedArray().includes("fusionEfficiencyII")) {
                fusionEfficiency = Math.random() * (0.60 - 0.40) + 0.40;
            } else if (!getTechUnlockedArray().includes("fusionEfficiencyIII")) {
                fusionEfficiency = Math.random() * (0.80 - 0.60) + 0.60;
            }

            fuseData = getResourceSalePreview(resource);
            amountToDeductFromResource = parseInt(fuseData.match(/\((\d+)/)[1], 10);
            iterationCounter === 1 ? amountToAddToResource = parseInt(fuseData.match(/->\s*(\d+)/)[1], 10) : amountToAddToResource = parseInt(fuseData.match(/(?<=,\s)\d+/)[0], 10)

            realAmountToAdd = Math.floor(amountToAddToResource * fusionEfficiency);
            const energyLossFuseToQuantity = Math.floor(amountToAddToResource - realAmountToAdd);
            const availableStorageFuseTo = Math.floor(fuseToStorageCapacity - fuseToQuantity);

            if (Math.abs(amountToDeductFromResource * ratio - amountToAddToResource) <= 1) {
                showNotification(
                    `Should Fuse ${amountToDeductFromResource} ${resourceString} into ${Math.floor(amountToDeductFromResource * ratio)} ${fuseToString}. Lost ${energyLossFuseToQuantity} ${fuseToString} as energy due to sub-optimal fusion efficiency, receive ${realAmountToAdd} ${fuseToString}`,
                    'info'
                );
            } else { ;
                
                lostQuantity = Math.max(realAmountToAdd - availableStorageFuseTo, 0);
                showNotification(
                    `Should Fuse ${amountToDeductFromResource} ${resourceString} into ${Math.floor(amountToDeductFromResource * ratio)} ${fuseToString}. Max available storage is for ${availableStorageFuseTo}.  Of those, ${energyLossFuseToQuantity} lost due to sub-optimal fusion efficiency. So receive ${realAmountToAdd - lostQuantity} ${fuseToString}`,
                    'warning'
                );
            }

            const finalAmountToAdd = Math.min(realAmountToAdd - lostQuantity, availableStorageFuseTo);
            setResourceDataObject(fuseToQuantity + finalAmountToAdd, 'resources', [fuseTo, 'quantity']);
            totalDeducted = amountToDeductFromResource;
        }
    }

    setResourceDataObject(resourceQuantity - totalDeducted, 'resources', [resource, 'quantity']);
}

export function sellResource(resource) {
    const resourceQuantity = getResourceDataObject('resources', [resource, 'quantity']);
    const saleData = getResourceSalePreview(resource);

    const currentCash = getResourceDataObject('currency', ['cash']);
    const extractedValue = saleData.split('>')[1].split('<')[0].trim().slice(1);
    const cashRaised = parseFloat(extractedValue);
    const quantityToDeduct = parseInt(saleData.match(/\((\d+)/)[1], 10);

    setResourceDataObject(resourceQuantity - quantityToDeduct, 'resources', [resource, 'quantity']);
    setResourceDataObject(currentCash + cashRaised, 'currency', ['cash']);
}

function updateAllSalePricePreviews() {
    const currentScreen = getCurrentOptionPane();
    const resources = getResourceDataObject('resources');

    for (const resource in resources) {
        const fuseTo1 = resources[resource]?.['fuseTo1'];
        const fuseTo2 = resources[resource]?.['fuseTo2'];
    
        if (resource === currentScreen) {
            const dropDownElementId = resource + "SellSelectQuantity";
            if (fuseTo1 !== 'none') {
                setSalePreview(currentScreen, document.getElementById(dropDownElementId).value, fuseTo1, fuseTo2);
            } else {
                setSalePreview(currentScreen, document.getElementById(dropDownElementId).value, '', '');
            }
        
            const salePreviewString = getResourceSalePreview(resource);
            let cleanedString = cleanString(salePreviewString);

            const salePreviewElementId = resources[resource]?.salePreviewElement;
            const salePreviewElement = document.getElementById(salePreviewElementId);
    
            if (salePreviewElement) {
                salePreviewElement.innerHTML = cleanedString;
            }
        }
    }    
}

function cleanString(string) {
    if (string.includes("NaN") || string.includes(", 0 )")) { //clean string
        return string.split(",")[0] + ")";
    } else if (string.includes(', 0 !)')) {
        return string.split(",")[0] + "!)";
    } else if (string.includes(', 0 !!)')) {
        return string.split(",")[0] + "!!)";
    } else {
        return string;
    }
}

function checkAndIncreasePrices() {
    const priceIncreaseObject = getResourcesToIncreasePrice();

    for (const resource in priceIncreaseObject) {
        if (priceIncreaseObject.hasOwnProperty(resource)) {
            if (getCanAffordDeferred()) {
                const { currentPrice, setPriceTarget } = priceIncreaseObject[resource];
                if (setPriceTarget.startsWith('science')) {
                    setNewResourcePrice(currentPrice, setPriceTarget, '');
                } else {
                    const tierMatch = setPriceTarget.match(new RegExp(`${resource}AB(\\d+)Price`));
                    if (tierMatch && tierMatch[1]) {
                        const tier = parseInt(tierMatch[1], 10);
                        setNewResourcePrice(currentPrice, setPriceTarget, tier);
                    }
                }
            }
        }
    }

    setResourcesToIncreasePrice('clear');
}

function setNewResourcePrice(currentPrice, elementName, tier) {
    if (elementName) {
        const newPrice = Math.ceil(currentPrice * 1.15);

        if (elementName.startsWith('science')) {
            const strippedElementName = elementName.slice(0, -5);        
            setResourceDataObject(newPrice, 'research', ['upgrades', strippedElementName, 'price']);
        } else {
            const resourceName = elementName.replace(/([A-Z])/g, '-$1').toLowerCase().split('-')[0];
            setResourceDataObject(newPrice, 'resources', [resourceName, 'upgrades', 'autoBuyer', `tier${tier}`, 'price']);
        }
    }
}

function checkAndDeductResources() {
    const deductObject = getResourcesToDeduct();
    let deductAmount;
    let mainKey;

    for (const resource in deductObject) {
        if (deductObject.hasOwnProperty(resource)) {
            let currentQuantity;
            deductAmount = deductObject[resource].deductQuantity;

            if (resource === 'cash') {
                mainKey = 'currency';
                currentQuantity = getResourceDataObject(mainKey, [resource]);
                if (deductAmount >  currentQuantity) {
                    setCanAffordDeferred(false);
                } else {
                    setResourceDataObject(currentQuantity - deductAmount, mainKey, [resource]);
                    setCanAffordDeferred(true);
                }
            } else if (resource === 'research') {
                mainKey = 'research';
                currentQuantity = getResourceDataObject(mainKey, ['quantity']);
                if (deductAmount >  currentQuantity) {
                    setCanAffordDeferred(false);
                } else {
                    setResourceDataObject(currentQuantity - deductAmount, mainKey, ['quantity']);
                    setCanAffordDeferred(true);
                }
            } else {
                mainKey = 'resources';
                currentQuantity = getResourceDataObject(mainKey, [resource, 'quantity']);
                if (deductAmount >  currentQuantity) {
                    setCanAffordDeferred(false);
                } else {
                    setResourceDataObject(currentQuantity - deductAmount, mainKey, [resource, 'quantity']);
                    setCanAffordDeferred(true);
                }  
            }
        }
    }

    setResourcesToDeduct('clear');
}

function getAllQuantities() {
    const resourceKeys = Object.keys(getResourceDataObject('resources'));
    const allQuantities = {};

    resourceKeys.forEach(resource => {
        const resourceName = resource;
        allQuantities[resourceName] = getResourceDataObject('resources', [resourceName, 'quantity']);
    });

    allQuantities.research = getResourceDataObject('research', ['quantity']);
    allQuantities.scienceKit = getResourceDataObject('research', ['upgrades', 'scienceKit', 'quantity']);
    allQuantities.scienceClub = getResourceDataObject('research', ['upgrades', 'scienceClub', 'quantity']);

    return allQuantities;
}

function getAllStorages() {
    const resourceKeys = Object.keys(getResourceDataObject('resources'));
    const allStorages = {};

    resourceKeys.forEach(resource => {
        const resourceName = resource;
        allStorages[resourceName] = getResourceDataObject('resources', [resourceName, 'storageCapacity']);
    });

    allStorages.research = null;
    allStorages.scienceKit = null;
    allStorages.scienceClub = null;

    return allStorages;
}

function getAllResourceElements(resourcesArray) {
    const resourceNames = [];
    const allResourceElements = {};

    resourcesArray.forEach(resource => {
        if (!resourceNames.includes(resource[0])) {
            resourceNames.push(resource[0]);
            allResourceElements[resource[0]] = getElements()[`${resource[0]}Quantity`];
        }
    });

    allResourceElements.research = getElements().researchQuantity;
    allResourceElements.scienceKit = getElements().scienceKitQuantity;
    allResourceElements.scienceClub = getElements().scienceClubQuantity;

    return allResourceElements;
}

function getAllDynamicResourceDescriptionElements(resourceTierPairs) {
    const elements = {};

    resourceTierPairs.forEach(([resourceName, tier]) => {
        const resourceIncreaseStorageDescElement = document.getElementById(`${resourceName}IncreaseContainerSizeDescription`);
        const resourceStoragePrice = getResourceDataObject('resources', [resourceName, 'storageCapacity']);

        const resourceAutoBuyerDescElement = document.getElementById(`${resourceName}AutoBuyerTier${tier}Description`);
        const resourceAutoBuyerPrice = getResourceDataObject('resources', [resourceName, 'upgrades', 'autoBuyer', `tier${tier}`, 'price']);

        elements[`${resourceName}IncreaseStorage`] = { element: resourceIncreaseStorageDescElement, price: resourceStoragePrice, string: `${capitaliseString(resourceName)}` };
        elements[`${resourceName}AutoBuyerTier${tier}`] = { element: resourceAutoBuyerDescElement, price: resourceAutoBuyerPrice, string: `${capitaliseString(resourceName)}` };
    });

    const scienceElements = getScienceResourceDescriptionElements();
    Object.assign(elements, scienceElements);

    return elements;
}

function getScienceResourceDescriptionElements() {
    const scienceKitBuyDescElement = document.getElementById('scienceKitDescription');
    const scienceKitBuyPrice = getResourceDataObject('research', ['upgrades', 'scienceKit', 'price']);

    const scienceClubBuyDescElement = document.getElementById('openScienceClubDescription');
    const scienceClubBuyPrice = getResourceDataObject('research', ['upgrades', 'scienceClub', 'price']);

    return {
        scienceKitBuy: { element: scienceKitBuyDescElement, price: scienceKitBuyPrice, string: getCurrencySymbol() },
        scienceClubBuy: { element: scienceClubBuyDescElement, price: scienceClubBuyPrice, string: getCurrencySymbol() },
    };
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
            const costResourceName = allResourceDescriptionElements[allResourceDescriptionElement].string;
            const element = allResourceDescriptionElements[allResourceDescriptionElement].element;

            updateDisplay(element, price, costResourceName, true);
        }
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

function monitorRevealRowsChecks(element) {
    if (element.classList.contains('invisible') && element.dataset.conditionCheck === 'techUnlock') { //reveal techs check
        if (getRevealedTechArray().includes(element.dataset.type)) {
            element.classList.remove('invisible');
            setTechRenderChange(true);
        } else if (!getRevealedTechArray().includes(element.dataset.type) && getResourceDataObject('research', ['quantity']) >= getResourceDataObject('techs', [element.dataset.type, 'appearsAt'])[0]) {
            element.classList.remove('invisible');
            setTechRenderChange(true);
            setRevealedTechArray(element.dataset.type);
        }
    } else if (element.dataset.conditionCheck === 'upgradeCheck' && element.dataset.type === 'autoBuyer') { //autobuyer reveal check
        const elementTier = parseInt(element.dataset.autoBuyerTier.slice(-1));
        if (getCurrentTab() === 1)  {
            if (elementTier > 0 ) {
                if (elementTier <= getAutoBuyerTierLevel(getCurrentOptionPane())) {
                    element.classList.remove('invisible');
                } else {
                    element.classList.add('invisible');
                }
            } else {
                element.classList.add('invisible');
            }
        }
    }
}

function monitorResourceCostChecks(element) {
    if (element.dataset && element.dataset.conditionCheck !== 'undefined' && element.dataset.resourcePriceObject !== 'undefined') {
        let resource = element.dataset.type;
        const techName = element.dataset.type;
        const type = element.dataset.type;
        const resourceToFuseTo = element.dataset.resourceToFuseTo;

        //so far just for science upgrades
        const scienceUpgradeType = element.dataset.resourceToFuseTo;

        if (resource === 'storage' || resource === 'autoBuyer') {
            resource = element.dataset.argumentCheckQuantity;
        }

        const checkQuantityString = element.dataset.argumentCheckQuantity;

        let quantity;

        if (checkQuantityString === 'cash') {
            quantity = getResourceDataObject('currency', ['cash']);
        } else {
            if (checkQuantityString === 'research') {
                quantity = getResourceDataObject('research', ['quantity']); //research
            } else {
                quantity = getResourceDataObject('resources', [checkQuantityString, 'quantity']); //research
            } 
        }

        if (element.classList.contains('sell') || element.dataset.conditionCheck === 'sellResource') { //sell
            if (quantity > 0) { 
                element.classList.remove('red-disabled-text');
            } else {
                element.classList.add('red-disabled-text');
            }

            return;
        }

        if(element.classList.contains('fuse') || element.dataset.conditionCheck === 'fuseResource') {
            if (getTechUnlockedArray().includes(resource + 'Fusion') && getUnlockedResourcesArray().includes(resourceToFuseTo)) {
                element.classList.remove('invisible'); 
            }

            if (getTechUnlockedArray().includes(resource + 'Fusion') && quantity > 0) {
                element.classList.remove('red-disabled-text');
                if (element.tagName.toLowerCase() === 'button') {
                    setTextDescriptionClassesBasedOnButtonStates(element, 'fuse');
                }
            } else if (!getTechUnlockedArray().includes(resource + 'Fusion')) {
                element.classList.add('invisible');
            } else {
                element.classList.remove('warning-orange-text');
                element.classList.add('red-disabled-text');
            }
            return;
        }

        if (element.classList.contains('tech-unlock') || element.dataset.conditionCheck === 'techUnlock') { 
            const prerequisite = getResourceDataObject('techs', [techName, 'appearsAt'])[1];  
            const prerequisiteSpan = element.querySelector('span');
            
            if (getTechUnlockedArray().includes(prerequisite)) {
                
                if (prerequisiteSpan) {
                    prerequisiteSpan.classList.remove('red-disabled-text');
                    prerequisiteSpan.classList.add('green-ready-text');
                }
            }

            if (!element.classList.contains('unlocked-tech') && !getTechUnlockedArray().includes(techName)) {
                if (quantity >= getResourceDataObject('techs', [techName, 'price'])) {
                    if ((getTechUnlockedArray().includes(prerequisite) || prerequisite === null) && element.tagName.toLowerCase() === 'button') {
                        element.classList.remove('red-disabled-text');
                    } else if (element.tagName.toLowerCase() !== 'button') {
                        element.classList.remove('red-disabled-text');
                    }
                } else {
                    element.classList.add('red-disabled-text');
                }
            } else {
                if (element.tagName.toLowerCase() === 'button') {
                    setTextDescriptionClassesBasedOnButtonStates(element, 'green');
                }
                element.classList.remove('red-disabled-text');
                element.classList.add('green-ready-text');
                element.textContent = 'Researched';
                //updateOriginalValue(element, 'Researched');
                element.style.pointerEvents = 'none';
                setTechRenderChange(true);
            }
            return;
        }        

        let price;
        let mainKey;

        if (type === 'autoBuyer') {
            mainKey = 'resources';
            const autoBuyerTier = element.dataset.autoBuyerTier;
            if (autoBuyerTier === 'tier0') return;
            price = getResourceDataObject(mainKey, [resource, 'upgrades', 'autoBuyer', autoBuyerTier, 'price']);
        } else if (type === 'scienceUpgrade') {
            mainKey = 'research';
            price = getResourceDataObject(mainKey, ['upgrades', scienceUpgradeType, 'price']); //yes correct but bad naming
        } else {
            if (element.dataset.type === "research") {
                mainKey = 'research';
                price = getResourceDataObject(mainKey, ['quantity']);
            } else if (element.dataset.type === "storage") {
                mainKey = 'resources' //storageCapacity
                price = getResourceDataObject(mainKey, [resource, 'storageCapacity']);
                if (element.tagName.toLowerCase() !== 'button') {
                    element.textContent = `${price} ${getResourceDataObject(mainKey, [resource, 'nameResource'])}`;
                }
            }
        }
        
        // Perform the check and update the element's class
        if (element.dataset.conditionCheck === 'upgradeCheck' && quantity >= price) { 
            element.classList.remove('red-disabled-text');
        } else {
            element.classList.add('red-disabled-text');
        }
        
    }
}

export function setTextDescriptionClassesBasedOnButtonStates(element, type) {
    if (type === 'green') {
        const accompanyingLabel = element.parentElement.nextElementSibling.querySelector('label');
        accompanyingLabel.classList.remove('red-disabled-text');
        accompanyingLabel.classList.add('unlocked-tech');
        accompanyingLabel.classList.add('green-ready-text');
        accompanyingLabel.textContent = 'Researched';
        //updateOriginalValue(accompanyingLabel, 'Researched');
        accompanyingLabel.style.pointerEvents = 'none';
    } else if (type === 'fuse') {
        const accompanyingLabel = element.parentElement.nextElementSibling.querySelector('label');
        if (accompanyingLabel.textContent.includes('!!')) {
            element.classList.add('warning-orange-text');
            element.classList.remove('red-disabled-text');
            accompanyingLabel.classList.remove('warning-orange-text');
            accompanyingLabel.classList.add('red-disabled-text');
        } else if (accompanyingLabel.textContent.includes('!')) {  //over the storage limit for output element
            element.classList.add('warning-orange-text');
            accompanyingLabel.classList.add('warning-orange-text');
        } else {
            element.classList.remove('warning-orange-text');
            accompanyingLabel.classList.remove('warning-orange-text');
            accompanyingLabel.classList.remove('red-disabled-text');
        }
    }
}

const updateDisplay = (element, data1, data2, desc) => {
    if (desc) {
        if (element && data2) {
            if (data2 === '€') {
                element.textContent = data1 + data2;
                //updateOriginalValue(element, data1 + data2);
            } else if (data2 === getCurrencySymbol()) {
                element.textContent = data2 + data1;
                //updateOriginalValue(element, data2 + data1);
            } else {
                element.textContent = data1 + ' ' + data2;
                //updateOriginalValue(element, data1 + ' ' +data2);
            }
        }
    } else {
        if (element && data2) {
            element.textContent = Math.floor(data1) + '/' + Math.floor(data2);
            //updateOriginalValue(element, Math.floor(data1) + '/' + Math.floor(data2));
        } else if (element) {
            element.textContent = Math.floor(data1);
            //updateOriginalValue(element, Math.floor(data1));
        }
    
        if (element && data2 && data1 === data2) {
            element.classList.add('green-ready-text');
        }

        if (element && element.classList.contains('green-ready-text') && data1 !== data2) {
            element.classList.remove('green-ready-text');
        }
    }   
};

export function gain(incrementAmount, elementId, resource, ABOrTechPurchase, tierAB, resourceCategory) {
    let resourceType;

    if (resourceCategory === 'research') {
        resourceType = 'research';
    } else if (resourceCategory === 'techs') { 
        resourceType = 'techs';
    } else if (resourceCategory === 'scienceUpgrade') { 
        resourceType = 'scienceUpgrade';
    } else {
        resourceType = 'resource'; 
    }

    let currentResourceQuantity;

    if (resource && resource === 'techUnlock') {
        currentResourceQuantity = getResourceDataObject('techs', [incrementAmount, 'price']);
    } else if (resource && resource.startsWith('science')) {
        currentResourceQuantity = getResourceDataObject('research', ['upgrades', resource, 'quantity']); 
    } else if (resource && resource === 'autoBuyer') {
        currentResourceQuantity = getResourceDataObject('resources', [resourceCategory, 'upgrades', 'autoBuyer', tierAB, 'quantity']);
    } else {
        currentResourceQuantity = getResourceDataObject('resources', [resourceCategory, 'quantity']);
    }

    if (ABOrTechPurchase) {
        if (ABOrTechPurchase === 'techUnlock') {
            setResourceDataObject(getResourceDataObject('research', ['quantity']) - currentResourceQuantity, 'research', ['quantity']);
        } else {
            setResourceDataObject(currentResourceQuantity + incrementAmount, 'resources', [resourceCategory, 'upgrades', 'autoBuyer', tierAB, 'quantity']); //ab end up here should add to ab
        }
    } else {
        if (resourceType === 'scienceUpgrade') {
            setResourceDataObject(currentResourceQuantity + incrementAmount, 'research', ['upgrades', resource, 'quantity']); 
        } else if (resourceType === 'resource' && currentResourceQuantity < getResourceDataObject('resources', [resourceCategory, 'storageCapacity'])) { //buying upgrades affecting standard resources with storage like hydrogen
            getElements()[elementId].classList.remove('green-ready-text');
            setResourceDataObject(currentResourceQuantity + incrementAmount, 'resources', [resourceCategory, 'quantity']);
            return;
        } else if (resourceType === 'resource' && currentResourceQuantity >= getResourceDataObject('resources', [resourceCategory, 'storageCapacity'])) {
            setResourceDataObject(getResourceDataObject('resources', [resourceCategory, 'storageCapacity']), 'resources', [resourceCategory, 'quantity']);
            return;
        } else if (resourceType === 'research') {
            getElements()[elementId].classList.remove('green-ready-text');
            setResourceDataObject(currentResourceQuantity + incrementAmount, 'research', ['quantity']);
        }
    }

    let amountToDeduct;
    let resourceSetNewPrice;

    let resourceObject;
    if (resourceCategory === 'research') {
        resourceObject = getResourceDataObject('research', ['upgrades', resource]);
    } else if (resourceCategory === 'techs') {
        sortTechRows(false);
        return;
    } else if (resourceCategory === 'scienceUpgrade') {
        resourceObject = getResourceDataObject('research', ['upgrades', resource]);
    } else {
        resourceObject = getResourceDataObject('resources', [resourceCategory]);
    }
    
    if (ABOrTechPurchase) {
        amountToDeduct = resourceObject.upgrades.autoBuyer[tierAB].price;
        resourceSetNewPrice = resourceObject.upgrades.autoBuyer[tierAB].setPrice;
    } else {
        amountToDeduct = resourceObject.price;
        resourceSetNewPrice = resourceObject.setPrice;
    }

    let resourceToDeductName;

    if (resourceCategory === 'scienceUpgrade') {
        resourceToDeductName = 'cash';
    } else {
        resourceToDeductName = resourceObject.screenName;
    } 

    //set resource to deduct
    setResourcesToDeduct(resourceToDeductName, amountToDeduct);
    setResourcesToIncreasePrice(resourceToDeductName, resourceSetNewPrice, amountToDeduct);
}

export function increaseResourceStorage(elementId, resource) {
    const increaseFactor = getIncreaseStorageFactor();

    const amountToDeduct = getResourceDataObject('resources', [resource, 'storageCapacity']);
    const resourceToDeductName = resource;

    //set resource to deduct
    setResourcesToDeduct(resourceToDeductName, amountToDeduct);

    deferredActions.push(() => {
        const updatedStorageSize = getResourceDataObject('resources', [resource, 'storageCapacity']) * increaseFactor;
        setResourceDataObject(updatedStorageSize, 'resources', [resource, 'storageCapacity']);
        getElements()[elementId].classList.remove('green-ready-text');
    });
}

export function revealElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('invisible');
}

export function startUpdateAutoBuyerTimersAndRates(elementName, tier) {
    if (elementName.startsWith('science')) {
        startUpdateScienceTimers(elementName);
        return;
    }

    const rate = getResourceDataObject('resources', [elementName, 'upgrades', 'autoBuyer', `tier${tier}`, 'rate']);
    const newRate = getResourceDataObject('resources', [elementName, 'rate']) + rate;
    setResourceDataObject(newRate, 'resources', [elementName, 'rate']);

    getElements()[`${elementName}Rate`].textContent = `${(newRate * getTimerRateRatio()).toFixed(1)} / s`;
    //updateOriginalValue(getElements()[`${elementName}Rate`], `${(newRate * getTimerRateRatio()).toFixed(1)} / s`);

    const timerName = `${elementName}AB${tier}`;
    if (!timerManager.getTimer(timerName)) {
        timerManager.addTimer(timerName, getTimerUpdateInterval(), () => {
            const currentQuantity = getResourceDataObject('resources', [elementName, 'quantity']);
            const currentRate = getResourceDataObject('resources', [elementName, 'rate']);
            const storageCapacity = getResourceDataObject('resources', [elementName, 'storageCapacity']);
            setResourceDataObject(Math.min(currentQuantity + currentRate, storageCapacity), 'resources', [elementName, 'quantity']);
        });
    }
}

function startUpdateScienceTimers(elementName) {
    if (elementName.startsWith('science')) {

        const upgradeRatePerUnit = getResourceDataObject('research', ['upgrades', elementName, 'rate']);
        const newResearchRate = getResourceDataObject('research', ['rate']) + upgradeRatePerUnit;

        setResourceDataObject(newResearchRate, 'research', ['rate']);
        getElements().researchRate.textContent = `${(newResearchRate * getTimerRateRatio()).toFixed(1)} / s`;
        //updateOriginalValue(getElements().researchRate, `${(newResearchRate * getTimerRateRatio()).toFixed(1)} / s`);

        if (!timerManager.getTimer('research')) {
            timerManager.addTimer('research', getTimerUpdateInterval(), () => {
                const currentResearchQuantity = getResourceDataObject('research', ['quantity']);
                const currentResearchRate = getResourceDataObject('research', ['rate']);
                setResourceDataObject(currentResearchQuantity + currentResearchRate, 'research', ['quantity']);
            });
        }
    }
}

// export function updateOriginalValue(element, value) {
//     let originalNumbers = getOriginalFrameNumbers();

//     let elementSelector = '';
//     if (element.id) {
//         elementSelector = `#${element.id}`;
//     } else if (element.classList.length > 0) {
//         elementSelector = `.${Array.from(element.classList).join('.')}`;
//     } else {
//         console.error("Element must have an id or a class to create a selector.");
//         return;
//     }

//     if (originalNumbers[elementSelector]) {
//         originalNumbers[elementSelector].originalValue = value;
//     } else if (element.classList.contains('notation')) {
//         originalNumbers[elementSelector] = {
//             originalValue: value,
//             elementSelector: elementSelector
//         };
//         console.log(`Added new entry for selector: ${elementSelector}`);
//     }
    

//     setOriginalFrameNumbers(originalNumbers);
// }


function formatAllNotationElements(notationType) {
    let sellRowPresent = false;
    const elements = document.querySelectorAll('.notation');
    const originalNumbers = getOriginalFrameNumbers();
    const existingSelectors = new Set();

    elements.forEach(element => {
        const originalContent = element.innerHTML;
        const elementSelector = element.id ? `#${element.id}` : `.${element.className}`;

        if (!(elementSelector in originalNumbers)) {
            originalNumbers[elementSelector] = {
                originalValue: originalContent,
                elementSelector: elementSelector
            };
            existingSelectors.add(elementSelector);
        }
    });

    setOriginalFrameNumbers(originalNumbers);

    elements.forEach(element => {
        const originalContent = element.innerHTML;
        const formattedContent = originalContent.replace(/-?\d+(\.\d+)?/g, match => {
            let number = parseFloat(match);

            if (isNaN(number)) {
                console.warn(`Invalid number found: ${match}`);
                return match;
            }

            if (notationType === 'normal') {
                return number;
            } else if (notationType === 'normalCondensed') {
                if (element.id === 'cashStat') {
                    const formatNumber = (num, divisor) => {
                        const result = num / divisor;
                        const fraction = result % 1;
                        return (fraction === 0 || fraction === 0.1 || fraction === 0.9) 
                            ? result.toFixed(0) 
                            : result.toFixed(1);
                    };
                
                    if (number >= 1e13) {
                        let exponent = Math.floor(Math.log10(number));
                        const scaledNumber = number / Math.pow(10, exponent);
                        const fraction = scaledNumber % 1;
                        return `${(fraction === 0 || fraction === 0.1 || fraction === 0.9 
                            ? scaledNumber.toFixed(0) 
                            : scaledNumber.toFixed(1))}e${exponent}`;
                    } else if (number >= 1e12) {
                        return `${formatNumber(number, 1e12)}e12`;
                    } else if (number >= 1e9) {
                        return `${formatNumber(number, 1e9)}B`;
                    } else if (number >= 1e6) {
                        return `${formatNumber(number, 1e6)}M`;
                    } else if (number >= 1e3) {
                        return `${formatNumber(number, 1e3)}K`;
                    } else {
                        return Math.round(number).toFixed(0);
                    }
                }                
            
                if (number >= 1e13) {
                    let exponent = Math.floor(Math.log10(number));
                    return `${(number / Math.pow(10, exponent)).toFixed(1)}e${exponent}`;
                } else if (number >= 1e12) {
                    return `${(number / 1e12).toFixed(1)}e12`;
                } else if (number >= 1e9) {
                    return `${(number / 1e9).toFixed(1)}B`;
                } else if (number >= 1e6) {
                    return `${(number / 1e6).toFixed(1)}M`;
                } else if (number >= 1e3) {
                    return `${(number / 1e3).toFixed(1)}K`;
                } else {
                    if (element.classList.contains('sell-fuse-money')) {
                        sellRowPresent = true;
                        setTempSellRowValue(originalContent);
                    }
                    if (element.dataset.conditionCheck === 'techUnlock') {
                        return number;
                    } else {
                        return number.toFixed(0);
                    }
                }
            }                       
        });

        element.innerHTML = formattedContent;
    });

    if (sellRowPresent) { // workaround formatter for complex string on selling and fusing row
        complexSellStringFormatter();
    }   
}

function complexSellStringFormatter() {
    const sellRowQuantityElement = document.querySelector('.sell-fuse-money').parentElement;
    const match = sellRowQuantityElement.innerHTML.match(/>(.*?)</);

    if (match) {
        const beforeMatch = sellRowQuantityElement.innerHTML.slice(0, match.index + 1);
        const afterMatch = sellRowQuantityElement.innerHTML.slice(match.index + match[0].length - 1);
        const newContent = getTempSellRowValue();
        
        sellRowQuantityElement.innerHTML = beforeMatch + newContent + afterMatch;

        if (sellRowQuantityElement.innerHTML.includes('-&gt; ')) {
            const match = sellRowQuantityElement.innerHTML.match(/&gt; (-?\d+)(\s|$)/);
            if (match) {
                const capturedNumber = parseFloat(match[1]);
                let formatted;
                if (capturedNumber < 0) {
                    formatted = 0;
                } else {
                    if (capturedNumber >= 1e13) {
                        let exponent = Math.floor(Math.log10(capturedNumber));
                        formatted = `${(capturedNumber / Math.pow(10, exponent)).toFixed(1)}e${exponent}`;
                    } else if (capturedNumber >= 1e12) {
                        formatted = `${(capturedNumber / 1e12).toFixed(1)}e12`;
                    } else if (capturedNumber >= 1e9) {
                        formatted = `${(capturedNumber / 1e9).toFixed(1)}B`;
                    } else if (capturedNumber >= 1e6) {
                        formatted = `${(capturedNumber / 1e6).toFixed(1)}M`;
                    } else if (capturedNumber >= 1e3) {
                        formatted = `${(capturedNumber / 1e3).toFixed(1)}K`;
                    } else {
                        formatted = capturedNumber.toFixed(0);
                    }
                }
                const beforeMatch = sellRowQuantityElement.innerHTML.slice(0, match.index + 5);
                const afterMatch = sellRowQuantityElement.innerHTML.slice(match.index + match[0].length - 1);
                const updatedHTML = beforeMatch + formatted + afterMatch;
                sellRowQuantityElement.innerHTML = updatedHTML;
            }
        }
    }
}

function sortRowsByRenderPosition(rows, mainKey) {
    const adjustedPositions = [];

    rows.forEach(item => {
        let alreadyAdjusted = false;
        const currentPos = getResourceDataObject(mainKey, [item.techName, 'idForRenderPosition']);

        if (mainKey === 'techs') {
            const researchButton = item.row.querySelector('.input-container button');
            if (researchButton.textContent === "Researched" && currentPos < 1000) {
                adjustedPositions.push({
                    ...item,
                    adjustedPos: currentPos + 1000
                });
                alreadyAdjusted = true;
            }

            if (!researchButton.classList.contains('red-disabled-text')) {
                adjustedPositions.push({
                    ...item,
                    adjustedPos: currentPos - 1000
                });
                alreadyAdjusted = true;
            }
        }

        if (!alreadyAdjusted) {
            if (item.row.classList.contains('invisible')) {
                adjustedPositions.push({
                    ...item,
                    adjustedPos: currentPos + 1000
                });
            } else {
                if (currentPos > 1000) {
                    adjustedPositions.push({
                        ...item,
                        adjustedPos: currentPos - 1000
                    });
                } else {
                    adjustedPositions.push({
                        ...item,
                        adjustedPos: currentPos
                    });
                }
            }
        }

    });

    return adjustedPositions.sort((a, b) => a.adjustedPos - b.adjustedPos);
}

function updateClassesInRowsToRender() {
    const unsortedRows = getTemporaryRowsRepo('rows');

    unsortedRows.forEach(rowObj => { 
        const domElement = document.getElementById(rowObj.row.id);
        if (domElement) {
            const classList = domElement.classList;
            rowObj.classList = Array.from(classList);
        }
    });

    setTemporaryRowsRepo('noChange', unsortedRows);
}

// export function toggleTimer(key, buttonId) {
//     const timer = timerManager.getTimer(key);
//     if (timer) {
//         const button = document.getElementById(buttonId);
//         if (timer.timerId) {
//             timer.stop();
//             button.textContent = `Resume ${capitaliseString(key)}`;
//         } else {
//             timer.start();
//             button.textContent = `Pause ${capitaliseString(key)}`;
//         }
//     }
// }

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