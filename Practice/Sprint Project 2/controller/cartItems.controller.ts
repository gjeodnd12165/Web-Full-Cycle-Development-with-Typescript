import {
  insertCartItem,
  searchCartItems,
  deleteCartItem
} from '../services/cartItems.service';
import * as express from 'express';
import { StatusCodes } from 'http-status-codes';


export async function createCartItem (req: express.Request<{}, {}, {
  bookId: string,
  quantity: string
}, {}>, res: express.Response) {
  const { bookId, quantity } = req.body;
  const userId = req.token.id;

  const result = await insertCartItem(bookId, quantity, userId);

  return res.status(StatusCodes.OK).json(result);
}

export async function getCartItems (req: express.Request<{}, {}, {
  cartItemIds: string[]
}, {}>, res: express.Response) {
  const { cartItemIds } = req.body;
  const userId = req.token.id;

  const result = await searchCartItems(cartItemIds, userId);

  return res.status(StatusCodes.OK).json(result);
}

// need different name
export async function deleteCartItemById (req: express.Request, res: express.Response) {
  const { cartItemId } = req.params;
  const userId = req.token.id;

  const result = await deleteCartItem(cartItemId, userId);

  return res.status(StatusCodes.OK).json(result);
}