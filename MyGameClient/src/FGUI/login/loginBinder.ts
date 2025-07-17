/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_LoginPanel from "./UI_LoginPanel";
import UI_ReqisterPopup from "./UI_ReqisterPopup";

export default class loginBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_LoginPanel.URL, UI_LoginPanel);
		fgui.UIObjectFactory.setExtension(UI_ReqisterPopup.URL, UI_ReqisterPopup);
	}
}