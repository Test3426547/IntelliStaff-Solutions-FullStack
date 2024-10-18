import { Injectable } from '@nestjs/common';
import * as brain from 'brain.js';

@Injectable()
export class JobMatchingService {
  private network: brain.NeuralNetwork;

  constructor() {
    this.initializeNetwork();
  }

  private initializeNetwork() {
    this.network = new brain.NeuralNetwork();
  }

  async findMatches(resumeData: any, jobListings: any[]) {
    const matches = [];

    for (const job of jobListings) {
      const matchScore = this.calculateMatchScore(resumeData, job);
      if (matchScore > 0.7) {  // Threshold for a good match
        matches.push({ job, score: matchScore });
      }
    }

    return matches.sort((a, b) => b.score - a.score);
  }

  private calculateMatchScore(resumeData: any, job: any) {
    // Convert resume and job data into numerical features
    const input = this.prepareInputData(resumeData, job);
    
    // Use the neural network to predict the match score
    const output = this.network.run(input);
    
    return output.score;
  }

  private prepareInputData(resumeData: any, job: any) {
    // Convert resume and job data into a format suitable for the neural network
    // This is a simplified example and should be expanded based on your specific data structure
    return {
      skillsMatch: this.calculateSkillsMatch(resumeData.skills, job.requiredSkills),
      experienceMatch: this.calculateExperienceMatch(resumeData.experience, job.requiredExperience),
      educationMatch: this.calculateEducationMatch(resumeData.education, job.requiredEducation),
    };
  }

  private calculateSkillsMatch(resumeSkills: string[], jobSkills: string[]): number {
    const matchingSkills = resumeSkills.filter(skill => jobSkills.includes(skill));
    return matchingSkills.length / jobSkills.length;
  }

  private calculateExperienceMatch(resumeExperience: number, jobExperience: number): number {
    return Math.min(resumeExperience / jobExperience, 1);
  }

  private calculateEducationMatch(resumeEducation: string, jobEducation: string): number {
    // Simplified education matching logic
    return resumeEducation === jobEducation ? 1 : 0;
  }
}