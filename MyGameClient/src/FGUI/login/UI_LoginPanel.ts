/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_LoginPanel extends fgui.GComponent {

	public m_account:fgui.GTextInput;
	public m_password:fgui.GTextInput;
	public m_loginBtn:fgui.GButton;
	public m_reqisterBtn:fgui.GButton;
	public static URL:string = "ui://b6jm6cmmlk2f0";

	public static createInstance():UI_LoginPanel {
		return <UI_LoginPanel>(fgui.UIPackage.createObject("login", "LoginPanel"));
	}

	protected onConstruct():void {
		this.m_account = <fgui.GTextInput>(this.getChildAt(3));
		this.m_password = <fgui.GTextInput>(this.getChildAt(6));
		this.m_loginBtn = <fgui.GButton>(this.getChildAt(7));
		this.m_reqisterBtn = <fgui.GButton>(this.getChildAt(8));
	}
}