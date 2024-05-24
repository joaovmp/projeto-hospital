import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Medico, Paciente, Consulta } from './entities/entity';
import { MedicoService } from './services/medico.service';
import { PacienteService } from './services/paciente.service';
import { ConsultaService } from './services/consulta.service';
import { MedicoController } from './controllers/medico.controller';
import { PacienteController } from './controllers/paciente.controller';
import { ConsultaController } from './controllers/consulta.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Medico, Paciente, Consulta],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Medico, Paciente, Consulta]),
  ],
  controllers: [AppController, MedicoController, PacienteController, ConsultaController],
  providers: [AppService, MedicoService, PacienteService, ConsultaService],
})
export class AppModule {}