### count(), AS, 서브쿼리의 등장 1탄
count(*)로 SELECT 시에 조건을 만족하는 레코드의 수를 구할 수 있다.  
AS로 count(*)로 나타나는 컬럼의 이름을 바꿀 수도 있다.  
```sql
SELECT COUNT(*) AS `COUNT` FROM BookShop.likes WHERE book_id=1;
```
