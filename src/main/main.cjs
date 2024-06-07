const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');
const ipc = ipcMain;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 450, 
    height: 660,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      devTools: true,
      preload: path.join(__dirname, "../preload/preload.cjs"),
    },
    frame: false,
    transparent: true, 
    titleBarStyle: "hidden",
  });

  win.loadURL("http://localhost:5173/");
  // win.loadFile(path.join(__dirname, "../../index.html"));

  ipc.on("minimizeApp", (event) => {
    win.minimize();
  });

  ipc.on("toggleMaximizeApp", (event) => {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  });

  ipc.on("closeApp", (event) => {
    win.close();
  });
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
