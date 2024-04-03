### JWT 구현
#### 토큰 발행
```js
const token = jwt.sign({
  foo: "bar"
}, secretKey);
// sync
```
명시적으로 암호화 방법을 정할 수도 있다
#### 토큰 인증
```js
jwt.verify(token, secretKey,
  (err, decoded) => {
    if (err) {
      console.log(err);
    }
    console.log(decoded);
  }
);
// async
```
콜백의 두번째 인수로 복호화된 payload가 들어간다

> iat: issued at  
토큰이 발행된 시간을 의미한다