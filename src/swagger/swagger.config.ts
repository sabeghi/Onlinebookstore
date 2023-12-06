// swagger.config.ts

import { DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Your API Title')
  .setDescription('Your API Description')
  .setVersion('1.0')
  .build();

export const swaggerCustomOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCss: '.swagger-ui .topbar { display: none }',
};
