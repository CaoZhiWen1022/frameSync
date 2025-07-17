/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_MatchingPanel extends fgui.GComponent {

	public m_user1:fgui.GComponent;
	public m_user2:fgui.GComponent;
	public static URL:string = "ui://pve8p3jdlma81";

	public static createInstance():UI_MatchingPanel {
		return <UI_MatchingPanel>(fgui.UIPackage.createObject("battle", "MatchingPanel"));
	}

	protected onConstruct():void {
		this.m_user1 = <fgui.GComponent>(this.getChildAt(2));
		this.m_user2 = <fgui.GComponent>(this.getChildAt(4));
	}
}