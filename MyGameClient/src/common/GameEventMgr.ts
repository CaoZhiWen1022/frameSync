export class GameEventMgr extends Laya.EventDispatcher {
    private static _instance: GameEventMgr = null;
    public static get instance(): GameEventMgr {
        if (this._instance == null) {
            this._instance = new GameEventMgr();
        }
        return this._instance;
    }
}

export enum GameEventType {
    LoginSuccess = 'LoginSuccess',
    ReqisterSuccess = 'ReqisterSuccess',
    HeroInfoChange = 'HeroInfoChange',
    UserHeadChange = 'UserHeadChange',

    MatchSuccess = 'MatchSuccess',
    EnterBattle = 'EnterBattle',
    GameStartDownTime = 'GameStartDownTime',
    GameStart = 'GameStart',
    BattleFrameData = 'BattleFrameData',
    GameLogicFrameUpdate = 'GameLogicFrameUpdate',
    BattlePingUpdate = 'BattlePingUpdate',
}