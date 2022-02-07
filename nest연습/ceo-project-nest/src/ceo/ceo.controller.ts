import { CreateCeoDto } from './dto/create-ceo.dto';
import { Ceo } from './ceo.model';
import { CeoService } from './ceo.service';
import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller('ceo')
export class CeoController {
    constructor(private ceoService: CeoService){}

    @Get('/')
    @ApiOperation({summary: "CEO 목록 전체 조회", description: "CEO 목록을 조회합니다."})
    getCeo(): Ceo[] {
        return this.ceoService.getCeo()
    }

    @Post('/')
    @ApiOperation({summary: "CEO 생성", description: "CEO를 생성합니다."})
    createCeo(@Body() createCeoDto: CreateCeoDto): Ceo {
        return this.ceoService.createCeo(createCeoDto);
    }


    @Get("/:id/:password")
    @ApiOperation({summary: "특정 id, password를 가진 CEO 조회", description: "id와 password 값이 같은 CEO를 조회합니다."})
    getNamePassword(
        @Param('id') id: string,
        @Param('password') password: string,

        ): Ceo {
            return this.ceoService.getNamePassword(id, password)
    }

    
    @Get("/:name")
    @ApiOperation({summary: "특정 CEO 조회", description: "name에 해당하는 CEO를 조회합니다."})
    getOneName(
        @Param('name') name: string,
        
        ): Ceo {
        return this.ceoService.getName(name)
    }


    @Get("/:name/:id")
    @ApiOperation({summary: "특정 id를 가진 CEO의 password 조회", description: "변수와 id 값이 같은 CEO의 비밀번호를 조회합니다."})
    getIdPassword(
        @Param('name') name: string,
        @Param('id') id: string,
        ): Ceo {
            return this.ceoService.getId(name, id)
    }

    
}

