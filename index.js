const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 9999;

let app = express();

app.get('/', function (req, res) {
   res.send('Chuyen sang route /file');
});

app.get('/file', function (req, res) {
    let filename = 'data.csv';
    let filePath = path.join(__dirname, '/files/', filename);
    let stat = fs.statSync(filePath);
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': stat.size
    });

    let readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

app.post('/file', function (req, res) {
    let filename = 'data.csv';
    let filePath = path.join(__dirname, '/files/', filename);
    let stat = fs.statSync(filePath);
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': stat.size
    });

    let readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

app.listen(PORT, function (err) {
    if (err) {
        console.log(err);
        return
    }

    console.log("Server started");
});