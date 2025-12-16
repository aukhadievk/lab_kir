// src/rentals/entities/rental.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('rentals')
export class Rental {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  renterId: number;

  @Column()
  equipmentId: number;

  @Column()
  hours: number;

  @Column('decimal')
  totalCost: number;

  @Column()
  status: string;

  @Column()
  depositPaid: boolean;
}