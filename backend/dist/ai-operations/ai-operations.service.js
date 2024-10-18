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
exports.AiOperationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const resume_analysis_entity_1 = require("./entities/resume-analysis.entity");
const job_match_entity_1 = require("./entities/job-match.entity");
let AiOperationsService = class AiOperationsService {
    constructor(resumeAnalysisRepository, jobMatchRepository) {
        this.resumeAnalysisRepository = resumeAnalysisRepository;
        this.jobMatchRepository = jobMatchRepository;
    }
    async analyzeResume(resumeContent, resumeId) {
        const analysis = {
            skills: ['JavaScript', 'React', 'Node.js'],
            experience: '3 years',
            education: 'Bachelor\'s in Computer Science',
            additionalInfo: {},
        };
        const resumeAnalysis = this.resumeAnalysisRepository.create(Object.assign({ resumeId }, analysis));
        await this.resumeAnalysisRepository.save(resumeAnalysis);
        return resumeAnalysis;
    }
    async matchJobWithResume(jobId, resumeId) {
        const matchScore = Math.random() * 100;
        const jobMatch = this.jobMatchRepository.create({
            jobId,
            resumeId,
            matchScore,
            recommendedActions: ['Highlight your React experience', 'Add more details about your Node.js projects'],
        });
        await this.jobMatchRepository.save(jobMatch);
        return jobMatch;
    }
    async generateOptimizedResume(originalResume, jobDescription) {
        return `Optimized version of the resume:\n\n${originalResume}\n\nTailored for the job:\n${jobDescription}`;
    }
};
AiOperationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(resume_analysis_entity_1.ResumeAnalysis)),
    __param(1, (0, typeorm_1.InjectRepository)(job_match_entity_1.JobMatch)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AiOperationsService);
exports.AiOperationsService = AiOperationsService;
//# sourceMappingURL=ai-operations.service.js.map