import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentersService } from './renters.service';
import { RentersController } from './renters.controller';
import { Renter } from './entities/renter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Renter])],
  controllers: [RentersController],
  providers: [RentersService],
})
export class RentersModule {}