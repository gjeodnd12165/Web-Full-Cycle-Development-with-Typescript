### 끝날 때까지 끝난 게 아닙니다 (feat. 코드 퀄리티)
- 중복되는 코드 모듈화  
e.g. UserController: User (데이터 모듈) - CRUD  
cf. DB 모듈: mysql => 몽구스, 시퀄라이즈

- 패키지 구조
    1. Router: 경로와 HTTP method로 요청에 따른 경로를 찾아주는 역할
    2. Controller: 길 매니저 - 요청을 환영, 직접 일을 하지는 않는다
    3. Service: 직접 일을 한다 e.g. 어떤 쿼리를 부를지,  
    "비즈니스 로직": 
    4. Model: 데이터베이스와 소통 -> query 집합

- 예외처리 더 해줄 곳 없는지

- 유효성 검사

- JWT: access token이 만료되면 로그인 연장
    1. access token: 이미 만든 것 (로그인 인증)
    2. refresh token: 로그인 연장

- 랜덤 데이터 (외부) API를 활용해서 isbn 샘플 데이터들을 채우기

- nodemon