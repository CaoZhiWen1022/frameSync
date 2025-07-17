/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_BattleUserItem_left extends fgui.GComponent {

	public m_isMy:fgui.Controller;
	public m_head:fgui.GComponent;
	public m_name:fgui.GTextField;
	public static URL:string = "ui://pve8p3jdlma83";

	public static createInstance():UI_BattleUserItem_left {
		return <UI_BattleUserItem_left>(fgui.UIPackage.createObject("battle", "BattleUserItem_left"));
	}

	protected onConstruct():void {
		this.m_isMy = this.getControllerAt(0);
		this.m_head = <fgui.GComponent>(this.getChildAt(0));
		this.m_name = <fgui.GTextField>(this.getChildAt(1));
	}
}