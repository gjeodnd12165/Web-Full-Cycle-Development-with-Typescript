const express = require('express');
const router = express.Router();


router.use(express.json());

router
.get(
  '/', (req, res) => {
    const { categoryId, recentDays } = req.query;
    if (!categoryId && !recentDays) {
      res.json('전체 도서 조회');
    }
    else {
      res.json('카테고리 별 도서 목록 조회');
    }
  }
)
.get(
  '/:bookId', (req, res) => {
    res.json('개별 도서 조회');
  }
)

module.exports = router;