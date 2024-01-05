import { Module } from "@nestjs/common";
import { EthersController } from "./ethers.controller";
import { EthersService } from "./ethers.service";
import { AppGateway } from "src/websockets/app.gateway";

@Module({
  imports: [],
  controllers: [EthersController],
  providers: [AppGateway, EthersService],
})
export class EthersModule {}
