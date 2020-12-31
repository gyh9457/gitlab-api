import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './module/user/user.module'
import { GitbeakerModule } from './module/gitbeaker/gitbeaker.module'
@Module({
  imports: [
    UserModule,
    GitbeakerModule,
    ConfigModule.forRoot(),
  ]
})
export class AppModule {}
