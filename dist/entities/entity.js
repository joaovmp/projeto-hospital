"use strict";
// entity.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = exports.Paciente = exports.Medico = void 0;
const typeorm_1 = require("typeorm");
let Medico = class Medico {
};
exports.Medico = Medico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Medico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "especialidade", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Consulta, consulta => consulta.medico),
    __metadata("design:type", Array)
], Medico.prototype, "consultas", void 0);
exports.Medico = Medico = __decorate([
    (0, typeorm_1.Entity)()
], Medico);
let Paciente = class Paciente {
};
exports.Paciente = Paciente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Paciente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Paciente.prototype, "idade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Consulta, consulta => consulta.paciente),
    __metadata("design:type", Array)
], Paciente.prototype, "consultas", void 0);
exports.Paciente = Paciente = __decorate([
    (0, typeorm_1.Entity)()
], Paciente);
let Consulta = class Consulta {
};
exports.Consulta = Consulta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Consulta.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Medico, medico => medico.consultas),
    __metadata("design:type", Medico)
], Consulta.prototype, "medico", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Paciente, paciente => paciente.consultas),
    __metadata("design:type", Paciente)
], Consulta.prototype, "paciente", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Consulta.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Consulta.prototype, "motivo", void 0);
exports.Consulta = Consulta = __decorate([
    (0, typeorm_1.Entity)()
], Consulta);
//# sourceMappingURL=entity.js.map