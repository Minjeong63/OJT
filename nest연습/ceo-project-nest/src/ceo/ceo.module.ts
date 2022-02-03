import { CeoService } from './ceo.service';
import { CeoController } from './ceo.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [CeoController],
    providers: [CeoService],
})
export class CeoModule {}
