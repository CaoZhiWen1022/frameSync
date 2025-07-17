//自动生成
import {hero} from "./hero";
import {userHand} from "./userHand";
export class GameConfig {
    private static _ins: GameConfig;
    public static get ins(): GameConfig {
        if (!this._ins) {
            this._ins = new GameConfig();
        }
        return this._ins;
    }
    /** 英雄表 */
    public hero: hero[];
    /** 头像表 */
    public userHand: userHand[];
    public async init() {
        this.hero = await this.load("hero");
        this.userHand = await this.load("userHand");
    }
    public async load(name: string) {
        let data = await Laya.loader.load("resources/json/" + name + ".json");
        return data.data;
    }
}
