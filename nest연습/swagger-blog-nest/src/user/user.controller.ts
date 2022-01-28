import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    async getUser() {
      return 'get user';
    }
  
    @Post()
    async createUser() {
      return 'create user';
    }
  
    @Put()
    async updateUser() {
      return 'update user';
    }
  
    @Delete()
    async deleteUser() {
      return 'delete user';
    }
  
  
}
