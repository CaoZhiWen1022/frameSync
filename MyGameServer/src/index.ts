import 'source-map-support/register';
import express from 'express';
import { WebSocket, WebSocketServer } from 'ws';
import { LoginModule } from './modules/login';
import { Handler, getHandlerMetadata, getHandler } from './decorators/handler';
import { proto } from './protos/proto';
import { mySql } from './mySql/MySQL';
import { ClientMgr } from './ClientMgr';
import { HeroInfo } from './modules/heroInfo';
import { UserSetting } from './modules/userSetting';
import { Battle } from './modules/battle/battle';

interface WebSocketMessage {
    msgId: number;
    [key: string]: any;
}

class Server {
    private app: express.Application;
    private wss: WebSocketServer;
    private port: number = 8080;
    private modules: Map<string, any>;

    constructor() {
        this.init();
    }

    async init() {
        this.app = express();
        this.modules = new Map();
        this.wss = new WebSocketServer({ port: this.port });
        //连接数据库
        await mySql.connect();
        this.initModules();
        this.setupWebSocket();
        this.start();
    }

    private initModules() {
        // 初始化所有模块
        this.modules = [
            new LoginModule(),
            new HeroInfo(),
            new UserSetting(),
            new Battle(),
        ].reduce((map, module) => map.set(module.constructor.name, module), new Map());
    }


    private setupWebSocket() {
        // 监听连接事件
        this.wss.on('connection', (ws: WebSocket) => {
            ClientMgr.addClient(ws, null);
            ws.on('message', async (message: string) => {
                try {
                    const data: WebSocketMessage = JSON.parse(message.toString());
                    await this.handleMessage(ws, data);
                } catch (error) {
                    console.error('处理消息时出错:', error);
                    this.sendError(ws, '消息格式错误');
                }
            });

            ws.on('close', () => {
                console.log('客户端已断开连接');
                ClientMgr.removeClient(ws);
            });

            ws.on('error', (error) => {
                console.error('WebSocket错误:', error);
            });
        });

        console.log(`WebSocket服务器正在监听端口 ${this.port}`);
    }

    private async handleMessage(ws: WebSocket, message: WebSocketMessage) {
        const { msgId, ...data } = message;
        console.log(`接收到消息: ${msgId}`, data);
        if (msgId !== proto.MsgId.ID_UserLogin && msgId !== proto.MsgId.ID_UserReqister) {
            let userId = ClientMgr.getUserId(ws);
            console.log('userId:', userId);

            if (!userId) {
                this.sendError(ws, '未登录');
                return; 
            }
        }
        try {
            const handler = getHandler(msgId, this.modules);
            if (handler) {
                const { instance, method } = handler;
                const response = await instance[method](ws, data.data);
                if (response) this.sendResponse(ws, response);
                else {
                    console.log("response is null, msgId:", msgId);
                }
            } else {
                console.warn(`未找到消息ID ${msgId} 的处理器`);
                this.sendError(ws, '未知的消息类型');
            }
        } catch (error) {
            console.error(`处理消息 ${msgId} 时出错:`, error);
            this.sendError(ws, '处理请求时出错');
        }
    }

    public sendResponse(ws: WebSocket, response: any) {
        // console.log('发送响应:', response);
        ws.send(JSON.stringify(response));
    }

    private sendError(ws: WebSocket, message: string) {
        const errorResponse: proto.ICommonFailResp = {
            id: proto.MsgId.ID_FAIL,
            code: proto.RetCode.FAIL,
            message
        };
        ws.send(JSON.stringify(errorResponse));
    }

    public start() {
        // Express服务器可以用来服务静态文件或其他HTTP请求
        this.app.listen(3000, () => {
            console.log('HTTP服务器正在监听端口 3000');
        });
    }
}

// 启动服务器
const server = new Server();
export function SendResponse(ws: WebSocket, response: any) {
    server.sendResponse(ws, response);
}
