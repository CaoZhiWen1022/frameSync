/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_tipsCom from "./UI_tipsCom";

export default class UI_TipPanel extends fgui.GComponent {

	public m_tips:UI_tipsCom;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://bfsobnp3lk2f3";

	public static createInstance():UI_TipPanel {
		return <UI_TipPanel>(fgui.UIPackage.createObject("common", "TipPanel"));
	}

	protected onConstruct():void {
		this.m_tips = <UI_tipsCom>(this.getChildAt(0));
		this.m_t0 = this.getTransitionAt(0);
	}
}