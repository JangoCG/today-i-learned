import { PostDto } from '@today-i-learned/types';
import { httpClient } from '../utils/http-client/axios';

export const createPost = (markdown: string): Promise<PostDto> => {
  return httpClient.post('/posts', { markdown: markdown });
};

export const getPosts = (): Promise<PostDto> => {
  return httpClient.get('/posts').then((res) => res.data);
};
