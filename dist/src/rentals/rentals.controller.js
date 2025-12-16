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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalsController = void 0;
const common_1 = require("@nestjs/common");
const rentals_service_1 = require("./rentals.service");
const rental_entity_1 = require("./entities/rental.entity");
let RentalsController = class RentalsController {
    rentalsService;
    constructor(rentalsService) {
        this.rentalsService = rentalsService;
    }
    create(rental) {
        try {
            return this.rentalsService.create(rental);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findAll(renterId) {
        if (renterId) {
            return this.rentalsService.findByRenter(+renterId);
        }
        return this.rentalsService.findAll();
    }
    findOne(id) {
        const rental = this.rentalsService.findOne(+id);
        if (!rental)
            throw new common_1.HttpException('Аренда не найдена', common_1.HttpStatus.NOT_FOUND);
        return rental;
    }
    update(id, updatedRental) {
        const rental = this.rentalsService.update(+id, updatedRental);
        if (!rental)
            throw new common_1.HttpException('Аренда не найдена', common_1.HttpStatus.NOT_FOUND);
        return rental;
    }
    remove(id) {
        const result = this.rentalsService.remove(+id);
        if (!result)
            throw new common_1.HttpException('Аренда не найдена', common_1.HttpStatus.NOT_FOUND);
        return { message: 'Аренда успешно удалена' };
    }
    complete(id) {
        const rental = this.rentalsService.completeRental(+id);
        if (!rental)
            throw new common_1.HttpException('Аренда не найдена', common_1.HttpStatus.NOT_FOUND);
        return { message: 'Аренда завершена', rental };
    }
};
exports.RentalsController = RentalsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rental_entity_1.Rental]),
    __metadata("design:returntype", void 0)
], RentalsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('renterId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RentalsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RentalsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, rental_entity_1.Rental]),
    __metadata("design:returntype", void 0)
], RentalsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RentalsController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/complete'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RentalsController.prototype, "complete", null);
exports.RentalsController = RentalsController = __decorate([
    (0, common_1.Controller)('rentals'),
    __metadata("design:paramtypes", [rentals_service_1.RentalsService])
], RentalsController);
//# sourceMappingURL=rentals.controller.js.map