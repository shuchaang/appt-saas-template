import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AuthMiddleware } from './jwt-auth/auth.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  app.use(new AuthMiddleware().use);
  const swagger = new DocumentBuilder()
    .setTitle('My Saas')
    .setDescription('The saas API description')
    .setVersion('1.0')
    .addTag('saas')
    .build();
  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('doc', app, document);
  await app.listen(3000);
}
bootstrap();
