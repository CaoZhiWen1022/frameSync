import { GameEventMgr, GameEventType } from "../common/GameEventMgr";
import { proto } from "../protos/proto";
import { PlayerFrameSync } from "./PlayerFrameSync";

export class BattleFrameSyncMgr {

    private frameDatas: proto.battleFrameResp[] = [];

    private players: PlayerFrameSync[] = [];

    private m_frame: number = -1;
    public get frame() { return this.m_frame; }

    private lastUpdateFrameDataTime = 0;

    private m_logicFrameInterval = 0;
    public get logicFrameInterval() { return this.m_logicFrameInterval; }
    constructor() {
        this.addEvent();
        Laya.timer.frameLoop(1, this, this.renderFrameUpdate);
    }

    addEvent() {
        GameEventMgr.instance.on(GameEventType.BattleFrameData, this, this.handleFrameInput);
    }

    addPlayer(player: PlayerFrameSync) {
        this.players.push(player);
    }

    /** 服务器广播帧操作 */
    handleFrameInput(data: proto.battleFrameResp) {
        this.frameDatas.push(data);
        this.frameDatas.sort((a, b) => a.frameIndex - b.frameIndex);
        this.logicFrameUpdate();
        if (this.lastUpdateFrameDataTime) {
            let now = Date.now();
            let diff = now - this.lastUpdateFrameDataTime - 33;
            GameEventMgr.instance.event(GameEventType.BattlePingUpdate, diff);
            this.m_logicFrameInterval = now - this.lastUpdateFrameDataTime;
        }
        this.lastUpdateFrameDataTime = Date.now();
    }

    /** 逻辑帧更新 */
    logicFrameUpdate() {
        while (this.frameDatas.length > 0) {
            let data = this.frameDatas.shift()!;
            for (let i = 0; i < data.data.length; i++) {
                let frameData = data.data[i];
                let player = this.players.find((p) => p.userId == frameData.userId);
                if (player) {
                    player.setFrameData(frameData.data, data.frameIndex, this.m_logicFrameInterval);
                }
            }
            //所有玩家执行逻辑帧更新
            this.players.forEach(player => player.logicFrameUpdate(data.frameIndex, this.m_logicFrameInterval));
            this.m_frame = data.frameIndex;
        }
    }

    /** 渲染帧更新 */
    renderFrameUpdate() {
        //执行一下逻辑帧更新，避免帧数据滞留
        this.logicFrameUpdate();
        //所有玩家执行渲染帧更新
        this.players.forEach(player => player.renderFrameUpdate());
    }
}