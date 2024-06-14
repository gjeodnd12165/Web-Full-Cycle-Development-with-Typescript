## 과제1
### 웹 응용을 하나 만들어 서버를 도커 이미지로 구성하기
#### 코딩
nestjs/cli의 `nest new`로 바로 만들 수 있는 간단한 서버

#### 서버 환경 구성 (Dockerfile 구성하기)
```dockerfile
FROM node:20

RUN apt-get install git

WORKDIR /app

RUN mkdir /root/.ssh && chmod 0700 /root/.ssh
RUN ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts
RUN git clone https://github.com/gjeodnd12165/simple-nestjs-server.git

WORKDIR /app/simple-nestjs-server

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
```
- 베이스는 node 및 npm이 기본적으로 설치되어 있는 node 이미지를 이용합니다
- git clone 시 ssh 관련 이슈가 발생하여 `~/.ssh/known_hosts`에 `github.com`을 추가합니다
- clone하는 레포지토리에는 nest 기본 앱에서 변경되지 않았습니다
- `WORKDIR`를 통해서 clone한 repo의 폴더로 들어가고,
- npm install로 관련 의존성을 설치합니다
- npm start를 통해 서버를 실행합니다

#### 이미지 만들기
dockerfile이 있는 폴더에서 `docker build -t gjeodnd12165/assignment1:0.0.1 .`로 이미지를 생성 했습니다

#### 레지스트리에 게시하기
`docker push gjeodnd12165/assignment1:0.0.1`로 도커 허브에 게시했습니다
```
The push refers to repository [docker.io/gjeodnd12165/assignment1]
bf9b1b9c55db: Pushed
5f70bf18a086: Mounted from gjeodnd12165/my_httpd
6893028c8f61: Pushed
02f8ec1e689f: Pushed
76fbadb1ce25: Pushed
a23bd914d92f: Pushed
0a11151d7161: Pushed
5c6aa995425a: Mounted from library/node
68c94c11bf87: Mounted from library/node
a7f6e12071fb: Mounted from library/node
e8c94ab423c9: Mounted from library/node
3999ea91fb6e: Mounted from library/node
43df359389fd: Mounted from library/node
d3e8d42f967c: Mounted from library/node
5d64de483bf5: Mounted from library/node
0.0.1: digest: sha256:96af5447caffd21123c94b1097210c5d804414a1bf6ee28e5637ba914cc8df5a size: 3459
```

### 코드 변경 시 자동화
상기 과정이 모두 자동화 되어서 실행되어야합니다

> 깃허브에서 actions로 코드 변경을 감지하여 상기 사항을 진행한다? 

### 느낀 점
1. 처음에는 과제를 기존에 개발하던 서버로 하려 했는데, 서버가 DB에 연결되어 있어서 container에서는 제대로 작동하지 않았습니다. 이를 해결하는 법을 알아야겠습니다.

2. git clone 시 이전 이미지 사이에 commit이 발생하여 repo의 데이터가 변경되었음에도 불구하고 새로 생성한 이미지에서는 변경점이 반영되지 않았습니다. dockerbuild가 어떻게 캐싱 되는지 잘 알지 못하므로 이러한 이슈가 발생한 것이기 때문에, 이에 대해서도 알아보야야겠습니다. [참조](https://stackoverflow.com/questions/36996046/how-to-prevent-dockerfile-caching-git-clone)