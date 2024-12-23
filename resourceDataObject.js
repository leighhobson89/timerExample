export const resourceData = {
    resources: {
        hydrogen: {
            nameResource: 'Hydrogen',
            screenName: 'hydrogen',
            saleValue: 0.012,
            salePreviewElement: 'sellHydrogenDescription',
            quantity: 0,
            rate: 0,
            storageCapacity: 100,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: true,
                    tier1: { nameUpgrade: 'Hydrogen Compressor', screen: 'hydrogen', place: 'hydrogenAutoBuyer1Row', price: 65, rate: 0.01, quantity: 0, setPrice: 'hydrogenAB1Price' },
                    tier2: { nameUpgrade: 'Advanced Hydrogen Compressor', screen: 'hydrogen', place: 'hydrogenAutoBuyer2Row', price: 500, rate: 25, quantity: 0, setPrice: 'hydrogenAB2Price' },
                    tier3: { nameUpgrade: 'Industrial Hydrogen Compressor', screen: 'hydrogen', place: 'hydrogenAutoBuyer3Row', price: 2500, rate: 125, quantity: 0, setPrice: 'hydrogenAB3Price' },
                    tier4: { nameUpgrade: 'Quantum Hydrogen Compressor', screen: 'hydrogen', place: 'hydrogenAutoBuyer4Row', price: 12500, rate: 625, quantity: 0, setPrice: 'hydrogenAB4Price' }
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
            storageCapacity: 100,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: true,
                    tier1: { nameUpgrade: 'Helium Extractor', screen: 'helium', place: 'heliumAutoBuyer1Row', price: 75, rate: 0.01, quantity: 0, setPrice: 'heliumAB1Price' },
                    tier2: { nameUpgrade: 'Advanced Helium Extractor', screen: 'helium', place: 'heliumAutoBuyer2Row', price: 575, rate: 25, quantity: 0, setPrice: 'heliumAB2Price' },
                    tier3: { nameUpgrade: 'Industrial Helium Extractor', screen: 'helium', place: 'heliumAutoBuyer3Row', price: 2875, rate: 125, quantity: 0, setPrice: 'heliumAB3Price' },
                    tier4: { nameUpgrade: 'Quantum Helium Extractor', screen: 'helium', place: 'heliumAutoBuyer4Row', price: 14375, rate: 625, quantity: 0, setPrice: 'heliumAB4Price' }
                }
            },
            revealedBy: "hydrogenFusion",
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
            storageCapacity: 100,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: true,
                    tier1: { nameUpgrade: 'Burner', screen: 'carbon', place: 'carbonAutoBuyer1Row', price: 55, rate: 0.01, quantity: 0, setPrice: 'carbonAB1Price' },
                    tier2: { nameUpgrade: 'Advanced Carbon Extractor', screen: 'carbon', place: 'carbonAutoBuyer2Row', price: 425, rate: 25, quantity: 0, setPrice: 'carbonAB2Price' },
                    tier3: { nameUpgrade: 'Industrial Carbon Extractor', screen: 'carbon', place: 'carbonAutoBuyer3Row', price: 2125, rate: 125, quantity: 0, setPrice: 'carbonAB3Price' },
                    tier4: { nameUpgrade: 'Quantum Carbon Extractor', screen: 'carbon', place: 'carbonAutoBuyer4Row', price: 10625, rate: 625, quantity: 0, setPrice: 'carbonAB4Price' }
                }
            },
            revealedBy: "heliumFusion",
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
            storageCapacity: 10000,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: false,
                    tier1: { nameUpgrade: 'Neon Extractor', screen: 'neon', place: 'neonAutoBuyer1Row', price: 100, rate: 0.02, quantity: 0, setPrice: 'neonAB1Price' },
                    tier2: { nameUpgrade: 'Advanced Neon Extractor', screen: 'neon', place: 'neonAutoBuyer2Row', price: 800, rate: 50, quantity: 0, setPrice: 'neonAB2Price' },
                    tier3: { nameUpgrade: 'Industrial Neon Extractor', screen: 'neon', place: 'neonAutoBuyer3Row', price: 4000, rate: 250, quantity: 0, setPrice: 'neonAB3Price' },
                    tier4: { nameUpgrade: 'Quantum Neon Extractor', screen: 'neon', place: 'neonAutoBuyer4Row', price: 20000, rate: 1250, quantity: 0, setPrice: 'neonAB4Price' }
                }
            },
            revealedBy: "carbonFusion",
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
            storageCapacity: 100,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: false,
                    tier1: { nameUpgrade: 'Oxygen Extractor', screen: 'oxygen', place: 'oxygenAutoBuyer1Row', price: 100, rate: 0.02, quantity: 0, setPrice: 'oxygenAB1Price' },
                    tier2: { nameUpgrade: 'Advanced Oxygen Extractor', screen: 'oxygen', place: 'oxygenAutoBuyer2Row', price: 800, rate: 50, quantity: 0, setPrice: 'oxygenAB2Price' },
                    tier3: { nameUpgrade: 'Industrial Oxygen Extractor', screen: 'oxygen', place: 'oxygenAutoBuyer3Row', price: 4000, rate: 250, quantity: 0, setPrice: 'oxygenAB3Price' },
                    tier4: { nameUpgrade: 'Quantum Oxygen Extractor', screen: 'oxygen', place: 'oxygenAutoBuyer4Row', price: 20000, rate: 1250, quantity: 0, setPrice: 'oxygenAB4Price' }
                }
            },
            revealedBy: "neonFusion",
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
            storageCapacity: 100,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: false,
                    tier1: { nameUpgrade: 'Silicon Extractor', screen: 'silicon', place: 'siliconAutoBuyer1Row', price: 100, rate: 0.02, quantity: 0, setPrice: 'siliconAB1Price' },
                    tier2: { nameUpgrade: 'Advanced Silicon Extractor', screen: 'silicon', place: 'siliconAutoBuyer2Row', price: 800, rate: 50, quantity: 0, setPrice: 'siliconAB2Price' },
                    tier3: { nameUpgrade: 'Industrial Silicon Extractor', screen: 'silicon', place: 'siliconAutoBuyer3Row', price: 4000, rate: 250, quantity: 0, setPrice: 'siliconAB3Price' },
                    tier4: { nameUpgrade: 'Quantum Silicon Extractor', screen: 'silicon', place: 'siliconAutoBuyer4Row', price: 20000, rate: 1250, quantity: 0, setPrice: 'siliconAB4Price' }
                }
            },
            revealedBy: "oxygenFusion",
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
            storageCapacity: 100,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: false,
                    tier1: { nameUpgrade: 'Iron Extractor', screen: 'iron', place: 'ironAutoBuyer1Row', price: 100, rate: 0.02, quantity: 0, setPrice: 'ironAB1Price' },
                    tier2: { nameUpgrade: 'Advanced Iron Extractor', screen: 'iron', place: 'ironAutoBuyer2Row', price: 800, rate: 50, quantity: 0, setPrice: 'ironAB2Price' },
                    tier3: { nameUpgrade: 'Industrial Iron Extractor', screen: 'iron', place: 'ironAutoBuyer3Row', price: 4000, rate: 250, quantity: 0, setPrice: 'ironAB3Price' },
                    tier4: { nameUpgrade: 'Quantum Iron Extractor', screen: 'iron', place: 'ironAutoBuyer4Row', price: 20000, rate: 1250, quantity: 0, setPrice: 'ironAB4Price' }
                }
            },
            revealedBy: "siliconFusion",
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
            storageCapacity: 100,
            upgrades: {
                autoBuyer: {
                    currentTierLevel: 1,
                    normalProgression: false,
                    tier1: { nameUpgrade: 'Sodium Extractor', screen: 'sodium', place: 'sodiumAutoBuyer1Row', price: 100, rate: 0.02, quantity: 0, setPrice: 'sodiumAB1Price' },
                    tier2: { nameUpgrade: 'Advanced Sodium Extractor', screen: 'sodium', place: 'sodiumAutoBuyer2Row', price: 800, rate: 50, quantity: 0, setPrice: 'sodiumAB2Price' },
                    tier3: { nameUpgrade: 'Industrial Sodium Extractor', screen: 'sodium', place: 'sodiumAutoBuyer3Row', price: 4000, rate: 250, quantity: 0, setPrice: 'sodiumAB3Price' },
                    tier4: { nameUpgrade: 'Quantum Sodium Extractor', screen: 'sodium', place: 'sodiumAutoBuyer4Row', price: 20000, rate: 1250, quantity: 0, setPrice: 'sodiumAB4Price' }
                }
            },
            revealedBy: "carbonFusion",
            canFuseTech: '',
            fuseTo1: '',
            fuseTo2: '',
            fuseToRatio1: 0.5,
            fuseToRatio2: 0
        }
    },
    research: {
        screenName: 'research',
        quantity: 250000,
        rate: 0,
        upgrades: {
            scienceKit: { requirementQty: 1, price: 5, rate: 0.003, quantity: 0, setPrice: 'scienceKitPrice' },
            scienceClub: { requirementQty: 1, price: 100, rate: 0.06, quantity: 0, setPrice: 'scienceClubPrice' },
        },
    },
    techs: {
        knowledgeSharing: { appearsAt: [0, null], price: 5, idForRenderPosition: 1 },
        fusionTheory: { appearsAt: [500, null], price: 750, idForRenderPosition: 2 },
        
        hydrogenFusion: { appearsAt: [750, 'fusionTheory'], price: 1500, idForRenderPosition: 3 },
        heliumFusion: { appearsAt: [2500, 'hydrogenFusion'], price: 3000, idForRenderPosition: 4 },
        carbonFusion: { appearsAt: [7500, 'nanoTubeTechnology'], price: 5000, idForRenderPosition: 5 },
        neonFusion: { appearsAt: [10000, 'nobleGasCollection'], price: 15000, idForRenderPosition: 6 }, ////////
        oxygenFusion: { appearsAt: [15000, 'neonFusion'], price: 20000, idForRenderPosition: 7 }, ////////
        siliconFusion: { appearsAt: [20000, 'oxygenFusion'], price: 30000, idForRenderPosition: 7 }, ////////
        
        nanoTubeTechnology: { appearsAt: [7500, 'heliumFusion'], price: 10000, idForRenderPosition: 50 }, //carbon autobuyerratex2
        stellarCartography: { appearsAt: [600, null], price: 4000, idForRenderPosition: 51 },
        quantumComputing: { appearsAt: [2000, null], price: 3000, idForRenderPosition: 52 },
        nobleGasCollection: { appearsAt: [7500, 'nanoTubeTechnology'], price: 10000, idForRenderPosition: 53 }, ////////
        neutronCapture: { appearsAt: [20000, 'siliconFusion'], price: 50000, idForRenderPosition: 60 }, ////////
        glassManufacture: { appearsAt: [15000, 'oxygenFusion'], price: 22000, idForRenderPosition: 70 }, ////////

        fusionEfficiencyI: { appearsAt: [1500, 'fusionTheory'], price: 2000, idForRenderPosition: 900 },
        fusionEfficiencyII: { appearsAt: [4000, 'fusionEfficiencyI'], price: 5000, idForRenderPosition: 901 },
        fusionEfficiencyIII: { appearsAt: [10000, 'fusionEfficiencyII'], price: 30000, idForRenderPosition: 903 },
    },
    currency: {
        cash: 100,
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

export function setAutoBuyerTierLevel(key, value, override = false) {
    if (resourceData.resources[key].upgrades.autoBuyer.normalProgression === true || override) {
        resourceData.resources[key].upgrades.autoBuyer.currentTierLevel = value;
    }
}

export function getAutoBuyerTierLevel(key) {
    return resourceData.resources[key].upgrades.autoBuyer.currentTierLevel;
}