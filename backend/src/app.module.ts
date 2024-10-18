import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsModule } from './jobs/jobs.module';
import { ResumesModule } from './resumes/resumes.module';
import { LinkedInScraperModule } from './linkedin-scraper/linkedin-scraper.module';
import { AiOperationsModule } from './ai-operations/ai-operations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    JobsModule,
    ResumesModule,
    LinkedInScraperModule,
    AiOperationsModule,
  ],
})
export class AppModule {}