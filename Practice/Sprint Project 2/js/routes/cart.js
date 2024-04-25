const express = require('express');
const router = express.Router();
const {
  addCartItems,
  getCartItems,
  deleteCartItems
} = require('../controller/CartController');

router.use(express.json());

router
.post(
  '/', addCartItems
)
.get(
  '/', getCartItems
)
.delete(
  '/:cartItemId', deleteCartItems
)

module.exports = router;