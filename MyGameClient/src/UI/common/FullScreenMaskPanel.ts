import { UIPanel } from "../../FGUIFrame/UIPanel";

export class FullScreenMaskPanel extends UIPanel {

    private _visibles: boolean[] = [];

    private state: MaskState = MaskState.hide;

    setVisible(visible: boolean) {
        if (visible) {
            this._visibles.push(true);
        } else {
            this._visibles.pop();
        }
        this.refresh();
    }

    refresh() {
        if (this._visibles.length > 0) {
            if (this.state == MaskState.hide) {
                this.state = MaskState.showing;
                Laya.timer.once(500, this, this.show)
            }
        } else {
            this.state = MaskState.hide;
            this.visible = false;
            Laya.timer.clear(this, this.show)
        }
    }

    show() {
        this.visible = true;
        this.state = MaskState.show;
    }
}

enum MaskState {
    /** 隐藏 */
    hide = 0,
    /** 显示中，游戏仍然允许点击 */
    showing = 1,
    /** 显示完毕，游戏不可点击 */
    show = 2,
}