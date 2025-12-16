import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { RentersService } from './renters.service';
import { CreateRenterDto } from './dto/create-renter.dto';
import { UpdateRenterDto } from './dto/update-renter.dto';

@ApiTags('Арендаторы')
@Controller('renters')
export class RentersController {
  constructor(private readonly rentersService: RentersService) {}

  @ApiOperation({ summary: 'Создание арендатора' })
  @Post()
  create(@Body() createRenterDto: CreateRenterDto) {
    return this.rentersService.create(createRenterDto);
  }

  @ApiOperation({ summary: 'Получение всех арендаторов' })
  @Get()
  findAll() {
    return this.rentersService.findAll();
  }

  @ApiOperation({ summary: 'Получение краткой информации об арендаторах' })
  @Get('incomplete')
  findIncomplete() {
    return this.rentersService.findIncomplete();
  }

  @ApiOperation({ summary: 'Получение арендатора по ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentersService.findOne(+id);
  }

  @ApiOperation({ summary: 'Обновление арендатора' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRenterDto: UpdateRenterDto) {
    return this.rentersService.update(+id, updateRenterDto);
  }

  @ApiOperation({ summary: 'Удаление арендатора' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentersService.remove(+id);
  }
}