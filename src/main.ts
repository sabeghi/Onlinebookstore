import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerConfig, swaggerCustomOptions } from './swagger/swagger.config';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document, swaggerCustomOptions);
  await app.listen(3000);
}
bootstrap();
