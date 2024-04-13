const express = require('express');
const app = express();

// controllers
const serveIndex = (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
}

const serveAbout = (req, res, next) => {
    res.send('<h1>About</h1>');
}

const serveName = (req, res, next) => {
    const data = [{ name: 'ben' }, { name: 'zo' }, { name: 'carmen' }];
    res.send(data);
}

const serveHello = (req, res, next) => {
    res.send('hello');
}

app.get('/', serveIndex);
app.get('/about', serveAbout);
app.get('/api/name', serveName);
app.get('/api/hello', serveHello);


const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 