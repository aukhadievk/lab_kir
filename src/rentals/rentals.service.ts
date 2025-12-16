import { Injectable } from '@nestjs/common';
import { Rental } from './entities/rental.entity';
import { DatasourceService } from 'src/datasource/datasource.service';

@Injectable()
export class RentalsService {
  constructor(private readonly datasourceService: DatasourceService) {}

  create(rental: Rental): Rental {
    const rentals = this.datasourceService.getRentals();
    
    // Проверка доступности инвентаря
    const equipment = this.datasourceService.getEquipment()
      .find(eq => eq.id === rental.equipmentId);
    
    if (equipment && !equipment.isAvailable) {
      throw new Error('Инвентарь недоступен для аренды');
    }
    
    // Помечаем инвентарь как занятый
    if (equipment) {
      equipment.isAvailable = false;
    }
    
    // Расчет стоимости
    const equipmentRate = equipment?.hourlyRate || 0;
    rental.totalCost = equipmentRate * rental.hours;
    
    rentals.push(rental);
    return rental;
  }

  findAll(): Rental[] {
    return this.datasourceService.getRentals();
  }

  findOne(id: number): Rental | undefined {
    return this.datasourceService.getRentals().find(rental => rental.id === id);
  }

  update(id: number, updatedRental: Rental): Rental | undefined {
    const rentals = this.datasourceService.getRentals();
    const index = rentals.findIndex(rental => rental.id === id);
    
    if (index === -1) return undefined;
    
    rentals[index] = updatedRental;
    return rentals[index];
  }

  remove(id: number): boolean {
    const rentals = this.datasourceService.getRentals();
    const index = rentals.findIndex(rental => rental.id === id);
    
    if (index === -1) return false;
    
    // При удалении аренды освобождаем инвентарь
    const rental = rentals[index];
    const equipment = this.datasourceService.getEquipment()
      .find(eq => eq.id === rental.equipmentId);
    
    if (equipment) {
      equipment.isAvailable = true;
    }
    
    rentals.splice(index, 1);
    return true;
  }

  // Дополнительные методы
  findByRenter(renterId: number): Rental[] {
    return this.datasourceService.getRentals()
      .filter(rental => rental.renterId === renterId);
  }

  completeRental(id: number): Rental | undefined {
    const rental = this.findOne(id);
    if (!rental) return undefined;
    
    rental.status = 'completed';
    
    // Освобождаем инвентарь
    const equipment = this.datasourceService.getEquipment()
      .find(eq => eq.id === rental.equipmentId);
    
    if (equipment) {
      equipment.isAvailable = true;
    }
    
    return rental;
  }
}