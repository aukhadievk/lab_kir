import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Renter } from './entities/renter.entity';
import { CreateRenterDto } from './dto/create-renter.dto';
import { UpdateRenterDto } from './dto/update-renter.dto';
import { IncompleteRenterDto } from './dto/incomplete-renter.dto';

@Injectable()
export class RentersService {
  constructor(
    @InjectRepository(Renter)
    private readonly renterRepository: Repository<Renter>,
  ) {}

  async create(createRenterDto: CreateRenterDto): Promise<Renter> {
    const renter = this.renterRepository.create(createRenterDto);
    return await this.renterRepository.save(renter);
  }

  async findAll(): Promise<Renter[]> {
    return await this.renterRepository.find();
  }

  async findOne(id: number): Promise<Renter> {
    const renter = await this.renterRepository.findOne({ where: { id } });
    if (!renter) {
      throw new NotFoundException(`Арендатор с ID ${id} не найден`);
    }
    return renter;
  }

  async findIncomplete(): Promise<IncompleteRenterDto[]> {
    const renters = await this.renterRepository.find({
      select: ['id', 'fullName', 'phone'],
    });
    return renters.map(renter => ({
      id: renter.id,
      fullName: renter.fullName,
      phone: renter.phone,
    }));
  }

  async update(id: number, updateRenterDto: UpdateRenterDto): Promise<Renter> {
    await this.renterRepository.update(id, updateRenterDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.renterRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Арендатор с ID ${id} не найден`);
    }
  }
}