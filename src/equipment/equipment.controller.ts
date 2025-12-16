import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus, Query } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { SportsEquipment } from './entities/equipment.entity';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post()
  create(@Body() equipment: SportsEquipment) {
    return this.equipmentService.create(equipment);
  }

  @Get()
  findAll(@Query('type') type?: string) {
    if (type) {
      return this.equipmentService.findByType(type);
    }
    return this.equipmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const equipment = this.equipmentService.findOne(+id);
    if (!equipment) throw new HttpException('Инвентарь не найден', HttpStatus.NOT_FOUND);
    return equipment;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedEquipment: SportsEquipment) {
    const equipment = this.equipmentService.update(+id, updatedEquipment);
    if (!equipment) throw new HttpException('Инвентарь не найден', HttpStatus.NOT_FOUND);
    return equipment;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const result = this.equipmentService.remove(+id);
    if (!result) throw new HttpException('Инвентарь не найден', HttpStatus.NOT_FOUND);
    return { message: 'Инвентарь успешно удален' };
  }
}