### 옥의 티 잡아내기 3 : 내 장바구니 조회
나의 경우는 sql을 동적으로 추가하여 처음부터 `selected`가 없어도 동작하도록 했다.  
```js
if (selected && !selected.length) {
  sql += ' AND cartItems.id IN (?)'
  values.push(selected);
}
```