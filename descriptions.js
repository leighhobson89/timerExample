import { getTimerRateRatio, getSaveName } from "./constantsAndGlobalVars.js";
import { getResourceDataObject } from "./resourceDataObject.js";

export let gameIntroHeader;
export let gameIntroText;
export let gameSaveNameCollect;
export let headerDescriptions;
export let techNotificationMessages;
export let optionDescriptions;

export function initialiseDescriptions() {
    gameIntroHeader = 'Welcome to the Cosmic Forge!';
    gameSaveNameCollect = `
        Welcome Pioneer! Please enter your code name!<br><br>
        <textarea 
            id="pioneerCodeName"  
            class="save-name save-name-height save-name-modal-width">${getSaveName()}</textarea><br><br>You can load a previous game by changing this name to a previous one.
    `;
    gameIntroText = 'You find yourself with advanced knowledge but on a world with almost no material!<br>Begin by gathering Hydrogen and mastering the art of fusion to create Helium, Carbon, and beyond.<br> Explore new technologies to unlock powerful compounds, and one by one recreate the materials to create<br>a craft to explore and discover the secrets of the interstellar medium!<br><br>With each click, fusion, and discovery, you edge closer to fulfilling your destiny!<br><br>Good Luck!';

    headerDescriptions = {
        'Resources': 'Here you can gain and sell resources. You can also upgrade your storage capacity and automate resource harvesting.  When you discover fusion, you will also handle that here.',
        'Compounds': 'Here you can create and sell compounds from constituent parts or with advanced machinery.',
        'Star Map': 'Here you can explore the galaxy and discover new stars and planets.',
        'Technology': 'In the Technology section, you can unlock new technologies to progress through the game, and also get upgrades to farm research points.',
        'Buildings': 'Here you can buy upgrades for making resource gathering more efficient and progress through the game.',
        tab6intro: '',
        tab7intro: '',
        'Settings': 'Change the game settings to your liking.',
        
        hydrogen: "The most basic element known to man, very cheap to produce and has a pretty low value, but anything can be created from it.",
        helium: "Lighter than air this one will make you float away!",
        carbon: "This is the first stable solid element, made from fused Helium",
        neon: "The first noble gas!  Very 'bright' of you to discover it!",
        oxygen: "A vital element for most, oxygen is highly reactive and essential for combustion and respiration.",
        sodium: "A soft, silvery metal",
        silicon: "The backbone of modern technology, it is a crucial component in electronics and solar panels.",
        iron: "A strong and versatile metal, iron is the foundation of construction and industry.",

        energy: "Any buildings beyond the first level require power to operate, you can manage that here, as well as energy storage.",
        'power plant': "These buildings provide the energy resource, and it is used by advanced buildings, without which they won't operate.",
        'advanced power plant': "These buildings provide higher amounts of energy for powering a lot of machinery.",
        'solar power plant': "Solar power plants provide renewable energy without using any resources.",
        research: "Here you can buy upgrades to generate research points for unlocking new technology.",
        'tech tree': "Here you can unlock new technologies to improve your game, provided you have enough research points!",

        diesel: "The first compound created by your hands, it is a useful early fuel.",
        glass: "This is reinforced specialist glass and is great for solar applications.",
        steel: "This is reinforced steel, highly durable and used in construction and manufacturing.",
        water: "Water is an essential resource which can be produced, or collected from rain in your reservoir.",

        'star map': "This is a map of the known galaxy",
        
        visual: "Change the visual settings of the game.",
        'saving / loading': "Save and Load your progress in the game.",
    };

    techNotificationMessages = {
        knowledgeSharing: 'Knowledge Sharing Researched\n\nYou can now open Science Clubs!',
        fusionTheory: 'Fusion Theory Researched\n\nUseful for future experiments!',
        hydrogenFusion: 'Hydrogen Fusion Researched\n\nYou can now fuse Hydrogen!',
        heliumFusion: 'Helium Fusion Researched\n\nYou can now fuse Helium!',
        carbonFusion: 'Carbon Fusion Researched\n\nYou can now fuse Carbon!',
        neonFusion: 'Neon Fusion Researched\n\nYou can now fuse Neon!',
        oxygenFusion: 'Oxygen Fusion Researched\n\nYou can now fuse Oxygen!',
        siliconFusion: 'Silicon Fusion Researched\n\nYou can now fuse Silicon!',
        nobleGasCollection: 'Noble Gas Collection Researched\n\nYou can now store Noble Gases when fused!',
        glassManufacture: 'Glass Manufacture Researched\n\nYou can now produce Glass compounds!',
        aggregateMixing: 'Aggregate Mixing Researched\n\nYou can now produce Concrete compounds!',
        neutronCapture: 'Neutron Capture Researched\n\nThis will now allow us to fuse Gold, modern day Alchemy, we will be rich beyond belief!',
        quantumComputing: 'Quantum Computing Researched\n\nMore advanced Machinery is now available!',
        scienceLaboratories: 'Science Laboratories Researched\n\nYou can now build Science Labs!',
        hydroCarbons: 'HydroCarbons Researched\n\nYou can gain access to Diesel Fuel once you have Compounds unlocked!',
        nanoTubeTechnology: 'Nano Tube Technology Researched\n\nWith this we can start to learn about how to fuse Carbon in the future!',
        stellarCartography: 'Stellar Cartography Researched\n\nYou unlocked The Star Map!',
        fusionEfficiencyI: 'Fusion Efficiency Stage I Researched\n\n20% Boost to Fusion returns!',
        fusionEfficiencyII: 'Fusion Efficiency Stage II Researched\n\nFurther 20% Boost to Fusion returns!',
        fusionEfficiencyIII: 'Fusion Efficiency Stage III Researched\n\n100% Fusion returns!',
        atmosphericTelescopes: 'Atmospheric Telescopes Researched\n\nYou can now get data from the local stellar neighborhood!',
        giganticTurbines: 'Gigantic Turbines Researched\n\nThis opens up new research in power generation!',
        steelFoundries: 'Steel Foundries Researched\n\nYou can now create Steel compounds!',
        advancedPowerGeneration: 'Advanced Power Generation Researched\n\nBuild Advanced Power Plants!',
        basicPowerGeneration: 'Basic Power Generation Researched\n\nYou can now build basic Power Stations!',
        solarPowerGeneration: 'Solar Power Generation Researched\n\nYou can now build Solar Panels to generate power!',
        compounds: 'Compounds Researched\n\nUnlocks the Compounds tab!',
        sodiumIonPowerStorage: 'Sodium Ion Power Storage Researched\n\nYou can build batteries to store energy!'
    };

    optionDescriptions = {
        hydrogenSellRow: {
            content1: "Here you can sell Hydrogen for cash",
            content2: "Here you can sell Hydrogen for cash or fuse it into Helium",
            updateAt: "hydrogenFusion"
        },
        hydrogenGainRow: {
            content1: "Manually gain one unit of Hydrogen.",
            content2: "",
            updateAt: ""
        },
        hydrogenIncreaseStorageRow: {
            content1: "Upgrade your Hydrogen storage capacity to hold more resources.",
            content2: "",
            updateAt: ""
        },
        heliumSellRow: {
            content1: "Here you can sell Helium for cash",
            content2: "Here you can sell Helium for cash or fuse it into Carbon",
            updateAt: "heliumFusion"
        },
        heliumGainRow: {
            content1: "Manually scrape one unit of Helium.",
            content2: "",
            updateAt: ""
        },
        heliumIncreaseStorageRow: {
            content1: "Increase your Helium storage capacity to store more Helium.",
            content2: "",
            updateAt: ""
        },
        carbonSellRow: {
            content1: "Here you can sell Carbon for cash",
            content2: "Here you can sell Carbon for cash or fuse it into Neon",
            updateAt: "carbonFusion"
        },
        carbonGainRow: {
            content1: "Extract Carbon manually from the environment.",
            content2: "",
            updateAt: ""
        },
        carbonIncreaseStorageRow: {
            content1: "Expand your Carbon storage.",
            content2: "",
            updateAt: ""
        },
        neonSellRow: {
            content1: "Here you can sell Neon for cash",
            content2: "Here you can sell Neon for cash or fuse it into Silver",
            updateAt: "neonFusion"
        },
        neonGainRow: {
            content1: "Manually gain one unit of Neon.",
            content2: "",
            updateAt: ""
        },
        neonIncreaseStorageRow: {
            content1: "Upgrade your Neon storage capacity to hold more resources.",
            content2: "",
            updateAt: ""
        },
        oxygenSellRow: {
            content1: "Here you can sell Oxygen for cash.",
            content2: "Here you can sell Oxygen for cash or fuse it into Silicon.",
            updateAt: "oxygenFusion"
        },
        oxygenGainRow: {
            content1: "Manually gain one unit of Oxygen.",
            content2: "",
            updateAt: ""
        },
        oxygenIncreaseStorageRow: {
            content1: "Upgrade your Oxygen storage capacity to hold more resources.",
            content2: "",
            updateAt: ""
        },
        sodiumSellRow: {
            content1: "Here you can sell Sodium for cash.",
            content2: "",
            updateAt: ""
        },
        sodiumGainRow: {
            content1: "Manually gain one unit of Sodium.",
            content2: "",
            updateAt: ""
        },
        sodiumIncreaseStorageRow: {
            content1: "Upgrade your Sodium storage capacity to hold more resources.",
            content2: "",
            updateAt: ""
        },
        siliconSellRow: {
            content1: "Here you can sell Silicon for cash.",
            content2: "Here you can sell Silicon for cash or fuse it into Iron.",
            updateAt: "siliconFusion"
        },
        siliconGainRow: {
            content1: "Manually gain one unit of Silicon.",
            content2: "",
            updateAt: ""
        },
        siliconIncreaseStorageRow: {
            content1: "Upgrade your Silicon storage capacity to hold more resources.",
            content2: "",
            updateAt: ""
        },
        ironSellRow: {
            content1: "Here you can sell Iron for cash.",
            content2: "",
            updateAt: ""
        },
        ironGainRow: {
            content1: "Manually gain one unit of Iron.",
            content2: "",
            updateAt: ""
        },
        ironIncreaseStorageRow: {
            content1: "Upgrade your Iron storage capacity to hold more resources.",
            content2: "",
            updateAt: ""
        },
        dieselCreateRow: {
            content1: "Here you can create Diesel from its constituent parts, provided you have them, and the power is ON.",
            content2: "",
            updateAt: ""
        },
        dieselSellRow: {
            content1: "Here you can sell Diesel for cash.",
            content2: "",
            updateAt: ""
        },
        dieselIncreaseStorageRow: {
            content1: "Upgrade your Diesel storage capacity to hold more resources.",
            content2: "",
            updateAt: ""
        },
        glassCreateRow: {
            content1: "Here you can create Glass from its constituent parts, provided you have them, and the power is ON.",
            content2: "",
            updateAt: ""
        },
        glassSellRow: {
            content1: "Here you can sell Glass for cash.",
            content2: "",
            updateAt: ""
        },
        glassIncreaseStorageRow: {
            content1: "Upgrade your Glass storage capacity to hold more resources.",
            content2: "",
            updateAt: ""
        },
        steelCreateRow: {
            content1: "Here you can create Steel from its constituent parts, provided you have them, and the power is ON.",
            content2: "",
            updateAt: ""
        },
        steelSellRow: {
            content1: "Here you can sell Steel for cash.",
            content2: "",
            updateAt: ""
        },
        steelIncreaseStorageRow: {
            content1: "Upgrade your Steel storage capacity to hold more resources.",
            content2: "",
            updateAt: ""
        },
        waterCreateRow: {
            content1: "Here you can manage the production of Water, provided you have the materials, and the power is ON.",
            content2: "",
            updateAt: ""
        },
        waterSellRow: {
            content1: "Here you can sell Water for cash.",
            content2: "",
            updateAt: ""
        },
        waterIncreaseStorageRow: {
            content1: "Upgrade your Water reservoir capacity to store more water.",
            content2: "",
            updateAt: ""
        },
        concreteCreateRow: {
            content1: "Here you can create Concrete, provided you have the materials, and the power is ON.",
            content2: "",
            updateAt: ""
        },
        concreteSellRow: {
            content1: "Here you can sell Concrete for cash.",
            content2: "",
            updateAt: ""
        },
        concreteIncreaseStorageRow: {
            content1: "Upgrade your Concrete storage capacity to hold more resources.",
            content2: "",
            updateAt: ""
        },
        hydrogenAutoBuyer1Row: {
            content1: `Add a Hydrogen Compressor to automate Hydrogen generation.`,
            content2: "",
            updateAt: ""
        },
        hydrogenAutoBuyer2Row: {
            content1: `Add an Advanced Hydrogen Compressor for enhanced automation - Power: ${Math.floor(getResourceDataObject('resources', ['hydrogen', 'upgrades', 'autoBuyer', 'tier2', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        hydrogenAutoBuyer3Row: {
            content1: `Install a Hydrogen Refinery to maximize efficiency in Hydrogen generation - Power: ${Math.floor(getResourceDataObject('resources', ['hydrogen', 'upgrades', 'autoBuyer', 'tier3', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        hydrogenAutoBuyer4Row: {
            content1: `Add a Quantum Hydrogen Synthesizer for cutting-edge Hydrogen production - Power: ${Math.floor(getResourceDataObject('resources', ['hydrogen', 'upgrades', 'autoBuyer', 'tier4', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        heliumAutoBuyer1Row: {
            content1: `Helium seems lighter than air - add an Atmosphere Scraper to automate Helium collection.`,
            content2: "",
            updateAt: ""
        },
        heliumAutoBuyer2Row: {
            content1: `Add an Advanced Helium Scraper for enhanced Helium collection - Power: ${Math.floor(getResourceDataObject('resources', ['helium', 'upgrades', 'autoBuyer', 'tier2', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        heliumAutoBuyer3Row: {
            content1: `Install a Helium Refinery to improve automation of Helium generation - Power: ${Math.floor(getResourceDataObject('resources', ['helium', 'upgrades', 'autoBuyer', 'tier3', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        heliumAutoBuyer4Row: {
            content1: `Add a Quantum Helium Synthesizer for cutting-edge Helium production - Power: ${Math.floor(getResourceDataObject('resources', ['helium', 'upgrades', 'autoBuyer', 'tier4', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        carbonAutoBuyer1Row: {
            content1: `Buy a miner to automate the collection of Carbon.`,
            content2: "",
            updateAt: ""
        },
        carbonAutoBuyer2Row: {
            content1: `Install an Advanced Carbon Miner for improved Carbon extraction - Power: ${Math.floor(getResourceDataObject('resources', ['carbon', 'upgrades', 'autoBuyer', 'tier2', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        carbonAutoBuyer3Row: {
            content1: `Add a Carbon Refinery to maximize automated Carbon collection - Power: ${Math.floor(getResourceDataObject('resources', ['carbon', 'upgrades', 'autoBuyer', 'tier3', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        carbonAutoBuyer4Row: {
            content1: `Add a Quantum Carbon Synthesizer for cutting-edge Carbon generation - Power: ${Math.floor(getResourceDataObject('resources', ['carbon', 'upgrades', 'autoBuyer', 'tier4', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        neonAutoBuyer1Row: {
            content1: `Add an Neon Extractor to automate Neon generation.`,
            content2: "",
            updateAt: ""
        },
        neonAutoBuyer2Row: {
            content1: `Add an Advanced Neon Extractor to improve automation of Neon collection - Power: ${Math.floor(getResourceDataObject('resources', ['neon', 'upgrades', 'autoBuyer', 'tier2', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        neonAutoBuyer3Row: {
            content1: `Install a Neon Refinery to enhance Neon collection - Power: ${Math.floor(getResourceDataObject('resources', ['neon', 'upgrades', 'autoBuyer', 'tier3', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        neonAutoBuyer4Row: {
            content1: `Add a Quantum Neon Synthesizer for cutting-edge Neon production - Power: ${Math.floor(getResourceDataObject('resources', ['neon', 'upgrades', 'autoBuyer', 'tier4', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        oxygenAutoBuyer1Row: {
            content1: `Add an Oxygen Extractor to automate Oxygen generation.`,
            content2: "",
            updateAt: ""
        },
        oxygenAutoBuyer2Row: {
            content1: `Install an Advanced Oxygen Extractor for improved Oxygen generation - Power: ${Math.floor(getResourceDataObject('resources', ['oxygen', 'upgrades', 'autoBuyer', 'tier2', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        oxygenAutoBuyer3Row: {
            content1: `Add an Oxygen Refinery to maximize automation of Oxygen production - Power: ${Math.floor(getResourceDataObject('resources', ['oxygen', 'upgrades', 'autoBuyer', 'tier3', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        oxygenAutoBuyer4Row: {
            content1: `Add a Quantum Oxygen Synthesizer for advanced Oxygen generation - Power: ${Math.floor(getResourceDataObject('resources', ['oxygen', 'upgrades', 'autoBuyer', 'tier4', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        sodiumAutoBuyer1Row: {
            content1: `Add a Sodium Extractor to automate Sodium generation.`,
            content2: "",
            updateAt: ""
        },
        sodiumAutoBuyer2Row: {
            content1: `Add an Advanced Sodium Extractor for better Sodium automation - Power: ${Math.floor(getResourceDataObject('resources', ['sodium', 'upgrades', 'autoBuyer', 'tier2', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        sodiumAutoBuyer3Row: {
            content1: `Install a Sodium Refinery to boost Sodium production - Power: ${Math.floor(getResourceDataObject('resources', ['sodium', 'upgrades', 'autoBuyer', 'tier3', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        sodiumAutoBuyer4Row: {
            content1: `Add a Quantum Sodium Synthesizer for advanced Sodium generation - Power: ${Math.floor(getResourceDataObject('resources', ['sodium', 'upgrades', 'autoBuyer', 'tier4', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        siliconAutoBuyer1Row: {
            content1: `Add a Silicon Extractor to automate Silicon generation.`,
            content2: "",
            updateAt: ""
        },
        siliconAutoBuyer2Row: {
            content1: `Add an Advanced Silicon Extractor for improved Silicon collection - Power: ${Math.floor(getResourceDataObject('resources', ['silicon', 'upgrades', 'autoBuyer', 'tier2', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        siliconAutoBuyer3Row: {
            content1: `Install a Silicon Refinery to maximize Silicon automation - Power: ${Math.floor(getResourceDataObject('resources', ['silicon', 'upgrades', 'autoBuyer', 'tier3', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        siliconAutoBuyer4Row: {
            content1: `Add a Quantum Silicon Synthesizer for cutting-edge Silicon production - Power: ${Math.floor(getResourceDataObject('resources', ['silicon', 'upgrades', 'autoBuyer', 'tier4', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        ironAutoBuyer1Row: {
            content1: `Add an Iron Extractor to automate Iron generation.`,
            content2: "",
            updateAt: ""
        },
        ironAutoBuyer2Row: {
            content1: `Add an Advanced Iron Extractor for enhanced Iron collection - Power: ${Math.floor(getResourceDataObject('resources', ['iron', 'upgrades', 'autoBuyer', 'tier2', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        ironAutoBuyer3Row: {
            content1: `Install an Iron Refinery to maximize Iron production automation - Power: ${Math.floor(getResourceDataObject('resources', ['iron', 'upgrades', 'autoBuyer', 'tier3', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        ironAutoBuyer4Row: {
            content1: `Add a Quantum Iron Synthesizer for advanced Iron generation - Power: ${Math.floor(getResourceDataObject('resources', ['iron', 'upgrades', 'autoBuyer', 'tier4', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        dieselAutoBuyer1Row: {
            content1: `Add an Extractor to collect oil and make Diesel.`,
            content2: "",
            updateAt: ""
        },
        dieselAutoBuyer2Row: {
            content1: `Add an Advanced Diesel Refinery for enhanced Diesel production - Power: ${Math.floor(getResourceDataObject('compounds', ['diesel', 'upgrades', 'autoBuyer', 'tier2', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        dieselAutoBuyer3Row: {
            content1: `Install a Diesel Synthesizer for improved Diesel automation - Power: ${Math.floor(getResourceDataObject('compounds', ['diesel', 'upgrades', 'autoBuyer', 'tier3', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        dieselAutoBuyer4Row: {
            content1: `Add a Quantum Diesel Synthesizer for cutting-edge Diesel generation - Power: ${Math.floor(getResourceDataObject('compounds', ['diesel', 'upgrades', 'autoBuyer', 'tier4', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        glassAutoBuyer1Row: {
            content1: `Add a Workshop Glass Fabricator to create glass.`,
            content2: "",
            updateAt: ""
        },
        glassAutoBuyer2Row: {
            content1: `Install an Advanced Glass Fabricator for better Glass production - Power: ${Math.floor(getResourceDataObject('compounds', ['glass', 'upgrades', 'autoBuyer', 'tier2', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        glassAutoBuyer3Row: {
            content1: `Add a Glass Refinery to enhance Glass automation - Power: ${Math.floor(getResourceDataObject('compounds', ['glass', 'upgrades', 'autoBuyer', 'tier3', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        glassAutoBuyer4Row: {
            content1: `Add a Quantum Glass Synthesizer for cutting-edge Glass production - Power: ${Math.floor(getResourceDataObject('compounds', ['glass', 'upgrades', 'autoBuyer', 'tier4', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        steelAutoBuyer1Row: {
            content1: `Add a Back Yard Steel Foundry to create steel.`,
            content2: "",
            updateAt: ""
        },
        steelAutoBuyer2Row: {
            content1: `Add an Advanced Steel Foundry for enhanced Steel production - Power: ${Math.floor(getResourceDataObject('compounds', ['steel', 'upgrades', 'autoBuyer', 'tier2', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        steelAutoBuyer3Row: {
            content1: `Install a Steel Refinery to improve Steel automation - Power: ${Math.floor(getResourceDataObject('compounds', ['steel', 'upgrades', 'autoBuyer', 'tier3', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        steelAutoBuyer4Row: {
            content1: `Add a Quantum Steel Synthesizer for advanced Steel generation - Power: ${Math.floor(getResourceDataObject('compounds', ['steel', 'upgrades', 'autoBuyer', 'tier4', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        waterAutoBuyer1Row: {
            content1: `Add a Water Mixer to facilitate water processing.`,
            content2: "",
            updateAt: ""
        },
        waterAutoBuyer2Row: {
            content1: `Add an Advanced Water Mixer for better Water production - Power: ${Math.floor(getResourceDataObject('compounds', ['water', 'upgrades', 'autoBuyer', 'tier2', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        waterAutoBuyer3Row: {
            content1: `Install a Water Refinery to maximize Water automation - Power: ${Math.floor(getResourceDataObject('compounds', ['water', 'upgrades', 'autoBuyer', 'tier3', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        waterAutoBuyer4Row: {
            content1: `Add a Quantum Water Synthesizer for advanced Water generation - Power: ${Math.floor(getResourceDataObject('compounds', ['water', 'upgrades', 'autoBuyer', 'tier4', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        concreteAutoBuyer1Row: {
            content1: `Add a Concrete Mixer to automate Concrete production.`,
            content2: "",
            updateAt: ""
        },
        concreteAutoBuyer2Row: {
            content1: `Install an Advanced Concrete Mixer for enhanced Concrete production - Power: ${Math.floor(getResourceDataObject('compounds', ['concrete', 'upgrades', 'autoBuyer', 'tier2', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        concreteAutoBuyer3Row: {
            content1: `Add a Concrete Refinery to maximize Concrete automation - Power: ${Math.floor(getResourceDataObject('compounds', ['concrete', 'upgrades', 'autoBuyer', 'tier3', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        concreteAutoBuyer4Row: {
            content1: `Add a Quantum Concrete Synthesizer for cutting-edge Concrete production - Power: ${Math.floor(getResourceDataObject('compounds', ['concrete', 'upgrades', 'autoBuyer', 'tier4', 'energyUse']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },             
        researchScienceKitRow: {
            content1: "Purchase a Science Kit to start generating Research points.",
            content2: "",
            updateAt: ""
        },
        researchScienceClubRow: {
            content1: "Open a Science Club to produce Research points more effectively.",
            content2: "",
            updateAt: ""
        },
        researchScienceLabRow: {
            content1: `Build a Science Lab to do large amounts of Research - Power: ${Math.floor(getResourceDataObject('research', ['upgrades', 'scienceLab', 'rate']) * getTimerRateRatio())}KW / s`,
            content2: "",
            updateAt: ""
        },
        techKnowledgeSharingRow: {
            content1: "Unlock Knowledge Sharing to advance research capabilities.",
            content2: "",
            updateAt: ""
        },
        techFusionTheoryRow: {
            content1: "Unlock Fusion Theory to pave the way for advanced fusion technologies.",
            content2: "",
            updateAt: ""
        },
        techHydrogenFusionRow: {
            content1: "Unlock Hydrogen Fusion to experiment with fusing Hydrogen atoms.",
            content2: "",
            updateAt: ""
        },
        techStellarCartographyRow: {
            content1: "Unlock Stellar Cartography to map the stars.",
            content2: "",
            updateAt: ""
        },
        techQuantumComputingRow: {
            content1: "Unlock Quantum Computing to enhance computational power and enable more advanced machinery.",
            content2: "",
            updateAt: ""
        },
        techHeliumFusionRow: {
            content1: "Unlock Helium Fusion to enable the fusion of Helium atoms.",
            content2: "",
            updateAt: ""
        },
        techHydroCarbonsRow: {
            content1: "Unlock HydroCarbons to produce early fuel for power generation.",
            content2: "",
            updateAt: ""
        },
        techNanoTubeTechnologyRow: {
            content1: "Unlock NanoTube Technology to learn the first step about the fusion of Carbon.",
            content2: "",
            updateAt: ""
        },
        techCarbonFusionRow: {
            content1: "Unlock Carbon Fusion to finalise knowledge about the fusion of Carbon atoms.",
            content2: "",
            updateAt: ""
        },
        techNeonFusionRow: {
            content1: "Unlock Neon Fusion to explore and harness fusion reactions of Neon.",
            content2: "",
            updateAt: ""
        },
        techOxygenFusionRow: {
            content1: "Unlock Oxygen Fusion to experiment with fusing Oxygen atoms.",
            content2: "",
            updateAt: ""
        },
        techSiliconFusionRow: {
            content1: "Unlock Silicon Fusion to experiment fusing Silicon.",
            content2: "",
            updateAt: ""
        },
        techNeutronCaptureRow: {
            content1: "Unlock Neutron Capture to collect fusion by-products.",
            content2: "",
            updateAt: ""
        },
        techGlassManufactureRow: {
            content1: "Unlock Glass Manufacture to produce advanced Glass compounds from Silicon and Oxygen.",
            content2: "",
            updateAt: ""
        },
        techAggregateMixingRow: {
            content1: "Unlock Aggregate Mixing to produce concrete compounds from Silicon, Sodium and Hydrogen.",
            content2: "",
            updateAt: ""
        },
        techNobleGasCollectionRow: {
            content1: "Unlock Noble Gas Collection to store rare noble gases.",
            content2: "",
            updateAt: ""
        },
        techFusionEfficiencyIRow: {
            content1: "Unlock Fusion Efficiency I to enhance fusion efficiency.",
            content2: "",
            updateAt: ""
        },
        techFusionEfficiencyIIRow: {
            content1: "Unlock Fusion Efficiency II to further enhance fusion efficiency.",
            content2: "",
            updateAt: ""
        },
        techFusionEfficiencyIIIRow: {
            content1: "Unlock Fusion Efficiency III to realise 100% efficient fusion.",
            content2: "",
            updateAt: ""
        },
        techAtmosphericTelescopesRow: {
            content1: "Unlock Atmospheric Telescopes to get data about the surrounding stellar neighborhood.",
            content2: "",
            updateAt: ""
        },
        techGiganticTurbinesRow: {
            content1: "Unlock Gigantic Turbines to allow the building of advanced power generators.",
            content2: "",
            updateAt: ""
        },
        techSteelFoundriesRow: {
            content1: "Unlock Steel Foundries to produce high strength steel alloys from Iron.",
            content2: "",
            updateAt: ""
        },
        techCompoundsRow: {
            content1: "Unlock Compounds to expand the materials you have access to.",
            content2: "",
            updateAt: ""
        },
        techAdvancedPowerGenerationRow: {
            content1: "Unlock Advanced Power Generation to boost energy production.",
            content2: "",
            updateAt: ""
        },
        techBasicPowerGenerationRow: {
            content1: "Unlock Basic Power Generation to start producing energy.",
            content2: "",
            updateAt: ""
        },
        techSolarPowerGenerationRow: {
            content1: "Unlock the ability to utilize the local star to harness clean, renewable energy.",
            content2: "",
            updateAt: ""
        },
        techScienceLaboratoriesRow: {
            content1: "Unlock Science Laboratories to build huge labs for large scale, dedicated research.",
            content2: "",
            updateAt: "" 
        },
        techSodiumIonPowerStorageRow: {
            content1: "Unlock the ability to build batteries to store energy that you generate.",
            content2: "",
            updateAt: "" 
        },
        energyPowerPlant1Row: {
            content1: "This is the first building available to produce energy.",
            content2: "",
            updateAt: ""
        },
        energyPowerPlant2Row: {
            content1: "This building produces clean, renewable energy without using resources, but its efficiency is weather dependant!",
            content2: "",
            updateAt: ""
        },
        energyPowerPlant3Row: {
            content1: "This building produces significantly more power than its earlier iteration, but consumes more resources.",
            content2: "",
            updateAt: ""
        },
        energyBattery1Row: {
            content1: "Store small amount of energy for use if power starts being used faster than it can be generated.",
            content2: "",
            updateAt: ""
        },
        energyBattery2Row: {
            content1: "Store larger amount of energy for use if power starts being used faster than it can be generated.",
            content2: "",
            updateAt: ""
        },
        energyBattery3Row: {
            content1: "Store a huge amount of energy for use if power starts being used faster than it can be generated.",
            content2: "",
            updateAt: ""
        },
        settingsCurrencySymbolRow: {
            content1: "Change the currency symbol displayed in the game.",
            content2: "",
            updateAt: ""
        },
        settingsNotationRow: {
            content1: "Select a notation format for displaying large numbers.",
            content2: "",
            updateAt: ""
        },
        settingsToggleNotificationsRow: {
            content1: "Enable or disable in-game notifications.",
            content2: "",
            updateAt: ""
        },
        settingsThemeRow: {
            content1: "Choose a visual theme to change the game’s appearance.",
            content2: "",
            updateAt: ""
        },
    };
}

export function getOptionDescription(key1) {
    return optionDescriptions[key1];
}

export function setOptionDescription(key1, value) {
    if (!optionDescriptions[key1]) {
        optionDescriptions[key1] = {};
    }
    Object.assign(optionDescriptions[key1], value);
}
export function getHeaderDescriptions(key) {
    return headerDescriptions[key];
}

export function setHeaderDescriptions(value) {
    headerDescriptions[key] = value;
}