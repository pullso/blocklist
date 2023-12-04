import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { DbService } from './db/db.service';
class HelloMessageDto {
  @ApiProperty()
  message: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dbService: DbService,
  ) {}

  @Get()
  @ApiOkResponse({ type: HelloMessageDto })
  async getHello(): Promise<HelloMessageDto> {
    const users = await this.dbService.user.findMany({});
    console.log(users);

    return { message: this.appService.getHello() };
  }
}
