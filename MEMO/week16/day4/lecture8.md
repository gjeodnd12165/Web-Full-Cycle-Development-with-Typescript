### 도커 이미지 만들기
#### 실험 계획
- 상태를 깨끗이 하고
- httpd 이미지를 가져다가 실행하되
    - 'It works!' 말고 다른 기본 페이지가 나오도록 설정
- 이 상태로 실행되는 이미지를 작성

#### 이미지 생성 자동화
- Dockerfile
    - 계층 구조를 이용하여 도커 이미지를 만드는 절차를 기술하는 파일 (텍스트)
    - FROM [--platform=<platform>] <image> [AS <name>]
    - RUN <command>
    - ENTRYPOINT ["executable", "param1", "param2"]
- 이미지 빌드 명령어
    - docker build [OPTIONS] PATH | URL | -


#### 요약 정리
- 도커의 편리함 (CI/CD 관점에서)
    - 응용을 실행하는 데 이용되는 물리적 컴포터 환경과 독립적으로 통일된 실행 환경 제공 가능
    - 이미지로부터 여러 개의 동일한 컨테이너 인스턴스를 만들고 실행 가능
    - 필요한 소프트에어 도구 및 설정 파일 등을 사전에 지정해 두고 알려진 상태로 컨테이너 생성 가능 (자동화!)