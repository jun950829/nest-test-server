"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthersService = void 0;
const common_1 = require("@nestjs/common");
const app_gateway_1 = require("../websockets/app.gateway");
let EthersService = class EthersService {
    constructor(appGateway) {
        this.appGateway = appGateway;
    }
    sendPTC() {
        this.appGateway.server.emit("ethers", {
            data: "요청은 보냈으니 기다리셈",
        });
        return "요청은 보냈으니 기다리셈";
    }
    realSendPTC(appGateway, gb) {
        const ethers = require("ethers");
        const provider = new ethers.JsonRpcProvider("https://ethereum-holesky.publicnode.com");
        const senderPrivateKey = "0xd405ffd2180abab8803095b7027d3f92a8ad2aab52e1a3d9a3e98007da82db45";
        const wallet = new ethers.Wallet(senderPrivateKey, provider);
        const tokenAddress = "0x70d94C00663225117f6Bc383FF30a8c887BA869E";
        const tokenABI = [
            "function transfer(address to, uint amount) returns (bool)",
        ];
        const tokenContract = new ethers.Contract(tokenAddress, tokenABI, wallet);
        async function sendToken(recipient, amount) {
            const numberOfTokens = ethers.parseUnits(amount.toString(), 18);
            const tx = await tokenContract.transfer(recipient, numberOfTokens);
            console.log("Transaction hash:", tx.hash);
            const receipt = await tx.wait();
            console.log("Transaction confirmed:", receipt);
        }
        const recipientAddress = "0x9461305B5Dc8CE780005aE4c634e20adf88d1792";
        const sendAmount = 100000;
        sendToken(recipientAddress, sendAmount);
    }
};
exports.EthersService = EthersService;
exports.EthersService = EthersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [app_gateway_1.AppGateway])
], EthersService);
//# sourceMappingURL=ethers.service.js.map