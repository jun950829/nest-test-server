import { EthersService } from "./ethers.service";
export declare class EthersController {
    private readonly ethersService;
    constructor(ethersService: EthersService);
    sendPTC(): string;
}
