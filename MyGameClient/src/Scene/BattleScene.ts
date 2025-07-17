import { UIID } from "../FGUIFrame/UIEnum";
import { UIInit } from "../FGUIFrame/UIInit";
import { UIMgr } from "../FGUIFrame/UIMgr";

@Laya.regClass()
export class BattleScene extends Laya.Scene {
    public constructor() {
        super();
    }

    async onAwake(): Promise<void> {
        UIMgr.open({ UIID: UIID.BattlePanel });
    }
}