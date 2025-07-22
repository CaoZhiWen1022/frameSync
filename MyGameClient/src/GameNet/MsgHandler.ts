import { BattleLogic } from "../Logic/battleLogic";
import { HeroInfoLogic } from "../Logic/HeroInfoLogic";
import { LoginLogic } from "../Logic/LoginLogic";
import { UserSettingLogic } from "../Logic/UserSettingLogic";
import { proto } from "../protos/proto";
import { TipPanel } from "../UI/common/TipPanel";
import { GameNetMgr } from "./GameNetMgr";

class MsgHandler {

    handle: Map<proto.MsgId, Function> = new Map<proto.MsgId, Function>();

    private add(msgId: proto.MsgId, handler: Function) {
        this.handle.set(msgId, handler);
    }

    init() {
        this.add(proto.MsgId.ID_FAIL, this.fail);
        this.add(proto.MsgId.ID_UserLogin, LoginLogic.loginResp.bind(LoginLogic));
        this.add(proto.MsgId.ID_UserReqister, LoginLogic.registerResp.bind(LoginLogic));
        this.add(proto.MsgId.ID_HeroInfo, HeroInfoLogic.heroInfoResp.bind(HeroInfoLogic));
        this.add(proto.MsgId.ID_HeroSwitch, HeroInfoLogic.heroSwitchResp.bind(HeroInfoLogic));
        this.add(proto.MsgId.ID_UserHeadChange, UserSettingLogic.userHeadChangeResp.bind(UserSettingLogic));
        this.add(proto.MsgId.ID_Matching, BattleLogic.matchingResp.bind(BattleLogic));
        this.add(proto.MsgId.ID_GameStartDownTime, BattleLogic.gameStartDownTimeResp.bind(BattleLogic));
        this.add(proto.MsgId.ID_GameStart, BattleLogic.gameSatrtResp.bind(BattleLogic));
        this.add(proto.MsgId.ID_BattleFrameDataUpdate, BattleLogic.battleFrameDataUpdate.bind(BattleLogic));
        this.add(proto.MsgId.ID_GET_BattleFrameData, BattleLogic.getBattleFrameDataResp.bind(BattleLogic));
        this.add(proto.MsgId.ID_Heartbeat, GameNetMgr.instance.heartBeatHander.bind(GameNetMgr.instance));
    }

    fail(data: proto.CommonFailResp) {
        let code = data.code;
        switch (code) {
            case proto.RetCode.FAIL:
                TipPanel.show(data.message);
                break;
            case proto.RetCode.NOTACCOUNT:
                TipPanel.show("账号不存在");
                break;
            case proto.RetCode.ACCOUNTEXIST:
                TipPanel.show("账号已存在");
                break;
            case proto.RetCode.ACCOUNTNAMEEXIST:
                TipPanel.show("昵称已存在");
                break;
        }
    }

}
export const msgHandler = new MsgHandler();