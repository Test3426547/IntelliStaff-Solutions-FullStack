import { AiOperationsService } from './ai-operations.service';
export declare class AiOperationsController {
    private readonly aiOperationsService;
    constructor(aiOperationsService: AiOperationsService);
    analyzeResume(body: {
        resume: string;
        resumeId: string;
    }): Promise<import("./entities/resume-analysis.entity").ResumeAnalysis>;
    matchJobWithResume(body: {
        jobId: string;
        resumeId: string;
    }): Promise<import("./entities/job-match.entity").JobMatch>;
    generateOptimizedResume(body: {
        resume: string;
        jobDescription: string;
    }): Promise<string>;
}
