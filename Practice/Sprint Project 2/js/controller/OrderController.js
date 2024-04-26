const conn = require('../../mariadb');
const { StatusCodes } = require('http-status-codes');


const order = async (req, res) => {
  // cart_item의 user_id가 현재 user_id와 같을거라고 믿는다. 수정 필요.
  const { cartItemIds, delivery } = req.body;

  const userId = req.token.id;
  
  let sql = `
  INSERT INTO deliveries(address, receiver, contact) VALUES (?, ?, ?);
  `;
  let values = [delivery.address, delivery.receiver, delivery.contact];
  let [results] = await conn.promise().execute(sql, values)
  const deliveryId = results.insertId;

  sql = `
  INSERT INTO orders (delivery_id, user_id) VALUES (?, ?);
  `;
  values = [deliveryId, userId];
  [results] = await conn.promise().execute(sql, values);
  const orderId = results.insertId;

  sql = `
  INSERT INTO orderedBooks (order_id, book_id, quantity)
  SELECT ?, 
    book_id, 
    quantity 
  FROM cartItems WHERE cartItems.id IN (?);
  `;
  values = [orderId, cartItemIds];
  [results] = await conn.promise().query(sql, values);

  sql = `
  DELETE FROM cartItems WHERE id IN (?);
  `;
  values = [cartItemIds];

  [results] = await conn.promise().query(sql, values);

  return res.status(StatusCodes.CREATED).json(results);
}

const getOrders = async (req, res) => {
  const userId = req.token.id;

  sql = `
  SELECT orderedBooks.order_id,
    orders.created_at,
    deliveries.address,
    deliveries.receiver,
    deliveries.contact,
    books.title,
    COUNT(*) AS total_types,
    SUM(books.price*orderedBooks.quantity) AS total_price,
    SUM(orderedBooks.quantity) AS total_quantity
  FROM orderedBooks LEFT
  JOIN orders ON orderedBooks.order_id = orders.id LEFT
  JOIN deliveries ON orders.delivery_id = deliveries.id LEFT
  JOIN books ON orderedBooks.book_id = books.id
  WHERE user_id = ?;   
  `;
  values = [userId];

  const [rows] = await conn.promise().query(sql, values);

  return res.status(StatusCodes.OK).json(rows);
}

const getOrderDetail = async (req, res) => {
  const { orderId } = req.params;

  const userId = req.token.id;

  sql = `
  SELECT orderedBooks.book_id,
    books.title,
    books.author,
    books.price,
    orderedBooks.quantity
  FROM orderedBooks LEFT
  JOIN orders ON orderedBooks.order_id = orders.id LEFT
  JOIN books ON orderedBooks.book_id = books.id
  WHERE user_id = ? AND order_id = ?;    
  `;
  values = [userId, orderId];

  const [results] = await conn.promise().query(sql, values);

  return res.status(StatusCodes.OK).json(results);
}

module.exports = {
  order,
  getOrders,
  getOrderDetail
}