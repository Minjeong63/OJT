import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('post')
export class PostController {
  @Get()
  async getPost() {
    return 'get post';
  }

  @Post()
  async createPost() {
    return 'create post';
  }

  @Put()
  async updatePost() {
    return 'update post';
  }

  @Delete()
  async deletePost() {
    return 'delete post';
  }
}

