import { SignUpBodyDto } from './dto';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpBodyDto {
  @ApiProperty({
    example: 'test@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: 'test',
  })
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({
    example: 'test@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: 'test',
  })
  password: string;
}

export class getSessionInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;
}
