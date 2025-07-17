import { GameEventMgr, GameEventType } from "../common/GameEventMgr";
import { GameNetMgr } from "../GameNet/GameNetMgr";
import { proto } from "../protos/proto";
import { LoginLogic } from "./LoginLogic";

export class UserSettingLogic {

    public static userHeadChangeReq(headId: string) {
        let req = proto.userHeadChangeReq.create({ cfgId: headId });
        GameNetMgr.instance.send(proto.MsgId.ID_UserHeadChange, req);
    }

    public static userHeadChangeResp(data: proto.userHeadChangeResp) {
        LoginLogic.userInfo.head = data.headId;
        GameEventMgr.instance.event(GameEventType.UserHeadChange);
    }

}