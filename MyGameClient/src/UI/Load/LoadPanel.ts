import UI_LoadPanel from "../../FGUI/load/UI_LoadPanel";
import { openUIparam } from "../../FGUIFrame/OpenUIParam";
import { UIMgr } from "../../FGUIFrame/UIMgr";
import { UIPanel } from "../../FGUIFrame/UIPanel";
import { GameConfig } from "../../GameConfig/GameConfig";
import { GameNetMgr } from "../../GameNet/GameNetMgr";
import { msgHandler } from "../../GameNet/MsgHandler";

export class LoadPanel extends UIPanel {

    m_ui: UI_LoadPanel;

    barValue: number = 0;
    open(openParam: openUIparam): boolean {
        super.open(openParam);
        this.init();
        return true;
    }

    async init() {
        this.setBar(50, 1000);
        GameConfig.ins.init()
        msgHandler.init();
        await GameConfig.ins.init();
        this.setBar(80, 1000);
        GameNetMgr.instance.startConnect(() => {
            this.setBar(100, 1000);
        }, null);
    }

    setBar(value: number, time: number) {
        Laya.Tween.clearAll(this);
        Laya.Tween.to(this, {
            barValue: value,
            update: Laya.Handler.create(this, () => {
                this.m_ui.m_bar.value = this.barValue
            }, null, false)
        }, time, null, Laya.Handler.create(this, this.barComplete));
    }

    barComplete() {
        if (this.barValue >= 99) {
            UIMgr.closeAll();
            Laya.Scene.open("LoginScene.ls");
        }
    }
}