/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_FullScreenMaskPanel extends fgui.GComponent {

	public m_mask:fgui.GGraph;
	public static URL:string = "ui://bfsobnp3lk2f0";

	public static createInstance():UI_FullScreenMaskPanel {
		return <UI_FullScreenMaskPanel>(fgui.UIPackage.createObject("common", "FullScreenMaskPanel"));
	}

	protected onConstruct():void {
		this.m_mask = <fgui.GGraph>(this.getChildAt(0));
	}
}