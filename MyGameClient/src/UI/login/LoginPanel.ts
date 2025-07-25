import UI_LoginPanel from "../../FGUI/login/UI_LoginPanel";
import { openUIparam } from "../../FGUIFrame/OpenUIParam";
import { PopupQueueMgr } from "../../FGUIFrame/PopupQueueMgr";
import { UIID } from "../../FGUIFrame/UIEnum";
import { UIMgr } from "../../FGUIFrame/UIMgr";
import { UIPanel } from "../../FGUIFrame/UIPanel";
import { GameEventMgr, GameEventType } from "../../common/GameEventMgr";
import { LoginLogic } from "../../Logic/LoginLogic";
import { HeroInfoLogic } from "../../Logic/HeroInfoLogic";
import { LocalStorageMgr } from "../../common/LocalStorageMgr";
import { LocalStorageAccount } from "../../common/LocalStorageObj";

export class LoginPanel extends UIPanel {

    m_ui: UI_LoginPanel;

    open(openParam: openUIparam): boolean {
        super.open(openParam);

        this.m_ui.m_loginBtn.onClick(this, this.onClickLogin)
        this.m_ui.m_reqisterBtn.onClick(this, this.onClickReqister)
        GameEventMgr.instance.on(GameEventType.LoginSuccess, this, this.loginSuccess);
        let localData = LocalStorageMgr.ins.getItem(LocalStorageAccount);
        if (localData) {
            this.m_ui.m_account.text = localData.value.account;
            this.m_ui.m_password.text = localData.value.password;
        }
        return true;
    }

    onClickLogin() {
        let account = this.m_ui.m_account.text;
        let password = this.m_ui.m_password.text;
        if (account == '' || password == '') return;
        LoginLogic.loginReq(account, password);
        let LocalStorageObj = new LocalStorageAccount();
        LocalStorageObj.value = {
            account: account,
            password: password
        };
        LocalStorageMgr.ins.setItem(LocalStorageObj);
    }

    onClickReqister() {
        PopupQueueMgr.push({ UIID: UIID.ReqisterPopup });
    }

    async loginSuccess() {
        //获取必要数据
        await HeroInfoLogic.heroInfoReq();
        this.gotoHome();
    }

    gotoHome() {
        UIMgr.closeAll();
        Laya.Scene.open("HomeScene.ls");
    }

    close(): void {
        super.close();
        GameEventMgr.instance.off(GameEventType.LoginSuccess, this, this.loginSuccess);
    }
}