### name validation, return
한 번에 여러 변수를 검사하려면, validator가 들어갔던 자리에 배열로 여러 validator를 넣어주면 된다.  
```js
return res.status(400).json(err.array());
```
에러 시에 res구문에 return을 추가해 줌으로써 res 후에 함수가 좋료되게할 수 있다.