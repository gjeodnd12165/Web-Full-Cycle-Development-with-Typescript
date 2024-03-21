### 자바스크립트 map()
map()에 대해 알아보자
#### map의 기능
forEach는 return 값을 가질 수 없는 반면, map은 return 값을 가져서 각각의 요소에 대해 같은 계산을 할 수 있다. 예를 들면,
```js
const arr = [1, 2, 3, 4, 5];;
const mapped = arr.map((v, i, a) => {
  return v * v;
});
// console.log(mapped)
// => [1, 4, 9, 16, 25]
```
와 같이 사용할 수 있다.