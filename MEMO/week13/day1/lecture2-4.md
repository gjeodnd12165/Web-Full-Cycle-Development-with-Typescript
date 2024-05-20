### Drag And Drop 기능 만들기 시작하기
### DragEnd 기능 생성하기
### sort 로직 생성하기
- 타입 단언: undefined와 유니온된 타입에 대해, undefined가 나올 수 없다고 단언하는 표현
```ts
let s1: string | undefined;
let s2: string = s1!;
```