import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // SWAGGER 관련 설정
  const config = new DocumentBuilder()
    .setTitle('sample Api')
    .setDescription('')
    .setVersion('1.0')
    .addTag('')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'accesskey',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swag', app, document); // swagger end point url: /docs

  await app.listen(9101);
}
bootstrap();
