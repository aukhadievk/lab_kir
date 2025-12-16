import { EquipmentService } from './equipment.service';
import { SportsEquipment } from './entities/equipment.entity';
export declare class EquipmentController {
    private readonly equipmentService;
    constructor(equipmentService: EquipmentService);
    create(equipment: SportsEquipment): SportsEquipment;
    findAll(type?: string): SportsEquipment[];
    findOne(id: string): SportsEquipment;
    update(id: string, updatedEquipment: SportsEquipment): SportsEquipment;
    remove(id: string): {
        message: string;
    };
}
