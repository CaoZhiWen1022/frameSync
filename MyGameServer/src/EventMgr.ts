export class EventMgr {

    private static _ins: EventMgr;
    public static get ins(): EventMgr {
        if (!EventMgr._ins) {
            EventMgr._ins = new EventMgr();
        }
        return EventMgr._ins;
    }

    _events: Map<string, { caller: any, listener: Function, isOnce?: boolean }[]> = new Map();


    on(event: string, caller: any, listener: Function) {
        if (!this._events.has(event)) {
            this._events.set(event, []);
        }
        let ls = this._events.get(event);
        ls.push({ caller, listener });
    }

    off(event: string, caller: any, listener: Function) {
        if (this._events.has(event)) {
            let ls = this._events.get(event);
            for (let i = 0; i < ls.length; i++) {
                if (ls[i].caller == caller && ls[i].listener == listener) {
                    ls.splice(i, 1);
                    break;
                }
            }
        }
    }

    event(event: string, ...args: any[]) {
        if (this._events.has(event)) {
            let ls = this._events.get(event);
            for (let i = 0; i < ls.length; i++) {
                ls[i].listener.apply(ls[i].caller, args);
            }
        }
    }
}

export enum EventType {
    ClientOnline = 'ClientOnline',
    ClientOffline = 'ClientOffline',
}