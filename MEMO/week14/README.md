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
