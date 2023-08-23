const http = require('http');
const routes = require('./route');

const { buffer } = require('stream/consumers');

const server = http.createServer(routes)

server.listen(5000);