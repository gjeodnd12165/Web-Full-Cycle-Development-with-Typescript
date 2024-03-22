Youtube-demo/ 참조
### 회원 API 코드 틀
### 회원 가입 구현
### 회원 개별 조회, 회원 개별 삭제
라우터라는 것이 있다?  
url에 따라 메소드가 분리되도록하는 것
```js
app
  .route("url")
  .get((req, res) => {})
  .delete((req, res) => {})
```
체이닝이 가능한 것이 특이할만한 점