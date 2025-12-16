import { Injectable } from '@nestjs/common';
import { Renter } from 'src/renters/entities/renter.entity';
import { SportsEquipment } from 'src/equipment/entities/equipment.entity';
import { Rental } from 'src/rentals/entities/rental.entity';

@Injectable()
export class DatasourceService {
  private renters: Renter[] = [];
  private equipment: SportsEquipment[] = [];
  private rentals: Rental[] = [];

  getRenters(): Renter[] {
    return this.renters;    
  }

  getEquipment(): SportsEquipment[] {
    return this.equipment;
  }

  getRentals(): Rental[] {
    return this.rentals;
  }
}