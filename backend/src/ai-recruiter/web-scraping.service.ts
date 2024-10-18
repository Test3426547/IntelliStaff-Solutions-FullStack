import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class WebScrapingService {
  async scrapeJobListings() {
    const jobListings = [];
    const urls = [
      'https://example-job-board.com/it-jobs',
      'https://another-job-site.com/tech-positions',
    ];

    for (const url of urls) {
      const html = await this.fetchHtml(url);
      const jobs = this.parseJobListings(html);
      jobListings.push(...jobs);
    }

    return jobListings;
  }

  private async fetchHtml(url: string): Promise<string> {
    const { data } = await axios.get(url);
    return data;
  }

  private parseJobListings(html: string) {
    const $ = cheerio.load(html);
    const jobListings = [];

    $('.job-listing').each((index, element) => {
      const title = $(element).find('.job-title').text().trim();
      const company = $(element).find('.company-name').text().trim();
      const description = $(element).find('.job-description').text().trim();
      const requiredSkills = $(element).find('.required-skills').text().trim().split(',');

      jobListings.push({
        title,
        company,
        description,
        requiredSkills,
      });
    });

    return jobListings;
  }
}