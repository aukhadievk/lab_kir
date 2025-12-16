"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRenterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_renter_dto_1 = require("./create-renter.dto");
class UpdateRenterDto extends (0, swagger_1.PartialType)(create_renter_dto_1.CreateRenterDto) {
}
exports.UpdateRenterDto = UpdateRenterDto;
//# sourceMappingURL=update-renter.dto.js.map