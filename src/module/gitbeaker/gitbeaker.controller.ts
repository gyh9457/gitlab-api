
import { Controller, Get } from '@nestjs/common'
import { GitbeakerService } from './gitbeaker.service'

@Controller('gitbeaker')
export class  GitbeakerController {
  constructor(private readonly gitbeakerService: GitbeakerService) {}

  @Get('projects')
  async getProjects() {
    return this.gitbeakerService.getProjects()
  }
}