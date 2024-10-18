import { ResumesService } from './resumes.service';
import { CreateResumeDto } from './dto/create-resume.dto';
export declare class ResumesController {
    private readonly resumesService;
    constructor(resumesService: ResumesService);
    create(createResumeDto: CreateResumeDto): {
        message: string;
        resume: {
            content: string;
            id: string;
        };
    };
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updateResumeDto: Partial<CreateResumeDto>): {
        message: string;
        resume: any;
    } | {
        message: string;
        resume?: undefined;
    };
    remove(id: string): {
        message: string;
        resume: any;
    } | {
        message: string;
        resume?: undefined;
    };
}
