### req.params 연습 - 유튜브 (2)
`/watch?v=5GzQEP88NrU&t=240s`라는 url로 접속 시, 서버에서 `params.query`로 v, t를 다룰 수 있다.  
이 때, `params.query`는 json이다.  
```js
const q = params.query;
res.json(q);
console.log(q.v, q.t);
```