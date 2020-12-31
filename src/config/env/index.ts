import fs = require('fs')

const _env = process.env
/** 当前运行期的环境变量 */
export const ENV = _env.SERVER_ENV || _env.NODE_ENV

function getEnvConfig(){
  if (ENV) {
    const p = `${__dirname}/config.${ENV}.js`
    console.info('defaultConfig')
    console.info(p, fs.existsSync(p))
    if (fs.existsSync(p)) {
      const { default: envConfig } = require(p)
      return envConfig
    }
  }
  return {}
}


export const envConfig = getEnvConfig()