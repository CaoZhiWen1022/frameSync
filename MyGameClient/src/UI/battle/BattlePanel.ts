import { BattleMgr } from "../../battle/BattleMgr";
import { PlayerFrameSync } from "../../battle/PlayerFrameSync";
import { GameEventMgr, GameEventType } from "../../common/GameEventMgr";
import { getUserHeadUrl } from "../../common/ImgUrl";
import UI_BattlePanel from "../../FGUI/battle/UI_BattlePanel";
import UI_UserHead from "../../FGUI/common/UI_UserHead";
import { openUIparam } from "../../FGUIFrame/OpenUIParam";
import { UIPanel } from "../../FGUIFrame/UIPanel";
import { BattleLogic } from "../../Logic/battleLogic";
import { LoginLogic } from "../../Logic/LoginLogic";
import { userInfo } from "../../Logic/UserInfo";
import { proto } from "../../protos/proto";
import { UI_BattlePlayerItemExt } from "./UI_BattlePlayerItemExt";

export class BattlePanel extends UIPanel {

    m_ui: UI_BattlePanel;

    myPlayer: PlayerFrameSync;

    open(openParam: openUIparam): boolean {
        super.open(openParam);
        this.init();
        return true;
    }

    async init() {
        this.initHead();
        await this.initPlayer();
        //通知服务器准备完成
        BattleLogic.clientReadyReq();
        //监听开始倒计时
        GameEventMgr.instance.on(GameEventType.GameStartDownTime, this, this.onGameStartDownTime);
        GameEventMgr.instance.on(GameEventType.GameStart, this, this.onGameStart);
        GameEventMgr.instance.on(GameEventType.BattlePingUpdate, this, this.onBattlePingUpdate);
    }

    initHead() {
        let uis = [this.m_ui.m_userHead1, this.m_ui.m_userHead2];
        BattleMgr.ins.battleUsers.forEach((v, i) => {
            (uis[i].m_head as UI_UserHead).m_icon.url = getUserHeadUrl(v.userInfo.head);
            uis[i].m_name.text = v.userInfo.userName;
            uis[i].m_isMy.selectedIndex = v.userInfo.id == userInfo.userInfo.id ? 0 : 1;
        })
    }

    async initPlayer() {
        let uis = [this.m_ui.m_user1, this.m_ui.m_user2];
        let PALL: Promise<any>[] = [];
        BattleMgr.ins.battleUsers.forEach((v, i) => {
            let ui = uis[i];
            PALL.push((ui as UI_BattlePlayerItemExt).init(v.userInfo.id, v.useHeroId));
        })
        await Promise.all(PALL);
        BattleMgr.ins.battleUsers.forEach((v, i) => {
            let ui = uis[i];
            let player = new PlayerFrameSync(v.userInfo.id, ui as UI_BattlePlayerItemExt);
            BattleMgr.ins.battleFrameSyncMgr.addPlayer(player);
            if (v.userInfo.id == userInfo.userInfo.id) this.myPlayer = player;
        })
    }

    onGameStartDownTime(time: number) {
        this.m_ui.m_dowmTimeCom.m_time.text = time.toString();
    }

    onGameStart() {
        this.m_ui.m_dowmTimeCom.visible = false;
        this.m_ui.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
    }

    onMouseDown(e: Laya.Event) {
        let pos = this.m_ui.globalToLocal(e.stageX, e.stageY, new Laya.Point(0, 0));
        BattleLogic.moveReq(pos);
    }

    onBattlePingUpdate(ping: number) {
        this.m_ui.m_ping.setVar("ping", ping).flushVars();
    }

    close() {
        super.close();
        GameEventMgr.instance.off(GameEventType.GameStartDownTime, this, this.onGameStartDownTime);
        GameEventMgr.instance.off(GameEventType.GameStart, this, this.onGameStart);
    }
}