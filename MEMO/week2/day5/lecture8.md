### 메인 페이지 연동하기 - 2
> 영상에는 TABLE을 만드는 것이 나오지 않았다. 만들어야겠다.  

다음과 같이 onclick을 수정하면, 버튼을 눌렀을 때 /orderlist?productId=1이라는 주소로 갈 수 있다.
```html
<input onclick="location.href='/orderlist?productId=1'"/>
```
물음표 뒤의 변수들은 server.js에서 다음과 같이 가져올 수 있다.
```js
const queryData = url.parse(req.url, true).query;
// query.productId를 사용
```