import { GameEventMgr, GameEventType } from "../../common/GameEventMgr";
import { HeroSpineObj, HeroSpinePlayType } from "../../common/HeroSpineObj";
import { getUserHeadUrl } from "../../common/ImgUrl";
import UI_UserHead from "../../FGUI/common/UI_UserHead";
import UI_HomePanel from "../../FGUI/home/UI_HomePanel";
import { openUIparam } from "../../FGUIFrame/OpenUIParam";
import { PopupQueueMgr } from "../../FGUIFrame/PopupQueueMgr";
import { UIID } from "../../FGUIFrame/UIEnum";
import { UIMgr } from "../../FGUIFrame/UIMgr";
import { UIPanel } from "../../FGUIFrame/UIPanel";
import { HeroInfoLogic } from "../../Logic/HeroInfoLogic";
import { LoginLogic } from "../../Logic/LoginLogic";

export class HomePanel extends UIPanel {

    m_ui: UI_HomePanel;
    heroSpineObj: HeroSpineObj;
    open(openParam: openUIparam): boolean {
        super.open(openParam);
        this.m_ui.m_startGameBtn.onClick(this, this.onClickStartGame);
        this.m_ui.m_heroBtn.onClick(this, this.onClickHero);
        this.m_ui.m_head.onClick(this, this.onClickHead);
        this.initUserHead();
        GameEventMgr.instance.on(GameEventType.HeroInfoChange, this, this.initHero);
        GameEventMgr.instance.on(GameEventType.UserHeadChange, this, this.initUserHead);
        return true;
    }

    async initHero() {
        this.heroSpineObj && this.heroSpineObj.destroy();
        this.heroSpineObj = HeroSpineObj.create({
            cfgId: HeroInfoLogic.heroInfo.heroId,
            parent: this.m_ui.m_spineRoot.displayObject,
            x: this.m_ui.m_spineRoot.width / 2,
            y: this.m_ui.m_spineRoot.height,
            scale: 2.5,
            playType: HeroSpinePlayType.stand,
            loop: true
        });
    }

    initUserHead() {
        (this.m_ui.m_head as UI_UserHead).m_icon.url = getUserHeadUrl(LoginLogic.userInfo.head);
        this.m_ui.m_userName.text = LoginLogic.userInfo.userName;
    }

    onClickStartGame() {
        UIMgr.open({ UIID: UIID.MatchingPanel });
    }

    onClickHero() {
        UIMgr.open({ UIID: UIID.HeroPanel });
    }

    onClickHead() {
        PopupQueueMgr.push({ UIID: UIID.UserHeadPopup });
    }

    openSuccess(): void {
        this.initHero();
    }

    close(): void {
        super.close();
        GameEventMgr.instance.off(GameEventType.HeroInfoChange, this, this.initHero);
    }
}