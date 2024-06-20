### CI 파이프라인 기초
#### CI 파이프라인
- 파이프라인에 대한 추상적 수준에서의 정의
    - 새로 개발한 응용을 k8s에서 사용하는 과정을 나타내 보면  
    `docker build -> docker push -> kubectl create -> kubectl expose`
- 이 단원에서 언급하는 CI Pipeline에 대한 상세 수준에서의 정의
    - Jenkins를 통해 자동화한 빌드 단계와 그 절차

#### 간단한 파이프라인 구축 실습
- 실습 단계
    - Github에 code repository를 생성, 설정하고 초기 소스 코드를 등록
    - Gradle을 이용한 빌드 환경을 설정
    - 응용에 알맞은 빌드 환경을 컨테이너 이미지로 제작하고 이것을 Jenkins agent에 포함

#### Github 접근용 SSH Key 생성
- Github의 비공개 repo에 접근할 때에는
    - https보다 ssh 프로토콜을 더 많이 이용
    - Username/password에 의한 인증보다 SSH (또는 GPG) key에 의한 인증을 더 많이 이용
- ssh-keygen을 이용해서 public-private keypair 생성
    1. Github 로그인
    2. (Account) Settings -> SSH and GPG keys
    3. new SSH key
    4. 공개 key (기본적으로 id_xxxx.pub로 생성) 등록
> (주의) 비공개 key는 노출되지 않도록 주의해야 함! 비공개 키는 Jenkins에 등록

- `ssh -T git@github.com` 으로 ssh 프로토콜로 접속 가능한지 확인

#### 빌드 에이전트의 개선
- 커스텀 에이전트 컨테이너를 만들어 적용
    - 빌드에 필요한 환경을 미리 구축
    - 어느 Jenkins CI 환경에 적용해도 동일한 환경 적용
    - 이후에 복잡한 여러 단계를 거치는 빌드 과정에 대응하는 데에도 유리
- 에이전트 컨테이너 준비 과정
    - Dockerfile 작성
    - docker build && push
    - 위에서 레이스트리에 등록한 이미지 적용

