import { Injectable } from '@nestjs/common';
import { SportsEquipment } from './entities/equipment.entity';
import { DatasourceService } from 'src/datasource/datasource.service';

@Injectable()
export class EquipmentService {
  constructor(private readonly datasourceService: DatasourceService) {}

  create(equipment: SportsEquipment): SportsEquipment {
    const equipments = this.datasourceService.getEquipment();
    equipments.push(equipment);
    return equipment;
  }

  findAll(): SportsEquipment[] {
    return this.datasourceService.getEquipment();
  }

  findOne(id: number): SportsEquipment | undefined {
    return this.datasourceService.getEquipment().find(eq => eq.id === id);
  }

  update(id: number, updatedEquipment: SportsEquipment): SportsEquipment | undefined {
    const equipments = this.datasourceService.getEquipment();
    const index = equipments.findIndex(eq => eq.id === id);
    
    if (index === -1) return undefined;
    
    equipments[index] = updatedEquipment;
    return equipments[index];
  }

  remove(id: number): boolean {
    const equipments = this.datasourceService.getEquipment();
    const index = equipments.findIndex(eq => eq.id === id);
    
    if (index === -1) return false;
    
    equipments.splice(index, 1);
    return true;
  }

  // Дополнительный метод: поиск по типу
  findByType(type: string): SportsEquipment[] {
    return this.datasourceService.getEquipment()
      .filter(eq => eq.type === type && eq.isAvailable);
  }
}