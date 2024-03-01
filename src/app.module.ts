import { Module } from '@nestjs/common';
import { ScModule } from './sc/sc.module';

@Module({
  imports: [ScModule],
})
export class AppModule {}
