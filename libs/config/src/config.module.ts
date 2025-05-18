import { Module } from '@nestjs/common';
import { ConfigModule as _ConfigModule } from '@nestjs/config';
import configuration from './configuration';

@Module({
  imports: [
    _ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [configuration],
    }),
  ],
  exports: [_ConfigModule],
})
export class ConfigModule {}
