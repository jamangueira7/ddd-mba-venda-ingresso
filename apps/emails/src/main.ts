import { NestFactory } from '@nestjs/core';
import { EmailsModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(EmailsModule);
  await app.listen(3001);
}
bootstrap();
