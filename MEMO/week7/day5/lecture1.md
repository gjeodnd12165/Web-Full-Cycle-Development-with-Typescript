### books-categories 연관관계 설정
books의 category_id가 categories의 id를 foreign key로 가지도록 한다.  
#### MySQL의 AS
AS를 사용하면 SELECT 시에 표시될 컬럼의 이름을 바꿀 수 있다.
```sql
SELECT books.*, categories.`name` AS category_name FROM books LEFT
JOIN categories ON books.category_id = categories.id;
```
AS를 사용하면 `SELECT *`가 작동하지 않는데, 이 때는 `books.*`처럼 컬럼의 필드를 명시하면 된다.  
