import { WebSocket } from 'ws';
import { EventMgr, EventType } from './EventMgr';
export class ClientMgr {
    public static clients: Map<WebSocket, number> = new Map();

    static getUserId(ws: WebSocket): number | null {
        return this.clients.get(ws);
    }

    static getClient(userId: number): WebSocket | null {
        for (const [ws, id] of this.clients) {
            if (id === userId) {
                return ws;
            }
        }
        return null;
    }

    static addClient(ws: WebSocket, userId: number) {
        this.clients.set(ws, userId);
    }

    static removeClient(ws: WebSocket) {
        let userId = this.clients.get(ws);
        if (userId) EventMgr.ins.event(EventType.ClientOffline, userId);
        this.clients.delete(ws);
    }
}