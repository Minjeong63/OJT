import { CreateCeoDto } from './dto/create-ceo.dto';
import { Ceo } from './ceo.model';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CeoService {
    private ceo: Ceo[] = [];
    
    getCeo(): Ceo[] {
        return this.ceo;
    }

    createCeo(createCeoDto: CreateCeoDto) {
        const name = createCeoDto.name;
        const CEO: Ceo = {
            name,
        }
        this.ceo.push(CEO);
        return CEO;
    }

    getOneName(name: string): Ceo {
        const ceoName = this.ceo.find(findCeo => findCeo.name === name);
        if (!ceoName) {
            throw new NotFoundException(`${name} is not found.`);
        }
        return ceoName;
    }
}
