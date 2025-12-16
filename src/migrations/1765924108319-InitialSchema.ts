import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1765924108319 implements MigrationInterface {
    name = 'InitialSchema1765924108319'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "renters" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "fullName" varchar NOT NULL, "phone" varchar NOT NULL, "email" varchar NOT NULL, "passportNumber" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "sports_equipment" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "type" varchar NOT NULL, "brand" varchar NOT NULL, "size" varchar, "condition" varchar NOT NULL, "hourlyRate" decimal NOT NULL, "isAvailable" boolean NOT NULL DEFAULT (1))`);
        await queryRunner.query(`CREATE TABLE "rentals" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "renterId" integer NOT NULL, "equipmentId" integer NOT NULL, "hours" integer NOT NULL, "totalCost" decimal NOT NULL, "status" varchar NOT NULL, "depositPaid" boolean NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "rentals"`);
        await queryRunner.query(`DROP TABLE "sports_equipment"`);
        await queryRunner.query(`DROP TABLE "renters"`);
    }

}
