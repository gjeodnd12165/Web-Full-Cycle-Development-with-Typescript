const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

/**
 * decode jwt token and save it into req.token.  
 * if there's no authorization field, token will be null.
 * 
 * @throws {TypeError}              when token is null
 * @throws {jwt.JsonWebTokenError}  when token is not valid
 * @throws {jwt.TokenExpiredError}  when token has been expired
 */
function decodeToken(req, res, next) {
  let recievedToken = null;
  let decodedToken = null;

  if (req.header("Authorization")) {
    recievedToken = req.header("Authorization").replace("Bearer ", "");
    decodedToken = jwt.verify(recievedToken, process.env.ACCESS_TOKEN_KEY);
  }
  req.token = decodedToken;
  
  next();
}

module.exports = decodeToken;