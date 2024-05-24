import "reflect-metadata"
import { DataSource } from "typeorm"
import { Medico } from './entities/entity';
import { Paciente } from './entities/entity';
import { Consulta } from './entities/entity';
import { MedicoService } from './services/medico.service';
import { PacienteService } from './services/paciente.service';
import { ConsultaService } from './services/consulta.service';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "conhece",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Medico, Paciente, Consulta, MedicoService, PacienteService, ConsultaService],
    migrations: [],
    subscribers: [],
})
