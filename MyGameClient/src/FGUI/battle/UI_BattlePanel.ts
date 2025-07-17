/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BattleUserItem_left from "./UI_BattleUserItem_left";
import UI_BattleUserItem_Right from "./UI_BattleUserItem_Right";
import UI_BattlePlayerItem from "./UI_BattlePlayerItem";
import UI_BattleStartDownTime from "./UI_BattleStartDownTime";

export default class UI_BattlePanel extends fgui.GComponent {

	public m_userHead1:UI_BattleUserItem_left;
	public m_userHead2:UI_BattleUserItem_Right;
	public m_user1:UI_BattlePlayerItem;
	public m_user2:UI_BattlePlayerItem;
	public m_dowmTimeCom:UI_BattleStartDownTime;
	public m_ping:fgui.GTextField;
	public static URL:string = "ui://pve8p3jdg3650";

	public static createInstance():UI_BattlePanel {
		return <UI_BattlePanel>(fgui.UIPackage.createObject("battle", "BattlePanel"));
	}

	protected onConstruct():void {
		this.m_userHead1 = <UI_BattleUserItem_left>(this.getChildAt(1));
		this.m_userHead2 = <UI_BattleUserItem_Right>(this.getChildAt(2));
		this.m_user1 = <UI_BattlePlayerItem>(this.getChildAt(3));
		this.m_user2 = <UI_BattlePlayerItem>(this.getChildAt(4));
		this.m_dowmTimeCom = <UI_BattleStartDownTime>(this.getChildAt(5));
		this.m_ping = <fgui.GTextField>(this.getChildAt(6));
	}
}