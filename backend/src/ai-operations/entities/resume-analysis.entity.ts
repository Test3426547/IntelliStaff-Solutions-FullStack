import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ResumeAnalysis {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  resumeId: string;

  @Column('simple-json')
  skills: string[];

  @Column()
  experience: string;

  @Column()
  education: string;

  @Column('simple-json')
  additionalInfo: Record<string, any>;
}