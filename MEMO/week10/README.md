## sprint 2 project를 타입스크립트로 마이그레이션하며 느낀 주의할 점
### express.Request의 타입
```ts
interface Request<P = ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = QueryString.ParsedQs, Locals extends Record<string, any> = Record<string, any>>
```
`express.Request`는 express에서 정의한 Request의 타입으로, 제네릭으로 4가지 타입을 받는다.  
첫번째로 req.params의 타입, 두번째로 res.body의 타입, 세번째로 req.body의 타입, 네 번쨰로 req.query의 타입을 입력해줄 수 있다.  
여기서 ReqBody의 경우 정의를 해주지 않으면 자동 완성 기능이 인식하지 않기 때문에 개발의 편의를 위해 해주었으며, 나머지도 가독성을 위해 일단은 작성해주었다.  
```ts
export async function createUser (req: express.Request<{}, {}, {
  email: string,
  username: string,
  password: string
}, {}>, res: express.Response)
```
위와 같이, 각 타입은 인터페이스 형식으로 작성하며, 사용하지 않는 곳의 타입은 `{}`로 두면 건너 뛸 수 있다.  

### express.Request에 새로운 멤버 정의하기
클라이언트의 쿠키로부터 받은 유저 정보를 req의 멤버로 계속 들고 다닐 때, 자바스크립트의 경우 어떤 오브젝트에 멤버를 추가하기 위해서 그냥 대입만 하면 되므로 굉장히 쉽다.  
하지만 타입스크립트의 경우 any 타입이 아니라면 각각의 오브젝트는 그 구조가 정해져 있으며, 특히 `express.Request`처럼 외부 라이브러리에서 정의된 오브젝트라면 추가적인 조치 없이는 구조를 수정할 수도 없다.  
#### .d.ts 파일
npm으로 다운 받은 모듈을 살펴보다 보면 `index.d.ts`와 같이 확장자가 .d.ts로 되어있는 파일을 발견할 수 있다.  
이러한 확장자의 파일들은 평범한 타입스크립트 파일이 아닌, .ts 파일의 구조를 설정하는 정의(declaration) 파일이다. c언어를 알고 있는 사람이라면, 헤더 파일과 그 기능이 같다고 이해해도 된다. 이 파일은 보통 자바스크립트 파일을 타입스크립트처럼 사용하기 위한 구조 정의 파일로 사용된다.  
#### Declaration merging [참조](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)
그래서 `express.Request`의 구조를 바꿀려면 모듈의 .d.ts 파일을 수정해야한다고 생각할 수도 있지만, 모듈을 건드리지 않고도 정의를 추가할 수 있는 방법이 있고, 그것을 Declaration merging이라 한다.  
Declaration merging은 크게 인터페이스와 네임스페이스에 적용할 수 있다.  
```ts
import { DecodedToken } from 'token'

declare module 'express' {
  interface Request {
    token?: DecodedToken;
  }
}
```
위 예시는 프로젝트에 포함되어 있는 `types/express/index.d.ts` 파일이다.  
위와 같이 모듈과 인터페이스를 지정하고, 추가될 멤버를 정의한 다음,  
```json
{
  "compilerOptions": {
    "typeRoots": ["./types"]
  }
}
```
`tsconfig.json`에 위와 같이 파일이 위치하는 디렉토리를 포함시켜주면 타입스크립트 컴파일러에서 인식할 수 있으며, 자동 완성 기능에서도 인식한다.  

