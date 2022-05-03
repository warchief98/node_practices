const actions = require('./js/actions');
const http = require('http');
const fs = require('fs');
const path = require('path');


const Port = "9000";
const Host = null;

const server = http.createServer((req, res) => {


    fs.readFile("index.html", (err, html) => {
        if (err) throw err;
        else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(html);
            res.end();
        }
    });

    fs.readFile('./css/main-style.css', (err, css) => {
        if (err) throw err;
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(css);
        res.end();
    });

})

server.listen(Port, Host, (err) => {
    if (err) throw err;
    console.log('server is run on port: ' + Port)
})