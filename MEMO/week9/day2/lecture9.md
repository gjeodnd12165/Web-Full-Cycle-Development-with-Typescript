### 전체 도서 조회 pagination 추가
전체 도서 개수를 구해야해서, sql문이 두 개가 필요하게 되었으므로 promise를 사용했다.  
두 sql문이 의존적이지는 않기 때문에 필수적이지는 않지만, 이러는 편이 나아보였다.

이 경우에도 `found_rows()`를 사용할 수 있다.  

#### 
```sql
SELECT SQL_CALC_FOUND_ROWS * FROM BookShop.books LIMIT 3 OFFSET 3;
SELECT found_rows();
```
위와 같이 `SQL_CALC_FOUND_ROWS`와 `found_rows()`를 사용하면 `count(*)`를 사용하는 것보다 빠르게 개수를 구할 수 있다.  
