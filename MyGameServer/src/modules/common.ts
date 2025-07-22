import { proto } from "../protos/proto";
import { Handler } from "../decorators/handler";

export class Common {

    @Handler(proto.MsgId.ID_Heartbeat)
    private heartbeat() {
        return {
            id: proto.MsgId.ID_Heartbeat,
            code: proto.RetCode.SUCCESS
        }
    }

}