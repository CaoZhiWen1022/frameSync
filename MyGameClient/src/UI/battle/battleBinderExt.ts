import battleBinder from "../../FGUI/battle/battleBinder";
import { UI_BattlePlayerItemExt } from "./UI_BattlePlayerItemExt";

export class battleBinderExt {
    static bindAll() {
        battleBinder.bindAll();
        [
            UI_BattlePlayerItemExt
        ].forEach(v => fgui.UIObjectFactory.setExtension(v.URL, v))
    }
}