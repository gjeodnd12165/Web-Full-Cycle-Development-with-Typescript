## NestJS에 Sequelize 적용하기 [참조](https://docs.nestjs.com/techniques/database#sequelize-integration)
NestJS는 Sequlize Integration을 위해 `@nestjs/sequelize` 모듈을 제공한다.  
이에 더불어, 추가 데코레이터를 지월하는 `sequelize-typescript` 모듈을 같이 활용하기를 추천하고 있다.  
```cmd
$ npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
$ npm install --save-dev @types/sequelize
```
```ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      models: [],
    }),
  ],
})
export class AppModule {}
```
설치 후, AppModule에 `SequelizeModule`을 import하여 sequelize와의 연결을 준비한다.  
```ts
import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize) {}
}

```
모듈에 import하고 나면, 프로젝트 전체에 걸져 Sequelize 객체를 주입할 수 있게 된다.  
### Models
```ts
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
```
`sequelize-typescript`를 사용하여 sequelize의 모델을 작성할 수 있다.  
```ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      models: [User],
    }),
  ],
})
export class AppModule {}
```
```ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
```
생성한 모델을 AppModule과 UsersModule에 등록해야 사용할 수 있다.  
```ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
}
```
서비스 등에서 사용하기 위해서는 `@InjectModel()`로 주입해주어야한다.  

### Relations
```ts
import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Photo } from '../photos/photo.model';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(() => Photo)
  photos: Photo[];
}
```
`@HasOne()`, `@BelongsTo()`, `@HasMany()`, `@BelongsToMany()`로 테이블 간의 관계를 설정할 수 있다.  

### Auto-load models
```ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
```
`autoLoadModels`와 `synchronize` 옵션을 모두 true로 하면 각 module의 `forFeature()`로 등록되어 있는 모델들을 자동으로 AppModule에 등록해준다.  

### Sequelize Transactions
```ts
async createMany() {
  try {
    await this.sequelize.transaction(async t => {
      const transactionHost = { transaction: t };

      await this.userModel.create(
          { firstName: 'Abraham', lastName: 'Lincoln' },
          transactionHost,
      );
      await this.userModel.create(
          { firstName: 'John', lastName: 'Boothe' },
          transactionHost,
      );
    });
  } catch (err) {
    // Transaction has been rolled back
    // err is whatever rejected the promise chain returned to the transaction callback
  }
}
```
트랜잭션을 생성할 수 있다.  

## NestJS의 Pipe [참조](https://docs.nestjs.com/pipes)
파이프는 `@Injecable()` 데코레이터로 감싸진 클래스이다.  

파이프의 주된 용도는 두 가지이다:
- transformation: 입력된 데이터를 다른 모양으로 바꾸기 (e.g. string to integer)
- validation: 입력된 데이터를 검증하고, 맞으면 통과, 아니면 예외 처리  

두 경우 모두, 파이프는 컨트롤러의 핸들러가 실행되기 전에 실행된다.  
> 파이프에서 예외를 발생시킬 때에도, 예외 레이어에서 다루는 예외를 발생기키기 때문에, 결론적으로 예외가 발생하면 **어떠한 메소드도 실행되지 않는다**.

### Built-in pipes
- `ValidationPipe`
- `ParseIntPipe`
- `ParseFloatPipe`
- `ParseBoolPipe`
- `ParseArrayPipe`
- `ParseUUIDPipe`
- `ParseEnumPipe`
- `DefaultValuePipe`
- `ParseFilePipe`

NestJS는 9가지의 내장 파이프를 제공한다.  

### Binding pipes
```ts
@Get(':id')
async findOne(@Param('id', ParseIntPipe) id: number) {
  return this.catsService.findOne(id);
}
```
`@Param()` 등의 데코레이터의 두 번째 파라미터로 파이프를 넣어 해당 값에 대해 파이프를 사용할 수 있다.  

```ts
@Get(':id')
async findOne(
  @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
  id: number,
) {
  return this.catsService.findOne(id);
}
```
첫 번째 예시에서는 클래스를 넘겨주어서 프레임워크에 인스턴스 생성을 맡겼는데, 그 대신 인스턴스를 넘겨주면서 옵션을 설정할 수도 있다.  
```ts
@Get(':uuid')
async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
  return this.catsService.findOne(uuid);
}
```
이런 `Parse*Pipe`들은 모두 비슷하게 동작한다.
> `ParseUUID()` 같은 경우, 옵션으로 UUID의 버전을 선택할 수 있다.  

### Custom pipes
```ts
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
```
커스텀 파이프를 만들려면 클래스가 `PipeTransform` 인터페이스를 구현하도록 하면 된다.  
> `PipeTransform<T, R>`의 제네릭인 T는 파이프에 입력하는 값(value)의 타입을 나타내고, R은 출력되는 값인 transform의 반환값의 타입을 나타낸다.  

`transform()`에는 두가지 매개변수가 있다.  
- `value`
- `metadata`

value는 파이프에 입력되는 값이며, metadata는 현재 처리되는 값의 메타데이터이다.  
metadata의 형태는 다음과 같다:
```ts
export interface ArgumentMetadata {
  type: 'body' | 'query' | 'param' | 'custom';
  metatype?: Type<unknown>;
  data?: string;
}
```
- `type`: 데이터가 `@Body()`, `@Query()`, `@Param()`, 혹은 커스텀 파라미터 중 무엇인지를 나타낸다.  
- `metatype`: 데이터의 타입을 타나낸다. (타입을 명시하지 않았거나, vanilla js를 사용 중이라면 undefined가 된다.)
- `data`: 데코레이터에 넘긴 문자열. 예를 들어, `@Body('string')`에서는 `'string'`이다.  

> 타입스크립트의 인터페이스는 JS로 변환하면 사라지기 때문에, 파라미터의 타입이 클래스가 아니라 인터페이스로 정의되어있을 경우, `metatype`이 `Object`가 된다.  

### Schema based validation
validation을 하기 위해 다음과 같은 방법을 쓸 수도 있다:
- 핸들러 안에서 처리: SRP를 위반하기 때문에 이상적이지 않다.
- validator class 사용하기: 매 메소드의 시작마다 불러와야한다.
- 미들웨어: 미들웨어는 실행 컨텍스트를 알지 못하기 때문에 validation을 위한 보편적인 미들웨어를 만들 수 없다고 한다.

그렇기 때문에 validation을 위해 pipe를 사용한다.

### Object schema validation
```cmd
$ npm install --save zod
```
문서에서는 zod라는 라이브러리를 사용하는 것을 권장한다.  

```ts
import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ZodSchema  } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      throw new BadRequestException('Validation failed');
    }
  }
}

```
ZodSchema를 주입하고, 이 스키마를 기반으로 파싱 validation을 진행한다.  
이러면 스키마를 주입받기 때문에 스키마에 독립적이게 된다.  

### Binding validation pipes
```ts
import { z } from 'zod';

export const createCatSchema = z
  .object({
    name: z.string(),
    age: z.number(),
    breed: z.string(),
  })
  .required();

export type CreateCatDto = z.infer<typeof createCatSchema>;
```
```ts
@Post()
@UsePipes(new ZodValidationPipe(createCatSchema))
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```
`@UsePipes()`로 커스텀 파이프를 사용할 수 있다.  
> `zod`를 사용하려면 `tsconfig.json`에서 `strictNullChecks`가 켜져있어야한다.  

### Class validator
```cmd
$ npm i --save class-validator class-transformer
```
클래스로 validation을 할 수도 있다.  

```ts
import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}
```
dto 생성 시에, 데코레이터를 달면 validation에 사용할 수 있게 된다.  

```ts
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
```
여기서 주목할 것들은 다음과 같다:
- 파이프를 비동기로 만들 수 있다.  
- `metatype`을 비구조화로 꺼내 쓴다.
- `toValidate()`에서는 native JS 타입이라면 데코레이터가 있을 수 없기 때문에 이들에 대해서는 validation을 건너뛰게하고 있다.  
- `class-transform`의 `plainToInstance`를 사용하여 타입을 달아준다.  
네트워크 요청을 역직렬화한 객체에는 타입에 대한 정보가 없기 때문에 DTO에 달아준 데코레이터로 타입을 달아줘야한다.  
- 위에서 말한것처럼, 에러를 발생시키거나 받은 데이터를 그대로 반환한다.  


> `ValidationPipe`는 여기서 만든 것들보다 더 많은 옵션을 제공하기 때문에 이런 파이프를 직접 만들 필요는 없지만, 커스텀 파이프를 만드는 방법을 보여주기 위해 이러한 것들을 만들었다고 한다.


