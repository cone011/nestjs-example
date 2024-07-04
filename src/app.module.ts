import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OlimpiaIntegrationModule } from './olimpia-integration/olimpia-integration.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SeedModule } from './seed/seed.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),

    CommonModule,
    OlimpiaIntegrationModule,
    ConfigurationModule,
    AuthModule,
    SeedModule,
    ProductsModule,
  ],
})
export class AppModule {}
