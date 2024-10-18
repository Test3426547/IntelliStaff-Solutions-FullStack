import { CreateJobDto } from './dto/create-job.dto';
export declare class JobsService {
    private jobs;
    create(createJobDto: CreateJobDto): {
        message: string;
        job: {
            title: string;
            description: string;
            id: string;
        };
    };
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updateJobDto: Partial<CreateJobDto>): {
        message: string;
        job: any;
    } | {
        message: string;
        job?: undefined;
    };
    remove(id: string): {
        message: string;
        job: any;
    } | {
        message: string;
        job?: undefined;
    };
}
