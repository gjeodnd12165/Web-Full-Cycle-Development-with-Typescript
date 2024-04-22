const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { StatusCodes } = require('http-status-codes');
dotenv.config();

function getDecodedToken(req, res) {
  try {
    const recievedToken = req.header("Authorization").replace("Bearer ", "");
    const decodedToken = jwt.verify(recievedToken, process.env.ACCESS_TOKEN_KEY);
  
    return decodedToken;
  } catch (error) {
    console.error(error);
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        "message": "로그인 세션이 만료되었습니다."
      });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        "message": "토큰의 구성이 이상합니다."
      });
    }
    else {
      return res.status(StatusCodes.UNAUTHORIZED).end();
    }
  }
}

module.exports = getDecodedToken;