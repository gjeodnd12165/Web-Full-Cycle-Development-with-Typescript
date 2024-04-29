import * as express from 'express';
const router = express.Router();
router.use(express.json());

import {
  createUser,
  issueUserToken,
  confirmUserPassword,
  patchUserPassword
} from '../controller/users.controller';

import { asyncWrapper } from '../middleware/asyncWrapper.middleware';

export default router
.post('/signup', asyncWrapper(createUser))
.post('/signin', asyncWrapper(issueUserToken))
.post('/reset', asyncWrapper(confirmUserPassword))
.patch('/reset', asyncWrapper(patchUserPassword))