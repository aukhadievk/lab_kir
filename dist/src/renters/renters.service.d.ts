import { Repository } from 'typeorm';
import { Renter } from './entities/renter.entity';
import { CreateRenterDto } from './dto/create-renter.dto';
import { UpdateRenterDto } from './dto/update-renter.dto';
import { IncompleteRenterDto } from './dto/incomplete-renter.dto';
export declare class RentersService {
    private readonly renterRepository;
    constructor(renterRepository: Repository<Renter>);
    create(createRenterDto: CreateRenterDto): Promise<Renter>;
    findAll(): Promise<Renter[]>;
    findOne(id: number): Promise<Renter>;
    findIncomplete(): Promise<IncompleteRenterDto[]>;
    update(id: number, updateRenterDto: UpdateRenterDto): Promise<Renter>;
    remove(id: number): Promise<void>;
}
