import {
    getStellarScannerRange,
    getDestinationStarScanned,
    setDestinationStarScanned,
    setStellarScannerBuilt,
    getStellarScannerBuilt,
    setStarShipStatus,
    getStarShipStatus,
    getStarShipTravelSpeed,
    getStarTravelDuration,
    setStarTravelDuration,
    getStarShipTravelling,
    setStarShipTravelling,
    setStarShipBuilt,
    getAscendencyPoints,
    setAscendencyPoints,
    getRocketUserName,
    setRocketUserName,
    getCanFuelRockets,
    setCanFuelRockets,
    setRocketDirection,
    getRocketDirection,
    getBoostRate,
    getIsAntimatterBoostActive,
    setIsAntimatterBoostActive,
    getNormalMaxAntimatterRate,
    changeAsteroidArray,
    setAntimatterUnlocked,
    getAntimatterUnlocked,
    setMiningObject,
    getMiningObject,
    setTimeLeftUntilTravelToDestinationStarTimerFinishes,
    getTimeLeftUntilTravelToDestinationStarTimerFinishes,
    setTimeLeftUntilRocketTravelToAsteroidTimerFinishes,
    getTimeLeftUntilRocketTravelToAsteroidTimerFinishes,
    getRocketTravelSpeed,
    getDestinationAsteroid,
    setDestinationAsteroid,
    getRocketTravelDuration,
    setRocketTravelDuration,
    setRocketReadyToTravel,
    getRocketReadyToTravel,
    getCurrentlyTravellingToAsteroid,
    setCurrentlyTravellingToAsteroid,
    setAsteroidTimerCanContinue,
    getAsteroidTimerCanContinue,
    setStarInvestigationTimerCanContinue,
    getStarInvestigationTimerCanContinue,
    getAsteroidArray,
    setAsteroidArray,
    getGameCostMultiplier,
    setCurrentAsteroidSearchTimerDurationTotal,
    getCurrentAsteroidSearchTimerDurationTotal,
    getCurrentInvestigateStarTimerDurationTotal,
    setCurrentInvestigateStarTimerDurationTotal,
    getTelescopeReadyToSearch,
    setTelescopeReadyToSearch,
    setTimeLeftUntilAsteroidScannerTimerFinishes,
    getTimeLeftUntilAsteroidScannerTimerFinishes,
    getTimeLeftUntilStarInvestigationTimerFinishes,
    setTimeLeftUntilStarInvestigationTimerFinishes,
    setCurrentlySearchingAsteroid,
    getCurrentlySearchingAsteroid,
    setCurrentlyInvestigatingStar,
    getCurrentlyInvestigatingStar,
    setBaseSearchAsteroidTimerDuration,
    getBaseSearchAsteroidTimerDuration,
    setLaunchedRockets,
    getLaunchedRockets,
    setWeatherEfficiencyApplied,
    getWeatherEfficiencyApplied,
    getCheckRocketFuellingStatus,
    setCheckRocketFuellingStatus,
    getRocketsFuellerStartedArray,
    setRocketsFuellerStartedArray,
    setStarShipModulesBuilt,
    getStarShipModulesBuilt,
    setRocketsBuilt,
    getRocketsBuilt,
    getWeatherEffectOn,
    setWeatherEffectOn,
    getSaveExportCloudFlag,
    setSaveExportCloudFlag,
    getSaveData,
    getNewsTickerSetting,
    getWeatherEffectSetting,
    setTechTreeDrawnYet,
    getTechTreeDrawnYet,
    setUpcomingTechArray,
    getUpcomingTechArray,
    getSavedYetSinceOpeningSaveDialogue,
    setSavedYetSinceOpeningSaveDialogue,
    setLastSavedTimeStamp,
    getLastSavedTimeStamp,
    setCurrentPrecipitationRate,
    getCurrentPrecipitationRate,
    getCurrentStarSystemWeatherEfficiency,
    setCurrentStarSystemWeatherEfficiency,
    getCurrentStarSystem,
    setCurrentStarSystem,
    getTrippedStatus,
    setTrippedStatus,
    setRanOutOfFuelWhenOn,
    getRanOutOfFuelWhenOn,
    setBuildingTypeOnOff,
    getBuildingTypeOnOff,
    setActivatedFuelBurnObject,
    getActivatedFuelBurnObject,
    setConstituentPartsObject,
    getConstituentPartsObject,
    setPowerOnOff,
    getPowerOnOff,
    setTotalEnergyUse,
    getTotalEnergyUse,
    getBuildingTypes,
    getTechRenderCounter,
    setTechRenderCounter,
    setTechRenderChange,
    getTechRenderChange,
    setTempRowValue,
    getTempRowValue,
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
    setSaleResourcePreview,
    setCreateCompoundPreview,
    setSaleCompoundPreview,
    getItemsToIncreasePrice,
    setItemsToIncreasePrice,
    getItemsToDeduct,
    setItemsToDeduct,
    getCurrentOptionPane,
    getIncreaseStorageFactor,
    setGameStateVariable,  
    getGameVisibleActive, 
    getElements, 
    gameState, 
    getCurrentTab,
    getRevealedTechArray,
    getTechUnlockedArray,
    getResourceSalePreview,
    getCompoundSalePreview,
    getCompoundCreatePreview,
    getNotationType,
    getTechTreeData,
    getSaveName,
    setHasAntimatterSvgRightBoxDataChanged,
    setAntimatterSvgEventListeners,
    getCanTravelToAsteroids,
    getCurrentDestinationDropdownText,
    getBaseInvestigateStarTimerDuration,
    getStarVisionIncrement,
    getStarVisionDistance,
    setStarVisionDistance,
    getBackgroundAudio,
    getStarShipBuilt,
    getDestinationStar,
    setStarShipArrowPosition,
    NUMBER_OF_STARS,
    STAR_FIELD_SEED,
    getStarMapMode,
    getStarShipArrowPosition,
    getCurrentStarObject
} from './constantsAndGlobalVars.js';

import {
    getStarSystemDataObject,
    setStarSystemDataObject,
    getAutoBuyerTierLevel,
    getResourceDataObject,
    setResourceDataObject,
    getStarSystemWeather,
    setStarSystemWeather,
    getRocketPartsNeededInTotalPerRocket,
    getRocketParts,
    getStarShipPartsNeededInTotalPerModule
} from "./resourceDataObject.js";

import { 
    updateContent,
    sortTechRows,
    showNotification,
    showTabsUponUnlock,
    getTimeInStatCell,
    updateDynamicUiContent,
    checkOrderOfTabs,
    showNewsTickerMessage,
    startWeatherEffect,
    stopWeatherEffect,
    switchBatteryStatBarWhenBatteryBought,
    setBatteryIndicator,
    drawAntimatterFlowDiagram,
    switchFuelGaugeWhenFuellerBought,
    showWeatherNotification,
    generateStarfield,
    drawStarConnectionDrawings,
    createStarDestinationRow,
    spaceTravelButtonHideAndShowDescription,
    removeStarConnectionTooltip,
    removeOrbitCircle,
    drawOrbitCircle,
    drawStarShipArrowhead
} from "./ui.js";

import { 
    capitaliseString,
    capitaliseWordsWithRomanNumerals
 } from './utilityFunctions.js';

 import { newsTickerContent } from './descriptions.js';

 import { initializeAutoSave, saveGame } from './saveLoadGame.js';
 import { drawTab5Content } from './drawTab5Content.js';
 import { sfxPlayer, weatherAmbienceManager, backgroundAudio } from './audioManager.js';
 import { timerManager } from './timerManager.js';

//--------------------------------------------------------------------------------------------------------
export function startGame() {
    setGameState(getGameVisibleActive());
    updateContent('Resources', `tab1`, 'intro');
    initializeAutoSave();
    startInitialTimers();
    //startSpaceRelatedTimers();
    startNewsTickerTimer();
    gameLoop();
}

export function startSpaceRelatedTimers(value) { //not active
    startSearchAsteroidTimer([getTimeLeftUntilAsteroidScannerTimerFinishes(), value]);
    startInvestigateStarTimer([getTimeLeftUntilStarInvestigationTimerFinishes(), value]);
    for (let i = 1; i <= 4; i++) {
        startTravelToAndFromAsteroidTimer([getTimeLeftUntilRocketTravelToAsteroidTimerFinishes('rocket' + i), value], 'rocket' + i, getRocketDirection('rocket' + i));
    }
    startTravelToDestinationStarTimer([getTimeLeftUntilTravelToDestinationStarTimerFinishes(), value]);
}

export async function gameLoop() {
    if (gameState === getGameVisibleActive()) {
        backgroundAudio.update();
        weatherAmbienceManager.update();
        const elements = document.querySelectorAll('.notation');

        showHideDynamicUiContent();
        updateDynamicUiContent();
        showTabsUponUnlock();
        checkOrderOfTabs();
        
        setEnergyUse();

        const resourceNames = Object.keys(getResourceDataObject('resources'));
        const resourceTierPairs = [];
        resourceNames.forEach(resourceName => {
            for (let tier = 1; tier <= 4; tier++) {
                resourceTierPairs.push([resourceName, tier]);
            }
        });

        const compoundNames = Object.keys(getResourceDataObject('compounds'));
        const compoundTierPairs = [];
        compoundNames.forEach(compoundName => {
            for (let tier = 1; tier <= 4; tier++) {
                compoundTierPairs.push([compoundName, tier]);
            }
        });

        addPrecipitationResource();

        if (getCurrentStarSystemWeatherEfficiency()[2] !== 'rain' && getCurrentStarSystemWeatherEfficiency()[2] !== 'volcano') {
            stopWeatherEffect();
            setWeatherEffectOn(false);
        }
        
        let allQuantities = getAllQuantities();
        allQuantities = normalizeAllQuantities(allQuantities);
        const allStorages = getAllStorages();
        const allElements = getAllElements(resourceTierPairs, compoundTierPairs);
        const allDescElements = getAllDynamicDescriptionElements(resourceTierPairs, compoundTierPairs);
        updateRates();
        updateUIQuantities(allQuantities, allStorages, allElements, allDescElements);
        
        updateStats();
        updateRocketNames();
        checkIfStarShipBuilt();

        if (getItemsToDeduct() && Object.keys(getItemsToDeduct()).length > 0) {
            checkAndDeductResources();
        }

        if (getItemsToIncreasePrice() && Object.keys(getItemsToIncreasePrice()).length > 0) {
            checkAndIncreasePrices();
        }

        const elementsEnergy = document.querySelectorAll('.energy-check');
        elementsEnergy.forEach((elementEnergyCheck) => {
            checkStatusAndSetTextClasses(elementEnergyCheck);
        });

        const elementsFuel = document.querySelectorAll('.fuel-check');
        elementsFuel.forEach((elementFuelCheck) => {
            checkStatusAndSetTextClasses(elementFuelCheck);
        });

        const elementsItemsCheck = document.querySelectorAll('.resource-cost-sell-check, .compound-cost-sell-check');
        elementsItemsCheck.forEach((elementItemCheck) => {
            checkStatusAndSetTextClasses(elementItemCheck);
        });

        const elementsStarInfoRowCheck = document.querySelectorAll('[class*="travel-starship"]');
        elementsStarInfoRowCheck.forEach((elementStarInfoRowCheck) => {
            checkStatusAndSetTextClasses(elementStarInfoRowCheck);
        });

        starChecks();
        starShipUiChecks();

        handlePowerAllButtonState();
        checkPowerBuildingsFuelLevels();
        checkPowerForSpaceTelescopeTimer(['searchAsteroidTimer', 'investigateStarTimer']);

        monitorTechTree();
        
        const revealRowsCheck = document.querySelectorAll('.option-row');
        revealRowsCheck.forEach((revealRowCheck) => {
            monitorRevealRowsChecks(revealRowCheck);
        });

        getBuildingTypes().forEach(type => {
            checkAndRevealNewBuildings(type);
        });

        monitorRevealResourcesCheck();
        monitorRevealCompoundsCheck();

        if (getAntimatterUnlocked() && getCurrentTab()[1] === 'Space Mining') {
            if (getElements().miningOption.parentElement.parentElement.classList.contains('invisible')) {
                getElements().miningOption.parentElement.parentElement.classList.remove('invisible');
            }
        }

        updateAllSalePricePreviews();
        updateAllCreatePreviews();

        while (deferredActions.length > 0) {
            const runDeferredJobs = deferredActions.shift();
            runDeferredJobs();
        }

        if (getCurrentOptionPane() === 'technology') {
            updateClassesInRowsToRender();

            const sortedRows = sortRowsByRenderPosition(getTemporaryRowsRepo('rows'), 'techs');
            const containerToRenderTo = getTemporaryRowsRepo('container');
        
            if (getTechRenderChange()) {
                setTechRenderCounter(getTechRenderCounter() + 1);
            
                if (getTechRenderCounter() >= 150) {
                    sortedRows.forEach(item => containerToRenderTo.appendChild(item.row));
                    setTechRenderChange(false);
                    setTechRenderCounter(0);
                }
            }
        }

        setAllOriginalFrameNumberValues();

        elements.forEach(element => {
            if (document.body.contains(element)) {
                if (element.classList.contains('sell-fuse-money')) {
                    setTempRowValue(element.innerHTML);
                    complexSellStringFormatter(element, getNotationType());
                } else if (element.classList.contains('building-purchase')) {
                    setTempRowValue(element.innerHTML);
                    complexPurchaseBuildingFormatter(element, getNotationType());
                } else {
                    formatAllNotationElements(element, getNotationType());
                }
            }
        });

        fuelRockets();
        updateRocketDescription();

        if (!getSavedYetSinceOpeningSaveDialogue() && getCurrentOptionPane() === 'saving / loading') {
            saveGame('onSaveScreen');
            setSavedYetSinceOpeningSaveDialogue(true);
        } else if (getCurrentOptionPane() === 'saving / loading') {
            if (!getSaveExportCloudFlag()) {
                const saveData = getSaveData();
                const exportSaveArea = document.getElementById('exportSaveArea');
                exportSaveArea.value = saveData;
            } else {
                const saveData = getSaveExportCloudFlag();
                const exportSaveArea = document.getElementById('exportSaveArea');
                exportSaveArea.value = saveData;
            }
        } else {
            setSaveExportCloudFlag(false);
        }

        if (getSavedYetSinceOpeningSaveDialogue && getCurrentOptionPane() !== 'saving / loading') {
            setSavedYetSinceOpeningSaveDialogue(false);
        }

        requestAnimationFrame(gameLoop);
    }
}

function checkIfStarShipBuilt() {
    if (!getStarShipBuilt())  {
        const starShipModules = Object.keys(getResourceDataObject('space', ['upgrades']))
        .filter(module => module.startsWith('ss') && !module.startsWith('ssStellarScanner'));

        const allMandatoryModulesFinished = starShipModules.every(starShipModule => 
            getResourceDataObject('space', ['upgrades', starShipModule, 'finished'])
        );
    
        setStarShipBuilt(allMandatoryModulesFinished);
        if (allMandatoryModulesFinished) {
            showNotification('Star Ship can now be launched!', 'info');
        }
    }

    if (!getStellarScannerBuilt()) {
        const stellarScannerFinished = getResourceDataObject('space', ['upgrades', 'ssStellarScanner', 'finished']) === true;
        setStellarScannerBuilt(stellarScannerFinished);
    }
}

function updateRocketNames() {
    if (getCurrentTab()[1] === 'Space Mining') {
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`rocket${i}`).textContent = getRocketUserName(`rocket${i}`);
        }
    }
}

function showHideDynamicUiContent() {
    if (getCurrentOptionPane() === 'energy storage' || getCurrentOptionPane() === 'power plant' || getCurrentOptionPane() === 'solar power plant' || getCurrentOptionPane() === 'advanced power plant') {
        document.getElementById('energyConsumptionStats').classList.remove('invisible');
    } else {
        document.getElementById('energyConsumptionStats').classList.add('invisible');
    }
}

function addPrecipitationResource() {
    const currentStarSystemPrecipitationCategory = getStarSystemDataObject('stars', [getCurrentStarSystem(), 'precipitationResourceCategory']);
    const currentStarSystemPrecipitationType = getStarSystemDataObject('stars', [getCurrentStarSystem(), 'precipitationType']);
    const precipitationTypeRevealedYet = getTechUnlockedArray().includes(getResourceDataObject(currentStarSystemPrecipitationCategory, [currentStarSystemPrecipitationType, 'revealedBy']));

    let currentStarSystemPrecipitationTypeQuantity = getResourceDataObject(currentStarSystemPrecipitationCategory, [currentStarSystemPrecipitationType, 'quantity']);
    let precipitationStorageAvailable = getResourceDataObject(currentStarSystemPrecipitationCategory, [currentStarSystemPrecipitationType, 'storageCapacity']) > currentStarSystemPrecipitationTypeQuantity;

    if (getCurrentStarSystemWeatherEfficiency()[2] === 'rain' && precipitationTypeRevealedYet && precipitationStorageAvailable) {
        setResourceDataObject(currentStarSystemPrecipitationTypeQuantity + getCurrentPrecipitationRate(), currentStarSystemPrecipitationCategory, [currentStarSystemPrecipitationType, 'quantity']);
        getElements().waterQuantity.textContent = getResourceDataObject(currentStarSystemPrecipitationCategory, [currentStarSystemPrecipitationType, 'quantity']);
    }
}

function checkAndRevealNewBuildings(type) {
    let elements;
    let element;

    switch (type) {
        case 'energy':
            elements = getResourceDataObject('buildings', ['energy', 'upgrades']);
            for (const key in elements) {
                if (elements.hasOwnProperty(key)) {
                    const upgrade = elements[key];
                    const revealedTech = upgrade.revealedBy;
                    if (getTechUnlockedArray().includes(revealedTech)) {
                        const elementUpgradeOptionElement = key + 'Option';
                        document.getElementById(elementUpgradeOptionElement).parentElement.parentElement.classList.remove('invisible');
                    }
                }
            }
            break;
        case 'space':
            element = document.getElementById('launchPad');
            if (getTechUnlockedArray().includes('rocketComposites') && getCurrentTab()[1] === 'Space Mining') {
                element.parentElement.parentElement.classList.remove('invisible');
            } else {
                element.parentElement.parentElement.classList.add('invisible');
            }
            element = document.getElementById('asteroids');
            if (getAsteroidArray().length > 0 && getCurrentTab()[1] === 'Space Mining') {
                element.parentElement.parentElement.classList.remove('invisible');
            } else {
                element.parentElement.parentElement.classList.add('invisible');
            }
            break;
        case 'starShip':
            element = document.getElementById('starShipOption');
            if (getTechUnlockedArray().includes('orbitalConstruction') && getCurrentTab()[1] === 'Interstellar') {
                element.parentElement.parentElement.classList.remove('invisible');
            } else {
                element.parentElement.parentElement.classList.add('invisible');
            }
            if (getCurrentOptionPane() === 'star ship') {
                const ssModules = {
                    ssStructural: 'orbitalConstruction',
                    ssLifeSupport: 'lifeSupportSystems',
                    ssAntimatterEngine: 'antimatterEngines',
                    ssFleetHangar: 'starshipFleets',
                    ssStellarScanner: 'stellarScanners',
                };
                
                Object.keys(ssModules).forEach(ssModule => {
                    const rowElement = document.getElementById(`space${capitaliseString(ssModule)}BuildRow`);
                    if (rowElement) {
                        if (getTechUnlockedArray().includes(ssModules[ssModule]) && !getStarShipBuilt()) {
                            rowElement.classList.remove('invisible');
                        } else {
                            rowElement.classList.add('invisible');
                        }
                    }
                });
            }
            break;
    }
}

function updateStats() {
    //stat1
    const cash = getResourceDataObject('currency', ['cash']);
    if (getCurrencySymbol() !== "€") {
        getElements().cashStat.textContent = `${getCurrencySymbol()}${cash.toFixed(2)}`;
    } else {
        getElements().cashStat.textContent = `${cash.toFixed(2) + getCurrencySymbol()}`;
    }

    //stat2
    updateEnergyStat(document.getElementById('stat2'));

    //stat3
    checkStatusAndSetTextClasses(document.getElementById('stat3'));

    //stat4
    const batteryLevel = switchBatteryStatBarWhenBatteryBought();

    if (batteryLevel || batteryLevel === 0) {
        setBatteryIndicator(batteryLevel);
    }

    //stat5
    updateAntimatterStat();

    //stat6
    updateAP();
    
    //stat8
    getTimeInStatCell();
}

function updateAP() {
    const statLabelElement = document.getElementById('stat6').closest('.stat-cell').querySelector('.stat-label');
    statLabelElement.innerHTML = 'AP:';
    if (getAscendencyPoints() > 0) {
        document.getElementById('stat6').innerHTML = `<span class="green-ready-text">${getAscendencyPoints()}</span>`;
    } else {
        document.getElementById('stat6').innerHTML = `<span class="red-disabled-text">0</span>`;
    }
}

function updateAntimatterStat() {
    const statLabelElement = document.getElementById('stat5').closest('.stat-cell').querySelector('.stat-label');
    if (getAntimatterUnlocked()) {
        statLabelElement.innerHTML = 'Antimatter:'
        const antimatterTotalQuantity = Math.floor(getResourceDataObject('antimatter', ['quantity']));
        document.getElementById('stat5').innerHTML = `<span class="green-ready-text">${antimatterTotalQuantity}</span>`;
    } else {
        statLabelElement.innerHTML = '???';
        document.getElementById('stat5').innerHTML = `<span class="red-disabled-text">???</span>`;
    }
}

function setRevealedResources(resource) {
    const resourcePairs = [
        ['hydrogen', 'helium'],
        ['helium', 'carbon'],
        ['carbon', 'neon'],
        ['carbon', 'sodium'],
        ['neon', 'oxygen'],
        ['oxygen', 'silicon'],
        ['silicon', 'iron']
    ];

    resourcePairs.forEach(pair => {
        if (pair[0] === resource) {
            setResourceDataObject(true, 'resources', [pair[1], 'revealedYet']);
        }
    });
}

export function fuseResource(resource, fuseTargets) {
    setRevealedResources(resource);
    
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
            let fusionEfficiency = 1;

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
                    'info',
                    5000
                );
            } else { ;
                
                lostQuantity = Math.max(realAmountToAdd - availableStorageFuseTo, 0);
                showNotification(
                    `Should Fuse ${amountToDeductFromResource} ${resourceString} into ${Math.floor(amountToDeductFromResource * ratio)} ${fuseToString}. Max available storage is for ${availableStorageFuseTo}.  Of those, ${energyLossFuseToQuantity} lost due to sub-optimal fusion efficiency. So receive ${realAmountToAdd - lostQuantity} ${fuseToString}`,
                    'warning',
                    5000
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
    const extractedValue = saleData.split('>')[1].split('<')[0].trim();
    let cashRaised;

    if (getCurrencySymbol() === "€") {
        cashRaised = parseFloat(extractedValue.replace('€', '').replace(',', ''));
    } else {
        cashRaised = parseFloat(extractedValue.slice(1).replace(',', '')); // Remove the currency symbol and convert
    }
    const quantityToDeduct = parseInt(saleData.match(/\((\d+)/)[1], 10);

    if (getCurrencySymbol() === "€") {
        showNotification(
            `You sold ${quantityToDeduct} ${capitaliseString(resource)} for ${cashRaised}${getCurrencySymbol()}!`,
            'info'
        );
    } else {
        showNotification(
            `You sold ${quantityToDeduct} ${capitaliseString(resource)} for ${getCurrencySymbol()}${cashRaised}!`,
            'info'
        );
    }

    setResourceDataObject(resourceQuantity - quantityToDeduct, 'resources', [resource, 'quantity']);

    if (getResourceDataObject('resources', [resource, 'quantity']) < 1) {
        setResourceDataObject(0, 'resources', [resource, 'quantity']);
    }

    setResourceDataObject(currentCash + cashRaised, 'currency', ['cash']);
}

export function createCompound(compound) {
    const constituentPartsObject = getConstituentPartsObject();
    const existingCompoundQuantity = getResourceDataObject('compounds', [compound, 'quantity']);
    const compoundMaxStorage = getResourceDataObject('compounds', [compound, 'storageCapacity']);

    let newQuantity = existingCompoundQuantity + constituentPartsObject.compoundToCreateQuantity;
    let exceededDifference = 0;

    if (newQuantity > compoundMaxStorage) {
        exceededDifference = newQuantity - compoundMaxStorage;
        newQuantity = compoundMaxStorage;
    }

    setResourceDataObject(newQuantity, 'compounds', [compound, 'quantity']);

    let notificationParts = [];

    for (let i = 1; i <= 4; i++) {
        const partNameKey = `constituentPartName${i}`;
        const partQuantityKey = `constituentPartQuantity${i}`;
        const partName = constituentPartsObject[partNameKey];
        const partQuantity = constituentPartsObject[partQuantityKey];

        if (partName && partQuantity > 0) {
            let type;

            if (getResourceDataObject('resources')[partName]) {
                type = 'resources';
            } 
            else if (getResourceDataObject('compounds')[partName]) {
                type = 'compounds';
            } 
            else {
                type = 'error';
            }

            setResourceDataObject(
                getResourceDataObject(type, [partName, 'quantity']) - partQuantity,
                type, 
                [partName, 'quantity']
            );

            notificationParts.push(`${partQuantity} ${capitaliseString(partName)}`);
        }
    }

    const compoundCreatedQuantity = constituentPartsObject.compoundToCreateQuantity;
    const compoundCreatedName = capitaliseString(compound);

    if (exceededDifference > 0) {
        showNotification(
            `You created ${compoundCreatedQuantity} ${compoundCreatedName} from ${notificationParts.join(', ')} but ${exceededDifference} ${compoundCreatedName} was wasted due to storage limit being exceeded.`,
            'warning'
        );
    } else {
        showNotification(
            `You created ${compoundCreatedQuantity} ${compoundCreatedName} from ${notificationParts.join(', ')}`,
            'info'
        );
    }
}

export function sellCompound(compound) {
    const resourceQuantity = getResourceDataObject('compounds', [compound, 'quantity']);
    const saleData = getCompoundSalePreview(compound);

    const currentCash = getResourceDataObject('currency', ['cash']);
    let extractedValue = saleData.split('>')[1].split('<')[0].trim();

    let cashRaised;

    if (getCurrencySymbol() === "€") {
        cashRaised = parseFloat(extractedValue.replace('€', '').replace(',', ''));
    } else {
        cashRaised = parseFloat(extractedValue.slice(1).replace(',', ''));
    }

    const quantityToDeduct = parseInt(saleData.match(/\((\d+)/)[1], 10);

    setResourceDataObject(resourceQuantity - quantityToDeduct, 'compounds', [compound, 'quantity']);

    if (getResourceDataObject('compounds', [compound, 'quantity']) < 1) {
        setResourceDataObject(0, 'compounds', [compound, 'quantity']);
    }

    setResourceDataObject(currentCash + cashRaised, 'currency', ['cash']);

    if (getCurrencySymbol() === "€") {
        showNotification(
            `You sold ${quantityToDeduct} ${capitaliseString(compound)} for ${cashRaised}${getCurrencySymbol()}!`,
            'info'
        );
    } else {
        showNotification(
            `You sold ${quantityToDeduct} ${capitaliseString(compound)} for ${getCurrencySymbol()}${cashRaised}!`,
            'info'
        );
    }
}

function updateAllCreatePreviews() {
    const currentScreen = getCurrentOptionPane();
    const compounds = getResourceDataObject('compounds');
   
    for (const compound in compounds) {   
        if (compound === currentScreen) {
            const dropDownElementId = compound + "CreateSelectQuantity";

            setCreateCompoundPreview(currentScreen, document.getElementById(dropDownElementId).querySelector('div.dropdown').innerText);
                  
            const createPreviewString = getCompoundCreatePreview(compound);
            let cleanedString = cleanString(createPreviewString);

            const createPreviewElementId = compounds[compound]?.createPreviewElement;
            const createPreviewElement = document.getElementById(createPreviewElementId);
    
            if (createPreviewElement) {
                createPreviewElement.innerHTML = cleanedString;
            }
        }
    }
}

function updateAllSalePricePreviews() {
    const currentScreen = getCurrentOptionPane();
    const resources = getResourceDataObject('resources');
    const compounds = getResourceDataObject('compounds');

    for (const resource in resources) {
        const fuseTo1 = resources[resource]?.['fuseTo1'];
        const fuseTo2 = resources[resource]?.['fuseTo2'];
    
        if (resource === currentScreen) {
            const dropDownElementId = resource + "SellSelectQuantity";

            setSaleResourcePreview(currentScreen, document.getElementById(dropDownElementId).querySelector('div.dropdown').innerText, fuseTo1, fuseTo2);
                  
            const salePreviewString = getResourceSalePreview(resource);
            let cleanedString = cleanString(salePreviewString);

            const salePreviewElementId = resources[resource]?.salePreviewElement;
            const salePreviewElement = document.getElementById(salePreviewElementId);
    
            if (salePreviewElement) {
                salePreviewElement.innerHTML = cleanedString;
            }
        }
    }
    
    for (const compound in compounds) {   
        if (compound === currentScreen) {
            const dropDownElementId = compound + "SellSelectQuantity";

            setSaleCompoundPreview(currentScreen, document.getElementById(dropDownElementId).querySelector('div.dropdown').innerText);
                  
            const salePreviewString = getCompoundSalePreview(compound);
            let cleanedString = cleanString(salePreviewString);

            const salePreviewElementId = compounds[compound]?.salePreviewElement;
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
    } else if (string.includes(" ()")) {
        return string.replace(" ()", "");
    } else {
        return string;
    }
}

function checkAndIncreasePrices() {
    const priceIncreaseObject = getItemsToIncreasePrice();

    for (const key in priceIncreaseObject) {
        if (key === "") {
            delete priceIncreaseObject[key];
        }
    }

    for (const priceIncrease in priceIncreaseObject) {
        if (priceIncreaseObject.hasOwnProperty(priceIncrease)) {

            if (getCanAffordDeferred()) {
                const { currentPrice, setPriceTarget, typeOfResourceCompound } = priceIncreaseObject[priceIncrease];
                if (setPriceTarget.startsWith('science')) {
                    setNewItemPrice(currentPrice, setPriceTarget, null, null, null);
                } else if (setPriceTarget.startsWith('power') || setPriceTarget.startsWith('battery') || setPriceTarget.startsWith('rocket') || setPriceTarget.startsWith('ss')) { //add new building types if needed will have a bug here if add any more it will go to the else block
                    if (priceIncrease === "cash") {
                        setNewItemPrice(currentPrice, setPriceTarget, null, null, priceIncrease);
                    } else {
                        setNewItemPrice(currentPrice, setPriceTarget, null, null, priceIncreaseObject);
                    }
                } else {
                    const tierMatch = setPriceTarget.match(new RegExp(`${priceIncrease}AB(\\d+)Price`));
                    if (tierMatch && tierMatch[1]) {
                        const tier = parseInt(tierMatch[1], 10);
                        setNewItemPrice(currentPrice, setPriceTarget, tier, typeOfResourceCompound, null);
                    }
                }
            }
        }
    }

    setItemsToIncreasePrice('clear');
}

function setNewItemPrice(currentPrice, elementName, tier, typeOfResourceCompound, optionalResource) {
    let resource1Price = 0;
    let resource2Price = 0;
    let resource3Price = 0;

    let resource1Name = '';
    let resource2Name = '';
    let resource3Name = '';

    let resource1Category = '';
    let resource2Category = '';
    let resource3Category = '';

    if (elementName) {
        const newCurrencyPrice = Math.ceil(currentPrice * getGameCostMultiplier());

        if (optionalResource && optionalResource !== 'cash') {
            for (const item in optionalResource) {
                if (optionalResource.hasOwnProperty(item) && item !== 'cash') {
                    const resource = optionalResource[item];
                    const resourceOrder = resource.resourceOrder;
    
                    if (resourceOrder === 'resource1Price') {
                        resource1Price = resource.currentPrice;
                        resource1Name = item;
                        resource1Category = resource.typeOfResourceCompound;
                    } else if (resourceOrder === 'resource2Price') {
                        resource2Price = resource.currentPrice;;
                        resource2Name = item;
                        resource2Category = resource.typeOfResourceCompound;
                    } else if (resourceOrder === 'resource3Price') {
                        resource3Price = resource.currentPrice;;
                        resource3Name = item;
                        resource3Category = resource.typeOfResourceCompound;
                    }
                }
            }
        }

        let newResource1Price = resource1Price > 0 ? Math.ceil(resource1Price * getGameCostMultiplier()) : 0;
        let newResource2Price = resource2Price > 0 ? Math.ceil(resource2Price * getGameCostMultiplier()) : 0;
        let newResource3Price = resource3Price > 0 ? Math.ceil(resource3Price * getGameCostMultiplier()) : 0;

        if (newResource1Price > 0) {
            newResource1Price = [newResource1Price, resource1Name, resource1Category];
        }

        if (newResource2Price > 0) {
            newResource2Price = [newResource2Price, resource2Name, resource2Category];
        }

        if (newResource3Price > 0) {
            newResource3Price = [newResource3Price, resource3Name, resource3Category];
        }
        

        if (elementName.startsWith('science')) {
            const strippedElementName = elementName.slice(0, -5);        
            setResourceDataObject(newCurrencyPrice, 'research', ['upgrades', strippedElementName, 'price']);
        } else if (elementName.startsWith('power') || elementName.startsWith('battery')) {
            const strippedElementName = elementName.slice(0, -5);
            if (optionalResource === 'cash') {
                setResourceDataObject(newCurrencyPrice, 'buildings', ['energy', 'upgrades', strippedElementName, 'price']);
            }        
            if (resource1Price > 0) {
                setResourceDataObject(newResource1Price, 'buildings', ['energy', 'upgrades', strippedElementName, 'resource1Price']);
            }
            if (resource2Price > 0) {
                setResourceDataObject(newResource2Price, 'buildings', ['energy', 'upgrades', strippedElementName, 'resource2Price']);
            }
            if (resource3Price > 0) {
                setResourceDataObject(newResource3Price, 'buildings', ['energy', 'upgrades', strippedElementName, 'resource3Price']);
            }
        } else if (elementName.startsWith('rocket') || elementName.startsWith('ss')) {
            const strippedElementName = elementName.slice(0, -5);
            if (optionalResource === 'cash') {
                setResourceDataObject(newCurrencyPrice, 'space', ['upgrades', strippedElementName, 'price']);
            }        
            if (resource1Price > 0) {
                setResourceDataObject(newResource1Price, 'space', ['upgrades', strippedElementName, 'resource1Price']);
            }
            if (resource2Price > 0) {
                setResourceDataObject(newResource2Price, 'space', ['upgrades', strippedElementName, 'resource2Price']);
            }
            if (resource3Price > 0) {
                setResourceDataObject(newResource3Price, 'space', ['upgrades', strippedElementName, 'resource3Price']);
            }
        } else { //autoBuyer
            const itemName = elementName.replace(/([A-Z])/g, '-$1').toLowerCase().split('-')[0];
            setResourceDataObject(newCurrencyPrice, typeOfResourceCompound, [itemName, 'upgrades', 'autoBuyer', `tier${tier}`, 'price']);       
        }
    }
}

function checkAndDeductResources() {
    const deductObject = getItemsToDeduct();
    let deductAmount;
    let mainKey;

    for (const itemToDeductType in deductObject) {
        if (itemToDeductType === "" || itemToDeductType.includes(',')) {
            delete deductObject[itemToDeductType];
        }
    }

    for (const itemToDeductType in deductObject) {
        if (deductObject.hasOwnProperty(itemToDeductType)) {
            let currentQuantity;
            deductAmount = deductObject[itemToDeductType].deductQuantity;
            const typeOfResourceCompound = deductObject[itemToDeductType].typeOfResourceCompound;

            if (itemToDeductType === 'cash') {
                mainKey = 'currency';
                currentQuantity = getResourceDataObject(mainKey, [itemToDeductType]);
                if (deductAmount >  currentQuantity) {
                    setCanAffordDeferred(false);
                } else {
                    setResourceDataObject(currentQuantity - deductAmount, mainKey, [itemToDeductType]);
                    setCanAffordDeferred(true);
                }
            } else if (itemToDeductType === 'research') {
                mainKey = 'research';
                currentQuantity = getResourceDataObject(mainKey, ['quantity']);
                if (deductAmount >  currentQuantity) {
                    setCanAffordDeferred(false);
                } else {
                    setResourceDataObject(currentQuantity - deductAmount, mainKey, ['quantity']);
                    setCanAffordDeferred(true);
                }
            } else {
                mainKey = typeOfResourceCompound;
                currentQuantity = getResourceDataObject(mainKey, [itemToDeductType, 'quantity']);
                if (deductAmount >  currentQuantity) {
                    setCanAffordDeferred(false);
                } else {
                    setResourceDataObject(currentQuantity - deductAmount, mainKey, [itemToDeductType, 'quantity']);
                    setCanAffordDeferred(true);
                } 
            }
        }
    }

    setItemsToDeduct('clear');
}

function getAllQuantities() {
    const resourceKeys = Object.keys(getResourceDataObject('resources'));
    const compoundKeys = Object.keys(getResourceDataObject('compounds'));
    const rockets = Object.keys(getResourceDataObject('space', ['upgrades']))
    .filter(rocket => rocket.startsWith('rocket'));
    const starshipModules = Object.keys(getResourceDataObject('space', ['upgrades']))
    .filter(module => module.startsWith('ss'));

    const allQuantities = {};

    resourceKeys.forEach(resource => {
        const resourceName = resource;
        allQuantities[resourceName] = getResourceDataObject('resources', [resourceName, 'quantity']);
        allQuantities[`${resourceName}AB1Quantity`] = getResourceDataObject('resources', [resourceName, 'upgrades', 'autoBuyer', 'tier1', 'quantity']);
        allQuantities[`${resourceName}AB2Quantity`] = getResourceDataObject('resources', [resourceName, 'upgrades', 'autoBuyer', 'tier2', 'quantity']);
        allQuantities[`${resourceName}AB3Quantity`] = getResourceDataObject('resources', [resourceName, 'upgrades', 'autoBuyer', 'tier3', 'quantity']);
        allQuantities[`${resourceName}AB4Quantity`] = getResourceDataObject('resources', [resourceName, 'upgrades', 'autoBuyer', 'tier4', 'quantity']);
    });

    compoundKeys.forEach(compound => {
        const compoundName = compound;
        allQuantities[compoundName] = getResourceDataObject('compounds', [compoundName, 'quantity']);
        allQuantities[`${compoundName}AB1Quantity`] = getResourceDataObject('compounds', [compoundName, 'upgrades', 'autoBuyer', 'tier1', 'quantity']);
        allQuantities[`${compoundName}AB2Quantity`] = getResourceDataObject('compounds', [compoundName, 'upgrades', 'autoBuyer', 'tier2', 'quantity']);
        allQuantities[`${compoundName}AB3Quantity`] = getResourceDataObject('compounds', [compoundName, 'upgrades', 'autoBuyer', 'tier3', 'quantity']);
        allQuantities[`${compoundName}AB4Quantity`] = getResourceDataObject('compounds', [compoundName, 'upgrades', 'autoBuyer', 'tier4', 'quantity']);
    });

    if (getCurrentOptionPane() === 'launch pad') {
        rockets.forEach(rocket => {
            allQuantities[rocket] = getResourceDataObject('space', ['upgrades', rocket, 'builtParts']);
        });
    } else if (getCurrentOptionPane() === 'star ship') {
        starshipModules.forEach(module => {
            allQuantities[module] = getResourceDataObject('space', ['upgrades', module, 'builtParts']);
        });
    }       

    allQuantities.energy = getResourceDataObject('buildings', ['energy', 'quantity']);
    allQuantities.battery1 = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery1', 'quantity']);
    allQuantities.battery2 = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery2', 'quantity']);
    allQuantities.battery3 = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery3', 'quantity']);
    allQuantities.powerPlant1 = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant1', 'quantity']);
    allQuantities.powerPlant2 = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant2', 'quantity']);
    allQuantities.powerPlant3 = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant3', 'quantity']);

    allQuantities.spaceTelescope = null;
    allQuantities.launchPad = null;

    allQuantities.research = getResourceDataObject('research', ['quantity']);
    allQuantities.scienceKit = getResourceDataObject('research', ['upgrades', 'scienceKit', 'quantity']);
    allQuantities.scienceClub = getResourceDataObject('research', ['upgrades', 'scienceClub', 'quantity']);
    allQuantities.scienceLab = getResourceDataObject('research', ['upgrades', 'scienceLab', 'quantity']);

    return allQuantities;
}

function getAllStorages() {
    const resourceKeys = Object.keys(getResourceDataObject('resources'));
    const compoundKeys = Object.keys(getResourceDataObject('compounds'));

    const allStorages = {};

    resourceKeys.forEach(resource => {
        const resourceName = resource;
        allStorages[resourceName] = getResourceDataObject('resources', [resourceName, 'storageCapacity']);
    });

    compoundKeys.forEach(compound => {
        const compoundName = compound;
        allStorages[compoundName] = getResourceDataObject('compounds', [compoundName, 'storageCapacity']);
    });

    allStorages.energy = getResourceDataObject('buildings', ['energy', 'storageCapacity']);
    allStorages.battery1 = null;
    allStorages.battery2 = null;
    allStorages.battery3 = null;
    allStorages.powerPlant1 = null;
    allStorages.powerPlant2 = null;
    allStorages.powerPlant3 = null;

    allStorages.spaceTelescope = null;
    allStorages.launchPad = null;

    allStorages.research = null;
    allStorages.scienceKit = null;
    allStorages.scienceClub = null;
    allStorages.scienceLab = null;

    return allStorages;
}

function getAllElements(resourcesArray, compoundsArray) {
    const resourceNames = [];
    const compoundNames = [];

    const allElements = {};

    resourcesArray.forEach(resource => {
        if (!resourceNames.includes(resource[0])) {
            resourceNames.push(resource[0]);
            allElements[resource[0]] = getElements()[`${resource[0]}Quantity`];
            allElements[`${resource[0]}AB1Quantity`] = document.getElementById(`${resource[0]}AB1Quantity`);
            allElements[`${resource[0]}AB2Quantity`] = document.getElementById(`${resource[0]}AB2Quantity`);
            allElements[`${resource[0]}AB3Quantity`] = document.getElementById(`${resource[0]}AB3Quantity`);
            allElements[`${resource[0]}AB4Quantity`] = document.getElementById(`${resource[0]}AB4Quantity`);
        }
    });

    compoundsArray.forEach(compound => {
        if (!compoundNames.includes(compound[0])) {
            compoundNames.push(compound[0]);
            allElements[compound[0]] = getElements()[`${compound[0]}Quantity`];
            allElements[`${compound[0]}AB1Quantity`] = document.getElementById(`${compound[0]}AB1Quantity`);
            allElements[`${compound[0]}AB2Quantity`] = document.getElementById(`${compound[0]}AB2Quantity`);
            allElements[`${compound[0]}AB3Quantity`] = document.getElementById(`${compound[0]}AB3Quantity`);
            allElements[`${compound[0]}AB4Quantity`] = document.getElementById(`${compound[0]}AB4Quantity`);
        }
    });

    allElements.energy = getElements().energyQuantity;
    allElements.battery1 = getElements().battery1Quantity;
    allElements.battery2 = getElements().battery2Quantity;
    allElements.battery3 = getElements().battery3Quantity;
    allElements.powerPlant1 = getElements().powerPlant1Quantity;
    allElements.powerPlant2 = getElements().powerPlant2Quantity;
    allElements.powerPlant3 = getElements().powerPlant3Quantity;

    allElements.spaceTelescope = null;
    allElements.launchPad = null;

    if (getCurrentOptionPane() === 'launch pad') {
        allElements.rocket1BuiltParts = document.getElementById('rocket1BuiltPartsQuantity');
        allElements.rocket1TotalParts = document.getElementById('rocket1TotalPartsQuantity');
    
        allElements.rocket2BuiltParts = document.getElementById('rocket2BuiltPartsQuantity');
        allElements.rocket2TotalParts = document.getElementById('rocket2TotalPartsQuantity');
    
        allElements.rocket3BuiltParts = document.getElementById('rocket3BuiltPartsQuantity');
        allElements.rocket3TotalParts = document.getElementById('rocket3TotalPartsQuantity');
    
        allElements.rocket4BuiltParts = document.getElementById('rocket4BuiltPartsQuantity');
        allElements.rocket4TotalParts = document.getElementById('rocket4TotalPartsQuantity');
    } else {
        allElements.rocket1BuiltParts = null;
        allElements.rocket1TotalParts = null;
    
        allElements.rocket2BuiltParts = null;
        allElements.rocket2TotalParts = null;
    
        allElements.rocket3BuiltParts = null;
        allElements.rocket3TotalParts = null;
    
        allElements.rocket4BuiltParts = null;
        allElements.rocket4TotalParts = null;
    }   
    
    if (getCurrentOptionPane() === 'launch pad') {
        allElements.rocket1BuiltParts = document.getElementById('rocket1BuiltPartsQuantity');
        allElements.rocket1TotalParts = document.getElementById('rocket1TotalPartsQuantity');
    
        allElements.rocket2BuiltParts = document.getElementById('rocket2BuiltPartsQuantity');
        allElements.rocket2TotalParts = document.getElementById('rocket2TotalPartsQuantity');
    
        allElements.rocket3BuiltParts = document.getElementById('rocket3BuiltPartsQuantity');
        allElements.rocket3TotalParts = document.getElementById('rocket3TotalPartsQuantity');
    
        allElements.rocket4BuiltParts = document.getElementById('rocket4BuiltPartsQuantity');
        allElements.rocket4TotalParts = document.getElementById('rocket4TotalPartsQuantity');
    } else {
        allElements.rocket1BuiltParts = null;
        allElements.rocket1TotalParts = null;
    
        allElements.rocket2BuiltParts = null;
        allElements.rocket2TotalParts = null;
    
        allElements.rocket3BuiltParts = null;
        allElements.rocket3TotalParts = null;
    
        allElements.rocket4BuiltParts = null;
        allElements.rocket4TotalParts = null;
    }
    
    if (getCurrentOptionPane() === 'star ship') {
        allElements.ssStructuralBuiltParts = document.getElementById('ssStructuralBuiltPartsQuantity');
        allElements.ssStructuralTotalParts = document.getElementById('ssStructuralTotalPartsQuantity');
    
        allElements.ssLifeSupportBuiltParts = document.getElementById('ssLifeSupportBuiltPartsQuantity');
        allElements.ssLifeSupportTotalParts = document.getElementById('ssLifeSupportTotalPartsQuantity');
    
        allElements.ssAntimatterEngineBuiltParts = document.getElementById('ssAntimatterEngineBuiltPartsQuantity');
        allElements.ssAntimatterEngineTotalParts = document.getElementById('ssAntimatterEngineTotalPartsQuantity');
    
        allElements.ssFleetHangarBuiltParts = document.getElementById('ssFleetHangarBuiltPartsQuantity');
        allElements.ssFleetHangarTotalParts = document.getElementById('ssFleetHangarTotalPartsQuantity');
        
        allElements.ssStellarScannerBuiltParts = document.getElementById('ssStellarScannerBuiltPartsQuantity');
        allElements.ssStellarScannerTotalParts = document.getElementById('ssStellarScannerTotalPartsQuantity');
    } else {
        allElements.ssStructuralBuiltParts = null;
        allElements.ssStructuralTotalParts = null;
    
        allElements.ssLifeSupportBuiltParts = null;
        allElements.ssLifeSupportTotalParts = null;
    
        allElements.ssAntimatterEngineBuiltParts = null;
        allElements.ssAntimatterEngineTotalParts = null;
    
        allElements.ssFleetHangarBuiltParts = null;
        allElements.ssFleetHangarTotalParts = null;

        allElements.ssStellarScannerBuiltParts = null;
        allElements.ssStellarScannerTotalParts = null;
    }    

    allElements.research = getElements().researchQuantity;
    allElements.scienceKit = getElements().scienceKitQuantity;
    allElements.scienceClub = getElements().scienceClubQuantity;
    allElements.scienceLab = getElements().scienceLabQuantity;

    return allElements;
}

function getAllDynamicDescriptionElements(resourceTierPairs, compoundTierPairs) {
    const elements = {};

    resourceTierPairs.forEach(([resourceName, tier]) => {
        const resourceIncreaseStorageDescElement = document.getElementById(`${resourceName}IncreaseContainerSizeDescription`);
        const resourceStoragePrice = getResourceDataObject('resources', [resourceName, 'storageCapacity'] - 1); //to allow power to stay on we leave 1 if upgrading storage

        const resourceAutoBuyerDescElement = document.getElementById(`${resourceName}AutoBuyerTier${tier}Description`);
        const resourceAutoBuyerPrice = getResourceDataObject('resources', [resourceName, 'upgrades', 'autoBuyer', `tier${tier}`, 'price']);

        elements[`${resourceName}IncreaseStorage`] = { element: resourceIncreaseStorageDescElement, price: resourceStoragePrice, string1: `${capitaliseString(resourceName)}` };
        elements[`${resourceName}AutoBuyerTier${tier}`] = { element: resourceAutoBuyerDescElement, price: resourceAutoBuyerPrice, string1: `${capitaliseString(resourceName)}` };
    });

    compoundTierPairs.forEach(([compoundName, tier]) => {
        const compoundIncreaseStorageDescElement = document.getElementById(`${compoundName}IncreaseContainerSizeDescription`);
        const compoundStoragePrice = getResourceDataObject('compounds', [compoundName, 'storageCapacity'] - 1); //to allow power to stay on we leave 1 if upgrading storage

        const resourceAutoBuyerDescElement = document.getElementById(`${compoundName}AutoBuyerTier${tier}Description`);
        const resourceAutoBuyerPrice = getResourceDataObject('compounds', [compoundName, 'upgrades', 'autoBuyer', `tier${tier}`, 'price']);

        elements[`${compoundName}IncreaseStorage`] = { element: compoundIncreaseStorageDescElement, price: compoundStoragePrice, string1: `${capitaliseString(compoundName)}` };
        elements[`${compoundName}AutoBuyerTier${tier}`] = { element: resourceAutoBuyerDescElement, price: resourceAutoBuyerPrice, string1: `${capitaliseString(compoundName)}` };
    });

    const scienceElements = getScienceResourceDescriptionElements();
    const buildingsElements = getBuildingResourceDescriptionElements();
    const spaceMiningElements = getSpaceMiningResourceDescriptionElements();
    const starShipElements = getStarShipResourceDescriptionElements();

    Object.assign(elements, scienceElements, buildingsElements, spaceMiningElements, starShipElements);

    return elements;
}

function getScienceResourceDescriptionElements() {
    const scienceKitBuyDescElement = document.getElementById('scienceKitDescription');
    const scienceKitBuyPrice = getResourceDataObject('research', ['upgrades', 'scienceKit', 'price']);
    const scienceKitBuyResource1Price = getResourceDataObject('research', ['upgrades', 'scienceKit', 'resource1Price'])[0];
    const scienceKitBuyResource2Price = getResourceDataObject('research', ['upgrades', 'scienceKit', 'resource2Price'])[0];
    const scienceKitBuyResource3Price = getResourceDataObject('research', ['upgrades', 'scienceKit', 'resource3Price'])[0];

    const scienceClubBuyDescElement = document.getElementById('openScienceClubDescription');
    const scienceClubBuyPrice = getResourceDataObject('research', ['upgrades', 'scienceClub', 'price']);
    const scienceClubBuyResource1Price = getResourceDataObject('research', ['upgrades', 'scienceClub', 'resource1Price'])[0];
    const scienceClubBuyResource2Price = getResourceDataObject('research', ['upgrades', 'scienceClub', 'resource2Price'])[0];
    const scienceClubBuyResource3Price = getResourceDataObject('research', ['upgrades', 'scienceClub', 'resource3Price'])[0];

    const scienceLabBuyDescElement = document.getElementById('openScienceLabDescription');
    const scienceLabBuyPrice = getResourceDataObject('research', ['upgrades', 'scienceLab', 'price']);
    const scienceLabBuyResource1Price = getResourceDataObject('research', ['upgrades', 'scienceLab', 'resource1Price'])[0];
    const scienceLabBuyResource2Price = getResourceDataObject('research', ['upgrades', 'scienceLab', 'resource2Price'])[0];
    const scienceLabBuyResource3Price = getResourceDataObject('research', ['upgrades', 'scienceLab', 'resource3Price'])[0];

    return {
        scienceKitBuy: { 
            element: scienceKitBuyDescElement, 
            price: scienceKitBuyPrice, 
            resource1Price: scienceKitBuyResource1Price, 
            resource2Price: scienceKitBuyResource2Price, 
            resource3Price: scienceKitBuyResource3Price, 
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('research', ['upgrades', 'scienceKit', 'resource1Price'])[1]),
            string3: capitaliseString(getResourceDataObject('research', ['upgrades', 'scienceKit', 'resource2Price'])[1]),
            string4: capitaliseString(getResourceDataObject('research', ['upgrades', 'scienceKit', 'resource3Price'])[1])
        },
        scienceClubBuy: { 
            element: scienceClubBuyDescElement, 
            price: scienceClubBuyPrice, 
            resource1Price: scienceClubBuyResource1Price, 
            resource2Price: scienceClubBuyResource2Price, 
            resource3Price: scienceClubBuyResource3Price, 
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('research', ['upgrades', 'scienceClub', 'resource1Price'])[1]),
            string3: capitaliseString(getResourceDataObject('research', ['upgrades', 'scienceClub', 'resource2Price'])[1]),
            string4: capitaliseString(getResourceDataObject('research', ['upgrades', 'scienceClub', 'resource3Price'])[1])
        },
        scienceLabBuy: { 
            element: scienceLabBuyDescElement, 
            price: scienceLabBuyPrice, 
            resource1Price: scienceLabBuyResource1Price, 
            resource2Price: scienceLabBuyResource2Price, 
            resource3Price: scienceLabBuyResource3Price, 
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('research', ['upgrades', 'scienceLab', 'resource1Price'])[1]),
            string3: capitaliseString(getResourceDataObject('research', ['upgrades', 'scienceLab', 'resource2Price'])[1]),
            string4: capitaliseString(getResourceDataObject('research', ['upgrades', 'scienceLab', 'resource3Price'])[1])
        }
    };
}

function getBuildingResourceDescriptionElements() {
    const battery1BuyDescElement = document.getElementById('sodiumIonBatteryDescription');
    const battery1BuyPrice = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery1', 'price']);
    const battery1BuyResource1Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery1', 'resource1Price'])[0];
    const battery1BuyResource2Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery1', 'resource2Price'])[0];
    const battery1BuyResource3Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery1', 'resource3Price'])[0];

    const battery2BuyDescElement = document.getElementById('battery2Description');
    const battery2BuyPrice = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery2', 'price']);
    const battery2BuyResource1Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery2', 'resource1Price'])[0];
    const battery2BuyResource2Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery2', 'resource2Price'])[0];
    const battery2BuyResource3Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery2', 'resource3Price'])[0];

    const battery3BuyDescElement = document.getElementById('battery3Description');
    const battery3BuyPrice = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery3', 'price']);
    const battery3BuyResource1Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery3', 'resource1Price'])[0];
    const battery3BuyResource2Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery3', 'resource2Price'])[0];
    const battery3BuyResource3Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery3', 'resource3Price'])[0];

    const powerPlant1BuyDescElement = document.getElementById('powerPlantDescription');
    const powerPlant1BuyPrice = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant1', 'price']);
    const powerPlant1BuyResource1Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant1', 'resource1Price'])[0];
    const powerPlant1BuyResource2Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant1', 'resource2Price'])[0];
    const powerPlant1BuyResource3Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant1', 'resource3Price'])[0];

    const powerPlant2BuyDescElement = document.getElementById('solarPowerPlantDescription');
    const powerPlant2BuyPrice = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant2', 'price']);
    const powerPlant2BuyResource1Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant2', 'resource1Price'])[0];
    const powerPlant2BuyResource2Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant2', 'resource2Price'])[0];
    const powerPlant2BuyResource3Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant2', 'resource3Price'])[0];

    const powerPlant3BuyDescElement = document.getElementById('advancedPowerPlantDescription');
    const powerPlant3BuyPrice = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant3', 'price']);
    const powerPlant3BuyResource1Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant3', 'resource1Price'])[0];
    const powerPlant3BuyResource2Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant3', 'resource2Price'])[0];
    const powerPlant3BuyResource3Price = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant3', 'resource3Price'])[0];


    return {
        battery1Buy: { 
            element: battery1BuyDescElement, 
            price: battery1BuyPrice, 
            resource1Price: battery1BuyResource1Price, 
            resource2Price: battery1BuyResource2Price, 
            resource3Price: battery1BuyResource3Price, 
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'battery1', 'resource1Price'])[1]), 
            string3: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'battery1', 'resource2Price'])[1]), 
            string4: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'battery1', 'resource3Price'])[1]) 
        },
        battery2Buy: { 
            element: battery2BuyDescElement, 
            price: battery2BuyPrice, 
            resource1Price: battery2BuyResource1Price, 
            resource2Price: battery2BuyResource2Price, 
            resource3Price: battery2BuyResource3Price, 
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'battery2', 'resource1Price'])[1]), 
            string3: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'battery2', 'resource2Price'])[1]), 
            string4: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'battery2', 'resource3Price'])[1]) 
        },
        battery3Buy: { 
            element: battery3BuyDescElement, 
            price: battery3BuyPrice, 
            resource1Price: battery3BuyResource1Price, 
            resource2Price: battery3BuyResource2Price, 
            resource3Price: battery3BuyResource3Price, 
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'battery3', 'resource1Price'])[1]), 
            string3: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'battery3', 'resource2Price'])[1]), 
            string4: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'battery3', 'resource3Price'])[1]) 
        },
        powerPlant1Buy: { 
            element: powerPlant1BuyDescElement, 
            price: powerPlant1BuyPrice, 
            resource1Price: powerPlant1BuyResource1Price, 
            resource2Price: powerPlant1BuyResource2Price, 
            resource3Price: powerPlant1BuyResource3Price, 
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant1', 'resource1Price'])[1]), 
            string3: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant1', 'resource2Price'])[1]), 
            string4: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant1', 'resource3Price'])[1]) 
        },
        powerPlant2Buy: { 
            element: powerPlant2BuyDescElement, 
            price: powerPlant2BuyPrice, 
            resource1Price: powerPlant2BuyResource1Price, 
            resource2Price: powerPlant2BuyResource2Price, 
            resource3Price: powerPlant2BuyResource3Price, 
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant2', 'resource1Price'])[1]), 
            string3: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant2', 'resource2Price'])[1]), 
            string4: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant2', 'resource3Price'])[1]) 
        },
        powerPlant3Buy: { 
            element: powerPlant3BuyDescElement, 
            price: powerPlant3BuyPrice, 
            resource1Price: powerPlant3BuyResource1Price, 
            resource2Price: powerPlant3BuyResource2Price, 
            resource3Price: powerPlant3BuyResource3Price, 
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant3', 'resource1Price'])[1]), 
            string3: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant3', 'resource2Price'])[1]), 
            string4: capitaliseString(getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant3', 'resource3Price'])[1])  
        }        
    };
}

function getStarShipResourceDescriptionElements() {
    const ssStructuralBuyDescElement = document.getElementById('structuralDescription');
    const ssStructuralBuyPrice = getResourceDataObject('space', ['upgrades', 'ssStructural', 'price']);
    const ssStructuralBuyResource1Price = getResourceDataObject('space', ['upgrades', 'ssStructural', 'resource1Price'])[0];
    const ssStructuralBuyResource2Price = getResourceDataObject('space', ['upgrades', 'ssStructural', 'resource2Price'])[0];
    const ssStructuralBuyResource3Price = getResourceDataObject('space', ['upgrades', 'ssStructural', 'resource3Price'])[0];

    const ssLifeSupportBuyDescElement = document.getElementById('lifeSupportModuleDescription');
    const ssLifeSupportBuyPrice = getResourceDataObject('space', ['upgrades', 'ssLifeSupport', 'price']);
    const ssLifeSupportBuyResource1Price = getResourceDataObject('space', ['upgrades', 'ssLifeSupport', 'resource1Price'])[0];
    const ssLifeSupportBuyResource2Price = getResourceDataObject('space', ['upgrades', 'ssLifeSupport', 'resource2Price'])[0];
    const ssLifeSupportBuyResource3Price = getResourceDataObject('space', ['upgrades', 'ssLifeSupport', 'resource3Price'])[0];

    const ssAntimatterEngineBuyDescElement = document.getElementById('antimatterEngineDescription');
    const ssAntimatterEngineBuyPrice = getResourceDataObject('space', ['upgrades', 'ssAntimatterEngine', 'price']);
    const ssAntimatterEngineBuyResource1Price = getResourceDataObject('space', ['upgrades', 'ssAntimatterEngine', 'resource1Price'])[0];
    const ssAntimatterEngineBuyResource2Price = getResourceDataObject('space', ['upgrades', 'ssAntimatterEngine', 'resource2Price'])[0];
    const ssAntimatterEngineBuyResource3Price = getResourceDataObject('space', ['upgrades', 'ssAntimatterEngine', 'resource3Price'])[0];

    const ssFleetHangarBuyDescElement = document.getElementById('fleetHangarDescription');
    const ssFleetHangarBuyPrice = getResourceDataObject('space', ['upgrades', 'ssFleetHangar', 'price']);
    const ssFleetHangarBuyResource1Price = getResourceDataObject('space', ['upgrades', 'ssFleetHangar', 'resource1Price'])[0];
    const ssFleetHangarBuyResource2Price = getResourceDataObject('space', ['upgrades', 'ssFleetHangar', 'resource2Price'])[0];
    const ssFleetHangarBuyResource3Price = getResourceDataObject('space', ['upgrades', 'ssFleetHangar', 'resource3Price'])[0];
    
    const ssStellarScannerBuyDescElement = document.getElementById('stellarScannerDescription');
    const ssStellarScannerBuyPrice = getResourceDataObject('space', ['upgrades', 'ssStellarScanner', 'price']);
    const ssStellarScannerBuyResource1Price = getResourceDataObject('space', ['upgrades', 'ssStellarScanner', 'resource1Price'])[0];
    const ssStellarScannerBuyResource2Price = getResourceDataObject('space', ['upgrades', 'ssStellarScanner', 'resource2Price'])[0];
    const ssStellarScannerBuyResource3Price = getResourceDataObject('space', ['upgrades', 'ssStellarScanner', 'resource3Price'])[0];
    return {
        ssStructuralBuy: { 
            element: ssStructuralBuyDescElement,
            price: ssStructuralBuyPrice,
            resource1Price: ssStructuralBuyResource1Price,
            resource2Price: ssStructuralBuyResource2Price,
            resource3Price: ssStructuralBuyResource3Price,
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('space', ['upgrades', 'ssStructural', 'resource1Price'])[1]),
            string3: capitaliseString(getResourceDataObject('space', ['upgrades', 'ssStructural', 'resource2Price'])[1]),
            string4: capitaliseString(getResourceDataObject('space', ['upgrades', 'ssStructural', 'resource3Price'])[1])
        },
        ssLifeSupportBuy: { 
            element: ssLifeSupportBuyDescElement,
            price: ssLifeSupportBuyPrice,
            resource1Price: ssLifeSupportBuyResource1Price,
            resource2Price: ssLifeSupportBuyResource2Price,
            resource3Price: ssLifeSupportBuyResource3Price,
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('space', ['upgrades', 'ssLifeSupport', 'resource1Price'])[1]),
            string3: capitaliseString(getResourceDataObject('space', ['upgrades', 'ssLifeSupport', 'resource2Price'])[1]),
            string4: capitaliseString(getResourceDataObject('space', ['upgrades', 'ssLifeSupport', 'resource3Price'])[1])
        },
        ssAntimatterEngineBuy: { 
            element: ssAntimatterEngineBuyDescElement,
            price: ssAntimatterEngineBuyPrice,
            resource1Price: ssAntimatterEngineBuyResource1Price,
            resource2Price: ssAntimatterEngineBuyResource2Price,
            resource3Price: ssAntimatterEngineBuyResource3Price,
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('space', ['upgrades', 'ssAntimatterEngine', 'resource1Price'])[1]),
            string3: capitaliseString(getResourceDataObject('space', ['upgrades', 'ssAntimatterEngine', 'resource2Price'])[1]),
            string4: capitaliseString(getResourceDataObject('space', ['upgrades', 'ssAntimatterEngine', 'resource3Price'])[1])
        },
        ssFleetHangarBuy: { 
            element: ssFleetHangarBuyDescElement,
            price: ssFleetHangarBuyPrice,
            resource1Price: ssFleetHangarBuyResource1Price,
            resource2Price: ssFleetHangarBuyResource2Price,
            resource3Price: ssFleetHangarBuyResource3Price,
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('space', ['upgrades', 'ssFleetHangar', 'resource1Price'])[1]),
            string3: capitaliseString(getResourceDataObject('space', ['upgrades', 'ssFleetHangar', 'resource2Price'])[1]),
            string4: capitaliseString(getResourceDataObject('space', ['upgrades', 'ssFleetHangar', 'resource3Price'])[1])
        },
        ssStellarScannerBuy: { 
            element: ssStellarScannerBuyDescElement,
            price: ssStellarScannerBuyPrice,
            resource1Price: ssStellarScannerBuyResource1Price,
            resource2Price: ssStellarScannerBuyResource2Price,
            resource3Price: ssStellarScannerBuyResource3Price,
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('space', ['upgrades', 'ssStellarScanner', 'resource1Price'])[1]),
            string3: capitaliseString(getResourceDataObject('space', ['upgrades', 'ssStellarScanner', 'resource2Price'])[1]),
            string4: capitaliseString(getResourceDataObject('space', ['upgrades', 'ssStellarScanner', 'resource3Price'])[1])
        }
    };
}

function getSpaceMiningResourceDescriptionElements() {
    const spaceTelescopeBuyDescElement = document.getElementById('spaceTelescopeDescription');
    const spaceTelescopeBuyPrice = getResourceDataObject('space', ['upgrades', 'spaceTelescope', 'price']);
    const spaceTelescopeBuyResource1Price = getResourceDataObject('space', ['upgrades', 'spaceTelescope', 'resource1Price'])[0];
    const spaceTelescopeBuyResource2Price = getResourceDataObject('space', ['upgrades', 'spaceTelescope', 'resource2Price'])[0];
    const spaceTelescopeBuyResource3Price = getResourceDataObject('space', ['upgrades', 'spaceTelescope', 'resource3Price'])[0];

    const launchPadBuyDescElement = document.getElementById('launchPadDescription');
    const launchPadBuyPrice = getResourceDataObject('space', ['upgrades', 'launchPad', 'price']);
    const launchPadBuyResource1Price = getResourceDataObject('space', ['upgrades', 'launchPad', 'resource1Price'])[0];
    const launchPadBuyResource2Price = getResourceDataObject('space', ['upgrades', 'launchPad', 'resource2Price'])[0];
    const launchPadBuyResource3Price = getResourceDataObject('space', ['upgrades', 'launchPad', 'resource3Price'])[0];

    const rocket1BuyDescElement = document.getElementById('rocketMiner1Description');
    const rocket1BuyPrice = getResourceDataObject('space', ['upgrades', 'rocket1', 'price']);
    const rocket1BuyResource1Price = getResourceDataObject('space', ['upgrades', 'rocket1', 'resource1Price'])[0];
    const rocket1BuyResource2Price = getResourceDataObject('space', ['upgrades', 'rocket1', 'resource2Price'])[0];
    const rocket1BuyResource3Price = getResourceDataObject('space', ['upgrades', 'rocket1', 'resource3Price'])[0];

    const rocket2BuyDescElement = document.getElementById('rocketMiner2Description');
    const rocket2BuyPrice = getResourceDataObject('space', ['upgrades', 'rocket2', 'price']);
    const rocket2BuyResource1Price = getResourceDataObject('space', ['upgrades', 'rocket2', 'resource1Price'])[0];
    const rocket2BuyResource2Price = getResourceDataObject('space', ['upgrades', 'rocket2', 'resource2Price'])[0];
    const rocket2BuyResource3Price = getResourceDataObject('space', ['upgrades', 'rocket2', 'resource3Price'])[0];

    const rocket3BuyDescElement = document.getElementById('rocketMiner3Description');
    const rocket3BuyPrice = getResourceDataObject('space', ['upgrades', 'rocket3', 'price']);
    const rocket3BuyResource1Price = getResourceDataObject('space', ['upgrades', 'rocket3', 'resource1Price'])[0];
    const rocket3BuyResource2Price = getResourceDataObject('space', ['upgrades', 'rocket3', 'resource2Price'])[0];
    const rocket3BuyResource3Price = getResourceDataObject('space', ['upgrades', 'rocket3', 'resource3Price'])[0];

    const rocket4BuyDescElement = document.getElementById('rocketMiner4Description');
    const rocket4BuyPrice = getResourceDataObject('space', ['upgrades', 'rocket4', 'price']);
    const rocket4BuyResource1Price = getResourceDataObject('space', ['upgrades', 'rocket4', 'resource1Price'])[0];
    const rocket4BuyResource2Price = getResourceDataObject('space', ['upgrades', 'rocket4', 'resource2Price'])[0];
    const rocket4BuyResource3Price = getResourceDataObject('space', ['upgrades', 'rocket4', 'resource3Price'])[0];

    return {
        spaceTelescopeBuy: { 
            element: spaceTelescopeBuyDescElement, 
            price: spaceTelescopeBuyPrice, 
            resource1Price: spaceTelescopeBuyResource1Price, 
            resource2Price: spaceTelescopeBuyResource2Price, 
            resource3Price: spaceTelescopeBuyResource3Price, 
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('space', ['upgrades', 'spaceTelescope', 'resource1Price'])[1]), 
            string3: capitaliseString(getResourceDataObject('space', ['upgrades', 'spaceTelescope', 'resource2Price'])[1]), 
            string4: capitaliseString(getResourceDataObject('space', ['upgrades', 'spaceTelescope', 'resource3Price'])[1]) 
        },
        launchPadBuy: { 
            element: launchPadBuyDescElement, 
            price: launchPadBuyPrice, 
            resource1Price: launchPadBuyResource1Price, 
            resource2Price: launchPadBuyResource2Price, 
            resource3Price: launchPadBuyResource3Price, 
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('space', ['upgrades', 'launchPad', 'resource1Price'])[1]), 
            string3: capitaliseString(getResourceDataObject('space', ['upgrades', 'launchPad', 'resource2Price'])[1]), 
            string4: capitaliseString(getResourceDataObject('space', ['upgrades', 'launchPad', 'resource3Price'])[1]) 
        },
        rocket1Buy: { 
            element: rocket1BuyDescElement,
            price: rocket1BuyPrice,
            resource1Price: rocket1BuyResource1Price,
            resource2Price: rocket1BuyResource2Price,
            resource3Price: rocket1BuyResource3Price,
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('space', ['upgrades', 'rocket1', 'resource1Price'])[1]),
            string3: capitaliseString(getResourceDataObject('space', ['upgrades', 'rocket1', 'resource2Price'])[1]),
            string4: capitaliseString(getResourceDataObject('space', ['upgrades', 'rocket1', 'resource3Price'])[1])
        },
        rocket2Buy: { 
            element: rocket2BuyDescElement,
            price: rocket2BuyPrice,
            resource1Price: rocket2BuyResource1Price,
            resource2Price: rocket2BuyResource2Price,
            resource3Price: rocket2BuyResource3Price,
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('space', ['upgrades', 'rocket2', 'resource1Price'])[1]),
            string3: capitaliseString(getResourceDataObject('space', ['upgrades', 'rocket2', 'resource2Price'])[1]),
            string4: capitaliseString(getResourceDataObject('space', ['upgrades', 'rocket2', 'resource3Price'])[1])
        },
        rocket3Buy: { 
            element: rocket3BuyDescElement,
            price: rocket3BuyPrice,
            resource1Price: rocket3BuyResource1Price,
            resource2Price: rocket3BuyResource2Price,
            resource3Price: rocket3BuyResource3Price,
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('space', ['upgrades', 'rocket3', 'resource1Price'])[1]),
            string3: capitaliseString(getResourceDataObject('space', ['upgrades', 'rocket3', 'resource2Price'])[1]),
            string4: capitaliseString(getResourceDataObject('space', ['upgrades', 'rocket3', 'resource3Price'])[1])
        },
        rocket4Buy: { 
            element: rocket4BuyDescElement,
            price: rocket4BuyPrice,
            resource1Price: rocket4BuyResource1Price,
            resource2Price: rocket4BuyResource2Price,
            resource3Price: rocket4BuyResource3Price,
            string1: getCurrencySymbol(),
            string2: capitaliseString(getResourceDataObject('space', ['upgrades', 'rocket4', 'resource1Price'])[1]),
            string3: capitaliseString(getResourceDataObject('space', ['upgrades', 'rocket4', 'resource2Price'])[1]),
            string4: capitaliseString(getResourceDataObject('space', ['upgrades', 'rocket4', 'resource3Price'])[1])
        }
    };       
}

function updateRates() {
    let currentActualResearchRate;

    if (getPowerOnOff()) {
        currentActualResearchRate = getResourceDataObject('research', ['rate']) * getTimerRateRatio();
    } else {
        currentActualResearchRate = (getResourceDataObject('research', ['rate']) - getResourceDataObject('research', ['ratePower'])) * getTimerRateRatio();
    }
    getElements().researchRate.textContent = Math.floor(currentActualResearchRate) + ' / s'; 
}

function updateUIQuantities(allQuantities, allStorages, allElements, allDescriptionElements) {
    for (const item in allQuantities) {
        if (allQuantities.hasOwnProperty(item)) {
            const quantity = allQuantities[item];
            const storage = allStorages[item];
            const element = allElements[item];

            updateQuantityDisplays(element, quantity, storage, null, null, null, false);
        }

        if (item.startsWith('science')) {
            const quantityScienceBuilding = allQuantities[item];
            const element = document.getElementById(`${item}Quantity`);
            if (element && quantityScienceBuilding) {
                element.textContent = `Quantity: ${quantityScienceBuilding}`;
            }
        }

        if (item.includes('AB')) {
            let tier;
            const quantityAutoBuyer = allQuantities[item];

            const match = item.match(/AB(\d+)/);
            if (match) {
                tier = parseInt(match[1], 10);
            } else {
                return null;
            }

            const element = document.getElementById(item);
            if (element) {
                element.textContent = `Quantity: ${quantityAutoBuyer}`;
            }
        }

        if (item.startsWith('rocket') || item.startsWith('ss')) {
            const quantity = allQuantities[item];
            if (quantity || quantity === 0) {
                const partsCountText = document.getElementById(`${item}PartsCountText`);
                const getTotalPartsNeeded = item.startsWith('rocket') 
                    ? getRocketPartsNeededInTotalPerRocket 
                    : getStarShipPartsNeededInTotalPerModule;

                partsCountText.innerHTML = `Built: <span id="${item}BuiltPartsQuantity">${quantity}</span> / <span id="${item}TotalPartsQuantity">${getTotalPartsNeeded(item)}</span>`;
            }
        }
    }

    for (const allDescriptionElement in allDescriptionElements) {
        let resource1Price;
        let resource2Price;
        let resource3Price;

        if (allDescriptionElements.hasOwnProperty(allDescriptionElement)) {
            const price = allDescriptionElements[allDescriptionElement].price;

            if (allDescriptionElement.endsWith("Buy")) { //if can cost cash or resources ie science or building
                resource1Price = allDescriptionElements[allDescriptionElement].resource1Price;
                resource2Price = allDescriptionElements[allDescriptionElement].resource2Price;
                resource3Price = allDescriptionElements[allDescriptionElement].resource3Price;
            }

            const costResourceOrCompoundName1 = allDescriptionElements[allDescriptionElement].string1;
            const costResourceOrCompoundName2 = allDescriptionElements[allDescriptionElement].string2;
            const costResourceOrCompoundName3 = allDescriptionElements[allDescriptionElement].string3;
            const costResourceOrCompoundName4 = allDescriptionElements[allDescriptionElement].string4;

            const element = allDescriptionElements[allDescriptionElement].element;

            const resourceData1 = [resource1Price, costResourceOrCompoundName2];
            const resourceData2 = [resource2Price, costResourceOrCompoundName3];
            const resourceData3 = [resource3Price, costResourceOrCompoundName4];

            updateQuantityDisplays(element, price, costResourceOrCompoundName1, resourceData1, resourceData2, resourceData3, true);
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

        //console.log(`Showing UI for Tab ${currentTab}.`);
    } else {
        //console.log(`No tab-specific UI to show for Tab ${currentTab}, but other tabs are hidden.`);
    }
}

function monitorRevealResourcesCheck() {
    let revealStatus;
    let resourceElementId;

    const resourceKeys = Object.keys(getResourceDataObject('resources'));

    for (const resource of resourceKeys) {
        revealStatus = getResourceDataObject('resources', [resource, 'revealedYet']);
        resourceElementId = resource + "Option";
        if (revealStatus) {
            document.getElementById(resourceElementId).parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove('invisible');
            document.getElementById(resourceElementId).parentElement.parentElement.parentElement.parentElement.classList.remove('invisible');
            document.getElementById(resourceElementId).parentElement.parentElement.classList.remove('invisible');
        }
    }
}

function monitorRevealCompoundsCheck() {
    let revealTech;
    const compoundKeys = Object.keys(getResourceDataObject('compounds'));

    for (const compound of compoundKeys) {
        revealTech = getResourceDataObject('compounds', [compound, 'revealedBy']);
        const compoundElementId = compound + "Option";
        if (getTechUnlockedArray().includes(revealTech)) {
            document.getElementById(compoundElementId).parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove('invisible');
            document.getElementById(compoundElementId).parentElement.parentElement.parentElement.parentElement.classList.remove('invisible');
            document.getElementById(compoundElementId).parentElement.parentElement.classList.remove('invisible');
        }
    }
}

function updateAntimatterAndDiagram() {
    const antimatterTotalQuantity = getResourceDataObject('antimatter', ['quantity']);
    const miningObject = getMiningObject();
    const asteroidsBeingMined = getAsteroidArray();
    
    asteroidsBeingMined.forEach(obj => {
        const asteroidName = Object.keys(obj)[0];
        const isBeingMined = Object.values(miningObject).includes(asteroidName);
    
        if (obj[asteroidName]) {
            obj[asteroidName].beingMined = isBeingMined;
            changeAsteroidArray(asteroidName, "beingMined", obj[asteroidName].beingMined);
        }
    });

    const rocketData = {};
    let totalAntimatterExtractionRate = 0;

    for (let i = 1; i <= 4; i++) {
        const rocketKey = getMiningObject()[`rocket${i}`];
        const asteroid = getAsteroidArray().find(asteroid => asteroid[rocketKey])?.[rocketKey];

        if (asteroid) {
            rocketData[`rocket${i}`] = [
                `Rocket ${i}`,
                asteroid.name,
                asteroid.easeOfExtraction[0],
                getSpecificAsteroidExtractionRate(asteroid),
                asteroid.quantity[0]
            ];
        } else {
            rocketData[`rocket${i}`] = null;
        }

        if (asteroid && asteroid.beingMined) {
            let quantityAntimatterClass = 'none';
            let extractionRate = rocketData[`rocket${i}`][3];
            if (getIsAntimatterBoostActive()) {
                extractionRate *= getBoostRate();
            }
            totalAntimatterExtractionRate += extractionRate;
            
            let newQuantityAntimatterAsteroid = asteroid.quantity[0] - extractionRate;
            const quantityPercentage = (newQuantityAntimatterAsteroid / asteroid.originalQuantity) * 100;
        
            if (quantityPercentage <= 0) {
                newQuantityAntimatterAsteroid = 0;
                totalAntimatterExtractionRate -= extractionRate;
                rocketData[`rocket${i}`][3] = 0;

                if (!getRocketDirection(`rocket${i}`)) {
                    setRocketDirection(`rocket${i}`, true); //set rocket returning
                    sfxPlayer.playAudio('rocketLaunch', false);
                    startTravelToAndFromAsteroidTimer([0, 'returning'], `rocket${i}`, getRocketDirection(`rocket${i}`));
                    boostAntimatterRate(false);
                }
            }
 
            getElements().miningRate.innerText = `${(totalAntimatterExtractionRate * getTimerRateRatio()).toFixed(2)} / s`;
            getElements().miningQuantity.innerText = `${Math.floor(antimatterTotalQuantity)}`;

            if (quantityPercentage > 90) {
                quantityAntimatterClass = 'ready-text';
            } else if (quantityPercentage > 50) {
                quantityAntimatterClass = 'none';
            } else if (quantityPercentage > 20) {
                quantityAntimatterClass = 'warning-text';
            } else {
                quantityAntimatterClass = 'disabled-text';
            }
        
            changeAsteroidArray(asteroid.name, "quantity", [newQuantityAntimatterAsteroid, quantityAntimatterClass]);

            if (getAntimatterUnlocked()) {
                setResourceDataObject(antimatterTotalQuantity + totalAntimatterExtractionRate, 'antimatter', ['quantity']);
            }
        }
    } 

    //console.log(totalAntimatterExtractionRate);
    setResourceDataObject(totalAntimatterExtractionRate, 'antimatter', ['rate']);

    if (getCurrentOptionPane() === 'mining') {
        const svgElement = document.getElementById('antimatterSvg');

        drawAntimatterFlowDiagram(rocketData, svgElement);
        const rateBars = Array.from(svgElement.children).filter(child => child.id === 'svgRateBar');
        
        if (rateBars.length > 1) {
            svgElement.removeChild(rateBars[0]);
        }
        
        setHasAntimatterSvgRightBoxDataChanged(svgElement);
    }     
}

function getSpecificAsteroidExtractionRate(asteroid) {
    const maxRate = getNormalMaxAntimatterRate();
    const minRate = 0.0001;
    const maxEase = 1;
    const minEase = 10;

    const normalizedEase = (asteroid.easeOfExtraction[0] - maxEase) / (minEase - maxEase);
    const extractionRate = maxRate - (normalizedEase * (maxRate - minRate));

    return extractionRate;
}

function monitorTechTree() {
    const techs = getResourceDataObject('techs');
    
    Object.keys(techs).forEach(techKey => {
        if (!getTechUnlockedArray().includes(techKey)) {
            if (getResourceDataObject('research', ['quantity']) > techs[techKey].appearsAt[0] && !getRevealedTechArray().includes(techKey)) {
                setRevealedTechArray(techKey);
                if (getCurrentOptionPane() === 'tech tree') {
                    const tooltip = document.getElementById('techTreeTooltip');
                    if (tooltip) {
                        tooltip.remove();
                    }
                    getTechTreeData(true);
                    setTechTreeDrawnYet(true);
                }
            }
            if (getResourceDataObject('research', ['quantity']) > (techs[techKey].appearsAt[0] / 1.5) && !getUpcomingTechArray().includes(techKey)) {
                setUpcomingTechArray(techKey);
                if (getCurrentOptionPane() === 'tech tree') {
                    const tooltip = document.getElementById('techTreeTooltip');
                    if (tooltip) {
                        tooltip.remove();
                    }
                    getTechTreeData(true);
                    setTechTreeDrawnYet(true);
                }
            }
        }
    });
}

function monitorRevealRowsChecks(element) {
    if (element.classList.contains('invisible') && element.dataset.conditionCheck === 'techUnlock') { //reveal techs check
        if (getRevealedTechArray().includes(element.dataset.type)) {
            element.classList.remove('invisible');
            setTechRenderChange(true);
        } else if (!getRevealedTechArray().includes(element.dataset.type) && getResourceDataObject('research', ['quantity']) >= getResourceDataObject('techs', [element.dataset.type, 'appearsAt'])[0]) {
            element.classList.remove('invisible');
            setTechRenderChange(true);
        }
    } else if (element.dataset.conditionCheck === 'upgradeCheck' && element.dataset.type === 'autoBuyer') { //autobuyer reveal check
        const elementTier = parseInt(element.dataset.autoBuyerTier.slice(-1));
        if (getCurrentTab()[1] === 'Resources' && element.dataset.rowCategory === 'resource')  {
            if (elementTier > 0 ) {
                if (elementTier <= getAutoBuyerTierLevel(getCurrentOptionPane(), 'resources')) {
                    element.classList.remove('invisible');
                } else {
                    element.classList.add('invisible');
                }
            } else {
                element.classList.add('invisible');
            }
        } else if (getCurrentTab()[1] === 'Compounds' && element.dataset.rowCategory === 'compound')  {
            if (elementTier > 0 ) {
                if (elementTier <= getAutoBuyerTierLevel(getCurrentOptionPane(), 'compounds')) {
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

export function checkPowerForSpaceTelescopeTimer(timers) {
    timers.forEach(timerName => {
        const searchTimer = timerManager.getTimer(timerName);
        if (searchTimer) {
            if (timerName === 'searchAsteroidTimer' && getAsteroidTimerCanContinue()) {
                searchTimer.resume();
            } else if (timerName === 'investigateStarTimer' && getStarInvestigationTimerCanContinue()) {
                searchTimer.resume();
            } else {
                searchTimer.pause();
            }
        }
    });
}

function travelToAsteroidChecks(element) {
    const accompanyingLabel = document.getElementById('travelToDescription');  

    if (accompanyingLabel) { //travelTo description
        const rocketClass = [...element.classList].find(cls => cls.startsWith('rocket') && cls.match(/^rocket\d+/));
        if (rocketClass) {
            const rocketName = rocketClass.match(/^rocket\d+/)[0];
            const travelToProgressBarElement = document.getElementById(`spaceTravelToAsteroidProgressBar${capitaliseString(rocketName)}Container`);
            const travelToDropdown = document.getElementById(`${rocketName}TravelDropdown`);
            const destinationAsteroidTextElement = document.getElementById(`${rocketName}DestinationAsteroid`);
            if (getRocketDirection(rocketName)) {
                destinationAsteroidTextElement.innerHTML = `Base`;
            } else {
                destinationAsteroidTextElement.innerHTML = `${getDestinationAsteroid(rocketName)}`;
            }

            if (getRocketReadyToTravel(rocketName) && getLaunchedRockets().includes(rocketName) && getCanTravelToAsteroids()) {
                accompanyingLabel.classList.remove('red-disabled-text');
                accompanyingLabel.innerText = 'Ready To Travel...';
                accompanyingLabel.classList.add('green-ready-text');
                travelToProgressBarElement.classList.add('invisible');
                destinationAsteroidTextElement.classList.add('invisible');
                element.classList.remove('invisible');
                travelToDropdown.classList.remove('invisible');
                if (!getDestinationAsteroid(rocketName)) {
                    accompanyingLabel.innerText = 'Select Destination...';
                }
            } else {
                if (getCurrentlyTravellingToAsteroid(rocketName)) { //travelling case handled in timer
                    travelToProgressBarElement.classList.remove('invisible');
                    destinationAsteroidTextElement.classList.remove('invisible');
                    element.classList.add('invisible');
                    travelToDropdown.classList.add('invisible');
                } else if (getMiningObject()[rocketName] !== null) { //if rocket mining at an asteroid
                    const asteroidBeingMinedByCurrentRocket = getMiningObject()[rocketName];
                    accompanyingLabel.classList.remove('red-disabled-text');
                    accompanyingLabel.classList.add('green-ready-text');
                    travelToProgressBarElement.classList.add('invisible');
                    destinationAsteroidTextElement.classList.add('invisible');
                    element.classList.add('invisible');
                    travelToDropdown.classList.add('invisible');
                    accompanyingLabel.innerText = 'Mining Antimatter at ' + asteroidBeingMinedByCurrentRocket;
                } else if (!getLaunchedRockets().includes(rocketName)) {
                    accompanyingLabel.classList.add('red-disabled-text');
                    accompanyingLabel.classList.remove('green-ready-text');
                    accompanyingLabel.innerText = 'Not Launched!';
                    travelToProgressBarElement.classList.add('invisible');
                    destinationAsteroidTextElement.classList.add('invisible');
                    element.classList.add('invisible');
                    travelToDropdown.classList.remove('invisible');
                } else if (!getCanTravelToAsteroids()) {
                    element.classList.add('red-disabled-text');
                    element.classList.remove('green-ready-text');
                    accompanyingLabel.classList.remove('green-ready-text');
                    accompanyingLabel.classList.add('red-disabled-text');
                    accompanyingLabel.innerHTML = `Lack Nav Tech!`;
                    travelToDropdown.classList.remove('invisible');
                }

                if (!travelToDropdown.classList.contains('invisible')) {
                    travelToDropdown.querySelector('div.dropdown span').innerHTML = getCurrentDestinationDropdownText();
                }

                const elapsedTime = getRocketTravelDuration(rocketName) - getTimeLeftUntilRocketTravelToAsteroidTimerFinishes(rocketName);
                const progressBarPercentage = (elapsedTime / getRocketTravelDuration(rocketName)) * 100;
                document.getElementById(`spaceTravelToAsteroidProgressBar${capitaliseString(rocketName)}`).style.width = `${progressBarPercentage}%`;
            }
        }
    }

    if (element.dataset.resourceToFuseTo === 'travelToAsteroid') { //travelTo button
        const rocketClass = [...element.classList].find(cls => cls.startsWith('rocket') && cls.match(/^rocket\d+/));
        if (rocketClass) {
            const rocketName = rocketClass.match(/^rocket\d+/)[0];

            if (!getCanTravelToAsteroids() || !getDestinationAsteroid(rocketName) || !getLaunchedRockets().includes(rocketName) || getCurrentlyTravellingToAsteroid(rocketName) || !getRocketReadyToTravel(rocketName) || getMiningObject()[rocketName] !== null) {
                element.classList.add('red-disabled-text');
                element.classList.remove('green-ready-text');
            } else {
                element.classList.remove('red-disabled-text');
                element.classList.add('green-ready-text'); 
            }

            getCurrentlyTravellingToAsteroid(rocketName) || getMiningObject()[rocketName] !== null ? (element.classList.add('invisible')) : (element.classList.remove('invisible'));
            const progressBarSearchAsteroid = document.getElementById(`spaceTravelToAsteroidProgressBar${capitaliseString(rocketName)}`);
            if (progressBarSearchAsteroid) {
                getCurrentlyTravellingToAsteroid(rocketName) ? progressBarSearchAsteroid.classList.remove('invisible') : progressBarSearchAsteroid.classList.add('invisible');
            }
        }
    }
}

function spaceTelescopeChecks(element, type) {
    const isAsteroid = type === 'searchAsteroid';
    const labelId = isAsteroid ? 'scanAsteroidsDescription' : 'studyStarsDescription';
    const progressBarId = isAsteroid ? 'spaceTelescopeSearchAsteroidProgressBar' : 'spaceTelescopeInvestigateStarProgressBar';
    const progressBarContainerId = isAsteroid ? 'spaceTelescopeSearchAsteroidProgressBarContainer' : 'spaceTelescopeInvestigateStarProgressBarContainer';
    
    const accompanyingLabel = document.getElementById(labelId);

    if (accompanyingLabel) { // Scan description
        if (getPowerOnOff()) {
            accompanyingLabel.classList.remove('red-disabled-text');
            if (getTelescopeReadyToSearch()) {
                accompanyingLabel.innerText = isAsteroid ? 'Ready To Search...' : 'Ready To Study...';
                accompanyingLabel.classList.add('green-ready-text');
            } else {
                if (isAsteroid) {
                    if (getCurrentlyInvestigatingStar()) {
                        accompanyingLabel.innerText = 'Currently Investigating Stars...';
                        accompanyingLabel.classList.remove('green-ready-text');
                        accompanyingLabel.classList.add('red-disabled-text');
                    }
                } else {
                    if (getCurrentlySearchingAsteroid()) {
                        accompanyingLabel.innerText = 'Currently Searching Asteroids...';
                        accompanyingLabel.classList.remove('green-ready-text');
                        accompanyingLabel.classList.add('red-disabled-text');
                    }
                }
            }
        } else {
            accompanyingLabel.classList.add('red-disabled-text');
            accompanyingLabel.classList.remove('green-ready-text');
            accompanyingLabel.innerText = 'Requires Power!';
            const elapsedTime = isAsteroid
                ? getCurrentAsteroidSearchTimerDurationTotal() - getTimeLeftUntilAsteroidScannerTimerFinishes()
                : getCurrentInvestigateStarTimerDurationTotal() - getTimeLeftUntilStarInvestigationTimerFinishes();
            const progressBarPercentage = (elapsedTime / (isAsteroid ? getCurrentAsteroidSearchTimerDurationTotal() : getCurrentInvestigateStarTimerDurationTotal())) * 100;
            document.getElementById(progressBarId).style.width = `${progressBarPercentage}%`;
        }
    }

    if (element.dataset.resourceToFuseTo === type) { // Scan button doesnt need specifics for which timer as it is not shown unless getTelescopeReadyToSearch is true
        if (getPowerOnOff() && getTelescopeReadyToSearch()) {
            element.classList.remove('red-disabled-text');
        } else {
            element.classList.add('red-disabled-text');
        }

        getTelescopeReadyToSearch() ? element.classList.remove('invisible') : element.classList.add('invisible');

        const progressBarContainer = document.getElementById(progressBarContainerId);
        if (progressBarContainer) {
            if (getTelescopeReadyToSearch()) {
                progressBarContainer.classList.add('invisible');
            } else if (isAsteroid && getCurrentlySearchingAsteroid()) {
                progressBarContainer.classList.remove('invisible');
            } else if (!isAsteroid && getCurrentlyInvestigatingStar()) {
                progressBarContainer.classList.remove('invisible');
            } else {
                progressBarContainer.classList.add('invisible');
            }
        }        
    }
}

function powerGenerationFuelChecks(element) {
    if (element.tagName.toLowerCase() === 'button') {
        const buildingNameString = element.dataset.toggleTarget;
        const buildingQuantity = getResourceDataObject('buildings', ['energy', 'upgrades', buildingNameString, 'quantity']);

        const fuelType = getResourceDataObject('buildings', ['energy', 'upgrades', buildingNameString, 'fuel'])[0];
        const fuelCategory = getResourceDataObject('buildings', ['energy', 'upgrades', buildingNameString, 'fuel'])[2];
        const fuelQuantity = getResourceDataObject(fuelCategory, [fuelType, 'quantity']);

        const fuelTypeElement = document.getElementById(buildingNameString + 'FuelType');
        const fuelQuantityElement = document.getElementById(buildingNameString + 'FuelQuantity');

        if (buildingQuantity > 0) {
            element.classList.remove('invisible');
            fuelTypeElement.classList.remove('invisible');
            fuelQuantityElement.classList.remove('invisible');

            if (fuelQuantity <= 0) {
                element.textContent = 'Activate';
                element.classList.add('red-disabled-text');
                fuelTypeElement.classList.add('red-disabled-text');
                fuelQuantityElement.classList.add('red-disabled-text');
                fuelTypeElement.classList.remove('green-ready-text');
                fuelQuantityElement.classList.remove('green-ready-text');
            } else {
                if (getBuildingTypeOnOff(buildingNameString)) {                
                    element.textContent = 'Deactivate';
                }
                element.classList.remove('red-disabled-text');
                fuelTypeElement.classList.remove('red-disabled-text');
                fuelQuantityElement.classList.remove('red-disabled-text');
                fuelTypeElement.classList.add('green-ready-text');
                fuelQuantityElement.classList.add('green-ready-text');
            }
            if (buildingNameString !== 'powerPlant2') {
                fuelQuantityElement.textContent = Math.floor(fuelQuantity);
            } else {
                fuelQuantityElement.textContent = Math.floor(getCurrentStarSystemWeatherEfficiency()[1] * 100) + '% ' + getStarSystemDataObject('stars', [getCurrentStarSystem(), 'weather', getCurrentStarSystemWeatherEfficiency()[2]])[1];
                colorSolarFuelElements(fuelTypeElement, fuelQuantityElement);
            }
            
        } 
    }
}

function colorSolarFuelElements(fuelTypeElement, fuelQuantityElement) {
    const weather = getCurrentStarSystemWeatherEfficiency()[2];

if (weather === 'rain' || weather === 'cloudy') {
    fuelQuantityElement.classList.add('warning-orange-text');
    fuelQuantityElement.classList.remove('red-disabled-text', 'green-ready-text');

    fuelTypeElement.classList.add('warning-orange-text');
    fuelTypeElement.classList.remove('red-disabled-text', 'green-ready-text');
} else if (weather === 'volcano') {
    fuelQuantityElement.classList.add('red-disabled-text');
    fuelQuantityElement.classList.remove('warning-orange-text', 'green-ready-text');

    fuelTypeElement.classList.add('red-disabled-text');
    fuelTypeElement.classList.remove('warning-orange-text', 'green-ready-text');
} else {
    fuelQuantityElement.classList.add('green-ready-text');
    fuelQuantityElement.classList.remove('warning-orange-text', 'red-disabled-text');

    fuelTypeElement.classList.add('green-ready-text');
    fuelTypeElement.classList.remove('warning-orange-text', 'red-disabled-text');
}

}

function energyChecks(element) {
    const valueText = element.textContent;
    const match = valueText.match(/(-?\d+(\.\d+)?) KW \/ s/);

    if (match) {
        const number = parseFloat(match[1]);
        if (number < 0) {
            element.classList.add('red-disabled-text');
        } else {
            element.classList.remove('red-disabled-text');
        }
    }
}

function powerOnOrOffChecks(element) {
    if (!getResourceDataObject('buildings', ['energy', 'batteryBoughtYet'])) {
        // No battery purchased yet
        if (getResourceDataObject('buildings', ['energy', 'rate']) > 0) {
            element.textContent = '• ON';
            element.classList.remove('red-disabled-text');
            element.classList.add('green-ready-text');
            element.classList.remove('warning-orange-text');
        } else if (getTrippedStatus()) { 
            element.textContent = '• TRIPPED';
            element.classList.add('warning-orange-text');
            element.classList.remove('green-ready-text');
            element.classList.remove('red-disabled-text');
        } else {
            element.textContent = '• OFF';
            element.classList.add('red-disabled-text');
            element.classList.remove('green-ready-text');
            element.classList.remove('warning-orange-text');
        }
    } else {
        // Battery is purchased
        if (getResourceDataObject('buildings', ['energy', 'quantity']) > 0.00001) {
            element.textContent = '• ON';
            element.classList.remove('red-disabled-text');
            element.classList.add('green-ready-text');
            element.classList.remove('warning-orange-text');
        } else if (getTrippedStatus()) {
            element.textContent = '• TRIPPED';
            element.classList.add('warning-orange-text');
            element.classList.remove('green-ready-text');
            element.classList.remove('red-disabled-text');
        } else {
            element.textContent = '• OFF';
            element.classList.remove('warning-orange-text');
            element.classList.add('red-disabled-text');
            element.classList.remove('green-ready-text');
        }
    }
}

function compoundCostSellCreateChecks(element) {  //to refactor
    let compound = element.dataset.type;
    let compound2;

    const type = element.dataset.type;

    if (compound === 'storage' || compound === 'autoBuyer') {
        compound = element.dataset.argumentCheckQuantity;
        compound2 = element.dataset.argumentCheckQuantity2;
    }

    const checkQuantityString = element.dataset.argumentCheckQuantity;
    const checkQuantityString2 = element.dataset.argumentCheckQuantity2;

    let quantity = getResourceDataObject('compounds', [checkQuantityString, 'quantity']);
    let quantity2;
    compound2 ? quantity2 = getResourceDataObject('compounds', [checkQuantityString2, 'quantity']) : -1;

    if (element.classList.contains('sell') || element.dataset.conditionCheck === 'sellCompound') { //sell
        if (quantity > 0) { 
            element.classList.remove('red-disabled-text');
        } else {
            element.classList.add('red-disabled-text');
        }

        return;
    }

    if (element.classList.contains('create') || element.dataset.conditionCheck === 'createCompound') { //sell           
        const createCompoundDescriptionString = document.getElementById('create' + capitaliseString(checkQuantityString) + 'Description').innerHTML;
        const accompanyingLabel = element.parentElement.nextElementSibling.querySelector('label');
        if (accompanyingLabel.textContent.startsWith('0')) {
            accompanyingLabel.classList.remove('warning-orange-text');
            accompanyingLabel.classList.add('red-disabled-text');
        } else {
            accompanyingLabel.classList.remove('red-disabled-text'); 
        }
        
        let constituentComponents = getConstituentComponents(createCompoundDescriptionString);      
        constituentComponents = unpackConstituentPartsObject(constituentComponents);
        setConstituentPartsObject(constituentComponents);

        let isDisabled = false;

        for (let i = 1; i <= 4; i++) {
            const nameKey = `constituentPartName${i}`;
            const quantityKey = `constituentPartQuantity${i}`;
            const requiredName = constituentComponents[nameKey];
            const requiredQuantity = constituentComponents[quantityKey];
    
            if (constituentComponents.compoundToCreateQuantity <= 0) {
                isDisabled = true;
                break;
            }

            if (!requiredName || requiredQuantity <= 0) continue;
    
            const currentQuantity = getResourceDataObject('resources', [requiredName, 'quantity']);
            if (currentQuantity < requiredQuantity) {
                element.classList.remove('warning-orange-text');
                element.classList.add('red-disabled-text');
                setSellFuseCreateTextDescriptionClassesBasedOnButtonStates(element, 'create');
                isDisabled = true;
                break;
            }
        }
    
        if (!isDisabled) {
            if (createCompoundDescriptionString.includes('!')) {
                element.classList.add('warning-orange-text');
            }
            if (!createCompoundDescriptionString.includes('!')) {
                element.classList.remove('warning-orange-text');
            }
            if (getPowerOnOff()) {
                element.classList.remove('red-disabled-text');
            } else {
                element.classList.add('red-disabled-text');
            }
            setSellFuseCreateTextDescriptionClassesBasedOnButtonStates(element, 'create');
        }

        return;
    }

    let price;
    let price2;
    let mainKey;

    if (type === 'autoBuyer') {
        mainKey = 'compounds';
        const autoBuyerTier = element.dataset.autoBuyerTier;
        if (autoBuyerTier === 'tier0') return;
        price = getResourceDataObject(mainKey, [compound, 'upgrades', 'autoBuyer', autoBuyerTier, 'price']);
        price2 = 0;
    } else if (element.dataset.type === "storage") {
        mainKey = 'compounds' //storageCapacity
        price = getResourceDataObject(mainKey, [compound, 'storageCapacity']) - 1;
        if (element.tagName.toLowerCase() !== 'button') {
            price2 = compound2 ? Math.floor(getResourceDataObject(mainKey, [compound, 'storageCapacity']) * 0.3) : 0;
            const mainCompoundPriceText = `${price} ${getResourceDataObject(mainKey, [compound, 'nameResource'])}`;
            const secondaryCompoundPriceText = price2 > 0 ? `, ${price2} ${getResourceDataObject(mainKey, [compound2, 'nameResource'])}` : '';
        
            const mainCompoundSpan = document.createElement('span');
            mainCompoundSpan.id = 'mainCompoundPriceText';
            mainCompoundSpan.textContent = mainCompoundPriceText;
        
            const secondaryCompoundSpan = document.createElement('span');
            secondaryCompoundSpan.id = 'secondaryCompoundPriceText';
            secondaryCompoundSpan.textContent = secondaryCompoundPriceText;
        
            element.textContent = '';
            element.appendChild(mainCompoundSpan);
            element.appendChild(secondaryCompoundSpan);
        }
         else {
            price2 = 0;
        }
    }

    if (element.dataset.conditionCheck === 'upgradeCheck' && quantity >= price && quantity2 >= price2) { //reason for quantity2 being -1 higher up
        if (element.tagName.toLowerCase() !== 'button' && price2 > 0) {
            document.getElementById('mainCompoundPriceText').classList.add('green-ready-text');
            document.getElementById('secondaryCompoundPriceText').classList.add('green-ready-text');
            document.getElementById('mainCompoundPriceText').classList.remove('red-disabled-text');
            document.getElementById('secondaryCompoundPriceText').classList.remove('red-disabled-text');
        }
        element.classList.remove('red-disabled-text');
    } else {
        if (element.tagName.toLowerCase() !== 'button' && price2 > 0) {
            if (quantity < price) {
                document.getElementById('mainCompoundPriceText').classList.add('red-disabled-text');
                document.getElementById('mainCompoundPriceText').classList.remove('green-ready-text');
                element.classList.add('red-disabled-text');
            } else {
                document.getElementById('mainCompoundPriceText').classList.add('green-ready-text');
            }
            if (quantity2 < price2) {
                document.getElementById('secondaryCompoundPriceText').classList.add('red-disabled-text');
                document.getElementById('secondaryCompoundPriceText').classList.remove('green-ready-text'); 
                element.classList.add('red-disabled-text');
            } else {
                document.getElementById('secondaryCompoundPriceText').classList.add('green-ready-text');
            }
            if (quantity >= price && quantity2 >= price2) {
                element.classList.remove('red-disabled-text');
            }
        } else if (element.tagName.toLowerCase() !== 'button') {
            if (quantity < price) {
                element.classList.add('red-disabled-text');
            } else {
                element.classList.remove('red-disabled-text');
            }
        } else { //buttons
            if (element.parentElement.parentElement.querySelector('.description-container').firstChild.classList.contains('red-disabled-text')) { //could cause problems with compound autobuyers if introduced, even when this is working as intended
                element.classList.add('red-disabled-text');
            } else {
                element.classList.remove('red-disabled-text');
            }
        }
    }

    if (getElements()[compound + 'Rate'].textContent.includes('-')) {
        getElements()[compound + 'Rate'].classList.add('red-disabled-text');
    } else {
        getElements()[compound + 'Rate'].classList.remove('red-disabled-text');
    }
}

function resourceCostSellChecks(element) {
    let resource = element.dataset.type;
    const techName = element.dataset.type;
    const type = element.dataset.type;
    const resourceToFuseTo = element.dataset.resourceToFuseTo;

    //science / building upgrades
    const scienceUpgradeType = element.dataset.resourceToFuseTo;
    const buildingUpgradeType = element.dataset.resourceToFuseTo;
    const spaceUpgradeType = element.dataset.resourceToFuseTo;

    if (resource === 'storage' || resource === 'autoBuyer') {
        resource = element.dataset.argumentCheckQuantity;
    }

    const checkQuantityString = element.dataset.argumentCheckQuantity;

    let quantity;

    if (checkQuantityString === 'cash') {
        quantity = getResourceDataObject('currency', ['cash']);
    } else if (checkQuantityString === 'time') {
        quantity = 0;
    } else {
        if (checkQuantityString === 'research') {
            quantity = getResourceDataObject('research', ['quantity']); //research
        } else {
            quantity = getResourceDataObject('resources', [checkQuantityString, 'quantity']); //research
        } 
    }

    if (element.classList.contains('sell') || element.dataset.conditionCheck === 'sellResource') { //sell
        return setStateOfSellResourceButton(element, quantity);
    }

    if (element.classList.contains('fuse') || element.dataset.conditionCheck === 'fuseResource') {
        return setStateOfFuseResourceButton(element, quantity, resource, resourceToFuseTo);
    }

    if (element.classList.contains('tech-unlock') || element.dataset.conditionCheck === 'techUnlock') { 
        return handleTechnologyScreenButtonAndDescriptionStates(element, quantity, techName);
    }        

    let price = setPriceForAllPurchases(element, type, resource, scienceUpgradeType, buildingUpgradeType, spaceUpgradeType);

    let resourcePrices = [];
    let resourceNames = [];
    let resourceCategories = [];

    if (element.classList.contains('building-purchase')) {
        ({ resourcePrices, resourceNames, resourceCategories } = setUpResourcePricesNamesCategories(resource, type, spaceUpgradeType, buildingUpgradeType));
    }

    checkIfHaveEnoughResourceForUpgradeAndSetState(element, quantity, price);
    
    if (element.dataset.conditionCheck === 'upgradeCheck' && quantity >= price) {
        setStateOfDescriptionLabelsForAutoBuyers(element, price, quantity, resourceCategories, resourceNames, resourcePrices);
    } else {
        setStateOfDescriptionLabelsForBuildingAndOneOffSpacePurchases(element, price, quantity, resourceCategories, resourceNames, resourcePrices);
    } 

    if (resource !== 'energy' && resource !== 'spaceUpgrade' && resource !== 'scienceUpgrade' && resource !== 'cash' && resource !== 'time') {
        handleResourceRateStates(resource);
    } else if (resource === 'spaceUpgrade') {
        handleSpaceUpgradeResourceType(element);
    } else if (resource === 'cash') { //build launchPad, spaceTelescope, startFuellingAutoBuyers
        handleRocketFuellingChecksAndOneOffPurchases(element, price);
        //add any more that need resource === cash
    } else if (resource === 'time') {
        //should be handled in the timer itself
    } 
}

function setPriceForAllPurchases(element, type, resource, scienceUpgradeType, buildingUpgradeType, spaceUpgradeType) {
    let mainKey;
    let price;

    if (type === 'autoBuyer') {
        if (resource === 'cash') { //rocketFuelBuyer
            const autoBuyerTier = element.dataset.autoBuyerTier;
            let rocket;
            for (let clas of element.classList) {
                if (clas.includes("rocket")) {
                    rocket = clas;
                    break;
                }
            }
            price = getResourceDataObject('space', ['upgrades', rocket, 'autoBuyer', autoBuyerTier, 'price']);
        } else if (resource === 'time') { //for things like search asteroid
            price = 0;
        } else {
            mainKey = 'resources';
            const autoBuyerTier = element.dataset.autoBuyerTier;
            if (autoBuyerTier === 'tier0') return 0;
            price = getResourceDataObject(mainKey, [resource, 'upgrades', 'autoBuyer', autoBuyerTier, 'price']);
        }

    } else if (type === 'scienceUpgrade') {
        mainKey = 'research';
        price = getResourceDataObject(mainKey, ['upgrades', scienceUpgradeType, 'price']);
    } else if (type === 'energy') {
        mainKey = 'buildings';
        price = getResourceDataObject(mainKey, [resource, 'upgrades', buildingUpgradeType, 'price']);
    } else if (type === 'spaceUpgrade') {
        mainKey = 'space';
        price = getResourceDataObject(mainKey, ['upgrades', spaceUpgradeType, 'price']);
    } else {
        if (element.dataset.type === "research") {
            mainKey = 'research';
            price = getResourceDataObject(mainKey, ['quantity']);
        } else if (element.dataset.type === "storage") {
            mainKey = 'resources' //storageCapacity
            price = getResourceDataObject(mainKey, [resource, 'storageCapacity']) - 1;
            if (element.tagName.toLowerCase() !== 'button') {
                element.textContent = `${price} ${getResourceDataObject(mainKey, [resource, 'nameResource'])}`;
            }
        }
    }

    return price;
}

function handleTechnologyScreenButtonAndDescriptionStates(element, quantity, techName) {
    const prerequisiteArray = getResourceDataObject('techs', [techName, 'appearsAt']).slice(1).filter(prereq => prereq !== null && prereq !== '');
        
    if (element && quantity >= getResourceDataObject('techs', [techName, 'price'])) {
        element.classList.remove('red-disabled-text');
    } else if (element) {
        element.classList.add('red-disabled-text');
    }

    if (element.tagName.toLowerCase() === 'button') {
        if (quantity >= getResourceDataObject('techs', [techName, 'price'])) {
            const allPrerequisitesUnlocked = prerequisiteArray.every(prerequisite => getTechUnlockedArray().includes(prerequisite));

            if (allPrerequisitesUnlocked) {
                element.classList.remove('red-disabled-text');
            } else {
                element.classList.add('red-disabled-text');
            }
        }
    } else { 
        const prerequisiteSpan = element.querySelector('span');
        
        if (prerequisiteSpan) {
            const technologiesString = prerequisiteSpan.textContent.trim();
            if ((technologiesString !== "" && element.tagName.toLowerCase() !== 'button') || element.tagName.toLowerCase() === 'button') {
                const technologiesArray = technologiesString.split(', ');
                prerequisiteSpan.innerHTML = '';

                technologiesArray.forEach((tech, index) => {

                    const techSpan = document.createElement('span');
                    techSpan.textContent = tech.trim();
                    const techSpanArrayName = /^[A-Z]{2,}/.test(tech.split(' ')[0]) 
                    ? tech.replace(/\s+/g, '')
                    : tech.charAt(0).toLowerCase() + tech.slice(1).replace(/\s+/g, '');

                    if (getTechUnlockedArray().includes(techSpanArrayName)) {
                        techSpan.classList.add('green-ready-text');
                        techSpan.classList.remove('red-disabled-text');
                    } else {
                        techSpan.classList.remove('green-ready-text');
                        techSpan.classList.add('red-disabled-text');
                    }
                    prerequisiteSpan.appendChild(techSpan);

                    if (index < technologiesArray.length - 1) {
                        prerequisiteSpan.appendChild(document.createTextNode(', '));
                    }
                });
            }
        }
    }

    if (getTechUnlockedArray().includes(techName)) {
        if (element.tagName.toLowerCase() === 'button') {
            setSellFuseCreateTextDescriptionClassesBasedOnButtonStates(element, 'green');
        }
        element.classList.remove('red-disabled-text');
        element.classList.add('green-ready-text');
        element.textContent = 'Researched';
        element.style.pointerEvents = 'none';
        setTechRenderChange(true);
    }
}

function setStateOfSellResourceButton(element, quantity) {
    if (quantity > 0) { 
        element.classList.remove('red-disabled-text');
    } else {
        element.classList.add('red-disabled-text');
    }
}

function setStateOfFuseResourceButton(element, quantity, resource, resourceToFuseTo) {
    if (getTechUnlockedArray().includes(resource + 'Fusion') && getUnlockedResourcesArray().includes(resourceToFuseTo)) {
        element.classList.remove('invisible'); 
    }

    if (getTechUnlockedArray().includes(resource + 'Fusion') && quantity > 0) {
        element.classList.remove('red-disabled-text');
        if (element.tagName.toLowerCase() === 'button') {
            setSellFuseCreateTextDescriptionClassesBasedOnButtonStates(element, 'fuse');
        }
    } else if (!getTechUnlockedArray().includes(resource + 'Fusion')) {
        element.classList.add('invisible');
    } else {
        element.classList.remove('warning-orange-text');
        element.classList.add('red-disabled-text');
    }
}

function setUpResourcePricesNamesCategories(resource, type, spaceUpgradeType, buildingUpgradeType) {
    let resourceCategories = [];
    let resourcePrices = [];
    let resourceNames = [];

    if (type === 'spaceUpgrade') {
        resourcePrices.push(
            getResourceDataObject('space', ['upgrades', spaceUpgradeType, 'resource1Price'])[0],
            getResourceDataObject('space', ['upgrades', spaceUpgradeType, 'resource2Price'])[0],
            getResourceDataObject('space', ['upgrades', spaceUpgradeType, 'resource3Price'])[0]
        );
        resourceNames.push(
            getResourceDataObject('space', ['upgrades', spaceUpgradeType, 'resource1Price'])[1],
            getResourceDataObject('space', ['upgrades', spaceUpgradeType, 'resource2Price'])[1],
            getResourceDataObject('space', ['upgrades', spaceUpgradeType, 'resource3Price'])[1]
        );
        resourceCategories.push(
            getResourceDataObject('space', ['upgrades', spaceUpgradeType, 'resource1Price'])[2],
            getResourceDataObject('space', ['upgrades', spaceUpgradeType, 'resource2Price'])[2],
            getResourceDataObject('space', ['upgrades', spaceUpgradeType, 'resource3Price'])[2]
        );
    } else {
        if (resource !== 'time') {
            resourcePrices.push(
                getResourceDataObject('buildings', ['energy', 'upgrades', buildingUpgradeType, 'resource1Price'])[0],
                getResourceDataObject('buildings', ['energy', 'upgrades', buildingUpgradeType, 'resource2Price'])[0],
                getResourceDataObject('buildings', ['energy', 'upgrades', buildingUpgradeType, 'resource3Price'])[0]
            );
            resourceNames.push(
                getResourceDataObject('buildings', ['energy', 'upgrades', buildingUpgradeType, 'resource1Price'])[1],
                getResourceDataObject('buildings', ['energy', 'upgrades', buildingUpgradeType, 'resource2Price'])[1],
                getResourceDataObject('buildings', ['energy', 'upgrades', buildingUpgradeType, 'resource3Price'])[1]
            );
            resourceCategories.push(
                getResourceDataObject('buildings', ['energy', 'upgrades', buildingUpgradeType, 'resource1Price'])[2],
                getResourceDataObject('buildings', ['energy', 'upgrades', buildingUpgradeType, 'resource2Price'])[2],
                getResourceDataObject('buildings', ['energy', 'upgrades', buildingUpgradeType, 'resource3Price'])[2]
            );
        }
    }

    return { resourceCategories: resourceCategories, resourceNames: resourceNames, resourcePrices: resourcePrices };
}

function checkIfHaveEnoughResourceForUpgradeAndSetState(element, quantity, price) {
    if (element.dataset.conditionCheck === 'upgradeCheck' && quantity >= price && element.dataset.argumentCheckQuantity !== 'time') {
        element.classList.remove('red-disabled-text');
    } else {
        element.classList.add('red-disabled-text');
    }
}

function handleResourceRateStates(resource) {
    if (getElements()[resource + 'Rate'].textContent.includes('-')) {
        getElements()[resource + 'Rate'].classList.add('red-disabled-text');
    } else {
        getElements()[resource + 'Rate'].classList.remove('red-disabled-text');
    }
}

function setStateOfDescriptionLabelsForAutoBuyers(element, price, quantity, resourceCategories, resourceNames, resourcePrices) {
    if (element.classList.contains('building-purchase')) {
        element.querySelectorAll('span').forEach((span, index) => {
            if (index !== 0) {
                const category = resourceCategories[index-1];
                const name = resourceNames[index-1];
                const price = resourcePrices[index-1];

                if (category && getResourceDataObject(category, [name, 'quantity']) > price) {
                    span.classList.remove('red-disabled-text');
                    span.classList.add('green-ready-text');
                } else if (category) {
                    span.classList.add('red-disabled-text');
                    span.classList.remove('green-ready-text');
                }
            } else {
                if (element.dataset.conditionCheck === 'upgradeCheck' && quantity >= price) {
                    span.classList.remove('red-disabled-text');
                    span.classList.add('green-ready-text');  
                } else {
                    span.classList.add('red-disabled-text');
                    span.classList.remove('green-ready-text');
                }
            }
        });
    } else if (element.dataset.argumentCheckQuantity !== 'time') {
        element.classList.remove('red-disabled-text');
    } else if (element.dataset.argumentCheckQuantity === 'time') {
        if (getPowerOnOff()) {
            element.classList.remove('red-disabled-text');
        } else {
            element.classList.add('red-disabled-text');
        }
    }
}

function setStateOfDescriptionLabelsForBuildingAndOneOffSpacePurchases(element, price, quantity, resourceCategories, resourceNames, resourcePrices) {
    if (element.classList.contains('building-purchase') && !element.classList.contains('building-purchase-button')) {
        element.querySelectorAll('span').forEach((span, index) => {
            if (index !== 0) {
                const category = resourceCategories[index-1];
                const name = resourceNames[index-1];
                const price = resourcePrices[index-1];
    
                if (category && getResourceDataObject(category, [name, 'quantity']) > price) {
                    span.classList.remove('red-disabled-text');
                    span.classList.add('green-ready-text');
                } else if (category) {
                    span.classList.add('red-disabled-text');
                    span.classList.remove('green-ready-text');
                }
            } else {
                if (element.dataset.conditionCheck === 'upgradeCheck' && quantity >= price) {
                    span.classList.remove('red-disabled-text');
                    span.classList.add('green-ready-text');  
                } else {
                    span.classList.add('red-disabled-text');
                    span.classList.remove('green-ready-text');
                }
            }
        });
    } else {
        element.classList.add('red-disabled-text');
    }
}

function setStateOfButtonsBasedOnDescriptionStateForBuildingPurchases(element) {
    const spans = element.querySelectorAll('span');

    let hasRedDisabledText = false;
    spans.forEach(span => {
        if (span.classList.contains('red-disabled-text')) {
            hasRedDisabledText = true;
        }
    });

    const buyButton = element.parentElement.parentElement.querySelector('button');

    if (hasRedDisabledText) {
        buyButton.classList.add('red-disabled-text');
    } else {
        if (buyButton.innerHTML !== 'Built!' && buyButton.innerHTML !== 'Launched!') {
            buyButton.classList.remove('red-disabled-text');
        }
    }
}

function handleVisibilityOfOneOffPurchaseButtonsAndDescriptions(element) {
    const upgradeTypes = ['launchPad', 'spaceTelescope'];

    upgradeTypes.forEach(upgradeType => {
        if (element.classList.contains(upgradeType)) {
            if (getResourceDataObject('space', ['upgrades', upgradeType, `${upgradeType}BoughtYet`])) {
                const accompanyingLabel = element.parentElement.nextElementSibling.querySelector('label');
    
                element.classList.add('invisible');
                document.getElementById(`${upgradeType}AlreadyBoughtText`).classList.remove('invisible');
                accompanyingLabel.classList.add('invisible');
            }
        }
    });

    if (element.innerHTML === 'Built!' || element.innerHTML === 'Launched!') {
        element.classList.remove('green-ready-text');
        element.classList.add('red-disabled-text');
        const rocketNumber = element.dataset.resourceToFuseTo;
        const partsCountElement = document.getElementById(`${rocketNumber}PartsCountText`);
        partsCountElement.classList.add('invisible');
        return true;
    }
    return false;
}

function handleRocketFuellingChecksAndOneOffPurchases(element, price) {
    let rocket;
    let currentCash = getResourceDataObject('currency', ['cash']);
    for (let clas of element.classList) {
        if (clas.includes("rocket")) {
            rocket = clas;
            break;
        }
    }

    const rocketsFuellerStartedArray = getRocketsFuellerStartedArray();
    const accompanyingLabel = element.parentElement.parentElement.querySelector('.description-container label');
    const filteredRockets = rocketsFuellerStartedArray.filter(item => !item.includes('FuelledUp'));
    const launchButton = document.querySelector(`.${rocket}-launch-button`);

    if (!filteredRockets.includes(rocket) && currentCash >= price) { //purchase launchPad, spaceTelescope etc
        if (element.dataset?.rowCategory !== 'rocketFuel') {
            element.classList.remove('red-disabled-text');
        } else {
            if (getPowerOnOff()) {
                element.classList.remove('red-disabled-text');
            } else {
                element.classList.add('red-disabled-text');
            }
        }        
    } else if (filteredRockets.includes(rocket)) {
        element.classList.add('invisible');
        accompanyingLabel.textContent = 'Fuelling...';
        accompanyingLabel.classList.remove('red-disabled-text');
        accompanyingLabel.classList.add('green-ready-text');
    } else {
        element.classList.add('red-disabled-text');
    }

    if (rocketsFuellerStartedArray.includes(`${rocket}FuelledUp`) && getCurrentStarSystemWeatherEfficiency()[2] !== 'rain' && getCurrentStarSystemWeatherEfficiency()[2] !== 'volcano' && getCurrentOptionPane() === rocket) {
        document.getElementById('fuelDescription').textContent = 'Ready For Launch...';
        document.getElementById('fuelDescription').classList.add('green-ready-text');
        document.getElementById('fuelDescription').classList.remove('red-disabled-text');
        setCheckRocketFuellingStatus(rocket, false);
        launchButton.classList.add('green-ready-text');
        launchButton.classList.remove('red-disabled-text');
    } else if (rocketsFuellerStartedArray.includes(`${rocket}FuelledUp`) && (getCurrentStarSystemWeatherEfficiency()[2] === 'rain' || getCurrentStarSystemWeatherEfficiency()[2] === 'volcano') && getCurrentOptionPane() === rocket) {
        document.getElementById('fuelDescription').textContent = 'Bad Weather!';
        document.getElementById('fuelDescription').classList.remove('green-ready-text');
        document.getElementById('fuelDescription').classList.add('red-disabled-text');
        launchButton.classList.remove('green-ready-text');
        launchButton.classList.add('red-disabled-text');
    }
}

function handleSpaceUpgradeResourceType(element) {
    const dataName = element.dataset.resourceToFuseTo;
    if (dataName.includes('rocket') || dataName.startsWith('ss')) {
        const builtParts = getResourceDataObject('space', ['upgrades', dataName, 'builtParts']);
        const totalParts = getResourceDataObject('space', ['upgrades', dataName, 'parts']);

        const partBuyButton = element.parentElement.parentElement.querySelector('.input-container button');

        const hasRedDisabledTextSpan = Array.from(element.querySelectorAll('span')).some(span => 
            span.classList.contains('red-disabled-text')
        );

        if (hasRedDisabledTextSpan) {
            partBuyButton.classList.add('red-disabled-text');
        }

        if (builtParts === totalParts) {
            const builtPartsElement = document.getElementById(`${dataName}BuiltPartsQuantity`);
            const totalPartsElement = document.getElementById(`${dataName}TotalPartsQuantity`);
            partBuyButton.classList.add('red-disabled-text');
            element.classList.add('green-ready-text');
            builtPartsElement.classList.add('green-ready-text');
            totalPartsElement.classList.add('green-ready-text');
            element.classList.remove('red-disabled-text');
            element.textContent = 'Built!';

            if (dataName.includes('ss') && !getResourceDataObject('space', ['upgrades', dataName, 'finished'])) {
                setResourceDataObject(true, 'space', ['upgrades', dataName, 'finished']);
            }

            if (dataName.includes('rocket') && getLaunchedRockets().includes(dataName)) {
                element.textContent = 'Launched!';
            }
        }

        if (dataName.includes('rocket')) {
            const rocketsBuiltArray = getRocketsBuilt();

            for (let i = 1; i <= 4; i++) {
                const element = document.getElementById('rocket' + i);
                if (element) {
                    if (rocketsBuiltArray.includes('rocket' + i)) {
                        element.parentElement.parentElement.classList.remove('invisible');
                    } else {
                        element.parentElement.parentElement.classList.add('invisible');
                    }
                }
            }
        }
    }
}

function checkStatusAndSetTextClasses(element) {
    if ([...element.classList].some(clas => clas.includes('travel-starship'))) {
        return checkTravelToStarElements(element);
    }

    if ([...element.classList].some(clas => clas.includes('travel-to-asteroid-button'))) {
        checkTravelToDescriptions(element); //not return as this does not affect element and so still need to check element
    }
    
    if ((element.dataset.resourceToFuseTo === 'travelToAsteroid') && getCurrentOptionPane().startsWith('rocket')) {
        return travelToAsteroidChecks(element);
    }

    if (['searchAsteroid', 'investigateStar'].includes(element.dataset.resourceToFuseTo) && getCurrentOptionPane() === 'space telescope') {
        spaceTelescopeChecks(element, element.dataset.resourceToFuseTo);
    }
    
    if (element.classList.contains('fuel-check')) {
        return powerGenerationFuelChecks(element);
    }

    if (element.classList.contains('energy-check')) {
        return energyChecks(element);
    }

    if (element.classList.contains('powered-check')) {
        return powerOnOrOffChecks(element);
    }
            
    if (element.classList.contains('building-purchase-button')) {
        const earlyReturn = handleVisibilityOfOneOffPurchaseButtonsAndDescriptions(element);
        if (earlyReturn) {
            return;
        }
    }  

    if (element.classList.contains('compound-cost-sell-check') && element.dataset && element.dataset.conditionCheck !== 'undefined' && element.dataset.resourcePriceObject !== 'undefined') {
        return compoundCostSellCreateChecks(element);
    }

    if (element.classList.contains('resource-cost-sell-check') && element.dataset && element.dataset.conditionCheck !== 'undefined' && element.dataset.resourcePriceObject !== 'undefined') {
        resourceCostSellChecks(element);  
    }

    if (element.classList.contains('building-purchase')) {
        setStateOfButtonsBasedOnDescriptionStateForBuildingPurchases(element);
    }
}

function starChecks(element) {
    const starData = getStarSystemDataObject('stars');
    if (Object.keys(starData).length > 1) {
        document.getElementById('starDataOption').parentElement.parentElement.classList.remove('invisible');
    }
}

function starShipUiChecks() {
    if (getCurrentOptionPane() === 'star ship') {
        const travelToDestinationStarRow = document.getElementById('spaceStarShipTravelRow');
        const scanDestinationStarRow = document.getElementById('spaceStarShipStellarScannerRow');
        const destinationStarDetailsRow = document.getElementById('spaceDestinationStgarDetailsRow');

        if (travelToDestinationStarRow) {
            if (getStarShipTravelling() && getStarShipStatus()[0] === 'travelling') {
                travelToDestinationStarRow.classList.remove('invisible');
            } else {
                travelToDestinationStarRow.classList.add('invisible');
            }
        }

        if (scanDestinationStarRow) {
            if (!getDestinationStarScanned() && (getStarShipArrowPosition() > getStellarScannerRange() || getStarShipStatus()[0] === 'orbiting')) {
                scanDestinationStarRow.classList.remove('invisible');
            } else {
                scanDestinationStarRow.classList.add('invisible');
            }
        }

        if (destinationStarDetailsRow) {
            if (getDestinationStarScanned() && getStarShipStatus()[0] === 'orbiting') { // && getStarShipStatus()[0] add invading, landing etc however it is
                destinationStarDetailsRow.classList.remove('invisible');
            } else {
                destinationStarDetailsRow.classList.add('invisible');
            }
        }
    }

    if (getCurrentOptionPane() !== 'star map' || getCurrentTab()[1] !== 'Interstellar') {
        removeStarConnectionTooltip();
        removeOrbitCircle();
    }

    if (getCurrentOptionPane() === 'star map' && getStarShipStatus()[0] === 'readyForTravel') {
        const tooltipLayer = document.getElementById('tooltipLayer') || document.body;
        const orbitCircle = drawOrbitCircle(getCurrentStarObject());
        tooltipLayer.appendChild(orbitCircle);
        const arrowHead = drawStarShipArrowhead('', '', 'readyForTravel', orbitCircle);
        tooltipLayer.appendChild(arrowHead);
    }

    if (getResourceDataObject('space', ['upgrades']) && !getStarShipTravelling() && getStarShipStatus()[0] !== 'readyForTravel' && 
        Object.entries(getResourceDataObject('space', ['upgrades']))
            .filter(([key]) => key.startsWith('ss'))
            .every(([, upgrade]) => upgrade.finished === true)
    ) {
        setStarShipStatus(['readyForTravel', null]);
    }
}

function checkTravelToStarElements(element) {
    let starData = null;

    if (getCurrentOptionPane() === 'star map') {
        if (!getStarShipBuilt()) {
            spaceTravelButtonHideAndShowDescription();
        }
        
        const starNameElement = document.getElementById('starDestinationName');
        if (!starNameElement) return;

        const starName = starNameElement.innerText.substring(starNameElement.innerText.indexOf(' ') + 1).toLowerCase();
        const starSystemData = getStarSystemDataObject('stars');

        if (starSystemData.hasOwnProperty(starName)) {
            starData = getStarSystemDataObject('stars', [starName]);
            if (!starData) return;
        } else {
            return;
        }

        const fuelNeeded = starData.fuel;
        const currentAntimatter = getResourceDataObject('antimatter', ['quantity']);
        const canTravel = currentAntimatter >= fuelNeeded && getTechUnlockedArray().includes('FTLTravelTheory');

        if (element.classList.contains('travel-starship-button')) {
            element.classList.toggle('red-disabled-text', !canTravel);
            element.classList.toggle('green-ready-text', canTravel);
            return;
        }

        const themeElement = document.querySelector('[data-theme]');
        if (!themeElement) return;

        const themeStyles = getComputedStyle(themeElement);
        const readyColor = themeStyles.getPropertyValue('--ready-text').trim();
        const disabledColor = themeStyles.getPropertyValue('--disabled-text').trim();

        const labelElement = element.querySelector('span:first-child');
        if (!labelElement) return;

        labelElement.style.color = getStarShipTravelling() ? readyColor : (canTravel ? readyColor : disabledColor);

        if (getStarShipTravelling() && getCurrentTab()[1] === "Interstellar" && getStarShipStatus()[0] !== 'orbiting') {       
            drawStarConnectionDrawings(getCurrentStarSystem(), getDestinationStar(), 'travelling');
            removeOrbitCircle();
            spaceTravelButtonHideAndShowDescription();
        } else if (getCurrentTab()[1] === "Interstellar" && getStarShipStatus()[0] === 'orbiting') {
            labelElement.textContent = 'Orbiting...'
            drawStarConnectionDrawings(getCurrentStarSystem(), getDestinationStar(), 'orbiting');
            document.getElementById('starDestinationDescription').textContent = 'Orbiting...';
        }
    }
}

function checkTravelToDescriptions(element) {
    const rocket = getCurrentOptionPane();
    if (getCurrentlyTravellingToAsteroid(rocket)) {
        if (getRocketDirection(rocket)) {
            const timerElement = timerManager.getTimer(`${rocket}TravelReturnTimer`);
            if (timerElement) {
                const timeLeft = Math.floor(getTimeLeftUntilRocketTravelToAsteroidTimerFinishes(rocket) / 1000);
                const labelElement = element.parentElement.parentElement.querySelector('div.description-container label');
                labelElement.classList.add('green-ready-text');
                labelElement.classList.remove('red-disabled-text');
                labelElement.innerHTML = `Returning ... ${timeLeft}s`;
            }
        } else {
            const timerElement = timerManager.getTimer(`${rocket}TravelToAsteroidTimer`);
            if (timerElement) {
                const timeLeft = Math.floor(getTimeLeftUntilRocketTravelToAsteroidTimerFinishes(rocket) / 1000);
                const labelElement = element.parentElement.parentElement.querySelector('div.description-container label');
                labelElement.classList.add('green-ready-text');
                labelElement.classList.remove('red-disabled-text');
                labelElement.innerHTML = `Travelling ... ${timeLeft}s`;
            }
        }
    }
}

export function setSellFuseCreateTextDescriptionClassesBasedOnButtonStates(element, type) {
    if (type === 'create') {
        const accompanyingLabel = element.parentElement.nextElementSibling.querySelector('label');
        if (accompanyingLabel.textContent.includes('!')) {
            accompanyingLabel.classList.add('warning-orange-text');
        } else {
            accompanyingLabel.classList.remove('warning-orange-text');
        }
    } else if (type === 'green') {
        const accompanyingLabel = element.parentElement.nextElementSibling.querySelector('label');
        accompanyingLabel.classList.remove('red-disabled-text');
        accompanyingLabel.classList.add('unlocked-tech');
        accompanyingLabel.classList.add('green-ready-text');
        accompanyingLabel.textContent = 'Researched';
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

const updateQuantityDisplays = (element, data1, data2, resourceData1, resourceData2, resourceData3, desc) => {
    const [resourcePrice1, resourceName1] = resourceData1 || [null, null];
    const [resourcePrice2, resourceName2] = resourceData2 || [null, null];
    const [resourcePrice3, resourceName3] = resourceData3 || [null, null];

    if (desc) {
        if (element && data2) {
            let priceString = "";
    
            if (data2 === '€') {
                priceString = data1 + data2;
            } else if (data2 === getCurrencySymbol()) {
                priceString = data2 + data1;
            } else {
                priceString = data1 + ' ' + data2;
            }
    
            const resourceParts = [];
            if (resourcePrice1 != null && resourceName1 && resourceName1.trim() !== "") {
                resourceParts.push(resourcePrice1 + " " + resourceName1);
            }
            if (resourcePrice2 != null && resourceName2 && resourceName2.trim() !== "") {
                resourceParts.push(resourcePrice2 + " " + resourceName2);
            }
            if (resourcePrice3 != null && resourceName3 && resourceName3.trim() !== "") {
                resourceParts.push(resourcePrice3 + " " + resourceName3);
            }

            element.innerHTML = "";

            const priceSpan = document.createElement("span");
            priceSpan.className = 'currency-price';
            priceSpan.innerHTML = priceString;
            element.appendChild(priceSpan);
    
            if (resourceParts.length > 0) {
                resourceParts.forEach((resource, index) => {
                    const resourceSpan = document.createElement("span");
                    resourceSpan.className = `resource-price${index + 1}`;
                    resourceSpan.innerHTML = `, ${resource}`;
                    element.appendChild(resourceSpan);
                });
            }
        }     
    } else {
        if (element && data2 >= 0) {
            if (element === getElements().energyQuantity) {
                if (getResourceDataObject('buildings', ['energy', 'batteryBoughtYet'])) {
                    element.textContent = Math.floor(data1) + '/' + Math.floor(data2);
                } else {
                    element.textContent = Math.floor(data1);
                }
            } else if (element === getElements().researchQuantity) {
                element.textContent = Math.floor(data1);
            } else if (element.id && element.id.includes('power')) {
                element.textContent = Math.floor(data1);
            } else {
                element.textContent = Math.floor(data1) + '/' + Math.floor(data2);
            }
        } else if (element) {
            element.textContent = Math.floor(data1);
        }

        if (element && data2 && data1 === data2) {
            element.classList.add('green-ready-text');
        }

        if (element && element.classList.contains('green-ready-text') && data1 !== data2) {
            element.classList.remove('green-ready-text');
        }
    }
};

export function gain(incrementAmount, elementId, item, ABOrTechPurchase, tierAB, resourceCategory, itemType) {
    let resourceType;

    if (resourceCategory === 'research') {
        resourceType = 'research';
    } else if (resourceCategory === 'techs') { 
        resourceType = 'techs';
    } else if (resourceCategory === 'scienceUpgrade') { 
        resourceType = 'scienceUpgrade';
    } else if (resourceCategory === 'energy') { 
        resourceType = 'energy';
    } else if (resourceCategory === 'space') { 
        resourceType = 'space';
    } else {
        resourceType = itemType.slice(0, -1);
    }

    let currentQuantity;

    if (item && item === 'techUnlock') {
        currentQuantity = getResourceDataObject('techs', [incrementAmount, 'price']);
    } else if (item && item.startsWith('science')) {
        currentQuantity = getResourceDataObject('research', ['upgrades', item, 'quantity']); 
    } else if ((item && item.startsWith('power')) || (item && item.startsWith('battery'))) {
        currentQuantity = getResourceDataObject('buildings', ['energy', 'upgrades', item, 'quantity']);
    } else if ((item && (item.startsWith('rocket') || item.startsWith('ss')))) {
        currentQuantity = getResourceDataObject('space', ['upgrades', item, 'builtParts']);
    } else if (item && item === 'autoBuyer') {
        currentQuantity = getResourceDataObject(itemType, [resourceCategory, 'upgrades', 'autoBuyer', tierAB, 'quantity']);
    } else {
        currentQuantity = getResourceDataObject(itemType, [resourceCategory, 'quantity']);
    }

    if (ABOrTechPurchase) {
        if (ABOrTechPurchase === 'techUnlock') {
            setResourceDataObject(getResourceDataObject('research', ['quantity']) - currentQuantity, 'research', ['quantity']);
        } else {
            setResourceDataObject(currentQuantity + incrementAmount, itemType, [resourceCategory, 'upgrades', 'autoBuyer', tierAB, 'quantity']); //ab end up here should add to ab
        }
    } else {
        if (resourceType === 'scienceUpgrade') {
            setResourceDataObject(currentQuantity + incrementAmount, 'research', ['upgrades', item, 'quantity']); 
        } else if (resourceType === 'energy') { 
            setResourceDataObject(currentQuantity + incrementAmount, 'buildings', ['energy', 'upgrades', item, 'quantity']);
            if (item.startsWith('power')) {
                const powerBuildingFuelType = getResourceDataObject('buildings', ['energy', 'upgrades', item, 'fuel'])[0];
                const powerBuildingFuelBurnRate = getResourceDataObject('buildings', ['energy', 'upgrades', item, 'fuel'])[1];
                const powerBuildingFuelCategory = getResourceDataObject('buildings', ['energy', 'upgrades', item, 'fuel'])[2];
                const fuelObject = getResourceDataObject(powerBuildingFuelCategory, [powerBuildingFuelType]);
                setResourceDataObject(fuelObject.usedForFuelPerSec + powerBuildingFuelBurnRate, powerBuildingFuelCategory, [powerBuildingFuelType, 'usedForFuelPerSec']);
                
                if (getActivatedFuelBurnObject(powerBuildingFuelType)) {
                    const actualRateOfPowerBuildingFuel = getResourceDataObject(powerBuildingFuelCategory, [powerBuildingFuelType, 'rate']);
                    setResourceDataObject(actualRateOfPowerBuildingFuel - powerBuildingFuelBurnRate, powerBuildingFuelCategory, [powerBuildingFuelType, 'rate']);
                }
            }
        } else if (resourceType === 'resource' || resourceType === 'compound') {
            const storageCapacity = getResourceDataObject(itemType, [resourceCategory, 'storageCapacity']);
            if (currentQuantity < storageCapacity) {
                getElements()[elementId].classList.remove('green-ready-text');
                setResourceDataObject(currentQuantity + incrementAmount, itemType, [resourceCategory, 'quantity']);
            } else {
                setResourceDataObject(storageCapacity, itemType, [resourceCategory, 'quantity']);
            }
            return;
        } else if (resourceType === 'research') {
            getElements()[elementId].classList.remove('green-ready-text');
            setResourceDataObject(currentQuantity + incrementAmount, 'research', ['quantity']);
        } else if (resourceType === 'space') {
            setResourceDataObject(currentQuantity + incrementAmount, 'space', ['upgrades', item, 'builtParts']);
            const builtParts = getResourceDataObject('space', ['upgrades', item, 'builtParts']);
            const totalParts = getResourceDataObject('space', ['upgrades', item, 'parts']);

            if (builtParts === totalParts && item.startsWith('rocket')) {
                setRocketsBuilt(item);
            }

            if (builtParts === totalParts && item.startsWith('ss')) {
                setStarShipModulesBuilt(item);
            }
        }
    }    

    let amountToDeduct;
    let resource1ToDeduct = 0;
    let resource2ToDeduct = 0;
    let resource3ToDeduct = 0;
    let itemSetNewPrice;

    let itemObject;
    if (resourceCategory === 'research') {
        itemObject = getResourceDataObject('research', ['upgrades', item]);
    } else if (resourceCategory === 'techs') {
        sortTechRows(false);
        return;
    } else if (resourceCategory === 'scienceUpgrade') {
        itemObject = getResourceDataObject('research', ['upgrades', item]);
    } else if (resourceCategory === 'energy') {
        itemObject = getResourceDataObject('buildings', ['energy', 'upgrades', item]);
    } else if (resourceCategory === 'space') {
        itemObject = getResourceDataObject('space', ['upgrades', item]);
    } else {
        itemObject = getResourceDataObject(itemType, [resourceCategory]);
    }
    
    if (ABOrTechPurchase) {
        amountToDeduct = itemObject.upgrades.autoBuyer[tierAB].price;
        itemSetNewPrice = itemObject.upgrades.autoBuyer[tierAB].setPrice;
    } else { //energy / space
        amountToDeduct = itemObject.price;
        if (resourceCategory === 'energy' || resourceCategory === 'space') {
            resource1ToDeduct = itemObject.resource1Price[0];
            resource2ToDeduct = itemObject.resource2Price[0];
            resource3ToDeduct = itemObject.resource3Price[0];
        }
        itemSetNewPrice = itemObject.setPrice;
    }

    let itemToDeduct1Name;
    let itemToDeduct2Name = '';
    let itemToDeduct3Name = '';
    let itemToDeduct4Name = '';

    let itemCategory1 = '';
    let itemCategory2 = '';
    let itemCategory3 = '';

    let resourcePrices = [[0,''],[0,''],[0,'']];

    if (resourceCategory === 'scienceUpgrade' || resourceCategory === 'energy' || resourceCategory === 'space') {
        itemToDeduct1Name = 'cash';
        if (resourceCategory === 'energy' || resourceCategory === 'space') {
            itemToDeduct2Name = itemObject.resource1Price[1];
            itemToDeduct3Name = itemObject.resource2Price[1];
            itemToDeduct4Name = itemObject.resource3Price[1];

            itemCategory1 = itemObject.resource1Price[2];
            itemCategory2 = itemObject.resource2Price[2];
            itemCategory3 = itemObject.resource3Price[2];
        }
        resourcePrices = [[resource1ToDeduct, itemToDeduct2Name, itemCategory1], [resource2ToDeduct, itemToDeduct3Name, itemCategory2], [resource3ToDeduct, itemToDeduct4Name, itemCategory3]];
    } else {
        itemToDeduct1Name = itemObject.screenName;
    }

    let itemToDeduct1NameArray = [itemToDeduct1Name];
    let amountToDeductArray = [amountToDeduct];
    let itemTypeArray = [itemType];

    setItemsToDeduct(itemToDeduct1NameArray, amountToDeductArray, itemTypeArray, resourcePrices);
    setItemsToIncreasePrice(itemToDeduct1Name, itemSetNewPrice, amountToDeduct, itemType, resourcePrices);
}

export function increaseResourceStorage(elementIds, resource, itemTypeArray) {
    let amountToDeductArray = [];
    let resourceToDeductNamesArray;
    const increaseFactor = getIncreaseStorageFactor();

    if (resource[0] === 'water') {
        resourceToDeductNamesArray = resource;
        const firstResourceStorage = getResourceDataObject(itemTypeArray[0], [resource[0], 'storageCapacity']);

        for (let index = 0; index < resourceToDeductNamesArray.length; index++) {
            if (index > 0) {
                amountToDeductArray.push(firstResourceStorage * 0.3);
            } else {
                amountToDeductArray.push(firstResourceStorage - 1); //to leave power on if increasing storage
            }
        }
    } else {
        resourceToDeductNamesArray = [resource[0]];
        amountToDeductArray[0] = getResourceDataObject(itemTypeArray[0], [resourceToDeductNamesArray, 'storageCapacity']) - 1; //to leave power on if increasing storage
    }

    setItemsToDeduct(resourceToDeductNamesArray, amountToDeductArray, itemTypeArray, [[0,''],[0,''],[0,'']]);

    deferredActions.push(() => {
        const updatedStorageSize = getResourceDataObject(itemTypeArray[0], [resource[0], 'storageCapacity']) * increaseFactor;
        setResourceDataObject(updatedStorageSize, itemTypeArray[0], [resource[0], 'storageCapacity']);
        if (resource.length > 1) {
            setResourceDataObject(updatedStorageSize * 0.3, itemTypeArray[1], [resource[1], 'currentSecondaryIncreasePrice']);
        }
        elementIds.forEach(elementId => {
            getElements()[elementId].classList.remove('green-ready-text');
        });
    });
}

export function revealElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('invisible');
}

export function startUpdateTimersAndRates(elementName, action) {
    if (elementName.startsWith('science')) {
        startUpdateScienceTimers(elementName);
        return;
    }

    if (elementName.startsWith('power')) {
        startUpdateEnergyTimers(elementName, action);
        return;
    }
}

function startInitialTimers() {
    const resources = getResourceDataObject('resources');
    const compounds = getResourceDataObject('compounds');
    const rockets = Object.fromEntries(Object.entries(getResourceDataObject('space', ['upgrades'])).filter(([key, value]) => key.includes('rocket')));
    const tiers = [1, 2, 3, 4];

    timerManager.addTimer('antimatter', getTimerUpdateInterval(), () => {
        if (getAntimatterUnlocked()) {
            updateAntimatterAndDiagram();
        }
    });

    for (const rocket in rockets) {
        if (rockets.hasOwnProperty(rocket)) {
            const timerName = `${rocket}FuelTimer`;
            
            if (!timerManager.getTimer(timerName)) {
                let counter = 0;
                
                timerManager.addTimer(timerName, getTimerUpdateInterval(), () => {
                    counter += getTimerUpdateInterval();
                    
                    if (counter >= 1000) {
                        setCheckRocketFuellingStatus(rocket, true);
                        counter = 0;
                    }
                });
            }
        }
    }
    
    for (const resource in resources) {
        if (resources.hasOwnProperty(resource)) {
            tiers.forEach(tier => {
                const timerName = `${resource}AB${tier}`;
                if (!timerManager.getTimer(timerName)) {
                    timerManager.addTimer(timerName, getTimerUpdateInterval(), () => {
                        const currentQuantity = getResourceDataObject('resources', [resource, 'quantity']);
                        const storageCapacity = getResourceDataObject('resources', [resource, 'storageCapacity']);
                        if (getPowerOnOff()) {
                            const autoBuyerExtractionRate = getResourceDataObject('resources', [resource, 'upgrades', 'autoBuyer', `tier${tier}`, 'rate']);
                            const currentTierAutoBuyerQuantity = getResourceDataObject('resources', [resource, 'upgrades', 'autoBuyer', `tier${tier}`, 'quantity']);
                            const calculatedResourceRate = autoBuyerExtractionRate * currentTierAutoBuyerQuantity;
                            setResourceDataObject(Math.min(currentQuantity + calculatedResourceRate, storageCapacity), 'resources', [resource, 'quantity']);
                            
                            const allResourceRatesAddedTogether = 
                                getResourceDataObject('resources', [resource, 'upgrades', 'autoBuyer', 'tier1', 'rate']) * 
                                getResourceDataObject('resources', [resource, 'upgrades', 'autoBuyer', 'tier1', 'quantity']) +
                                getResourceDataObject('resources', [resource, 'upgrades', 'autoBuyer', 'tier2', 'rate']) * 
                                getResourceDataObject('resources', [resource, 'upgrades', 'autoBuyer', 'tier2', 'quantity']) +
                                getResourceDataObject('resources', [resource, 'upgrades', 'autoBuyer', 'tier3', 'rate']) * 
                                getResourceDataObject('resources', [resource, 'upgrades', 'autoBuyer', 'tier3', 'quantity']) +
                                getResourceDataObject('resources', [resource, 'upgrades', 'autoBuyer', 'tier4', 'rate']) * 
                                getResourceDataObject('resources', [resource, 'upgrades', 'autoBuyer', 'tier4', 'quantity']);

                            const powerPlant1FuelType = 'carbon'; 
                            const powerPlant1Consumption = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant1', 'fuel'])[1] * getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant1', 'quantity']);

                            let amountToDeductForConsumption = 0;

                            if (getBuildingTypeOnOff('powerPlant1')) {
                                if (resource === powerPlant1FuelType) {
                                    amountToDeductForConsumption = powerPlant1Consumption;
                                    if (tier === 1) { //not important which tier just has to be one of them to make it run once per loop
                                        setCanAffordDeferred(true);
                                        //FIX HERE
                                        deferredActions.push(() => {
                                            if (getCanAffordDeferred()) { 
                                                setResourceDataObject(allResourceRatesAddedTogether + amountToDeductForConsumption, 'resources', [resource, 'rate']);
                                                setResourceDataObject(Math.min(getResourceDataObject('resources', [resource, 'quantity']) - amountToDeductForConsumption, storageCapacity), 'resources', [resource, 'quantity']);
                                            }
                                            setCanAffordDeferred(null);
                                        });
                                    }
                                }

                                if (resource !== 'solar') {
                                    getElements()[`${resource}Rate`].textContent = `${((allResourceRatesAddedTogether - amountToDeductForConsumption) * getTimerRateRatio()).toFixed(1)} / s`;
                                }

                            }
                        } else { //if power off
                            if (tier === 1) {
                                const autoBuyerExtractionRate = getResourceDataObject('resources', [resource, 'upgrades', 'autoBuyer', `tier1`, 'rate']);
                                const currentTierAutoBuyerQuantity = getResourceDataObject('resources', [resource, 'upgrades', 'autoBuyer', `tier1`, 'quantity']);
                                const calculatedResourceRate = autoBuyerExtractionRate * currentTierAutoBuyerQuantity;
                                setResourceDataObject(Math.min(currentQuantity + calculatedResourceRate, storageCapacity), 'resources', [resource, 'quantity']);
                                
                                const resourceTier1Rate = 
                                    getResourceDataObject('resources', [resource, 'upgrades', 'autoBuyer', 'tier1', 'rate']) * 
                                    getResourceDataObject('resources', [resource, 'upgrades', 'autoBuyer', 'tier1', 'quantity']);

                                setResourceDataObject(resourceTier1Rate, 'resources', [resource, 'rate']);
                                if (resource !== 'solar') {
                                    getElements()[`${resource}Rate`].textContent = `${(resourceTier1Rate * getTimerRateRatio()).toFixed(1)} / s`;
                                }
                            }
                        }
                    });
                }
            });
        }
    }

    for (const compound in compounds) {
        if (compounds.hasOwnProperty(compound)) {
            tiers.forEach(tier => {
                const timerName = `${compound}AB${tier}`;
                if (!timerManager.getTimer(timerName)) {
                    timerManager.addTimer(timerName, getTimerUpdateInterval(), () => {
                        const currentQuantity = getResourceDataObject('compounds', [compound, 'quantity']);
                        const storageCapacity = getResourceDataObject('compounds', [compound, 'storageCapacity']);
                        if (getPowerOnOff()) {
                            const autoBuyerExtractionRate = getResourceDataObject('compounds', [compound, 'upgrades', 'autoBuyer', `tier${tier}`, 'rate']);
                            const currentTierAutoBuyerQuantity = getResourceDataObject('compounds', [compound, 'upgrades', 'autoBuyer', `tier${tier}`, 'quantity']);
                            const calculatedCompoundRate = autoBuyerExtractionRate * currentTierAutoBuyerQuantity;
                            setResourceDataObject(Math.min(currentQuantity + calculatedCompoundRate, storageCapacity), 'compounds', [compound, 'quantity']);
                            
                            let allCompoundRatesAddedTogether = 
                                getResourceDataObject('compounds', [compound, 'upgrades', 'autoBuyer', 'tier1', 'rate']) * 
                                getResourceDataObject('compounds', [compound, 'upgrades', 'autoBuyer', 'tier1', 'quantity']) +
                                getResourceDataObject('compounds', [compound, 'upgrades', 'autoBuyer', 'tier2', 'rate']) * 
                                getResourceDataObject('compounds', [compound, 'upgrades', 'autoBuyer', 'tier2', 'quantity']) +
                                getResourceDataObject('compounds', [compound, 'upgrades', 'autoBuyer', 'tier3', 'rate']) * 
                                getResourceDataObject('compounds', [compound, 'upgrades', 'autoBuyer', 'tier3', 'quantity']) +
                                getResourceDataObject('compounds', [compound, 'upgrades', 'autoBuyer', 'tier4', 'rate']) * 
                                getResourceDataObject('compounds', [compound, 'upgrades', 'autoBuyer', 'tier4', 'quantity'])

                            if (compound === getStarSystemDataObject('stars', [getCurrentStarSystem(), 'precipitationType'])) {
                                allCompoundRatesAddedTogether += getCurrentPrecipitationRate();
                            }
    
                            const powerPlant3FuelType = 'diesel';                    
                            const powerPlant3Consumption = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant3', 'fuel'])[1] * getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant3', 'quantity']);
    
                            let amountToDeductForConsumption = 0;
                            
                            if (getBuildingTypeOnOff('powerPlant3')) {
                                if (compound === powerPlant3FuelType) {
                                    amountToDeductForConsumption = powerPlant3Consumption;
                                    if (tier === 1) { //not important which tier just has to be one of them to make it run once per loop
                                        setResourceDataObject(allCompoundRatesAddedTogether + amountToDeductForConsumption, 'compounds', [compound, 'rate']);
                                        setResourceDataObject(Math.min(getResourceDataObject('compounds', [compound, 'quantity']) - amountToDeductForConsumption, storageCapacity), 'compounds', [compound, 'quantity']);
                                    }
                                }
                            }
                            getElements()[`${compound}Rate`].textContent = `${((allCompoundRatesAddedTogether - amountToDeductForConsumption) * getTimerRateRatio()).toFixed(1)} / s`;
                        } else { //if power off
                            if (tier === 1) {
                                const autoBuyerExtractionRate = getResourceDataObject('compounds', [compound, 'upgrades', 'autoBuyer', `tier1`, 'rate']);
                                const currentTierAutoBuyerQuantity = getResourceDataObject('compounds', [compound, 'upgrades', 'autoBuyer', `tier1`, 'quantity']);
                                const calculatedCompoundRate = autoBuyerExtractionRate * currentTierAutoBuyerQuantity;
                                setResourceDataObject(Math.min(currentQuantity + calculatedCompoundRate, storageCapacity), 'compounds', [compound, 'quantity']);
                                
                                let compoundTier1Rate = 
                                    getResourceDataObject('compounds', [compound, 'upgrades', 'autoBuyer', 'tier1', 'rate']) * 
                                    getResourceDataObject('compounds', [compound, 'upgrades', 'autoBuyer', 'tier1', 'quantity']);
                                
                                if (compound === getStarSystemDataObject('stars', [getCurrentStarSystem(), 'precipitationType'])) {
                                    compoundTier1Rate += getCurrentPrecipitationRate();
                                }

                                setResourceDataObject(compoundTier1Rate, 'compounds', [compound, 'rate']);
                                getElements()[`${compound}Rate`].textContent = `${(compoundTier1Rate * getTimerRateRatio()).toFixed(1)} / s`;
                            } else {
                                if (compound === getStarSystemDataObject('stars', [getCurrentStarSystem(), 'precipitationType'])) {
                                    setResourceDataObject(getCurrentPrecipitationRate(), 'compounds', [compound, 'rate']);
                                    getElements()[`${compound}Rate`].textContent = `${(getCurrentPrecipitationRate() * getTimerRateRatio()).toFixed(1)} / s`;
                                }
                            }
                        }
                    });
                }
            });
        }
    }

    timerManager.addTimer('research', getTimerUpdateInterval(), () => {
        const currentResearchQuantity = getResourceDataObject('research', ['quantity']);
        const currentResearchRate = getResourceDataObject('research', ['rate']);
        const currentResearchRateUnpowered = getResourceDataObject('research', ['rate']) - getResourceDataObject('research', ['ratePower']);
        if (getPowerOnOff()) {
            setResourceDataObject(currentResearchQuantity + currentResearchRate, 'research', ['quantity']);
        } else {
            setResourceDataObject(currentResearchQuantity + currentResearchRateUnpowered, 'research', ['quantity']);
        }
    });
    
    timerManager.addTimer('energy', getTimerUpdateInterval(), () => {
        let newEnergyRate = 0;
        let currentEnergyQuantity = getResourceDataObject('buildings', ['energy', 'quantity']);
        const batteryBought = getResourceDataObject('buildings', ['energy', 'batteryBoughtYet']);
        const energyStorageCapacity = getResourceDataObject('buildings', ['energy', 'storageCapacity']);

        if (!getWeatherEfficiencyApplied()) {
            setResourceDataObject(getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant2', 'purchasedRate']) * getCurrentStarSystemWeatherEfficiency()[1], 'buildings', ['energy', 'upgrades', 'powerPlant2', 'purchasedRate']);
            setWeatherEfficiencyApplied(true);
        }
        
        if (Math.floor(currentEnergyQuantity) <= energyStorageCapacity) {
            if (getPowerOnOff()) {   
                if (getBuildingTypeOnOff('powerPlant1')) {
                    newEnergyRate += getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant1', 'purchasedRate'])
                }
                if (getBuildingTypeOnOff('powerPlant2')) {
                    newEnergyRate += getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant2', 'purchasedRate']);
                }
                if (getBuildingTypeOnOff('powerPlant3')) {
                    newEnergyRate += getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant3', 'purchasedRate'])
                }

                let totalRate = newEnergyRate - getTotalEnergyUse();

                if (batteryBought) {
                    if (Math.floor(currentEnergyQuantity) === energyStorageCapacity) {
                        if (totalRate >= 0) { //max energy
                            setResourceDataObject(currentEnergyQuantity, 'buildings', ['energy', 'quantity']);
                            getElements().energyQuantity.classList.remove('red-disabled-text');
                            getElements().energyQuantity.classList.add('green-ready-text');
                            totalRate = 0;
                        } else { //energy falling
                            setResourceDataObject(currentEnergyQuantity + totalRate, 'buildings', ['energy', 'quantity']);
                            getElements().energyQuantity.classList.add('red-disabled-text');
                            getElements().energyQuantity.classList.remove('green-ready-text');
                        }
                    } else { //energy climbing
                        setResourceDataObject(currentEnergyQuantity + totalRate, 'buildings', ['energy', 'quantity']);
                        getElements().energyQuantity.classList.remove('red-disabled-text');
                        getElements().energyQuantity.classList.remove('green-ready-text');
                    }
                }

                getElements().energyRate.textContent = `${Math.floor(totalRate * getTimerRateRatio())} KW / s`;
            } else {
                getElements().energyQuantity.classList.remove('red-disabled-text');
                getElements().energyQuantity.classList.remove('green-ready-text');
                getElements().energyRate.textContent = `0 KW / s`;
            }
        } else {
            getElements().energyQuantity.classList.add('green-ready-text');
            getElements().energyQuantity.classList.remove('red-disabled-text');
        }

        currentEnergyQuantity = getResourceDataObject('buildings', ['energy', 'quantity']);

        if (currentEnergyQuantity < 0) {
            setResourceDataObject(0, 'buildings', ['energy', 'quantity']);
        }

        setResourceDataObject(newEnergyRate, 'buildings', ['energy', 'rate']); 
        const powerOnNow = getPowerOnOff();
        let powerOnAfterSwitch;

        const initialPowerState = getPowerOnOff();

        if (!batteryBought) {
            const totalRate = newEnergyRate - getTotalEnergyUse();
            setPowerOnOff(totalRate > 0);
            powerOnAfterSwitch = getPowerOnOff();
        } else {
            setPowerOnOff(currentEnergyQuantity > 0.00001);
            powerOnAfterSwitch = getPowerOnOff();
        }

        if (powerOnAfterSwitch !== initialPowerState) {
            if (!getPowerOnOff()) {
                sfxPlayer.playAudio("powerOff", "powerOn");
                sfxPlayer.playAudio("powerTripped", false);
            }
        }

        if (!getPowerOnOff() && powerOnNow !== powerOnAfterSwitch) {
            const powerBuildings = Object.fromEntries(Object.entries(getResourceDataObject('buildings', ['energy', 'upgrades'])).filter(([key]) => key.startsWith('power')));

            Object.keys(powerBuildings).forEach(powerBuilding => {
                const fuelType = getResourceDataObject('buildings', ['energy', 'upgrades', powerBuilding, 'fuel'])[0];
                const fuelCategory = getResourceDataObject('buildings', ['energy', 'upgrades', powerBuilding, 'fuel'])[2];

                toggleBuildingTypeOnOff(powerBuilding, false);
                startUpdateTimersAndRates(powerBuilding, 'toggle');
                addOrRemoveUsedPerSecForFuelRate(fuelType, null, fuelCategory, powerBuilding, true);
            });
        }

        setAsteroidTimerCanContinue(getPowerOnOff() && !getCurrentlyInvestigatingStar());
        setStarInvestigationTimerCanContinue(getPowerOnOff() && !getCurrentlySearchingAsteroid());
    });

    let weatherCountDownToChangeInterval;

    changeWeather();

    function changeWeather() {
        function selectNewWeather() {
            setResourceDataObject(getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant2', 'quantity']) * getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant2', 'rate']), 'buildings', ['energy', 'upgrades', 'powerPlant2', 'purchasedRate']);
            setWeatherEfficiencyApplied(false);
            const weatherCurrentStarSystemObject = getStarSystemWeather(getCurrentStarSystem());
    
            const weatherTypes = Object.keys(weatherCurrentStarSystemObject);
            const weatherProbabilities = weatherTypes.map(weatherType => weatherCurrentStarSystemObject[weatherType][0]);
            const totalProbability = weatherProbabilities.reduce((acc, val) => acc + val, 0);
            const randomSelection = Math.random() * totalProbability;
    
            let cumulativeProbability = 0;
            let selectedWeatherType = '';
    
            for (let i = 0; i < weatherTypes.length; i++) {
                cumulativeProbability += weatherProbabilities[i];
                if (randomSelection <= cumulativeProbability) {
                    selectedWeatherType = weatherTypes[i];
                    break;
                }
            }
    
            const [probability, symbolWeather, efficiencyWeather] = weatherCurrentStarSystemObject[selectedWeatherType];
    
            const statValueSpan = document.getElementById('stat7');
            const statTitleSpan = statValueSpan.previousElementSibling;
    
            switch (selectedWeatherType) {
                case 'sunny':
                    statValueSpan.classList.add('green-ready-text');
                    statValueSpan.classList.remove('warning-orange-text');
                    statValueSpan.classList.remove('red-disabled-text');
                    break;
                case 'cloudy':
                case 'rain':
                    statValueSpan.classList.remove('green-ready-text');
                    statValueSpan.classList.add('warning-orange-text');
                    statValueSpan.classList.remove('red-disabled-text');
                    if (selectedWeatherType === 'rain') {
                        showWeatherNotification('rain');
                    }
                    break;
                case 'volcano':
                    statValueSpan.classList.remove('green-ready-text');
                    statValueSpan.classList.remove('warning-orange-text');
                    statValueSpan.classList.add('red-disabled-text');
                    showWeatherNotification('volcano');
                    break;  
            }
    
            statTitleSpan.textContent = `${capitaliseString(getCurrentStarSystem())}:`;
            statValueSpan.textContent = `${Math.floor(efficiencyWeather * 100)}% ${symbolWeather}`;
            setCurrentStarSystemWeatherEfficiency([getCurrentStarSystem(), efficiencyWeather, selectedWeatherType]);
        }
    
        selectNewWeather();
    
        const randomDurationInMinutes = Math.floor(Math.random() * 3) + 1;
        const randomDurationInMs = randomDurationInMinutes * 60 * 1000;

        //const randomDurationInMs = 10000; //DEBUG For Testing Weather

        const durationInSeconds = randomDurationInMs / 1000;

        if (weatherCountDownToChangeInterval) {
            clearInterval(weatherCountDownToChangeInterval);
        }
    
        let timeLeft = durationInSeconds;

        let precipitationRate = 0;
        let precipitationRateSet = false;
        setCurrentPrecipitationRate(0);
        
        weatherCountDownToChangeInterval = setInterval(() => {
            if (timeLeft > 0) {
                if (getCurrentStarSystemWeatherEfficiency()[2] === 'rain' && !precipitationRateSet) {
                    precipitationRate = (Math.floor(Math.random() * 4) + 1) / getTimerRateRatio();
                    setCurrentPrecipitationRate(precipitationRate);
                    precipitationRateSet = true;
                } else if (!precipitationRateSet) {
                    setCurrentPrecipitationRate(0);
                    precipitationRateSet = true;
                }

                if (getCurrentStarSystemWeatherEfficiency()[2] === 'rain' || getCurrentStarSystemWeatherEfficiency()[2] === 'volcano') {
                    if (getWeatherEffectSetting() && !getWeatherEffectOn()) {
                        startWeatherEffect(getCurrentStarSystemWeatherEfficiency()[2]);
                        setWeatherEffectOn(true);
                    }
                }

                timeLeft -= 1;
            } else {
                stopWeatherEffect();
                setWeatherEffectOn(false);
                clearInterval(weatherCountDownToChangeInterval);
                changeWeather();
            }
        }, 1000);
    }
}

function calculateStarTravelDuration(destination) {
    const starData = getStarSystemDataObject('stars', [destination]);
    if (!starData) return;

    const distance = starData.distance;
    return distance * getStarShipTravelSpeed();
}


function calculateRocketTravelDuration(destinationAsteroid) {
    const asteroidsArray = getAsteroidArray();
    const targetAsteroid = asteroidsArray.find(obj => obj.hasOwnProperty(destinationAsteroid));

    if (!targetAsteroid) return;

    const distance = targetAsteroid[destinationAsteroid].distance[0];
    const speed = getRocketTravelSpeed();

    return Math.floor(distance / speed);  
    //return 10000; //DEBUG
}

export function startTravelToAndFromAsteroidTimer(adjustment, rocket, direction) {
    if (adjustment[1] === 'offlineGains' && !getCurrentlyTravellingToAsteroid(rocket)) {
        return;
    }

    setRocketReadyToTravel(rocket, false);
    setCurrentlyTravellingToAsteroid(rocket, true);

    let destination;
    let timerName;

    if (direction) {
        setMiningObject(rocket, null);
        timerName = `${rocket}TravelReturnTimer`;
        destination = getDestinationAsteroid(rocket);
    } else {
        timerName = `${rocket}TravelToAsteroidTimer`;
        destination = getDestinationAsteroid(rocket);
    }
    
    if (!timerManager.getTimer(timerName)) {
        let counter = 0;
        const travelInterval = getTimerUpdateInterval();
        let travelDuration = adjustment[0] === 0 ? calculateRocketTravelDuration(destination) : adjustment[0];

        if (adjustment[0] === 0) {
            setRocketTravelDuration(rocket, travelDuration);
        }
        
        timerManager.addTimer(timerName, travelInterval, () => {
            const travelTimerDescriptionElement = document.getElementById('travelToDescription');
            counter += travelInterval;

            const timeLeft = Math.max(travelDuration - counter, 0);
            const timeLeftUI = `${Math.floor(Math.max(Math.floor((travelDuration - counter) / 1000), 0))}`;
            
            if (counter >= travelDuration) {
                if (direction) {
                    sfxPlayer.playAudio("rocketLand", false);
                    showNotification(`${
                        getRocketUserName(rocket)} has returned to be refuelled!`, 'info');
                    resetRocketForNextJourney(rocket);
                    timerManager.removeTimer(timerName);

                    setCurrentlyTravellingToAsteroid(rocket, false);
                    setTimeLeftUntilRocketTravelToAsteroidTimerFinishes(0);
                } else {
                    showNotification(`${getRocketUserName(rocket)} has reached ${destination} and started mining Antimatter!`, 'info');
                    timerManager.removeTimer(timerName);
    
                    if (travelTimerDescriptionElement) {             
                        travelTimerDescriptionElement.innerText = 'Mining Antimatter at ' + destination;
                    }
    
                    if (!getAntimatterUnlocked()) {
                        setAntimatterUnlocked(true);
                    }
    
                    setMiningObject(rocket, destination); //leave travelling to array true until mining finishes
                    setTimeLeftUntilRocketTravelToAsteroidTimerFinishes(0);
                    setCurrentlyTravellingToAsteroid(rocket, false);
                }
            } else {
                setTimeLeftUntilRocketTravelToAsteroidTimerFinishes(rocket, timeLeft); 
                if (travelTimerDescriptionElement) { 
                    travelTimerDescriptionElement.classList.remove('red-disabled-text');
                    travelTimerDescriptionElement.classList.add('green-ready-text');
                    if (direction) {
                        travelTimerDescriptionElement.innerText = `Returning ... ${timeLeftUI}s`;
                    } else {
                        travelTimerDescriptionElement.innerText = `Travelling ... ${timeLeftUI}s`;
                    }
                    
                    const elapsedTime = getRocketTravelDuration()[rocket] - getTimeLeftUntilRocketTravelToAsteroidTimerFinishes(rocket);
                    const progressBarPercentage = (elapsedTime / getRocketTravelDuration()[rocket]) * 100;
                    if (document.getElementById(`spaceTravelToAsteroidProgressBar${capitaliseString(rocket)}`)) {
                        document.getElementById(`spaceTravelToAsteroidProgressBar${capitaliseString(rocket)}`).style.width = `${progressBarPercentage}%`;
                    }
                }
            }
        });
    }
}

export function startTravelToDestinationStarTimer(adjustment) {
    if (adjustment[1] === 'offlineGains' && !getStarShipTravelling()) {
        return;
    }

    setStarShipTravelling(true);

    let destination = getDestinationStar();
    let timerName = 'starShipTravelToDestinationStarTimer';
    setStarShipStatus(['travelling', destination]);
    
    if (!timerManager.getTimer(timerName)) {
        let counter = 0;
        const travelInterval = getTimerUpdateInterval();
        let travelDuration = adjustment[0] === 0 ? calculateStarTravelDuration(destination) : adjustment[0];

        if (adjustment[0] === 0) {
            setStarTravelDuration(travelDuration);
        }
        
        timerManager.addTimer(timerName, travelInterval, () => {
            const travelTimerDescriptionElement = document.getElementById('travellingToDescription');
            counter += travelInterval;
        
            const timeLeft = Math.max(travelDuration - counter, 0);
            const timeLeftUI = `${Math.floor(Math.max(Math.floor((travelDuration - counter) / 1000), 0))}`;
            
            if (counter >= travelDuration) {
                showNotification(`StarShip has reached orbit of the ${capitaliseWordsWithRomanNumerals(destination)} system!`, 'info');
                timerManager.removeTimer(timerName);
        
                if (travelTimerDescriptionElement) {             
                    travelTimerDescriptionElement.innerText = 'Orbiting ' + capitaliseWordsWithRomanNumerals(destination);
                }
        
                setTimeLeftUntilTravelToDestinationStarTimerFinishes(0);
                setStarShipStatus(['orbiting', destination]);
            } else {
                setTimeLeftUntilTravelToDestinationStarTimerFinishes(timeLeft);
                const elapsedTime = getStarTravelDuration() - getTimeLeftUntilTravelToDestinationStarTimerFinishes();
                const normalizedElapsedTime = elapsedTime / getStarTravelDuration();

                if (travelTimerDescriptionElement) { 
                    travelTimerDescriptionElement.classList.remove('red-disabled-text');
                    travelTimerDescriptionElement.classList.add('green-ready-text');
                    travelTimerDescriptionElement.innerText = `Travelling ... ${timeLeftUI}s`;

                    if (document.getElementById(`spaceTravelToStarProgressBar`)) {
                        document.getElementById(`spaceTravelToStarProgressBar`).style.width = `${normalizedElapsedTime * 100}%`;
                    }
                }
                setStarShipArrowPosition(normalizedElapsedTime);
            }
        });        
    }
}

export function resetRocketForNextJourney(rocket) {
    setResourceDataObject(0, 'space', ['upgrades', rocket, 'fuelQuantity']);
    setRocketsFuellerStartedArray(rocket, 'remove', 'reset');
    setLaunchedRockets(rocket, 'remove');
    setTimeLeftUntilRocketTravelToAsteroidTimerFinishes(rocket, 0);
    setRocketTravelDuration(rocket, 0);
    setDestinationAsteroid(rocket, null);
    setRocketDirection(rocket, false);
    setCheckRocketFuellingStatus(rocket, false);
    setRocketReadyToTravel(rocket, true);
    switchFuelGaugeWhenFuellerBought(rocket, 'reset');

    if (timerManager.getTimer(`${rocket}TravelToAsteroidTimer`)) {
        timerManager.removeTimer(`${rocket}TravelToAsteroidTimer`);
    }
    
    if (timerManager.getTimer(`${rocket}TravelReturnTimer`)) {
        timerManager.removeTimer(`${rocket}TravelReturnTimer`);
    }
}

export function startInvestigateStarTimer(adjustment) {
    if (getStarInvestigationTimerCanContinue()) {
        if (adjustment[1] === 'offlineGains' && !getCurrentlyInvestigatingStar()) {
            return;
        }
        setTelescopeReadyToSearch(false);
        setCurrentlyInvestigatingStar(true);
        const timerName = 'investigateStarTimer';
        
        if (!timerManager.getTimer(timerName)) {
            let counter = 0;
            const searchInterval = getTimerUpdateInterval();
            let searchDuration = adjustment[0] === 0 ? getStarInvestigationDuration() : adjustment[0];
    
            //searchDuration = 8000; //DEBUG
    
            if (adjustment[0] === 0) {
                setCurrentInvestigateStarTimerDurationTotal(searchDuration);
            }
            
            timerManager.addTimer(timerName, searchInterval, () => {
                const searchTimerDescriptionElement = document.getElementById('studyStarsDescription');
                counter += searchInterval;
    
                const timeLeft = Math.max(searchDuration - counter, 0);
                const timeLeftUI = Math.max(Math.floor((searchDuration - counter) / 1000), 0);
                
                if (counter >= searchDuration) {
                    extendStarDataRange(false);
                    timerManager.removeTimer(timerName);
                    if (searchTimerDescriptionElement) {             
                        searchTimerDescriptionElement.innerText = 'Ready To Study';
                    }
                    setTelescopeReadyToSearch(true);
                    setCurrentlyInvestigatingStar(false);
                    setTimeLeftUntilStarInvestigationTimerFinishes(0);
                } else {
                    setTimeLeftUntilStarInvestigationTimerFinishes(timeLeft); 
                    if (searchTimerDescriptionElement) { 
                        searchTimerDescriptionElement.classList.add('green-ready-text');
                        searchTimerDescriptionElement.innerText = `Studying ... ${timeLeftUI}s`;
                        const elapsedTime = getCurrentInvestigateStarTimerDurationTotal() - getTimeLeftUntilStarInvestigationTimerFinishes();
                        const progressBarPercentage = (elapsedTime / getCurrentInvestigateStarTimerDurationTotal()) * 100;
                        document.getElementById('spaceTelescopeInvestigateStarProgressBar').style.width = `${progressBarPercentage}%`;
                    }
                }
            });
        }
    }
}

export function startSearchAsteroidTimer(adjustment) {
    if (getAsteroidTimerCanContinue()) {
        if (adjustment[1] === 'offlineGains' && !getCurrentlySearchingAsteroid()) {
            return;
        }
        setTelescopeReadyToSearch(false);
        setCurrentlySearchingAsteroid(true);
        const timerName = 'searchAsteroidTimer';
        
        if (!timerManager.getTimer(timerName)) {
            let counter = 0;
            const searchInterval = getTimerUpdateInterval();
            let searchDuration = adjustment[0] === 0 ? getAsteroidSearchDuration() : adjustment[0];
    
            //searchDuration = 12000; //DEBUG
    
            if (adjustment[0] === 0) {
                setCurrentAsteroidSearchTimerDurationTotal(searchDuration);
            }
            
            timerManager.addTimer(timerName, searchInterval, () => {
                const searchTimerDescriptionElement = document.getElementById('scanAsteroidsDescription');
                counter += searchInterval;
    
                const timeLeft = Math.max(searchDuration - counter, 0);
                const timeLeftUI = Math.max(Math.floor((searchDuration - counter) / 1000), 0);
                
                if (counter >= searchDuration) {
                    discoverAsteroid(false);
                    timerManager.removeTimer(timerName);
                    if (searchTimerDescriptionElement) {             
                        searchTimerDescriptionElement.innerText = 'Ready To Search';
                    }
                    setTelescopeReadyToSearch(true);
                    setCurrentlySearchingAsteroid(false);
                    setTimeLeftUntilAsteroidScannerTimerFinishes(0);
                } else {
                    setTimeLeftUntilAsteroidScannerTimerFinishes(timeLeft); 
                    if (searchTimerDescriptionElement) { 
                        searchTimerDescriptionElement.classList.add('green-ready-text');
                        searchTimerDescriptionElement.innerText = `Searching ... ${timeLeftUI}s`;
                        const elapsedTime = getCurrentAsteroidSearchTimerDurationTotal() - getTimeLeftUntilAsteroidScannerTimerFinishes();
                        const progressBarPercentage = (elapsedTime / getCurrentAsteroidSearchTimerDurationTotal()) * 100;
                        document.getElementById('spaceTelescopeSearchAsteroidProgressBar').style.width = `${progressBarPercentage}%`;
                    }
                }
            });
        }
    }
}

function getAsteroidSearchDuration() {
    const baseTimeDuration = getBaseSearchAsteroidTimerDuration();
    const variance = baseTimeDuration * 0.2; // 20% variance
    const randomOffset = (Math.random() * 2 - 1) * variance;
    return baseTimeDuration + randomOffset;
}

function getStarInvestigationDuration() {
    const baseTimeDuration = getBaseInvestigateStarTimerDuration();
    const variance = baseTimeDuration * 0.2; // 20% variance
    const randomOffset = (Math.random() * 2 - 1) * variance;
    return baseTimeDuration + randomOffset;
}

function getRandomNewsTickerInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

export function startNewsTickerTimer() {
    if (getNewsTickerSetting()) {
        const randomDuration = getRandomNewsTickerInterval(20, 35);
        const newsTicker = document.querySelector('.news-ticker-content');

        if (timerManager.getTimer('newsTicker')) {
            timerManager.removeTimer('newsTicker');
        }
    
        timerManager.addTimer('newsTicker', randomDuration, () => {
            newsTicker.classList.remove('invisible');
            showNewsTickerMessage(newsTickerContent);
            timerManager.removeTimer('newsTicker');
        });       
    } else {
        if (timerManager.getTimer('newsTicker')) {
            timerManager.removeTimer('newsTicker');
        }
    }
}

function startUpdateScienceTimers(elementName) {
    let newResearchRate;
    let newResearchRatePower = getResourceDataObject('research', ['ratePower']);

    const upgradeRatePerUnit = getResourceDataObject('research', ['upgrades', elementName, 'rate']);
    
    if (getResourceDataObject('research', ['upgrades', elementName, 'energyUse']) > 0) {
        newResearchRatePower = getResourceDataObject('research', ['ratePower']) + upgradeRatePerUnit;
    }
        
    newResearchRate = getResourceDataObject('research', ['rate']) + upgradeRatePerUnit;

    setResourceDataObject(newResearchRatePower, 'research', ['ratePower']);
    setResourceDataObject(newResearchRate, 'research', ['rate']);
    getElements().researchRate.textContent = `${(newResearchRate * getTimerRateRatio()).toFixed(1)} / s`;
}

function startUpdateEnergyTimers(elementName, action) {
    if (elementName.startsWith('power')) {
        let newEnergyRate = 0;
        const powerBuildingPotentialPower = getResourceDataObject('buildings', ['energy', 'upgrades', elementName, 'purchasedRate']);
        
        if (action === 'toggle') {
            if (getBuildingTypeOnOff(elementName)) {
                getElements()[elementName + 'Rate'].textContent = `${Math.floor(powerBuildingPotentialPower * getTimerRateRatio())} KW / s`;
            } else {
                getElements()[elementName + 'Rate'].textContent = `0 KW / s`;
            }
        } else if (action === 'buy') {
            getElements()[elementName + 'Rate'].textContent = `${Math.floor(powerBuildingPotentialPower * getTimerRateRatio())} KW / s`;
        }

        setResourceDataObject(newEnergyRate, 'buildings', ['energy', 'rate']);
    }
}

function formatAllNotationElements(element, notationType) {
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
                    return `${Math.floor(number / Math.pow(10, exponent) * 10) / 10}e${exponent}`;
                } else if (number >= 1e12) {
                    return `${(Math.floor(number / 1e12 * 10) / 10).toFixed(1)}e12`;
                } else if (number >= 1e9) {
                    return `${(Math.floor(number / 1e9 * 10) / 10).toFixed(1)}B`;
                } else if (number >= 1e6) {
                    return `${(Math.floor(number / 1e6 * 10) / 10).toFixed(1)}M`;
                } else if (number >= 1e3) {
                    return `${(Math.floor(number / 1e3 * 10) / 10).toFixed(1)}K`;
                } else {
                    if (element.dataset.conditionCheck === 'techUnlock' || element.dataset.type === 'building') {
                        return number; // Return the raw number for these conditions
                    } else {
                        return number.toFixed(0); // Default formatting for other cases
                    }
                }                               
            }                       
        });

        element.innerHTML = formattedContent;
}

function complexPurchaseBuildingFormatter(element, notationType) {
    if (notationType === 'normalCondensed') {
        const spans = element.querySelectorAll("span");
    
        spans.forEach((span, index) => {
            const content = span.textContent.trim();
            const parts = content.split(' ');
    
            let numberPart;
            
            if (index !== 0) {
                numberPart = parts[1]?.replace(/[^0-9.]/g, '');
            } else {
                numberPart = parts[0].replace(/[^0-9.]/g, '');
            }
            
            const formattedNumber = formatNumber(numberPart);
    
            if (index === 0) {
                if (getCurrencySymbol() === '€') {
                    span.textContent = formattedNumber + getCurrencySymbol();
                } else {
                    span.textContent = getCurrencySymbol() + formattedNumber;
                }
                
                if (parts.length > 1) {
                    span.textContent += ' ' + parts.slice(1).join(' ');
                }
            } else {
                const prefix = content.startsWith(",") ? ", " : "";
                const remainingText = parts.slice(2).join(' ');
                span.textContent = `${prefix}${formattedNumber}${remainingText ? " " + remainingText : ""}`;
            }
        });
    }    
}

function formatNumber(value) {
    const number = parseFloat(value);
    if (isNaN(number)) return value;

    if (number >= 1e13) {
        let exponent = Math.floor(Math.log10(number));
        return `${(Math.floor(number / Math.pow(10, exponent) * 10) / 10).toFixed(1)}e${exponent}`;
    } else if (number >= 1e12) {
        return `${(Math.floor(number / 1e12 * 10) / 10).toFixed(1)}e12`;
    } else if (number >= 1e9) {
        return `${(Math.floor(number / 1e9 * 10) / 10).toFixed(1)}B`;
    } else if (number >= 1e6) {
        return `${(Math.floor(number / 1e6 * 10) / 10).toFixed(1)}M`;
    } else if (number >= 1e3) {
        return `${(Math.floor(number / 1e3 * 10) / 10).toFixed(1)}K`;
    } else {
        return number.toFixed(0);
    }
}

function complexSellStringFormatter(element, notationType) {
    if (notationType === 'normalCondensed') {
        const sellRowQuantityElement = element.parentElement;
        const match = sellRowQuantityElement.innerHTML.match(/>(.*?)</); //resource fusing from
    
        if (match) {
            const beforeMatch = sellRowQuantityElement.innerHTML.slice(0, match.index + 1);
            const afterMatch = sellRowQuantityElement.innerHTML.slice(match.index + match[0].length - 1);
            const newContent = getTempRowValue();
            
            sellRowQuantityElement.innerHTML = beforeMatch + newContent + afterMatch;
    
            if (sellRowQuantityElement.innerHTML.includes('-&gt; ')) { //first number to fuse to
                formatSellStringCondensed(sellRowQuantityElement, /&gt; (-?\d+)(\s|$)/, 5, 1);
            }
            
            if (sellRowQuantityElement.innerHTML.includes(', ')) { //second number to fuse to
                formatSellStringCondensed(sellRowQuantityElement, /, (\d+)\s/, 2, 1);
            }   
        }
    }
}

function formatSellStringCondensed(element, regex, sliceOffsetBefore, sliceOffsetAfter) {
    const match = element.innerHTML.match(regex);
    if (match) {
        const capturedNumber = parseFloat(match[1]);
        let formatted;
        if (capturedNumber < 0) {
            formatted = 0;
        }else {
            if (capturedNumber >= 1e13) {
                let exponent = Math.floor(Math.log10(capturedNumber));
                formatted = `${(Math.floor(capturedNumber / Math.pow(10, exponent) * 10) / 10).toFixed(1)}e${exponent}`;
            } else if (capturedNumber >= 1e12) {
                formatted = `${(Math.floor(capturedNumber / 1e12 * 10) / 10).toFixed(1)}e12`;
            } else if (capturedNumber >= 1e9) {
                formatted = `${(Math.floor(capturedNumber / 1e9 * 10) / 10).toFixed(1)}B`;
            } else if (capturedNumber >= 1e6) {
                formatted = `${(Math.floor(capturedNumber / 1e6 * 10) / 10).toFixed(1)}M`;
            } else if (capturedNumber >= 1e3) {
                formatted = `${(Math.floor(capturedNumber / 1e3 * 10) / 10).toFixed(1)}K`;
            } else {
                formatted = capturedNumber.toFixed(0);
            }
        }        
        const beforeMatch = element.innerHTML.slice(0, match.index + sliceOffsetBefore);
        const afterMatch = element.innerHTML.slice(match.index + match[0].length - sliceOffsetAfter);
        element.innerHTML = beforeMatch + formatted + afterMatch;
    }
}

function setAllOriginalFrameNumberValues() {
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
}

function sortRowsByRenderPosition(rows, mainKey) {
    const adjustedPositions = [];

    rows.forEach(item => {
        let alreadyAdjusted = false;
        const currentPos = getResourceDataObject(mainKey, [item.techName, 'idForRenderPosition']);

        if (mainKey === 'techs') {
            const researchButton = item.row.querySelector('.input-container button');
            if (researchButton.textContent === "Researched" && currentPos < 10000) {
                adjustedPositions.push({
                    ...item,
                    adjustedPos: currentPos + 10000
                });
                alreadyAdjusted = true;
            }

            if (!researchButton.classList.contains('red-disabled-text')) {
                adjustedPositions.push({
                    ...item,
                    adjustedPos: currentPos - 10000
                });
                alreadyAdjusted = true;
            }
        }

        if (!alreadyAdjusted) {
            if (item.row.classList.contains('invisible')) {
                adjustedPositions.push({
                    ...item,
                    adjustedPos: currentPos + 10000
                });
            } else {
                if (currentPos > 10000) {
                    adjustedPositions.push({
                        ...item,
                        adjustedPos: currentPos - 10000
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

function setEnergyUse() {
    const resourceData = getResourceDataObject('resources');
    const compoundData = getResourceDataObject('compounds');
    const researchData = getResourceDataObject('research', ['upgrades']);
    const rocketData = Object.fromEntries(Object.entries(getResourceDataObject('space', ['upgrades'])).filter(([key]) => key.includes('rocket')));
    const spaceTelescope = getResourceDataObject('space', ['upgrades', 'spaceTelescope']);

    let totalEnergyUseResources = 0;
    let totalEnergyUseCompounds = 0;
    let totalEnergyUseResearch = 0;
    let totalEnergyUseRocketFuellers = 0;
    let totalEnergyUseSpaceTelescope = 0;

    for (const resourceKey in resourceData) { //autobuyer resources upgrades
        const resource = resourceData[resourceKey];
        const autoBuyer = resource.upgrades?.autoBuyer;

        if (autoBuyer) {
            for (let tierKey of ['tier1', 'tier2', 'tier3', 'tier4']) {
                const tier = autoBuyer[tierKey];

                if (tier) {
                    const energyUse = tier.energyUse || 0;
                    const quantity = tier.quantity || 0;
                    totalEnergyUseResources += energyUse * quantity;
                }
            }
        }
    }

    for (const compoundKey in compoundData) { //autobuyer compounds upgrades
        const compound = compoundData[compoundKey];
        const autoBuyer = compound.upgrades?.autoBuyer;

        if (autoBuyer) {
            for (let tierKey of ['tier1', 'tier2', 'tier3', 'tier4']) {
                const tier = autoBuyer[tierKey];

                if (tier) {
                    const energyUse = tier.energyUse || 0;
                    const quantity = tier.quantity || 0;
                    totalEnergyUseCompounds += energyUse * quantity;
                }
            }
        }
    }

    for (const researchUpgradeKey in researchData) { //science upgrades
        const researchUpgrade = researchData[researchUpgradeKey];

        if (researchUpgrade) {
            const energyUse = researchUpgrade.energyUse || 0;
            const quantity = researchUpgrade.quantity || 0;
            totalEnergyUseResearch += energyUse * quantity;
        }
    }

    for (const rocketKey in rocketData) { //rocket fuellers
        let energyUse = 0;
        const rocketFueller = rocketData[rocketKey].autoBuyer.tier1;

        if (rocketFueller) {
            if (getRocketsFuellerStartedArray().includes(rocketKey)) {
                energyUse = rocketFueller.energyUse;
            }
            totalEnergyUseRocketFuellers += energyUse;
        }
    }

    if (spaceTelescope) { //space telescope scanner
        let energyUse = 0;
        if (getCurrentlySearchingAsteroid() && getTimeLeftUntilAsteroidScannerTimerFinishes() > 0) {
            energyUse = spaceTelescope.energyUseSearchAsteroid;
        }
        if (getCurrentlyInvestigatingStar() && getTimeLeftUntilStarInvestigationTimerFinishes() > 0) {
            energyUse = spaceTelescope.energyUseInvestigateStar;
        }
        totalEnergyUseSpaceTelescope += energyUse;
    }

    setTotalEnergyUse(totalEnergyUseResources + totalEnergyUseCompounds + totalEnergyUseResearch + totalEnergyUseRocketFuellers + totalEnergyUseSpaceTelescope);
}

export function setEnergyCapacity(battery) {
    const currentEnergyCap = getResourceDataObject('buildings', ['energy', 'storageCapacity']);

    const battery1Cap = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery1', 'capacity']);
    const battery2Cap = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery2', 'capacity']);
    const battery3Cap = getResourceDataObject('buildings', ['energy', 'upgrades', 'battery3', 'capacity']);
    
    let newEnergyCap;

    switch (battery) {
        case 'battery1':
            newEnergyCap = currentEnergyCap + battery1Cap;
            break;
        case 'battery2':
            newEnergyCap = currentEnergyCap + battery2Cap;
            break;
        case 'battery3':
            newEnergyCap = currentEnergyCap + battery3Cap;
            break;
    }
    
    setResourceDataObject(newEnergyCap, 'buildings', ['energy', 'storageCapacity']);
}

function updateEnergyStat(element) {
    const totalRate = (getResourceDataObject('buildings', ['energy', 'rate']) * getTimerRateRatio()) - (getTotalEnergyUse() * getTimerRateRatio());
    if (getPowerOnOff()) {
        element.textContent = `${Math.floor(totalRate)} KW / s`;
    } else {
        element.textContent = `0 KW / s`;
    }
}

function getConstituentComponents(createCompoundDescriptionString) {
    let compoundToCreateQuantity = 0;
    let constituentPartQuantity1 = 0;
    let constituentPartName1 = '';
    let constituentPartQuantity2 = 0;
    let constituentPartName2 = '';
    let constituentPartQuantity3 = 0;
    let constituentPartName3 = '';
    let constituentPartQuantity4 = 0;
    let constituentPartName4 = '';

    // Main compound quantity
    const regexCompoundToCreate = /(\d+(?:\.\d+)?(?:[KMGTPE]?)?)\s*/;
    const matchCompound = createCompoundDescriptionString.match(regexCompoundToCreate);
    if (matchCompound) {
        compoundToCreateQuantity = matchCompound[1];
    } else {
        //console.log('No match found for compound quantity.');
    }
    
    // Constituent Part 1
    const regexConstituentPart1 = /\((\d+(?:\.\d+)?(?:[KMGTPE]?)?)\s*([a-zA-Z]+)/;

    const matchConstituentPart1 = createCompoundDescriptionString.match(regexConstituentPart1);
    if (matchConstituentPart1) {
        constituentPartQuantity1 = matchConstituentPart1[1];
        constituentPartName1 = matchConstituentPart1[2];
    }
    
    // Constituent Part 2
    const regexConstituentPart2 = /, (\d+(?:\.\d+)?(?:[KMGTPE]?)?)\s*([a-zA-Z]+)/
    const matchConstituentPart2 = createCompoundDescriptionString.match(regexConstituentPart2);
    if (matchConstituentPart2) {
        constituentPartQuantity2 = matchConstituentPart2[1];
        constituentPartName2 = matchConstituentPart2[2];
    }
    
    // Constituent Part 3
    const regexConstituentPart3 = /(?:, \d+(?:\.\d+)?(?:[KMGTPE]?)?\s*[a-zA-Z]+){1}\s*,\s*(\d+(?:\.\d+)?(?:[KMGTPE]?)?)\s*([a-zA-Z]+)/;
                                    
    const matchConstituentPart3 = createCompoundDescriptionString.match(regexConstituentPart3);
    if (matchConstituentPart3) {
        constituentPartQuantity3 = matchConstituentPart3[1];
        constituentPartName3 = matchConstituentPart3[2];
    }
    
    // Constituent Part 4
    const regexConstituentPart4 = /(?:, \d+(?:\.\d+)?(?:[KMGTPE]?)?\s*[a-zA-Z]+){2}\s*,\s*(\d+(?:\.\d+)?(?:[KMGTPE]?)?)\s*([a-zA-Z]+)/;
    const matchConstituentPart4 = createCompoundDescriptionString.match(regexConstituentPart4);
    if (matchConstituentPart4) {
        constituentPartQuantity4 = matchConstituentPart4[1];
        constituentPartName4 = matchConstituentPart4[2];
    }
    
    return {
        compoundToCreateQuantity,
        constituentPartQuantity1,
        constituentPartName1,
        constituentPartQuantity2,
        constituentPartName2,
        constituentPartQuantity3,
        constituentPartName3,
        constituentPartQuantity4,
        constituentPartName4
    };
}

function unpackConstituentPartsObject(constituentComponents) {
    if (constituentComponents.compoundToCreateQuantity) {
        constituentComponents.compoundToCreateQuantity = parseNumber(constituentComponents.compoundToCreateQuantity);
    }

    for (let i = 1; i <= 4; i++) {
        let quantityKey = `constituentPartQuantity${i}`;
        let quantityValue = constituentComponents[quantityKey];

        if (quantityValue && quantityValue !== 0) {
            // Convert the numeric string to a number
            constituentComponents[quantityKey] = parseNumber(quantityValue);
        }

        let nameKey = `constituentPartName${i}`;
        if (constituentComponents[nameKey]) {
            constituentComponents[nameKey] = constituentComponents[nameKey].toLowerCase();
        }
    }

    return constituentComponents;
}

function parseNumber(value) {
    if (typeof value !== 'string') {
        return value;
    }

    const unitMultipliers = {
        K: 1e3,
        M: 1e6,
        B: 1e9,
        T: 1e12,
        E: 1e18,
        P: 1e15
    };

    let match = value.match(/(\d+(?:\.\d+)?)([KMGTPE]?)?/);
    if (match) {
        let [_, numPart, unitPart] = match;
        let number = parseFloat(numPart.replace(',', ''));
        if (unitPart in unitMultipliers) {
            number *= unitMultipliers[unitPart];
        }
        return number;
    }

    return value;
}

function normalizeAllQuantities(allQuantities) {
    for (let key in allQuantities) {
        if (allQuantities[key] < 0) {
            let type = 'error';

            const resources = getResourceDataObject('resources');
            const compounds = getResourceDataObject('compounds');

            if (key in resources) {
                type = 'resources';
            } else if (key in compounds) {
                type = 'compounds';
            }

            allQuantities[key] = 0;
            setResourceDataObject(0, type, [key, 'quantity']);
        }
    }
    return allQuantities;
}

export function addBuildingPotentialRate(powerBuilding) {
    const powerBuildingObject = getResourceDataObject('buildings', ['energy', 'upgrades', powerBuilding]);
    const powerBuildingQuantity = powerBuildingObject['quantity'];
    const powerBuildingEnergyRatePerUnit = powerBuildingObject['rate'];

    let powerBuildingPotentialRate = powerBuildingQuantity * powerBuildingEnergyRatePerUnit;

    if (powerBuilding === 'powerPlant2') {
        powerBuildingPotentialRate *= getCurrentStarSystemWeatherEfficiency()[1];
    }

    setResourceDataObject(powerBuildingPotentialRate, 'buildings', ['energy', 'upgrades', powerBuilding, 'purchasedRate']);
    setResourceDataObject(powerBuildingQuantity * powerBuildingEnergyRatePerUnit, 'buildings', ['energy', 'upgrades', powerBuilding, 'maxPurchasedRate']);
}

export function toggleBuildingTypeOnOff(building, activeStatus) { //flag building as switched on or off
    if (getBuildingTypeOnOff(building) !== activeStatus) {
        setBuildingTypeOnOff(building, activeStatus);
        //console.log(building + 'switched on (true) or off (false): ' + activeStatus);
    }
}

export function addOrRemoveUsedPerSecForFuelRate(fuelType, activateButtonElement, fuelCategory, buildingToCheck, trippedStatus) {
    let currentState;
    let newState;

    const totalFuelBurnForBuildingType = getResourceDataObject(fuelCategory, [fuelType, 'usedForFuelPerSec']);
    const currentFuelRate = getResourceDataObject(fuelCategory, [fuelType, 'rate']);

    if (activateButtonElement) { //if clicked
        switch(activateButtonElement.textContent) { //toggle text
            case 'Activate':
                currentState = false;
                activateButtonElement.textContent = 'Deactivate';
                activateButtonElement.classList.remove('red-disabled-text');
                activateButtonElement.classList.add('green-ready-text');
                newState = !currentState;
                break;
            case 'Deactivate':
                currentState = true;
                activateButtonElement.textContent = 'Activate';
                activateButtonElement.classList.remove('green-ready-text');
                newState = !currentState;
                break;
        }
    } else {
        if (!trippedStatus) {
            newState = 'fuelExhausted';
        } else {
            newState = 'tripped';
        }
    }

    const fuelExtractionRateTier1 = getResourceDataObject(fuelCategory, [fuelType, 'upgrades', 'autoBuyer', 'tier1', 'rate']) * getResourceDataObject(fuelCategory, [fuelType, 'upgrades', 'autoBuyer', 'tier1', 'quantity']);

    if (newState && newState !== 'fuelExhausted' && newState !== 'tripped' && newState !== 'regularUpdate') { //if activating by clicking button
        setResourceDataObject(currentFuelRate - totalFuelBurnForBuildingType, fuelCategory, [fuelType, 'rate']);
        setActivatedFuelBurnObject(fuelType, true);
        return true;
    } else if (newState === 'fuelExhausted') { //if just ran out of fuel
        if (getRanOutOfFuelWhenOn(buildingToCheck)) {
            setResourceDataObject(0 + fuelExtractionRateTier1, fuelCategory, [fuelType, 'rate']);
            setActivatedFuelBurnObject(fuelType, false);
        } else { //if just gained some fuel after running out
            setResourceDataObject(currentFuelRate - totalFuelBurnForBuildingType, fuelCategory, [fuelType, 'rate']);
            setActivatedFuelBurnObject(fuelType, true);
        }
    } else if (newState === 'tripped') { //if switches off when no battery and energy consumption becomes higher than generation ie purchase of autoBuyer
        setResourceDataObject(fuelExtractionRateTier1, fuelCategory, [fuelType, 'rate']);
        setActivatedFuelBurnObject(fuelType, false);
    } else { //if deactivating by clicking button
        setResourceDataObject(currentFuelRate + totalFuelBurnForBuildingType, fuelCategory, [fuelType, 'rate']);
        setActivatedFuelBurnObject(fuelType, false);
        sfxPlayer.playAudio('powerOff', 'powerOn');
        return false;
    }
}

export function checkPowerBuildingsFuelLevels() {
    const powerBuildings = Object.fromEntries(Object.entries(getResourceDataObject('buildings', ['energy', 'upgrades'])).filter(([key]) => key.startsWith('power')));

    Object.keys(powerBuildings).forEach(powerBuilding => {
        const fuelType = getResourceDataObject('buildings', ['energy', 'upgrades', powerBuilding, 'fuel'])[0];
        const fuelCategory = getResourceDataObject('buildings', ['energy', 'upgrades', powerBuilding, 'fuel'])[2];
        const powerBuildingQuantity = getResourceDataObject('buildings', ['energy', 'upgrades', powerBuilding, 'quantity']);
        
        if (getResourceDataObject(fuelCategory, [fuelType, 'quantity']) <= 0 && powerBuildingQuantity > 0) { //if out of fuel
            toggleBuildingTypeOnOff(powerBuilding, false);
            startUpdateTimersAndRates(powerBuilding, 'toggle');
            setRanOutOfFuelWhenOn(powerBuilding, true);
            addOrRemoveUsedPerSecForFuelRate(fuelType, null, fuelCategory, powerBuilding, false);
        } else if (powerBuildingQuantity > 0) {
            if (getRanOutOfFuelWhenOn(powerBuilding)) {
                setRanOutOfFuelWhenOn(powerBuilding, false);
            }
        }
    });
}

const offlineGainsDebugToggle = true; //DEBUG to toggle offlineGains feature for testing

export function offlineGains(switchedFocus) {
    if (offlineGainsDebugToggle) {
        const resourcesObject = getResourceDataObject('resources');
        const compoundsObject = getResourceDataObject('compounds');
    
        const resources = Object.keys(resourcesObject);
        const compounds = Object.keys(compoundsObject);
    
        const resourceValues = {};
        const compoundValues = {};
        const energyValues = {};
        const researchValues = {};
        const antimatterValues = {};
    
        resources.forEach(resource => {
            resourceValues[resource] = {
                rate: getResourceDataObject('resources', [resource, 'rate']),
                quantity: getResourceDataObject('resources', [resource, 'quantity']),
                storageCapacity: getResourceDataObject('resources', [resource, 'storageCapacity']),
            };
        });
    
        compounds.forEach(compound => {
            compoundValues[compound] = {
                rate: getResourceDataObject('compounds', [compound, 'rate']),
                quantity: getResourceDataObject('compounds', [compound, 'quantity']),
                storageCapacity: getResourceDataObject('compounds', [compound, 'storageCapacity']),
            };
        });
    
        const batteryBought = getResourceDataObject('buildings', ['energy', 'batteryBoughtYet']);
        energyValues.energy = {
            rate: batteryBought ? getResourceDataObject('buildings', ['energy', 'rate']) - getResourceDataObject('buildings', ['energy', 'consumption']) : 0,
            quantity: getResourceDataObject('buildings', ['energy', 'quantity']),
        };
    
        researchValues.research = {
            rate: getResourceDataObject('research', ['rate']),
            quantity: getResourceDataObject('research', ['quantity']),
        };
    
        antimatterValues.antimatter = {
            rate: getResourceDataObject('antimatter', ['rate']),
            quantity: getResourceDataObject('antimatter', ['quantity'])
        }
    
        const combinedValues = {
            rate: {
                resources: Object.fromEntries(Object.entries(resourceValues).map(([key, value]) => [key, value.rate])),
                compounds: Object.fromEntries(Object.entries(compoundValues).map(([key, value]) => [key, value.rate])),
                energy: energyValues.energy.rate,
                research: researchValues.research.rate,
                antimatter: antimatterValues.antimatter.rate
            },
            quantity: {
                resources: Object.fromEntries(Object.entries(resourceValues).map(([key, value]) => [key, value.quantity])),
                compounds: Object.fromEntries(Object.entries(compoundValues).map(([key, value]) => [key, value.quantity])),
                energy: energyValues.energy.quantity,
                research: researchValues.research.quantity,
                antimatter: antimatterValues.antimatter.quantity
            },
        };
    
        const lastSavedTimeStamp = getLastSavedTimeStamp();
        const currentTimeStamp = new Date().toISOString();
    
        const timeDifferenceInSeconds = Math.floor(
            (new Date(currentTimeStamp).getTime() - new Date(lastSavedTimeStamp).getTime()) / 1000
        );
    
        const calculateOfflineGains = (data, multiplier = 1) => {
            return Object.fromEntries(
                Object.entries(data).map(([key, rate]) => [key, rate * multiplier * timeDifferenceInSeconds])
            );
        };
    
        let offlineGains = {
            resources: calculateOfflineGains(combinedValues.rate.resources, getTimerRateRatio()),
            compounds: calculateOfflineGains(combinedValues.rate.compounds, getTimerRateRatio()),
            energy: combinedValues.rate.energy * getTimerRateRatio() * timeDifferenceInSeconds,
            research: combinedValues.rate.research * getTimerRateRatio() * timeDifferenceInSeconds,
            rocket1: 0,
            rocket2: 0,
            rocket3: 0,
            rocket4: 0,
            antimatter: combinedValues.rate.antimatter * getTimerRateRatio() * timeDifferenceInSeconds
        };
    
        Object.entries(offlineGains.resources).forEach(([resource, gain]) => {
            const currentQuantity = getResourceDataObject('resources', [resource, 'quantity']);
            const storageCapacity = resourceValues[resource].storageCapacity;
            const finalQuantity = Math.min(currentQuantity + gain, storageCapacity);
            setResourceDataObject(finalQuantity, 'resources', [resource, 'quantity']);
        });
    
        Object.entries(offlineGains.compounds).forEach(([compound, gain]) => {
            const currentQuantity = getResourceDataObject('compounds', [compound, 'quantity']);
            const storageCapacity = compoundValues[compound].storageCapacity;
            const finalQuantity = Math.min(currentQuantity + gain, storageCapacity);
            setResourceDataObject(finalQuantity, 'compounds', [compound, 'quantity']);
        });
    
        const currentEnergyQuantity = getResourceDataObject('buildings', ['energy', 'quantity']);
        setResourceDataObject(Math.min(currentEnergyQuantity + offlineGains.energy, getResourceDataObject('buildings', ['energy', 'storageCapacity'])), 'buildings', ['energy', 'quantity']);
    
        const currentResearchQuantity = getResourceDataObject('research', ['quantity']);
        setResourceDataObject(currentResearchQuantity + offlineGains.research, 'research', ['quantity']);
    
        const currentFuelQuantityRockets = getRocketsFuellerStartedArray().filter(rocket => !rocket.includes('FuelledUp'));
        currentFuelQuantityRockets.forEach(rocket => {
            const rocketDetails = getResourceDataObject('space', ['upgrades', rocket]);
            const fuelUpgradeRate = rocketDetails.autoBuyer.tier1.rate;
            const offlineFuelGain = (fuelUpgradeRate * timeDifferenceInSeconds) * getTimerRateRatio();
            offlineGains[rocket] += offlineFuelGain;
        });
    
        currentFuelQuantityRockets.forEach(rocket => {
            const currentRocketFuelQuantity = getResourceDataObject('space', ['upgrades', rocket, 'fuelQuantity']);
            setResourceDataObject(Math.min(currentRocketFuelQuantity + offlineGains[rocket], getResourceDataObject('space', ['upgrades', rocket, 'fuelQuantityToLaunch'])), 'space', ['upgrades', rocket, 'fuelQuantity']);
        });

        setAsteroidTimerCanContinue(getPowerOnOff() && !getCurrentlyInvestigatingStar());
        setStarInvestigationTimerCanContinue(getPowerOnOff() && !getCurrentlySearchingAsteroid());
    
        if (getCurrentlySearchingAsteroid() && getAsteroidTimerCanContinue()) {
            const timeLeft = getTimeLeftUntilAsteroidScannerTimerFinishes();
            const offlineTimeInMilliseconds = timeDifferenceInSeconds * 1000;
    
            const remainingTime = Math.max(timeLeft - offlineTimeInMilliseconds, 100);
    
            timerManager.removeTimer('searchAsteroidTimer');
            startSearchAsteroidTimer([remainingTime, 'offlineGains']);
        }

        if (getCurrentlyInvestigatingStar() && getStarInvestigationTimerCanContinue()) {
            const timeLeft = getTimeLeftUntilStarInvestigationTimerFinishes();
            const offlineTimeInMilliseconds = timeDifferenceInSeconds * 1000;
    
            const remainingTime = Math.max(timeLeft - offlineTimeInMilliseconds, 100);
    
            timerManager.removeTimer('investigateStarTimer');
            startInvestigateStarTimer([remainingTime, 'offlineGains']);
        }

        if (getStarShipTravelling() && getStarShipStatus()[0] === 'travelling') {
            const timeLeft = getTimeLeftUntilTravelToDestinationStarTimerFinishes();
            const offlineTimeInMilliseconds = timeDifferenceInSeconds * 1000;
    
            const remainingTime = Math.max(timeLeft - offlineTimeInMilliseconds, 100);
    
            timerManager.removeTimer('starShipTravelToDestinationStarTimer');
            startTravelToDestinationStarTimer([remainingTime, 'offlineGains']);
        }
    
        const rocketTravelDurationObject = getRocketTravelDuration();
        Object.keys(rocketTravelDurationObject).forEach(rocketKey => {
            const rocket = rocketKey;
            const timeLeft = getTimeLeftUntilRocketTravelToAsteroidTimerFinishes(rocket);
            const offlineTimeInMilliseconds = timeDifferenceInSeconds * 1000;
        
            const remainingTime = Math.max(timeLeft - offlineTimeInMilliseconds, 1);
        
            timerManager.removeTimer(`${rocketKey}TravelToAsteroidTimer`);
            timerManager.removeTimer(`${rocketKey}TravelReturnTimer`);
            startTravelToAndFromAsteroidTimer([remainingTime, 'offlineGains'], rocketKey, getRocketDirection(rocketKey));
        });  
        
        const currentAntimatterQuantity = combinedValues.quantity.antimatter;
        const asteroidArray = getAsteroidArray();
        let offlineGainsAntimatter = 0;
        
        asteroidArray.forEach((asteroid) => { 
            const asteroidName = Object.keys(asteroid)[0];
            const rateExtractionAsteroid = getSpecificAsteroidExtractionRate(asteroid[asteroidName]);
            const beingMined = asteroid[asteroidName].beingMined;
            const quantityAntimatterAsteroid = asteroid[asteroidName].quantity[0];
        
            if (beingMined) {
                const extractedAmount = Math.min(rateExtractionAsteroid * getTimerRateRatio() * timeDifferenceInSeconds, quantityAntimatterAsteroid);
                offlineGainsAntimatter += extractedAmount;
                changeAsteroidArray(asteroidName, 'quantity', [Math.max(asteroid[asteroidName].quantity[0] - extractedAmount, 0), 'none']);
            }
        });
        
        setResourceDataObject(currentAntimatterQuantity + offlineGainsAntimatter, 'antimatter', ['quantity']);
        
        if (!switchedFocus) {
            showNotification('Offline Gains Added!', 'info');
        }
    
        //console.log('Offline Gains:', offlineGains);
        //console.log('Time Offline (seconds):', timeDifferenceInSeconds);
    }
    // startSearchAsteroidTimer([10000, 'offlineGains']); //DEBUG
    // startTravelToAndFromAsteroidTimer([10000, 'offlineGains'], 'rocket1', getRocketDirection('rocket1')); //DEBUG
}

export function setAllCompoundsToZeroQuantity() {
    const compoundKeys = Object.keys(getResourceDataObject('compounds'));

    compoundKeys.forEach(compound => {
        setResourceDataObject(0, 'compounds', [compound, 'quantity']);
    });
}

export function buildSpaceMiningBuilding(spaceMiningBuilding, debug) {
    let currentResource1Quantity;
    let currentResource2Quantity;
    let currentResource3Quantity;

    const buySpaceMiningBuildingButtonElement = document.querySelector(`button[data-resource-to-fuse-to="${spaceMiningBuilding}"]`);
    const spaceMiningBuildingDescriptionElement = document.getElementById(`${spaceMiningBuilding}Description`);
    const spaceMiningBuildingAlreadyBoughtTextElement = document.getElementById(`${spaceMiningBuilding}AlreadyBoughtText`);

    const currentCash = getResourceDataObject('currency', ['cash']);
    const spaceMiningBuildingCashPrice = getResourceDataObject('space', ['upgrades', spaceMiningBuilding, 'price']);

    const spaceMiningBuildingResource1PriceQuantity = getResourceDataObject('space', ['upgrades', spaceMiningBuilding, 'resource1Price'])[0];
    const spaceMiningBuildingResource1PriceResource = getResourceDataObject('space', ['upgrades', spaceMiningBuilding, 'resource1Price'])[1];
    const spaceMiningBuildingResource1PriceCategory = getResourceDataObject('space', ['upgrades', spaceMiningBuilding, 'resource1Price'])[2];
    if (spaceMiningBuildingResource1PriceCategory) {
        currentResource1Quantity = getResourceDataObject(spaceMiningBuildingResource1PriceCategory, [spaceMiningBuildingResource1PriceResource, 'quantity']);
    }
    const spaceMiningBuildingResource2PriceQuantity = getResourceDataObject('space', ['upgrades', spaceMiningBuilding, 'resource2Price'])[0];
    const spaceMiningBuildingResource2PriceResource = getResourceDataObject('space', ['upgrades', spaceMiningBuilding, 'resource2Price'])[1];
    const spaceMiningBuildingResource2PriceCategory = getResourceDataObject('space', ['upgrades', spaceMiningBuilding, 'resource2Price'])[2];
    if (spaceMiningBuildingResource2PriceCategory) {
        currentResource2Quantity = getResourceDataObject(spaceMiningBuildingResource2PriceCategory, [spaceMiningBuildingResource2PriceResource, 'quantity']);
    }
    const spaceMiningBuildingResource3PriceQuantity = getResourceDataObject('space', ['upgrades', spaceMiningBuilding, 'resource3Price'])[0];
    const spaceMiningBuildingResource3PriceResource = getResourceDataObject('space', ['upgrades', spaceMiningBuilding, 'resource3Price'])[1];
    const spaceMiningBuildingResource3PriceCategory = getResourceDataObject('space', ['upgrades', spaceMiningBuilding, 'resource3Price'])[2];
    if (spaceMiningBuildingResource3PriceCategory) {
        currentResource3Quantity = getResourceDataObject(spaceMiningBuildingResource3PriceCategory, [spaceMiningBuildingResource3PriceResource, 'quantity']);
    }

    setResourceDataObject(Math.floor(currentCash - spaceMiningBuildingCashPrice), 'currency', ['cash']);

    if (spaceMiningBuildingResource1PriceCategory) {
        setResourceDataObject(Math.floor(currentResource1Quantity - spaceMiningBuildingResource1PriceQuantity), spaceMiningBuildingResource1PriceCategory, [spaceMiningBuildingResource1PriceResource, 'quantity']);
    }

    if (spaceMiningBuildingResource2PriceCategory) {
        setResourceDataObject(Math.floor(currentResource2Quantity - spaceMiningBuildingResource2PriceQuantity), spaceMiningBuildingResource2PriceCategory, [spaceMiningBuildingResource2PriceResource, 'quantity']);
    }

    if (spaceMiningBuildingResource3PriceCategory) {
        setResourceDataObject(Math.floor(currentResource3Quantity - spaceMiningBuildingResource3PriceQuantity), spaceMiningBuildingResource3PriceCategory, [spaceMiningBuildingResource3PriceResource, 'quantity']);
    }

    setResourceDataObject(true, 'space', ['upgrades', spaceMiningBuilding, `${spaceMiningBuilding}BoughtYet`]);

    if (!debug) {
        buySpaceMiningBuildingButtonElement.classList.add('invisible');
        spaceMiningBuildingDescriptionElement.classList.add('invisible');
        spaceMiningBuildingAlreadyBoughtTextElement.classList.remove('invisible');
    }
}

export function getBatteryLevel() {
    const totalBatteryCapacity = getResourceDataObject('buildings', ['energy', 'storageCapacity']);
    const totalBatteryCharge = getResourceDataObject('buildings', ['energy', 'quantity']);

    const batteryPercentage = (totalBatteryCharge / totalBatteryCapacity) * 100;
    return Math.min(100, Math.max(0, batteryPercentage));
}

export function getFuelLevel(rocket) {
    const totalFuelCapacity = getResourceDataObject('space', ['upgrades', rocket, 'fuelQuantityToLaunch']);
    const currentFuelQuantityLoaded = getResourceDataObject('space', ['upgrades', rocket, 'fuelQuantity']);

    const fuelPercentage = (currentFuelQuantityLoaded / totalFuelCapacity) * 100;
    return Math.min(100, Math.max(0, fuelPercentage));
}

export function fuelRockets() {
    let rocketsToFuel = getRocketsFuellerStartedArray();
    rocketsToFuel = rocketsToFuel.filter(rocket => !rocket.includes('FuelledUp'));

    rocketsToFuel.forEach((rocket, index) => {
        const rocketLaunchButton = document.querySelector('button.rocket-fuelled-check');
        const fuelRate = getResourceDataObject('space', ['upgrades', rocket, 'autoBuyer', 'tier1', 'rate']);
        const fuelQuantity = getResourceDataObject('space', ['upgrades', rocket, 'fuelQuantity']);
        const fullLevel = getResourceDataObject('space', ['upgrades', rocket, 'fuelQuantityToLaunch']);

        if (rocketLaunchButton && [...rocketLaunchButton.classList].some(clas => clas.includes(rocket))) {
            rocketLaunchButton.classList.remove('invisible');
        }

        let newFuelQuantity = fuelQuantity;
        const fuelQuantityProgressBarElement = document.getElementById(rocket + 'FuellingProgressBar');

        if (newFuelQuantity >= fullLevel) {
            showNotification(`${getRocketUserName(rocket)} is ready for Launch!`, 'info');
            if (!getRocketsFuellerStartedArray().includes(rocket + 'FuelledUp')) {
                setRocketsFuellerStartedArray(`${rocket}FuelledUp`, 'add');
            }
            setRocketsFuellerStartedArray(`${rocket}`, 'remove');

            if (rocketLaunchButton) {
                if (fuelQuantityProgressBarElement) {
                    fuelQuantityProgressBarElement.style.width = `100%`;
                }
                rocketLaunchButton.classList.remove('invisible');
                rocketLaunchButton.classList.remove('red-disabled-text');
                rocketLaunchButton.classList.add('green-ready-text');
                rocketLaunchButton.textContent = 'Launch!';
                rocketLaunchButton.classList.remove('no-interaction');
            }
        }

        if (getCurrentOptionPane() === rocket && getCanFuelRockets()) {
            fuelQuantityProgressBarElement.parentElement.classList.remove('invisible');
        }

        if (getCheckRocketFuellingStatus(rocket) && getPowerOnOff() && getCanFuelRockets()) {
            newFuelQuantity = fuelQuantity + fuelRate * getTimerRateRatio();

            setResourceDataObject(newFuelQuantity, 'space', ['upgrades', rocket, 'fuelQuantity']);

            if (getCurrentOptionPane() === rocket) {
                const progressBarPercentage = getFuelLevel(rocket);

                if (fuelQuantityProgressBarElement.style.width !== `100%`) {
                    fuelQuantityProgressBarElement.style.width = `${progressBarPercentage}%`;
                }

                if (newFuelQuantity < fullLevel) {
                    rocketLaunchButton.textContent = `${Math.floor(progressBarPercentage)}%`;
                    rocketLaunchButton.classList.remove('red-disabled-text');
                    rocketLaunchButton.classList.remove('green-ready-text');
                    rocketLaunchButton.classList.add('no-interaction');
                }
            }
        } else if (!getPowerOnOff() && newFuelQuantity < fullLevel && getCanFuelRockets()) {
            const progressBarPercentage = getFuelLevel(rocket);
            if (rocketLaunchButton) {
                rocketLaunchButton.classList.add('red-disabled-text');
                rocketLaunchButton.textContent = `${Math.floor(progressBarPercentage)}%`;
                rocketLaunchButton.classList.add('no-interaction');
                document.getElementById('fuelDescription').textContent = 'Requires Power!';
                document.getElementById('fuelDescription').classList.remove('green-ready-text');
                document.getElementById('fuelDescription').classList.add('red-disabled-text');
            }
        }
    });

    const rockets = ['rocket1', 'rocket2', 'rocket3', 'rocket4'];

    if (!getCanFuelRockets()) {
        const fuelDescriptionElement = document.getElementById('fuelDescription');
        rockets.forEach(rocket => {
            const fuelRocketButton = document.querySelector(`button.${rocket}`);
            if (fuelRocketButton) {
                fuelRocketButton.classList.add('red-disabled-text');
            }

            if (fuelDescriptionElement) {
                fuelDescriptionElement.textContent = 'Lack Fuel Tech!';
                fuelDescriptionElement.classList.remove('green-ready-text');
                fuelDescriptionElement.classList.add('red-disabled-text');
            }
        });

    } else {
        const fuelDescriptionElement = document.getElementById('fuelDescription');
        
        if (fuelDescriptionElement) {
            fuelDescriptionElement.textContent = 'Fuelling...';
            fuelDescriptionElement.classList.add('green-ready-text');
            fuelDescriptionElement.classList.remove('red-disabled-text');
        }

        rockets.forEach(rocket => {
            const fuelRocketButton = document.querySelector(`button.${rocket}`);
            if (fuelRocketButton && getTechUnlockedArray().includes('advancedFuels' && getPowerOnOff())) {
                fuelRocketButton.classList.remove('red-disabled-text');
            }

            if (fuelDescriptionElement && getPowerOnOff() && getRocketsFuellerStartedArray().includes(`${rocket}FuelledUp`) && getCurrentOptionPane() === rocket) {
                if (getCurrentStarSystemWeatherEfficiency()[2] !== 'rain' && getCurrentStarSystemWeatherEfficiency()[2] !== 'volcano') {
                    fuelDescriptionElement.textContent = 'Ready For Launch...';
                    fuelDescriptionElement.classList.add('green-ready-text');
                    fuelDescriptionElement.classList.remove('red-disabled-text');
                } else {
                    fuelDescriptionElement.textContent = 'Bad Weather!';
                    fuelDescriptionElement.classList.remove('green-ready-text');
                    fuelDescriptionElement.classList.add('red-disabled-text');
                }
                return;
            } else if (fuelDescriptionElement && getPowerOnOff() && !getRocketsFuellerStartedArray().includes(rocket) && getCurrentOptionPane() === rocket) {
                fuelDescriptionElement.textContent = 'Ready To Fuel...';
                fuelDescriptionElement.classList.add('green-ready-text');
                fuelDescriptionElement.classList.remove('red-disabled-text');
                return;
            } else if (fuelDescriptionElement && !getPowerOnOff() && getCurrentOptionPane() === rocket) {
                fuelDescriptionElement.textContent = 'Requires Power!';
                fuelDescriptionElement.classList.remove('green-ready-text');
                fuelDescriptionElement.classList.add('red-disabled-text');
                return;
            }
        });
    }
}

export function updateRocketDescription() {
    const launchedRockets = getLaunchedRockets();
    const currentScreen = getCurrentOptionPane();

    for (const rocket of launchedRockets) {
        if (rocket === currentScreen) {
            document.getElementById('fuelDescription').textContent = 'Launched!';
            break;
        }
    }
}

export function launchRocket(rocket) {
    setLaunchedRockets(rocket, 'add');
    document.getElementById(`space${capitaliseString(rocket)}AutoBuyerRow`).classList.add('invisible');
    showNotification(`${getRocketUserName(rocket)} Launched!`, 'info');
}

export function toggleAllPower() {
    const quantityPowerPlant1 = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant1', 'quantity']);
    const quantityPowerPlant2 = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant2', 'quantity']);
    const quantityPowerPlant3 = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant3', 'quantity']);

    if (!getPowerOnOff()) {
        if (quantityPowerPlant1 > 0) {
            toggleBuildingTypeOnOff('powerPlant1', true);
            startUpdateTimersAndRates('powerPlant1', 'toggle');
        }
        if (quantityPowerPlant2 > 0) {
            toggleBuildingTypeOnOff('powerPlant2', true);
            startUpdateTimersAndRates('powerPlant2', 'toggle');
        }
        if (quantityPowerPlant3 > 0) {
            toggleBuildingTypeOnOff('powerPlant3', true);
            startUpdateTimersAndRates('powerPlant3', 'toggle');
        }

        setPowerOnOff(true);
        sfxPlayer.playAudio('powerOn', 'powerOff');
    } else {
        toggleBuildingTypeOnOff('powerPlant1', false);
        startUpdateTimersAndRates('powerPlant1', 'toggle');

        toggleBuildingTypeOnOff('powerPlant2', false);
        startUpdateTimersAndRates('powerPlant2', 'toggle');

        toggleBuildingTypeOnOff('powerPlant3', false);
        startUpdateTimersAndRates('powerPlant3', 'toggle');

        setPowerOnOff(false);
        sfxPlayer.playAudio('powerOff', 'powerOn');
    }
}

function handlePowerAllButtonState() {
    const quantityPowerPlant1 = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant1', 'quantity']);
    const quantityPowerPlant2 = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant2', 'quantity']);
    const quantityPowerPlant3 = getResourceDataObject('buildings', ['energy', 'upgrades', 'powerPlant3', 'quantity']);

    const powerColumnElement = document.getElementById('energyConsumptionStats');
    const powerAllButton = document.getElementById('activateGridButton');

    if (!powerColumnElement.classList.contains('invisible')) {
        powerAllButton.classList.remove('red-disabled-text');
        powerAllButton.classList.remove('activate-grid-disabled-border');
        if (getPowerOnOff()) {
            powerAllButton.textContent = 'Power Off';
            powerAllButton.classList.add('power-on-fill-state');
        } else {
            powerAllButton.textContent = 'Power On';
            powerAllButton.classList.remove('power-on-fill-state');
        }

        if (quantityPowerPlant1 === 0 && quantityPowerPlant2 === 0 && quantityPowerPlant3 === 0) {
            powerAllButton.classList.add('red-disabled-text');
            powerAllButton.classList.add('activate-grid-disabled-border');
        }
    }
}

export function extendStarDataRange(debug) {
    const increment = getStarVisionIncrement();
    const currentRange = getStarVisionDistance();

    setStarVisionDistance(currentRange + increment);

    if (getCurrentOptionPane() === 'star map') {
        drawTab5Content('Star Map', null, false);
    }

    if (!debug) {
        showNotification('Star Study Complete!</br></br>Take a look at the Star Map!', 'info');
    }
}

export function discoverAsteroid(debug) {
    if (Math.random() < 0.07 && !debug) {
        showNotification('Asteroid not found after search!', 'warning');
        return;
    }

    const starCode = getStarSystemDataObject('stars', [getCurrentStarSystem(), 'starCode']);
    const randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const asteroidName = `${starCode}-${randomNumber}${randomLetter}`;
    const asteroid = generateAsteroidData(asteroidName);
    document.getElementById('asteroids').parentElement.parentElement.classList.remove('invisible');
    setBaseSearchAsteroidTimerDuration(getBaseSearchAsteroidTimerDuration() * getGameCostMultiplier());
    setAsteroidArray(asteroid);

    const keyName = Object.keys(asteroid)[0];
    if (!debug) {
        if (asteroid[keyName].specialName) {
            showNotification(`Legendary Asteroid Discovered!<br><br>They named it after you!<br><br>${asteroid[keyName].name}`, 'info');
        } else {
            showNotification(`Asteroid Discovered!<br><br>${asteroidName}`, 'info');
        }
    }
}

function generateAsteroidData(name) {
    let distanceClass;
    let specialName = false;

    const minDistance = 30000;
    const maxDistance = 570000;

    const distance = Math.floor(Math.random() * (maxDistance - minDistance + 1)) + minDistance;
    const distancePercentile = (distance - minDistance) / (maxDistance - minDistance);
    
    if (distancePercentile >= 0.76) {
        distanceClass = 'red-disabled-text';
    } else if (distancePercentile >= 0.51) {
        distanceClass = 'orange-warning-text';
    } else if (distancePercentile >= 0.26) {
        distanceClass = 'none';
    } else {
        distanceClass = 'green-ready-text';
    }

    const rarityRoll = Math.floor(Math.random() * 101);
    let rarity, rarityClass;
    if (rarityRoll <= 70) { //70
        rarity = "Common";
        rarityClass = 'red-disabled-text';
    } else if (rarityRoll <= 90) { //90
        rarity = "Uncommon";
        rarityClass = 'warning-orange-text';
    } else if (rarityRoll <= 98) { //98
        rarity = "Rare";
        rarityClass = 'none';
    } else {
        rarity = "Legendary";
        rarityClass = 'green-ready-text';
    }

    // Simplified ease of extraction logic
    const easeOfExtraction = Math.floor(Math.random() * 10) + 1;  // Random number between 1 and 10
    let easeClass;
    if (easeOfExtraction <= 2) {
        easeClass = 'green-ready-text';
    } else if (easeOfExtraction === 3 || easeOfExtraction === 4) {
        easeClass = 'none';
    } else if (easeOfExtraction > 4 && easeOfExtraction <= 8) {
        easeClass = 'warning-orange-text';
    } else {
        easeClass = 'red-disabled-text';
    }

    let quantity;
    if (rarity === "Common") {
        quantity = Math.floor(Math.random() * (800 - 300 + 1)) + 300;
    } else if (rarity === "Uncommon") {
        quantity = Math.floor(Math.random() * (1200 - 700 + 1)) + 700;
    } else if (rarity === "Rare") {
        quantity = Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100;
    } else {
        quantity = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
    }

    //DEBUG
    //quantity = 10;
    //

    let quantityClass;
    const minQuantity = rarity === "Common" ? 300 : (rarity === "Uncommon" ? 700 : (rarity === "Rare" ? 1100 : 5000));
    const maxQuantity = rarity === "Common" ? 800 : (rarity === "Uncommon" ? 1200 : (rarity === "Rare" ? 2000 : 10000));
    
    const quantityPercentile = (quantity - minQuantity) / (maxQuantity - minQuantity);

    if (quantityPercentile >= 0.76) {
        quantityClass = 'green-ready-text';
    } else if (quantityPercentile >= 0.51) {
        quantityClass = 'none';
    } else if (quantityPercentile >= 0.26) {
        quantityClass = 'warning-orange-text';
    } else {
        quantityClass = 'red-disabled-text';
    }

    if (rarity === "Uncommon") {
        if (quantityClass === 'green-ready-text') quantityClass = 'none';
    } else if (rarity === "Common") {
        if (quantityClass === 'green-ready-text') quantityClass = 'warning-orange-text';
    }

    if (rarity === "Legendary") {
        const commanderName = getSaveName();
        name = generateLegendaryAsteroidName(commanderName);
        specialName = true;
    }

    return {
        [name]: {
            name,
            distance: [distance, distanceClass],
            rarity: [rarity, rarityClass],
            easeOfExtraction: [easeOfExtraction, easeClass],
            quantity: [quantity, quantityClass],
            originalQuantity: quantity,
            beingMined: false,
            specialName: specialName
        }
    };
}

function generateLegendaryAsteroidName(commanderName) {
    const asteroidNameParts = [
        "Eternal", "Dominion", "Celestara", "Hyperion", "Zenith", 
        "Titanis", "Astralis", "Nebularis", "Excalis", "Oblivion", 
        "Infinity", "Nova", "Sentinel", "Aetheris", "Solstice", 
        "Zephyrus", "Valhalla", "Eon", "Omicron", "Vanguard"
    ];

    let cleanedName = commanderName.replace(/[0-9]/g, "");
    cleanedName = capitaliseString(cleanedName);
    let nameComponent = asteroidNameParts[Math.floor(Math.random() * asteroidNameParts.length)];
    let usePrefix = Math.random() > 0.5;
    let asteroidName = usePrefix ? `${nameComponent} ${cleanedName}` : `${cleanedName} ${nameComponent}`;

    const asteroidArray = getAsteroidArray();
    const existingKeys = asteroidArray.map(asteroid => Object.keys(asteroid)[0]);

    let attempts = 0;

    while (existingKeys.includes(asteroidName) && attempts < 100) {
        nameComponent = asteroidNameParts[Math.floor(Math.random() * asteroidNameParts.length)];
        usePrefix = Math.random() > 0.5;
        asteroidName = usePrefix ? `${nameComponent} ${cleanedName}` : `${cleanedName} ${nameComponent}`;
        attempts++;
    }

    if (attempts >= 100) { //lower this number if any performance issues, 50 is probably ok
        let increment = 1;
        let newAsteroidName = `${asteroidName}${increment}`;

        while (existingKeys.includes(newAsteroidName)) {
            increment++;
            newAsteroidName = `${asteroidName}${increment}`;
        }

        asteroidName = newAsteroidName;
    }

    return asteroidName;
}

export function boostAntimatterRate(start) {
    const rateBarInner = document.getElementById('svgRateBarInner');
    const boostText = document.getElementById('boostTextContainer');
    const svgRateBarOuter = document.getElementById('svgRateBarOuter');
    
    if (rateBarInner) {
        if (start) {
            console.log('starting boost');
            setIsAntimatterBoostActive(true);
            boostText.style.color = 'var(--ready-text)';
            svgRateBarOuter.style.backgroundColor = `rgba(var(--text-color-rgb), 0.6)`;
            rateBarInner.style.height = `${parseFloat(rateBarInner.style.height) * 2}%`;
            rateBarInner.style.backgroundColor = "var(--ready-text)";
        } else {
                console.log('stopping boost');
                setIsAntimatterBoostActive(false);
                setHasAntimatterSvgRightBoxDataChanged(null);  
        }
    }
}

export function resetRocketForRefuelling(rocket) {
    console.log('refuel button pressed for ' + rocket);
}

export function generateStarDataAndAddToDataObject(starElement, distance) {
    const fuel = calculateAntimatterRequired(distance);
    const ascendencyPoints = calculateAscendencyPoints(distance);

    const weatherTypes = {
        sunny: ['☀', 'green-ready-text'],
        cloudy: ['☁', 'warning-orange-text'],
        rain: ['☂', 'warning-orange-text'],
        volcano: ['⛰', 'red-disabled-text']
    };

    let weatherProbabilities = {
        sunny: 0,
        cloudy: 0,
        rain: 0,
        volcano: 0
    };

    let totalProbability = 0;
    Object.keys(weatherProbabilities).forEach(type => {
        weatherProbabilities[type] = Math.floor(Math.random() * 25);
        totalProbability += weatherProbabilities[type];
    });

    const scalingFactor = 100 / totalProbability;
    Object.keys(weatherProbabilities).forEach(type => {
        weatherProbabilities[type] = Math.round(weatherProbabilities[type] * scalingFactor);
    });

    const difference = 100 - Object.values(weatherProbabilities).reduce((acc, val) => acc + val, 0);
    if (difference !== 0) {
        weatherProbabilities.sunny += difference;
    }

    let weatherTendency = [];
    let maxProbability = 0;
    Object.keys(weatherProbabilities).forEach(type => {
        if (weatherProbabilities[type] > maxProbability) {
            maxProbability = weatherProbabilities[type];
            weatherTendency = [weatherTypes[type][0], weatherProbabilities[type], weatherTypes[type][1]];
        }
    });

    const randomPrecipitationType = calculatePrecipitationType();

    const newStarData = {
        startingStar: false,
        starCode: starElement.id.toUpperCase(),
        name: starElement.id.toLowerCase(),
        distance: distance,
        fuel: fuel,
        ascendencyPoints: ascendencyPoints,
        precipitationResourceCategory: 'compounds',
        precipitationType: randomPrecipitationType,
        weather: {
            sunny: [weatherProbabilities.sunny, weatherTypes.sunny[0], 1, weatherTypes.sunny[1]],
            cloudy: [weatherProbabilities.cloudy, weatherTypes.cloudy[0], 0.6, weatherTypes.cloudy[1]],
            rain: [weatherProbabilities.rain, weatherTypes.rain[0], 0.4, weatherTypes.rain[1]],
            volcano: [weatherProbabilities.volcano, weatherTypes.volcano[0], 0.05, weatherTypes.volcano[1]]
        },
        weatherTendency: weatherTendency
    };

    setStarSystemDataObject(newStarData, 'stars', [starElement.id.toLowerCase()]);
}

export function calculateAscendencyPoints(distance) {
    const MIN_DISTANCE = 1;
    const MAX_DISTANCE = 100;
    const MIN_AP = 1;
    const MAX_AP = 50;

    if (distance >= 97.5) return MAX_AP;

    let normalizedDistance = (distance - MIN_DISTANCE) / (MAX_DISTANCE - MIN_DISTANCE);
    normalizedDistance = Math.max(0, Math.min(1, normalizedDistance));

    const exponent = 2.5;
    let ascendencyPoints = MIN_AP + (MAX_AP - MIN_AP) * Math.pow(normalizedDistance, exponent);
    ascendencyPoints = Math.min(MAX_AP - 1, Math.round(ascendencyPoints)); // Ensures max is 49 until 97.5

    let modifiedAP = ascendencyPoints;
    if (ascendencyPoints > 1 && ascendencyPoints < MAX_AP) {
        if (Math.random() < 0.2) {
            modifiedAP -= Math.ceil(Math.random() * Math.max(1, modifiedAP * 0.1)); // Small random reduction
        }
    }

    return modifiedAP;
}

export function calculateAntimatterRequired(distance) {
    const MIN_DISTANCE = 1;
    const MAX_DISTANCE = 100;
    const MIN_COST = Math.floor(Math.random() * (10000 - 9000 + 1)) + 9000;
    const MAX_COST = Math.floor(Math.random() * (160000 - 150000 + 1)) + 150000;

    let normalizedDistance = (distance - MIN_DISTANCE) / (MAX_DISTANCE - MIN_DISTANCE);

    normalizedDistance = Math.max(0, Math.min(1, normalizedDistance));

    const exponent = 2.5;
    const antimatterRequired = MIN_COST + (MAX_COST - MIN_COST) * Math.pow(normalizedDistance, exponent);

    return Math.round(antimatterRequired);
}

export function calculatePrecipitationType() {
    const precipitationWeights = [
        { type: "titanium", weight: 2 },
        { type: "water", weight: 50 },
        { type: "glass", weight: 17 },
        { type: "diesel", weight: 25 },
        { type: "concrete", weight: 0 },
        { type: "steel", weight: 6 }
    ];

    const weightedPrecipitationTypes = [];
    let cumulativeWeight = 0;

    precipitationWeights.forEach(({ type, weight }) => {
        cumulativeWeight += weight;
        weightedPrecipitationTypes.push({ type, cumulativeWeight });
    });

    const randomValue = Math.floor(Math.random() * 100);

    const selectedPrecipitationType = weightedPrecipitationTypes.find(({ cumulativeWeight }) => randomValue < cumulativeWeight);

    return selectedPrecipitationType ? selectedPrecipitationType.type : "water";
}

export function generateDestinationStarData() {
    const existingData = getStarSystemDataObject('stars', ['destinationStar']) || {};

    const lifeDetected = generateLifeDetection(); 
    const civilizationLevel = lifeDetected ? generateCivilizationLevel() : null;
    const lifeformTraits = lifeDetected ? generateLifeformTraits(civilizationLevel) : [];
    const population = lifeDetected ? generatePopulationEstimate(lifeformTraits) : null;
    const raceName = generateRaceName(civilizationLevel);

    const threatLevel = lifeDetected ? generateThreatLevel(civilizationLevel, population, lifeformTraits) : "None";
    const defenseRating = lifeDetected ? generateDefenseRating(civilizationLevel, threatLevel, lifeformTraits) : 0;
    const enemyFleets = lifeDetected ? generateEnemyFleets(threatLevel, population, lifeformTraits) : 0;
    
    const anomalies = generateAnomalies(civilizationLevel);

    const updatedData = {
        ...existingData,
        lifeDetected,
        lifeformTraits,
        civilizationLevel,
        populationEstimate: population,
        raceName,
        threatLevel,
        defenseRating,
        enemyFleets,
        anomalies
    };

    setStarSystemDataObject(updatedData, 'stars', ['destinationStar']);
}

function generateLifeDetection() {
    return Math.random() < 0.99;
}

function generateLifeformTraits(civilizationLevel) {
    const primaryTraits = [["Aggressive", "red-disabled-text"], ["Diplomatic", "green-ready-text"]];
    const habitatTraits = [["Terrans", ""], ["Aquatic", ""], ["Aerialians", ""]];
    const extraTraits = [["Armored", "red-disabled-text"], ["Hive Mind", "red-disabled-text"], ["Heat Resistant", "warning-orange-text"], ["Cold Resistant", "warning-orange-text"]];

    if (civilizationLevel === 'Unsentient') {
        return [['N/A', ''], ['N/A', ''], ['N/A', '']];
    }

    const primaryTrait = primaryTraits[Math.floor(Math.random() * primaryTraits.length)];
    const habitatTrait = habitatTraits[Math.floor(Math.random() * habitatTraits.length)];
    const extraTrait = extraTraits[Math.floor(Math.random() * extraTraits.length)];

    return [primaryTrait, habitatTrait, extraTrait];
}

function generateCivilizationLevel() {
    const randomValue = Math.random();

    if (randomValue < 0.1) {
        return "Unsentient";
    } else if (randomValue < 0.55) {
        return "Industrial";
    } else {
        return "Spacefaring";
    }
}

function generatePopulationEstimate(lifeformTraits) {
    let population = Math.floor(Math.random() * (50000000 - 1000000 + 1)) + 1000000;

    if (lifeformTraits.some(trait => trait[0] === "Hive Mind")) {
        population *= 4;
    }

    return population;
}

function generateThreatLevel(civilizationLevel, population, lifeformTraits) {
    let threatLevel = "None";

    if (civilizationLevel === "Unsentient") {
        return threatLevel;
    }

    if (civilizationLevel === "Industrial") {
        if (population >= 10000000) {
            threatLevel = "Moderate";
        } else {
            threatLevel = "Low";
        }
    } else if (civilizationLevel === "Spacefaring") {
        if (population >= 50000000) {
            threatLevel = "Extreme";
        } else if (population >= 10000000) {
            threatLevel = "High";
        } else {
            threatLevel = "Moderate";
        }
    }

    if (lifeformTraits.some(trait => trait[0] === "Diplomatic") && threatLevel !== "None") {
        const threatLevels = ["None", "Low", "Moderate", "High", "Extreme"];
        const currentIndex = threatLevels.indexOf(threatLevel);
        threatLevel = threatLevels[Math.max(0, currentIndex - 1)];
    }    

    return threatLevel;
}

function generateDefenseRating(civilizationLevel, threatLevel, lifeformTraits) {
    const maxDefense = 100;
    let defenseRating = 0;

    if (civilizationLevel === "Unsentient") {
        return defenseRating;
    }

    const threatMultipliers = {
        "None": 0,
        "Low": 0.2,
        "Moderate": 0.4,
        "High": 0.7,
        "Extreme": 1
    };

    const civilizationBonus = civilizationLevel === "Spacefaring" ? 1 : 0.5;

    defenseRating = Math.round(maxDefense * threatMultipliers[threatLevel] * civilizationBonus);

    if (lifeformTraits.some(trait => trait[0] === "Armored")) {
        defenseRating = Math.min(maxDefense, defenseRating + 10);
    }    

    const minDefense = Math.max(1, defenseRating - 10);
    const maxDefenseAdjusted = Math.min(100, defenseRating + 10);

    return Math.floor(Math.random() * (maxDefenseAdjusted - minDefense + 1)) + minDefense;
}

function generateEnemyFleets(threatLevel, population, lifeformTraits) {
    const threatFleetMultipliers = {
        "None": 0,
        "Low": 0.00000002,      
        "Moderate": 0.00000005,
        "High": 0.0000001,
        "Extreme": 0.0000002
    };

    let totalFleets = Math.floor(population * threatFleetMultipliers[threatLevel] * 100);

    if (lifeformTraits.some(trait => trait[0] === "Diplomatic")) {
        totalFleets = Math.floor(totalFleets * 0.5);
    }    

    if (totalFleets === 0) return { land: 0, air: 0, sea: 0 };

    let primaryType;
    if (lifeformTraits.some(trait => trait[0] === "Terrans")) primaryType = "land";
    else if (lifeformTraits.some(trait => trait[0] === "Aerialians")) primaryType = "air";
    else if (lifeformTraits.some(trait => trait[0] === "Aquatic")) primaryType = "sea";    
    else primaryType = ["land", "air", "sea"][Math.floor(Math.random() * 3)];

    const primaryFleets = Math.floor(totalFleets * 0.6);
    let remainingFleets = totalFleets - primaryFleets;

    let secondaryFleets = Math.floor(Math.random() * (remainingFleets + 1));
    let tertiaryFleets = remainingFleets - secondaryFleets;

    let fleetDistribution = { land: 0, air: 0, sea: 0 };
    fleetDistribution[primaryType] = primaryFleets;

    let otherTypes = ["land", "air", "sea"].filter(type => type !== primaryType);
    fleetDistribution[otherTypes[0]] = secondaryFleets;
    fleetDistribution[otherTypes[1]] = tertiaryFleets;

    return fleetDistribution;
}

function generateAnomalies(civilizationLevel) {
    const possibleAnomalies = [
        { name: "Electromagnetic Surge", effect: "Enemy defense -20%", value: -20, type: "enemy-defense-debuff", counter: "enemy-defense-buff", target: "enemy", class: "green-ready-text" },
        { name: "Fortified Magnetic Field", effect: "Enemy defense +20%", value: 20, type: "enemy-defense-buff", counter: "enemy-defense-debuff", target: "enemy", class: "red-disabled-text" },
        { name: "Plasma Instability", effect: "Player attack power +15%", value: 15, type: "player-attack-buff", counter: "player-attack-debuff", target: "player", class: "green-ready-text" },
        { name: "Energy Dampening Field", effect: "Player attack -15%", value: -15, type: "player-attack-debuff", counter: "player-attack-buff", target: "player", class: "red-disabled-text" },
        { name: "Atmospheric Disturbance", effect: "Enemy air fleets -30%", value: -30, type: "air-debuff", counter: "air-buff", target: "enemy", class: "green-ready-text" },
        { name: "High-Altitude Jet Streams", effect: "Enemy air fleets +20%", value: 20, type: "air-buff", counter: "air-debuff", target: "enemy", class: "red-disabled-text" },
        { name: "Seismic Instability", effect: "Enemy land fleets -30%", value: -30, type: "land-debuff", counter: "land-buff", target: "enemy", class: "green-ready-text" },
        { name: "Tectonic Shift", effect: "Enemy land fleets +20%", value: 20, type: "land-buff", counter: "land-debuff", target: "enemy", class: "red-disabled-text" },
        { name: "Deep Ocean Currents", effect: "Enemy sea fleets -30%", value: -30, type: "sea-debuff", counter: "sea-buff", target: "enemy", class: "green-ready-text" },
        { name: "Dark Matter Flux", effect: "Enemy sea fleets +20%", value: 20, type: "sea-buff", counter: "sea-debuff", target: "enemy", class: "red-disabled-text" }
    ];

    if (civilizationLevel === 'Unsentient') {
        return [{ name: "None", effect: "", value: 0, type: "", counter: "", target: "", class: "" }];
    }

    const shuffled = possibleAnomalies.sort(() => Math.random() - 0.5);

    let selectedAnomalies = [];
    
    for (let anomaly of shuffled) {
        if (!selectedAnomalies.some(a => a.type === anomaly.counter)) {
            selectedAnomalies.push(anomaly);
        }
        if (selectedAnomalies.length === 2) break;
    }

    return selectedAnomalies;
}

function generateRaceName(civilizationLevel) {

    if (civilizationLevel === 'Unsentient') {
        const unsentientRaces = ['Floral', 'Bacterial', 'Cellular', 'Fungal', 'Mossy', 'Lichenous', 'Microbial', 'Protozoan'];
        return unsentientRaces[Math.floor(Math.random() * unsentientRaces.length)];
    }

    const useStarName = Math.random() < 0.5;
    let starName = getDestinationStar().split(" ")[0].toLowerCase();

    const prefixes = [
        "Xy", "Za", "Vo", "Thra", "Kro", "Mora", "Dra", "Nexa", "Vex", "Zy",
        "Tero", "Qua", "Joro", "Phy", "Uro", "Grex", "Sylo", "Fero", "Wex", "Dexo",
        "Byra", "Tarn", "Oza", "Kly", "Mexo", "Pha", "Voro", "Dren", "Sora", "Lumo",
        "Xero", "Trilo", "Bry", "Nyth", "Quen", "Kyra", "Drano", "Luth", "Zylo", "Omex"
    ];
    
    const middles = [
        "vi", "lor", "thar", "quon", "zar", "mion", "rax", "drel", "vex", "nex",
        "phy", "ryn", "sol", "tarn", "bex", "thyl", "zor", "phel", "kyn", "threx",
        "lyx", "vor", "drix", "quar", "meth", "syl", "tor", "zarn", "lex", "dyn"
    ];
    
    const suffixes = [
        "ites", "ians", "nths", "oids", "ari", "ans", "eths", "ors", "ex", "ar",
        "oth", "orn", "yx", "eth", "al", "os", "ith", "une", "yn", "um",
        "orax", "eron", "ara", "oza", "exo", "yss", "ithil", "onis", "uva", "quix"
    ];

    let raceName;

    if (useStarName) {
        let prefix = Math.random() < 0.5 ? prefixes[Math.floor(Math.random() * prefixes.length)] : "";
        let middle = Math.random() < 0.5 ? middles[Math.floor(Math.random() * middles.length)] : "";
        let suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

        raceName = `${prefix}${starName}${middle}${suffix}`;
    } else {
        let prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        let middle = middles[Math.floor(Math.random() * middles.length)];
        let suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

        raceName = `${prefix}${middle}${suffix}`;
    }

    raceName = raceName.length <= 14 ? raceName : raceName.substring(0, 14);
    return raceName.charAt(0).toUpperCase() + raceName.slice(1);
}

//===============================================================================================================

export function setGameState(newState) {
    setGameStateVariable(newState);

    switch (newState) {
        case getGameVisibleActive():
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
