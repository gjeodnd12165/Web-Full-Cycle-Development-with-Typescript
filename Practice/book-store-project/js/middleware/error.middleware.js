const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes')

function logError(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

/**
 * Handles errors related to authorization
 */
function handleAuthError(err, req, res, next) {
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

function handleDatabaseError(err, req, res, next) {
  console.log(this);
  next(err);
}


module.exports = {
  logError,
  handleAuthError,
  handleDatabaseError
};