// backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Opportunity } from './opportunities/opportunity.entity';
import { OpportunitiesModule } from './opportunities/opportunities.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'opportunities',
      entities: [Opportunity],
      synchronize: false,
    }),
    OpportunitiesModule,
  ],
})
export class AppModule {}
