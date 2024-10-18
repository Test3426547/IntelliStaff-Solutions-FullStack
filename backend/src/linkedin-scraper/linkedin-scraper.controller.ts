import { Controller, Get, Query } from '@nestjs/common';
import { LinkedInScraperService } from './linkedin-scraper.service';

@Controller('scrape-jobs')
export class LinkedInScraperController {
  constructor(private readonly linkedInScraperService: LinkedInScraperService) {}

  @Get()
  async scrapeJobs(@Query('keywords') keywords: string, @Query('location') location: string = 'Australia') {
    return this.linkedInScraperService.scrapeJobs(keywords, location);
  }
}