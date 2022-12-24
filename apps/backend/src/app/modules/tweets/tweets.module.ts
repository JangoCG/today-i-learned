import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TweetController } from './controller/tweet/tweet.controller';
import { Tweet } from './model/Tweet';
import { TweetService } from './service/tweet/tweet.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tweet])],
  controllers: [TweetController],
  providers: [TweetService],
})
export class TweetsModule {}
