import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { DatabaseModule } from '@app/database';
import { ConfigModule } from '@app/config';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [ConfigModule, DatabaseModule],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
