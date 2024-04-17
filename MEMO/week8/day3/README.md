## 2024-04-17
1. 컨벤션
2. `LAST_INSERT_ID()`
3. `SELECT MAX(...) FROM ...`
4. insertId
5. VALUES 대신 서브쿼리
6. Bulk Insert

### 느낀점
이전 트랜잭션에서 생성한 레코드의 정보를 가져오는 방법을 알아보았다. LAST_INSERT_ID()는 오류가 있다고 하고, insertId를 사용하는 것은 sql 중간에 nodejs로 넘어간다는 것이 깔끔하지 않다고 할까, 마음에 걸려서 내가 보기에도 SELECT MAX가 제일 나은 방법인것 같다.  
VALUES 대신 서브쿼리를 넣을 수 있다는 점은 가장 놀라웠다. 이러한 방법이 있다는 것은 잊지 못할 것 같다.  
5번을 알게 되고 나니 여러 열에 대한 Bulk Insert가 가능해도 별로 놀랍지 않았다.  
  