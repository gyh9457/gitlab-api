import {  HttpException, Catch, ArgumentsHost } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { error as logger } from '../util/logger' 

@Catch(HttpException)
export class ExceptionFilter extends BaseExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<any>();
    const { id, method, url } = request
    console.info(logger.error)
    logger.error('', {
      requestId:id,
      method,
      url,
      exception
    })
    super.catch(exception, host);
  }
}