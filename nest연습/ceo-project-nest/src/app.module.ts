import { Module } from '@nestjs/common';
import { CeoModule } from './ceo/ceo.module';

@Module({
  imports: [CeoModule, ],
  providers: [],
})
export class AppModule {}
