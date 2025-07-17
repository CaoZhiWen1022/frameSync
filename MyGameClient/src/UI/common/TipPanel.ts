import UI_TipPanel from "../../FGUI/common/UI_TipPanel";
import { openUIparam } from "../../FGUIFrame/OpenUIParam";
import { UIID } from "../../FGUIFrame/UIEnum";
import { UIMgr } from "../../FGUIFrame/UIMgr";
import { UIPanel } from "../../FGUIFrame/UIPanel";

export class TipPanel extends UIPanel {

    static msgList: string[] = [];
    static opening: boolean = false;

    public static show(msg: string): void {
        this.msgList.push(msg);
        if (!this.opening) this._show();
    }

    private static _show(): void {
        if (this.msgList.length > 0) {
            let msg = this.msgList.shift();
            this.opening = true;
            UIMgr.open({ UIID: UIID.TipsPanel, data: msg, closeCall: Laya.Handler.create(this, () => { this._show(); }) });
        } else {
            this.opening = false;
        }
    }

    m_ui: UI_TipPanel;

    open(openParam: openUIparam): boolean {
        super.open(openParam);
        this.m_ui.touchable = false;
        this.m_ui.m_tips.m_tips.text = openParam.data;
        this.m_ui.m_t0.play(() => {
            UIMgr.close(UIID.TipsPanel);
        })
        return true;
    }
}