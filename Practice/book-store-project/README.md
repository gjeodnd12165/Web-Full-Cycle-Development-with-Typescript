# TO DO
- 에러 관련
    - 비동기 함수에서 나오는 에러를 미들웨어에서 잡을 수 있게 하기
    - SQL의 결과값이 null이 나오는 등의 SQL 결과값 관련 에러 처리하기
- 유효성 검사 살펴보기
### 추가 요구 사항
1. [x] API문서에 맞게 response 포맷 정돈 ex.변수 명명법, status code 등 
2. [x] 모델(데이터 모듈) 클래스 구현
    1. [x] (선택) DB 모듈 사용 ex. 몽구스, 시퀄라이즈
3. [x] 패키지 구조 정돈
    1. [x] (필수) Router, Controller
    2. [x] (선택) Service, Model
4. [ ] 예외 처리 구현
5. [ ] 유효성 검사 구현
6. [x] dotenv를 통한 환경변수 관리
7. [ ] (선택) access token 과 refresh token 2가지로 발행하는 방식
8. [x] (선택) nodemon을 이용한 개발환경 구축
9. [ ] (선택) 랜덤 데이터 API를 활용하여 isbn 샘플 데이터 생성

### 추가 추가 요구 사항
1. [x] 타입스크립트로 변경하기

## NAMING CONVENTION
### file name
#### Hierarchy related files
서비스 계층 구조에 속하는 파일들은
> [다루는 모델 이름].[다루는 계층].ts
로 정한다.  

#### others
현재 나머지 파일은 규칙이 없다.  

### function name
#### controller functions
컨트롤러 함수는 각 함수가 매핑되어있는 method를 시작으로, 어떠한 것들을 다루는지 정확히 나타내어야한다.  
예외로, post의 경우 여러 곳에서 쓰이므로 post를 시작으로 하지 않고, create 등 조금 더 자세한 기능을 나타낸다.  

> getBooks: 책들의 정보를 get으로 받아오는 함수

> createUserLikeBooks: 유저가 어떤 책을 좋아한다는 정보를 서버에 만들어서 저장하는 함수,  
http method 중 create는 없으므로 post에 매핑된다.

#### service functions
서비스 함수는 각 함수가 DB에 요청하는 작업을 시작으로, 어떤 테이블에 작업을 요청하는지를 나타내어야한다.  
예외로, select는 그 의미가 찾는다는 기능과는 상당히 동떨어져 있으므로, search로 대신한다.
> insertLike: likes 테이블에 레코드를 하나 생성하는 함수

> deleteLike: likes 테이블에 레코드를 하나 삭제하는 함수