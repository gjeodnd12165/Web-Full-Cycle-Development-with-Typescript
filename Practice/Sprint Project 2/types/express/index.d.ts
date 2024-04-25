import { DecodedToken } from 'token'

declare module 'express' {
  interface Request {
    token?: DecodedToken;
  }
}