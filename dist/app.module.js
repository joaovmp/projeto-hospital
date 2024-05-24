"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const entity_1 = require("./entities/entity");
const entity_2 = require("./entities/entity");
const entity_3 = require("./entities/entity");
const medico_service_1 = require("./services/medico.service");
const paciente_service_1 = require("./services/paciente.service");
const consulta_service_1 = require("./services/consulta.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'database.sqlite',
                entities: [entity_1.Medico, entity_2.Paciente, entity_3.Consulta],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([entity_1.Medico, entity_2.Paciente, entity_3.Consulta]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, medico_service_1.MedicoService, paciente_service_1.PacienteService, consulta_service_1.ConsultaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map