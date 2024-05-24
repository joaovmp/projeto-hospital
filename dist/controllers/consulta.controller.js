"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarConsultas = exports.criarConsulta = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../entities/entity");
const criarConsulta = async (req, res) => {
    try {
        const consultaRepo = (0, typeorm_1.getRepository)(entity_1.Consulta);
        const novaConsulta = consultaRepo.create(req.body);
        const resultado = await consultaRepo.save(novaConsulta);
        res.json(resultado);
    }
    catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao criar consulta', erro });
    }
};
exports.criarConsulta = criarConsulta;
const buscarConsultas = async (req, res) => {
    try {
        const consultaRepo = (0, typeorm_1.getRepository)(entity_1.Consulta);
        const consultas = await consultaRepo.find();
        res.json(consultas);
    }
    catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao buscar consultas', erro });
    }
};
exports.buscarConsultas = buscarConsultas;
//# sourceMappingURL=consulta.controller.js.map