import { euclideanDistance } from "../common/CommonTools";
import { proto } from "../protos/proto";
import { UI_BattlePlayerItemExt } from "../UI/battle/UI_BattlePlayerItemExt";
import { BattleMgr } from "./BattleMgr";

/** 玩家帧同步脚本 */
export class PlayerFrameSync {

    /** 每秒移动像素 */
    static moveSpeed = 800;

    ui: UI_BattlePlayerItemExt;
    userId: number;

    logicFramePos: { x: number, y: number };
    /** 上次更新逻辑帧 */
    lastUpdateLogicFrameIndex: number;

    moveData: proto.IbattleMoveData & { frame: number };

    logicFrameRenderSprite: Laya.Sprite;
    constructor(userId: number, ui: UI_BattlePlayerItemExt) {
        this.ui = ui;
        this.userId = userId;
        this.logicFramePos = { x: ui.x, y: ui.y };
        this.logicFrameRenderSprite = new Laya.Sprite();
        this.logicFrameRenderSprite.size(100, 100);
        this.logicFrameRenderSprite.graphics.drawRect(0, 0, 20, 20, "#ff0000");
        this.logicFrameRenderSprite.pivotY = this.logicFrameRenderSprite.pivotY = 0.5;
        this.logicFrameRenderSprite.x = this.ui.x;
        this.logicFrameRenderSprite.y = this.ui.y;
        fgui.GRoot.inst.displayObject.addChild(this.logicFrameRenderSprite);
    }

    /** 帧数据更新 */
    setFrameData(data: proto.IframeData, frame: number) {
        switch (data.op) {
            case proto.battleOpType.move:
                this.setMove(data.moveData, frame);
                break;
        }
    }

    /** 设置移动数据 */
    setMove(moveData: proto.IbattleMoveData, frame: number) {
        this.moveData = { ...moveData, frame };
    }

    /** 逻辑帧更新 */
    logicFrameUpdate() {
        this.logicFramePosUpdate();
    }

    /** 逻辑帧位置更新 */
    logicFramePosUpdate() {
        if (this.moveData && BattleMgr.ins.battleFrameSyncMgr.frame > this.moveData.frame) {
            this.logicFramePos = getNextPos(this.logicFramePos, this.moveData.target, BattleMgr.ins.battleFrameSyncMgr.logicFrameDt);
            if (this.logicFrameRenderSprite) {
                this.logicFrameRenderSprite.x = this.logicFramePos.x;
                this.logicFrameRenderSprite.y = this.logicFramePos.y;
            }
            let dis = Math.sqrt((this.logicFramePos.x - this.ui.x) * (this.logicFramePos.x - this.ui.x) + (this.logicFramePos.y - this.ui.y) * (this.logicFramePos.y - this.ui.y));
            if (BattleMgr.ins.battleFrameSyncMgr.logicFrameUpdataMode == "quicken" || dis > 200) {
                this.ui.x = this.logicFramePos.x;
                this.ui.y = this.logicFramePos.y;
            }
        }
    }

    /** 渲染帧更新 */
    renderFrameUpdate() {
        if (this.moveData) {
            let logicFramePos = this.logicFramePos;
            let uiPos = { x: this.ui.x, y: this.ui.y };
            let target = this.moveData.target;
            let logicPosToTargetDis = euclideanDistance(logicFramePos, { x: target.x, y: target.y });
            let uiPosToTargetDis = euclideanDistance(uiPos, { x: target.x, y: target.y });
            let dt = Laya.timer.delta;
            let dis = Math.abs(logicPosToTargetDis - uiPosToTargetDis);
            //根据逻辑帧和渲染帧的差值,调整渲染移动速度
            if (logicPosToTargetDis > uiPosToTargetDis) {
                dt -= dis * 0.1;
            } else {
                dt += dis * 0.1;
            }
            if (dt < 0) dt = Laya.timer.delta;
            let pos = getNextPos({ x: this.ui.x, y: this.ui.y }, this.moveData.target, dt);
            if (isNaN(pos.x)) {
                console.log("pos.x", pos.x);
            }
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
function getNextPos(lastPosition: proto.Iv2, targetPosition: proto.Iv2, frameDT: number): { x: number, y: number } {
    // 计算当前位置到目标位置的距离
    const dx = targetPosition.x - lastPosition.x;
    const dy = targetPosition.y - lastPosition.y;
    const distanceToTarget = Math.sqrt(dx * dx + dy * dy);

    const moveDistance = PlayerFrameSync.moveSpeed * (frameDT / 1000);

    if (distanceToTarget <= moveDistance) {
        return { x: targetPosition.x, y: targetPosition.y };
    }

    // 否则计算移动后的新位置
    const ratio = moveDistance / distanceToTarget;
    return {
        x: lastPosition.x + dx * ratio,
        y: lastPosition.y + dy * ratio
    };
}