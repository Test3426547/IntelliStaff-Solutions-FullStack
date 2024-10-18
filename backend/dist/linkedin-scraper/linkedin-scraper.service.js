"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedInScraperService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const cheerio = require("cheerio");
let LinkedInScraperService = class LinkedInScraperService {
    constructor() {
        this.baseUrl = 'https://www.linkedin.com/jobs/search/';
        this.maxRetries = 3;
        this.retryDelay = 5000;
    }
    async scrapeJobs(keywords, location, numPages = 5) {
        const jobs = [];
        const keywordList = keywords.split(',');
        for (const keyword of keywordList) {
            const url = `${this.baseUrl}?keywords=${encodeURIComponent(keyword)}&location=${encodeURIComponent(location)}`;
            for (let page = 0; page < numPages; page++) {
                let retries = 0;
                while (retries < this.maxRetries) {
                    try {
                        const response = await axios_1.default.get(`${url}&start=${page * 25}`, {
                            headers: {
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                            }
                        });
                        const $ = cheerio.load(response.data);
                        $('.base-card').each((index, element) => {
                            const title = $(element).find('.base-search-card__title').text().trim();
                            const company = $(element).find('.base-search-card__subtitle').text().trim();
                            const jobLocation = $(element).find('.job-search-card__location').text().trim();
                            const link = $(element).find('.base-card__full-link').attr('href');
                            if (title && company && jobLocation && link) {
                                jobs.push({ title, company, location: jobLocation, link });
                            }
                        });
                        await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 1000));
                        break;
                    }
                    catch (error) {
                        console.error(`Error scraping page ${page} for keyword ${keyword}:`, error);
                        retries++;
                        if (retries >= this.maxRetries) {
                            throw new common_1.HttpException('Failed to scrape LinkedIn after multiple attempts', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                        }
                        await new Promise(resolve => setTimeout(resolve, this.retryDelay));
                    }
                }
            }
        }
        return jobs.filter(job => !job.link.includes('seek.com') && !job.link.includes('indeed.com'));
    }
};
LinkedInScraperService = __decorate([
    (0, common_1.Injectable)()
], LinkedInScraperService);
exports.LinkedInScraperService = LinkedInScraperService;
//# sourceMappingURL=linkedin-scraper.service.js.map