### params는 무조건 string
params로 받는 데이터는 무조건 string 타입으로 받아진다.  
하지만 javascript는 비교, 연산 시에 임의로 타입을 변환시키기 때문에, 계산하는 데에 문제는 없다.  
> javascript에 타입 변환을 맡기는 것보다는, 타입 변환을 명시해 주는 것이 낫다.
```js
const n_str = "15";
const n_int = parseInt(n_str);
// typeof n_int === integer
```