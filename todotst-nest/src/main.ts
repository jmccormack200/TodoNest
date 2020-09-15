import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
      .setTitle('Todotst')
      .setDescription('A todo API written in Type script')
      .setVersion("1.0.0")
      .addTag("todos")
      .build();
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();