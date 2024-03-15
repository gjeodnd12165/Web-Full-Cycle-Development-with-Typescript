### 코드 정리 및 params
#### params
주소에 따라 동적으로 데이터를 보낼 수는 없을까?

```javascript
app.get('/products/:num', (req, res) => {
  res.json({
    num: req.params.num
  });
});
```
위와 같이, 변수 앞에 `:`을 붙이면, req.params에 들어가게 된다.

`/products/123`과 같은 주소로 들어가도, `{"num":"123"}`을 반환해 주기 때문에, `app.get`의 개수를 줄일 수 있다.
