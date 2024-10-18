import { Controller, Post, Body } from '@nestjs/common';
import { AiOperationsService } from './ai-operations.service';

@Controller('ai-operations')
export class AiOperationsController {
  constructor(private readonly aiOperationsService: AiOperationsService) {}

  @Post('analyze-resume')
  async analyzeResume(@Body() body: { resume: string, resumeId: string }) {
    return this.aiOperationsService.analyzeResume(body.resume, body.resumeId);
  }

  @Post('match-job')
  async matchJobWithResume(@Body() body: { jobId: string; resumeId: string }) {
    return this.aiOperationsService.matchJobWithResume(body.jobId, body.resumeId);
  }

  @Post('optimize-resume')
  async generateOptimizedResume(@Body() body: { resume: string; jobDescription: string }) {
    return this.aiOperationsService.generateOptimizedResume(body.resume, body.jobDescription);
  }
}