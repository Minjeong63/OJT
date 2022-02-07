import { Movie } from './../schemas/movie.schema';
import { MoviesService } from './movies.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesController } from './movies.controller';

@Module({
    imports: [MongooseModule.forFeature([{title: Movie.title, schema: MovieSchema}])]
    controllers: [MoviesController],
    providers: [MoviesService],
})
export class MoviesModule {}
