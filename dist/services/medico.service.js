"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entity_1 = require("../entities/entity");
let MedicoService = class MedicoService {
    constructor(medicoRepository) {
        this.medicoRepository = medicoRepository;
    }
    findAll() {
        return this.medicoRepository.find();
    }
    async findOne(id) {
        const medico = await this.medicoRepository.findOne({ where: { id } });
        if (!medico) {
            throw new common_1.NotFoundException(`Medico com ID ${id} não encontrado`);
        }
        return medico;
    }
    create(medico) {
        return this.medicoRepository.save(medico);
    }
    async update(id, medico) {
        await this.medicoRepository.update(id, medico);
        const updatedMedico = await this.medicoRepository.findOne({ where: { id } });
        if (!updatedMedico) {
            throw new common_1.NotFoundException(`Medico com ID ${id} não encontrado`);
        }
        return updatedMedico;
    }
    async remove(id) {
        const result = await this.medicoRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Medico com ID ${id} não encontrado`);
        }
    }
};
exports.MedicoService = MedicoService;
exports.MedicoService = MedicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entity_1.Medico)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MedicoService);
//# sourceMappingURL=medico.service.js.map