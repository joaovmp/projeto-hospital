import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consulta } from '../entities/entity';

@Injectable()
export class ConsultaService {
  constructor(
    @InjectRepository(Consulta)
    private consultaRepository: Repository<Consulta>,
  ) {}

  findAll(): Promise<Consulta[]> {
    return this.consultaRepository.find();
  }

  async findOne(id: number): Promise<Consulta> {
    const consulta = await this.consultaRepository.findOne({ where: { id } });
    if (!consulta) {
      throw new NotFoundException(`Consulta com ID ${id} não encontrada`);
    }
    return consulta;
  }

  create(consulta: Consulta): Promise<Consulta> {
    return this.consultaRepository.save(consulta);
  }

  async update(id: number, consulta: Consulta): Promise<Consulta> {
    await this.consultaRepository.update(id, consulta);
    const updatedConsulta = await this.consultaRepository.findOne({ where: { id } });
    if (!updatedConsulta) {
      throw new NotFoundException(`Consulta com ID ${id} não encontrada`);
    }
    return updatedConsulta;
  }

  async remove(id: number): Promise<void> {
    const result = await this.consultaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Consulta com ID ${id} não encontrada`);
    }
  }
}