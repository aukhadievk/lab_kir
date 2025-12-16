"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalsService = void 0;
const common_1 = require("@nestjs/common");
const datasource_service_1 = require("../datasource/datasource.service");
let RentalsService = class RentalsService {
    datasourceService;
    constructor(datasourceService) {
        this.datasourceService = datasourceService;
    }
    create(rental) {
        const rentals = this.datasourceService.getRentals();
        const equipment = this.datasourceService.getEquipment()
            .find(eq => eq.id === rental.equipmentId);
        if (equipment && !equipment.isAvailable) {
            throw new Error('Инвентарь недоступен для аренды');
        }
        if (equipment) {
            equipment.isAvailable = false;
        }
        const equipmentRate = equipment?.hourlyRate || 0;
        rental.totalCost = equipmentRate * rental.hours;
        rentals.push(rental);
        return rental;
    }
    findAll() {
        return this.datasourceService.getRentals();
    }
    findOne(id) {
        return this.datasourceService.getRentals().find(rental => rental.id === id);
    }
    update(id, updatedRental) {
        const rentals = this.datasourceService.getRentals();
        const index = rentals.findIndex(rental => rental.id === id);
        if (index === -1)
            return undefined;
        rentals[index] = updatedRental;
        return rentals[index];
    }
    remove(id) {
        const rentals = this.datasourceService.getRentals();
        const index = rentals.findIndex(rental => rental.id === id);
        if (index === -1)
            return false;
        const rental = rentals[index];
        const equipment = this.datasourceService.getEquipment()
            .find(eq => eq.id === rental.equipmentId);
        if (equipment) {
            equipment.isAvailable = true;
        }
        rentals.splice(index, 1);
        return true;
    }
    findByRenter(renterId) {
        return this.datasourceService.getRentals()
            .filter(rental => rental.renterId === renterId);
    }
    completeRental(id) {
        const rental = this.findOne(id);
        if (!rental)
            return undefined;
        rental.status = 'completed';
        const equipment = this.datasourceService.getEquipment()
            .find(eq => eq.id === rental.equipmentId);
        if (equipment) {
            equipment.isAvailable = true;
        }
        return rental;
    }
};
exports.RentalsService = RentalsService;
exports.RentalsService = RentalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [datasource_service_1.DatasourceService])
], RentalsService);
//# sourceMappingURL=rentals.service.js.map