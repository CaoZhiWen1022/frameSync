import { GameEventMgr, GameEventType } from "../common/GameEventMgr";
import { proto } from "../protos/proto";
import { BattleFrameSyncMgr } from "./BattleFrameSyncMgr";

export class BattleMgr {
    static frameInterval: number = 33;

    public static _ins: BattleMgr;
    public static get ins(): BattleMgr {
        if (!BattleMgr._ins) {
            BattleMgr._ins = new BattleMgr();
        }
        return BattleMgr._ins;
    }

    battleUsers: proto.IBattleUserInfo[];
    roomId: number;

    battleFrameSyncMgr: BattleFrameSyncMgr;

    /** 匹配成功后调用 */
    init(users: proto.IBattleUserInfo[], roomId: number) {
        this.battleUsers = users;
        this.roomId = roomId;
        GameEventMgr.instance.event(GameEventType.MatchSuccess, [users]);
        Laya.timer.once(2000, this, () => {
            GameEventMgr.instance.event(GameEventType.EnterBattle);
        })
        //创建帧同步管理器
        this.battleFrameSyncMgr = new BattleFrameSyncMgr();

    }
}