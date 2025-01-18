import{}from"./constantsAndGlobalVars.js";let localizationData={};async function fetchLocalization(){try{const t=await fetch("localization.json");localizationData=await t.json()}catch(t){console.error("Error loading localization:",t)}return localizationData}export async function initLocalization(t){const a=await fetchLocalization();setLocalization(a),setLanguage(getLanguage())}function localize(t,a){const e=getLocalization()[a][t];if(!e)return t;if(!e.includes("${"))return e;try{return interpolateTemplateLiteral(e)}catch(a){return console.error(`Error evaluating template literal in localized string for key '${t}':`,a),e}}function interpolateTemplateLiteral(template){return template.replace(/\${(.*?)}/g,((match,expression)=>{try{const value=eval(expression);return String(value)}catch(t){return console.error(`Error evaluating expression '${expression}' in template literal:`,t),match}}))}export{localize};