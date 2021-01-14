import { Module } from '@nestjs/common'
import { GitlabController } from './gitlab.controller'
import { GitlabService } from './gitlab.service'

@Module({
  providers: [GitlabService],
  controllers: [GitlabController]
})
export class GitlabModule {}