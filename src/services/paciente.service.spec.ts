import { Test, TestingModule } from '@nestjs/testing';
import { PacienteService } from './paciente.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Paciente } from '../entities/entity';
import { Repository } from 'typeorm';

describe('PacienteService', () => {
  let service: PacienteService;
  let repository: Repository<Paciente>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PacienteService,
        {
          provide: getRepositoryToken(Paciente),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<PacienteService>(PacienteService);
    repository = module.get<Repository<Paciente>>(getRepositoryToken(Paciente));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a paciente', async () => {
    const paciente: Paciente = { nome: 'João Silva', idade: 30, sexo: 'M', telefone: '123456789' };
    jest.spyOn(repository, 'save').mockResolvedValue(paciente);
    expect(await service.create(paciente)).toEqual(paciente);
  });

  
});
