### 좋아요 취소 API에 jwt 구현, userId 꺼내기 모듈화
토큰 디코딩은 모든 컨트롤러에서 쓸 것 같아서 파일 모듈로 분리하였다.  

postman에서는 각 collection에 대해 Authorization탭에서 인증에 관한 부분을 관리할 수 있다.  
여기서 하위 컴포넌트는 부모의 인증을 물려받도록 설정하고, 가장 상위 컴포넌트에서 `Bearer token`으로 미리 설정된 토큰을 받도록 하였다.  

이렇게 하면 Authorization의 값의 앞에 `Bearer `라는 string이 붙기 때문에 이것도 따로 처리해줬다.  
인증부분을 모듈로 따로 빼놨던것이 도움이 되었다.  
