from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import uvicorn
from linkedin_scraper import LinkedInScraper

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow the Next.js frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class Resume(BaseModel):
    content: str

class Job(BaseModel):
    title: str
    description: str

class ScrapedJob(BaseModel):
    title: str
    company: str
    location: str
    link: str

# In-memory storage (replace with database in production)
resumes: List[Resume] = []
jobs: List[Job] = []

@app.post("/submit-resume")
async def submit_resume(resume: Resume):
    resumes.append(resume)
    return {"message": "Resume submitted successfully"}

@app.post("/post-job")
async def post_job(job: Job):
    jobs.append(job)
    return {"message": "Job posted successfully"}

@app.get("/jobs")
async def get_jobs():
    return jobs

@app.get("/resumes")
async def get_resumes():
    return resumes

@app.get("/scrape-jobs", response_model=List[ScrapedJob])
async def scrape_jobs(keywords: str, location: str = "Australia"):
    scraper = LinkedInScraper()
    keyword_list = keywords.split(',')
    scraped_jobs = scraper.scrape_jobs(keyword_list, location)
    filtered_jobs = scraper.filter_jobs(scraped_jobs, ["seek.com", "indeed.com"])
    return filtered_jobs

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)