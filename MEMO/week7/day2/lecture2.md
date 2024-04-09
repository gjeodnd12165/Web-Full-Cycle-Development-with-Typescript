### express-generator와 우리 프로젝트 구조 비교
- bin/www: 포트 번호 등과 같은 웹 서버를 구축하는데에 필요한 설정 데이터가 정의되어 있는 파일
    - .env와 같이 설정 값을 가지고 에러 처리, 기타 추가 설정하는 파일
- node_modules: nodejs의 모듈이 설치되는 폴더
- public/images, javascripts, stylesheets: 정적 파일  
cf. 동적: 사람마다 다른 데이터
- routes: 각 경로를 담당하는 모듈들이 들어있는 폴더 -> 라우팅 모듈  
클라이언트에서 어떤 요청을 주냐에 따라 어떤 로직을 수행할 지 파일별로 분할해서 관리하는 정도  
- views: 클라이언트에게 html코드로 "화면을 보내는 파일"
- app.js: 서버의 시작점으로 -> URL에 따라서 라우팅을 해준다.
- package.json: 이 프로젝트에 설치된 모듈의 버전 관리