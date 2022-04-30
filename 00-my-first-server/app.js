var http = require('http');

const fs = require('fs');

const port = '8000'

fs.readFile('index.html', (err, html) => {
    if (err) throw err;
    else {
        //create a server object:
        const server = http.createServer(function(req, res) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(req.url); //write a response to the client
            res.write(html);
            res.end(); //end the response
        })

        server.listen(port, () => {
            console.log('server is available on Port: ' + port)
        })
    }
})