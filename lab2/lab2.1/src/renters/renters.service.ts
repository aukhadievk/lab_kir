import { Injectable } from '@nestjs/common';
import { Renter } from './entities/renter.entity';
import { DatasourceService } from 'src/datasource/datasource.service';

@Injectable()
export class RentersService {
  constructor(private readonly datasourceService: DatasourceService) {}

  create(renter: Renter): Renter {
    const renters = this.datasourceService.getRenters();
    renters.push(renter);
    return renter;
  }

  findAll(): Renter[] {
    return this.datasourceService.getRenters();
  }

  findOne(id: number): Renter | undefined {
    return this.datasourceService.getRenters().find(renter => renter.id === id);
  }

  update(id: number, updatedRenter: Renter): Renter | undefined {
    const renters = this.datasourceService.getRenters();
    const index = renters.findIndex(renter => renter.id === id);
    
    if (index === -1) return undefined;
    
    renters[index] = updatedRenter;
    return renters[index];
  }

  remove(id: number): boolean {
    const renters = this.datasourceService.getRenters();
    const index = renters.findIndex(renter => renter.id === id);
    
    if (index === -1) return false;
    
    renters.splice(index, 1);
    return true;
  }
}