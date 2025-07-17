import { BattleMgr } from "../battle/BattleMgr";
import { GameEventMgr, GameEventType } from "../common/GameEventMgr";
import { GameNetMgr } from "../GameNet/GameNetMgr";
import { proto } from "../protos/proto";

export class BattleLogic {

    /** 发起匹配 */
    static mathchingReq() {
        let req = proto.mathchingReq.create({});
        GameNetMgr.instance.send(proto.MsgId.ID_Matching, req);
    }

    /** 匹配成功 */
    static matchingResp(msg: proto.matchingResp) {
        console.log('匹配成功', msg);
        BattleMgr.ins.init(msg.users, msg.roomId as number);
    }

    /** 客户端通知服务器准备完成 */
    static clientReadyReq() {
        let req = proto.clientReadyReq.create({});
        req.roomId = BattleMgr.ins.roomId;
        GameNetMgr.instance.send(proto.MsgId.ID_ClientReady, req);
    }

    /** 游戏开始倒计时 */
    static gameStartDownTimeResp(msg: proto.gameStartDownTimeResp) {
        let time = msg.time as number;
        GameEventMgr.instance.event(GameEventType.GameStartDownTime, time);
    }

    /** 游戏开始 */
    static gameSatrtResp() {
        GameEventMgr.instance.event(GameEventType.GameStart);
    }

    /** 同步操作给服务器 */
    static battleFrameReq(msg: proto.IbattleFrameReq) {
        let req = proto.battleFrameReq.create(msg);
        GameNetMgr.instance.send(proto.MsgId.ID_BattleFrame, req);
    }

    static moveReq(target: proto.Iv2) {
        let req = proto.battleFrameReq.create();
        req.data = proto.battleClientFrameData.create();
        req.data.op = proto.battleOpType.move;
        req.data.moveData = proto.battleMoveData.create();
        req.data.moveData.target = target;
        req.frameIndex = BattleMgr.ins.battleFrameSyncMgr.frame;
        GameNetMgr.instance.send(proto.MsgId.ID_BattleFrame, req);
    }

    static battleFrameResp(msg: proto.battleFrameResp) {
        //分发帧数据
        GameEventMgr.instance.event(GameEventType.BattleFrameData, msg);
    }
}