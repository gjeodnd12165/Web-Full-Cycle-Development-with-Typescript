const http = require('http');
const url = require('url');


const start = (route, handle) => {
  const onRequest = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    const queryData = url.parse(req.url, true).query;

    route(pathname, handle, res, queryData.productId);
  }
  
  http.createServer(onRequest).listen(8888);  
}

exports.start = start;