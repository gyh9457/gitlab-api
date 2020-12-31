import { createLogger, format } from 'winston'
import { Logger } from '@nestjs/common'
import DailyRotateFile from 'winston-daily-rotate-file'
import {LOGGER} from '../config'

const { combine, timestamp, printf } = format

export const fatal = createLogger({
  format: combine(
    timestamp(),
    printf(({ timestamp, data }) => {
      return `${timestamp} ${JSON.stringify(data)}`
    })
  ),
  transports: [
    new DailyRotateFile({
      filename: '%DATE%.fatal.log',
      level: 'error',
      ...LOGGER
    })
  ]
})

export const error = createLogger({
  format: combine(
    timestamp(),
    printf(({ timestamp, requestId, url, method, exception }) => {
      console.info( requestId)
      Logger.error(exception)
      return `${timestamp} ${requestId} ${method} ${url}: ${JSON.stringify(exception)}`
    })
  ),
  transports: [
    new DailyRotateFile({
      filename: '%DATE%.error.log',
      level: 'error',
      ...LOGGER
    })
  ]
})

export const info = createLogger({
  format: combine(
    timestamp(),
    printf(({ timestamp, data }) => {
      return `${timestamp} ${JSON.stringify(data)}`
    })
  ),
  transports: [
    new DailyRotateFile({
      filename: '%DATE%.log',
      ...LOGGER
    })
  ]
})
