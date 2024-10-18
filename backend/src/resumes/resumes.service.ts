import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';

@Injectable()
export class ResumesService {
  private resumes = [];

  create(createResumeDto: CreateResumeDto) {
    const newResume = { id: Date.now().toString(), ...createResumeDto };
    this.resumes.push(newResume);
    return { message: 'Resume submitted successfully', resume: newResume };
  }

  findAll() {
    return this.resumes;
  }

  findOne(id: string) {
    return this.resumes.find(resume => resume.id === id);
  }

  update(id: string, updateResumeDto: Partial<CreateResumeDto>) {
    const resumeIndex = this.resumes.findIndex(resume => resume.id === id);
    if (resumeIndex > -1) {
      this.resumes[resumeIndex] = { ...this.resumes[resumeIndex], ...updateResumeDto };
      return { message: 'Resume updated successfully', resume: this.resumes[resumeIndex] };
    }
    return { message: 'Resume not found' };
  }

  remove(id: string) {
    const resumeIndex = this.resumes.findIndex(resume => resume.id === id);
    if (resumeIndex > -1) {
      const removedResume = this.resumes.splice(resumeIndex, 1);
      return { message: 'Resume removed successfully', resume: removedResume[0] };
    }
    return { message: 'Resume not found' };
  }
}