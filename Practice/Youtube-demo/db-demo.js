// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  timezone: 'Asia/Seoul',
  database: 'Youtube',
  dateStrings: true,
});

// A simple SELECT query
connection.query(
  'SELECT * FROM `users`',
  function (err, results, fields) {
    results.forEach((result) => {
      const {id, email, name, created_at } = result;
      console.log(id, email, name, created_at);
    });
  }
);