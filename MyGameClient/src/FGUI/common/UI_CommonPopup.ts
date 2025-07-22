/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CommonPopup extends fgui.GComponent {

	public m_title:fgui.GTextField;
	public m_content:fgui.GTextField;
	public m_confirmBtn:fgui.GButton;
	public m_cancelBtn:fgui.GButton;
	public static URL:string = "ui://bfsobnp3oy7a7";

	public static createInstance():UI_CommonPopup {
		return <UI_CommonPopup>(fgui.UIPackage.createObject("common", "CommonPopup"));
	}

	protected onConstruct():void {
		this.m_title = <fgui.GTextField>(this.getChildAt(1));
		this.m_content = <fgui.GTextField>(this.getChildAt(2));
		this.m_confirmBtn = <fgui.GButton>(this.getChildAt(3));
		this.m_cancelBtn = <fgui.GButton>(this.getChildAt(4));
	}
}