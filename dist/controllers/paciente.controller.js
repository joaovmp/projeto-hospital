"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarPacientes = exports.criarPaciente = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entities/entity");
const criarPaciente = async (req, res) => {
    try {
        const pacienteRepo = (0, typeorm_1.getRepository)(entity_1.Paciente);
        const novoPaciente = pacienteRepo.create(req.body);
        const resultado = await pacienteRepo.save(novoPaciente);
        res.json(resultado);
    }
    catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao criar paciente', erro });
    }
};
exports.criarPaciente = criarPaciente;
const buscarPacientes = async (req, res) => {
    try {
        const pacienteRepo = (0, typeorm_1.getRepository)(entity_1.Paciente);
        const pacientes = await pacienteRepo.find();
        res.json(pacientes);
    }
    catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao buscar pacientes', erro });
    }
};
exports.buscarPacientes = buscarPacientes;
//# sourceMappingURL=paciente.controller.js.map