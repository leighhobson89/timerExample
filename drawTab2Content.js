import { getTimerRateRatio, deferredActions, getCanAffordDeferred, setCanAffordDeferred, getCurrencySymbol } from './constantsAndGlobalVars.js';
import { gain, startUpdateAutoBuyerTimersAndRates } from './game.js';
import { getResourceDataObject } from './resourceDataObject.js';
import { createOptionRow, createButton } from './ui.js';

export function drawTab2Content(heading, optionContentElement) {
    if (heading === 'Power Plant') {
        const powerPlant1Row = createOptionRow(
            'energyPowerPlant1Row',
            null,
            'Power Plant:',
            createButton(`Add ${getResourceDataObject('buildings', ['energy', 'powerPlant1', 'rate']) * getTimerRateRatio()} kw /s`, ['option-button', 'red-disabled-text', 'resource-cost-sell-check'], () => {
                gain(1, 'powerPlant1Quantity', 'powerPlant1', false, null, 'building'),
                    deferredActions.push(() => {
                        if (getCanAffordDeferred()) {
                            startUpdateAutoBuyerTimersAndRates('powerPlant1');
                        }
                        setCanAffordDeferred(null);
                    });
            }, 'upgradeCheck', '', 'building', 'powerPlant1', 'cash', false, null),
            null,
            null,
            null,
            null,
            `${getCurrencySymbol() + getResourceDataObject('buildings', ['energy', 'powerPlant1', 'price'])}`,
            '',
            'upgradeCheck',
            'building',
            'powerPlant1',
            'cash',
            null,
            false,
            null
        );
        optionContentElement.appendChild(powerPlant1Row);
    }

    else if (heading === 'Advanced Power Plant') {  
        const powerPlant2Row = createOptionRow(
            'energyPowerPlant2Row',
            null,
            'Advanced Power Plant:',
            createButton(`Add ${getResourceDataObject('buildings', ['energy', 'powerPlant2', 'rate']) * getTimerRateRatio()} kw /s`, ['option-button', 'red-disabled-text', 'resource-cost-sell-check'], () => {
                gain(1, 'powerPlant2Quantity', 'powerPlant2', false, null, 'building'),
                    deferredActions.push(() => {
                        if (getCanAffordDeferred()) {
                            startUpdateAutoBuyerTimersAndRates('powerPlant2');
                        }
                        setCanAffordDeferred(null);
                    });
            }, 'upgradeCheck', '', 'building', 'powerPlant2', 'cash', false, null),
            null,
            null,
            null,
            null,
            `${getCurrencySymbol() + getResourceDataObject('buildings', ['energy', 'powerPlant2', 'price'])}`,
            '',
            'upgradeCheck',
            'building',
            'powerPlant2',
            'cash',
            null,
            false,
            null
        );
        optionContentElement.appendChild(powerPlant2Row);
    }
}
