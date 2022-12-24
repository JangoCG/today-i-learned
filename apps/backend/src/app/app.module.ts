import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { TilAuthGuard } from './modules/auth/guard/til-auth.guard';
import { Post } from './modules/post/model/Post';
import { PostModule } from './modules/post/post.module';
import { Tweet } from './modules/tweets/model/Tweet';
import { TweetsModule } from './modules/tweets/tweets.module';
import { User } from './modules/user/model/User';
import { UserModule } from './modules/user/user.module';

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
      entities: [Tweet, User, Post],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true, // with this flag the config module is accessible to all modules without importing it
      envFilePath: '.env',
    }),
    AuthModule,
    PostModule,
  ],
  // Enable Global guard
  providers: [
    {
      provide: APP_GUARD,
      useClass: TilAuthGuard,
    },
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
