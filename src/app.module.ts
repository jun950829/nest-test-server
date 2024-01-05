import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

//websocket
import { AppGateway } from "./websockets/app.gateway";

import { EthersModule } from "./ethers/ethers.module";

@Module({
  imports: [EthersModule],
  controllers: [AppController],
  providers: [AppGateway, AppService],
})
export class AppModule {}
