let http = require('http');

const onRequest = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('Hello Node.js');
  res.end();
}

http.createServer(onRequest).listen(8888);