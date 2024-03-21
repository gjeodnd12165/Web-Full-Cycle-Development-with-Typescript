### 자바스크립트 forEach
forEach에 대해 더 자세히 알아보자.  
#### foreach에서의 콜백함수
forEach에서 콜백함수는 객체나 배열에서 요소를 하나 꺼낸 다음, 각각의 요소에 대해 불린다.  
그 요소는 콜백함수 내에서 콜백 함수의 매개 변수로 사용할 수 있다.  
#### Array.forEach()
```js
arr.forEach((v, i, a) => {
  // v: 데이터
  // i: 인덱스
  // a: 객체 그 자체
});
```
#### Map.forEach()
```js
arr.forEach((v, k, m) => {
  // v: 값
  // k: 키
  // m: 객체 그 자체
});
```