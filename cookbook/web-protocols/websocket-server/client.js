const fs = require('fs');
const http = require('http');
const path = require('path');

const formPath = path.join(__dirname, 'public', 'index.html');

const form = fs.readFileSync(formPath);

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(form);
}).listen(8080)