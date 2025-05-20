import { NestFactory, Reflector } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { JwtAuthGuard } from 'libs/common/guards/jwt.guard';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector)); // 토큰 가드 기본 적용
  app.useGlobalPipes(new ValidationPipe()); // dto 타입 검증 기본 적용

  await app.listen(process.env.port ?? 3001);
}
bootstrap();
