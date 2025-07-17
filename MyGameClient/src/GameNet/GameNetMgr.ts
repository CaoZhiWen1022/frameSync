import { proto } from "../protos/proto";
import { msgHandler } from "./MsgHandler";

export class GameNetMgr {

    private static _instance: GameNetMgr;
    public static get instance(): GameNetMgr {
        if (!this._instance) {
            this._instance = new GameNetMgr();
        }
        return this._instance;
    }

    private socket: WebSocket;

    startConnect(successCb: Function, failCb: Function) {
        this.socket = new WebSocket("ws://192.168.0.107:8080");
        this.socket.onmessage = (msg) => {
            this.onMessage(msg);
        }

        this.socket.onopen = () => {
            console.log("连接成功");
            successCb && successCb();
            successCb = null;
        }

        this.socket.onclose = () => {
            console.log("连接关闭");
        }
    }

    onMessage(msg: any) {
        let msgId = JSON.parse(msg.data).id;
        let code = JSON.parse(msg.data).code;
        if (msgHandler.handle.has(msgId)) {
            msgHandler.handle.get(msgId)(JSON.parse(msg.data));
        } else {
            console.warn(msgId + "未注册响应");
        }
    }


    send(msgId: proto.MsgId, data: proto.CommonReq) {
        let msg = {
            msgId: msgId,
            data: data
        }
        this.socket.send(JSON.stringify(msg));
    }
}