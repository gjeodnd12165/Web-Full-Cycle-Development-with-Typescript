### 웹 개발 파이프라인 구축
- "풀 사이클 개발" 이라는 것이 무엇일까?
- "파이프라인"이 무엇일까?
- CI / CD 란 무엇이고 이것은 왜 필요한 것일까?
- 이를 위한 도구들이 여러가지 있던데, 각각의 역할이 무엇이고 어떻게 활용하는 것일까?
    - 도커
    - 쿠버네티스
    - 젠킨스
    - ...등등

#### 웹 개발 파이프라인
1. 코드 개발
2. CI; Continuous Integration : 지속적 통합  
    1. 빌드
    2. 테스트
    3. 코드 병합
3. CD; Continuous Delivery : 지속적 인도
    - 코드 리포지토리에 자동으로 릴리스
4. CD; Continuous Deployment : 지속적 배포
    - 프로덕션 환경에 자동으로 배포