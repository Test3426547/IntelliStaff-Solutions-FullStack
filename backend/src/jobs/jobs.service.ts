import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
  private jobs = [];

  create(createJobDto: CreateJobDto) {
    const newJob = { id: Date.now().toString(), ...createJobDto };
    this.jobs.push(newJob);
    return { message: 'Job posted successfully', job: newJob };
  }

  findAll() {
    return this.jobs;
  }

  findOne(id: string) {
    return this.jobs.find(job => job.id === id);
  }

  update(id: string, updateJobDto: Partial<CreateJobDto>) {
    const jobIndex = this.jobs.findIndex(job => job.id === id);
    if (jobIndex > -1) {
      this.jobs[jobIndex] = { ...this.jobs[jobIndex], ...updateJobDto };
      return { message: 'Job updated successfully', job: this.jobs[jobIndex] };
    }
    return { message: 'Job not found' };
  }

  remove(id: string) {
    const jobIndex = this.jobs.findIndex(job => job.id === id);
    if (jobIndex > -1) {
      const removedJob = this.jobs.splice(jobIndex, 1);
      return { message: 'Job removed successfully', job: removedJob[0] };
    }
    return { message: 'Job not found' };
  }
}