import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// ─── All Firebase Realtime Database URLs ───
const firebaseConfigs = {
    pakodhi:      { databaseURL: "https://pakodhi-penal-default-rtdb.firebaseio.com" },
    panelJack:    { databaseURL: "https://panel-jack-default-rtdb.firebaseio.com" },
    pihu:         { databaseURL: "https://pihu-ac2d6-default-rtdb.asia-southeast1.firebasedatabase.app" },
    pmAwash:      { databaseURL: "https://pm-awash94631-default-rtdb.firebaseio.com" },
    project3:     { databaseURL: "https://project3-21573-default-rtdb.firebaseio.com" },
    proffer:      { databaseURL: "https://proffercelawte-default-rtdb.firebaseio.com" },
    projectX:     { databaseURL: "https://project-x-50ab7-default-rtdb.firebaseio.com" },
    raju126bb:    { databaseURL: "https://raju-126bb-default-rtdb.firebaseio.com" },
    rajivBihar:   { databaseURL: "https://rajivbihar-e2161-default-rtdb.firebaseio.com" },
    rajcom:       { databaseURL: "https://rajcom-92cc6-default-rtdb.firebaseio.com" },
    rahulPanel:   { databaseURL: "https://rahul-panel-default-rtdb.firebaseio.com" },
    rajPanel3:    { databaseURL: "https://raj-panel-3e09a-default-rtdb.firebaseio.com" },
    ramKa:        { databaseURL: "https://ram-ka-4eba6-default-rtdb.firebaseio.com" },
    raju7f9f8:    { databaseURL: "https://raju-7f9f8-default-rtdb.firebaseio.com" },
    rajjuu:       { databaseURL: "https://rajjuu-23aed-default-rtdb.firebaseio.com" },
    ramesh:       { databaseURL: "https://ramesh-67a2b-default-rtdb.firebaseio.com" },
    rdkkk:        { databaseURL: "https://rdkkk-a6706-default-rtdb.firebaseio.com" },
    rtoChallan:   { databaseURL: "https://rto-challan-aryan-raj-fix-web-default-rtdb.firebaseio.com" },
    rkdm:         { databaseURL: "https://rkdm-2e65f-default-rtdb.firebaseio.com" },
    ruhr:         { databaseURL: "https://ruhr-4da8f-default-rtdb.firebaseio.com" }
};

export const databases = {};
export const dbLabels = {};

for (const [name, cfg] of Object.entries(firebaseConfigs)) {
    const app = initializeApp(cfg, name);   // unique app name per URL
    databases[name] = getDatabase(app);
    dbLabels[name] = name;
}