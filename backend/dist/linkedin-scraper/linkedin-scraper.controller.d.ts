import { LinkedInScraperService } from './linkedin-scraper.service';
export declare class LinkedInScraperController {
    private readonly linkedInScraperService;
    constructor(linkedInScraperService: LinkedInScraperService);
    scrapeJobs(keywords: string, location?: string): Promise<any[]>;
}
