import { Injectable } from '@nestjs/common'
import request from '@gem-mine/request'
import axios from 'axios'
import { impresonation_token, root_token } from './config'

@Injectable()
export class GitlabService {
  async getVersion() {
    try {
      const version = await request.get('http://192.168.85.90:9527/api/v4/version', {
        headers: {
          'PRIVATE-TOKEN': impresonation_token
        }
      })
      return version
    } catch (error) {
      console.log(error.data)
    }
  }

  async createProject(data) {
    try {
      const pro = await request.post('http://192.168.85.90:9527/api/v4/projects/user/5', {
        headers: {
          'PRIVATE-TOKEN': root_token
        },
        data
      })
      return pro
    } catch (error) {
      console.log(error.data)
    }
  }

  async getTags(id) {
    try {
      console.log(id)
      const tags = await request.get(`http://192.168.85.90:9527/api/v4/projects/${id}/repository/tags`, {
        headers: {
          'PRIVATE-TOKEN': impresonation_token
        }
      })
      return tags
    } catch (error) {
      console.log(error.data)
    }
  }

  async createCommit(data) {
    try {
      const tags = await request.post(`http://192.168.85.90:9527/api/v4/projects/${data.id}/repository/commits`, {
        headers: {
          'PRIVATE-TOKEN': impresonation_token
        },
        data
      })
      return tags
    } catch (error) {
      console.log(error.data)
    }
  }

  async createBranch(data) {
    try {
      const branch = await request.post(`http://192.168.85.90:9527/api/v4/projects/${data.id}/repository/branches`, {
        headers: {
          'PRIVATE-TOKEN': impresonation_token
        },
        data
      })
      return branch
    } catch (error) {
      console.log(error.data)
    }
  }

  async compare(params) {
    try {
      const diff = await request.get(`http://192.168.85.90:9527/api/v4/projects/${params.id}/repository/compare`, {
        headers: {
          'PRIVATE-TOKEN': impresonation_token
        },
        params
      })
      return diff
    } catch (error) {
      console.log(error.data)
    }
  }

  async getContent(params) {
    try {
      const file = await request.get(`http://192.168.85.90:9527/api/v4/projects/${params.id}/repository/files/${params.filePath}`, {
        headers: {
          'PRIVATE-TOKEN': impresonation_token
        },
        params: {
          ref: params.ref
        }
      })
      const { content } = file
      return {
        version: JSON.parse(Buffer.from(content, 'base64').toString()).version
      }
    } catch (error) {
      console.log(error.data)
    }
  }

  async createHooks(data) {
    try {
      const hook = await request.post(`http://192.168.85.90:9527/api/v4/projects/${data.id}/hooks`, {
        headers: {
          'PRIVATE-TOKEN': impresonation_token
        },
        data
      })
      return hook
    } catch (error) {
      console.log(error.data)
    }
  }
}