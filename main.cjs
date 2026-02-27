const { app, BrowserWindow } = require("electron");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const { machineIdSync } = require("node-machine-id");
app.commandLine.appendSwitch("disable-gpu");
let mainWindow;

// 🔐 Generate license key from machine ID
function generateKey(machineId) {
  const secret = "PRISM_SECRET_KEY";
  return crypto
    .createHash("sha256")
    .update(machineId + secret)
    .digest("hex")
    .substring(0, 16)
    .toUpperCase();
}

// 📂 License file path
function getLicensePath() {
  return path.join(app.getPath("userData"), "license.json");
}

// ✅ Validate stored license
function isLicenseValid() {
  const licensePath = getLicensePath();

  if (!fs.existsSync(licensePath)) return false;

  const data = JSON.parse(fs.readFileSync(licensePath));
  const machineId = machineIdSync();
  const validKey = generateKey(machineId);

  return data.key === validKey;
}

// 🪟 Create main app window
function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
  });

  mainWindow.loadFile(path.join(__dirname, "dist/index.html"));
}

// 🪟 Create activation window
function createActivationWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, "activation.html"));
}

app.whenReady().then(() => {
  const machineId = machineIdSync();
const key = generateKey(machineId);

console.log("Machine ID:", machineId);
console.log("Generated License Key:", key);
  if (isLicenseValid()) {
    createMainWindow();
  } else {
    createActivationWindow();
  }
  
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
const { ipcMain } = require("electron");

ipcMain.on("activate-license", (event, enteredKey) => {
  const machineId = machineIdSync();
  const validKey = generateKey(machineId);

  console.log("Entered:", enteredKey);
  console.log("Expected:", validKey);

  if (enteredKey.trim() === validKey) {
    const licensePath = getLicensePath();
    fs.writeFileSync(licensePath, JSON.stringify({ key: enteredKey }));

    mainWindow.close();
    createMainWindow();
  } else {
    console.log("Invalid key");
  }
});