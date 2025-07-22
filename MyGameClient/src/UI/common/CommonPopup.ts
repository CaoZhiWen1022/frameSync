import UI_CommonPopup from "../../FGUI/common/UI_CommonPopup";
import { openUIparam } from "../../FGUIFrame/OpenUIParam";
import { PopupQueueMgr } from "../../FGUIFrame/PopupQueueMgr";
import { UIID } from "../../FGUIFrame/UIEnum";
import { UIMgr } from "../../FGUIFrame/UIMgr";
import { UIPopup } from "../../FGUIFrame/UIPopup";

export class CommonPopup extends UIPopup {

    m_ui: UI_CommonPopup;

    static open(title: string, content: string, cb: (isConfirm: boolean) => void) {
        let param: openUIparam = { UIID: UIID.CommonPopup, data: { title: title, content: content, cb: cb } };
        PopupQueueMgr.push(param);
    }

    closeCb: (isConfirm: boolean) => void;

    open(openParam: openUIparam): boolean {
        super.open(openParam);
        let title = openParam.data.title;
        let content = openParam.data.content;
        this.closeCb = openParam.data.cb;
        this.m_ui.m_title.text = title || '提示';
        this.m_ui.m_content.text = content || '';
        this.m_ui.m_cancelBtn.onClick(this, this._closeThis, [false]);
        this.m_ui.m_confirmBtn.onClick(this, this._closeThis, [true]);
        return true;
    }

    _closeThis(isConfirm: boolean) {
        this.closeCb && this.closeCb(isConfirm);
        this.closeThis();
    }

}