import { proto } from "../protos/proto";
import { UI_BattlePlayerItemExt } from "../UI/battle/UI_BattlePlayerItemExt";
import { BattleMgr } from "./BattleMgr";

/** 玩家帧同步脚本 */
export class PlayerFrameSync {

    /** 每秒移动像素 */
    static moveSpeed = 800;

    ui: UI_BattlePlayerItemExt;
    userId: number;

    logicFramePos: proto.Iv2;

    moveData: proto.IbattleMoveData & { startFrame: number, startTimestamp: number };
    constructor(userId: number, ui: UI_BattlePlayerItemExt) {
        this.ui = ui;
        this.userId = userId;
        this.logicFramePos = { x: ui.x, y: ui.y };
    }

    setFrameData(data: proto.IbattleClientFrameData, frame: number, logicFrameInterval: number) {
        switch (data.op) {
            case proto.battleOpType.move:
                this.setMove(data.moveData, frame, logicFrameInterval);
                break;
        }
    }

    setMove(moveData: proto.IbattleMoveData, frame: number, logicFrameInterval: number) {
        if (this.moveData) {
            //如果在移动过程中，需要更新逻辑帧位置
            this.logicFramePos = getNextPos(this.logicFramePos, moveData.target, logicFrameInterval);
        }
        this.moveData = { ...moveData, startFrame: frame, startTimestamp: Date.now() };
    }

    /** 逻辑帧更新 */
    logicFrameUpdate(frame: number, logicFrameInterval: number) {
        //根据帧数强制更新位置
        if (this.moveData && logicFrameInterval && frame > this.moveData.startFrame) {
            this.logicFramePos = getNextPos(this.logicFramePos, this.moveData.target, logicFrameInterval);
            // let uipos = { x: this.ui.x, y: this.ui.y };
            // let dis = Math.abs(uipos.x - this.logicFramePos.x) + Math.abs(uipos.y - this.logicFramePos.y);
            // if (dis > 20) {
            //     //强制同步
            //     this.ui.x = this.logicFramePos.x;
            //     this.ui.y = this.logicFramePos.y;
            // }
            if (this.logicFramePos.x == this.moveData.target.x && this.logicFramePos.y == this.moveData.target.y) {
                this.ui.x = this.moveData.target.x;
                this.ui.y = this.moveData.target.y;
                this.moveData = null;
            }
        }
    }

    /** 渲染帧更新 */
    renderFrameUpdate() {
        if (this.moveData) {
            let pos = getNextPos({ x: this.ui.x, y: this.ui.y }, this.moveData.target, Laya.timer.delta);
            this.ui.x = pos.x;
            this.ui.y = pos.y;
        }
    }

    /** 获取逻辑帧位置 */
    getLogicFramePos() {
        return this.logicFramePos;
    }
}


/** 获取下一帧位置 */
function getNextPos(lastPosition: proto.Iv2, targetPosition: proto.Iv2, frameDT: number) {
    // 计算当前位置到目标位置的距离
    const dx = targetPosition.x - lastPosition.x;
    const dy = targetPosition.y - lastPosition.y;
    const distanceToTarget = Math.sqrt(dx * dx + dy * dy);

    const moveDistance = PlayerFrameSync.moveSpeed * (frameDT / 1000);

    if (distanceToTarget <= moveDistance) {
        return { ...targetPosition };
    }

    // 否则计算移动后的新位置
    const ratio = moveDistance / distanceToTarget;
    return {
        x: lastPosition.x + dx * ratio,
        y: lastPosition.y + dy * ratio
    };
}