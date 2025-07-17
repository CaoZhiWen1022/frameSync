import { GameEventMgr, GameEventType } from "../common/GameEventMgr";
import { GameNetMgr } from "../GameNet/GameNetMgr";
import { proto } from "../protos/proto";

export class HeroInfoLogic {

    static heroInfo: proto.IHeroInfo = null;

    static heroInfoReq() {
        GameNetMgr.instance.send(proto.MsgId.ID_HeroInfo, proto.HeroInfoReq.create());
        return new Promise((resolve, reject) => {
            GameEventMgr.instance.once(GameEventType.HeroInfoChange, this, () => {
                resolve(true);
            });
        });

    }

    static heroInfoResp(data: proto.HeroInfoResp) {
        this.heroInfo = data.heroInfo;
        GameEventMgr.instance.event(GameEventType.HeroInfoChange);
    }

    static heroSwitchReq(heroId: string) {
        let req = proto.HeroSwitchReq.create({
            heroId: heroId
        })
        GameNetMgr.instance.send(proto.MsgId.ID_HeroSwitch, req);
    }

    static heroSwitchResp(data: proto.HeroSwitchResp) {
        this.heroInfo = data.heroInfo;
        GameEventMgr.instance.event(GameEventType.HeroInfoChange);
    }
}