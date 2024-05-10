### 체크박스 기능 추가
setState의 set함수에는 값뿐만아니라, 콜백 함수도 들어갈 수 있고, 이를 이용하여 이전 값을 쉽게 불러올 수 있다.
```tsx
const [foo, setFoo] = setState(0);
setFoo((prevFoo) => {
  return prefFoo + 1;
})
```