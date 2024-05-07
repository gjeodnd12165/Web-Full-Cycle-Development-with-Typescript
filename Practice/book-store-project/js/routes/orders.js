const express = require('express');
const router = express.Router();
const {
  order,
  getOrders,
  getOrderDetail
} = require('../controller/OrderController');


router.use(express.json());

router
.post('/', order)
.get('/', getOrders)
.get('/:orderId', getOrderDetail)

module.exports = router;