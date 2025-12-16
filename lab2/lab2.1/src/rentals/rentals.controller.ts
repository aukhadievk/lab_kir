import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus, Query } from '@nestjs/common';
import { RentalsService } from './rentals.service';
import { Rental } from './entities/rental.entity';

@Controller('rentals')
export class RentalsController {
  constructor(private readonly rentalsService: RentalsService) {}

  @Post()
  create(@Body() rental: Rental) {
    try {
      return this.rentalsService.create(rental);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  findAll(@Query('renterId') renterId?: string) {
    if (renterId) {
      return this.rentalsService.findByRenter(+renterId);
    }
    return this.rentalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const rental = this.rentalsService.findOne(+id);
    if (!rental) throw new HttpException('Аренда не найдена', HttpStatus.NOT_FOUND);
    return rental;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedRental: Rental) {
    const rental = this.rentalsService.update(+id, updatedRental);
    if (!rental) throw new HttpException('Аренда не найдена', HttpStatus.NOT_FOUND);
    return rental;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const result = this.rentalsService.remove(+id);
    if (!result) throw new HttpException('Аренда не найдена', HttpStatus.NOT_FOUND);
    return { message: 'Аренда успешно удалена' };
  }

  @Put(':id/complete')
  complete(@Param('id') id: string) {
    const rental = this.rentalsService.completeRental(+id);
    if (!rental) throw new HttpException('Аренда не найдена', HttpStatus.NOT_FOUND);
    return { message: 'Аренда завершена', rental };
  }
}