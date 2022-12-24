import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GoogleUser } from '../../user/model/GoogleUser';
import { Post } from '../model/Post';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>
  ) {}

  savePost(post: string, user: GoogleUser) {
    console.log(user);
    // this.userRepository.save(post);
  }
}
