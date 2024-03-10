### node.js에 db 연동 / 설정 파일 만들기
#### 모듈 설치
프로젝트의 루트 폴더에서, cmd로
```
npm install 모듈명
```
으로 특정 모듈을 설치할 수 있다.
여기서는 mysql 모듈을 설치하면 된다.  
#### mariadb 이용
1. mariadb에 연결만을 담당하는 .js 파일을 만들자  
./database/connect/mariadb.js 참조
2. index.js에서 연결
```js
mariadb.connect();
```
3. requestHandler.js에서 데이터 불러오기
```js
mariadb.query('쿼리문', (error, rows) => {
  // rows가 데이터를 가지고 있다.
  console.log(rows);
})
```
> mariadb를 사용하는 모든 곳에서, require문으로 mariadb.js를 불러와야한다.

