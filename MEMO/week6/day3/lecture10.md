### .env
- 개념  
: 개발을 하다 포트넘버, 데이터베이스 계정, 암호키 등등 회부에 유출되면 안되는 중요한 환경 변수  

js에서는 dotenv 모듈로 사용할 수 있다
```js
require('dotenv').config();
// ...
const env = process.env.ENV_VARIABLE_NAME;
```
