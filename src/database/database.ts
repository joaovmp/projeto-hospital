import { createConnection } from 'typeorm';
import { Medico } from '../entities/entity';
import { Paciente } from '../entities/entity';
import { Consulta } from '../entities/entity';

createConnection({
  type: 'sqlite',
  database: 'database.db',
  entities: [Medico, Paciente, Consulta],
  synchronize: true,
}).then(() => {
  console.log('Conexão com o banco de dados estabelecida com sucesso.');
}).catch(error => {
  console.error('Erro ao conectar-se ao banco de dados:', error);
});