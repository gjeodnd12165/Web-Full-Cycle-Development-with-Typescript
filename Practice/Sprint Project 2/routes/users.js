const express = require('express');
const router = express.Router();


router.use(express.json());

router
.post(
  '/signup', (req, res) => {
    res.json('회원가입');
  }
)
.post(
  '/signin', (req, res) => {
    res.json('로그인');
  }
)
.post(
  '/reset', (req, res) => {
    res.json('초기화요청');
  }
)
.put(
  '/reset', (req, res) => {
    res.json('초기화');
  }
)

module.exports = router;