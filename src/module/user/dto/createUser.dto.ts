import { ApiProperty,ApiResponseProperty,ApiBody } from '@nestjs/swagger'
import { MaxLength } from 'class-validator'
export class UserDto {

  @ApiResponseProperty({description:'用户姓名'})
  @ApiProperty({description:'用户姓名'})
  @MaxLength(20)
  name: string;
}