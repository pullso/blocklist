import { Injectable } from '@nestjs/common';
import { PatchAccountDto } from './dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AccountService {
  constructor(private db: DbService) {}

  create(userId: number) {
    return this.db.account.create({
      data: {
        ownerId: userId,
        isBlockingEnabled: false,
      },
    });
  }

  getAccount(userId: number) {
    return this.db.account.findUniqueOrThrow({ where: { ownerId: userId } });
  }

  pathAccount(userId: number, path: PatchAccountDto) {
    return this.db.account.update({
      where: { ownerId: userId },
      data: { ...path },
    });
  }
}
