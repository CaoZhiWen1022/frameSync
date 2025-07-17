/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_UserHeadPopup from "./UI_UserHeadPopup";
import UI_UserHeadItem from "./UI_UserHeadItem";
import UI_HomePanel from "./UI_HomePanel";

export default class homeBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_UserHeadPopup.URL, UI_UserHeadPopup);
		fgui.UIObjectFactory.setExtension(UI_UserHeadItem.URL, UI_UserHeadItem);
		fgui.UIObjectFactory.setExtension(UI_HomePanel.URL, UI_HomePanel);
	}
}