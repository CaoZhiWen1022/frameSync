import { ClientMgr } from "../ClientMgr";
import { Handler } from "../decorators/handler";
import { proto } from "../protos/proto";
import { WebSocket } from "ws";
import { mySql } from "../mySql/MySQL";
import { SQL_UserHero } from "../mySql/SQL";
export class HeroInfo {

    /**
     * 英雄信息请求处理
     */
    @Handler(proto.MsgId.ID_HeroInfo)
    public async heroInfoReq(ws: WebSocket, data: proto.IHeroInfoReq): Promise<proto.IHeroInfoResp> {
        let userId = ClientMgr.getUserId(ws);
        let info = await mySql.queryOne<SQL_UserHero>("select * from userHero where userId = ?", [userId]);
        return {
            id: proto.MsgId.ID_HeroInfo,
            code: proto.RetCode.SUCCESS,
            heroInfo: {
                heroId: info.useHeroId
            }
        }
    }

    @Handler(proto.MsgId.ID_HeroSwitch)
    public async heroSwotchReq(ws: WebSocket, data: proto.IHeroSwitchReq): Promise<proto.IHeroSwitchResp> {
        let userId = ClientMgr.getUserId(ws);
        await mySql.update('userHero', { useHeroId: data.heroId }, { userId: userId });
        return {
            id: proto.MsgId.ID_HeroSwitch,
            code: proto.RetCode.SUCCESS,
            heroInfo: {
                heroId: data.heroId
            }
        }
    }
}