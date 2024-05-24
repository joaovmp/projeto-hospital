import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medico } from '../entities/entity';

@Injectable()
export class MedicoService {
  constructor(
    @InjectRepository(Medico)
    private medicoRepository: Repository<Medico>,
  ) {}

  findAll(): Promise<Medico[]> {
    return this.medicoRepository.find();
  }

  async findOne(id: number): Promise<Medico> {
    const medico = await this.medicoRepository.findOne({ where: { id } });
    if (!medico) {
      throw new NotFoundException(`Médico com ID ${id} não encontrado`);
    }
    return medico;
  }

  create(medico: Medico): Promise<Medico> {
    return this.medicoRepository.save(medico);
  }

  async update(id: number, medico: Medico): Promise<Medico> {
    await this.medicoRepository.update(id, medico);
    const updatedMedico = await this.medicoRepository.findOne({ where: { id } });
    if (!updatedMedico) {
      throw new NotFoundException(`Médico com ID ${id} não encontrado`);
    }
    return updatedMedico;
  }

  async remove(id: number): Promise<void> {
    const result = await this.medicoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Médico com ID ${id} não encontrado`);
    }
  }
}