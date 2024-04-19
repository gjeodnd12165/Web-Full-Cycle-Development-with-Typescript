### delivery_id 받아오기
현재 mysql2 문서에서 예시로 보여주는 것은 다음과 같다.  
[참고](https://sidorares.github.io/node-mysql2/docs/documentation/promise-wrapper)
```js
await connection 
    .then((conn) => {
      const results = conn.query(sql, values);
      return results;
    })
    .then((results) => {
      return res.status(StatusCodes.CREATED).json(results);
    })
    .catch((error) => {
      console.log(error);
      return res.status(StatusCodes.BAD_REQUEST).end();
    })
```