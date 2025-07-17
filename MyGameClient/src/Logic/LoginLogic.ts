import { GameEventMgr, GameEventType } from "../common/GameEventMgr";
import { GameNetMgr } from "../GameNet/GameNetMgr";
import { proto } from "../protos/proto";
import { TipPanel } from "../UI/common/TipPanel";

export class LoginLogic {

    static userInfo: proto.IUserInfo;

    public static loginReq(account: string, password: string) {
        let req = proto.LoginReq.create({
            account: account,
            password: password
        })
        GameNetMgr.instance.send(proto.MsgId.ID_UserLogin, req);
    }

    public static loginResp(res: proto.LoginResp) {
        console.log('收到登录返回', res);
        if (res.code == proto.RetCode.SUCCESS) {
            this.userInfo = res.userInfo;
            console.log('登录成功', this.userInfo);
            GameEventMgr.instance.event(GameEventType.LoginSuccess);
        }
    }

    public static registerReq(account: string, password: string, name: string) {
        let req = proto.RegisterReq.create({
            account: account,
            password: password,
            name: name
        })
        GameNetMgr.instance.send(proto.MsgId.ID_UserReqister, req);
    }

    public static registerResp(res: proto.RegisterResp) {
        console.log('收到注册返回', res);
        if (res.code == proto.RetCode.SUCCESS) {
            TipPanel.show('注册成功');
            GameEventMgr.instance.event(GameEventType.ReqisterSuccess);
        }
    }
}