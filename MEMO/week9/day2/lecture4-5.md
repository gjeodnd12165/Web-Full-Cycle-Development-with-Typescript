### 구매 API 회원 인증 추가
### 개별 도서 조회 좋아요 여부에 jwt 확인
userId를 사용했던 모든 곳에 `req.body` 대신 jwt 인증을 사용하기만 하면 된다.  

#### 인증 미들웨어 및 에러 핸들링 미들웨어
is_liked 를 로그인 상황에 따라 포함시키려고하니, 현재 상황에서는 로그인 여부에 따른 분기가 원활하지 않다는 것을 깨달았다.  
따라서 인증 및 에러 핸들링 미들웨어를 사용하여 처리를 이에 대한 처리를 쉽게 하고자 한다.  

```js
function decodeToken(req, res, next) {
  const recievedToken = req.header("Authorization").replace("Bearer ", "");
  const decodedToken = jwt.verify(recievedToken, process.env.ACCESS_TOKEN_KEY);
  req.token = decodedToken;
  
  next();
}
```
위와 같이, 인증 미들웨어는 기존 코드에서 next를 받는 것과 `req.token`에 복호화된 토큰을 저장한다는 것을 추가한 것이다.  

```js
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
```
위와 같이, 에러 미들웨어는 다른 미들웨어와는 다르게, 첫 매개변수로 err를 받는다.  

`next(err)`를 호출하면, 여기에서 처리할 수 없는 에러를 다음 에러 미들웨어로 바로 보낸다.  
이 미들웨어는 인증에 관련된 에러만 처리하므로, 이외의 에러는 다른 미들웨어에게 넘기도록 하고 있다.  
