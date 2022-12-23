import {Module} from '@nestjs/common';

import {TweetsModule} from './modules/tweets/tweets.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {DataSource} from 'typeorm';
import {Tweet} from './modules/tweets/model/Tweet';
import {ConfigModule} from '@nestjs/config';
import {UserModule} from './modules/user/user.module';
import {User} from './modules/user/model/User';
import {AuthModule} from "./modules/auth/auth.module";

@Module({
  imports: [
    TweetsModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'twitter-db',
      entities: [Tweet, User],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true, // with this flag the config module is accessible to all modules without importing it
      envFilePath: '.env',
    }),
    AuthModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
