const express = require('express');
const app = express();

// controllers
const serveIndex = (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
}

const serveAbout = (req, res, next) => {
    res.send('<h1>About</h1>');
}

const serveData = (req, res, next) => {
    const data = [{ name: 'ben' }, { name: 'zo' }, { name: 'carmen' }];
    res.send(data);
}