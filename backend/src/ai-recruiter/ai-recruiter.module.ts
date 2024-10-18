import { Module } from '@nestjs/common';
import { AIRecruitmentService } from './ai-recruitment.service';
import { ResumeAnalysisService } from './resume-analysis.service';
import { JobMatchingService } from './job-matching.service';
import { WebScrapingService } from './web-scraping.service';
import { TextEmbeddingService } from './text-embedding.service';
import { AITrainingService } from './ai-training.service';

@Module({
  providers: [
    AIRecruitmentService,
    ResumeAnalysisService,
    JobMatchingService,
    WebScrapingService,
    TextEmbeddingService,
    AITrainingService,
  ],
  exports: [AIRecruitmentService],
})
export class AIRecruitmentModule {}