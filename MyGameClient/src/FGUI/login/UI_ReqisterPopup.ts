/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_ReqisterPopup extends fgui.GComponent {

	public m_account:fgui.GTextInput;
	public m_password:fgui.GTextInput;
	public m_password2:fgui.GTextInput;
	public m_tijiaoBtn:fgui.GButton;
	public m_name:fgui.GTextInput;
	public static URL:string = "ui://b6jm6cmmlk2f1";

	public static createInstance():UI_ReqisterPopup {
		return <UI_ReqisterPopup>(fgui.UIPackage.createObject("login", "ReqisterPopup"));
	}

	protected onConstruct():void {
		this.m_account = <fgui.GTextInput>(this.getChildAt(4));
		this.m_password = <fgui.GTextInput>(this.getChildAt(7));
		this.m_password2 = <fgui.GTextInput>(this.getChildAt(10));
		this.m_tijiaoBtn = <fgui.GButton>(this.getChildAt(11));
		this.m_name = <fgui.GTextInput>(this.getChildAt(14));
	}
}