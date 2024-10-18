import { Injectable } from '@nestjs/common';
import { ResumeAnalysisService } from './resume-analysis.service';
import { JobMatchingService } from './job-matching.service';
import { WebScrapingService } from './web-scraping.service';
import { TextEmbeddingService } from './text-embedding.service';
import { AITrainingService } from './ai-training.service';

@Injectable()
export class AIRecruitmentService {
  constructor(
    private readonly resumeAnalysisService: ResumeAnalysisService,
    private readonly jobMatchingService: JobMatchingService,
    private readonly webScrapingService: WebScrapingService,
    private readonly textEmbeddingService: TextEmbeddingService,
    private readonly aiTrainingService: AITrainingService,
  ) {}

  async analyzeResume(resumeText: string) {
    const analysis = await this.resumeAnalysisService.analyze(resumeText);
    const embedding = await this.textEmbeddingService.embedText(resumeText);
    // Store the analysis and embedding in the database
    return { analysis, embedding };
  }

  async matchJobsToResume(resumeId: string) {
    const resumeData = await this.getResumeData(resumeId);
    const jobListings = await this.webScrapingService.scrapeJobListings();
    const matches = await this.jobMatchingService.findMatches(resumeData, jobListings);
    return matches;
  }

  async trainAIRecruiter(trainingData: any) {
    await this.aiTrainingService.train(trainingData);
  }

  private async getResumeData(resumeId: string) {
    // Fetch resume data from the database
    // This is a placeholder and should be implemented with actual database queries
    return { id: resumeId, text: 'Sample resume text' };
  }
}