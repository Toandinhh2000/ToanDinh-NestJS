import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'test/dbConfig';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DrizzleModule } from './drizzle/drizzle.module';

@Module({
 import: [
  ConfigModule.forRoot({
    isGlobal: true,
   expandVariables: true,
  }),
  PropertyModule,
  TypeOrmModule.forRoot(pgConfig),
 ],
 imports: [UserModule, AuthModule, DrizzleModule]
})