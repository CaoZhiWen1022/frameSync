import { SendResponse } from "../../index";
import { ClientMgr } from "../../ClientMgr";
import { proto } from "../../protos/proto";
import { mySql } from "../../mySql/MySQL";
import { SQL_User, SQL_UserHero } from "../../mySql/SQL";
import { EventMgr, EventType } from "../../EventMgr";

export class BattleRoom {

    private static _roomIndex = 1;
    static get roomIndex() {
        return this._roomIndex++;
    }

    /** 房间人数 */
    public static roomPlayerCountMax = 2;

    /** 最大容忍帧差，超过后舍弃客户端操作 */
    public static MAX_FRAME_DIFF_COUNT = 10;

    private static PACKET_LOSS = 0;

    roomId: number;

    players: number[] = [];

    clientReadyCount: number = 0;

    frameInterval = 33;
    frameIndex: number = 0;

    allFrameData: proto.IframeDataGather[] = [];

    curInputFrameData: proto.frameDataGather;

    updateFrameTimeout: NodeJS.Timeout;

    constructor() {
        this.roomId = BattleRoom.roomIndex;
    }

    addPlayer(player: number) {
        this.players.push(player);
        if (this.players.length == BattleRoom.roomPlayerCountMax) {
            this.matchResp();
        }
    }

    removePlayer(player: number) {
        this.players = this.players.filter(v => v != player);
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
                this.updateFrameTimeout = setInterval(() => { this.updateFrame() }, this.frameInterval);
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

    frameDataInput(userId: number, data: proto.battleFrameDataInputReq) {
        console.log('收到帧数据,frameIndex:', this.frameIndex, data.frameIndex);

        let frameIndex = data.frameIndex;
        if (frameIndex + BattleRoom.MAX_FRAME_DIFF_COUNT < this.frameIndex) {
            return;
        }
        this.checkCurInputFrameData();
        let ls = this.curInputFrameData.frameData;
        ls.push({
            userId: userId,
            data: data.data
        });
    }

    updateFrame() {
        // console.log('更新帧数据');

        //收集的帧数据回传给客户端
        this.checkCurInputFrameData();
        let data: proto.IbattleFrameResp = {
            id: proto.MsgId.ID_BattleFrameDataUpdate,
            code: proto.RetCode.SUCCESS,
            data: this.curInputFrameData
        }
        this.players.forEach(v => {
            let ws = ClientMgr.getClient(v);
            if (ws && Math.random() > BattleRoom.PACKET_LOSS) {
                SendResponse(ws, data);
            }
        })
        this.allFrameData.push(this.curInputFrameData);
        this.frameIndex++;
        this.curInputFrameData = null;
    }

    checkCurInputFrameData() {
        if (!this.curInputFrameData) {
            this.curInputFrameData = proto.frameDataGather.create();
            this.curInputFrameData.frameIndex = this.frameIndex;
            this.curInputFrameData.frameAt = Date.now();
        }
    }

    dispose() {
        console.log('房间销毁', this.roomId);
        clearInterval(this.updateFrameTimeout);
    }
}