import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AiOperationsService } from './ai-operations.service';
import { AiOperationsController } from './ai-operations.controller';
import { ResumeAnalysis } from './entities/resume-analysis.entity';
import { JobMatch } from './entities/job-match.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResumeAnalysis, JobMatch])],
  controllers: [AiOperationsController],
  providers: [AiOperationsService],
})
export class AiOperationsModule {}