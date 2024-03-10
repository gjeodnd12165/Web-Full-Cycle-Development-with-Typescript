const server = require('./server.js');
const router = require('./router.js');
const requestHandler = require('./requestHandler.js');

const mariadb = require('./database/connect/mariadb.js');
mariadb.connect();

server.start(router.route, requestHandler.handle);