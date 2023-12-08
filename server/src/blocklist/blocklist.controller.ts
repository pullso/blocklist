import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UseGuards} from '@nestjs/common';
import {ApiCreatedResponse, ApiOkResponse} from "@nestjs/swagger";
import {AddBlockItemDto, BlockListDto, BlockListItemDto, BlockListQueryDto} from "./dto";
import {AuthGuard} from "../auth/auth.guard";
import {SessionInfo} from "../auth/session-info.decorator";
import {GetSessionInfoDto} from "../auth/dto";

@Controller('block-list')
@UseGuards(AuthGuard)
export class BlocklistController {
  @Get()
  @ApiOkResponse({type: BlockListDto})
  getList(@Query() query: BlockListQueryDto, @SessionInfo() session: GetSessionInfoDto) {

  }


  @Post('item')
  @ApiCreatedResponse({type: BlockListItemDto})
  addBlockItem(@Body() body: AddBlockItemDto, @SessionInfo() session: GetSessionInfoDto) {

  }

  @Delete('item/:id')
  removeBlockItem(@Param(ParseIntPipe) id: number, @SessionInfo() session: GetSessionInfoDto) {
  }

}
