const { app, BrowserWindow } = require('electron')

console.log(`Hello from Electron 👋`);


const createWindows = () => {

    new BrowserWindow({
        width: 800,
        height: 600
    }).loadFile('index.html');
}

app.whenReady().then(() => {
    createWindows();

    // app.on('activate', () => {
    //     if (BrowserWindow.getAllWindows().length === 0) createWindow()
    // })
});


app.on('window-all-closed', () => {
    // darwin if the process in mac os
    if (process.platform !== 'darwin') {
        app.quit();
    }
});