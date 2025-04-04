// backend/src/opportunities/opportunities.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual } from 'typeorm';
import { Opportunity } from './opportunity.entity';

@Injectable()
export class OpportunitiesService {
  constructor(
    @InjectRepository(Opportunity)
    private repo: Repository<Opportunity>,
  ) {}

  findAllCurrent() {
    const now = new Date()
    return this.repo.find({
      where: { close_date: MoreThanOrEqual(now) },
      order: { publish_date: 'DESC' },
    });
  }

  findFollowed() {
    const now = new Date();
    return this.repo.find({
      where: {
        is_followed: true,
        close_date: MoreThanOrEqual(now),
      },
      order: { publish_date: 'DESC' },
    });
  }

  async markFollowed(id: number, followed: boolean) {
    const opp = await this.repo.findOneBy({ id })
    if (!opp) return null
    opp.is_followed = followed
    return this.repo.save(opp)
  }
}
