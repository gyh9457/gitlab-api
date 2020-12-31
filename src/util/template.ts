import * as nunjucks from 'nunjucks'
import { NestExpressApplication } from '@nestjs/platform-express'
import {APP} from '../config'

export function setEngine(app: NestExpressApplication) {
  const environment = nunjucks.configure(
    [`${APP}/view`],
    {
      autoescape: true,
      throwOnUndefined: false,
      trimBlocks: false,
      lstripBlocks: false,
      watch: true,
      noCache: process.env.NODE_ENV !== "production" ? true : false,
      express: app
    }
  )
  app.engine('njk', environment.render)
  app.setViewEngine('njk')
  app.set("view cache", true);
}