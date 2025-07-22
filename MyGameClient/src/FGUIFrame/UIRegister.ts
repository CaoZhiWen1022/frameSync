import UI_BattlePanel from "../FGUI/battle/UI_BattlePanel";
import UI_MatchingPanel from "../FGUI/battle/UI_MatchingPanel";
import UI_CommonPopup from "../FGUI/common/UI_CommonPopup";
import UI_FullScreenMaskPanel from "../FGUI/common/UI_FullScreenMaskPanel";
import UI_TipPanel from "../FGUI/common/UI_TipPanel";
import UI_HeroPanel from "../FGUI/hero/UI_HeroPanel";
import UI_HomePanel from "../FGUI/home/UI_HomePanel";
import UI_UserHeadPopup from "../FGUI/home/UI_UserHeadPopup";
import UI_LoadPanel from "../FGUI/load/UI_LoadPanel";
import UI_LoginPanel from "../FGUI/login/UI_LoginPanel";
import UI_ReqisterPopup from "../FGUI/login/UI_ReqisterPopup";
import UI_SpineTestPanel from "../FGUI/spineTest/UI_SpineTestPanel";
import { BattlePanel } from "../UI/battle/BattlePanel";
import { MatchingPanel } from "../UI/battle/MatchingPanel";
import { CommonPopup } from "../UI/common/CommonPopup";
import { FullScreenMaskPanel } from "../UI/common/FullScreenMaskPanel";
import { TipPanel } from "../UI/common/TipPanel";
import { HeroPanel } from "../UI/hero/HeroPanel";
import { HomePanel } from "../UI/Home/HomePanel";
import { UserHeadPopup } from "../UI/Home/UserHeadPopup";
import { LoadPanel } from "../UI/Load/LoadPanel";
import { LoginPanel } from "../UI/login/LoginPanel";
import { ReqisterPopup } from "../UI/login/ReqisterPopup";
import { SpineTestPanel } from "../UI/spineTest/SpineTest";
import { PopupPriority, UIID, UILayer, UIType } from "./UIEnum";
import { UIRegisterInfo } from "./UIRegisterInfo";

export class UIRegister {

    public static ALLUIINFO: UIRegisterInfo[] = [];

    public static init() {
        UIRegister.ALLUIINFO = [
            {
                UIID: UIID.FullScreenMaskPanel,
                createInstance: UI_FullScreenMaskPanel.createInstance,
                _class: FullScreenMaskPanel,
                UIType: UIType.Panel,
                UILayer: UILayer.FullScreenMask,
                uiPackage: ["common"],
                uiRes: []
            }, {
                UIID: UIID.LoadPanel,
                createInstance: UI_LoadPanel.createInstance,
                _class: LoadPanel,
                UIType: UIType.Panel,
                UILayer: UILayer.panelLayer,
                uiPackage: ["load"],
                uiRes: []
            }, {
                UIID: UIID.LoginPanel,
                createInstance: UI_LoginPanel.createInstance,
                _class: LoginPanel,
                UIType: UIType.Panel,
                UILayer: UILayer.panelLayer,
                uiPackage: ["login"],
                uiRes: []
            }, {
                UIID: UIID.TipsPanel,
                createInstance: UI_TipPanel.createInstance,
                _class: TipPanel,
                UIType: UIType.Panel,
                UILayer: UILayer.FullScreenMask,
                uiPackage: ["login"],
                uiRes: []
            }, {
                UIID: UIID.ReqisterPopup,
                createInstance: UI_ReqisterPopup.createInstance,
                _class: ReqisterPopup,
                UIType: UIType.Popup,
                UILayer: UILayer.popupLayer,
                uiPackage: ["login"],
                uiRes: [],
                popupPriority: PopupPriority.Normal
            }, {
                UIID: UIID.HomePanel,
                createInstance: UI_HomePanel.createInstance,
                _class: HomePanel,
                UIType: UIType.Panel,
                UILayer: UILayer.panelLayer,
                uiPackage: ["home"],
                uiRes: [],
            }, {
                UIID: UIID.SpineTestPanel,
                createInstance: UI_SpineTestPanel.createInstance,
                _class: SpineTestPanel,
                UIType: UIType.Panel,
                UILayer: UILayer.panelLayer,
                uiPackage: ["spineTest"],
                uiRes: [],
            }, {
                UIID: UIID.HeroPanel,
                createInstance: UI_HeroPanel.createInstance,
                _class: HeroPanel,
                UIType: UIType.Panel,
                UILayer: UILayer.panelLayer,
                uiPackage: ["hero"],
                uiRes: [],
            }, {
                UIID: UIID.UserHeadPopup,
                createInstance: UI_UserHeadPopup.createInstance,
                _class: UserHeadPopup,
                UIType: UIType.Popup,
                UILayer: UILayer.popupLayer,
                uiPackage: ["home"],
                uiRes: [],
                popupPriority: PopupPriority.Normal
            },{
                UIID: UIID.BattlePanel,
                createInstance: UI_BattlePanel.createInstance,
                _class: BattlePanel,
                UIType: UIType.Panel,
                UILayer: UILayer.panelLayer,
                uiPackage: ["battle"],
                uiRes: [],
            },{
                UIID: UIID.MatchingPanel,
                createInstance: UI_MatchingPanel.createInstance,
                _class: MatchingPanel,
                UIType: UIType.Panel,
                UILayer: UILayer.panelLayer,
                uiPackage: ["battle"],
                uiRes: [],
            },{
                UIID: UIID.CommonPopup,
                createInstance: UI_CommonPopup.createInstance,
                _class: CommonPopup,
                UIType: UIType.Popup,
                UILayer: UILayer.popupLayer,
                uiPackage: ["common"],
                uiRes: [],
                popupPriority: PopupPriority.High
            }
        ]
    }

    public static getUIInfo(uiID: UIID): UIRegisterInfo {
        return UIRegister.ALLUIINFO.find(info => info.UIID == uiID);
    }
}