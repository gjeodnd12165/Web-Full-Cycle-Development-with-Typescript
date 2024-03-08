const server = require('./server.js');
const router = require('./router.js');
const requestHandler = require('./requestHandler.js');

server.start(router.route, requestHandler.handle);