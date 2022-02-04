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
        const { name, id, password } = createCeoDto;
        const CEO: Ceo = {
            name,
            id,
            password
        }
        this.ceo.push(CEO);
        return CEO;
    }

    getNamePassword(id: string, password: string): Ceo {
        const found = this.ceo.find((board) => board.password === password && board.id === id);

        if (!found) {
            throw new NotFoundException(`${id} & ${password} is not found.`);
        }
        return found
    }

    getName(name: string, id: string): Ceo {
        const found = this.ceo.find((ceo) => ceo.name === name)

        if(!found) {
            throw new NotFoundException(`Can't find Ceo with ${name}`);
        }
        return found

    }
}
