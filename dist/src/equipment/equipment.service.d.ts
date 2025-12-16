import { SportsEquipment } from './entities/equipment.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
export declare class EquipmentService {
    private readonly datasourceService;
    constructor(datasourceService: DatasourceService);
    create(equipment: SportsEquipment): SportsEquipment;
    findAll(): SportsEquipment[];
    findOne(id: number): SportsEquipment | undefined;
    update(id: number, updatedEquipment: SportsEquipment): SportsEquipment | undefined;
    remove(id: number): boolean;
    findByType(type: string): SportsEquipment[];
}
