### userId validation
#### body validator
```js
const { body } = require('express-validator');

.post(
  body('userId').notEmpty().isInt().withMessage('userId Validation Error Occured'), 
  (req, res) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
      console.log(err.array());
    }
    // rest of the code
  }
)
```
위와 같이 메소드의 첫 번째 매개변수로 validator를 넣어서 적용한다. validator는 팩토리 패턴으로 다양한 검사를 동시에 적용할 수 있으며, 에러를 간단히 얻을 수 있다.  
