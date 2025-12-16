import { RentersService } from './renters.service';
import { CreateRenterDto } from './dto/create-renter.dto';
import { UpdateRenterDto } from './dto/update-renter.dto';
export declare class RentersController {
    private readonly rentersService;
    constructor(rentersService: RentersService);
    create(createRenterDto: CreateRenterDto): Promise<import("./entities/renter.entity").Renter>;
    findAll(): Promise<import("./entities/renter.entity").Renter[]>;
    findIncomplete(): Promise<import("./dto/incomplete-renter.dto").IncompleteRenterDto[]>;
    findOne(id: string): Promise<import("./entities/renter.entity").Renter>;
    update(id: string, updateRenterDto: UpdateRenterDto): Promise<import("./entities/renter.entity").Renter>;
    remove(id: string): Promise<void>;
}
