import { createProxyMiddleware } from 'http-proxy-middleware'
import { INestApplication } from '@nestjs/common';
import { PROXY } from '../config'

export default function(app: INestApplication) {
  Object.keys(PROXY).map(key => {
    app.use(key, createProxyMiddleware(PROXY[key]))
  })
}