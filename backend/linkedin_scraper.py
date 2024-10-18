import requests
from bs4 import BeautifulSoup
from typing import List, Dict
import time
import random

class LinkedInScraper:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        self.base_url = 'https://www.linkedin.com/jobs/search/'

    def scrape_jobs(self, keywords: List[str], location: str = 'Australia', num_pages: int = 5) -> List[Dict]:
        jobs = []
        for keyword in keywords:
            url = f"{self.base_url}?keywords={keyword}&location={location}"
            for page in range(num_pages):
                try:
                    response = requests.get(f"{url}&start={page*25}", headers=self.headers)
                    soup = BeautifulSoup(response.content, 'html.parser')
                    job_cards = soup.find_all('div', class_='base-card')

                    for card in job_cards:
                        job = {}
                        job['title'] = card.find('h3', class_='base-search-card__title').text.strip()
                        job['company'] = card.find('h4', class_='base-search-card__subtitle').text.strip()
                        job['location'] = card.find('span', class_='job-search-card__location').text.strip()
                        job['link'] = card.find('a', class_='base-card__full-link')['href']
                        
                        jobs.append(job)

                    time.sleep(random.uniform(1, 3))  # Random delay to avoid rate limiting
                except Exception as e:
                    print(f"Error scraping page {page} for keyword {keyword}: {str(e)}")

        return jobs

    def filter_jobs(self, jobs: List[Dict], excluded_sites: List[str]) -> List[Dict]:
        return [job for job in jobs if not any(site in job['link'] for site in excluded_sites)]

if __name__ == "__main__":
    scraper = LinkedInScraper()
    keywords = ["software engineer", "data scientist", "product manager"]
    all_jobs = scraper.scrape_jobs(keywords)
    filtered_jobs = scraper.filter_jobs(all_jobs, ["seek.com", "indeed.com"])
    
    print(f"Total jobs found: {len(all_jobs)}")
    print(f"Jobs after filtering: {len(filtered_jobs)}")
    for job in filtered_jobs[:5]:  # Print first 5 jobs as an example
        print(job)