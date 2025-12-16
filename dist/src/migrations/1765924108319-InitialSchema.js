"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialSchema1765924108319 = void 0;
class InitialSchema1765924108319 {
    name = 'InitialSchema1765924108319';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "renters" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "fullName" varchar NOT NULL, "phone" varchar NOT NULL, "email" varchar NOT NULL, "passportNumber" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "sports_equipment" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "type" varchar NOT NULL, "brand" varchar NOT NULL, "size" varchar, "condition" varchar NOT NULL, "hourlyRate" decimal NOT NULL, "isAvailable" boolean NOT NULL DEFAULT (1))`);
        await queryRunner.query(`CREATE TABLE "rentals" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "renterId" integer NOT NULL, "equipmentId" integer NOT NULL, "hours" integer NOT NULL, "totalCost" decimal NOT NULL, "status" varchar NOT NULL, "depositPaid" boolean NOT NULL)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "rentals"`);
        await queryRunner.query(`DROP TABLE "sports_equipment"`);
        await queryRunner.query(`DROP TABLE "renters"`);
    }
}
exports.InitialSchema1765924108319 = InitialSchema1765924108319;
//# sourceMappingURL=1765924108319-InitialSchema.js.map