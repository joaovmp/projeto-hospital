import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PacienteService } from '../services/paciente.service';
import { Paciente } from '../entities/entity';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pacienteService.findOne(id);
  }

  @Post()
  create(@Body() paciente: Paciente) {
    return this.pacienteService.create(paciente);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() paciente: Paciente) {
    return this.pacienteService.update(id, paciente);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pacienteService.remove(id);
  }
}

