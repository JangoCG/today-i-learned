import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateTweetDto} from "@today-i-learned/types";
import {TweetService} from "../../service/tweet/tweet.service";


@Controller('tweets')
export class TweetController {

  constructor(private tweetService: TweetService) {
  }
  @Post()
  create(@Body() createTweetDto: CreateTweetDto) {
    console.log(createTweetDto)
    return this.tweetService.createOne(createTweetDto)
  }
}
