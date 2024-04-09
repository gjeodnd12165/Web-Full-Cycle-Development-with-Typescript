const express = require('express');
const router = express.Router();


router.use(express.json());

router
.post(
  '/:bookId', (req, res) => {
    res.json('좋아요 추가');
  }
)
.delete(
  '/:bookId', (req, res) => {
    res.json('좋아요 삭제');
  }
)

module.exports = router;