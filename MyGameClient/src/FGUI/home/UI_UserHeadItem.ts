/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_UserHeadItem extends fgui.GButton {

	public m_head:fgui.GComponent;
	public static URL:string = "ui://bl738s84g3652";

	public static createInstance():UI_UserHeadItem {
		return <UI_UserHeadItem>(fgui.UIPackage.createObject("home", "UserHeadItem"));
	}

	protected onConstruct():void {
		this.m_head = <fgui.GComponent>(this.getChildAt(0));
	}
}