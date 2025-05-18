import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '@app/config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseConfig } from './mongoose.config';

@Module({
  imports: [ConfigModule, MongooseModule.forRootAsync(mongooseConfig)],
  exports: [MongooseModule],
})
export class DatabaseModule {}
