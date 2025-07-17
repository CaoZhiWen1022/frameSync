import { ClientMgr } from "../../ClientMgr";
import { Handler } from "../../decorators/handler";
import { proto } from "../../protos/proto";
import { BattleRoom } from "./BattleRoom";
import { WebSocket } from "ws";

export class Battle {

    rooms: Map<number, BattleRoom> = new Map<number, BattleRoom>();

    @Handler(proto.MsgId.ID_Matching)
    public mathchingReq(ws: WebSocket, data: proto.mathchingReq) {
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
    clientReadyReq(ws: WebSocket, data: proto.clientReadyReq) {
        let room = this.rooms.get(data.roomId);
        if (room) {
            room.clientReady();
        }
    }

    @Handler(proto.MsgId.ID_BattleFrame)
    battleFrameReq(ws: WebSocket, data: proto.battleFrameReq) {
        let userId = ClientMgr.getUserId(ws);
        let roomId = this.getRoomIdByUserId(userId);
        if (!roomId) return;
        let room = this.rooms.get(roomId);
        if (room) {
            room.clientFrameData(userId, data);
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
}