## 타입스크립트의 타입 문법
타입스크립트는 그 이름에 걸맞게 타입을 위한 특별한 문법이 존재한다.  
타입스크립트 핸드북에서는 이를 `Creating Types from Types`에서 간단히 소개하고 있다. [참조](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)  

이 글에서는 위에서 핸드북에서 소개하는 문법에 더해서, Type Challenge를 풀며 어떻게 사용했는지 설명하겠다.

### 타입 연산자와 unknown, never
#### 타입 연산자
타입 연산에는 유니온(|)과 인터섹션(&)이 있다. 각자 이름에 알맞게, 합집합 및 교집합처럼 작동한다.  
```ts
type xy = { x: number, y: string };
type xz = { x: number, z: boolean };

type Union = xy | xz;
type Intersection = xy & xz;

const u1: Union = { x: 0, y: '' };
const u2: Union = { x: 0, z: true };
const i1: Intersection = { x: 1, y: 'string', z: false };
const u3: Union = i1;
```

#### unknown과 never
```ts
let test: [
  string | unknown,
  string & unknown,
  string | never,
  string & never,
  string | any,
  string & any,
  string | undefined,
  string & undefined,
  string | null,
  string & null,
];
```
```ts
type answer = [unknown, string, string, never, any, any, string | undefined, never, string | null, never];
```
위 예제처럼, unknown과 never는 마치 전체 집합과 공집합처럼 작동한다.  
또한 any는 어떠한 연산에서도 any가 되며, undefined와 null은 평범한 primitive type처럼 작동한다.

### Generics
제네릭은 자바 등 여타 다른 언어에도 있는 기능으로, 함수, 클래스등을 생성할 때 타입을 외부에서 지정해 줄 수 있는 기능이다.  

```ts
function gen<T>(arg: T): T (
  return arg;
)
```
제네릭을 사용하는 함수를 만들 때에는 위와 같이 `<>`안에 제네릭의 이름을 명명하면 그 함수 내에서 사용할 수 있다.  
```ts
const output1 = gen<string>("example");
const output2 = gen("example");
```
함수를 불러올 때에는 위와 같이 `<>`안에 직접 타입을 명시할 수도 있고, 명시하지 않으면 컴파일러가 알아서 타입을 추론해주기도 한다.  

```ts
<T>(arg: T): T;
interface genInter<T> {
  (arg: T): T;
  content: T;
}
class GenClass<T> {
  content: T;
  getContent: () => T;
}
```
위와 같이 익명함수, 인터페이스, 클래스에도 제네릭을 적용할 수 있다.  
#### Generic Constraints
제네릭을 사용할 떄, 제네릭에 들어갈 타입을 한정하고 싶다면 다음과 같이 `extends`를 사용하면 된다.
```ts
function getLength<T extends any[]> (arg: T): void {
  return arg.length;
}
getLength(3); // Throws error
```
#### Generic parameter Defaults
제네릭에도 기본값을 설정할 수 있는 기능이 있다.
```ts
function create<T extends HTMLElement = HTMLDivElement, U = T[]>(
  element??: T,
  children?: U
): Container<T, U>;
```
다른 경우와 비슷하게, 제네릭의 기본값도 `=`으로 설정할 수 있다. 이경우에는 `create()`를 하면 기본적으로 T에 `HTMLDivElement`가 들어가게 된다.  

### Keyof Type Operator
`keyof` 연산자는 오브젝트를 받아 그 키들을 유니온 타입으로 반환한다.
```ts
type Point = { x: number; y: number };
type P = keyof Point;
type P = 'x' | 'y';
```
위 예시에서 아래 두줄은 같은 표현이다.  

key의 타입이 정해져 있다면, 그 타입을 대신 반환한다.
```ts
type Maplike = { [key: string]: boolean };
type M = keyof Maplike;
type M = string | number;
```
자바스크립트의 오브젝트는 언제나 string을 key로 받아 변환할 수 있기 때문에 string이 포함된다는 것은 특이할만한 점이다.  

### Typeof Type Operator
`typeof` 연산자는 변수를 받아 그 변수의 타입을 반환한다.
```ts
let s = "hello";
let n: typeof s;
let n: string;
```
`typeof s`는 `string`과 같기 때문에 위 예시의 아래 두 줄은 같은 표현이다.

#### ReturnType<T>
`typeof`는 하나만으로는 그렇게 유용하지 않다. 하지만 `ReturnType<T>`와 같은 타입과 결합하면 더 유용하게 쓸 수 있다.
```ts
function fn() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof fn>;
type P = {
  x: number;
  y: number
}
```

타입스크립트는 의도적으로 `typeof`의 사용을 제한하고 있는데, 그 중 하나는 다음과 같다:
```ts
// Meant to use = ReturnType<typeof msgbox>
let shouldContinue: typeof msgbox("Are you sure you want to continue?");
```
typeof는 변수 이름과 같은 식별자나 프로퍼티에만 사용이 가능하며, 따라서 위와 같은 코드는 에러를 발생시킨다.

### Indexed Access Types
오브젝트 타입의 프로퍼티의 타입을 얻기 위해 인덱스로 접근할 수 있다.
```ts
type Person = { age: number; name: string; alive: boolean};
type Age = Person["age"];
type Age = number;
```
찾고 싶은 프로퍼티의 이름을 키로 인덱싱하면 된다.  

이 기능과 `keyof`를 결합할 수도 있다.
```ts
type PersonPart = Person[keyof Person];
type PersonPart = string | number | boolean;
```

또한, 배열과 결합하면 배열의 원소의 타입을 가져올 수 있다.
```ts
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 }
];
type Person = typeof MyArray[number];
```

이 방법을 사용할 때 키로 들어가는 것은 엄연히 타입이기 때문에 변수가 들어갈 수 없다.
```ts
const key = "age";
type Age = Person[key]; // Throws error
```
위 코드는 아래와 같이 변경되어야한다.
```ts
type key = "age";
type Age = Person[key];
```

### Conditional Types
타입도 일반 변수처럼 조건을 통해 변경시킬 수 있다.
```ts
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
type Example1 = number
 
type Example2 = RegExp extends Animal ? number : string;
type Example2 = string
```
위와 같은 형식이며, 정확히는 다음과 같이 표현할 수 있다.
```ts
type Type = SomeType extends OtherType ? TrueType : FalseType
```
`Type`은 `SomeType`이 `OtherType`의 프로퍼티를 가지고 있다면 `TrueType`이 되며, 아니라면 `FalseType`이 된다.  

이를 이용한 유용한 예시를 다음과 같이 소개하고 있다:
```ts
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}
```
위 `createLabel` 함수는 파라미터로 `number` 혹은 `string`을 받아 `number` 라면 `IdLabel`, `string` 이라면 `NameLabel`을 반환한다.

##### Conditional Type Constraints
이를 이용하면 제약조건을 만들 수도 있다.
```ts
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
```
`T`가 message라는 프로퍼티를 가지고 있는지 확인하고, 그렇다면 그 message의 타입을, 아니라면 `never`를 반환한다.

##### Infer
infer는 타입 조건절에서 타입의 추론 및 대입을 해주는 연산자로, `ReturnType<T>`에서 그 활용을 잘 볼 수 있다.
```ts
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```
위는 ReturnType이 어떻게 정의되어있는지를 보여준다.
`T`는 함수 모양의 타입을 받으며, `infer R`을 통해서 R이 무엇인지를 조건절 내에서 추론하고 있다.  
이후 참인 분기에서는 이 추론한 `R`을 사용하여 바로 반환한다.  

#### Distributive Conditional Types
만약 타입 조건절이 유니온 타입을 받게 되면, 각각의 타입에 대해 하나씩 적용된다.
```ts
type ToArray<T> = T extends any ? T[] : never;
type StrArrOrNumArr = ToArray<string | number>;
type StrArrOrNumArr = string[] | number[]
```
아래 두 줄은 같은 기능을 한다.

이 기능은 `[]`을 사용하여 피할 수 있다.
```ts
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;
type ArrOfStrOrNum = ToArrayNonDist<string | number>;
type ArrOfStrOrNum = (string | number)[]
```
위와 같은 예시라면, `ArrOfStrOrNum`은 `string`이나 `number`를 원소로 하는 튜플이 된다.  

### Mapped Types
오브젝트의 키 타입을 일일이 적고 싶지 않다면, 매핑된 타입을 사용할 수 있다.
```ts
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
}
const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
  horse: new Horse();
}
```
`keyof`와 함께 사용하여 제네릭 타입의 모든 프로퍼티의 타입을 바꿀 수도 있다.
```ts
type OptionsFlags<T> = {
  [P in keyof T]: boolean;
}
type Same<T> = {
  [P in keyof T]: T[P];
}
```
`Same<T>`는 제네릭으로 받은 `T`를 그대로 반환한다.

##### Mapping modifiers
매핑 시 `readonly` 및 `?`를 수정자로 사용할 수 있으며, 앞에 `-`나 `+`를 붙여 수정자를 추가하거나 제거할 수 있다.  
```ts
type CreateMutable<T> = {
  -readonly [P in keyof T]: T[P];
};
 
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
 
type UnlockedAccount = CreateMutable<LockedAccount>;
type UnlockedAccount = {
    id: string;
    name: string;
}
```
#### Key Remapping via `as`
매핑 시 `as`를 사용하여 타입을 변경할 수 있다.
```ts
type RemoveKindField<T> = {
    [P in keyof T as Exclude<P, "kind">]: T[P]
};
 
interface Circle {
    kind: "circle";
    radius: number;
}
 
type KindlessCircle = RemoveKindField<Circle>;
type KindlessCircle = {
    radius: number;
}
```

### Template Literal Types
template literal string과 비슷하게, 타입을 템플릿에 따라 정할 수 있다.  
```ts
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
 
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"
```

## Type Challenges
### 4 - Pick
`T`에서 `K` 프로퍼티만 선택해 새로운 오브젝트 타입을 만드는 내장 제네릭 `Pick<T, K>`을 이를 사용하지 않고 구현하세요.
```ts
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};
```
- K는 T의 프로퍼티여야 하므로 `extends keyof` 사용
- `[key in K]`로 유니온을 해체하고, `T[key]`로 필터링 한다.

###  14 - First of Array
배열(튜플) `T`를 받아 첫 원소의 타입을 반환하는 제네릭 `First<T>`를 구현하세요.
```ts
type First<T extends any[]> = T extends [] ? never : T[0];
```
- `any[]`는 배열 혹은 튜플을 대표한다.
- `T[0]`로 첫 번쨰 프로퍼티의 타입을 반환할 수 있다.
- 빈 배열을 넣는 경우가 있어서 조건절은 추가

### 189 - Awaited
Promise와 같은 타입에 감싸인 타입이 있을 때, 안에 감싸인 타입이 무엇인지 어떻게 알 수 있을까요?
```ts
type MyAwaited<T extends { then(onfulfuilled: unknown, ...args: unknown[]): any; }> = T extends { then(onfulfilled: infer F, ...args: infer _1): unknown; } ? 
  F extends (arg: infer K, args: infer _2) => unknown ? 
    Awaited<K> : 
  never : 
'whatever';
```
- 내장 제네릭인 `Awaited<T>`를 거의 붙여 넣었다. 바뀐것은 T가 thenable인지 확인하는 것 뿐.
- `infer`를 사용해서 중첩된 타입까지 접근할 수 있다는 점을 확인할 수 있다.
- `T`의 `onfulfiled` 함수를 `F`로 지정하여 풀어해친다. thenable한지는 처음에 확인했기 때문에 상관 없지만, inferring 하기 위해 필요하다.
- `F`가 함수라면 그 첫번째 인수를 `Awaited<T>`로 보내서 최종 결과를 받고, 아니라면 `never`를 반환하여 유니온에 포함되지 않도록 한다.

### 533 - Concat
JavaScript의 `Array.concat` 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, 인수를 왼쪽부터 concat한 새로운 배열을 반환해야 합니다.
```ts
type Concat<T extends readonly any[], U extends readonly any[]> = [
  ...T, ...U
]
```
- 튜플을 ...으로 합칠 수 있다는 것만 알면 괸장히 쉬운 문제지만, 모르면 굉장히 어렵다.
- ...은 타입의 경우 튜플에만 적용 가능하고, 오브젝트에는 적용하지 못한다.