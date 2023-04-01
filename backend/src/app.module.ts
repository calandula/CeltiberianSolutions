import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres-db',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'users',
      entities: [User],
      migrationsRun: false,
      logging: true,
      migrationsTableName: "migration",
      migrations: [__dirname + '/migration/**/*.ts', __dirname + '/migration/**/*.js'],
      synchronize: true,
  }),
    UsersModule,
  ],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
