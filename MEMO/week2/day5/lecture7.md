### 메인 페이지 연동하기 - 1
백엔드에 만들었던 .js파일들을 모두 프론트엔드에서 재사용  
#### fs 모듈
File Sync
파일에 접근할 수 있게하는 javascript 모듈
```js
const fs = require('fs');
```
이를 이용하여 main.html 파일을 보내면 이미지 등의 외부파일이 로딩되지 않는다.  
콘솔을 보면, 모든 외부파일에 대한 요청이 오기 때문에, 해당 주소에 대한 요청을 모두 처리해야한다.
- `fs.readFileSync`
```js
const file = fs.readFileSync('path');
```
- `fs.readFile`
```js
fs.readFile('path', (err, file) => {
  // do something with 'file'
});
```