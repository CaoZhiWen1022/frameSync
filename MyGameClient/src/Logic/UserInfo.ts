import { proto } from "../protos/proto";

/** 管理当前登录用户的所有数据 */
class UserInfo {

    isLogin: boolean = false;
    userInfo: proto.IUserInfo;
    heroInfo: proto.IHeroInfo;

    onLogin(userInfo: proto.IUserInfo) {
        this.isLogin = true;
        this.userInfo = userInfo;
    }

    close() {
        this.userInfo = null;
        this.heroInfo = null;
        this.isLogin = false;
    }
}
export const userInfo = new UserInfo()