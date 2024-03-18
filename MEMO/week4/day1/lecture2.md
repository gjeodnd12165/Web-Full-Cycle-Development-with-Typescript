### req.params 연습 - 유튜브 (1)
유튜브를 보면, 채널url은 `/@<채널명>` 형식으로, 영상url은 `/watch?v=<영상id>`형식으로 되어있다.  
보통 req.params를 적당한 상수에 담아서 사용한다.  
```js
const container = req.params;
// container.channel = ...
```