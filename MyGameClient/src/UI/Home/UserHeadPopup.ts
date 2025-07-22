import { getUserHeadUrl } from "../../common/ImgUrl";
import UI_UserHead from "../../FGUI/common/UI_UserHead";
import UI_UserHeadItem from "../../FGUI/home/UI_UserHeadItem";
import UI_UserHeadPopup from "../../FGUI/home/UI_UserHeadPopup";
import { openUIparam } from "../../FGUIFrame/OpenUIParam";
import { UIPopup } from "../../FGUIFrame/UIPopup";
import { GameConfig } from "../../GameConfig/GameConfig";
import { LoginLogic } from "../../Logic/LoginLogic";
import { userInfo } from "../../Logic/UserInfo";
import { UserSettingLogic } from "../../Logic/UserSettingLogic";

export class UserHeadPopup extends UIPopup {

    m_ui: UI_UserHeadPopup;
    curSeleID: string;
    open(openParam: openUIparam): boolean {
        super.open(openParam);
        this.m_ui.m_ls.itemRenderer = Laya.Handler.create(this, this.onItemRender, null, false);
        this.m_ui.m_ls.on(fgui.Events.CLICK_ITEM, this, this.onClickItem);
        this.m_ui.m_ls.numItems = GameConfig.ins.userHand.length;
        this.m_ui.m_userBtn.onClick(this, this.onClickUseBtn);
        return true;
    }

    onItemRender(index: number, item: UI_UserHeadItem) {
        let cfg = GameConfig.ins.userHand[index];
        (item.m_head as UI_UserHead).m_icon.url = getUserHeadUrl(cfg.img);
        item.data = cfg.id;
    }

    initSele() {
        this.curSeleID = userInfo.userInfo.head;
        let index = GameConfig.ins.userHand.findIndex(v => v.id == this.curSeleID);
        this.m_ui.m_ls.selectedIndex = index;
        this.m_ui.m_use.selectedIndex = 0;
    }

    onClickItem(item: UI_UserHeadItem) {
        this.curSeleID = item.data;
        this.m_ui.m_use.selectedIndex = this.curSeleID == userInfo.userInfo.head ? 0 : 1;
    }

    onClickUseBtn() {
        if(this.curSeleID == userInfo.userInfo.head) return;
        UserSettingLogic.userHeadChangeReq(this.curSeleID);
    }
}