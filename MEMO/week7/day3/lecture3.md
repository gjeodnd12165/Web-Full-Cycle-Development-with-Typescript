### node.js 패키지(파일) 구조
- app.js: 프로젝트의 메인 라우터
- /routes
    - /users.js: 하위 라우터
    - /books.js: 하위 라우터
    - ...  

경로를 찾은 다음 역할 -> 콜백 함수를 빼내자!

> 라우터가 로직까지 수행할 때 단점
> 1. 프로젝트 규모가 커질수록 코드가 엄청 복잡해진다.
> 2. 가독성 X
> 3. 트러블 슈팅 X  
> 
> => **유지 보수** 하기 어렵다  
> cf. 유지 보수란? 요구사항 반영, 에러 해결, ... - 10년 이상 운영된 코드...

#### 컨트롤러
- 프로젝트에서 매니저 역할을 하는 파일  
- 누군가에게 일을 어떻게 시켜야할 지 알고 있다  
=> 직접 일을 하지는 않는다  

=> 라우터를 통해서 *사용자의 요청(req)이* 길(url)을 찾아오면 매니저(controller)가 환영해준다  
-> 알바생에게 일을 시키고, 결과물을 매니저에게 전달  
매니저(controller)가 사용자에게 res를 돌려준다  