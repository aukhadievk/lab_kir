import { RentalsService } from './rentals.service';
import { Rental } from './entities/rental.entity';
export declare class RentalsController {
    private readonly rentalsService;
    constructor(rentalsService: RentalsService);
    create(rental: Rental): Rental;
    findAll(renterId?: string): Rental[];
    findOne(id: string): Rental;
    update(id: string, updatedRental: Rental): Rental;
    remove(id: string): {
        message: string;
    };
    complete(id: string): {
        message: string;
        rental: Rental;
    };
}
