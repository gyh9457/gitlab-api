
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query
} from '@nestjs/common'
import { from } from 'rxjs'
import { GitlabService } from './gitlab.service'

@Controller('gitlab')
export class  GitlabController {
  constructor(private readonly gitlabService: GitlabService) {}

  @Get('version')
  async getVersion() {
    const result = await this.gitlabService.getVersion()
    console.log(result)
    return result
  }

  @Post('/')
  async createProject(@Body() data) {
    const result = await this.gitlabService.createProject(data)
    return result
  }

  @Get('/tags')
  async getTags(@Param() param) {
    console.log(param)
    const id = 9
    const result = await this.gitlabService.getTags(id)
    return result
  }

  @Post('commit')
  async createCommit(@Body() data) {
    const result = await this.gitlabService.createCommit(data)
    return result
  }

  @Post('/branch')
  async createBranch(@Body() data) {
    const result = await this.gitlabService.createBranch(data)
    return result
  }

  @Get('/compare')
  async compare(@Query() query) {
    const { id, from, to} = query
    console.log(id, from, to)
    const result = await this.gitlabService.compare({
      id,
      from,
      to
    })
    return result
  }

  @Get('/content')
  async content(@Query() query) {
    const { id, filePath, ref } = query
    console.log(filePath)
    const result = await this.gitlabService.compare({
      id,
      filePath,
      ref
    })
    return result
  }
}