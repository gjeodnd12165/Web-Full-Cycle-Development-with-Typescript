### 도서 목록 조회 페이징 구현하기 2
LIMIT 구문을 `LIMIT a OFFSET b`에서 `LIMIT b, a`로 바꿀 수 있다.  
#### 비구조화 기본값
비구조화 시에 기본값을 정해주고 싶다면 다음과 같이 할 수 있다.  
```js
const obj = {b:1};
const {a=2, b} = obj;
```
이러면 `obj`에 a가 없지만 기본값으로 2가 들어가게된다.