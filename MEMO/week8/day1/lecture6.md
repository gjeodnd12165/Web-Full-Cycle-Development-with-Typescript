### EXISTS
다음 나오는 서브 쿼리에 대한 결과가 존재하는 지 확인하는 구문이다.  
```sql
SELECT EXISTS (SELECT * FROM likes WHERE user_id=1 AND book_id=1)
```
서브쿼리의 결과 값에 레코드가 있다면 1을 반환하고 없으면 0을 반환한다.  
