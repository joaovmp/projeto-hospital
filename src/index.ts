import { AppDataSource } from "./data-source";
import { Medico } from "./entities/entity";
import { Paciente } from "./entities/entity";
import { Consulta } from "./entities/entity";

AppDataSource.initialize().then(async () => {
    // Criar e salvar um novo médico
    console.log("Inserindo um novo médico no banco de dados...");
    const medico = new Medico();
    medico.nome = "Dr. João";
    medico.especialidade = "Cardiologista";
    await AppDataSource.manager.save(medico);
    console.log("Médico salvo com sucesso. ID: " + medico.id);

    // Criar e salvar um novo paciente
    console.log("Inserindo um novo paciente no banco de dados...");
    const paciente = new Paciente();
    paciente.nome = "Maria";
    paciente.idade = 35;
    paciente.sexo = "Feminino";
    paciente.telefone = "123456789";
    await AppDataSource.manager.save(paciente);
    console.log("Paciente salvo com sucesso. ID: " + paciente.id);

    // Criar e salvar uma nova consulta
    console.log("Inserindo uma nova consulta no banco de dados...");
    const consulta = new Consulta();
    consulta.medico = medico; 
    consulta.paciente = paciente; 
    consulta.data = new Date();
    consulta.motivo = "Check-up anual";
    await AppDataSource.manager.save(consulta);
    console.log("Consulta salva com sucesso. ID: " + consulta.id);

    console.log("Aqui você pode configurar e executar o express / fastify / qualquer outro framework.");

}).catch(error => console.log(error));