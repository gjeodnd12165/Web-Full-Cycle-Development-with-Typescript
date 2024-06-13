### 컨테이너 다루기
#### 도커에서의 환경 변수의 이용
- 환경 변수를 참조하도록 hello.py를 수정
```python
import os
print("Hello world from %s!" % os.environ["NAME"])
```
- Dockerfile 내에 ENV 지시자를 이용하여 환경변수 내용 지정 (FROM 바로 뒤에)  
env NAME Grepp

- 이미지 빌드 (hello:0.2) 하고 실행해서 결과 확인

> `docker run -e NAME=NOT_HDW hello:0.2`와 같이 `-e`로 환경 변수 조정 가능

#### 실행이 끝난 컨테이너의 자동 삭제
- docker run 명령에 -rm 옵션을 붙이면 실행이 끝난 컨테이너 자동 삭제

#### 호스트 외부에서 컨테이너 접속
- tomcat이 실행되고 있는 컨테이너의 TCP/8080 포트를 호스트의 외부로부터도 접속 가능하도록 설정하려면?
    - 호스트의 특정 포트를 특정 컨테이너의 특정 포트와 연결하는 방법이 필요  

#### 호스트의 포트와 컨테이너 포트를 연결
- 지금은 호스트 네트워크 인터페이스와 컨테이너 사이의 연결이 없음

#### 컨테이너 이름 지정하기
```cmd
docker run --name <name> <image>
```

#### 도커 클린업
- 컨테이너 삭제
    - docker rm <container>
- 이미지 삭제
    - docker rmi <image>

- 컨테이너 전체 삭제
    - docker container prune
- 이미지 전체 삭제
    - docker image prune -a

#### 요약
- 배운것
    - 도커 컨테이너에 환경 변수 전달
    - 백그라운드로 컨테이너 실행, 실행 마친 컨테이너 자동 삭제
    - 호스트의 포트를 컨테이너의 포트에 연결하여 서비스를 바깥으로 노출하는 방법
    - 컨테이너의 이름 지정, 삭제, 정리 / 이미지 정리