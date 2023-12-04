import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';

class HelloMessageDto {
  @ApiProperty()
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ type: HelloMessageDto })
  getHello(): HelloMessageDto {
    return { message: this.appService.getHello() };
  }
}
