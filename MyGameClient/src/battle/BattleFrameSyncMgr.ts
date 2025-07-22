import { GameEventMgr, GameEventType } from "../common/GameEventMgr";
import { BattleLogic } from "../Logic/battleLogic";
import { proto } from "../protos/proto";
import { PlayerFrameSync } from "./PlayerFrameSync";

export class BattleFrameSyncMgr {

    private frameDatas: proto.battleFrameResp[] = [];
    private allFrameDatas: proto.battleFrameResp[] = [];

    private players: PlayerFrameSync[] = [];

    private m_frame: number = null;
    public get frame() { return this.m_frame; }

    /** 异常后，帧数据更新中 */
    private updateFrameDataing = false;

    private m_logicFrameUpdataMode: 'quicken' | 'normal' = 'normal';
    /** 当前逻辑帧执行方式 */
    get logicFrameUpdataMode() {
        return this.m_logicFrameUpdataMode;
    }

    get logicFrameDt() {
        if (this.allFrameDatas.length < 2) return 0;
        let t1 = this.allFrameDatas[this.allFrameDatas.length - 2].data.frameAt;
        let t2 = this.allFrameDatas[this.allFrameDatas.length - 1].data.frameAt;
        return Number(t2) - Number(t1);
    }

    constructor() {
        this.addEvent();
        Laya.timer.frameLoop(1, this, this.renderFrameUpdate);
    }

    addEvent() {
        GameEventMgr.instance.on(GameEventType.BattleFrameDataUpdate, this, this.handleFrameInput);
        GameEventMgr.instance.on(GameEventType.GET_BattleFrameDataResp, this, this.handleFrameInputUpdate);
    }

    addPlayer(player: PlayerFrameSync) {
        this.players.push(player);
    }

    handleFrameInputUpdate(data: proto.getBattleFrameDataResp) {
        this.updateFrameDataing = false;
        data.data.sort((a, b) => a.frameIndex - b.frameIndex);
        data.data.forEach(data => {
            let framedata = proto.battleFrameResp.create();
            framedata.data = data;
            this.frameDatas.push(framedata);
            this.allFrameDatas.push(framedata);
        })
        this.frameDatas.sort((a, b) => a.data.frameIndex - b.data.frameIndex);
        this.m_logicFrameUpdataMode = 'quicken';
        this.logicFrameUpdate();
        this.m_logicFrameUpdataMode = 'normal';
    }

    /** 服务器广播帧操作 */
    handleFrameInput(data: proto.battleFrameResp) {
        if (this.updateFrameDataing) return;

        if (this.allFrameDatas && this.allFrameDatas.length && this.allFrameDatas[this.allFrameDatas.length - 1].data.frameIndex + 1 != data.data.frameIndex) {
            console.error("帧数据不连续,准备获取最新帧数据");
            this.updateFrameDataing = true;
            BattleLogic.getBattleFrameDataReq(this.m_frame);
            return;
        }
        this.frameDatas.push(data);
        this.allFrameDatas.push(data);
        this.frameDatas.sort((a, b) => a.data.frameIndex - b.data.frameIndex);
    }

    /** 逻辑帧更新 */
    logicFrameUpdate() {
        while (this.frameDatas.length > 0) {
            let data = this.frameDatas.shift()!;
            if (data.data.frameData) {
                for (let i = 0; i < data.data.frameData.length; i++) {
                    let frameData = data.data.frameData[i];

                    let player = this.players.find((p) => p.userId == frameData.userId);
                    if (player) {
                        player.setFrameData(frameData.data, data.data.frameIndex);
                    }
                }
            }
            this.m_frame = data.data.frameIndex;
            this.players.forEach(player => player.logicFrameUpdate());
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