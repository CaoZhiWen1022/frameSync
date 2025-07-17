/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_HeroListItem extends fgui.GButton {

	public m_heroName:fgui.GTextField;
	public static URL:string = "ui://p2ty4wxqg3651";

	public static createInstance():UI_HeroListItem {
		return <UI_HeroListItem>(fgui.UIPackage.createObject("hero", "HeroListItem"));
	}

	protected onConstruct():void {
		this.m_heroName = <fgui.GTextField>(this.getChildAt(1));
	}
}