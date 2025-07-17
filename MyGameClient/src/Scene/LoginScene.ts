import { UIID } from "../FGUIFrame/UIEnum";
import { UIInit } from "../FGUIFrame/UIInit";
import { UIMgr } from "../FGUIFrame/UIMgr";

@Laya.regClass()
export class LoginScene extends Laya.Scene {
    public constructor() {
        super();
    }

    onAwake() {
        UIMgr.open({ UIID: UIID.LoginPanel });
    }
}