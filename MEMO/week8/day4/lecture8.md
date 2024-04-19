### async의 두번째 기능, 그리고 await과의 만남
#### await
async 함수 안에서만 동작한다!  
#### async의 두번째 기능
Promise 객체가 일이 끝날 때까지 기다릴 수 있는 공간을 제공한다!
```js
async function foo() {
    const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 3000);
  });

  const result = await promise;
  console.log(result);
}
```
위와 같이, async 함수 내에서 await을 만나면 await 이 걸려있는 Promise가 일을 다 할때까지 기다려준다.
