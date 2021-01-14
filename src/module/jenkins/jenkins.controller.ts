
import { Controller, Get, Res } from '@nestjs/common'
import { Response} from 'express'
import { JenkinsService } from './jenkins.service'

@Controller('jenkins')
export class  JenkinsController {
  constructor(private readonly jenkinsService: JenkinsService) {}

  @Get('projects')
  async getProjects(@Res() res: Response) {
    this.jenkinsService.getProjects((result) => {
      res.send(result)
    })
  }
}