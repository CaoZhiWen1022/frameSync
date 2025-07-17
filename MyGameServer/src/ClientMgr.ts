import { WebSocket } from 'ws';
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
        this.clients.delete(ws);
    }
}