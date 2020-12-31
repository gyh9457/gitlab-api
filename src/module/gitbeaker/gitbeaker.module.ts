import { Module } from '@nestjs/common'
import { GitbeakerController } from './gitbeaker.controller'
import { GitbeakerService } from './gitbeaker.service'

@Module({
  providers: [GitbeakerService],
  controllers: [GitbeakerController]
})
export class GitbeakerModule {}