var http = require('http');
var url = require('url');
var fs = require('fs');


const server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let fileName = "." + q.pathname;
    fs.readFile(fileName + ".html", (err, html) => {
        if (err) {
            res.writeHead(404, { 'content-type': 'text/html' });
            return res.end("404 Not Found")
        } else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(html);
            res.end();
        }
    })
})

server.listen(9000, () => {
    console.log('server run succesfully ...')
})