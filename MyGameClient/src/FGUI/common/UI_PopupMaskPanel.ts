/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_PopupMaskPanel extends fgui.GComponent {

	public m_mask:fgui.GGraph;
	public static URL:string = "ui://bfsobnp3lk2f1";

	public static createInstance():UI_PopupMaskPanel {
		return <UI_PopupMaskPanel>(fgui.UIPackage.createObject("common", "PopupMaskPanel"));
	}

	protected onConstruct():void {
		this.m_mask = <fgui.GGraph>(this.getChildAt(0));
	}
}