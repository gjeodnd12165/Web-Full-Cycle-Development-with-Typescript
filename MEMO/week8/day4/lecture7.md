### async-await
Promise 객체를 좀 더 쉽고 편하게 사용하는 문법  
즉, 비동기 처리가 쉽다!

#### async 함수
```js
async function foo() {}
```
와 같이 만드는 함수  

async 함수는 무조건 Promise 객체를 반환한다.  
만약 반환값이 Promise가 아니라면, Promise.resolve()로 감싸준다.  
