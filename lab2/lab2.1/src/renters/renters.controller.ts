import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { RentersService } from './renters.service';
import { Renter } from './entities/renter.entity';

@Controller('renters')
export class RentersController {
  constructor(private readonly rentersService: RentersService) {}

  @Post()
  create(@Body() renter: Renter) {
    return this.rentersService.create(renter);
  }

  @Get()
  findAll() {
    return this.rentersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const renter = this.rentersService.findOne(+id);
    if (!renter) throw new HttpException('Арендатор не найден', HttpStatus.NOT_FOUND);
    return renter;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedRenter: Renter) {
    const renter = this.rentersService.update(+id, updatedRenter);
    if (!renter) throw new HttpException('Арендатор не найден', HttpStatus.NOT_FOUND);
    return renter;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const result = this.rentersService.remove(+id);
    if (!result) throw new HttpException('Арендатор не найден', HttpStatus.NOT_FOUND);
    return { message: 'Арендатор успешно удален' };
  }
}