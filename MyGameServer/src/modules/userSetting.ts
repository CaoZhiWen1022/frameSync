import { ClientMgr } from "../ClientMgr";
import { proto } from "../protos/proto";
import { WebSocket } from "ws";
import { mySql } from "../mySql/MySQL";
import { SQL_User } from "../mySql/SQL";
import { Handler } from "../decorators/handler";

export class UserSetting {

    @Handler(proto.MsgId.ID_UserHeadChange)
    async userHeadChangeReq(ws: WebSocket, data: proto.IuserHeadChangeReq): Promise<proto.IuserHeadChangeResp> {
        let userId = ClientMgr.getUserId(ws);
        await mySql.update('users', { head: data.cfgId }, { id: userId });
        return {
            id: proto.MsgId.ID_UserHeadChange,
            code: proto.RetCode.SUCCESS,
            headId: data.cfgId
        }
    }

}