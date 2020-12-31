import { INestApplication } from "@nestjs/common";
import cors from './cors'
import session from './session'
import requestId from './request-id'
import proxy from './proxy'
import cookie from './cookie'
import logger from './logger'

export default function(app: INestApplication) {
  app.enableCors(cors)
  app.use(cookie)
  app.use(session)
  app.use(requestId)
  proxy(app)
  app.use(logger)
}