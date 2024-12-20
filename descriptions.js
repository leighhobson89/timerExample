export const headerDescriptions = {
    visual: "Change the visual settings of the game.",
    research: "Here you can buy upgrades to generate research points for unlocking new technology.",
    'tech tree': "Here you can unlock new technologies to improve your game, provided you have enough research points!",
    hydrogen: "The most basic element known to man, very cheap to produce and has a pretty low value, but anything can be created from it.",
    helium: "Lighter than air this one will make you float away!",
    carbon: "This is the first stable solid element, made from fused Helium",
    oxygen: "Finally a breathable element, this is massive for progression!",
    'star map': "This is a map of the known galaxy",
};

export const optionDescriptions = {
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
    hydrogenAutoBuyer1Row: {
        content1: "Add a Hydrogen Compressor to automate Hydrogen generation.",
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
    heliumAutoBuyer1Row: {
        content1: "Helium seems lighter than air, so fill balloons, and add an Atmosphere Scraper to automate Helium collection.",
        content2: "",
        updateAt: ""
    },
    carbonSellRow: {
        content1: "Here you can sell Carbon for cash",
        content2: "Here you can sell Carbon for cash or fuse it into Oxygen",
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
    carbonAutoBuyer1Row: {
        content1: "Buy a miner to automate the collection of Carbon.",
        content2: "",
        updateAt: ""
    },
    oxygenSellRow: {
        content1: "Here you can sell Oxygen for cash",
        content2: "Here you can sell Oxygen for cash or fuse it into Neon",
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
    oxygenAutoBuyer1Row: {
        content1: "Add an Oxygen Extractor to automate Oxygen generation.",
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
        content1: "Unlock Helium Fusion to enable the fusion of helium atoms.",
        content2: "",
        updateAt: ""
    },
    techNanoTubeTechnologyRow: {
        content1: "Unlock NanoTube Technology to manufacture new machines to extract resources more efficiently.",
        content2: "",
        updateAt: ""
    },
    techCarbonFusionRow: {
        content1: "Unlock Carbon Fusion to experiment with the fusion of carbon atoms.",
        content2: "",
        updateAt: ""
    },
    techFusionEfficiencyIRow: {
        content1: "Unlock Fusion Efficiency I to enhance fusion efficieny.",
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

