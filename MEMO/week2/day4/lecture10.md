###
#### Server와 Router의 역할
- Server: Request 받기
- Router: Request의 URL에 따라 루트(route)를 정해준다. => 어디로 갈지 길만 정해줌  

이 길에 따라 어떤 행동을 할 지 requestHandler.js에서 설정

> 원하는 주소만이 아니라, /favicon.ico로의 요청도 들어올 수 있다.  
이는 브라우저에서 홈페이지의 아이콘을 요청하는 과정이 있기 때문으로, /favicon.ico에 대한 요청을 따로 처리해주자.  
현재는 `() => {}`로 아무것도 하지 않도록 하고 있다.