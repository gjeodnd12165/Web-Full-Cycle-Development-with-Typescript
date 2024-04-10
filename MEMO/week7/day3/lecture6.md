### 회원가입 시 비밀번호 암호화
nodejs 내장 모듈인 `crypto`로 비밀번호를 암호화할 수 있다.
```js
const salt = crypto.randomBytes(64).toString('base64');
const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('base64');
```
- `salt`: `64` 바이트 크기의 `랜덤` 정보를 `base64`로 인코딩한다
- `hashedPassword`: `password`에 `salt`를 더해서 `sha512`로 `10000`번 해싱하여 암호화한 후 `base64`로 인코딩한다

회원가입 시 암호화된 비밀번호와, salt 값을 같이 저장  
로그인 시, 이메일과 비밀번호를 받고, DB에서 salt를 꺼내서 비밀번호를 암호화한 후, DB의 비밀번호와 비교 

> 해싱된 비밀번호와 salt의 길이를 잘 보고 DB에서의 최대 크기도 맞춰주자