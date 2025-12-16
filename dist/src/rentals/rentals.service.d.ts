import { Rental } from './entities/rental.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
export declare class RentalsService {
    private readonly datasourceService;
    constructor(datasourceService: DatasourceService);
    create(rental: Rental): Rental;
    findAll(): Rental[];
    findOne(id: number): Rental | undefined;
    update(id: number, updatedRental: Rental): Rental | undefined;
    remove(id: number): boolean;
    findByRenter(renterId: number): Rental[];
    completeRental(id: number): Rental | undefined;
}
