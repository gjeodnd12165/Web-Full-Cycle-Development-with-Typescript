### timezone 설정
```sql
SET GLOBAL time_zone = 'Asia/Seoul';
```
위 쿼리로 데이터 베이스 전체의 timezone을 설정할 수 있다.  
GLOBAL 키워드로 데이터 베이스 전체의 설정을 선택한다.  
```js
const connection = mysql.createConnection({
  ...
  timezone: 'Asia/Seoul',
  ...
});
```
다음 옵션으로 js에서의 timezone을 설정할 수 있다.
```js
const connection = mysql.createConnection({
  ...
  dateString: true,
  ...
});
```
위 옵션으로 js에서 날짜 관련 데이터를 string 형태로 불러올지 선택할 수 있다.