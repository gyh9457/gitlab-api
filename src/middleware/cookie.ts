import cookieParser from 'cookie-parser'
import {SESSION} from '../config'

/**
 * cookie 配置参见：https://github.com/expressjs/cookie-parser
 */
export default cookieParser(SESSION.secret)