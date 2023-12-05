import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { SignInBodyDto, SignUpBodyDto, getSessionInfoDto } from './dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('sign-up')
  @ApiCreatedResponse()
  signUp(@Body() body: SignUpBodyDto) {
    return null;
  }

  @Post('sign-in')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  signIn(@Body() body: SignInBodyDto) {
    return null;
  }

  @Post('sign-out')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  singOut() {}

  @Get('session')
  @ApiOkResponse({
    type: getSessionInfoDto,
  })
  getSessionInfo() {
    return null;
  }
}
function ApiCreateResponse(): (
  target: AuthController,
  propertyKey: 'signUp',
  descriptor: TypedPropertyDescriptor<(body: SignUpBodyDto) => void>,
) => void | TypedPropertyDescriptor<(body: SignUpBodyDto) => void> {
  throw new Error('Function not implemented.');
}
