const conn = require('../../mariadb');
const { StatusCodes } = require('http-status-codes');

const getCategories = (req, res) => {

  const sql = 'SELECT * FROM categories';
  conn.query(
    sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    if (!results.length) {
      return res.status(StatusCodes.NOT_FOUND).end();
    }
    
    return res.status(StatusCodes.OK).json(results);
  });
}

module.exports = {
  getCategories
}