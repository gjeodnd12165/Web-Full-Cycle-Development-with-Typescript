### SQL 시간 범위 구하기 (DATE_ADD, SUB)
SQL에서 범위 조건으로 조회를 하려면 WHERE 뒤에 BETWEEN을 사용하면 된다.  
DATE 형식에 대한 덧셈, 뺄셈을 하기 위해서 DATE_ADD, DATE_SUB를 사용할 수 있다.  
```sql
SELECT * FROM books
WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW();
```
위와 같이, `BETWEEN 날짜1 AND 날짜2`로 범위 조건을 정할 수 있으며, `DATE_SUB(날짜, INTERVAL 길이 단위)`와 같은 양식으로 뺄 수 있다.
