const http = require('http');
const url = require('url');


const start = (route, handle) => {
  const onRequest = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    route(pathname, handle, res);
  }
  
  http.createServer(onRequest).listen(8888);  
}

exports.start = start;