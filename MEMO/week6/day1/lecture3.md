### 오류 해결, select sql 쿼리 형식
#### socket hang up
가장 높은 원인은 서버가 죽음.  
#### select sql 쿼리 형식
서버 상에서 쿼리를 할 떄, 변수가 들어갈 부분을 ?로 놓고, 쿼리 다음에 변수를 줘서 템플릿 문자열 없이 쿼리에 변수를 넣을 수 있다.  
```js
conn.query(
    `SELECT * FROM users WHERE email = ?`, email,
    function (err, results, fields) {
      // callback
    }
  );
```
