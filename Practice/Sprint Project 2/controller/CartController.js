/**
 * @author 허대웅
 */

const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');
const db2json = require('../db2json');


const addCartItems = (req, res) => {
  const { bookId, quantity, userId } = req.body;
  
  const sql = `INSERT INTO cartItems (book_id, quantity, user_id) VALUES (?, ?, ?)`;
  const values = [bookId, quantity, userId];
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
  const { userId, selected } = req.body;

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
  const values = [userId];

  if (selected && !selected.length) {
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
  const { cartItemId } = req.params;

  const sql = `DELETE FROM cartItems WHERE id=?`;
  const values = [cartItemId];
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