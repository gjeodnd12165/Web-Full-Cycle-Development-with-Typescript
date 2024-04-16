/**
 * @author 허대웅
 */

const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');


const addCartItems = (req, res) => {
  const { book_id, quantity, user_id } = req.body;
  
  const sql = `INSERT INTO cartItems (book_id, quantity, user_id) VALUES (?, ?, ?)`;
  const values = [book_id, quantity, user_id];
  conn.query(
    sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    
    return res.status(StatusCodes.CREATED).json(results);
  });
}


/**
 * @author 허대웅
 * @param {Request} req 
 * @param {Response} res 
 */
const getCartItems = (req, res) => {
  const { user_id, selected } = req.body;

  let sql = `
  SELECT cartItems.id,
	  cartItems.book_id,
    books.title,
    books.summary,
    cartItems.quantity,
    books.price
  FROM cartItems LEFT
  JOIN books
  ON cartItems.book_id = books.id
  WHERE TRUE
  AND cartItems.user_id=? 
  `;
  const values = [user_id];

  if (selected) {
    sql += ' AND cartItems.id IN (?)'
    values.push(selected);
  }

  conn.query(
    sql, values, (err, results) => {
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

/**
 * @author 허대웅
 * @param {Request} req 
 * @param {Response} res 
 */
const deleteCartItems = (req, res) => {
  const { cartItemId: id } = req.params;

  const sql = `DELETE FROM cartItems WHERE id=?`;
  const values = [id];
  conn.query(
    sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    
    return res.status(StatusCodes.OK).json(results);
  });
}

module.exports = {
  addCartItems,
  getCartItems,
  deleteCartItems
}