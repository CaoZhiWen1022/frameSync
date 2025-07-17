import { SendResponse } from "../../index";
import { ClientMgr } from "../../ClientMgr";
import { proto } from "../../protos/proto";
import { mySql } from "../../mySql/MySQL";
import { SQL_User, SQL_UserHero } from "../../mySql/SQL";

export class BattleRoom {

    private static _roomIndex = 1;
    static get roomIndex() {
        return this._roomIndex++;
    }

    public static roomPlayerCountMax = 1;

    roomId: number;

    players: number[] = [];

    clientReadyCount: number = 0;

    frameInterval = 33;
    frameIndex: number = 0;
    allFrameData: proto.IbattleServerFrameData[] = [];

    clientFrameDatas: proto.IbattleServerFrameData[] = [];

    constructor() {
        this.roomId = BattleRoom.roomIndex;
    }

    addPlayer(player: number) {
        this.players.push(player);
        if (this.players.length == BattleRoom.roomPlayerCountMax) {
            this.matchResp();
        }
    }

    /** 匹配成功 */
    async matchResp() {
        let battleUserInfos: proto.IBattleUserInfo[] = []
        let userInfos: SQL_User[] = [];
        let userHeros: SQL_UserHero[] = [];
        let ids = '';
        this.players.forEach(v => {
            ids += v + ','
        })

        ids = ids.substring(0, ids.length - 1);
        userInfos = await mySql.query<SQL_User>(`select * from users where id in (${ids})`);
        userHeros = await mySql.query<SQL_UserHero>(`select * from userHero where userId in (${ids})`);
        for (let i = 0; i < userInfos.length; i++) {
            const element = userInfos[i];
            let hero = userHeros.find(hero => hero.userId == element.id);
            battleUserInfos.push({
                userInfo: {
                    id: element.id,
                    userName: element.userName,
                    head: element.head,
                },
                useHeroId: hero.useHeroId
            })
        }
        this.players.forEach(v => {
            let ws = ClientMgr.getClient(v);
            if (ws) {
                SendResponse(ws, {
                    id: proto.MsgId.ID_Matching,
                    code: proto.RetCode.SUCCESS,
                    roomId: this.roomId,
                    users: battleUserInfos
                });
            }
        })
    }

    /** 客户端准备成功 */
    clientReady() {
        this.clientReadyCount++;
        console.log('玩家准备', this.clientReadyCount);

        if (this.clientReadyCount == this.players.length) {
            console.log('所有玩家准备完成');
            this.gameStartDowmTime();
        }
    }

    gameStartDowmTime() {
        let downTime = 3;
        let cur = 1;
        let t = 3;
        let timer = setInterval(() => {
            if (cur > downTime) {
                console.log('开始游戏');

                //开始游戏
                clearInterval(timer);
                this.players.forEach(v => {
                    let ws = ClientMgr.getClient(v);
                    if (ws) {
                        SendResponse(ws, {
                            id: proto.MsgId.ID_GameStart,
                            code: proto.RetCode.SUCCESS
                        });
                    }
                })
                setInterval(() => { this.updateFrame() }, this.frameInterval);
            } else {
                this.players.forEach(v => {
                    let ws = ClientMgr.getClient(v);
                    if (ws) {
                        SendResponse(ws, {
                            id: proto.MsgId.ID_GameStartDownTime,
                            code: proto.RetCode.SUCCESS,
                            time: t
                        });
                    }
                })

            }
            cur++;
            t--;
        }, 1000);
    }

    clientFrameData(userId: number, data: proto.battleFrameReq) {
        if (data.frameIndex != this.frameIndex - 1) {
            console.log('帧数据不匹配', data.frameIndex, this.frameIndex);
            //通知该客户端帧滞后，需要追帧
            return;
        }
        this.clientFrameDatas.push({
            userId: userId,
            data: data.data
        });
    }

    updateFrame() {
        // console.log('更新帧数据');

        //收集的帧数据回传给客户端
        let data: proto.IbattleFrameResp = {
            id: proto.MsgId.ID_BattleFrame,
            code: proto.RetCode.SUCCESS,
            frameIndex: this.frameIndex,
            data: this.clientFrameDatas
        }
        this.players.forEach(v => {
            let ws = ClientMgr.getClient(v);
            if (ws) {
                SendResponse(ws, data);
            }
        })
        this.clientFrameDatas.length = 0;
        this.frameIndex++;
    }
}