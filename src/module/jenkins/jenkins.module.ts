import { Module } from '@nestjs/common'
import { JenkinsController } from './jenkins.controller'
import { JenkinsService } from './jenkins.service'

@Module({
  providers: [JenkinsService],
  controllers: [JenkinsController]
})
export class JenkinsModule {}