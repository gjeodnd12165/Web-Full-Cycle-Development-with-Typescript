### MySQL에서 데이터를 삭제하는 방법
1. DELETE  
```sql
DELETE FROM 테이블명 (WHERE 조건);
```
: 조건이 없으면 모든 행이 삭제된다.  
테이블은 남아있는다.  
2. DROP
```sql
DROP TABLE 테이블명;
```
: 테이블을 통째로 삭제한다.  
3. TRUNCATE
```sql
TRUNCATE 테이블명;
```
: 모든 행이 삭제된다.  
테이블은 남아있는다.  
