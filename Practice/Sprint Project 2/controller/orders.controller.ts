import {
  insertOrder,
  searchOrders,
  searchOrder
} from '../services/orders.service';
import * as express from 'express';
import { StatusCodes } from 'http-status-codes';


export async function createOrder(
  req: express.Request<{}, {}, {
    cartItemIds: string[],
    delivery: {
      address: string,
      receiver: string,
      contact: string
    }
  }, {}>, res: express.Response
) {
  const { cartItemIds, delivery } = req.body;
  const userId = req.token.id;

  const result = await insertOrder(cartItemIds, delivery, userId);

  return res.status(StatusCodes.OK).json(result);
}

export async function getOrders(req: express.Request, res: express.Response) {
  const userId = req.token.id;

  const result = await searchOrders(userId);

  return res.status(StatusCodes.OK).json(result);
}

export async function getOrder(req: express.Request, res: express.Response) {
  const { orderId } = req.params;
  const userId = req.token.id;

  const result = await searchOrder(orderId, userId);

  return res.status(StatusCodes.OK).json(result);
}