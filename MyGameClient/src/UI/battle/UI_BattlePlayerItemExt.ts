import { HeroSpineObj, HeroSpinePlayType } from "../../common/HeroSpineObj";
import UI_BattlePlayerItem from "../../FGUI/battle/UI_BattlePlayerItem";
import { LoginLogic } from "../../Logic/LoginLogic";

export class UI_BattlePlayerItemExt extends UI_BattlePlayerItem {

    userId: number;
    heroId: string;
    spineObj: HeroSpineObj;
    init(userId: number, heroId: string) {
        this.m_isMy.selectedIndex = userId == LoginLogic.userInfo.id ? 0 : 1;
        return new Promise<void>((resolve, reject) => {
            this.userId = userId;
            this.heroId = heroId;
            this.spineObj = HeroSpineObj.create({
                cfgId: heroId,
                parent: this.m_spineRoot.displayObject,
                x: 0,
                y: 0,
                scale: 1.5,
                loop: true,
                playType: HeroSpinePlayType.stand,
                loadComplete: Laya.Handler.create(this, () => {
                    resolve();
                }),
            })

        })
    }
}