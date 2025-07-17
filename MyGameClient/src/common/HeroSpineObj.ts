import { GameConfig } from "../GameConfig/GameConfig";

export class HeroSpineObj {

    param: HeroSpineObjParam;

    spine: Laya.SpineSkeleton;

    isDestroy: boolean = false;

    static create(param: HeroSpineObjParam) {
        return new HeroSpineObj(param);
    }

    private constructor(param: HeroSpineObjParam) {
        this.param = param;
        this.init();
    }

    private async init() {
        let cfg = GameConfig.ins.hero.find(v => v.id == this.param.cfgId);
        let url = "resources/Spine/" + cfg.spine + "/" + cfg.spine + ".skel";
        let spineTem = await Laya.loader.load(url);
        if (!this.param.parent || this.param.parent.destroyed || this.isDestroy) {
            return;
        }
        this.spine = new Laya.SpineSkeleton();
        this.param.parent.addChild(this.spine);
        this.spine.templet = spineTem;
        this.spine.x = this.param.x;
        this.spine.y = this.param.y;
        this.spine.scaleX = this.spine.scaleY = this.param.scale;
        if (this.param.playType) {
            this.spine.play(this.param.playType, this.param.loop);
        }
        if (this.param.loadComplete) {
            this.param.loadComplete.run();
        }
    }

    play(playType: HeroSpinePlayType, loop?: boolean, callback?: Function) {
        if (this.spine && !this.spine.destroyed && this.spine.templet) {
            this.spine.play(playType, loop);
            if (callback) this.spine.once(Laya.Event.STOPPED, callback);
        }
    }

    destroy() {
        this.spine.destroy();
        this.isDestroy = true;
    }

}

export type HeroSpineObjParam = {
    cfgId: string;
    parent: Laya.Sprite;
    x: number;
    y: number;
    scale: number;
    playType?: HeroSpinePlayType;
    loop?: boolean;
    loadComplete?: Laya.Handler;
}

export enum HeroSpinePlayType {
    attack = 'attack',
    change = 'change',
    dead = 'dead',
    down = 'down',
    hit = 'hit',
    jump = 'jump',
    stand = 'stand',
    skill1 = 'skill1',
}