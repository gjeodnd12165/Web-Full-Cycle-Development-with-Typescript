### count(), AS, 서브쿼리의 등장 2탄
#### 서브쿼리
쿼리 내부에 또 조건을 달아서 쿼리를 만들 수도 있는데, 이를 서브쿼리라고 한다.  
```sql
SELECT *, 
	(SELECT COUNT(*) FROM likes WHERE likes.book_id=books.id) AS likes 
    FROM BookShop.books;
```
다음과 같이 쿼리의 결과에 서브쿼리의 결과를 컬럼으로 추가할 수 있다.  
서브 쿼리를 사용할 때에는 테이블명을 명시해주는 것이 좋다.  
