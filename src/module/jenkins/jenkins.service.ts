import { Injectable } from '@nestjs/common'
import jenkinsApi from 'jenkins-api'
import { token } from './config'

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
}