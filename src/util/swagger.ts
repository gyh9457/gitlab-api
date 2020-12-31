import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express'

export function setWeagger(app:NestExpressApplication){
  // 配置api文档
  const options = new DocumentBuilder() 
  .setTitle('bound api')
  .setDescription('The bound API description')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  //指定文档路径
  SwaggerModule.setup('api-docs', app, document);
}
