import { Logger } from '@nestjs/common'
import expressWinston from 'express-winston'
import { format } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import {LOGGER} from '../config'

const { combine, timestamp, printf } = format

export default expressWinston.logger({
 format: combine(
   timestamp(),
   printf(({ timestamp, meta }) => {
     const { req, res, responseTime } = meta
     const { id, url, headers, method } = req
     Logger.log(`>> ${method}: ${url} ${responseTime}ms [${id}]`)
     const data = {
      requestId: id,
      time: responseTime,
      code: res.statusCode,
      method,
      url,
      headers
     }
    return `${timestamp} ${JSON.stringify(data)}`
  })
 ),
 transports: [
  new DailyRotateFile({
    filename: '%DATE%.log',
    ...LOGGER
  })
 ],
 requestWhitelist: [
   'url',
   'headers',
   'method',
   'httpVersion',
   'originalUrl',
   'query',
   'id'
 ]
})