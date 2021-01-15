
import { Controller, Get, Res, Post, Body, Query, Param } from '@nestjs/common'
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

  @Post('/item')
  async createItem(@Body() data) {
    return this.jenkinsService.createItem(data)
  }

  @Get('/crumb')
  async getCrumb() {
    return this.jenkinsService.getCrumb()
  }

  @Post('/build')
  async build(@Body() data) {
    return this.jenkinsService.build(data)
  }

  @Get('/job')
  async getJob(@Query() query) {
    return this.jenkinsService.getJob(query)
  }

  @Get('/job/:id')
  async getJobItem(@Query() query, @Param('id') id) {
    return this.jenkinsService.getJobItem(query, id)
  }

  @Get('/log/:id')
  async getJobLog(@Query() query, @Param('id') id) {
    return this.jenkinsService.getProgressiveLog(query, id)
  }
}