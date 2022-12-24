import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateTweetDto } from '@today-i-learned/types';
import { TweetService } from '../../service/tweet/tweet.service';
import { TilAuthGuard } from '../../../auth/guard/til-auth.guard';

@Controller('tweets')
export class TweetController {
  constructor(private tweetService: TweetService) {}
  @Post()
  @UseGuards(TilAuthGuard)
  create(@Body() createTweetDto: CreateTweetDto) {
    console.log(createTweetDto);
    return this.tweetService.createOne(createTweetDto);
  }
}
