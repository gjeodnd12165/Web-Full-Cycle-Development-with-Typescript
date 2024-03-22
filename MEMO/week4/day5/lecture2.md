### 진짜 예외 처리
#### json array
json 객체에서 `[]`를 사용하면, 배열을 표현할 수 있다.
#### Array.find()
`Array.find(v => condition)` 과 같이 배열에서 바로 조건에 맞는 요소를 찾을 수 있다.
#### 예외 처리
예외를 터뜨린다 => http status code 를 실패에 해당하는 것으로 보낸다.
```js
res.status(http_code);
```
위와 같이 코드만 보낼 수 있다.
`.status()`가 Response 객체를 반환하기 때문에 `.json()`등으로 체이닝이 가능하다.