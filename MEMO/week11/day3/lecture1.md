### 리터럴 타입
```ts
interface Student {
  gender: 'male' | 'female';
}
```
위와 같이 타입을 특정 값으로 정하여 그 값 외에는 대입하지 못하게 할 수 있다.

- 리터럴 타입은 특정 값을 나타내는 타입으로 해당 값이 정확하게 일치해야 한다. 타입스크립트에서 사용되는 리터럴 타입에는 다양한 종류가 있다.
```ts
let speed: 50 | 100 | 200;
speed = 100; // allowed
speed = 150; // not allowed
```
```ts
let person: { name: 'John', age: 30 };
person = { name: 'John', age: 30 }; // allowed
person = { name: 'Alice', age: 25 }; // not allowed
```
```ts
type CardinalDircetion = 'North' | 'East' | 'South' | 'West';
let direction: CardinalDirection;
direction = 'North'; // allowed
direction = 'Northeast'; // not allowed
```

- 리터럴 타입을 사용하면 좋은 점
    - 코드의 가독성이 높아진다.
    - 잘못된 값이 들어오는 것을 방지할 수 있다.


