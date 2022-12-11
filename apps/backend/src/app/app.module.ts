import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TweetsModule} from "../tweets/tweets.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DataSource} from "typeorm";
import {Tweet} from "../tweets/model/Tweet";

@Module({
  imports: [TweetsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'twitter-db',
    entities: [Tweet],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  constructor(private dataSource: DataSource) {
  }
}

