import { NestFactory, HttpAdapterHost } from '@nestjs/core'
import { Logger,ValidationPipe } from '@nestjs/common'
import { NestExpressApplication } from '@nestjs/platform-express'

import { ExceptionFilter } from './filter/exceptionFilter'
import { AppModule } from './app.module'
import registerMiddleware from './middleware'
import {setWeagger} from './util/swagger'
import {APP, PORT} from './config'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  registerMiddleware(app)
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new ExceptionFilter(httpAdapter))  // 设置全局异常过滤器
  app.useGlobalPipes(new ValidationPipe()) //开启一个全局验证管道
  app.useStaticAssets(`${APP}/public`);
  setWeagger(app) // 设置wagger API文档


  await app.listen(PORT)
  Logger.log(`app is listening to ${PORT}`)
}
bootstrap();
