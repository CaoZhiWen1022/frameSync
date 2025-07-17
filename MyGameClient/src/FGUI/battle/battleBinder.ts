/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BattlePanel from "./UI_BattlePanel";
import UI_MatchingPanel from "./UI_MatchingPanel";
import UI_BattleUserItem_left from "./UI_BattleUserItem_left";
import UI_BattleUserItem_Right from "./UI_BattleUserItem_Right";
import UI_BattlePlayerItem from "./UI_BattlePlayerItem";
import UI_BattleStartDownTime from "./UI_BattleStartDownTime";

export default class battleBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_BattlePanel.URL, UI_BattlePanel);
		fgui.UIObjectFactory.setExtension(UI_MatchingPanel.URL, UI_MatchingPanel);
		fgui.UIObjectFactory.setExtension(UI_BattleUserItem_left.URL, UI_BattleUserItem_left);
		fgui.UIObjectFactory.setExtension(UI_BattleUserItem_Right.URL, UI_BattleUserItem_Right);
		fgui.UIObjectFactory.setExtension(UI_BattlePlayerItem.URL, UI_BattlePlayerItem);
		fgui.UIObjectFactory.setExtension(UI_BattleStartDownTime.URL, UI_BattleStartDownTime);
	}
}