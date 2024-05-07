import * as express from 'express';
const router = express.Router();
router.use(express.json());

import {
  createUser,
  issueUserToken,
  confirmUserPassword,
  patchUserPassword
} from '../controller/users.controller';

export default router
.post('/signup', createUser)
.post('/signin', issueUserToken)
.post('/reset', confirmUserPassword)
.patch('/reset', patchUserPassword)