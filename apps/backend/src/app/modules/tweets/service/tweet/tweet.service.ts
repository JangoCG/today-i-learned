import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDto } from '@today-i-learned/types';
import { Repository } from 'typeorm';
import { Tweet } from '../../model/Tweet';

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet)
    private tweetRepository: Repository<Tweet>
  ) {}

  findAll(): Promise<Tweet[]> {
    return this.tweetRepository.find();
  }

  findOne(id: number): Promise<Tweet> {
    return this.tweetRepository.findOneBy({ id });
  }

  async createOne(dto: CreateTweetDto) {
    try {
      return await this.tweetRepository.save({
        content: dto.tweetText,
        author: 'cengiz',
      });
    } catch (e) {
      console.error(e);
    }
  }
}
