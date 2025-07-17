/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_UserHeadPopup extends fgui.GComponent {

	public m_use:fgui.Controller;
	public m_ls:fgui.GList;
	public m_userBtn:fgui.GButton;
	public static URL:string = "ui://bl738s84g3651";

	public static createInstance():UI_UserHeadPopup {
		return <UI_UserHeadPopup>(fgui.UIPackage.createObject("home", "UserHeadPopup"));
	}

	protected onConstruct():void {
		this.m_use = this.getControllerAt(0);
		this.m_ls = <fgui.GList>(this.getChildAt(2));
		this.m_userBtn = <fgui.GButton>(this.getChildAt(3));
	}
}