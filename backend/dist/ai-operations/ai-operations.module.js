"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiOperationsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ai_operations_service_1 = require("./ai-operations.service");
const ai_operations_controller_1 = require("./ai-operations.controller");
const resume_analysis_entity_1 = require("./entities/resume-analysis.entity");
const job_match_entity_1 = require("./entities/job-match.entity");
let AiOperationsModule = class AiOperationsModule {
};
AiOperationsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([resume_analysis_entity_1.ResumeAnalysis, job_match_entity_1.JobMatch])],
        controllers: [ai_operations_controller_1.AiOperationsController],
        providers: [ai_operations_service_1.AiOperationsService],
    })
], AiOperationsModule);
exports.AiOperationsModule = AiOperationsModule;
//# sourceMappingURL=ai-operations.module.js.map