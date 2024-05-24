import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from '../entities/entity';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
  ) {}

  findAll(): Promise<Paciente[]> {
    return this.pacienteRepository.find();
  }

  async findOne(id: number): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOne({ where: { id } });
    if (!paciente) {
      throw new NotFoundException(`Paciente com ID ${id} não encontrado`);
    }
    return paciente;
  }

  create(paciente: Paciente): Promise<Paciente> {
    return this.pacienteRepository.save(paciente);
  }

  async update(id: number, paciente: Paciente): Promise<Paciente> {
    await this.pacienteRepository.update(id, paciente);
    const updatedPaciente = await this.pacienteRepository.findOne({ where: { id } });
    if (!updatedPaciente) {
      throw new NotFoundException(`Paciente com ID ${id} não encontrado`);
    }
    return updatedPaciente;
  }

  async remove(id: number): Promise<void> {
    const result = await this.pacienteRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Paciente com ID ${id} não encontrado`);
    }
  }
}