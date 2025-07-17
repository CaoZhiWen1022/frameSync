import { Handler } from '../decorators/handler';
import crypto from 'crypto';
import { proto } from '../protos/proto';
import { mySql } from '../mySql/MySQL';
import { SQL_User } from '../mySql/SQL';
import { ClientMgr } from '../ClientMgr';
import { WebSocket } from 'ws';

/**
 * 认证模块
 */
export class LoginModule {


    /**
     * 处理注册请求
     */
    @Handler(proto.MsgId.ID_UserReqister)
    async reqisterRequest(ws: WebSocket, data: proto.RegisterReq): Promise<proto.IRegisterResp> {
        //检测账号是否存在
        let user = await mySql.queryOne("select * from users where account = ?", [data.account]);
        if (user) {
            return {
                id: proto.MsgId.ID_FAIL,
                code: proto.RetCode.ACCOUNTEXIST
            }
        }
        //检测用户名是否存在
        user = await mySql.queryOne("select * from users where userName = ?", [data.name]);
        if (user) {
            return {
                id: proto.MsgId.ID_FAIL,
                code: proto.RetCode.ACCOUNTNAMEEXIST
            }
        }
        //查找最大id
        let maxId = await mySql.queryOne<SQL_User>("select max(id) as id from users");
        let id = maxId.id + 1;
        let createTime = new Date();
        //插入数据
        await mySql.insert('users', { account: data.account, userName: data.name, password: data.password, id: id, createTime: createTime, head: '10001' });
        return {
            id: proto.MsgId.ID_UserReqister,
            code: proto.RetCode.SUCCESS
        }
    }

    /**
     * 处理登录请求
     */
    @Handler(proto.MsgId.ID_UserLogin)
    async handleLogin(ws: WebSocket, data: proto.LoginReq): Promise<proto.ILoginResp> {
        // let selectStr = `select * from users where account = "${data.account}" and password = "${data.password}"`
        // console.log(selectStr);

        let user = await mySql.queryOne<SQL_User>("select * from users where account = ? and password = ?", [data.account, data.password]);
        if (!user) {
            let response = {
                id: proto.MsgId.ID_FAIL,
                code: proto.RetCode.NOTACCOUNT
            }
            return response;
        }
        await this.userInit(user);
        let response = {
            id: proto.MsgId.ID_UserLogin,
            code: proto.RetCode.SUCCESS,
            userInfo: {
                id: user.id,
                userName: user.userName,
                createTime: user.createTime.getTime(),
                account: user.account,
                head: user.head
            }
        }
        ClientMgr.addClient(ws, user.id);
        return response;
    }

    /** 用户初始化 */
    async userInit(user: SQL_User) {
        let heroInfo = await mySql.queryOne("select * from userHero where userId = ?", [user.id]);
        if (!heroInfo) {
            await mySql.insert('userHero', { userId: user.id, useHeroId: '1001' });
        }
        let userInfo = await mySql.queryOne<SQL_User>("select * from users where id = ?", [user.id]);
        if (userInfo) {
            if (!userInfo.head) {
                await mySql.update('users', { head: '10001' }, { id: user.id });
                user.head = '10001';
            }
        }
    }
}
