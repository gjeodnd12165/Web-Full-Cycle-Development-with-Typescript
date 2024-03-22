### 미니 프로젝트 시작
##### 회원
- 로그인: POST/signin
    - req: body (id, pwd)
    - res: 메인 페이지
- 회원 가입 POST/signup
    - req: body (id, pwd, name)
    - res: 로그인 페이지
- 회원 정보 조회 GET/users/:id
    - req: URL (id)
    - res: id, name
- 회원 탈퇴 DELETE/users/:id
    - req: URL (id)
    - res: 메인 페이지

회원은 계정 1개 당 100개의 채널을 가질 수 있다.
##### 채널
- 채널 생성
- 채널 수정
- 채널 삭제
#### 마이 페이지
- 회원 정보 조회 API
- 회원 탈퇴 API