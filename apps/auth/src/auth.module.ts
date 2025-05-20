import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from '@app/database';
import { ConfigModule } from '@app/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@app/database/schema/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@app/passport';
import { AuthRepository } from './auth.repository';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'libs/common/guards/jwt.guard';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthRepository,
    { provide: APP_GUARD, useClass: JwtAuthGuard },
  ],
})
export class AuthModule {}
