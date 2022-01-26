import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: false,
    })],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}