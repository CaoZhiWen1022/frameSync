/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_BattlePlayerItem extends fgui.GComponent {

	public m_isMy:fgui.Controller;
	public m_spineRoot:fgui.GGraph;
	public static URL:string = "ui://pve8p3jdlma89";

	public static createInstance():UI_BattlePlayerItem {
		return <UI_BattlePlayerItem>(fgui.UIPackage.createObject("battle", "BattlePlayerItem"));
	}

	protected onConstruct():void {
		this.m_isMy = this.getControllerAt(0);
		this.m_spineRoot = <fgui.GGraph>(this.getChildAt(1));
	}
}