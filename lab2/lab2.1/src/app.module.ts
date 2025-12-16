import { Module } from '@nestjs/common';
import { DatasourceModule } from './datasource/datasource.module';
import { RentersModule } from './renters/renters.module';
import { EquipmentModule } from './equipment/equipment.module';
import { RentalsModule } from './rentals/rentals.module';

@Module({
  imports: [
    DatasourceModule,
    RentersModule,
    EquipmentModule,
    RentalsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}