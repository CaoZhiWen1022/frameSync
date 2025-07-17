/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_tipsCom extends fgui.GComponent {

	public m_tips:fgui.GTextField;
	public static URL:string = "ui://bfsobnp3lk2f4";

	public static createInstance():UI_tipsCom {
		return <UI_tipsCom>(fgui.UIPackage.createObject("common", "tipsCom"));
	}

	protected onConstruct():void {
		this.m_tips = <fgui.GTextField>(this.getChildAt(1));
	}
}