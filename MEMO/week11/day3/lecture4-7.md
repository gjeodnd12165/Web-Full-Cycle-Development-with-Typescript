### 클래스와 객체 만들기
### 생성자
### 접근 지정자
typescript에서도 c#과 같이 private, public, protected를 사용할 수 있다.
### getter, setter
```ts
class Foo {
  constructor(private _bar: string) {}

  get bar() {
    return this._bar;
  }

  set bar(bar: string) {
    this._bar = bar;
  }
}
const foo: Foo = new Foo('baz');
foo.bar = 'fee';
console.log(foo.bar);
```