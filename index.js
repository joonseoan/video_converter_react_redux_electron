console.log('starting index.js');

const electron = require('electron');

const { app, BrowserWindow } = electron;


let mainWindow;

app.on ('ready', () => {

    mainWindow = new BrowserWindow({

        height: 600,
        width: 800,
        
        // It is a way for running an application 
        //      in the background 
        //      with the best performance
        // In this project, it app is the converting. 
        webPreferences: { backgroundThrottling: false }

    });

    mainWindow.loadURL(`file://${__dirname}/src/index.html`)

});

