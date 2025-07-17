/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_HeroPanel from "./UI_HeroPanel";
import UI_HeroListItem from "./UI_HeroListItem";

export default class heroBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_HeroPanel.URL, UI_HeroPanel);
		fgui.UIObjectFactory.setExtension(UI_HeroListItem.URL, UI_HeroListItem);
	}
}