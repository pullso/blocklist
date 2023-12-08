import {Module} from '@nestjs/common';
import {BlocklistService} from './blocklist.service';
import {BlocklistController} from './blocklist.controller';
import {DbModule} from "../db/db.module";

@Module({
  imports: [DbModule],
  providers: [BlocklistService],
  controllers: [BlocklistController]
})
export class BlocklistModule {
}
