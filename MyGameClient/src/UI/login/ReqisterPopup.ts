import UI_ReqisterPopup from "../../FGUI/login/UI_ReqisterPopup";
import { openUIparam } from "../../FGUIFrame/OpenUIParam";
import { UIMgr } from "../../FGUIFrame/UIMgr";
import { UIPopup } from "../../FGUIFrame/UIPopup";
import { GameEventMgr, GameEventType } from "../../common/GameEventMgr";
import { LoginLogic } from "../../Logic/LoginLogic";
import { TipPanel } from "../common/TipPanel";

export class ReqisterPopup extends UIPopup {

    m_ui: UI_ReqisterPopup;

    open(openParam: openUIparam): boolean {
        super.open(openParam);
        this.m_ui.m_tijiaoBtn.onClick(this, this.onClickTiJiao);
        GameEventMgr.instance.on(GameEventType.ReqisterSuccess, this, this.reqisterSuccess);
        return true;
    }

    onClickTiJiao() {
        let account = this.m_ui.m_account.text;
        let password = this.m_ui.m_password.text;
        let password2 = this.m_ui.m_password2.text;
        let name = this.m_ui.m_name.text;
        if (account == '' || password == '' || password2 == '' || name == '') {
            TipPanel.show('注册信息不合法');
            return;
        }
        if (password != password2) {
            TipPanel.show('两次密码不一致');
            return;
        }
        LoginLogic.registerReq(account, password, name);
    }

    reqisterSuccess() {
        UIMgr.close(this.UIID);
    }

}