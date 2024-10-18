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
exports.AiOperationsController = void 0;
const common_1 = require("@nestjs/common");
const ai_operations_service_1 = require("./ai-operations.service");
let AiOperationsController = class AiOperationsController {
    constructor(aiOperationsService) {
        this.aiOperationsService = aiOperationsService;
    }
    async analyzeResume(body) {
        return this.aiOperationsService.analyzeResume(body.resume, body.resumeId);
    }
    async matchJobWithResume(body) {
        return this.aiOperationsService.matchJobWithResume(body.jobId, body.resumeId);
    }
    async generateOptimizedResume(body) {
        return this.aiOperationsService.generateOptimizedResume(body.resume, body.jobDescription);
    }
};
__decorate([
    (0, common_1.Post)('analyze-resume'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiOperationsController.prototype, "analyzeResume", null);
__decorate([
    (0, common_1.Post)('match-job'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiOperationsController.prototype, "matchJobWithResume", null);
__decorate([
    (0, common_1.Post)('optimize-resume'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiOperationsController.prototype, "generateOptimizedResume", null);
AiOperationsController = __decorate([
    (0, common_1.Controller)('ai-operations'),
    __metadata("design:paramtypes", [ai_operations_service_1.AiOperationsService])
], AiOperationsController);
exports.AiOperationsController = AiOperationsController;
//# sourceMappingURL=ai-operations.controller.js.map