/**
 * @author 허대웅
 */

const express = require('express');
const router = express.Router();
const { 
  addLike,
  removeLike
} = require('../controller/LikeController');

router.use(express.json());

router
.post('/:bookId', addLike)
.delete('/:bookId', removeLike)


module.exports = router;