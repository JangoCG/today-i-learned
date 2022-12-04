import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateTweetDto} from "@twitter-clone/types";


@Controller('tweet')
export class TweetController {

  @Post()
  create(@Body() createTweetDto: CreateTweetDto) {
    return "tweets work";
  }
}
