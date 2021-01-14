import { Injectable } from '@nestjs/common'
import axios from 'axios'
import { impresonation_token } from './config'

@Injectable()
export class GitlabService {
  async getProjects() {
    const a = await axios.get('http://http://192.168.168.128:9527/api/v4/version', {
      headers: {
        'PRIVATE-TOKEN': impresonation_token
      }
    })
    console.log(a)
    return a
  }
}