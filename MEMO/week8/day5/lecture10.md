### 주문 내역 조회
나는 주문의 총 가격과 총 수량을 따로 저장하고있지 않고 있기 때문에, 여기서 계산해서 보내준다.  
```sql
COUNT(*) AS total_types,
SUM(books.price*orderedBooks.quantity) AS total_price,
SUM(orderedBooks.quantity) AS total_quantity
```
위와 같이 총 가격과 수량을 계산했으며, 화면 명세를 다시 보니 책 종류의 수도 필요할 것 같아서 추가했다.  

또한 이렇게 COUNT나 SUM을 사용하니 책 제목이 상위 하나의 값만 보여주게 바뀌었다.  
화면 명세에서도 대표 책 제목만 필요하고 나머지는 `* 외 총 ...`으로 되어있어 상관없을 것 같다.  
