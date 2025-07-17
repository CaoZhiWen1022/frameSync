/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_HomePanel extends fgui.GComponent {

	public m_startGameBtn:fgui.GButton;
	public m_spineRoot:fgui.GGraph;
	public m_heroBtn:fgui.GGraph;
	public m_head:fgui.GComponent;
	public m_userName:fgui.GTextField;
	public static URL:string = "ui://bl738s84lk2f0";

	public static createInstance():UI_HomePanel {
		return <UI_HomePanel>(fgui.UIPackage.createObject("home", "HomePanel"));
	}

	protected onConstruct():void {
		this.m_startGameBtn = <fgui.GButton>(this.getChildAt(1));
		this.m_spineRoot = <fgui.GGraph>(this.getChildAt(2));
		this.m_heroBtn = <fgui.GGraph>(this.getChildAt(3));
		this.m_head = <fgui.GComponent>(this.getChildAt(4));
		this.m_userName = <fgui.GTextField>(this.getChildAt(5));
	}
}