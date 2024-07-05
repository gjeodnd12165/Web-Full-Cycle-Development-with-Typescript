### BE 단위 테스트
- 백엔드의 단위 테스트
    - 독립적으로 테스트할 수 있는 함수/메서드들은 모두 테스트
    - 몇 개의 모듈이 조합하여 결과를 만들어야 하는 경우가 많음 🡪 이에 대한 테스트는 어떻게?
        - 발생할 수 있는 요청 각각에 대한 테스트 케이스들을 마련하는 것이 합리적
        - 대부분의 요청에 대해서는 데이터베이스 및 쿠키 등 상태를 가지는 객체가 결부되어 있음
            - Mock 을 이용하여 테스트 대상을 분리하는 것이 필요

#### 라이브러리 설치
- dependencies
    - cookie-parser
    -jsonwebtoken
- devDependencies
    - jest
    - ts-jest
    - supertest
    - @types/cookie-parser
    - @types/jest
    - @types/jsonwebtoken
    - @types/supertest

#### 테스트용 Mock 제작
.pdf 참조

#### 테스트 케이스 구현
.pdf 참조

#### 테스트 절차의 재사용성 확보
- Makefile을 이용해서 테스트 단계의 재현성을 높임
    - Dependency 활용 가능
    - 이후 CI/CD 파이프라인 스크립트 구성에 활용