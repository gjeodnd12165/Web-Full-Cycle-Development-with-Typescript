### 스프린트 프로젝트 2 에서 추가한 것들
#### 미들웨어를 통한 토큰 복호화
```js
function decodeToken(req, res, next) {
  let recievedToken = null;
  let decodedToken = null;

  if (req.header("Authorization")) {
    recievedToken = req.header("Authorization").replace("Bearer ", "");
    decodedToken = jwt.verify(recievedToken, process.env.ACCESS_TOKEN_KEY);
  }
  req.token = decodedToken;
  
  next();
}
```
위와 같이 라우터에 요청을 보내기 전, `req.token`에 복호화된 토큰을 넣어서 모든 라우터에서 사용할 수 있도록 만들었다.  

#### 미들웨어를 통한 컬럼 이름 케이스 변경
```js
function toCamel(req, res, next) {
  const json = res.json;
  res.json = function (data) {
    function camelCaseKeys(obj) {
      if (Array.isArray(obj)) {
        return obj.map(camelCaseKeys);
      } else if (obj.constructor === Object) {
        const camelCasedObj = {};
        for (const key in obj) {
          const camelCasedKey = _.camelCase(key);
          camelCasedObj[camelCasedKey] = camelCaseKeys(obj[key]);
        }
        return camelCasedObj;
      } else {
        return obj;
      }
    }

    json.call(this, camelCaseKeys(data));
  };
  next();
}
```
위와 같은 미들웨어로 `res.json`의 모든 키 이름의 case를 변경한다.  

DB 모듈을 순수 `mysql2`에서 `sequelize`로 변경하면 모듈에서 자체적으로 지원하는 것 같다.  

### 진행 중
1. sequelize 적용
2. Typescript로 변경