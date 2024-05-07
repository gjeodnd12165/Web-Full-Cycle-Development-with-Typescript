### 타입 명시
- 변수를 선언할 때 변수 값의 타입을 명시함으로써 변수의 데이터 타입을 지정한다.
#### 타입 지정 방법
```ts
let foo: string = 'bar';
foo = 1; // throws error
```
```ts
function foo(id: number): void {
  return;
}
```