import { GameEventMgr, GameEventType } from "../../common/GameEventMgr";
import { getUserHeadUrl } from "../../common/ImgUrl";
import UI_MatchingPanel from "../../FGUI/battle/UI_MatchingPanel";
import UI_UserHead from "../../FGUI/common/UI_UserHead";
import { openUIparam } from "../../FGUIFrame/OpenUIParam";
import { UIMgr } from "../../FGUIFrame/UIMgr";
import { UIPanel } from "../../FGUIFrame/UIPanel";
import { BattleLogic } from "../../Logic/battleLogic";
import { LoginLogic } from "../../Logic/LoginLogic";
import { userInfo } from "../../Logic/UserInfo";
import { proto } from "../../protos/proto";

export class MatchingPanel extends UIPanel {

    m_ui: UI_MatchingPanel;

    open(openParam: openUIparam): boolean {
        super.open(openParam);
        this.init();
        return true;
    }

    init() {
        (this.m_ui.m_user1 as UI_UserHead).m_icon.url = getUserHeadUrl(userInfo.userInfo.head);
        //发起匹配
        BattleLogic.mathchingReq();

        GameEventMgr.instance.on(GameEventType.MatchSuccess, this, this.matchSuccess);
        GameEventMgr.instance.on(GameEventType.EnterBattle, this, this.enterBattle);
    }

    matchSuccess(users: proto.IBattleUserInfo[]) {
        let enemy = users.find(v => v.userInfo.id != userInfo.userInfo.id);
        if (enemy) (this.m_ui.m_user2 as UI_UserHead).m_icon.url = getUserHeadUrl(enemy.userInfo.head);
    }

    enterBattle() {
        UIMgr.closeAll();
        Laya.Scene.open("BattleScene.ls");
    }

    close() {
        super.close();
        GameEventMgr.instance.off(GameEventType.MatchSuccess, this, this.matchSuccess);
        GameEventMgr.instance.off(GameEventType.EnterBattle, this, this.enterBattle);
    }
}