import { Module } from '@nestjs/common';
import { ScController } from './sc.controller';
import { ScService } from './sc.service';

@Module({
  controllers: [ScController],
  providers: [ScService],
})
export class ScModule {}
