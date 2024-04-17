/**
 * @author 허대웅
 */

const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

const order = (req, res) => {
  // cart_item의 user_id가 현재 user_id와 같을거라고 믿는다. 수정 필요.
  const { cart_item_ids, delivery, user_id } = req.body;
  
  let sql = `
  INSERT INTO deliveries(address, receiver, contact) VALUES (?, ?, ?);
  INSERT INTO orders (delivery_id, user_id) SELECT MAX(id), ? FROM deliveries;
  INSERT INTO orderedBooks (order_id, book_id, quantity)
  SELECT (SELECT MAX(id) FROM orders), 
    book_id, 
    quantity 
  FROM cartItems WHERE cartItems.id IN (?);
  `;
  let values = [
    delivery.address, delivery.receiver, delivery.contact, 
    user_id,
    cart_item_ids
  ];

  conn.query(
    sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    return res.status(StatusCodes.CREATED).json(results);
  });
}

const getOrders = (req, res) => {
  res.json('주문 내역 조회');
}

const getOrderDetail = (req, res) => {
  res.json('주문 상세 상품 조회');
}

module.exports = {
  order,
  getOrders,
  getOrderDetail
}