### URL 읽어내기
Uniform Resource Locator  
인터넷 상에서 웹 페이지가 어디있는지 알려주는 주소  
#### router
주소를 받아 주소에 따라 할 행동을 정하는 모듈

> server.js가 직접 router.js를 사용할 수도 있지만, 파일을 import하는 곳을 정리하기 위해, server에서 router를 매개 변수로 받게 하여, index.js에서 주입해준다.