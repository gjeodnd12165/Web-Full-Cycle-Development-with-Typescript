### 회원 채널 조회, id 없으면 예외 처리
- body에 userId 없을 때 예외 -> frontend에서 userId를 준다고 확신 -> 그럼에도 없다면 로그인페이지로 리다이렉트
- db에 해당하는 userId가 없을 때 예외