import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class JobMatch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jobId: string;

  @Column()
  resumeId: string;

  @Column('float')
  matchScore: number;

  @Column('simple-json')
  recommendedActions: string[];
}