import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MongooseModule.forRoot("mongodb://172.30.1.13:27017"), MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

