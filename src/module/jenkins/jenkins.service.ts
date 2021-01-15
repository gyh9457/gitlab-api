import { Injectable } from '@nestjs/common'
import jenkinsApi from 'jenkins-api'
import request from '@gem-mine/request'
import { token, web_crumb, postman_crumb } from './config'
import { readFileSync } from 'fs'
import { resolve } from 'path'
@Injectable()
export class JenkinsService {
  async getProjects(callback) {
    const jenkins = jenkinsApi.init(`http://admin:${token}@192.168.168.128:9528`)
    jenkins.all_jobs({}, function(err, data) {
      if (err) {
        callback(err)
      }
      console.log(data)
      callback(data)
    })
  }

  async getCrumb() {
    try {
      const crumb = await request.get('http:/192.168.168.128:9528/crumbIssuer/api/xml', {
        auth: {
          username: 'admin',
          password: '123456'
        }
      })
      return crumb
    } catch (error) {
      console.log(error)
    }
  }

  async createItem(data) {
    try {
      let xml
      try {
        xml = readFileSync('D:\\ND-project\\cicd\\gitlab-api\\src\\module\\jenkins\\xml.xml')
      } catch (error) {
        console.log(error)
      }
      console.log(xml)
      const item = await request.post(`http://admin:${token}@192.168.168.128:9528/createItem`, {
        headers: {
          'Content-Type': 'application/xml',
          'Accept': '*/*'
        },
        data: xml,
        params: {
          name: data.name
        },
      })
      console.log(item)
      return item
    } catch (error) {
      console.log(error.data)
    }
  }

  async build(data) {
    try {
      const buildResult = await request.post(`http://admin:${token}@192.168.168.128:9528/job/${data.project}/build`)
      console.log(buildResult)
      return buildResult
    } catch (error) {
      console.log(error)
    }
  }

  async getJob(params) {
    try {
      const job = await request.get(`http://admin:${token}@192.168.168.128:9528/job/${params.project}/api/json`)
      return job
    } catch (error) {
      console.log(error)
    }
  }

  async getJobItem(params, id) {
    try {
      const job = await request.get(`http://admin:${token}@192.168.168.128:9528/job/${params.project}/${id}/api/json`)
      return job
    } catch (error) {
      console.log(error)
    }
  }

  async getProgressiveLog(params, id) {
    try {
      const log = await request.get(`http://admin:${token}@192.168.168.128:9528/job/${params.project}/${id}/logText/progressiveText`)
      return log
    } catch (error) {
      console.log(error)
    }
  }
}