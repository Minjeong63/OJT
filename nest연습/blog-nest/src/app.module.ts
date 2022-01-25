import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}