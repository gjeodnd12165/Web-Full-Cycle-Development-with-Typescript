### npm 좀 더 뜯어보기 -g, uninstall, is odd 설치/제거, package.json 뜯어보기
#### uninstall
```
npm uninstall figlet
```
와 같이 명령하면, 모듈(이 경우에는 figlet)을 프로젝트에서 제거할 수 있다.
#### package.json
install/uninstall을 하면 package.json에 dependencies의 값으로 모듈 이름 및 버전이 추가/제거 된다.
#### -g
```
npm install -g <모듈 이름>
```
모듈을 모든 프로젝트(globally)에 설치한다. uninstall도 마찬가지.