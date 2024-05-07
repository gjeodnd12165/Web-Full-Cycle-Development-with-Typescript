import {
  insertUser,
  searchUser,
  searchUserByEmail,
  updateUserPassword
} from '../services/users.service';
import * as express from 'express';
import { StatusCodes } from 'http-status-codes';


export async function createUser (req: express.Request<{}, {}, {
  email: string,
  username: string,
  password: string
}, {}>, res: express.Response) {
  const { email, username, password } = req.body;

  const result = await insertUser(email, username, password);

  return res.status(StatusCodes.CREATED).end();
}

export async function issueUserToken(req: express.Request<{}, {}, {
  email: string,
  password: string
}, {}>, res: express.Response) {
  const { email, password } = req.body;

  const token: string = await searchUser(email, password);

  return res.status(StatusCodes.OK).cookie('BookShopUser', token, {
    httpOnly: true
  }).end();
}

export async function confirmUserPassword(req: express.Request<{}, {}, {
  email: string
}, {}>, res: express.Response) {
  const { email } = req.body;

  const returnedEmail = await searchUserByEmail(email);

  return res.status(StatusCodes.OK).json({
    email: returnedEmail
  });
}

export async function patchUserPassword(req: express.Request<{}, {}, {
  email: string,
  password: string
}, {}>, res: express.Response) {
  const { email, password } = req.body;

  const result = await updateUserPassword(email, password);

  return res.status(StatusCodes.OK).json(result);
}