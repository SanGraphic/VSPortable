const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 960,
    height: 540,
    webPreferences: {
      preload: path.join(__dirname, 'v_thin_preload.js'),
      nodeIntegration: false,
      contextIsolation: false // Required so our preload can modify the global window object
    }
  });

  win.loadFile(path.join(__dirname, '.webpack/renderer/index_thin.html'));
  win.webContents.openDevTools();
  win.webContents.on('console-message', (event, level, message, line, sourceId) => {
    console.log(`[BROWSER] ${message} (Line: ${line})`);
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
