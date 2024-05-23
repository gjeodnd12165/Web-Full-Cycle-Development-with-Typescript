## 공식문서 보면서 nestjs 공부하기
### First steps
```cmd
$ npm i -g @nestjs/cli
```
nestjs는 cli로 동작하는 자동화 도구를 제공한다.  

```cmd
$ nest new [project name or directory]
```
nestjs의 템플릿을 생성할 수 있다.  

```cmd
$ npm run lint
$ npm run format
```
linting 및 autofix와 prettier를 사용한 formatting을 할 수 있다.

### Controllers
```cmd
$ nest g resource [name]
```
> @nestjs/cli를 이용해서 해당 resource에 대한 구조를 자동으로 만들 수 있다.

해당 명령어로 만드는 구조가 `nest new`로 만드는 구조와 다르지만, 이쪽이 더 자세해보이니 이쪽을 기준으로 봐야겠다.

#### Routing
```cmd
$ nest g controller [name]
```
> @nestjs/cli를 이용해서 controller를 자동으로 만들 수 있다.

##### 컨트롤러 및 요청 메소드 데코레이터
```ts
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```
`@controller('cats')` 데코레이터는 이 클래스가 컨트롤러임을 말해주고 있고,  
`@Get()` 데코레이터는 이 메소드가 GET request method에 대응한다는 것을 알려준다.

여기서 `findAll()` 메소드는 `GET /cats`요청이 올 때 실행된다.

만약 `@Get('breed')`라는 데코레이터를 사용했다면 `GET /cats/breed`요청이 올 때 실행된다.  

여기서 실행될 메소드의 이름은 완전히 임의로 지정할 수 있다.

##### 응답 방식
문서에서는 Standard 방식과 Library-specific한 방식을 알려주지만, Standard를 추천한다.  

Standard 방식은 메소드가 원시 타입을 반환할 때에는 그대로 반환하고, 아니라면 자동으로 JSON으로 변환해준다.  
또한, 응답 상태 코드는 POST를 제외하고는 언제나 200이며, POST는 201을 반환한다.  
하지만 핸들러에서 `@Httpcode(...)`데코레이터를 사용함으로써 상태 코드를 바꿀 수 있다.  

Library-specific한 방식은 `findAll(@Res() response)`와 같이 핸들러에 응답 객체를 주입하고, 이를 사용할 수 있다. express처럼 `response.status(200).send()`와 같이 사용할 수 있다.  

> `@Res()`와 `@Next()` 데코레이터를 사용할 경우 해당 경로에서 Standard 방식을 사용할 수 없다.

#### Request object
```ts
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
```
`@Req()` 데코레이터를 사용하여 핸들러에 request 객체를 주입할 수 있다.  

하지만 `@Body()`나 `@Query()` 같은 데코레이터도 존재하므로, `@Req()`는 사용할 일이 거의 없다고 한다.  

다음은 nestjs에서 제공하는 request object 데코레이터와 그에 상응하는 객체이다.  
|데코레이터|객체|
|--|--|
| `@Request()`, `@Req()` | `req`|
| `@Response()`, `@Res()` |	`res`|
| `@Next()` |	`next`|
| `@Session()` |`req.session`|
| `@Param(key?: string)` | `req.params` / `req.params[key]`|
| `@Body(key?: string)` |	`req.body` / `req.body[key]`|
| `@Query(key?: string)` | `req.query` / `req.query[key]`|
| `@Headers(name?: string)` | 	`req.headers` / `req.headers[name]`|
| `@Ip()` | `req.ip`|
| `@HostParam()` | `req.hosts`|

#### Resources
`@Get()`과 같이, `@Post()`, `@Put()`, `@Delete()`, `@Patch()`, `@Options()`, `@Head()` 같은 데코레이터를 지원하며, `@All()`로 모든 메소드에 대한 엔드포인트를 정의할 수 있다.  

#### Route wildcards
경로를 정할 때, `?`, `+`, `*`, `()`를 정규식처럼 사용할 수 있다.  
하지만 `-`와 `.`은 문자열로 인식한다.  

#### Status code
```ts
@Post()
@HttpCode(204)
create() {
  return 'This action adds a new cat';
}
```
핸들러에 `@HttpsCode(...)`를 사용하여 응답의 상태 코드를 정할 수 있다.  

하나의 핸들러가 조건에 따라 여러 상태 코드를 반환할 수도 있다. 그럴 때에는 `@Res()`를 사용하여 library-specific한 방법을 사용하라고 한다(에러의 경우 예외 발생시키기).  

#### Header
```ts
@Post()
@Header('Cache-Control', 'none')
create() {
  return 'This action adds a new cat';
}
```
`@Header(name, value)`로 응답에 커스텀 헤더를 넣을 수 있다.  

#### Redirection
```ts
@Get()
@Redirect('https://nestjs.com', 301)
```
`@Redirect(url, code)`로 리디렉션 핸들러를 만들 수 있다.  

#### Route parameters
```ts
@Get(':id')
findOne(@Param() params: any): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}
```
express와 비슷하게, `:`을 이용하여 파라미터를 나타낼 수 있고, 이 값은 `@Param()`로 꺼낼 수 있다.  

```ts
@Get(':id')
findOne(@Param('id') id: string): string {
  return `This action returns a #${id} cat`;
}
```
`@Param(property)`로 property를 지정할 수도 있다.  


#### Sub-Domain Routing
> 이 부분은 이론적으로는 알지만, 로컬에서 테스트하기가 어려워서 하지 않았다.
```ts
@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
```
`@Controller(options: { path, host })`로 서브 도메인에 대한 설정을 할 수 있다.

```ts
@Controller({ host: ':account.example.com' })
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}

```
path와 비슷하게, `:`로 호스트 파라미터를 나타낼 수 있고, `@HostParam(property)`로 구할 수 있다.  

#### Scopes
> 더 알 수 없는 파트. 멀티 스레딩이 되는 언어와 싱글 스레드인 nodejs 같의 차이에서 비롯된 무언가가 있는듯하다?

#### Asynchronicity
```ts
@Get()
async findAll(): Promise<any[]> {
  return [];
}
```
비동기 함수를 사용하려면 `Promise`를 반환해야한다.  

```ts
@Get()
findAll(): Observable<any[]> {
  return of([]);
}
```
RxJS의 observable streams도 지원한다고 한다.  

> Observable 오브젝트는 Observer가 구독해서 그 변화에 반응형으로 동작하게 하는 것 같다?  
ReactiveX 참조

#### Request payloads
```ts
// dto
export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}
```
```ts
// contoller
@Post()
async create(@Body() createCatDto: CreateCatDto) {
  return 'This action adds a new cat';
}
```
POST 요청의 Body에서 데이터를 가져오기 전에, 먼저 dto를 만드는 것이 좋다.  

dto를 만들 떄 인터페이스나 클래스를 사용할 수 있지만, 문서에서는 클래스를 추천한다.  

클래스는 컴파일 시에 개체로 남지만, 인터페이스는 사라지기 때문에 nestjs가 런타임에 참조할 수 없다.  
Pipe와 같은 기능이 런타임 참조로 추가적인 기능을 사용할 수 있다.  

#### handling errors
> 이에 해당하는 챕터가 따로 있고, 그 챕터도 이 챕터와 맞먹는 분량이므로 따로 봐야겠다.

#### Getting up and running
```ts
import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';

@Module({
  controllers: [CatsController],
})
export class AppModule {}
```
`app.module.ts` 같은 루트 모듈에 컨트롤러를 추가해주어야 기능한다. 

#### Library-specific approach
```ts
import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res() res: Response) {
     res.status(HttpStatus.OK).json([]);
  }
}
```
`@Res()`를 사용하여 Library-specific하게 만드는 예시이다.  
위에서는 express를 사용하였다.  

---

지금까지 본 바로는 Nestjs가 구조를 다 짜 놔서, 따로 구조에 대해 고민할 필요가 없어 보인다.  
: prettier, eslint가 같이 설치되어 코드의 일관성이 생기고, nest-cli를 사용하면 더 정형화된 코드를 짤 수 있다.

Library-specific한 방법을 남겨놓았다는 점이 마음에 든다.  

예시에서는 서비스를 따로 나누지 않았지만, 템플릿을 보면 나누는 구조로 되어 있어서 아무래도 기존 프로젝트를 바로 적용할 수 있지 않을까? DB에 대한 model을 어떻게 설정하는지 봐야겠다.  
: TypeORM과 Sequelize에 대한 예시가 존재.  

---

### Providers
의존성 주입이 되는 것이 프로바이더의 주요 아이디어라고 한다.
#### Services
```cmd
$ nest g service cats
```
@nestjs/cli를 이용하여 자동으로 서비스 구조를 만들 수 있다.
```ts
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
```
`@Injectable()`로 의존성 주입을 가능하게 하여 서비스에 해당하는 클래스를 생성하여 관리한다.

#### Dependency injection
```ts
constructor(private catsService: CatsService) {}
```
프로바이더를 클래스로 만들기 때문에, 컨트롤러의 생성자를 사용하여 의존성 주입을 구현할 수 있다.  

#### Scopes
프로바이더는 기본적으로 어플리케이션과 같은 생명 주기를 갖지만, request-scoped, 즉 한 요청 만큼의 생명 주기를 갖게할 수도 있다. 
|생명 주기|설명|
|--|--|
|`DEFAULT`|어플리케이션이 시작할 때 모든 싱글톤 프로바이더가 생성된다.|
|`REQUEST`|각 요청 당 새로운 프로바이더가 생성되며, 요청이 끝나면 가비지 콜렉팅 된다.|
|`TRANSIENT`|TRANSIENT 프로바이더는 컨슈머 간에 공유되지 않는다. 각 컨슈머는 새로운 인스턴스를 받는다.|

#### Custom providers
Nest는 제어 역전 컨테이너를 제공한다.  
커스텀 프로바이더를 사용하면 제어를 Nest framework에 맡기는 것이 아니라, AppModule에서 관리하도록할 수 있다.  

>> 제어 역전 및 커스텀 프로바이더에 대해서는 더 알아 보아야겠다.

#### Optional providers
```ts
import { Injectable, Optional, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
  constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}
}
```
`@Optional()`로 해당 프로바이더를 optional하게 만들 수 있다.  
이 경우 그 프로바이더가 존재하지 않더라도 에러가 발생하지 않는다.

#### Property-based injection
지금까지는 모두 생성자 기반 주입이었지만, 프로퍼티 기반 주입을 할 수도 있다.  
예를 들어, 최상위 클래스가 어떠한 프로바이더를 의존하고 있고, 그 클래스를 상속받는 하위 클래스가 다수 존재할 떄, 일일이 `super()`에 적는 대신 프로퍼티를 기반으로 주입하여 이를 생략할 수 있다.
```ts
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
  @Inject('HTTP_OPTIONS')
  private readonly httpClient: T;
}
```

하지만 문서에서는 해당 클래스가 어떠한 클래스에도 상속해주지 않는다면 클래스 기반 주입을 사용하는 것을 추천하고 있다.  

#### Provider registration
```ts
import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
```
생성한 프로바이더를 사용하려면 `@Module()`에 추가해주어야한다.  
