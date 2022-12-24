import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../model/Post';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>
  ) {}

  savePost(markdown: string, author: string) {
    return this.postRepository.save({ markdown, author });
  }

  findAll() {
    return this.postRepository.find();
  }
}
