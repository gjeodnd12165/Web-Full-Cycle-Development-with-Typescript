const express = require('express');
const router = express.Router();


router.use(express.json());

router
.post(
  '/', (req, res) => {
    res.json('장바구니 도서 추가');
  }
)
.get(
  '/', (req, res) => {
    res.json('장바구니 도서 조회');
  }
)
.delete(
  '/:cartItemId', (req, res) => {
    res.json('장바구니 도서 삭제');
  }
)
.get(
  '/preorder', (req, res) => {
    res.json('예상 상품 조회');
  }
)

module.exports = router;