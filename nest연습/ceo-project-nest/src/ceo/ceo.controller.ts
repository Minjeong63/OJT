import { CreateCeoDto } from './dto/create-ceo.dto';
import { Ceo } from './ceo.model';
import { CeoService } from './ceo.service';
import { Body, Controller, Get, Post, Param } from '@nestjs/common';

@Controller('ceo')
export class CeoController {
    constructor(private ceoService: CeoService){}

    @Get('/')
    getCeo(): Ceo[] {
        return this.ceoService.getCeo()
    }

    @Post('/')
    createCeo(@Body() createCeoDto: CreateCeoDto): Ceo {
        return this.ceoService.createCeo(createCeoDto);
    }

    @Get("/:name")
    getOneName(@Param('name') name: string): Ceo {
        return this.ceoService.getOneName(name)
    }
}
