const jwt = require('jsonwebtoken');
const express = require('express');
const { StatusCodes } = require('http-status-codes')

/**
 * 
 * @param {Error} err 
 * @param {Request} req 
 * @param {Response} res 
 * @param {express.NextFunction} next 
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