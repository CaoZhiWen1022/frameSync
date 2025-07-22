import { EventMgr, EventType } from "../../EventMgr";
import { ClientMgr } from "../../ClientMgr";
import { Handler } from "../../decorators/handler";
import { proto } from "../../protos/proto";
import { BattleRoom } from "./BattleRoom";
import { WebSocket } from "ws";

export class Battle {

    rooms: Map<number, BattleRoom> = new Map<number, BattleRoom>();

    constructor() {
        EventMgr.ins.on(EventType.ClientOffline, this, this.clientOffline);
    }

    @Handler(proto.MsgId.ID_Matching)
    public mathchingHandler(ws: WebSocket, data: proto.mathchingReq) {
        let room: BattleRoom;
        this.rooms.forEach((value, key) => {
            if (value.players.length < BattleRoom.roomPlayerCountMax) {
                room = value;
                return;
            }
        });
        if (!room) {
            room = new BattleRoom();
            this.rooms.set(room.roomId, room);
        }
        room.addPlayer(ClientMgr.getUserId(ws));
    }

    @Handler(proto.MsgId.ID_ClientReady)
    clientReadyHandler(ws: WebSocket, data: proto.clientReadyReq) {
        let room = this.rooms.get(data.roomId);
        if (room) {
            room.clientReady();
        }
    }

    @Handler(proto.MsgId.ID_BattleFrameDataInput)
    battleFrameDataInputHandler(ws: WebSocket, data: proto.battleFrameDataInputReq) {
        let userId = ClientMgr.getUserId(ws);
        let roomId = this.getRoomIdByUserId(userId);
        if (!roomId) return;
        let room = this.rooms.get(roomId);
        if (room) {
            room.frameDataInput(userId, data);
        }
    }

    @Handler(proto.MsgId.ID_GET_BattleFrameData)
    getBattleFrameDataHandler(ws: WebSocket, data: proto.getBattleFrameDataReq) {
        let userId = ClientMgr.getUserId(ws);
        let roomId = this.getRoomIdByUserId(userId);
        if (!roomId) return;
        let room = this.rooms.get(roomId);
        if (room) {
            let allFrameData = room.allFrameData;
            let frameDataList: proto.IframeDataGather[] = [];
            for (let i = 0; i < allFrameData.length; i++) {
                const element = allFrameData[i];
                if (element.frameIndex > data.frameIndex) {
                    frameDataList.push(element);
                }
            }
            let resp: proto.IgetBattleFrameDataResp = {
                id: proto.MsgId.ID_GET_BattleFrameData,
                code: proto.RetCode.SUCCESS,
                data: frameDataList,
            }
            return resp;
        }
    }

    getRoomIdByUserId(userId: number) {
        for (const [roomId, room] of this.rooms) {
            if (room.players.includes(userId)) {
                return roomId;
            }
        }
        return null;
    }

    clientOffline(userId: number) {
        let roomId = this.getRoomIdByUserId(userId);
        if (!roomId) return;
        let room = this.rooms.get(roomId);
        if (room) {
            room.removePlayer(userId);
            if (room.players.length == 0) {
                this.rooms.delete(roomId);
                room.dispose();
            }
        }
    }
}