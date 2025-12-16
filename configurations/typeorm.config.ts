import { DataSource } from 'typeorm';

const ormConfig = new DataSource({
  type: 'better-sqlite3',
  database: 'database.sqlite',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/src/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  synchronize: false,
  logging: true,
});

export default ormConfig;
