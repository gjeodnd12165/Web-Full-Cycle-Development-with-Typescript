## 2024-04-18
1. Javascript의 비동기 발생 및 처리 방법
2. Promise / then
3. Promise chaining
4. async-await
5. async-await을 사용하여 함수 순서대로 실행시키기
6. order.js 비동기로 만들기

### 느낀점
자바스크립트의 비동기 처리 방식은 어렴춧이 알고 있었는데, 이번 기회에 확시히 알게 된 것 같아 좋았다.  
내가 원래 만든 `order()` 함수는 여러 sql을 한 번에 보내고, 각 sql 간의 의존성을 없애서 비동기 방식을 사용하지 않아도 괜찮지만,  
강의에서처럼 의존성을 주고 비동기식으로 하는 것이 더 나을지 모르겠다.  
Copliot에게 물어본 결과로는, 비동기식으로 만드는 것이 코드의 가독성을 높여준다고 하고, 개인적으로 생각해봤을 때 동기적인 전자의 방식에서 트랜잭션 사이에 변동이 있을 경우 그것을 처리하지 못할 것이라는 것이 마음에 걸린다.

#### Nodejs의 비동기 요약
**비동기**란, 여러 일을 처리할 때 순서대로 처리하지 않고, 동시에 병렬적으로 처리하는 것을 의미한다.  
만약 3개의 일이 1,2,3분씩 걸린다면 동기식으로 처리할 시에는 6분이 걸리겠지만 비동기식으로 처리하면 가장 길게 걸리는 일만큼인 3분만 걸릴 것이다.  

이렇게 되면 비동기식이 무조건 빠르고 좋지 않냐고 생각할 수도 있겠지만, 일들에게 의존성이 있을 경우 (이전 일의 결과값이 필요한 경우)가 있기 때문에, 동기식도 필요하다.  

Javascript에서는 비동기를 지원하기 위해 Promise / then 문법과 async / await 문법을 지원한다.  
형태는 다르지만 비동기라는 점에서 비슷하게 동작한다.  

---

Promise의 경우,
```js
const promise = new Promise((resolve, reject) => {});

promise
  .then((result) => {return "something"})
  .then((result) => {}, (error) => {})
  .catch((error) => {})
  .finally()
```
위와 같이 Promise 객체를 만들어서 사용하며, Promise의 메소드로 `then()`을 사용하여 동기적 처리를 구현한다.  

Promise의 콜백 함수의 매개변수인 resolve와 reject는 각각 처리 완료 및 거부를 나타내는데, 콜백 함수 내부에서 `resolve()`, `reject()`와 같은 식으로 사용하며, 매개변수로 `then()`이나 `catch()`의 콜백 함수의 매개변수인 result나 error에 들어갈 값을 보내줄 수 있다.  

또한 `then()`은 또다른 Promise를 반환하기 때문에, 여러 `then()`을 체이닝할 수 있으며 `then()`의 콜백 함수의 반환값이 다음 `then()`의 result 값이 된다.

---

async-await의 경우,
```js
async function foo() {
  await new Promise((resolve, reject) => {
    resolve();
  });
}
```
위와 같이 함수 앞에 붙여서 사용하며, async가 붙은 함수는 자동적으로 Promise.resolve()의 콜백함수가 된다.  

또한 await은 async 함수 내부에서만 작동하며, await이 붙은 함수가 값을 반환할 때까지 기다려주기 때문에 then()과 같은 동기적 처리를 구현하는 역할을 한다.  

then()과 다른점은 await이 붙은 함수 이후의 구간을 then()에 넣은 것처럼 작동한다는 것이다.  
