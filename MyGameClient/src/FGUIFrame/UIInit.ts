
import battleBinder from "../FGUI/battle/battleBinder";
import commonBinder from "../FGUI/common/commonBinder";
import heroBinder from "../FGUI/hero/heroBinder";
import homeBinder from "../FGUI/home/homeBinder";
import loadBinder from "../FGUI/load/loadBinder";
import loginBinder from "../FGUI/login/loginBinder";
import spineTestBinder from "../FGUI/spineTest/spineTestBinder";
import { battleBinderExt } from "../UI/battle/battleBinderExt";
import { UIMgr } from "./UIMgr";
import { UIRegister } from "./UIRegister";
import { UIResource } from "./UIResourceMgr";

export class UIInit {

    //初始加载的pkg
    static startLoadPkgList: string[] = ['common'];

    static popupMaskAlpha: number = 0.5;

    static async init() {
        //初始化fairygui
        UIInit.bindAll();
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);

        //初始化注册
        UIRegister.init();
        //初始化uiLayer
        UIMgr.initUILayer();
        await UIResource.loadPackage(this.startLoadPkgList);
        await UIMgr.initFullScreenMaskPanel();
    }

    static bindAll() {
        //绑定fairygui
        commonBinder.bindAll();
        loadBinder.bindAll();
        loginBinder.bindAll();
        homeBinder.bindAll();
        spineTestBinder.bindAll();
        heroBinder.bindAll();
        battleBinder.bindAll();

        //绑定ext
        battleBinderExt.bindAll();
    }
}