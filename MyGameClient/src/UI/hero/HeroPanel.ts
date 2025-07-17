import { GameEventMgr, GameEventType } from "../../common/GameEventMgr";
import { HeroSpineObj, HeroSpinePlayType } from "../../common/HeroSpineObj";
import UI_HeroListItem from "../../FGUI/hero/UI_HeroListItem";
import UI_HeroPanel from "../../FGUI/hero/UI_HeroPanel";
import { openUIparam } from "../../FGUIFrame/OpenUIParam";
import { UIMgr } from "../../FGUIFrame/UIMgr";
import { UIPanel } from "../../FGUIFrame/UIPanel";
import { GameConfig } from "../../GameConfig/GameConfig";
import { HeroInfoLogic } from "../../Logic/HeroInfoLogic";

export class HeroPanel extends UIPanel {
    m_ui: UI_HeroPanel;
    useHeroId: string;
    spineObj: HeroSpineObj;
    open(openParam: openUIparam): boolean {
        super.open(openParam);
        this.m_ui.m_herols.itemRenderer = Laya.Handler.create(this, this.onHeroItemRender, null, false);
        this.m_ui.m_herols.on(fgui.Events.CLICK_ITEM, this, this.onHeroItemClick);
        this.m_ui.m_herols.numItems = GameConfig.ins.hero.length;
        this.m_ui.m_useBtn.onClick(this, this.onClickUse);
        this.m_ui.m_closeBtn.onClick(this, this.closeThis);
        this.init();
        GameEventMgr.instance.on(GameEventType.HeroInfoChange, this, this.init);
        return true;
    }

    init() {
        this.useHeroId = HeroInfoLogic.heroInfo.heroId;
        let index = GameConfig.ins.hero.findIndex(v => v.id == this.useHeroId);
        this.m_ui.m_herols.selectedIndex = index;
        this.m_ui.m_use.selectedIndex = this.useHeroId == HeroInfoLogic.heroInfo.heroId ? 0 : 1;
        this.setCurSele();
    }

    onHeroItemRender(index: number, item: UI_HeroListItem) {
        let cfg = GameConfig.ins.hero[index];
        item.m_heroName.text = cfg.name;
        item.data = cfg.id;
    }

    onHeroItemClick(item: UI_HeroListItem) {
        this.useHeroId = item.data as string;
        this.m_ui.m_use.selectedIndex = this.useHeroId == HeroInfoLogic.heroInfo.heroId ? 0 : 1;
        this.setCurSele();
    }

    setCurSele() {
        this.spineObj && this.spineObj.destroy();
        this.spineObj = HeroSpineObj.create({
            cfgId: this.useHeroId,
            parent: this.m_ui.m_spineRoot.displayObject,
            x: this.m_ui.m_spineRoot.width / 2,
            y: this.m_ui.m_spineRoot.height,
            scale: 2,
            playType: HeroSpinePlayType.stand,
            loop: true
        });
    }

    onClickUse() {
        if (this.useHeroId == HeroInfoLogic.heroInfo.heroId) return;
        HeroInfoLogic.heroSwitchReq(this.useHeroId);
    }


    close(): void {
        super.close();
        GameEventMgr.instance.off(GameEventType.HeroInfoChange, this, this.init);
    }
}