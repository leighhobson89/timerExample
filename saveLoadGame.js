import {
    getMinimumVersion,
    getCurrentGameVersion,
    setSaveName,
    getSaveName,
    setLastSavedTimeStamp,
    getLastSavedTimeStamp,
    setSaveData, 
    captureGameStatusForSaving, 
    restoreGameStatus, 
    getElements,
    getAutoSaveFrequency,
    getAutoSaveToggle,
    getSaveData,
    eNCrQueen,
    // getLanguage, 
    // setLanguageChangedFlag, 
    // getLanguageChangedFlag 
} from './constantsAndGlobalVars.js';

//import {localize} from './localization.js';
//import { handleLanguageChange } from './ui.js';

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { showNotification } from './ui.js';
import { rocketNames } from './descriptions.js';

let autoSaveTimer = null;
let firebaseConfig;
let app;
let analytics;
let db;

export function initializeAutoSave() {
    if (autoSaveTimer) {
        clearTimeout(autoSaveTimer);
    }

    const autoSaveHandler = () => {
        if (getAutoSaveToggle()) {
            saveGame('autoSave');
            if (getSaveData()) {
                saveGameToCloud(getSaveData(), 'autosave');
            }
            setSaveData(null);
        }
        autoSaveTimer = setTimeout(autoSaveHandler, getAutoSaveFrequency());
    };

    autoSaveTimer = setTimeout(autoSaveHandler, getAutoSaveFrequency());
}

export async function saveGameToCloud(gameData, type) {
    try {
        const userId = getSaveName();
        const saveRef = doc(db, "cosmicForgeSaves_0.20", userId);

        await setDoc(saveRef, { saveData: gameData });

        if (type !== 'initialise') {
            showNotification('Game saved to the cloud!', 'info');
        }

    } catch (error) {
        showNotification('Error saving game to cloud!', 'error');
        console.error("Error saving game to cloud:", error);
    }
}

export function saveGame(type) {
    const gameState = captureGameStatusForSaving(type);
    gameState.timeStamp = new Date().toISOString();

    const serializedGameState = JSON.stringify(gameState);
    const compressedSaveData = LZString.compressToEncodedURIComponent(serializedGameState);

    const saveGameArea = document.getElementById('exportSaveArea');
    if (saveGameArea) {
        setSaveData(compressedSaveData);
        saveGameArea.value = compressedSaveData;
        saveGameArea.readOnly = true;
    }

    if (type === 'initialise') {
        setSaveData(compressedSaveData);
    }
}

export const ProxyServer = CryptoJS;

export function copySaveStringToClipBoard() {
    const textArea = document.getElementById('exportSaveArea');
    textArea.select();
    textArea.setSelectionRange(0, 99999);

    try {
        navigator.clipboard.writeText(textArea.value)
            .then(() => {
                showNotification('Data copied to clipboard!', 'info');
            })
            .catch(err => {
                showNotification('Error copying data!', 'error');
                console.log('Error copying data! ' + err);
            })
            .finally(() => {
                textArea.setSelectionRange(0, 0);
            })
    } catch (err) {
        console.log('Error copying data! ' + err);
    }
}

export async function loadGameFromCloud() {
    try {
        const userId = localStorage.getItem('saveName') || getSaveName();
        const saveRef = doc(db, "cosmicForgeSaves_0.20", userId);
        const docSnapshot = await getDoc(saveRef);

        if (docSnapshot.exists()) {
            const gameData = docSnapshot.data().saveData;

            const decompressedJson = LZString.decompressFromEncodedURIComponent(gameData);
            const gameState = JSON.parse(decompressedJson);

            await initialiseLoadedGame(gameState, 'cloud');
            showNotification('Game loaded successfully!', 'info');
            return true;
        } else {
            showNotification('No saved game data found.', 'warning');
            return false;
        }
    } catch (error) {
        console.error("Error loading game from cloud:", error);
        showNotification('Error loading game data from the cloud.', 'error');
        return false;
    }
}

export function loadGame() {
    return new Promise((resolve, reject) => {
        const textArea = document.getElementById('importSaveArea');
        if (!textArea || !textArea.value.trim()) {
            return reject('No valid save data found in the import area.');
        }

        try {
            const compressed = textArea.value.trim();

            // Validate the compressed string before processing
            if (!validateSaveString(compressed)) {
                showNotification('Invalid game data string. Please check and try again.', 'warning');
                return reject('Invalid game data string');
            }

            const decompressedJson = LZString.decompressFromEncodedURIComponent(compressed);
            const gameState = JSON.parse(decompressedJson);

            initialiseLoadedGame(gameState, 'textImport')
                .then(() => {
                    showNotification('Game loaded successfully!', 'info');
                    resolve();
                })
                .catch(error => {
                    console.error('Error initializing game:', error);
                    showNotification('Error initializing game. Please make sure the data is correct.', 'error');
                    reject(error);
                });

        } catch (error) {
            console.error('Error loading game:', error);
            showNotification('Error loading game. Please make sure the string contains valid game data.', 'error');
            reject(error);
        }
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const vcx = await eNCrQueen();

    firebaseConfig = {
        apiKey: vcx,
        authDomain: "cosmic-forge-1981.firebaseapp.com",
        projectId: "cosmic-forge-1981",
        storageBucket: "cosmic-forge-1981.firebasestorage.app",
        messagingSenderId: "155017224771",
        appId: "1:155017224771:web:c4cb2d9f468c0571b9aaf6",
        measurementId: "G-82DCH5GJ0P"
    };
    
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    db = getFirestore(app);
});

function validateSaveString(compressed) {
    try {
        const decompressedJson = LZString.decompressFromEncodedURIComponent(compressed);
        JSON.parse(decompressedJson);
        return decompressedJson !== null;
    } catch {
        return false;
    }
}

async function initialiseLoadedGame(gameState, type) {
    await restoreGameStatus(gameState, type);
}

window.proxyServerEngineDKrypt = (a1a, viv) => {
    const AsZd = ProxyServer.AES.decrypt(a1a, viv);
    const c3RT = AsZd.toString(ProxyServer.enc.Utf8);
    return c3RT;
};

export function generateRandomPioneerName() {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < 8; i++) {
        randomString += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }

    const pioneerName = `Pioneer-${randomString}`;
    setSaveName(pioneerName);
}

export function migrateResourceData(saveData, objectType) { //WILL EVOLVE OVER TIME
    const currentVersion = getCurrentGameVersion();
    saveData.version = saveData.version ? saveData.version : getMinimumVersion();

    while (saveData.version < currentVersion) {
        if (saveData.version < 0.26) {
            if (objectType === 'resourceData') {
                saveData.version = 0.26;
                //add a loop if necessary to change structure of all keys
                if (!saveData.space.upgrades.spaceTelescope) {
                    saveData.space.upgrades.spaceTelescope = { 
                        spaceTelescopeBoughtYet: false,
                        price: 10000,
                        resource1Price: [20000, 'steel', 'compounds'],
                        resource2Price: [15000, 'glass', 'compounds'],
                        resource3Price: [20000, 'silicon', 'resources'],
                        energyUseSearchAsteroid: 0.4,
                        energyUseInvestigateStar: 0.7
                    }
                }

                if (!saveData.techs.planetaryNavigation) {
                    saveData.techs.planetaryNavigation = {
                        appearsAt: [27000, "atmosphericTelescopes", "rocketComposites", "quantumComputing"], prereqs: ['Atmospheric Telescopes', 'Rocket Composites', 'Quantum Computing'], price: 29000, idForRenderPosition: 57
                    }
                }

                if (!saveData.antimatter) {
                    saveData.antimatter = {
                        quantity: 0,
                        rate: 0,
                        storageCapacity: 100000
                    }
                }
            } else if (objectType === 'starSystemsData') {
                saveData = {
                    stars: {
                        spica: {
                            starCode: 'SPC',
                            precipitationResourceCategory: 'compounds',
                            precipitationType: 'water',
                            weather: {
                                sunny: [30, '☀', 1, 'white'],
                                cloudy: [47, '☁', 0.6, 'orange'],
                                rain: [20, '☂', 0.4, 'orange'],
                                volcano: [3, '⛰', 0.05, 'red']
                            }
                        }
                    }
                };
            } else if (objectType === 'rocketNames') {
            }
        }

        if (saveData.version < 0.28) {
            if (objectType === 'resourceData') {
                saveData.space.upgrades.spaceTelescope = { 
                    spaceTelescopeBoughtYet: false,
                    price: 10000,
                    resource1Price: [20000, 'steel', 'compounds'],
                    resource2Price: [15000, 'glass', 'compounds'],
                    resource3Price: [20000, 'silicon', 'resources'],
                    energyUseSearchAsteroid: 0.4,
                    energyUseInvestigateStar: 0.7
                }
            } else if (objectType === 'starSystemsData') {
                saveData = {
                    stars: {
                        spica: {
                            mapSize: 5.504440179536064,
                            startingStar: true,
                            starCode: 'SPC',
                            precipitationResourceCategory: 'compounds',
                            precipitationType: 'water',
                            weather: {
                                sunny: [30, '☀', 1, 'green-ready-text'],
                                cloudy: [47, '☁', 0.6, 'warning-orange-text'],
                                rain: [20, '☂', 0.4, 'warning-orange-text'],
                                volcano: [3, '⛰', 0.05, 'red-disabled-text']
                            }
                        }
                    }
                };
            } else if (objectType === 'rocketNames') {
            }
        }

        if (saveData.version < 0.29) {
            if (objectType === 'resourceData') {
                saveData.ascendencyPoints = { 
                    quantity: 0,
                }
            } else if (objectType === 'starSystemsData') {

            } else if (objectType === 'rocketNames') {
                saveData.rocketDescription = 'Build the launch pad to launch built rockets and mine asteroids for Antimatter.'
            }
        }

        if (saveData.version < 0.30) {
            if (objectType === 'resourceData') {
                saveData.space = {
                    upgrades: {
                        spaceTelescope: { 
                            spaceTelescopeBoughtYet: false,
                            price: 10000,
                            resource1Price: [20000, 'iron', 'resources'],
                            resource2Price: [15000, 'glass', 'compounds'],
                            resource3Price: [20000, 'silicon', 'resources'],
                            energyUseSearchAsteroid: 0.4,
                            energyUseInvestigateStar: 0.7,
                        },
                        launchPad: { 
                            launchPadBoughtYet: false,
                            price: 40000,
                            resource1Price: [10000, 'iron', 'resources'],
                            resource2Price: [1000, 'titanium', 'compounds'],
                            resource3Price: [20000, 'concrete', 'compounds'],
                        },
                        rocket1: {
                            builtParts: 0,
                            parts: 15,
                            price: 1000,
                            resource1Price: [1000, 'glass', 'compounds'],
                            resource2Price: [1000, 'titanium', 'compounds'],
                            resource3Price: [3000, 'steel', 'compounds'],
                            setPrice: 'rocket1Price',
                            fuelQuantity: 0,
                            fuelQuantityToLaunch: 10000, //10000
                            autoBuyer: {
                                currentTierLevel: 1,
                                normalProgression: false,
                                tier1: { nameUpgrade: 'Fuel', screen: 'rocket1', place: 'rocket1Autobuyer1Row', price: 5000, rate: 0.02, quantity: 0, setPrice: 'rocket1AB1Price', energyUse: 0.7 },
                            },
                        },
                        rocket2: {
                            builtParts: 0,
                            parts: 20,
                            price: 1000,
                            resource1Price: [1000, 'glass', 'compounds'],
                            resource2Price: [1000, 'titanium', 'compounds'],
                            resource3Price: [3000, 'steel', 'compounds'],
                            setPrice: 'rocket2Price',
                            fuelQuantity: 0,
                            fuelQuantityToLaunch: 12000,
                            autoBuyer: {
                                currentTierLevel: 1,
                                normalProgression: false,
                                tier1: { nameUpgrade: 'Fuel', screen: 'rocket2', place: 'rocket2Autobuyer1Row', price: 6000, rate: 0.02, quantity: 0, setPrice: 'rocket2AB1Price', energyUse: 0.8 },
                            },
                        },
                        rocket3: {
                            builtParts: 0,
                            parts: 25,
                            price: 1000,
                            resource1Price: [1000, 'glass', 'compounds'],
                            resource2Price: [1000, 'titanium', 'compounds'],
                            resource3Price: [3000, 'steel', 'compounds'],
                            setPrice: 'rocket3Price',
                            fuelQuantity: 0,
                            fuelQuantityToLaunch: 14000,
                            autoBuyer: {
                                currentTierLevel: 1,
                                normalProgression: false,
                                tier1: { nameUpgrade: 'Fuel', screen: 'rocket3', place: 'rocket3Autobuyer1Row', price: 7000, rate: 0.02, quantity: 0, setPrice: 'rocket3AB1Price', energyUse: 0.9 },
                            },
                        },
                        rocket4: {
                            builtParts: 0,
                            parts: 30,
                            price: 1000,
                            resource1Price: [1000, 'glass', 'compounds'],
                            resource2Price: [1000, 'titanium', 'compounds'],
                            resource3Price: [3000, 'steel', 'compounds'],
                            setPrice: 'rocket4Price',
                            fuelQuantity: 0,
                            fuelQuantityToLaunch: 16000,
                            autoBuyer: {
                                currentTierLevel: 1,
                                normalProgression: false,
                                tier1: { nameUpgrade: 'Fuel', screen: 'rocket4', place: 'rocket4Autobuyer1Row', price: 8000, rate: 0.02, quantity: 0, setPrice: 'rocket4AB1Price', energyUse: 1.0 },
                            },
                        },
                        ssStructural: {
                            finished: false,
                            builtParts: 0,
                            parts: 20,
                            price: 6000,
                            resource1Price: [8000, 'steel', 'compounds'],
                            resource2Price: [3000, 'titanium', 'compounds'],
                            resource3Price: [9000, 'silicon', 'resources'],
                            setPrice: 'ssStructuralPrice',
                        },
                        ssLifeSupport: {
                            finished: false,
                            builtParts: 0,
                            parts: 10,
                            price: 15000,
                            resource1Price: [10000, 'glass', 'compounds'],
                            resource2Price: [100000, 'oxygen', 'resources'],
                            resource3Price: [30000, 'water', 'compounds'],
                            setPrice: 'ssLifeSupportPrice',
                        },
                        ssAntimatterEngine: {
                            finished: false,
                            builtParts: 0,
                            parts: 16,
                            price: 12000,
                            resource1Price: [7000, 'steel', 'compounds'],
                            resource2Price: [4000, 'titanium', 'compounds'],
                            resource3Price: [20000, 'neon', 'resources'],
                            setPrice: 'ssAntimatterEnginePrice',
                            autoBuyer: {
                                currentTierLevel: 1,
                                normalProgression: false,
                                tier1: { nameUpgrade: 'Fuel', screen: 'star ship', place: 'starShipAutobuyer1Row', price: 20000, rate: 0.02, quantity: 0, setPrice: 'starShipAB1Price', energyUse: 4.0 },
                            }
                        },
                        ssFleetHangar: {
                            finished: false,
                            builtParts: 0,
                            parts: 1,
                            price: 100000,
                            resource1Price: [80000, 'glass', 'compounds'],
                            resource2Price: [40000, 'titanium', 'compounds'],
                            resource3Price: [150000, 'steel', 'compounds'],
                            setPrice: 'ssFleetHangarPrice'
                        },
                        ssStellarScanner: {
                            finished: false,
                            builtParts: 0,
                            parts: 8,
                            price: 5000,
                            resource1Price: [3000, 'glass', 'compounds'],
                            resource2Price: [4000, 'silicon', 'resources'],
                            resource3Price: [6000, 'neon', 'resources'],
                            setPrice: 'ssStellarScannerPrice'
                        }
                    }
                }
                if (!saveData.techs.orbitalConstruction) { saveData.techs.orbitalConstruction = { appearsAt: [45000, "planetaryNavigation", "rocketComposites", ""], prereqs: ['Planetary Navigation', 'Rocket Composites'], price: 50000, idForRenderPosition: 9100 } }
                if (!saveData.techs.antimatterEngines) { saveData.techs.antimatterEngines = { appearsAt: [65000, "orbitalConstruction", "neutronCapture", "FTLravelTheory"], prereqs: ['Orbital Construction', 'Neutron Capture', 'FTL Travel Theory'], price: 78000, idForRenderPosition: 9101 } }
                if (!saveData.techs.FTLTravelTheory) { saveData.techs.FTLTravelTheory = { appearsAt: [60000, "neutronCapture", "planetaryNavigation", "advancedFuels"], prereqs: ['Neutron Capture', 'Planetary Navigation', 'Advanced Fuels'], price: 65000, idForRenderPosition: 9102 } }
                if (!saveData.techs.lifeSupportSystems) { saveData.techs.lifeSupportSystems = { appearsAt: [55000, "orbitalConstruction", "nanoTubeTechnology", "quantumComputing"], prereqs: ['Orbital Construction', 'Nano Tube Technology', 'Quantum Computing'], price: 60000, idForRenderPosition: 9103 } }
                if (!saveData.techs.starshipFleets) { saveData.techs.starshipFleets = { appearsAt: [80000, "FTLTravelTheory", "antimatterEngines", "orbitalConstruction"], prereqs: ['FTL Travel Theory', 'Antimatter Engines', 'Orbital Construction'], price: 100000, idForRenderPosition: 9104 } }
                if (!saveData.techs.stellarScanners) { saveData.techs.stellarScanners = { appearsAt: [70000, "FTLTravelTheory", "orbitalConstruction"], prereqs: ['FTL Travel Theory', 'Orbital Construction'], price: 72000, idForRenderPosition: 9105 } }
            } else if (objectType === 'starSystemsData') {

            } else if (objectType === 'rocketNames') {

            }
        }
    
        saveData.version += 0.01;
    }   

    return saveData;
}

