import { Test, TestingModule } from '@nestjs/testing';
import { ConsultaService } from './consulta.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Consulta } from '../entities/entity';
import { Repository } from 'typeorm';

describe('ConsultaService', () => {
  let service: ConsultaService;
  let repository: Repository<Consulta>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConsultaService,
        {
          provide: getRepositoryToken(Consulta),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ConsultaService>(ConsultaService);
    repository = module.get<Repository<Consulta>>(getRepositoryToken(Consulta));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a consulta', async () => {
    const consulta: Consulta = { data: new Date(), motivo: 'Check-up' };
    jest.spyOn(repository, 'save').mockResolvedValue(consulta);
    expect(await service.create(consulta)).toEqual(consulta);
  });

 
});
