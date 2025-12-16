"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ormConfig = new typeorm_1.DataSource({
    type: 'better-sqlite3',
    database: 'database.sqlite',
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/src/migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations',
    synchronize: false,
    logging: true,
});
exports.default = ormConfig;
//# sourceMappingURL=typeorm.config.js.map