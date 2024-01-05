import { AppGateway } from "src/websockets/app.gateway";
export declare class EthersService {
    private appGateway;
    constructor(appGateway: AppGateway);
    sendPTC(): string;
    realSendPTC(appGateway: any, gb: string): void;
}
