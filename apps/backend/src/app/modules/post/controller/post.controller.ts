import { Body, Controller, Get, Post } from '@nestjs/common';
import { Public } from '../../auth/decorator/public.decorator';
import { User } from '../../user/decorator/user.decorator';
import { PostService } from '../service/post.service';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  @Public()
  async getPosts() {
    console.log('xd');
    return 'hi';
  }

  @Post()
  async createPost(@Body() markdown: string, @User() user) {
    this.postService.savePost(markdown, user);
  }
}
