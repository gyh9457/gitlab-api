import { Injectable } from '@nestjs/common'
import raise from '../../util/exception'
import { getAll, createOne, getOne, updateOne, deleteOne, Data } from './mock/data'
import EXCEPTION from '../../constant/exception'

@Injectable()
export class UserService {
  async getList(): Promise<Data[]> {
    return getAll()
  }

  async createOne({ name }: { name: string }) {
    const item = createOne({
      name
    })
    return item
  }

  async getOne(id: string) {
    const item = getOne(Number(id))
    if (!item || item._delete) {
      throw raise(EXCEPTION.ITEM_NOT_EXIST)
    }
    return item
  }

  async updateOne(id: string, { name }: { name: string }) {
    const item = updateOne(Number(id), { name })
    return item
  }

  async deleteOne(id: string) {
    deleteOne(Number(id))
    return { done: true }
  }
}