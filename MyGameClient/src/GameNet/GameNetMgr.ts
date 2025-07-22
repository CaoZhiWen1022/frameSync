import { GameEventMgr, GameEventType } from "../common/GameEventMgr";
import { UIMgr } from "../FGUIFrame/UIMgr";
import { LoginLogic } from "../Logic/LoginLogic";
import { userInfo } from "../Logic/UserInfo";
import { proto } from "../protos/proto";
import { CommonPopup } from "../UI/common/CommonPopup";
import { msgHandler } from "./MsgHandler";

export class GameNetMgr {

    private static _instance: GameNetMgr;
    public static get instance(): GameNetMgr {
        if (!this._instance) {
            this._instance = new GameNetMgr();
        }
        return this._instance;
    }

    //重连尝试次数
    private reconnectTryCount = 3;
    private reconnectCount = 0;
    private connectSuccessCb: Function;

    private socket: WebSocket;

    private heartBeatSendAt: number;

    startConnect(successCb: Function) {
        this.connectSuccessCb = successCb;
        this.connect();
    }

    private connect() {
        if (this.socket) {
            this.socket.close();
            this.socket.onclose = null;
            this.socket.onopen = null;
            this.socket.onmessage = null;
            this.socket = null;
        }
        this.socket = new WebSocket("ws://192.168.0.107:8080");
        this.socket.onmessage = (msg) => {
            this.onMessage(msg);
        }

        this.socket.onopen = () => {
            console.log("连接成功");
            this.connectSuccessCb && this.connectSuccessCb();
            this.connectSuccessCb = null;
            this.reconnectCount = 0;
            this.sendHeartBeat();
            if (userInfo.isLogin) {
                LoginLogic.loginReq(userInfo.userInfo.account, userInfo.userInfo.password);
            }
        }

        this.socket.onclose = () => {
            this.reconnect();
        }
    }

    private reconnect() {
        this.reconnectCount++;
        if (this.reconnectCount <= this.reconnectTryCount) {
            console.log("尝试重连", this.reconnectCount);
            this.connect();
        } else {
            console.log("重连失败");
            this.reconnectCount = 0;
            CommonPopup.open("提示", "网络连接断开，是否重试", (isConfirm: boolean) => {
                if (isConfirm) this.reconnect();
            });
        }
    }

    private closeSocket() {
        if (this.socket) {
            this.socket.close();
            this.socket.onclose = null;
            this.socket.onopen = null;
            this.socket.onmessage = null;
            this.socket = null;
        }
    }

    private onMessage(msg: any) {
        let msgId = JSON.parse(msg.data).id;
        let code = JSON.parse(msg.data).code;
        if (msgHandler.handle.has(msgId)) {
            msgHandler.handle.get(msgId)(JSON.parse(msg.data));
        } else {
            console.warn(msgId + "未注册响应");
        }
    }


    send(msgId: proto.MsgId, data: proto.CommonReq) {
        if (this.socket && this.socket.readyState == WebSocket.OPEN) {
            let msg = {
                msgId: msgId,
                data: data
            }
            this.socket.send(JSON.stringify(msg));
        } else {
            //连接断开
            console.log("连接断开");
        }
    }

    private sendHeartBeat() {
        this.heartBeatSendAt = Date.now();
        this.send(proto.MsgId.ID_Heartbeat, proto.HeartbeatReq.create());
        Laya.timer.once(3000, this, this.heartBeatTimeOut);
    }

    /** 心跳超时 */
    private heartBeatTimeOut() {
        //连接断开
        this.closeSocket();
        this.startConnect(() => {
            //连接成功调用登录
        })
    }

    heartBeatHander() {
        Laya.timer.clear(this, this.heartBeatTimeOut);
        Laya.timer.once(1500, this, this.sendHeartBeat);
        let curAt = Date.now();
        let ping = curAt - this.heartBeatSendAt;
        GameEventMgr.instance.event(GameEventType.BattlePingUpdate, ping);
    }
}