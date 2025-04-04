// backend/src/opportunities/opportunities.controller.ts
import { Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { OpportunitiesService } from './opportunities.service';

@Controller('opportunities')
export class OpportunitiesController {
  constructor(private readonly service: OpportunitiesService) {}

  @Get()
  getAll() {
    return this.service.findAllCurrent();
  }

  @Get('followed')
  getFollowed() {
    return this.service.findFollowed();
  }

  @Patch(':id/follow')
  async follow(@Param('id') id: number, @Query('value') value: string) {
    const isFollowed = value === 'true'
    return this.service.markFollowed(id, isFollowed)
  }
}
