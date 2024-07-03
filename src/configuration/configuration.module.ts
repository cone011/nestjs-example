import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AxiosAdapter } from './adapters/axios.adapter';
@Module({
  providers: [AxiosAdapter],
  exports: [AxiosAdapter],
  imports: [ConfigModule],
})
export class ConfigurationModule {}
