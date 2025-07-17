/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_BattleStartDownTime extends fgui.GComponent {

	public m_time:fgui.GTextField;
	public static URL:string = "ui://pve8p3jdlma8a";

	public static createInstance():UI_BattleStartDownTime {
		return <UI_BattleStartDownTime>(fgui.UIPackage.createObject("battle", "BattleStartDownTime"));
	}

	protected onConstruct():void {
		this.m_time = <fgui.GTextField>(this.getChildAt(1));
	}
}