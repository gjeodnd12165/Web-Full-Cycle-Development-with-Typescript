/**
 * @author 허대웅
 */

const express = require('express');
const router = express.Router();
const { 
  getCategories
} = require('../controller/CategoryController');

router.use(express.json());

router
.get('/', getCategories)


module.exports = router;