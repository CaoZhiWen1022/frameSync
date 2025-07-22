/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_UserHead from "./UI_UserHead";
import UI_FullScreenMaskPanel from "./UI_FullScreenMaskPanel";
import UI_PopupMaskPanel from "./UI_PopupMaskPanel";
import UI_TipPanel from "./UI_TipPanel";
import UI_tipsCom from "./UI_tipsCom";
import UI_CommonPopup from "./UI_CommonPopup";

export default class commonBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_UserHead.URL, UI_UserHead);
		fgui.UIObjectFactory.setExtension(UI_FullScreenMaskPanel.URL, UI_FullScreenMaskPanel);
		fgui.UIObjectFactory.setExtension(UI_PopupMaskPanel.URL, UI_PopupMaskPanel);
		fgui.UIObjectFactory.setExtension(UI_TipPanel.URL, UI_TipPanel);
		fgui.UIObjectFactory.setExtension(UI_tipsCom.URL, UI_tipsCom);
		fgui.UIObjectFactory.setExtension(UI_CommonPopup.URL, UI_CommonPopup);
	}
}