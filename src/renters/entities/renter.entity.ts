
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('renters')
export class Renter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  passportNumber: string;
}