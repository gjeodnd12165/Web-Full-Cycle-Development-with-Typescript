### query 순서대로 실행하기
await을 가장 바깥 필드에서 사용하고 싶을때는
```js
const foo = async () => {
  return await bar();
};
foo();
```
위와 같이 하면 사용할 수 있다.