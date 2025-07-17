/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_LoadPanel extends fgui.GComponent {

	public m_bar:fgui.GProgressBar;
	public static URL:string = "ui://b540154hn9jt0";

	public static createInstance():UI_LoadPanel {
		return <UI_LoadPanel>(fgui.UIPackage.createObject("load", "LoadPanel"));
	}

	protected onConstruct():void {
		this.m_bar = <fgui.GProgressBar>(this.getChildAt(2));
	}
}