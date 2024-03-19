### express + 객체
json 객체에 key-value를 추가하려면,
```js
let json = {
  productName: "Notebook",
  price: 2000000
};
json.id = 1;
```
위와 같이 존재하지 않는 key에 value를 추가해주면 된다.