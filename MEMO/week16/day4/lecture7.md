### 도커 이미지와 도커 컨테이너
#### 이미지와 컨테이너
- 도커 이미지
    - 응용을 실행하는 데 필요한 모든 파일들과 그것을 실행하는 방법을 한데 묶어 놓은 것
    - stateless 방식 - 네트워크로 전송, 레지스트리에 저장, 이름 및 버전 지정 가능
    - 계층화되어 있다는 특징을 갖고 있으며, 한 이미지로부터 다른 이미지를 만드는 것이 가능
- 도커 컨테이너
    - 이미지의 실행 인스턴스
    - 하나의 이미지로부터 여러 컨테이너를 만들어 동일한 응용을 여러개 실행할 수 있음 (각각 독립)
    - stateful 방식 - 컨테이너를 사용하면서 상태를 변경할 수 있음
        - 그러나 컨테이너가 소멸하면 이 상태도 잊어버림

#### CLI 명령어
- docker run <image name>
    - 이름이 주어진 이미지를 로컬 혹은 레지스트리에서 가져다 컨테이너를 만들어 실행
- docker ps [-a]
    - 현재 실행 중인 [또는 모든] 컨테이너 들의 정보를 조회
- docker images
    - 로컬 컴퓨터에 가지고 있는 이미지들의 정보를 조회
- docker stop <container name / ID>
    - 현재 실행 중인 컨테이너의 실행을 중단
- docker rm <container name / ID>
    - 컨테이너 삭제
- docker rmi <image name / ID>
    - 이미지를 삭제