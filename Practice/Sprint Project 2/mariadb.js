// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  timezone: 'Asia/Seoul',
  database: 'BookShop',
  dateStrings: true,
});

module.exports = connection;