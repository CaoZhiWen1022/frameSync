import { HeroSpineObj, HeroSpinePlayType } from "../../common/HeroSpineObj";
import UI_SpineTestPanel from "../../FGUI/spineTest/UI_SpineTestPanel";
import { openUIparam } from "../../FGUIFrame/OpenUIParam";
import { UIPanel } from "../../FGUIFrame/UIPanel";
import { GameConfig } from "../../GameConfig/GameConfig";

export class SpineTestPanel extends UIPanel {
    m_ui: UI_SpineTestPanel;

    heroSpineObj: HeroSpineObj = null;
    open(openParam: openUIparam): boolean {
        super.open(openParam);
        this.m_ui.m_heroList.itemRenderer = Laya.Handler.create(this, this.onHeroItemRender, null, false);
        this.m_ui.m_heroList.on(fgui.Events.CLICK_ITEM, this, this.onHeroItemClick);
        this.m_ui.m_heroList.numItems = GameConfig.ins.hero.length;
        this.m_ui.m_attack.onClick(this, this.spinePlay, ['attack'])
        this.m_ui.m_dead.onClick(this, this.spinePlay, ['dead'])
        this.m_ui.m_down.onClick(this, this.spinePlay, ['down'])
        this.m_ui.m_hit.onClick(this, this.spinePlay, ['hit'])
        this.m_ui.m_jump.onClick(this, this.spinePlay, ['jump'])
        this.m_ui.m_stand.onClick(this, this.spinePlay, ['stand'])
        this.m_ui.m_skill1.onClick(this, this.spinePlay, ['skill1'])
        return true;
    }

    onHeroItemRender(index: number, item: fgui.GButton) {
        let cfg = GameConfig.ins.hero[index];
        item.title = cfg.name;
        item.data = index;
    }

    onHeroItemClick(item: fgui.GButton) {
        if (this.heroSpineObj) this.heroSpineObj.destroy();
        let index = item.data as number;
        this.heroSpineObj = HeroSpineObj.create({
            cfgId: GameConfig.ins.hero[index].id,
            parent: this.m_ui.m_spineRoot.displayObject,
            x: this.m_ui.m_spineRoot.width / 2,
            y: this.m_ui.m_spineRoot.height,
            scale: 1,
            playType: HeroSpinePlayType.stand,
            loop: true

        })
    }

    spinePlay(type: HeroSpinePlayType) {
        if (this.heroSpineObj) this.heroSpineObj.play(type, true);

    }
}