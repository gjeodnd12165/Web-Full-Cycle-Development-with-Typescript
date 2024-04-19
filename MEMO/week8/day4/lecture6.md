### Promise chaining
```js
new Promise((resolve, reject) => {

}).then(
  (result) => {
    const result2 = result + "something";
    return result2;
  },
  (error) => {

  }
).then(
  ...
)
```
Promise 뒤에 .then()을 바로 붙일 수 있으며, then() 뒤에도 then()을 계속 붙일 수 있다.  
다음 then()에 대한 result는 이전 then()에서 return으로 보내줄 수 있다.  
