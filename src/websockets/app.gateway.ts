// src/websockets/app.gateway.ts

import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway()
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    // 클라이언트가 연결될 때 호출됩니다.
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    // 클라이언트가 연결이 끊겼을 때 호출됩니다.
    console.log(`Client disconnected: ${client.id}`);
  }
}
