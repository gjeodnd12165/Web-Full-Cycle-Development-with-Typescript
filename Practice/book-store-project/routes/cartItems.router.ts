import * as express from 'express';
const router = express.Router();
router.use(express.json());

import {
  createCartItem,
  getCartItems,
  deleteCartItemById
} from '../controller/cartItems.controller';


export default router
.post('/', createCartItem)
.get('/', getCartItems)
.delete('/:cartItemId', deleteCartItemById)