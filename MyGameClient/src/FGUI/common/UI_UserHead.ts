/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_UserHead extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://bfsobnp3g3655";

	public static createInstance():UI_UserHead {
		return <UI_UserHead>(fgui.UIPackage.createObject("common", "UserHead"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
	}
}