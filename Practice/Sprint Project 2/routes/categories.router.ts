import * as express from 'express';
const router = express.Router();
router.use(express.json());

import {
  getCategories
} from '../controller/categories.controller';

export default router
.get('/', getCategories);