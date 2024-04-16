### 장바구니에서 선택한 상품 목록 조회 3탄
sql의 ? 와일드 카드에 배열을 할당하면 한 번에 여러 값을 넣을 수 있다.
```js
sql += ' AND cartItems.id IN (?)'
values.push(selected);
```
