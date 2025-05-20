import { Module } from '@nestjs/common';
import { PassportService } from './passport.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@app/config';
import { ConfigService } from '@nestjs/config';
import { PassportModule as _PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.access.strategy';

@Module({
  imports: [
    _PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('jwtSecret'),
      }),
    }),
  ],
  providers: [PassportService, JwtStrategy],
  exports: [PassportService],
})
export class PassportModule {}
