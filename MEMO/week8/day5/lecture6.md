### cartItemId Delete SQL 생각하기
주문을 완전히 생성하고 난 뒤에는 장바구니에서 아이템을 삭제해야한다.  
```sql
DELETE FROM cartItems WHERE id IN (?)
```
위와 같은 sql string을 바탕으로, ? 와일드 카드에 주문 시 받아온 cart_item_ids 배열을 넣어야겠다.  
