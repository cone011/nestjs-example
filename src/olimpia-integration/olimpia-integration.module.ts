import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OlimpiaIntegrationService } from './olimpia-integration.service';
import { OlimpiaIntegrationController } from './olimpia-integration.controller';
import { ConfigurationModule } from 'src/configuration/configuration.module';

@Module({
  controllers: [OlimpiaIntegrationController],
  providers: [OlimpiaIntegrationService],
  imports: [ConfigurationModule, ConfigModule],
  exports: [OlimpiaIntegrationService],
})
export class OlimpiaIntegrationModule {}
