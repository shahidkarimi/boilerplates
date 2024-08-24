const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {

    getOsDetails: async() => ipcRenderer.invoke('get-os-details')

});