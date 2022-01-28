import { UpdateMovieDto } from './dto/update-movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { get } from 'http';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('movies')
@ApiTags("영화 관리")
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}


    @Get()
    @ApiOperation({ summary : '영화목록 조회', description: '영화 전체 목록을 조회함'})
    getAll() : Movie[] {
        return this.moviesService.getAll();
    }

    @Get("/:id")
    @ApiOperation({ summary : '특정아이디 영화목록 조회', description: '특정 아이디에 해당하는 영화 목록을 조회함'})
    getOne(@Param('id') id: number): Movie {
        console.log(typeof id)
        return this.moviesService.getOne(id);
    }
    // url에 있는 id라는 parameter를 get하기 위해 @Param('id')라고 함
    // id라는 parameter를 id라는 argument에 저장하고 싶음

    @Post()
    @ApiOperation({ summary : '영화 생성', description: '영화 목록을 생성함'})
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
