"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
let JobsService = class JobsService {
    constructor() {
        this.jobs = [];
    }
    create(createJobDto) {
        const newJob = Object.assign({ id: Date.now().toString() }, createJobDto);
        this.jobs.push(newJob);
        return { message: 'Job posted successfully', job: newJob };
    }
    findAll() {
        return this.jobs;
    }
    findOne(id) {
        return this.jobs.find(job => job.id === id);
    }
    update(id, updateJobDto) {
        const jobIndex = this.jobs.findIndex(job => job.id === id);
        if (jobIndex > -1) {
            this.jobs[jobIndex] = Object.assign(Object.assign({}, this.jobs[jobIndex]), updateJobDto);
            return { message: 'Job updated successfully', job: this.jobs[jobIndex] };
        }
        return { message: 'Job not found' };
    }
    remove(id) {
        const jobIndex = this.jobs.findIndex(job => job.id === id);
        if (jobIndex > -1) {
            const removedJob = this.jobs.splice(jobIndex, 1);
            return { message: 'Job removed successfully', job: removedJob[0] };
        }
        return { message: 'Job not found' };
    }
};
JobsService = __decorate([
    (0, common_1.Injectable)()
], JobsService);
exports.JobsService = JobsService;
//# sourceMappingURL=jobs.service.js.map