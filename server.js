//Include the http module
var http = require('http');
//Create a webserver
http.createServer(function (req, res) {
    //Respond to any incoming http request
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\n');
}).listen(3000, 'localhost');
//Log that we started listening on localhost:1337
console.log('Server running at localhost:3000');