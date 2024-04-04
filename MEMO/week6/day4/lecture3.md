### JWT 유효기간 설정
```js
const token = jwt.sign({
  email: loginUser.email,
  name: loginUser.name
}, process.env.ACCESS_TOKEN_KEY, {
  expiresIn: "5m",
  issuer: "HDW"
});
```
위와 같이, `jwt.sign()`의 세번째 매개변수로 옵션을 설정할 수 있다.  
`expiresIn`으로 만료 기한을 설정할 수 있다.  
> issuer로 발급자를 설정할 수도 있다.  