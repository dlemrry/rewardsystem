import { ConfigModule } from '@app/config';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';

export const mongooseConfig: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const username = configService.get<string>('database.username');
    const password = configService.get<string>('database.password');
    const port = configService.get<string>('database.port');
    const dbName = configService.get<string>('database.dbName');

    const uri = `mongodb://${username}:${password}@127.0.0.1:${port}/${dbName}`;

    return {
      uri,
      authSource: 'admin',
    };
  },
};
