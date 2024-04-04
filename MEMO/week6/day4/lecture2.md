### cookie 설정 변경
#### HTTPS
서명을 추가하여 보안성을 강화한 HTTP

cf. httpOnly(= 프론트엔드가 아니라 API 호출만 허락?)  
: XSS 공격(프론트엔드 js 실행 공격)

`res.cookie()`의 세번째 매개 변수로 쿠키의 옵션을 설정할 수 있다.  
