import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ConsultaService } from '../services/consulta.service';
import { Consulta } from '../entities/entity';

@Controller('consulta')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Get()
  findAll() {
    return this.consultaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.consultaService.findOne(id);
  }

  @Post()
  create(@Body() consulta: Consulta) {
    return this.consultaService.create(consulta);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() consulta: Consulta) {
    return this.consultaService.update(id, consulta);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.consultaService.remove(id);
  }
}
