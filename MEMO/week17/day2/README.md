## 2024-06-20
1. 간단한 파이프라인 구축 후 실행 확인
2. 간단한 앱 생성 후 파이프라인에 적용
    - 유닛 테스트, 코드 커버리지
3. 코드 품질 테스트 적용

### 느낀 점
파이프라인을 구축하는 것은 따라 치는 것이어서 그다지 어렵지 않았고, 나중에 가니 익숙해졌다.  
하지만 앱을 spring gradle로 구성하다 보니 이에 관련된 에러 때문에 애를 먹었다.  
dependencies 관리나 checkstyle 디렉토리 관련하여 강의와 다르게 하여 해결된 부분이 있어 더 어려웠다.

- dependencies 업데이트 후 `./gradlew build --refresh-dependencies
- checkstyle의 디렉토리를 `./config/checkstyle`이 아닌 `./checkstyle`로 해야했던 점

모두 검색 등으로 커버 가능한 것들이긴 했지만, 강의 양에 비해 시간을 너무 많이 잡아 먹은 것 같다.  
