import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  Res,
  Req,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { UserService } from './user.service'
import { UserDto } from './dto/createUser.dto'

@ApiTags('用户管理')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getList() {
    const result = await this.userService.getList()
    return result
  }

  @Post('/')
  async createOne(@Body() userDto: UserDto) {
    const data = await this.userService.createOne(userDto)
    return data
  }

  @Get('/:id')
  @ApiOkResponse ({description: '文件的dentryId （与path二选一）'})
  async getOne(@Param('id') id: string): Promise<UserDto> {
    const data =  this.userService.getOne(id)
    return data
  }

  @Put('/:id')
  async updateOne(@Param('id') id: string, @Body() { name }: { name: string }) {
    const data = await this.userService.updateOne(id, { name })
    return data
  }

  @Delete('/:id')
  async deleteOne(@Param('id') id: string) {
    const data = await this.userService.deleteOne(id)
    return data
  }

  @Get('/cookie/set')
  async setCookie(@Res() res: Response) {
    res.cookie('token', 'abcdefg')
    res.cookie('salt', 'haha', {
      maxAge: 60 * 1000
    })
    res.send({
      message: '请访问 /user/cookie/get 查看'
    })
  }

  @Get('/cookie/get')
  async getCookie(@Req() req: Request) {
    return {
      token: req.cookies.token,
      salt: req.cookies.salt
    }
  }

  @Get('/session/set')
  async setSession(@Req() req) {
    req.session.name = 'poly'
    return {
      message: '请访问 /examples/session/get 查看'
    }
  }

  @Get('/session/get')
  async getSession(@Req() req) {
    return {
      name: req.session.name
    }
  }
}