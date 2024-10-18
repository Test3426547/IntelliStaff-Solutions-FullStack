const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

// In-memory storage (replace with database in production)
let resumes = [];
let jobs = [];

app.post('/submit-resume', (req, res) => {
  const { content } = req.body;
  resumes.push({ content });
  res.json({ message: "Resume submitted successfully" });
});

app.post('/post-job', (req, res) => {
  const { title, description } = req.body;
  jobs.push({ title, description });
  res.json({ message: "Job posted successfully" });
});

app.get('/jobs', (req, res) => {
  res.json(jobs);
});

app.get('/resumes', (req, res) => {
  res.json(resumes);
});

app.get('/scrape-jobs', async (req, res) => {
  const { keywords, location = 'Australia' } = req.query;
  const keywordList = keywords.split(',');
  
  try {
    const scrapedJobs = await scrapeLinkedInJobs(keywordList, location);
    res.json(scrapedJobs);
  } catch (error) {
    console.error('Error scraping jobs:', error);
    res.status(500).json({ error: 'Failed to scrape jobs' });
  }
});

async function scrapeLinkedInJobs(keywords, location, numPages = 5) {
  const jobs = [];
  const baseUrl = 'https://www.linkedin.com/jobs/search/';

  for (const keyword of keywords) {
    const url = `${baseUrl}?keywords=${encodeURIComponent(keyword)}&location=${encodeURIComponent(location)}`;
    
    for (let page = 0; page < numPages; page++) {
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
          const location = $(element).find('.job-search-card__location').text().trim();
          const link = $(element).find('.base-card__full-link').attr('href');

          if (title && company && location && link) {
            jobs.push({ title, company, location, link });
          }
        });

        // Random delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 1000));
      } catch (error) {
        console.error(`Error scraping page ${page} for keyword ${keyword}:`, error);
      }
    }
  }

  return jobs.filter(job => !job.li