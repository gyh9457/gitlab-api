
import { Controller, Get } from '@nestjs/common'
import { GitlabService } from './gitlab.service'

@Controller('gitlab')
export class  GitlabController {
  constructor(private readonly gitlabService: GitlabService) {}

  @Get('version')
  async getProjects() {
    return this.gitlabService.getProjects()
  }
}