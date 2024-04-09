const express = require('express');
const router = express.Router();


router.use(express.json());

router
.post(
  '/', (req, res) => {
    res.json('주문하기');
  }
)
.get(
  '/', (req, res) => {
    res.json('주문 내역 조회');
  }
)
.get(
  '/:orderId', (req, res) => {
    res.json('주문 상세 상품 조회');
  }
)

module.exports = router;