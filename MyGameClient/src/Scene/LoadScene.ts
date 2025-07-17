import { UIID } from "../FGUIFrame/UIEnum";
import { UIInit } from "../FGUIFrame/UIInit";
import { UIMgr } from "../FGUIFrame/UIMgr";
import { proto } from "../protos/proto";

@Laya.regClass()
export class LoadScene extends Laya.Scene {
    public constructor() {
        super();
    }

    async onAwake(): Promise<void> {
        // Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        await UIInit.init();
        UIMgr.open({ UIID: UIID.LoadPanel });
    }
}