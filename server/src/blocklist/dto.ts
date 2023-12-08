import {ApiProperty} from "@nestjs/swagger";
import {$Enums} from "@prisma/client";
import {IsIn, IsOptional} from "class-validator";

export class BlockListItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  blockListId: number;

  @ApiProperty({
    enum: [$Enums.BlockItemType.Keyword, $Enums.BlockItemType.Website]
  })
  type: $Enums.BlockItemType

  @ApiProperty()
  data: string;

  @ApiProperty()
  createdAt: Date;
}

export class BlockListDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty({
    type: [BlockListItemDto]
  })
  items: BlockListItemDto[];
}

export class BlockListQueryDto {
  @ApiProperty({nullable: true})
  @IsOptional()
  q?: string;
}

export class AddBlockItemDto {
  @ApiProperty({
    enum: [$Enums.BlockItemType.Keyword, $Enums.BlockItemType.Website]
  })
  @IsIn([$Enums.BlockItemType.Keyword, $Enums.BlockItemType.Website])
  type: $Enums.BlockItemType

  @ApiProperty()
  data: string;
}
