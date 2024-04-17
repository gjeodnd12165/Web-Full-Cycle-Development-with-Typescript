### orders insert
### orderedBooks insert
```sql
INSERT INTO orderedBooks (order_id, book_id, quantity)
SELECT 1, book_id, quantity FROM cartItems WHERE cartItems.id=4
```
위와 같이, INSERT 할 때에 VALUES 부분에 SELECT 서브쿼리를 넣어도 작동한다.  
#### Bulk Insert
현재 내가 만든 DB 구조에서는 사용하지 않았지만, INSERT 시에 한 번에 여러 개의 행, 열을 넣을 수 있다.  
sql의 ? 와일드 카드에 이중 배열을 할당하면 알아서 여러 개의 값을 넣어준다.  
