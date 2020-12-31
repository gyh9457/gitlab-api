const pkg = require('../../package.json')

/**
 * session 配置
 * 更多配置参见：https://github.com/expressjs/session
 */
export default {
  secret: `${pkg.name}-cookie-secret`,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 86400 * 1000,
    httpOnly: true,
    secure: 'auto'
  }
}