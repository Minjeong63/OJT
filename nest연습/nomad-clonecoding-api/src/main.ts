import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
    // whitelist : true로 설정하면 유효성 검사기는 validation decorator(IsString, IsNumber etc)를 사용하지 않는 속성의 유효성 검사 (반환 된) 개체를 제거
    // forbidNonWhitelisted : true로 설정하면 화이트리스트에 없는 property validator를 제거하는 대신 예외가 발생
    // transform : 유저들이 보낸 거를 우리가 원하는 실제 타입으로 변환해줌
  )
  await app.listen(9102);
}
bootstrap();
