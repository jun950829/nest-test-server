import { Controller, Get } from "@nestjs/common";
import { EthersService } from "./ethers.service";

@Controller()
export class EthersController {
  constructor(private readonly ethersService: EthersService) {}

  @Get("/ethers")
  sendPTC(): string {
    return this.ethersService.sendPTC();
  }
}
