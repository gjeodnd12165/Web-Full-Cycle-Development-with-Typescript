const route = (pathname, handle, res, productId) => {
  console.log(`pathname: ${pathname}`);

  const handler = handle[pathname]
  if (typeof handler == 'function') {
    handler(res, productId);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('Not found');
    res.end();
  }
  
}

exports.route = route;