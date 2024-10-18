export declare class LinkedInScraperService {
    private readonly baseUrl;
    private readonly maxRetries;
    private readonly retryDelay;
    scrapeJobs(keywords: string, location: string, numPages?: number): Promise<any[]>;
}
