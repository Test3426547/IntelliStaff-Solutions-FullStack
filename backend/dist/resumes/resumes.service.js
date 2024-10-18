"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumesService = void 0;
const common_1 = require("@nestjs/common");
let ResumesService = class ResumesService {
    constructor() {
        this.resumes = [];
    }
    create(createResumeDto) {
        const newResume = Object.assign({ id: Date.now().toString() }, createResumeDto);
        this.resumes.push(newResume);
        return { message: 'Resume submitted successfully', resume: newResume };
    }
    findAll() {
        return this.resumes;
    }
    findOne(id) {
        return this.resumes.find(resume => resume.id === id);
    }
    update(id, updateResumeDto) {
        const resumeIndex = this.resumes.findIndex(resume => resume.id === id);
        if (resumeIndex > -1) {
            this.resumes[resumeIndex] = Object.assign(Object.assign({}, this.resumes[resumeIndex]), updateResumeDto);
            return { message: 'Resume updated successfully', resume: this.resumes[resumeIndex] };
        }
        return { message: 'Resume not found' };
    }
    remove(id) {
        const resumeIndex = this.resumes.findIndex(resume => resume.id === id);
        if (resumeIndex > -1) {
            const removedResume = this.resumes.splice(resumeIndex, 1);
            return { message: 'Resume removed successfully', resume: removedResume[0] };
        }
        return { message: 'Resume not found' };
    }
};
ResumesService = __decorate([
    (0, common_1.Injectable)()
], ResumesService);
exports.ResumesService = ResumesService;
//# sourceMappingURL=resumes.service.js.map