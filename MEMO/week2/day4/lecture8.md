### server.js 모듈화
Node.js가 미리 만들어둔 모듈을 require로 사용한 것처럼, 우리가 만든 server.js도 모듈처럼 다른 javascript 파일에서 사용할 수 있다.
```js
const server = require("./server.js");
```
#### export
javascript의 함수 등은 자신의 파일 내에서만 구현이 되어있다. 따라서 외부에서 사용하기 위해서는 export를 해 주어야한다.
```js
exports.some_function_outside = some_function;
```