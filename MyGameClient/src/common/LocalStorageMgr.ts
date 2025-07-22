import { userInfo } from "../Logic/UserInfo";
import { LocalStorageObj } from "./LocalStorageObj";

export class LocalStorageMgr {

    public static _ins: LocalStorageMgr;
    public static get ins(): LocalStorageMgr {
        if (!this._ins) {
            this._ins = new LocalStorageMgr();
        }
        return this._ins;
    }

    getItem<T extends LocalStorageObj>(_class: new () => T) {
        let obj = new _class();
        let key = obj.key;
        let value = Laya.LocalStorage.getItem(key);
        if (value) {
            obj.value = JSON.parse(value);
            return obj;
        }
    }

    setItem(_class: LocalStorageObj) {
        let key = _class.key;
        let value = JSON.stringify(_class.value);
        Laya.LocalStorage.setItem(key, value);
    }

    getUserItem<T extends LocalStorageObj>(_class: new () => T) {
        if (!userInfo.isLogin) {
            console.log("用户未登录");
            return null;
        }
        let obj = new _class();
        let key = obj.key + "_user_" + userInfo.userInfo.id;
        let value = Laya.LocalStorage.getItem(key);
        if (value) {
            obj.value = JSON.parse(value);
            return obj;
        }
    }

    setUserItem(_class: LocalStorageObj) {
        if (!userInfo.isLogin) {
            console.log("用户未登录");
            return;
        }
        let key = _class.key + "_user_" + userInfo.userInfo.id;
        let value = JSON.stringify(_class.value);
        Laya.LocalStorage.setItem(key, value);
    }
}