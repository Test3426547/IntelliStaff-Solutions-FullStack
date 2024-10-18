import { Module } from '@nestjs/common';
import { LinkedInScraperController } from './linkedin-scraper.controller';
import { LinkedInScraperService } from './linkedin-scraper.service';

@Module({
  controllers: [LinkedInScraperController],
  providers: [LinkedInScraperService],
})
export class LinkedInScraperModule {}