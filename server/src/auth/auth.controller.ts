import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('sign-up')
  signUp() {}

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  signIn() {}

  @Post('sign-out')
  @HttpCode(HttpStatus.OK)
  singOut() {}

  @Get('session')
  getSessionInfo() {}
}
