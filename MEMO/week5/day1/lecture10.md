### 채널 전체 조회
`!Map.size`로 Map에 값이 있는지를 간단히 확인할 수 있다.

> 나는 현재 `[...db.values()]`로 전체 조회를 하고 있다.  
spread의 성능을 확인해보고, 다른 방법을 알아보기 위해 검색을 해봤는데, 다음 링크가 이 상황에서 가장 좋은 벤치마크인것같다. slice의 성능이 월등히 높고, 그 다음이 spread 라는 것을 주목할만 하다. [참고](https://www.measurethat.net/Benchmarks/Show/8696/4/spread-vs-for-loop-vs-array-push-vs-slice-vs-arrayfrom)  
하지만 `Map.values()`는 interator이기 때문에 slice를 사용할 수 없고, spread와 forEach만 비교했을 때에는 spread가 더 나은 선택인 것 같다.