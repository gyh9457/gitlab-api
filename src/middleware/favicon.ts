import favicon from 'express-favicon'
import {APP} from '../config'

export default favicon(`${APP}/public/favicon.ico`)