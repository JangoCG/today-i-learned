import {Module} from '@nestjs/common';
import {TweetController} from "./controller/tweet/tweet.controller";

@Module({controllers: [TweetController]})
export class TweetsModule {}
