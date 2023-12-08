import {Injectable} from '@nestjs/common';
import {DbService} from "../db/db.service";
import {AddBlockItemDto, BlockListQueryDto} from "./dto";

@Injectable()
export class BlocklistService {
  constructor(private db: DbService) {
  }

  create(userId: number) {
    return this.db.blockList.create({
      data: {
        ownerId: userId
      }
    });
  }

  getByUserId(userId: number, query: BlockListQueryDto) {
    return this.db.blockList.findFirstOrThrow({
      where: {ownerId: userId},
      include: {
        items: {
          where: {data: {contains: query.q, mode: 'insensitive'}},
          orderBy: {createdAt: 'desc'}
        }
      }
    })
  }

  async addItem(userId: number, data: AddBlockItemDto) {
    const blocklist = await this.db.blockList.findUniqueOrThrow({
      where: {ownerId: userId},
    })
    return this.db.blockItem.create({
      data: {blockListId: blocklist.id, ...data}
    })
  }

  async removeItem(userId: number, itemId: number) {
    const blocklist = await this.db.blockList.findUniqueOrThrow({
      where: {ownerId: userId},
    })

    return this.db.blockItem.delete({where: {blockListId: blocklist.id, id: itemId}})
  }
}
