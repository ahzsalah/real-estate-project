import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Agent } from './database/agent.entity';
import { Client } from './database/client.entity';
import { Property } from './database/property.entity';
import { Location } from './database/location.entity';
import { Sales } from './database/sales.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '5996',
      database: 'etherium',
      entities: [Agent, Client, Location, Property, Sales],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Agent, Client, Location, Property, Sales]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
