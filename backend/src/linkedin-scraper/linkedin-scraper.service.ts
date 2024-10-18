import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class LinkedInScraperService {
  private readonly baseUrl = 'https://www.linkedin.com/jobs/search/';
  private readonly maxRetries = 3;
  private readonly retryDelay = 5000; // 5 seconds

  async scrapeJobs(keywords: string, location: string, numPages: number = 5) {
    const jobs = [];
    const keywordList = keywords.split(',');

    for (const keyword of keywordList) {
      const url = `${this.baseUrl}?keywords=${encodeURIComponent(keyword)}&location=${encodeURIComponent(location)}`;
      
      for (let page = 0; page < numPages; page++) {
        let retries = 0;
        while (retries < this.maxRetries) {
          try {
            const response = await axios.get(`${url}&start=${page * 25}`, {
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

            // Random delay to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 1000));
            break; // Success, exit retry loop
          } catch (error) {
            console.error(`Error scraping page ${page} for keyword ${keyword}:`, error);
            retries++;
            if (retries >= this.maxRetries) {
              throw new HttpException('Failed to scrape LinkedIn after multiple attempts', HttpStatus.INTERNAL_SERVER_ERROR);
            }
            await new Promise(resolve => setTimeout(resolve, this.retryDelay));
          }
        }
      }
    }

    return jobs.filter(job => !job.link.includes('seek.com') && !job.link.includes('indeed.com'));
  }
}