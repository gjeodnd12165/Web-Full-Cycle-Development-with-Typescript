const main = (res) => {
  console.log("This is main");
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Main page');
  res.end();
}

const login = (res) => {
  console.log("Log me in");

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Login Page');
  res.end();
}

let handle = {}; // key: value
handle['/'] = main;
handle['/login'] = login;

exports.handle = handle;