### 검사 미들웨어 분리
#### 미들웨어
일종의 전처리로 기능하는 모듈  
#### 모듈화
```js
const validate = (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json(err.array());
  }
}
```
함수를 위와 같이 변수에 저장할 수 있다.  

이를 변수 validation과 같이 배열에 넣어주면 미들웨어로써 사용할 수 있다.  