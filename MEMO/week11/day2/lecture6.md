### 인터페이스
```ts
interface foo {
  bar: string;
  baz?: number;
  fee: () => void;
}
```
```ts
function foo(a: number, b?: number) {}
```
변수 이름 앞에 ?를 넣어서 optional하다는 것을 나타낼 수 있다.  

#### 인터페이스 구현
```ts
class foo implements bar {
}
```

> 자바스크립트에서 렌더링 시에는 인터페이스가 필요없기 때문에, 컴파일 시에 인터페이스는 무시된다.

#### 요약
- 인터페이스는 `string`이나 `number` 타입처럼 데이터 타입으로 사용 가능
- 선택적 프로퍼티로 지정하려면 속성값 뒤에 ?
- 메소드도 인터페이스 내에서 선언 가능
- 인터페이스를 클래스에 상속 가능