import * as express from 'express';
const router = express.Router();
router.use(express.json());

import {
  createOrder,
  getOrders,
  getOrder
} from '../controller/orders.controller';

export default router
.post('/', createOrder)
.get('/', getOrders)
.get('/:orderId', getOrder)