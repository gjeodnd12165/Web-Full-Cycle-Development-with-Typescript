### CI 파이프라인 - 코드 품질 확보
#### 코드 품질
- 코드의 품질이란?
    - 기능성 - 의도한 기능을 모두 올바르게 수행하는가?
    - 좋은 코드란?
        - 대충 얘기하면, 읽기 좋은 코드, 엔지니어링 관점에서 재활용성이 높은 코드
- 실행 시점이 아닌, 그보다 이전에 정의할 수 있는 코드의 품질은 어떤 것들이 있을까?
    - 단위 테스트가 잘 마련되어 이쓴ㄴ 코드 - 테스트 커버리지로 측정
    - 규칙에 따라 잘 쓰여진 코드 - 컨벤션 (스타일 가이드라인) 준수 정도로 축정

#### 실습 흐름
- 테스트 커버리지 분석
    - JaCoCo를 이용: 로컬 환경에서 gradle 설정하고 테스트 -> Jenkins 파이프라인 스테이지로 추가
- 코딩 규약 준수 정보 분석
    - Checkstyle을 이용: 로컬 환경에서 Gradle 설정하고 테스트 -> Jenkins 파이프라인 스테이지로 추가
- CI Pipeline 완성
    - 매우 간단한 에제이기는 하지만 여기까지 해서 지속적 통합 파이프라인을 완성했으므로, 이제는 
        - Pipeline 구성을 SCM repository에 함께 두고 관리하도록 설정을 변경
            - 단지 파일로 관리할 수 있다는 것을 훨씬 넘어서는 의미를 가짐
        - 코드 리포지토리에 변경사항 (push) 이 생기는 경우 자동으로 빌드가 개시되도록 설정
    - 을 함으로써 첫 파이프라인 예제 완성

#### 정적 검사 - Checkstyle 이용
- Checkstyle 구성 추가
    - https://checkstyle.sourceforge.io
    - 이미 다른 사람들이 만들어서 이용하고 있는 파일을 참고
- 파일 다운로드
    - [링크](https://github.com/naver/hackday-conventions-java/tree/master/rule-config)
    - 위 repo에서 두 개의 파일 다운로드
        - naver-checkstyle-rules.xml
        - naver-checkstyle-suppressions.xml
- 가이드라인 적용
    - 위 두 파일을 `./checkstyle/`안에 (디렉토리 만들어서) 배치

#### 코드의 작성에 적용되는 규칙
- 모든 프로젝트에 같은 규칙이 적용되는 것은 아니지만, 같은 프로젝트를 행하는 개발자들 사이에서는 통일된 규칙을 제정하고 준수하는 것이 매우 중요

#### 빌드 명세를 코드 리포지토리와 함께 관리
- 지금까지 만든 Pipeline script의 내용을 Jenkinsfile로 작성
    - 다만, checkout 스테이지의 내용을 다음과 같이 수정
    ```
    stage("checkout") {
        steps {
            checkout scm
        }
    }
    ```

#### 트리거 설정 - 빌드 자동 개시
- Poll SCM
    - Schedule은 cron의 문법을 따름
    - `H/5 * * * *`
- Quiet period
    - 코드 변경을 감지한 경우에도 일정 시간 동안은 빌드를 개시하지 않고 기다리도록 설정