import { Renter } from 'src/renters/entities/renter.entity';
import { SportsEquipment } from 'src/equipment/entities/equipment.entity';
import { Rental } from 'src/rentals/entities/rental.entity';
export declare class DatasourceService {
    private renters;
    private equipment;
    private rentals;
    getRenters(): Renter[];
    getEquipment(): SportsEquipment[];
    getRentals(): Rental[];
}
