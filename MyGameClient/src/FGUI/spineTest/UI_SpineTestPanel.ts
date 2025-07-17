/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_SpineTestPanel extends fgui.GComponent {

	public m_heroList:fgui.GList;
	public m_attack:fgui.GButton;
	public m_dead:fgui.GButton;
	public m_down:fgui.GButton;
	public m_hit:fgui.GButton;
	public m_jump:fgui.GButton;
	public m_stand:fgui.GButton;
	public m_skill1:fgui.GButton;
	public m_spineRoot:fgui.GGraph;
	public static URL:string = "ui://b1oq8ahdlk2f0";

	public static createInstance():UI_SpineTestPanel {
		return <UI_SpineTestPanel>(fgui.UIPackage.createObject("spineTest", "SpineTestPanel"));
	}

	protected onConstruct():void {
		this.m_heroList = <fgui.GList>(this.getChildAt(1));
		this.m_attack = <fgui.GButton>(this.getChildAt(2));
		this.m_dead = <fgui.GButton>(this.getChildAt(3));
		this.m_down = <fgui.GButton>(this.getChildAt(4));
		this.m_hit = <fgui.GButton>(this.getChildAt(5));
		this.m_jump = <fgui.GButton>(this.getChildAt(6));
		this.m_stand = <fgui.GButton>(this.getChildAt(7));
		this.m_skill1 = <fgui.GButton>(this.getChildAt(8));
		this.m_spineRoot = <fgui.GGraph>(this.getChildAt(9));
	}
}