### 좋아요 여부도 알려주겠어
```sql
SELECT *,
  EXISTS (SELECT * FROM likes WHERE user_id=? AND book_id=?) AS is_liked
FROM books
```
와 같이 EXISTS를 사용하는 컬럼을 추가할 수 있다.