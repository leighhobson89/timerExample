import{setLastSavedTimeStamp,getLastSavedTimeStamp,setSaveData,captureGameStatusForSaving,restoreGameStatus,getElements,getAutoSaveFrequency,getAutoSaveToggle,getSaveData,eNCrQueen}from"./constantsAndGlobalVars.js";import{startGame,offlineGains}from"./game.js";import{initializeApp}from"https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";import{getAnalytics}from"https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";import{getFirestore,doc,setDoc,getDoc}from"https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";import{showNotification}from"./ui.js";const firebaseConfig={apiKey:eNCrQueen(),authDomain:"cosmic-forge-1981.firebaseapp.com",projectId:"cosmic-forge-1981",storageBucket:"cosmic-forge-1981.firebasestorage.app",messagingSenderId:"155017224771",appId:"1:155017224771:web:c4cb2d9f468c0571b9aaf6",measurementId:"G-82DCH5GJ0P"},app=initializeApp(firebaseConfig),analytics=getAnalytics(app),db=getFirestore(app);let autoSaveTimer=null;export function initializeAutoSave(){autoSaveTimer&&clearTimeout(autoSaveTimer);const e=()=>{getAutoSaveToggle()&&(saveGame(),getSaveData()&&saveGameToCloud(getSaveData()),setSaveData(null)),autoSaveTimer=setTimeout(e,getAutoSaveFrequency())};autoSaveTimer=setTimeout(e,getAutoSaveFrequency())}export async function saveGameToCloud(e){try{const a=doc(db,"cosmicForgeSaves","guest");await setDoc(a,{saveData:e}),showNotification("Game saved to the cloud!","info");const t=(new Date).toISOString().split("T"),o=t[0].replace(/-/g,"_"),i=t[1].split(".")[0].replace(/:/g,"_"),r=doc(db,"cosmicForgeSaves",`${o}_${i}_BackupSave`);await setDoc(r,{saveData:e}),showNotification("Backup saved to the cloud!","info")}catch(e){showNotification("Error saving game to cloud!","error"),console.error("Error saving game to cloud:",e)}}export function saveGame(){const e=captureGameStatusForSaving();e.timeStamp=(new Date).toISOString();const a=JSON.stringify(e),t=LZString.compressToEncodedURIComponent(a),o=document.getElementById("exportSaveArea");o&&(setSaveData(t),o.value=t,o.readOnly=!0)}export function copySaveStringToClipBoard(){const e=document.getElementById("exportSaveArea");e.select(),e.setSelectionRange(0,99999);try{navigator.clipboard.writeText(e.value).then((()=>{showNotification("Data copied to clipboard!","info")})).catch((e=>{showNotification("Error copying data!","error"),console.log("Error copying data! "+e)})).finally((()=>{e.setSelectionRange(0,0)}))}catch(e){console.log("Error copying data! "+e)}}export async function loadGameFromCloud(){try{const e=doc(db,"cosmicForgeSaves","guest"),a=await getDoc(e);if(a.exists()){const e=a.data().saveData,t=LZString.decompressFromEncodedURIComponent(e),o=JSON.parse(t);await initialiseLoadedGame(o),showNotification("Game loaded successfully!","info")}else showNotification("No saved game data found.","warning")}catch(e){console.error("Error loading game from cloud:",e),showNotification("Error loading game data from the cloud.","error")}}export function loadGame(){return new Promise(((e,a)=>{const t=document.getElementById("importSaveArea");if(!t||!t.value.trim())return a("No valid save data found in the import area.");try{const o=t.value.trim();if(!validateSaveString(o))return showNotification("Invalid game data string. Please check and try again.","warning"),a("Invalid game data string");const i=LZString.decompressFromEncodedURIComponent(o);initialiseLoadedGame(JSON.parse(i)).then((()=>{startGame(),showNotification("Game loaded successfully!","info"),e()})).catch((e=>{console.error("Error initializing game:",e),showNotification("Error initializing game. Please make sure the data is correct.","error"),a(e)}))}catch(e){console.error("Error loading game:",e),showNotification("Error loading game. Please make sure the string contains valid game data.","error"),a(e)}}))}function validateSaveString(e){try{const a=LZString.decompressFromEncodedURIComponent(e);return JSON.parse(a),null!==a}catch{return!1}}async function initialiseLoadedGame(e){await restoreGameStatus(e)}