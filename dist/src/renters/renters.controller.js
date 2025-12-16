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
exports.RentersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const renters_service_1 = require("./renters.service");
const create_renter_dto_1 = require("./dto/create-renter.dto");
const update_renter_dto_1 = require("./dto/update-renter.dto");
let RentersController = class RentersController {
    rentersService;
    constructor(rentersService) {
        this.rentersService = rentersService;
    }
    create(createRenterDto) {
        return this.rentersService.create(createRenterDto);
    }
    findAll() {
        return this.rentersService.findAll();
    }
    findIncomplete() {
        return this.rentersService.findIncomplete();
    }
    findOne(id) {
        return this.rentersService.findOne(+id);
    }
    update(id, updateRenterDto) {
        return this.rentersService.update(+id, updateRenterDto);
    }
    remove(id) {
        return this.rentersService.remove(+id);
    }
};
exports.RentersController = RentersController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание арендатора' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_renter_dto_1.CreateRenterDto]),
    __metadata("design:returntype", void 0)
], RentersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех арендаторов' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RentersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение краткой информации об арендаторах' }),
    (0, common_1.Get)('incomplete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RentersController.prototype, "findIncomplete", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение арендатора по ID' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RentersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление арендатора' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_renter_dto_1.UpdateRenterDto]),
    __metadata("design:returntype", void 0)
], RentersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление арендатора' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RentersController.prototype, "remove", null);
exports.RentersController = RentersController = __decorate([
    (0, swagger_1.ApiTags)('Арендаторы'),
    (0, common_1.Controller)('renters'),
    __metadata("design:paramtypes", [renters_service_1.RentersService])
], RentersController);
//# sourceMappingURL=renters.controller.js.map