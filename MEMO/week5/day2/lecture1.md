### router
- Server: Request를 받는다
- Router: Request의 URL에 따라 루트(route)를 정해준다 -> 어디로 갈지 길만 정해준다!  
#### Node.js에서의 라우팅이란?
Request가 날아왔을 때, 원하는 경로에 따라 적절한 방향으로 경로를 안내해주는 것
#### 라우팅 예시
```js
const router = express.Router();

module.exports = router;
```
각 라우터에서 다음과 같이 선언하고, `router`를 `app` 대신 사용한다. `module.exports`를 사용하여 외부에서 사용할 수 있다.
```js
const userRouter = require('./routes/user-demo');
app.use('/', userRouter);
```
app.js와 같은 상위 파일에서 모듈을 불러오고, `app.use()`와 같이 미들웨어로써 사용할 수 있다.
