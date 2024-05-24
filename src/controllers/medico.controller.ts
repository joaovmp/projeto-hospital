import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MedicoService } from '../services/medico.service';
import { Medico } from '../entities/entity';

@Controller('medico')
export class MedicoController {
  constructor(private readonly medicoService: MedicoService) {}

  @Get()
  findAll() {
    return this.medicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.medicoService.findOne(id);
  }

  @Post()
  create(@Body() medico: Medico) {
    return this.medicoService.create(medico);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() medico: Medico) {
    return this.medicoService.update(id, medico);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.medicoService.remove(id);
  }
}