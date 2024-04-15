### 도서 목록 조회 페이징 구현하기 1
- 페이징: 몇개씩 보여줄까?  
    - ex. `SELECT * FROM books;` => 전체 도서 리스트 1000개  
    8개씩 필요한데...
```sql
SELECT * FROM books LIMIT 3 OFFSET 0
```
과 같이 `LIMIT`, `OFFSET`을 활용하여 얻을 데이터의 수를 조절할 수 있다.
- LIMIT: 출력할 행의 수
- OFFSET: 시작 지점
