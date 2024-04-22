### JsonWebTokenError도 컨트롤해보자!
```js
switch (error.constructor) {
case jwt.TokenExpiredError:
return res.status(StatusCodes.UNAUTHORIZED).json({
"message": "로그인 세션이 만료되었습니다."
});
case jwt.JsonWebTokenError:
return res.status(StatusCodes.BAD_REQUEST).json({
"message": "토큰의 구성이 이상합니다."
});
default:
return res.status(StatusCodes.UNAUTHORIZED).end();
}
```
```js
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
```
switch 방법과 if else 방법 중 무엇이 나은가 찾아 봤는데, if else가 조금 더 나은 것 같다.  

`instanceof`가 `constructor`보다 유연성이 높아 좋다고 하는데, 그렇다면 switch를 사용할 수 없다.  
