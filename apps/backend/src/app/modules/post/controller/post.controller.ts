import { Body, Controller, Get, Post } from '@nestjs/common';
import { Public } from '../../auth/decorator/public.decorator';
import { User } from '../../user/decorator/user.decorator';
import { GoogleUser } from '../../user/model/GoogleUser';
import { PostService } from '../service/post.service';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  @Public()
  getPosts() {
    console.log('xd');
    return this.postService.findAll();
  }

  @Post()
  createPost(@Body('markdown') markdown: string, @User() user: GoogleUser) {
    return this.postService.savePost(markdown, user.name);
  }
}
