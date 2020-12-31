import { HttpException, HttpStatus, HttpCode } from '@nestjs/common'

function raise(response: string | MethodDecorator = HttpCode(HttpStatus.INTERNAL_SERVER_ERROR), status = HttpStatus.INTERNAL_SERVER_ERROR) {
  return new HttpException(response, status)
}

export default raise