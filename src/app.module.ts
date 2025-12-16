// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentersModule } from './renters/renters.module';
import { EquipmentModule } from './equipment/equipment.module';
import { RentalsModule } from './rentals/rentals.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'database.sqlite', // Файл БД в папке проекта
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Автоматически создает таблицы
      logging: true,
    }),
    RentersModule,
    EquipmentModule,
    RentalsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}