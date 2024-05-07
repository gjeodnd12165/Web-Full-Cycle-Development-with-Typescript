const express = require('express');
const router = express.Router();
const { 
  signup, signin, requestReset, reset
} = require('../controller/UserController');

router.use(express.json());

router
.post(
  '/signup', signup
)
.post(
  '/signin', signin
)
.post(
  '/reset', requestReset
)
.put(
  '/reset', reset
)

module.exports = router;