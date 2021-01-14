import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './module/user/user.module'
import { GitbeakerModule } from './module/gitbeaker/gitbeaker.module'
import { JenkinsModule } from './module/jenkins/jenkins.module'
@Module({
  imports: [
    UserModule,
    GitbeakerModule,
    JenkinsModule,
    ConfigModule.forRoot(),
  ]
})
export class AppModule {}
