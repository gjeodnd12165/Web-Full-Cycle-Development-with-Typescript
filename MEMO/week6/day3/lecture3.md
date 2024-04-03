### users.js validate
validate에서 중복되는 부분이 있어서 리듀서에서 착안, 다음과 같이 함수로 만들어 봤다.  
```js
const bodyValidation = (field) => {
  switch (field) {
    case 'email':
      return body('email').notEmpty().isEmail().withMessage('이메일 확인 필요');
    case 'password':
      return body('password').notEmpty().isString().withMessage('비밀번호 확인 필요');
    case 'name':
      return body('name').notEmpty().isString().withMessage('이름 확인 필요');
    case 'contact':
      return body('name').notEmpty().isString().withMessage('전화번호 확인 필요');
    default:
      throw new Error(`There's no appropriate condition in bodyValidation`);
  }
}
```
