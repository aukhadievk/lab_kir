// src/equipment/entities/equipment.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('sports_equipment')
export class SportsEquipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  brand: string;

  @Column({ nullable: true })
  size: string;

  @Column()
  condition: string;

  @Column('decimal')
  hourlyRate: number;

  @Column({ default: true })
  isAvailable: boolean;
}