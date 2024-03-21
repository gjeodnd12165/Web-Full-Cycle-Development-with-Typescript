const fs = require('fs');
const main_view = fs.readFileSync('./main.html', 'utf-8');

const mariadb = require('./database/connect/mariadb.js');

const main = (res) => {
  console.log("This is main");

  // mariadb.query('SELECT * FROM product', (err, rows) => {
  //   console.log(rows);
  // });
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(main_view);
  res.end();
}

const style = (res) => {
  fs.readFile('./style.css', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(data);
    res.end();
  });
}

const redRacket = (res) => {
  fs.readFile('./img/redRacket.png', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}

const blueRacket = (res) => {
  fs.readFile('./img/blueRacket.png', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}

const blackRacket = (res) => {
  fs.readFile('./img/blackRacket.png', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}

const order = (res, productId) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  mariadb.query(`
  INSERT INTO orderlist 
  VALUES (${productId}, '${new Date().toLocaleDateString()}');
  `, (err, rows) => {
    if(err) {
      console.log(err);
      res.writeHead(500);
      res.write('500 error occured');
    } else {
      res.write('ordered');
    }
  });

  res.end();
}

const orderlist = (res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let orderlist = fs.readFileSync('./orderlist.html').toString();
  mariadb.query(`
  SELECT * 
  FROM orderlist
  `, (err, rows) => {
    fs.readFile('./orderlist.html', 'utf-8', (err, data) => {
      let tableRows = '';
      rows.forEach(row => {
        tableRows += `
        <tr>
          <td>${row.productId}</td>
          <td>${row.date}</td>
        </tr>
        `;
      });
      orderlist = orderlist.replace('<!--TABLE_ROWS-->', tableRows);
      res.write(orderlist);
      res.end();
    });
  });
}


let handle = {}; // key: value
/* page url */
handle['/'] = main;
handle['/order'] = order;
handle['/orderlist'] = orderlist;
/* external file url */
handle['/style.css'] = style;
handle['/img/redRacket.png'] = redRacket;
handle['/img/blueRacket.png'] = blueRacket;
handle['/img/blackRacket.png'] = blackRacket;


exports.handle = handle;