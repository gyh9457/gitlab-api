import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './module/user/user.module'
import { GitlabModule } from './module/gitlab/gitlab.module'
import { JenkinsModule } from './module/jenkins/jenkins.module'
@Module({
  imports: [
    UserModule,
    GitlabModule,
    JenkinsModule,
    ConfigModule.forRoot(),
  ]
})
export class AppModule {}
