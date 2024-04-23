const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes')

/**
 * Handles errors related to authorization
 */
function handleAuthError(err, req, res, next) {
  console.error(err);
  if (err instanceof jwt.JsonWebTokenError) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      "message": "적절하지 않은 토큰입니다"
    });
  }
  else if (err instanceof jwt.TokenExpiredError) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      "message": "토큰이 만료되었습니다"
    });
  }
  else {
    next(err);
  }
}

module.exports = {
  handleAuthError
};