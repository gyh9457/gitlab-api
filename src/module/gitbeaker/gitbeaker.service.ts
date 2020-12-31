import { Injectable } from '@nestjs/common'
import { Gitlab } from '@gitbeaker/node'
import { token } from './config'

@Injectable()
export class GitbeakerService {
  async getProjects() {
    const api = new Gitlab({
      host: 'http://192.168.168.128:9527',
      token
    })
    const projects = await api.Projects.all()
    return projects
  }
}