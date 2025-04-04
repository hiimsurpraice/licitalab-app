// backend/src/opportunities/opportunity.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Opportunities')
export class Opportunity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column('text')
  title: string;

  @Column()
  type: string;

  @Column({ type: 'boolean' })
  is_followed: boolean;

  @Column({ type: 'timestamp' })
  publish_date: Date;

  @Column({ type: 'timestamp' })
  close_date: Date;
}
