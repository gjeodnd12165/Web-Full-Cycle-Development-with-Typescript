## 2024-06-11
1. 드롭다운 메뉴 구현
    - 외부 클릭시 닫히는 기능 구현
2. 탭 구현
    - react에서는 children을 node의 배열로 바꾸는 메소드를 제공한다.
3. 토스트 구현
    - fade-in / out 에 대한 css 및 변수 처리
4. 모달 구현
    - createPortal을 사용하여 하위 컴포넌트에서 body에 요소 바로 추가하기
5. 무한 스크롤 구현
    - useInfiniteQuery를 사용
    - IntersectionObserver를 시용한 스크롤 감지

### 느낀 점
이번에 배운 것들은 거의 다 외부 라이브러리로 써보았던 것들인데, 이렇게 직접 구현해보면서 내부 로직을 살펴보니 감회가 새롭다.  
특히, 대부분의 기능들이 내가 이미 알고 있는 것들의 조합으로 구현 가능하다는 것이 놀라웠다.  
하지만 Infinite Query나 IntersectionObserver와 같이 전혀 몰랐던 것들도 있기 때문에 기억해놔야겠다.  
