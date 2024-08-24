import { app, BrowserWindow, ipcMain } from 'electron';
import path, { join } from 'path';
import { fileURLToPath } from 'url';
import os from 'os'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 770,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('dist/index.html');
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle('get-os-details', async() => {
    return os.type();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'Darwin') {
    app.quit();
  }
});
