import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //whitelist só salva as informacoes que o objeto do front tem que ter baseado no dto
  //createCourseDto se o objeto vier com mais propriedades do que o esperado, eu vou recusar esse payload do front
  //transforma o payload do front no tipo dto que vc ta usando
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }))
  await app.listen(3000);
}
bootstrap();
