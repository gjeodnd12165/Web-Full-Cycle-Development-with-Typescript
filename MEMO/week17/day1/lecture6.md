### CI 도구로서의 젠킨스
#### 젠킨스
- 자바로 작성된 오픈 소스 자동화 서버
- 지속적 인도 프로세스를 구축하는 데 널리 이용됨
    - 장점: 유연성과 확장성

#### CI/CD 시나리오
- CI 단계
    - 일반적으로 개발자가 소스 코드를 커밋하고 푸시하는 것으로 시작
    - 응용 소프트웨어를 자동으로 빌드, 통합
    - (자동) 테스트를 통하여 배포할 수 있는 상태임을 확인
- CD 단계
    - CI 단계에서 소프트웨어가 배포 가능한 상태임을 확인하는 것으로 시작
    - 응용 소프트웨어를 컨테이너 이미지로 만들어 냄
    - 포드, 디플로이먼트, 서비스 등 다양한 오브젝트 조건에 맞추어 (미리 설정한 파일을 통해) 배포

#### CI Pipeline
- 리포지토리에 코드 커밋이 발생할 때마다 빌드, 단위 테스트, 정적 분석 등을 행함

#### 쿠버네티스 클러스터에 구성한 젠킨스 CI
- k8s 클러스터 환경에 젠킨스에 의한 CI를 적용

#### 젠킨스의 특징
- 다양한 프로그래밍 언어 지원
- 플러그인을 통한 확장
    - 사용자가 직접 플러그인을 작성해 젠킨스의 기능을 확장하는 것도 가능
- 이식성
    - 여러 종류의 컴퓨터에서뿐만 아니라 컨테이너 및 클러스터 환경에도 부드럽게 적용
- 대부분의 소스 관리 시스템 지원
- 분산 처리 지원
- 코드로 파이프라인 구성

#### 젠킨스 아키텍처
- 마스터-슬레이브 구조
- 마스터
    - 빌드 시작 트리거 포착
    - 알림
    - 클라이언트와 통신하며 HTTP 요청 처리
    - 에이전트에서 실행 중인 작업의 우선순위 조정 등 빌드 환경 관리
- 에이전트
    - 마스터에 의한 개시 후 모든 작업을 처리

#### 수평적 확장
- 조직이 늘어날 때마다 마스터 인스턴스의 수를 늘려가는 방식
- 통합 자동화가 복잡해진다는 단덥이 있으나
    - 마스터 역할을 하는 컴퓨터의 하드웨어 사양에 대한 부담이 감소
    - 팀마다 각기 다른 설정이 가능
    - 팀 전용 마스터 인스턴스가 있으므로 팀워크와 업무 효율이 높아짐
    - 마스터 인스턴스 하나에 문제가 생겨도 다른 팀에 끼치는 영향이 최소화됨

#### 테스트 인스턴스와 프로덕션 인스턴스
- 중요! - 젠틴스 인스턴스는 항상 테스트용과 프로덕션용으로 분리 운용해야 함
    - 개발팀보다는 운영팀에서 주의를 기울여야하는 부분
- 다음과 같은 시스템 설정 변경이 일어날 떄 프로덕션에 적용하기 이전 철저한 검증이 필요
    - 젠킨스 소프트웨어의 업데이트
    - 신규 플러그인 적용
    - CI/CD 파이프라인의 변경 및 유지보수
