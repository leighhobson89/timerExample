export const resourceData = {
    resources: {
        hydrogen: {
            nameResource: 'Hydrogen',
            screenName: 'hydrogen',
            saleValue: 0.02,
            salePreviewElement: 'sellHydrogenDescription',
            quantity: 0,
            rate: 0,
            ratePower: 0,
            storageCapacity: 150,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: true,
                    tier1: { nameUpgrade: 'Hydrogen Compressor', screen: 'hydrogen', place: 'hydrogenAutoBuyer1Row', price: 50, rate: 0.02, quantity: 0, setPrice: 'hydrogenAB1Price', energyUse: 0 },
                    tier2: { nameUpgrade: 'Advanced Hydrogen Compressor', screen: 'hydrogen', place: 'hydrogenAutoBuyer2Row', price: 400, rate: 0.1, quantity: 0, setPrice: 'hydrogenAB2Price', energyUse: 0.03 },
                    tier3: { nameUpgrade: 'Industrial Hydrogen Compressor', screen: 'hydrogen', place: 'hydrogenAutoBuyer3Row', price: 2000, rate: 0.5, quantity: 0, setPrice: 'hydrogenAB3Price', energyUse: 0.12 },
                    tier4: { nameUpgrade: 'Quantum Hydrogen Compressor', screen: 'hydrogen', place: 'hydrogenAutoBuyer4Row', price: 10000, rate: 2.5, quantity: 0, setPrice: 'hydrogenAB4Price', energyUse: 0.6 }
                },
            },
            revealedBy: '',
            canFuseTech: 'hydrogenFusion',
            fuseTo1: 'helium',
            fuseTo2: '',
            fuseToRatio1: 0.5,
            fuseToRatio2: 0
        },
        helium: {
            nameResource: 'Helium',
            screenName: 'helium',
            saleValue: 0.01,
            salePreviewElement: 'sellHeliumDescription',
            quantity: 0,
            rate: 0,
            ratePower: 0,
            storageCapacity: 120,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: true,
                    tier1: { nameUpgrade: 'Helium Extractor', screen: 'helium', place: 'heliumAutoBuyer1Row', price: 75, rate: 0.015, quantity: 0, setPrice: 'heliumAB1Price', energyUse: 0 },
                    tier2: { nameUpgrade: 'Advanced Helium Extractor', screen: 'helium', place: 'heliumAutoBuyer2Row', price: 600, rate: 0.075, quantity: 0, setPrice: 'heliumAB2Price', energyUse: 0.03 },
                    tier3: { nameUpgrade: 'Industrial Helium Extractor', screen: 'helium', place: 'heliumAutoBuyer3Row', price: 3000, rate: 0.375, quantity: 0, setPrice: 'heliumAB3Price', energyUse: 0.09 },
                    tier4: { nameUpgrade: 'Quantum Helium Extractor', screen: 'helium', place: 'heliumAutoBuyer4Row', price: 15000, rate: 1.875, quantity: 0, setPrice: 'heliumAB4Price', energyUse: 0.45 }
                }
            },
            revealedBy: 'hydrogenFusion',
            canFuseTech: 'heliumFusion',
            fuseTo1: 'carbon',
            fuseTo2: '',
            fuseToRatio1: 0.3,
            fuseToRatio2: 0
        },
        carbon: {
            nameResource: 'Carbon',
            screenName: 'carbon',
            saleValue: 0.1,
            salePreviewElement: 'sellCarbonDescription',
            quantity: 0,
            rate: 0,
            ratePower: 0,
            storageCapacity: 130,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: true,
                    tier1: { nameUpgrade: 'Burner', screen: 'carbon', place: 'carbonAutoBuyer1Row', price: 80, rate: 0.02, quantity: 0, setPrice: 'carbonAB1Price', energyUse: 0 },
                    tier2: { nameUpgrade: 'Advanced Carbon Extractor', screen: 'carbon', place: 'carbonAutoBuyer2Row', price: 640, rate: 0.1, quantity: 0, setPrice: 'carbonAB2Price', energyUse: 0.03 },
                    tier3: { nameUpgrade: 'Industrial Carbon Extractor', screen: 'carbon', place: 'carbonAutoBuyer3Row', price: 3200, rate: 0.5, quantity: 0, setPrice: 'carbonAB3Price', energyUse: 0.12 },
                    tier4: { nameUpgrade: 'Quantum Carbon Extractor', screen: 'carbon', place: 'carbonAutoBuyer4Row', price: 16000, rate: 2.5, quantity: 0, setPrice: 'carbonAB4Price', energyUse: 0.6 }
                }
            },
            revealedBy: 'heliumFusion',
            canFuseTech: 'carbonFusion',
            fuseTo1: 'neon',
            fuseTo2: 'sodium',
            fuseToRatio1: 0.3,
            fuseToRatio2: 0.2
        },    
        neon: {
            nameResource: 'Neon',
            screenName: 'neon',
            saleValue: 0.02,
            salePreviewElement: 'sellNeonDescription',
            quantity: 0,
            rate: 0,
            ratePower: 0,
            storageCapacity: 200,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: false,
                    tier1: { nameUpgrade: 'Neon Extractor', screen: 'neon', place: 'neonAutoBuyer1Row', price: 120, rate: 0.025, quantity: 0, setPrice: 'neonAB1Price', energyUse: 0 },
                    tier2: { nameUpgrade: 'Advanced Neon Extractor', screen: 'neon', place: 'neonAutoBuyer2Row', price: 960, rate: 0.125, quantity: 0, setPrice: 'neonAB2Price', energyUse: 0.03 },
                    tier3: { nameUpgrade: 'Industrial Neon Extractor', screen: 'neon', place: 'neonAutoBuyer3Row', price: 4800, rate: 0.625, quantity: 0, setPrice: 'neonAB3Price', energyUse: 0.15 },
                    tier4: { nameUpgrade: 'Quantum Neon Extractor', screen: 'neon', place: 'neonAutoBuyer4Row', price: 24000, rate: 3.125, quantity: 0, setPrice: 'neonAB4Price', energyUse: 0.75 }
                }
            },
            revealedBy: 'carbonFusion',
            canFuseTech: 'neonFusion',
            fuseTo1: 'oxygen',
            fuseTo2: '',
            fuseToRatio1: 0.3,
            fuseToRatio2: 0
        },
        oxygen: {
            nameResource: 'Oxygen',
            screenName: 'oxygen',
            saleValue: 0.02,
            salePreviewElement: 'sellOxygenDescription',
            quantity: 0,
            rate: 0,
            ratePower: 0,
            storageCapacity: 170,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: false,
                    tier1: { nameUpgrade: 'Oxygen Extractor', screen: 'oxygen', place: 'oxygenAutoBuyer1Row', price: 140, rate: 0.03, quantity: 0, setPrice: 'oxygenAB1Price', energyUse: 0 },
                    tier2: { nameUpgrade: 'Advanced Oxygen Extractor', screen: 'oxygen', place: 'oxygenAutoBuyer2Row', price: 1120, rate: 0.15, quantity: 0, setPrice: 'oxygenAB2Price', energyUse: 0.03 },
                    tier3: { nameUpgrade: 'Industrial Oxygen Extractor', screen: 'oxygen', place: 'oxygenAutoBuyer3Row', price: 5600, rate: 0.75, quantity: 0, setPrice: 'oxygenAB3Price', energyUse: 0.18 },
                    tier4: { nameUpgrade: 'Quantum Oxygen Extractor', screen: 'oxygen', place: 'oxygenAutoBuyer4Row', price: 28000, rate: 3.75, quantity: 0, setPrice: 'oxygenAB4Price', energyUse: 0.9 }
                }
            },
            revealedBy: 'neonFusion',
            canFuseTech: 'oxygenFusion',
            fuseTo1: 'silicon',
            fuseTo2: '',
            fuseToRatio1: 0.2,
            fuseToRatio2: 0
        },
        silicon: {
            nameResource: 'Silicon',
            screenName: 'silicon',
            saleValue: 0.02,
            salePreviewElement: 'sellSiliconDescription',
            quantity: 0,
            rate: 0,
            ratePower: 0,
            storageCapacity: 150,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: false,
                    tier1: { nameUpgrade: 'Silicon Extractor', screen: 'silicon', place: 'siliconAutoBuyer1Row', price: 200, rate: 0.035, quantity: 0, setPrice: 'siliconAB1Price', energyUse: 0 },
                    tier2: { nameUpgrade: 'Advanced Silicon Extractor', screen: 'silicon', place: 'siliconAutoBuyer2Row', price: 1600, rate: 0.175, quantity: 0, setPrice: 'siliconAB2Price', energyUse: 0.03 },
                    tier3: { nameUpgrade: 'Industrial Silicon Extractor', screen: 'silicon', place: 'siliconAutoBuyer3Row', price: 8000, rate: 0.875, quantity: 0, setPrice: 'siliconAB3Price', energyUse: 0.21 },
                    tier4: { nameUpgrade: 'Quantum Silicon Extractor', screen: 'silicon', place: 'siliconAutoBuyer4Row', price: 40000, rate: 4.375, quantity: 0, setPrice: 'siliconAB4Price', energyUse: 1.05 }
                }
            },
            revealedBy: 'oxygenFusion',
            canFuseTech: 'siliconFusion',
            fuseTo1: 'iron',
            fuseTo2: '',
            fuseToRatio1: 0.2,
            fuseToRatio2: 0
        },
        iron: {
            nameResource: 'Iron',
            screenName: 'iron',
            saleValue: 0.02,
            salePreviewElement: 'sellIronDescription',
            quantity: 0,
            rate: 0,
            ratePower: 0,
            storageCapacity: 180,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: false,
                    tier1: { nameUpgrade: 'Iron Extractor', screen: 'iron', place: 'ironAutoBuyer1Row', price: 250, rate: 0.04, quantity: 0, setPrice: 'ironAB1Price', energyUse: 0 },
                    tier2: { nameUpgrade: 'Advanced Iron Extractor', screen: 'iron', place: 'ironAutoBuyer2Row', price: 2000, rate: 0.2, quantity: 0, setPrice: 'ironAB2Price', energyUse: 0.03 },
                    tier3: { nameUpgrade: 'Industrial Iron Extractor', screen: 'iron', place: 'ironAutoBuyer3Row', price: 10000, rate: 1, quantity: 0, setPrice: 'ironAB3Price', energyUse: 0.27 },
                    tier4: { nameUpgrade: 'Quantum Iron Extractor', screen: 'iron', place: 'ironAutoBuyer4Row', price: 50000, rate: 5, quantity: 0, setPrice: 'ironAB4Price', energyUse: 1.35 }
                }
            },
            revealedBy: 'siliconFusion',
            canFuseTech: '',
            fuseTo1: '',
            fuseTo2: '',
            fuseToRatio1: 0.3,
            fuseToRatio2: 0
        },
        sodium: {
            nameResource: 'Sodium',
            screenName: 'sodium',
            saleValue: 0.02,
            salePreviewElement: 'sellSodiumDescription',
            quantity: 0,
            rate: 0,
            ratePower: 0,
            storageCapacity: 200,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: false,
                    tier1: { nameUpgrade: 'Sodium Extractor', screen: 'sodium', place: 'sodiumAutoBuyer1Row', price: 300, rate: 0.05, quantity: 0, setPrice: 'sodiumAB1Price', energyUse: 0 },
                    tier2: { nameUpgrade: 'Advanced Sodium Extractor', screen: 'sodium', place: 'sodiumAutoBuyer2Row', price: 2400, rate: 0.25, quantity: 0, setPrice: 'sodiumAB2Price', energyUse: 0.03 },
                    tier3: { nameUpgrade: 'Industrial Sodium Extractor', screen: 'sodium', place: 'sodiumAutoBuyer3Row', price: 12000, rate: 1.25, quantity: 0, setPrice: 'sodiumAB3Price', energyUse: 0.24 },
                    tier4: { nameUpgrade: 'Quantum Sodium Extractor', screen: 'sodium', place: 'sodiumAutoBuyer4Row', price: 60000, rate: 6.25, quantity: 0, setPrice: 'sodiumAB4Price', energyUse: 1.2 }
                }
            },
            revealedBy: 'carbonFusion',
            canFuseTech: '',
            fuseTo1: '',
            fuseTo2: '',
            fuseToRatio1: 0.5,
            fuseToRatio2: 0
        }
    },
    compounds: {
        water: {
            nameResource: 'Water',
            screenName: 'water',
            saleValue: 0.1,
            salePreviewElement: 'sellWaterDescription',
            quantity: 50000,
            rate: 0,
            ratePower: 0,
            storageCapacity: 50500,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 2,
                    normalProgression: true,
                    tier1: { nameUpgrade: 'Atmospheric Condenser', screen: 'water', place: 'waterAutoBuyer1Row', price: 50000, rate: 0.02, quantity: 0, setPrice: 'waterAB1Price', energyUse: 0 },
                    tier2: { nameUpgrade: 'Advanced Atmospheric Condenser', screen: 'water', place: 'waterAutoBuyer2Row', price: 400000, rate: 0.1, quantity: 0, setPrice: 'waterAB2Price', energyUse: 0.03 },
                    tier3: { nameUpgrade: 'Industrial Atmospheric Condenser', screen: 'water', place: 'waterAutoBuyer3Row', price: 2000000, rate: 0.5, quantity: 0, setPrice: 'waterAB3Price', energyUse: 0.12 },
                    tier4: { nameUpgrade: 'Quantum Atmospheric Condenser', screen: 'water', place: 'waterAutoBuyer4Row', price: 10000000, rate: 2.5, quantity: 0, setPrice: 'waterAB4Price', energyUse: 0.6 }
                },
            },
            revealedBy: 'compounds',
            canCreateTech: 'compounds',
            createsFrom1: 'hydrogen',
            createsFrom2: 'oxygen',
            createsFrom3: '',
            createsFrom4: '',
            createsFromRatio1: 2,
            createsFromRatio2: 1,
            createsFromRatio3: 0,
            createsFromRatio4: 0
        },
    },
    buildings: {
        energy: {
            batteryBoughtYet: false,
            nameResource: 'Energy',
            screenName: 'energy',
            saleValue: 0,
            salePreviewElement: 'sellEnergyDescription',
            quantity: 0,
            rate: 0,
            consumption: 0,
            storageCapacity: 0,
            upgrades: {
                powerPlant1: { 
                    revealedBy: 'basicPowerGeneration',
                    price: 300, 
                    rate: 0.05,
                    quantity: 0, 
                    setPrice: 'powerPlant1Price'
                },
                powerPlant2: {
                    revealedBy: 'solarPowerGeneration',
                    price: 1200,
                    rate: 0.25,
                    quantity: 0, 
                    setPrice: 'powerPlant2Price' 
                },
                powerPlant3: {
                    revealedBy: 'advancedPowerGeneration',
                    price: 5000,
                    rate: 2.5,
                    quantity: 0, 
                    setPrice: 'powerPlant3Price' 
                },
                battery1: {
                    price: 5000,
                    capacity: 15000,
                    quantity: 0, 
                    setPrice: 'battery1Price'
                },
                battery2: {
                    price: 50000,
                    capacity: 150000,
                    quantity: 0, 
                    setPrice: 'battery2Price'
                },
                battery3: {
                    price: 500000,
                    capacity: 1500000,
                    quantity: 0, 
                    setPrice: 'battery3Price'
                }
            }
        }
    },
    research: {
        screenName: 'research',
        quantity: 100000,
        rate: 0,
        ratePower: 0,
        upgrades: {
            scienceKit: { 
                price: 5, 
                rate: 0.005,
                quantity: 0, 
                setPrice: 'scienceKitPrice',
                energyUse: 0
            },
            scienceClub: { 
                price: 75,
                rate: 0.1,
                quantity: 0, 
                setPrice: 'scienceClubPrice',
                energyUse: 0
            },
            scienceLab: { 
                price: 300,
                rate: 0.5,
                quantity: 0, 
                setPrice: 'scienceLabPrice',
                energyUse: 0.5
            }
        }
    },    
    techs: {
        knowledgeSharing: { appearsAt: [100, null], prereqs: [null], price: 150, idForRenderPosition: 10 },
        fusionTheory: { appearsAt: [500, null], prereqs: [null], price: 750, idForRenderPosition: 20 },
        hydrogenFusion: { appearsAt: [1000, "fusionTheory", ""], prereqs: ['Fusion Theory'], price: 1150, idForRenderPosition: 30 },
        heliumFusion: { appearsAt: [2000, "hydrogenFusion", ""], prereqs: ['Hydrogen Fusion'], price: 2300, idForRenderPosition: 40 },
        carbonFusion: { appearsAt: [3500, "nanoTubeTechnology", ""], prereqs: ['Nano Tube Technology'], price: 4000, idForRenderPosition: 50 },
        basicPowerGeneration: { appearsAt: [3500, "nanoTubeTechnology", ""], prereqs: ['Nano Tube Technology'], price: 4000, idForRenderPosition: 51 },
        sodiumIonPowerStorage: { appearsAt: [5000, "basicPowerGeneration", ""], prereqs: ['Basic Power Generation'], price: 7000, idForRenderPosition: 52 },
        solarPowerGeneration: { appearsAt: [7000, "steelFoundries", "glassManufacture"], prereqs: ['Steel Foundries', 'Glass Manufacture'], price: 8000, idForRenderPosition: 53 },
        advancedPowerGeneration: { appearsAt: [4000, "giganticTurbines", "basicPowerGeneration"], prereqs: ['Gigantic Turbines', 'Basic Power Generation'], price: 4500, idForRenderPosition: 54 },
        neonFusion: { appearsAt: [5000, "nobleGasCollection", ""], prereqs: ['Noble Gas Collection'], price: 5750, idForRenderPosition: 60 },
        oxygenFusion: { appearsAt: [7000, "neonFusion", ""], prereqs: ['Neon Fusion'], price: 8000, idForRenderPosition: 70 },
        compounds: { appearsAt: [8000, "hydrogenFusion", "oxygenFusion"], prereqs: ['Hydrogen Fusion', 'Oxygen Fusion'], price: 9000, idForRenderPosition: 70 },
        siliconFusion: { appearsAt: [10000, "oxygenFusion", ""], prereqs: ['Oxygen Fusion'], price: 11500, idForRenderPosition: 80 },
        steelFoundries: { appearsAt: [11500, "siliconFusion", ""], prereqs: ['Silicon Fusion'], price: 13000, idForRenderPosition: 81 },
        giganticTurbines: { appearsAt: [13000, "steelFoundries", ""], prereqs: ['Steel Foundries'], price: 15000, idForRenderPosition: 82 },
        nanoTubeTechnology: { appearsAt: [3500, "heliumFusion", ""], prereqs: ['Helium Fusion'], price: 4000, idForRenderPosition: 500 },
        stellarCartography: { appearsAt: [700, null], prereqs: [null], price: 800, idForRenderPosition: 510 },
        quantumComputing: { appearsAt: [5000, "nanoTubeTechnology", ""], prereqs: ['Nano Tube Technology'], price: 5750, idForRenderPosition: 520 },
        scienceLaboratories: { appearsAt: [5750, "quantumComputing", ""], prereqs: ['Quantum Computing'], price: 7000, idForRenderPosition: 521 },
        nobleGasCollection: { appearsAt: [4000, "nanoTubeTechnology", ""], prereqs: ['Nano Tube Technology'], price: 4500, idForRenderPosition: 530 },
        neutronCapture: { appearsAt: [20000, "siliconFusion", ""], prereqs: ['Silicon Fusion'], price: 23000, idForRenderPosition: 600 },
        glassManufacture: { appearsAt: [8000, "oxygenFusion", ""], prereqs: ['Oxygen Fusion'], price: 9000, idForRenderPosition: 700 },
        atmosphericTelescopes: { appearsAt: [9000, "glassManufacture", "stellarCartography"], prereqs: ['Glass Manufacture', 'Stellar Cartography'], price: 10000, idForRenderPosition: 700 },
        fusionEfficiencyI: { appearsAt: [1500, "fusionTheory", ""], prereqs: ['Fusion Theory'], price: 1750, idForRenderPosition: 9000 },
        fusionEfficiencyII: { appearsAt: [3000, "fusionEfficiencyI", ""], prereqs: ['Fusion Efficiency Stage I'], price: 3500, idForRenderPosition: 9010 },
        fusionEfficiencyIII: { appearsAt: [9000, "fusionEfficiencyII", ""], prereqs: ['Fusion Efficienmcy Stage II'], price: 10000, idForRenderPosition: 9030 }
    },    
    currency: {
        cash: 1000000,
    },
};

//----------------------------------------------------------------------------------------------------------
//GETTER SETTERS

export function getResourceDataObject(key, subKeys) {
    let current = resourceData[key];

    if (!current) {
        console.warn(`Resource data not found for key: ${key}`);
        return undefined;
    }

    if (subKeys) {
        for (const subKey of subKeys) {
            current = current?.[subKey];
            if (current === undefined) {
                console.warn(`Missing subKey: ${subKey}`);
                return undefined;
            }
        }
    }

    return current;
}

export function setResourceDataObject(value, key, subKeys = []) {
    if (!key) {
        console.warn("Main key is required.");
        return;
    }

    let current = resourceData;
    current = current[key] || (current[key] = {});

    for (let i = 0; i < subKeys.length; i++) {
        const subKey = subKeys[i];

        if (i === subKeys.length - 1) {
            current[subKey] = value;
        } else {
            current = current[subKey] || (current[subKey] = {});
        }
    }
}

export function setAutoBuyerTierLevel(key, value, override = false, type) {
    if (resourceData[type][key].upgrades.autoBuyer.normalProgression === true || override) {
        resourceData[type][key].upgrades.autoBuyer.currentTierLevel = value;
    }
}

export function getAutoBuyerTierLevel(key, type) {
    return resourceData[type][key].upgrades.autoBuyer.currentTierLevel;
}