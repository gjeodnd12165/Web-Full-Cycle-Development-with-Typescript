### 비동기 처리 방법
- 비동기 발생  
실행되는 코드가 기다려야 하는 시간이 생긴다는 의미
e.g. setTimeOut(), setInterval(), query()
- 비동기 처리  
비동기가 필요 없을 떄가 있다.  
    1. 콜백 함수: 할 일 다 하고, 이거 실행해줘
    2. promise (resolve, reject)
    3. then & catch
    4. ES2017 promise => async & await