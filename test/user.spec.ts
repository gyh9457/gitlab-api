import { Test } from '@nestjs/testing'
import { UserController } from '../src/module/user/user.controller'
import { UserService } from '../src/module/user/user.service'

describe('user module', () => {
  let userController: UserController
  let userService: UserService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserService],
      controllers: [UserController]
    }).compile()

    userController = module.get<UserController>(UserController)
    userService = module.get<UserService>(UserService)
  })

  describe('getList', () => {
    it('should return an array of user', async () => {
      const result = [{ id: 1, name: 'a' }]
      jest.spyOn(userService, 'getList').mockImplementation(async () => result)

      expect(await userController.getList()).toBe(result)
    })
  })

  describe('getOne', () => {
    it('should return a user', async () => {
      const result = { id: 1, name: 'a' }
      jest.spyOn(userService, 'getOne').mockImplementation(async () => result)

      expect(await userController.getOne('1')).toBe(result)
    })
  })

  describe('createOne', () => {
    it('should return a new user', async () => {
      const result = { id: 2, name: 'b' }
      jest.spyOn(userService, 'createOne').mockImplementation(async () => result)

      expect(await userController.createOne({ name: 'b' })).toBe(result)
    })
  })

  describe('updateOne', () => {
    it('should return a new user', async () => {
      const result = { id: 1, name: 'c' }
      jest.spyOn(userService, 'updateOne').mockImplementation(async () => result)

      expect(await userController.updateOne('1', { name: 'c' })).toBe(result)
    })
  })

  describe('deleteOne', () => {
    it('should delete a user', async () => {
      const result = { done: true }
      jest.spyOn(userService, 'deleteOne').mockImplementation(async () => result)

      expect(await userController.deleteOne('1')).toBe(result)
    })
  })
})