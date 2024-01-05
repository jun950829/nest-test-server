"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthersModule = void 0;
const common_1 = require("@nestjs/common");
const ethers_controller_1 = require("./ethers.controller");
const ethers_service_1 = require("./ethers.service");
const app_gateway_1 = require("../websockets/app.gateway");
let EthersModule = class EthersModule {
};
exports.EthersModule = EthersModule;
exports.EthersModule = EthersModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [ethers_controller_1.EthersController],
        providers: [app_gateway_1.AppGateway, ethers_service_1.EthersService],
    })
], EthersModule);
//# sourceMappingURL=ethers.module.js.map