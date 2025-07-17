/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_HeroPanel extends fgui.GComponent {

	public m_use:fgui.Controller;
	public m_herols:fgui.GList;
	public m_spineRoot:fgui.GGraph;
	public m_useBtn:fgui.GButton;
	public m_closeBtn:fgui.GButton;
	public static URL:string = "ui://p2ty4wxqg3650";

	public static createInstance():UI_HeroPanel {
		return <UI_HeroPanel>(fgui.UIPackage.createObject("hero", "HeroPanel"));
	}

	protected onConstruct():void {
		this.m_use = this.getControllerAt(0);
		this.m_herols = <fgui.GList>(this.getChildAt(1));
		this.m_spineRoot = <fgui.GGraph>(this.getChildAt(2));
		this.m_useBtn = <fgui.GButton>(this.getChildAt(3));
		this.m_closeBtn = <fgui.GButton>(this.getChildAt(4));
	}
}