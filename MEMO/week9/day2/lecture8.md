### 로그인 상태여야 하는 기능들 : 장바구니 도서 삭제, 주문 상세 내역 조회
주문에서는 userId가 필요하도록 만들었지만, 장바구니 도서 삭제의 경우 userId 확인이 없어서 추가해주었다.  
SQL문에서도 userId 검사를 추가해, 혹시 모를 오류를 방지한다.  

```sql
DELETE FROM cartItems WHERE id=? AND user_id=?
```
