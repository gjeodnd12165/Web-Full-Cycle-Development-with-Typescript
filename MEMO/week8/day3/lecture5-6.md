### 주문하기 SQL 생각해보기
deliveries -> orders -> orderedBooks 순으로 조작해야한다.  

### deliveries 테이블 insert, insertId 가져다쓰기
`LAST_INSERT_ID()`는 시간 차에 따른 오류가 있다.  
```sql
SELECT MAX(id) FROM books
```
가 더 낫다.  

영상의 방식에서는 CRUD가 안지켜질 수도 있을 것 같다?  
각각의 sql 구문 사이에 transection이 들어오면 어떻게 되지?  

#### insertId
INSERT 시에 반환 값으로 insertId를 얻을 수 있다.  
