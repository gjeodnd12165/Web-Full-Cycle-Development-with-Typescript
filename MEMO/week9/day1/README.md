## 2024-04-22
1. header의 Authorization 필드에 jwt 토큰이 들어가게 된다.  
2. postman에서 authorization 관리
3. jwt의 에러 객체들
4. try-catch
5. throw
6. instanceof를 이용한 에러 구별
7. 에러 구별에 switch를 사용할지, if-else를 사용할지

### 느낀점
중요 정보는 header에 들어간다는 것은 알고 있었다. 하지만 postman에서 Authorization에 들어갈것을 따로 관리해 주는 것을 보니, 이것이 기본적인 것 같다. 기억해놔야겠다.  
try-catch의 경우 다른 언어에서도 본 적이 있었고, 이미 알고도 있었지만, 에러를 구별하는 방법에 대해서는 이번에 처음 알게 되었다.  
instanceof와 if-else를 사용하도록 정했으니, 앞으로도 이렇게 해야겠다.  
