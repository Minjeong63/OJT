import { UpdateMovieDto } from './dto/update-movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { get } from 'http';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}


    @Get()
    getAll() : Movie[] {
        return this.moviesService.getAll();
    }

    @Get("/:id")
    getOne(@Param('id') id: number): Movie {
        console.log(typeof id)
        return this.moviesService.getOne(id);
    }
    // url에 있는 id라는 parameter를 get하기 위해 @Param('id')라고 함
    // id라는 parameter를 id라는 argument에 저장하고 싶음

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch("/:id")
    patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
        this.moviesService.update(movieId, updateData);
    }


}
