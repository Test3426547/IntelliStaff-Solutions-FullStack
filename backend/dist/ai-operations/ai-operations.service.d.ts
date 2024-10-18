import { Repository } from 'typeorm';
import { ResumeAnalysis } from './entities/resume-analysis.entity';
import { JobMatch } from './entities/job-match.entity';
export declare class AiOperationsService {
    private resumeAnalysisRepository;
    private jobMatchRepository;
    constructor(resumeAnalysisRepository: Repository<ResumeAnalysis>, jobMatchRepository: Repository<JobMatch>);
    analyzeResume(resumeContent: string, resumeId: string): Promise<ResumeAnalysis>;
    matchJobWithResume(jobId: string, resumeId: string): Promise<JobMatch>;
    generateOptimizedResume(originalResume: string, jobDescription: string): Promise<string>;
}
