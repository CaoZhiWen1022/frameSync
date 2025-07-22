import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace proto. */
export namespace proto {

    /** Properties of a BattleUserInfo. */
    interface IBattleUserInfo {

        /** BattleUserInfo userInfo */
        userInfo?: (proto.IUserInfo|null);

        /** BattleUserInfo useHeroId */
        useHeroId?: (string|null);
    }

    /** Represents a BattleUserInfo. */
    class BattleUserInfo implements IBattleUserInfo {

        /**
         * Constructs a new BattleUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IBattleUserInfo);

        /** BattleUserInfo userInfo. */
        public userInfo?: (proto.IUserInfo|null);

        /** BattleUserInfo useHeroId. */
        public useHeroId: string;

        /**
         * Creates a new BattleUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleUserInfo instance
         */
        public static create(properties?: proto.IBattleUserInfo): proto.BattleUserInfo;

        /**
         * Encodes the specified BattleUserInfo message. Does not implicitly {@link proto.BattleUserInfo.verify|verify} messages.
         * @param message BattleUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IBattleUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleUserInfo message, length delimited. Does not implicitly {@link proto.BattleUserInfo.verify|verify} messages.
         * @param message BattleUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IBattleUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.BattleUserInfo;

        /**
         * Decodes a BattleUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.BattleUserInfo;

        /**
         * Verifies a BattleUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleUserInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.BattleUserInfo;

        /**
         * Creates a plain object from a BattleUserInfo message. Also converts values to other types if specified.
         * @param message BattleUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.BattleUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleUserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BattleUserInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a mathchingReq. */
    interface ImathchingReq {
    }

    /** Represents a mathchingReq. */
    class mathchingReq implements ImathchingReq {

        /**
         * Constructs a new mathchingReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ImathchingReq);

        /**
         * Creates a new mathchingReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns mathchingReq instance
         */
        public static create(properties?: proto.ImathchingReq): proto.mathchingReq;

        /**
         * Encodes the specified mathchingReq message. Does not implicitly {@link proto.mathchingReq.verify|verify} messages.
         * @param message mathchingReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ImathchingReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified mathchingReq message, length delimited. Does not implicitly {@link proto.mathchingReq.verify|verify} messages.
         * @param message mathchingReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ImathchingReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a mathchingReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns mathchingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.mathchingReq;

        /**
         * Decodes a mathchingReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns mathchingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.mathchingReq;

        /**
         * Verifies a mathchingReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a mathchingReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns mathchingReq
         */
        public static fromObject(object: { [k: string]: any }): proto.mathchingReq;

        /**
         * Creates a plain object from a mathchingReq message. Also converts values to other types if specified.
         * @param message mathchingReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.mathchingReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this mathchingReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for mathchingReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a matchingResp. */
    interface ImatchingResp {

        /** matchingResp code */
        code?: (proto.RetCode|null);

        /** matchingResp id */
        id?: (proto.MsgId|null);

        /** matchingResp roomId */
        roomId?: (number|Long|null);

        /** matchingResp users */
        users?: (proto.IBattleUserInfo[]|null);
    }

    /** Represents a matchingResp. */
    class matchingResp implements ImatchingResp {

        /**
         * Constructs a new matchingResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ImatchingResp);

        /** matchingResp code. */
        public code: proto.RetCode;

        /** matchingResp id. */
        public id: proto.MsgId;

        /** matchingResp roomId. */
        public roomId: (number|Long);

        /** matchingResp users. */
        public users: proto.IBattleUserInfo[];

        /**
         * Creates a new matchingResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns matchingResp instance
         */
        public static create(properties?: proto.ImatchingResp): proto.matchingResp;

        /**
         * Encodes the specified matchingResp message. Does not implicitly {@link proto.matchingResp.verify|verify} messages.
         * @param message matchingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ImatchingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified matchingResp message, length delimited. Does not implicitly {@link proto.matchingResp.verify|verify} messages.
         * @param message matchingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ImatchingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a matchingResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns matchingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.matchingResp;

        /**
         * Decodes a matchingResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns matchingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.matchingResp;

        /**
         * Verifies a matchingResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a matchingResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns matchingResp
         */
        public static fromObject(object: { [k: string]: any }): proto.matchingResp;

        /**
         * Creates a plain object from a matchingResp message. Also converts values to other types if specified.
         * @param message matchingResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.matchingResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this matchingResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for matchingResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a clientReadyReq. */
    interface IclientReadyReq {

        /** clientReadyReq roomId */
        roomId?: (number|null);
    }

    /** Represents a clientReadyReq. */
    class clientReadyReq implements IclientReadyReq {

        /**
         * Constructs a new clientReadyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IclientReadyReq);

        /** clientReadyReq roomId. */
        public roomId: number;

        /**
         * Creates a new clientReadyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns clientReadyReq instance
         */
        public static create(properties?: proto.IclientReadyReq): proto.clientReadyReq;

        /**
         * Encodes the specified clientReadyReq message. Does not implicitly {@link proto.clientReadyReq.verify|verify} messages.
         * @param message clientReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IclientReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified clientReadyReq message, length delimited. Does not implicitly {@link proto.clientReadyReq.verify|verify} messages.
         * @param message clientReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IclientReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a clientReadyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns clientReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.clientReadyReq;

        /**
         * Decodes a clientReadyReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns clientReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.clientReadyReq;

        /**
         * Verifies a clientReadyReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a clientReadyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns clientReadyReq
         */
        public static fromObject(object: { [k: string]: any }): proto.clientReadyReq;

        /**
         * Creates a plain object from a clientReadyReq message. Also converts values to other types if specified.
         * @param message clientReadyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.clientReadyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this clientReadyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for clientReadyReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a gameStartDownTimeResp. */
    interface IgameStartDownTimeResp {

        /** gameStartDownTimeResp code */
        code?: (proto.RetCode|null);

        /** gameStartDownTimeResp id */
        id?: (proto.MsgId|null);

        /** gameStartDownTimeResp time */
        time?: (number|null);
    }

    /** Represents a gameStartDownTimeResp. */
    class gameStartDownTimeResp implements IgameStartDownTimeResp {

        /**
         * Constructs a new gameStartDownTimeResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IgameStartDownTimeResp);

        /** gameStartDownTimeResp code. */
        public code: proto.RetCode;

        /** gameStartDownTimeResp id. */
        public id: proto.MsgId;

        /** gameStartDownTimeResp time. */
        public time: number;

        /**
         * Creates a new gameStartDownTimeResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns gameStartDownTimeResp instance
         */
        public static create(properties?: proto.IgameStartDownTimeResp): proto.gameStartDownTimeResp;

        /**
         * Encodes the specified gameStartDownTimeResp message. Does not implicitly {@link proto.gameStartDownTimeResp.verify|verify} messages.
         * @param message gameStartDownTimeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IgameStartDownTimeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified gameStartDownTimeResp message, length delimited. Does not implicitly {@link proto.gameStartDownTimeResp.verify|verify} messages.
         * @param message gameStartDownTimeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IgameStartDownTimeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a gameStartDownTimeResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns gameStartDownTimeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.gameStartDownTimeResp;

        /**
         * Decodes a gameStartDownTimeResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns gameStartDownTimeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.gameStartDownTimeResp;

        /**
         * Verifies a gameStartDownTimeResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a gameStartDownTimeResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns gameStartDownTimeResp
         */
        public static fromObject(object: { [k: string]: any }): proto.gameStartDownTimeResp;

        /**
         * Creates a plain object from a gameStartDownTimeResp message. Also converts values to other types if specified.
         * @param message gameStartDownTimeResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.gameStartDownTimeResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this gameStartDownTimeResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for gameStartDownTimeResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a gameSatrtResp. */
    interface IgameSatrtResp {

        /** gameSatrtResp code */
        code?: (proto.RetCode|null);

        /** gameSatrtResp id */
        id?: (proto.MsgId|null);
    }

    /** Represents a gameSatrtResp. */
    class gameSatrtResp implements IgameSatrtResp {

        /**
         * Constructs a new gameSatrtResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IgameSatrtResp);

        /** gameSatrtResp code. */
        public code: proto.RetCode;

        /** gameSatrtResp id. */
        public id: proto.MsgId;

        /**
         * Creates a new gameSatrtResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns gameSatrtResp instance
         */
        public static create(properties?: proto.IgameSatrtResp): proto.gameSatrtResp;

        /**
         * Encodes the specified gameSatrtResp message. Does not implicitly {@link proto.gameSatrtResp.verify|verify} messages.
         * @param message gameSatrtResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IgameSatrtResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified gameSatrtResp message, length delimited. Does not implicitly {@link proto.gameSatrtResp.verify|verify} messages.
         * @param message gameSatrtResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IgameSatrtResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a gameSatrtResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns gameSatrtResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.gameSatrtResp;

        /**
         * Decodes a gameSatrtResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns gameSatrtResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.gameSatrtResp;

        /**
         * Verifies a gameSatrtResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a gameSatrtResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns gameSatrtResp
         */
        public static fromObject(object: { [k: string]: any }): proto.gameSatrtResp;

        /**
         * Creates a plain object from a gameSatrtResp message. Also converts values to other types if specified.
         * @param message gameSatrtResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.gameSatrtResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this gameSatrtResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for gameSatrtResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a v2. */
    interface Iv2 {

        /** v2 x */
        x?: (number|null);

        /** v2 y */
        y?: (number|null);
    }

    /** Represents a v2. */
    class v2 implements Iv2 {

        /**
         * Constructs a new v2.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.Iv2);

        /** v2 x. */
        public x: number;

        /** v2 y. */
        public y: number;

        /**
         * Creates a new v2 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns v2 instance
         */
        public static create(properties?: proto.Iv2): proto.v2;

        /**
         * Encodes the specified v2 message. Does not implicitly {@link proto.v2.verify|verify} messages.
         * @param message v2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.Iv2, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified v2 message, length delimited. Does not implicitly {@link proto.v2.verify|verify} messages.
         * @param message v2 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.Iv2, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a v2 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns v2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.v2;

        /**
         * Decodes a v2 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns v2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.v2;

        /**
         * Verifies a v2 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a v2 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns v2
         */
        public static fromObject(object: { [k: string]: any }): proto.v2;

        /**
         * Creates a plain object from a v2 message. Also converts values to other types if specified.
         * @param message v2
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.v2, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this v2 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for v2
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a battleMoveData. */
    interface IbattleMoveData {

        /** battleMoveData target */
        target?: (proto.Iv2|null);
    }

    /** Represents a battleMoveData. */
    class battleMoveData implements IbattleMoveData {

        /**
         * Constructs a new battleMoveData.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IbattleMoveData);

        /** battleMoveData target. */
        public target?: (proto.Iv2|null);

        /**
         * Creates a new battleMoveData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns battleMoveData instance
         */
        public static create(properties?: proto.IbattleMoveData): proto.battleMoveData;

        /**
         * Encodes the specified battleMoveData message. Does not implicitly {@link proto.battleMoveData.verify|verify} messages.
         * @param message battleMoveData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IbattleMoveData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified battleMoveData message, length delimited. Does not implicitly {@link proto.battleMoveData.verify|verify} messages.
         * @param message battleMoveData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IbattleMoveData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a battleMoveData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns battleMoveData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.battleMoveData;

        /**
         * Decodes a battleMoveData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns battleMoveData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.battleMoveData;

        /**
         * Verifies a battleMoveData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a battleMoveData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns battleMoveData
         */
        public static fromObject(object: { [k: string]: any }): proto.battleMoveData;

        /**
         * Creates a plain object from a battleMoveData message. Also converts values to other types if specified.
         * @param message battleMoveData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.battleMoveData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this battleMoveData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for battleMoveData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a frameData. */
    interface IframeData {

        /** frameData op */
        op?: (number|null);

        /** frameData moveData */
        moveData?: (proto.IbattleMoveData|null);
    }

    /** Represents a frameData. */
    class frameData implements IframeData {

        /**
         * Constructs a new frameData.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IframeData);

        /** frameData op. */
        public op: number;

        /** frameData moveData. */
        public moveData?: (proto.IbattleMoveData|null);

        /**
         * Creates a new frameData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns frameData instance
         */
        public static create(properties?: proto.IframeData): proto.frameData;

        /**
         * Encodes the specified frameData message. Does not implicitly {@link proto.frameData.verify|verify} messages.
         * @param message frameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IframeData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified frameData message, length delimited. Does not implicitly {@link proto.frameData.verify|verify} messages.
         * @param message frameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IframeData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a frameData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns frameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.frameData;

        /**
         * Decodes a frameData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns frameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.frameData;

        /**
         * Verifies a frameData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a frameData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns frameData
         */
        public static fromObject(object: { [k: string]: any }): proto.frameData;

        /**
         * Creates a plain object from a frameData message. Also converts values to other types if specified.
         * @param message frameData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.frameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this frameData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for frameData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a userFrameData. */
    interface IuserFrameData {

        /** userFrameData userId */
        userId?: (number|null);

        /** userFrameData data */
        data?: (proto.IframeData|null);
    }

    /** Represents a userFrameData. */
    class userFrameData implements IuserFrameData {

        /**
         * Constructs a new userFrameData.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IuserFrameData);

        /** userFrameData userId. */
        public userId: number;

        /** userFrameData data. */
        public data?: (proto.IframeData|null);

        /**
         * Creates a new userFrameData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns userFrameData instance
         */
        public static create(properties?: proto.IuserFrameData): proto.userFrameData;

        /**
         * Encodes the specified userFrameData message. Does not implicitly {@link proto.userFrameData.verify|verify} messages.
         * @param message userFrameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IuserFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified userFrameData message, length delimited. Does not implicitly {@link proto.userFrameData.verify|verify} messages.
         * @param message userFrameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IuserFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a userFrameData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns userFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.userFrameData;

        /**
         * Decodes a userFrameData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns userFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.userFrameData;

        /**
         * Verifies a userFrameData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a userFrameData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns userFrameData
         */
        public static fromObject(object: { [k: string]: any }): proto.userFrameData;

        /**
         * Creates a plain object from a userFrameData message. Also converts values to other types if specified.
         * @param message userFrameData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.userFrameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this userFrameData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for userFrameData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a frameDataGather. */
    interface IframeDataGather {

        /** frameDataGather frameIndex */
        frameIndex?: (number|null);

        /** frameDataGather frameAt */
        frameAt?: (number|Long|null);

        /** frameDataGather frameData */
        frameData?: (proto.IuserFrameData[]|null);
    }

    /** Represents a frameDataGather. */
    class frameDataGather implements IframeDataGather {

        /**
         * Constructs a new frameDataGather.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IframeDataGather);

        /** frameDataGather frameIndex. */
        public frameIndex: number;

        /** frameDataGather frameAt. */
        public frameAt: (number|Long);

        /** frameDataGather frameData. */
        public frameData: proto.IuserFrameData[];

        /**
         * Creates a new frameDataGather instance using the specified properties.
         * @param [properties] Properties to set
         * @returns frameDataGather instance
         */
        public static create(properties?: proto.IframeDataGather): proto.frameDataGather;

        /**
         * Encodes the specified frameDataGather message. Does not implicitly {@link proto.frameDataGather.verify|verify} messages.
         * @param message frameDataGather message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IframeDataGather, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified frameDataGather message, length delimited. Does not implicitly {@link proto.frameDataGather.verify|verify} messages.
         * @param message frameDataGather message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IframeDataGather, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a frameDataGather message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns frameDataGather
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.frameDataGather;

        /**
         * Decodes a frameDataGather message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns frameDataGather
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.frameDataGather;

        /**
         * Verifies a frameDataGather message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a frameDataGather message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns frameDataGather
         */
        public static fromObject(object: { [k: string]: any }): proto.frameDataGather;

        /**
         * Creates a plain object from a frameDataGather message. Also converts values to other types if specified.
         * @param message frameDataGather
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.frameDataGather, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this frameDataGather to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for frameDataGather
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a battleFrameDataInputReq. */
    interface IbattleFrameDataInputReq {

        /** battleFrameDataInputReq frameIndex */
        frameIndex?: (number|null);

        /** battleFrameDataInputReq data */
        data?: (proto.IframeData|null);
    }

    /** Represents a battleFrameDataInputReq. */
    class battleFrameDataInputReq implements IbattleFrameDataInputReq {

        /**
         * Constructs a new battleFrameDataInputReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IbattleFrameDataInputReq);

        /** battleFrameDataInputReq frameIndex. */
        public frameIndex: number;

        /** battleFrameDataInputReq data. */
        public data?: (proto.IframeData|null);

        /**
         * Creates a new battleFrameDataInputReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns battleFrameDataInputReq instance
         */
        public static create(properties?: proto.IbattleFrameDataInputReq): proto.battleFrameDataInputReq;

        /**
         * Encodes the specified battleFrameDataInputReq message. Does not implicitly {@link proto.battleFrameDataInputReq.verify|verify} messages.
         * @param message battleFrameDataInputReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IbattleFrameDataInputReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified battleFrameDataInputReq message, length delimited. Does not implicitly {@link proto.battleFrameDataInputReq.verify|verify} messages.
         * @param message battleFrameDataInputReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IbattleFrameDataInputReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a battleFrameDataInputReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns battleFrameDataInputReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.battleFrameDataInputReq;

        /**
         * Decodes a battleFrameDataInputReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns battleFrameDataInputReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.battleFrameDataInputReq;

        /**
         * Verifies a battleFrameDataInputReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a battleFrameDataInputReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns battleFrameDataInputReq
         */
        public static fromObject(object: { [k: string]: any }): proto.battleFrameDataInputReq;

        /**
         * Creates a plain object from a battleFrameDataInputReq message. Also converts values to other types if specified.
         * @param message battleFrameDataInputReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.battleFrameDataInputReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this battleFrameDataInputReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for battleFrameDataInputReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a battleFrameResp. */
    interface IbattleFrameResp {

        /** battleFrameResp code */
        code?: (proto.RetCode|null);

        /** battleFrameResp id */
        id?: (proto.MsgId|null);

        /** battleFrameResp data */
        data?: (proto.IframeDataGather|null);
    }

    /** Represents a battleFrameResp. */
    class battleFrameResp implements IbattleFrameResp {

        /**
         * Constructs a new battleFrameResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IbattleFrameResp);

        /** battleFrameResp code. */
        public code: proto.RetCode;

        /** battleFrameResp id. */
        public id: proto.MsgId;

        /** battleFrameResp data. */
        public data?: (proto.IframeDataGather|null);

        /**
         * Creates a new battleFrameResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns battleFrameResp instance
         */
        public static create(properties?: proto.IbattleFrameResp): proto.battleFrameResp;

        /**
         * Encodes the specified battleFrameResp message. Does not implicitly {@link proto.battleFrameResp.verify|verify} messages.
         * @param message battleFrameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IbattleFrameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified battleFrameResp message, length delimited. Does not implicitly {@link proto.battleFrameResp.verify|verify} messages.
         * @param message battleFrameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IbattleFrameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a battleFrameResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns battleFrameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.battleFrameResp;

        /**
         * Decodes a battleFrameResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns battleFrameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.battleFrameResp;

        /**
         * Verifies a battleFrameResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a battleFrameResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns battleFrameResp
         */
        public static fromObject(object: { [k: string]: any }): proto.battleFrameResp;

        /**
         * Creates a plain object from a battleFrameResp message. Also converts values to other types if specified.
         * @param message battleFrameResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.battleFrameResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this battleFrameResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for battleFrameResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a getBattleFrameDataReq. */
    interface IgetBattleFrameDataReq {

        /** getBattleFrameDataReq frameIndex */
        frameIndex?: (number|null);
    }

    /** Represents a getBattleFrameDataReq. */
    class getBattleFrameDataReq implements IgetBattleFrameDataReq {

        /**
         * Constructs a new getBattleFrameDataReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IgetBattleFrameDataReq);

        /** getBattleFrameDataReq frameIndex. */
        public frameIndex: number;

        /**
         * Creates a new getBattleFrameDataReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns getBattleFrameDataReq instance
         */
        public static create(properties?: proto.IgetBattleFrameDataReq): proto.getBattleFrameDataReq;

        /**
         * Encodes the specified getBattleFrameDataReq message. Does not implicitly {@link proto.getBattleFrameDataReq.verify|verify} messages.
         * @param message getBattleFrameDataReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IgetBattleFrameDataReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified getBattleFrameDataReq message, length delimited. Does not implicitly {@link proto.getBattleFrameDataReq.verify|verify} messages.
         * @param message getBattleFrameDataReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IgetBattleFrameDataReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a getBattleFrameDataReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns getBattleFrameDataReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.getBattleFrameDataReq;

        /**
         * Decodes a getBattleFrameDataReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns getBattleFrameDataReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.getBattleFrameDataReq;

        /**
         * Verifies a getBattleFrameDataReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a getBattleFrameDataReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns getBattleFrameDataReq
         */
        public static fromObject(object: { [k: string]: any }): proto.getBattleFrameDataReq;

        /**
         * Creates a plain object from a getBattleFrameDataReq message. Also converts values to other types if specified.
         * @param message getBattleFrameDataReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.getBattleFrameDataReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this getBattleFrameDataReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for getBattleFrameDataReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a getBattleFrameDataResp. */
    interface IgetBattleFrameDataResp {

        /** getBattleFrameDataResp code */
        code?: (proto.RetCode|null);

        /** getBattleFrameDataResp id */
        id?: (proto.MsgId|null);

        /** getBattleFrameDataResp data */
        data?: (proto.IframeDataGather[]|null);
    }

    /** Represents a getBattleFrameDataResp. */
    class getBattleFrameDataResp implements IgetBattleFrameDataResp {

        /**
         * Constructs a new getBattleFrameDataResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IgetBattleFrameDataResp);

        /** getBattleFrameDataResp code. */
        public code: proto.RetCode;

        /** getBattleFrameDataResp id. */
        public id: proto.MsgId;

        /** getBattleFrameDataResp data. */
        public data: proto.IframeDataGather[];

        /**
         * Creates a new getBattleFrameDataResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns getBattleFrameDataResp instance
         */
        public static create(properties?: proto.IgetBattleFrameDataResp): proto.getBattleFrameDataResp;

        /**
         * Encodes the specified getBattleFrameDataResp message. Does not implicitly {@link proto.getBattleFrameDataResp.verify|verify} messages.
         * @param message getBattleFrameDataResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IgetBattleFrameDataResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified getBattleFrameDataResp message, length delimited. Does not implicitly {@link proto.getBattleFrameDataResp.verify|verify} messages.
         * @param message getBattleFrameDataResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IgetBattleFrameDataResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a getBattleFrameDataResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns getBattleFrameDataResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.getBattleFrameDataResp;

        /**
         * Decodes a getBattleFrameDataResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns getBattleFrameDataResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.getBattleFrameDataResp;

        /**
         * Verifies a getBattleFrameDataResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a getBattleFrameDataResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns getBattleFrameDataResp
         */
        public static fromObject(object: { [k: string]: any }): proto.getBattleFrameDataResp;

        /**
         * Creates a plain object from a getBattleFrameDataResp message. Also converts values to other types if specified.
         * @param message getBattleFrameDataResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.getBattleFrameDataResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this getBattleFrameDataResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for getBattleFrameDataResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** RetCode enum. */
    enum RetCode {
        SUCCESS = 0,
        FAIL = -1,
        NOTACCOUNT = -2,
        ACCOUNTEXIST = -3,
        ACCOUNTNAMEEXIST = -4
    }

    /** MsgId enum. */
    enum MsgId {
        ID_FAIL = 0,
        ID_UserReqister = 1,
        ID_UserLogin = 2,
        ID_HeroInfo = 3,
        ID_HeroSwitch = 4,
        ID_UserHeadChange = 5,
        ID_Matching = 6,
        ID_ClientReady = 7,
        ID_GameStartDownTime = 8,
        ID_GameStart = 9,
        ID_BattleFrameDataInput = 10,
        ID_BattleFrameDataUpdate = 11,
        ID_GET_BattleFrameData = 12,
        ID_Heartbeat = 13
    }

    /** battleOpType enum. */
    enum battleOpType {
        move = 0
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo id */
        id?: (number|null);

        /** UserInfo userName */
        userName?: (string|null);

        /** UserInfo createTime */
        createTime?: (number|null);

        /** UserInfo account */
        account?: (string|null);

        /** UserInfo head */
        head?: (string|null);

        /** UserInfo password */
        password?: (string|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IUserInfo);

        /** UserInfo id. */
        public id: number;

        /** UserInfo userName. */
        public userName: string;

        /** UserInfo createTime. */
        public createTime: number;

        /** UserInfo account. */
        public account: string;

        /** UserInfo head. */
        public head: string;

        /** UserInfo password. */
        public password: string;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: proto.IUserInfo): proto.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link proto.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link proto.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CommonResp. */
    interface ICommonResp {

        /** CommonResp code */
        code?: (proto.RetCode|null);
    }

    /** Represents a CommonResp. */
    class CommonResp implements ICommonResp {

        /**
         * Constructs a new CommonResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICommonResp);

        /** CommonResp code. */
        public code: proto.RetCode;

        /**
         * Creates a new CommonResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommonResp instance
         */
        public static create(properties?: proto.ICommonResp): proto.CommonResp;

        /**
         * Encodes the specified CommonResp message. Does not implicitly {@link proto.CommonResp.verify|verify} messages.
         * @param message CommonResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICommonResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommonResp message, length delimited. Does not implicitly {@link proto.CommonResp.verify|verify} messages.
         * @param message CommonResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICommonResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommonResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CommonResp;

        /**
         * Decodes a CommonResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommonResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CommonResp;

        /**
         * Verifies a CommonResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonResp
         */
        public static fromObject(object: { [k: string]: any }): proto.CommonResp;

        /**
         * Creates a plain object from a CommonResp message. Also converts values to other types if specified.
         * @param message CommonResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CommonResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommonResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CommonResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CommonReq. */
    interface ICommonReq {
    }

    /** Represents a CommonReq. */
    class CommonReq implements ICommonReq {

        /**
         * Constructs a new CommonReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICommonReq);

        /**
         * Creates a new CommonReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommonReq instance
         */
        public static create(properties?: proto.ICommonReq): proto.CommonReq;

        /**
         * Encodes the specified CommonReq message. Does not implicitly {@link proto.CommonReq.verify|verify} messages.
         * @param message CommonReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICommonReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommonReq message, length delimited. Does not implicitly {@link proto.CommonReq.verify|verify} messages.
         * @param message CommonReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICommonReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommonReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CommonReq;

        /**
         * Decodes a CommonReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommonReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CommonReq;

        /**
         * Verifies a CommonReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonReq
         */
        public static fromObject(object: { [k: string]: any }): proto.CommonReq;

        /**
         * Creates a plain object from a CommonReq message. Also converts values to other types if specified.
         * @param message CommonReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CommonReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommonReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CommonReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CommonFailResp. */
    interface ICommonFailResp {

        /** CommonFailResp id */
        id?: (proto.MsgId|null);

        /** CommonFailResp code */
        code?: (proto.RetCode|null);

        /** CommonFailResp message */
        message?: (string|null);
    }

    /** Represents a CommonFailResp. */
    class CommonFailResp implements ICommonFailResp {

        /**
         * Constructs a new CommonFailResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICommonFailResp);

        /** CommonFailResp id. */
        public id: proto.MsgId;

        /** CommonFailResp code. */
        public code: proto.RetCode;

        /** CommonFailResp message. */
        public message: string;

        /**
         * Creates a new CommonFailResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommonFailResp instance
         */
        public static create(properties?: proto.ICommonFailResp): proto.CommonFailResp;

        /**
         * Encodes the specified CommonFailResp message. Does not implicitly {@link proto.CommonFailResp.verify|verify} messages.
         * @param message CommonFailResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICommonFailResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommonFailResp message, length delimited. Does not implicitly {@link proto.CommonFailResp.verify|verify} messages.
         * @param message CommonFailResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICommonFailResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonFailResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommonFailResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CommonFailResp;

        /**
         * Decodes a CommonFailResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommonFailResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CommonFailResp;

        /**
         * Verifies a CommonFailResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonFailResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonFailResp
         */
        public static fromObject(object: { [k: string]: any }): proto.CommonFailResp;

        /**
         * Creates a plain object from a CommonFailResp message. Also converts values to other types if specified.
         * @param message CommonFailResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CommonFailResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommonFailResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CommonFailResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeartbeatReq. */
    interface IHeartbeatReq {
    }

    /** Represents a HeartbeatReq. */
    class HeartbeatReq implements IHeartbeatReq {

        /**
         * Constructs a new HeartbeatReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHeartbeatReq);

        /**
         * Creates a new HeartbeatReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatReq instance
         */
        public static create(properties?: proto.IHeartbeatReq): proto.HeartbeatReq;

        /**
         * Encodes the specified HeartbeatReq message. Does not implicitly {@link proto.HeartbeatReq.verify|verify} messages.
         * @param message HeartbeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHeartbeatReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatReq message, length delimited. Does not implicitly {@link proto.HeartbeatReq.verify|verify} messages.
         * @param message HeartbeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHeartbeatReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartbeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HeartbeatReq;

        /**
         * Decodes a HeartbeatReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartbeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HeartbeatReq;

        /**
         * Verifies a HeartbeatReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatReq
         */
        public static fromObject(object: { [k: string]: any }): proto.HeartbeatReq;

        /**
         * Creates a plain object from a HeartbeatReq message. Also converts values to other types if specified.
         * @param message HeartbeatReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HeartbeatReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeartbeatReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeartbeatResp. */
    interface IHeartbeatResp {

        /** HeartbeatResp code */
        code?: (proto.RetCode|null);

        /** HeartbeatResp id */
        id?: (proto.MsgId|null);
    }

    /** Represents a HeartbeatResp. */
    class HeartbeatResp implements IHeartbeatResp {

        /**
         * Constructs a new HeartbeatResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHeartbeatResp);

        /** HeartbeatResp code. */
        public code: proto.RetCode;

        /** HeartbeatResp id. */
        public id: proto.MsgId;

        /**
         * Creates a new HeartbeatResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatResp instance
         */
        public static create(properties?: proto.IHeartbeatResp): proto.HeartbeatResp;

        /**
         * Encodes the specified HeartbeatResp message. Does not implicitly {@link proto.HeartbeatResp.verify|verify} messages.
         * @param message HeartbeatResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHeartbeatResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatResp message, length delimited. Does not implicitly {@link proto.HeartbeatResp.verify|verify} messages.
         * @param message HeartbeatResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHeartbeatResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartbeatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HeartbeatResp;

        /**
         * Decodes a HeartbeatResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartbeatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HeartbeatResp;

        /**
         * Verifies a HeartbeatResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatResp
         */
        public static fromObject(object: { [k: string]: any }): proto.HeartbeatResp;

        /**
         * Creates a plain object from a HeartbeatResp message. Also converts values to other types if specified.
         * @param message HeartbeatResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HeartbeatResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeartbeatResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroInfo. */
    interface IHeroInfo {

        /** HeroInfo heroId */
        heroId?: (string|null);
    }

    /** Represents a HeroInfo. */
    class HeroInfo implements IHeroInfo {

        /**
         * Constructs a new HeroInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHeroInfo);

        /** HeroInfo heroId. */
        public heroId: string;

        /**
         * Creates a new HeroInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroInfo instance
         */
        public static create(properties?: proto.IHeroInfo): proto.HeroInfo;

        /**
         * Encodes the specified HeroInfo message. Does not implicitly {@link proto.HeroInfo.verify|verify} messages.
         * @param message HeroInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHeroInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroInfo message, length delimited. Does not implicitly {@link proto.HeroInfo.verify|verify} messages.
         * @param message HeroInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHeroInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HeroInfo;

        /**
         * Decodes a HeroInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HeroInfo;

        /**
         * Verifies a HeroInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.HeroInfo;

        /**
         * Creates a plain object from a HeroInfo message. Also converts values to other types if specified.
         * @param message HeroInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HeroInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroInfoReq. */
    interface IHeroInfoReq {
    }

    /** Represents a HeroInfoReq. */
    class HeroInfoReq implements IHeroInfoReq {

        /**
         * Constructs a new HeroInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHeroInfoReq);

        /**
         * Creates a new HeroInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroInfoReq instance
         */
        public static create(properties?: proto.IHeroInfoReq): proto.HeroInfoReq;

        /**
         * Encodes the specified HeroInfoReq message. Does not implicitly {@link proto.HeroInfoReq.verify|verify} messages.
         * @param message HeroInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHeroInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroInfoReq message, length delimited. Does not implicitly {@link proto.HeroInfoReq.verify|verify} messages.
         * @param message HeroInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHeroInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HeroInfoReq;

        /**
         * Decodes a HeroInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HeroInfoReq;

        /**
         * Verifies a HeroInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroInfoReq
         */
        public static fromObject(object: { [k: string]: any }): proto.HeroInfoReq;

        /**
         * Creates a plain object from a HeroInfoReq message. Also converts values to other types if specified.
         * @param message HeroInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HeroInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroInfoReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroInfoResp. */
    interface IHeroInfoResp {

        /** HeroInfoResp code */
        code?: (proto.RetCode|null);

        /** HeroInfoResp id */
        id?: (proto.MsgId|null);

        /** HeroInfoResp heroInfo */
        heroInfo?: (proto.IHeroInfo|null);
    }

    /** Represents a HeroInfoResp. */
    class HeroInfoResp implements IHeroInfoResp {

        /**
         * Constructs a new HeroInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHeroInfoResp);

        /** HeroInfoResp code. */
        public code: proto.RetCode;

        /** HeroInfoResp id. */
        public id: proto.MsgId;

        /** HeroInfoResp heroInfo. */
        public heroInfo?: (proto.IHeroInfo|null);

        /**
         * Creates a new HeroInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroInfoResp instance
         */
        public static create(properties?: proto.IHeroInfoResp): proto.HeroInfoResp;

        /**
         * Encodes the specified HeroInfoResp message. Does not implicitly {@link proto.HeroInfoResp.verify|verify} messages.
         * @param message HeroInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHeroInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroInfoResp message, length delimited. Does not implicitly {@link proto.HeroInfoResp.verify|verify} messages.
         * @param message HeroInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHeroInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HeroInfoResp;

        /**
         * Decodes a HeroInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HeroInfoResp;

        /**
         * Verifies a HeroInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroInfoResp
         */
        public static fromObject(object: { [k: string]: any }): proto.HeroInfoResp;

        /**
         * Creates a plain object from a HeroInfoResp message. Also converts values to other types if specified.
         * @param message HeroInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HeroInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroInfoResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroSwitchReq. */
    interface IHeroSwitchReq {

        /** HeroSwitchReq heroId */
        heroId?: (string|null);
    }

    /** Represents a HeroSwitchReq. */
    class HeroSwitchReq implements IHeroSwitchReq {

        /**
         * Constructs a new HeroSwitchReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHeroSwitchReq);

        /** HeroSwitchReq heroId. */
        public heroId: string;

        /**
         * Creates a new HeroSwitchReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroSwitchReq instance
         */
        public static create(properties?: proto.IHeroSwitchReq): proto.HeroSwitchReq;

        /**
         * Encodes the specified HeroSwitchReq message. Does not implicitly {@link proto.HeroSwitchReq.verify|verify} messages.
         * @param message HeroSwitchReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHeroSwitchReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroSwitchReq message, length delimited. Does not implicitly {@link proto.HeroSwitchReq.verify|verify} messages.
         * @param message HeroSwitchReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHeroSwitchReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroSwitchReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroSwitchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HeroSwitchReq;

        /**
         * Decodes a HeroSwitchReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroSwitchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HeroSwitchReq;

        /**
         * Verifies a HeroSwitchReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroSwitchReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroSwitchReq
         */
        public static fromObject(object: { [k: string]: any }): proto.HeroSwitchReq;

        /**
         * Creates a plain object from a HeroSwitchReq message. Also converts values to other types if specified.
         * @param message HeroSwitchReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HeroSwitchReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroSwitchReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroSwitchReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeroSwitchResp. */
    interface IHeroSwitchResp {

        /** HeroSwitchResp code */
        code?: (proto.RetCode|null);

        /** HeroSwitchResp id */
        id?: (proto.MsgId|null);

        /** HeroSwitchResp heroInfo */
        heroInfo?: (proto.IHeroInfo|null);
    }

    /** Represents a HeroSwitchResp. */
    class HeroSwitchResp implements IHeroSwitchResp {

        /**
         * Constructs a new HeroSwitchResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHeroSwitchResp);

        /** HeroSwitchResp code. */
        public code: proto.RetCode;

        /** HeroSwitchResp id. */
        public id: proto.MsgId;

        /** HeroSwitchResp heroInfo. */
        public heroInfo?: (proto.IHeroInfo|null);

        /**
         * Creates a new HeroSwitchResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroSwitchResp instance
         */
        public static create(properties?: proto.IHeroSwitchResp): proto.HeroSwitchResp;

        /**
         * Encodes the specified HeroSwitchResp message. Does not implicitly {@link proto.HeroSwitchResp.verify|verify} messages.
         * @param message HeroSwitchResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHeroSwitchResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeroSwitchResp message, length delimited. Does not implicitly {@link proto.HeroSwitchResp.verify|verify} messages.
         * @param message HeroSwitchResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHeroSwitchResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroSwitchResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroSwitchResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HeroSwitchResp;

        /**
         * Decodes a HeroSwitchResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroSwitchResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HeroSwitchResp;

        /**
         * Verifies a HeroSwitchResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroSwitchResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroSwitchResp
         */
        public static fromObject(object: { [k: string]: any }): proto.HeroSwitchResp;

        /**
         * Creates a plain object from a HeroSwitchResp message. Also converts values to other types if specified.
         * @param message HeroSwitchResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HeroSwitchResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroSwitchResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeroSwitchResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegisterReq. */
    interface IRegisterReq {

        /** RegisterReq account */
        account?: (string|null);

        /** RegisterReq password */
        password?: (string|null);

        /** RegisterReq name */
        name?: (string|null);
    }

    /** Represents a RegisterReq. */
    class RegisterReq implements IRegisterReq {

        /**
         * Constructs a new RegisterReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRegisterReq);

        /** RegisterReq account. */
        public account: string;

        /** RegisterReq password. */
        public password: string;

        /** RegisterReq name. */
        public name: string;

        /**
         * Creates a new RegisterReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterReq instance
         */
        public static create(properties?: proto.IRegisterReq): proto.RegisterReq;

        /**
         * Encodes the specified RegisterReq message. Does not implicitly {@link proto.RegisterReq.verify|verify} messages.
         * @param message RegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRegisterReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterReq message, length delimited. Does not implicitly {@link proto.RegisterReq.verify|verify} messages.
         * @param message RegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRegisterReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RegisterReq;

        /**
         * Decodes a RegisterReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RegisterReq;

        /**
         * Verifies a RegisterReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterReq
         */
        public static fromObject(object: { [k: string]: any }): proto.RegisterReq;

        /**
         * Creates a plain object from a RegisterReq message. Also converts values to other types if specified.
         * @param message RegisterReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RegisterReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegisterResp. */
    interface IRegisterResp {

        /** RegisterResp code */
        code?: (proto.RetCode|null);

        /** RegisterResp id */
        id?: (proto.MsgId|null);
    }

    /** Represents a RegisterResp. */
    class RegisterResp implements IRegisterResp {

        /**
         * Constructs a new RegisterResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRegisterResp);

        /** RegisterResp code. */
        public code: proto.RetCode;

        /** RegisterResp id. */
        public id: proto.MsgId;

        /**
         * Creates a new RegisterResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterResp instance
         */
        public static create(properties?: proto.IRegisterResp): proto.RegisterResp;

        /**
         * Encodes the specified RegisterResp message. Does not implicitly {@link proto.RegisterResp.verify|verify} messages.
         * @param message RegisterResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRegisterResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterResp message, length delimited. Does not implicitly {@link proto.RegisterResp.verify|verify} messages.
         * @param message RegisterResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRegisterResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RegisterResp;

        /**
         * Decodes a RegisterResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RegisterResp;

        /**
         * Verifies a RegisterResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterResp
         */
        public static fromObject(object: { [k: string]: any }): proto.RegisterResp;

        /**
         * Creates a plain object from a RegisterResp message. Also converts values to other types if specified.
         * @param message RegisterResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RegisterResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq account */
        account?: (string|null);

        /** LoginReq password */
        password?: (string|null);
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ILoginReq);

        /** LoginReq account. */
        public account: string;

        /** LoginReq password. */
        public password: string;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReq instance
         */
        public static create(properties?: proto.ILoginReq): proto.LoginReq;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link proto.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link proto.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.LoginReq;

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.LoginReq;

        /**
         * Verifies a LoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReq
         */
        public static fromObject(object: { [k: string]: any }): proto.LoginReq;

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @param message LoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginResp. */
    interface ILoginResp {

        /** LoginResp code */
        code?: (proto.RetCode|null);

        /** LoginResp id */
        id?: (proto.MsgId|null);

        /** LoginResp userInfo */
        userInfo?: (proto.IUserInfo|null);
    }

    /** Represents a LoginResp. */
    class LoginResp implements ILoginResp {

        /**
         * Constructs a new LoginResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ILoginResp);

        /** LoginResp code. */
        public code: proto.RetCode;

        /** LoginResp id. */
        public id: proto.MsgId;

        /** LoginResp userInfo. */
        public userInfo?: (proto.IUserInfo|null);

        /**
         * Creates a new LoginResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResp instance
         */
        public static create(properties?: proto.ILoginResp): proto.LoginResp;

        /**
         * Encodes the specified LoginResp message. Does not implicitly {@link proto.LoginResp.verify|verify} messages.
         * @param message LoginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ILoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResp message, length delimited. Does not implicitly {@link proto.LoginResp.verify|verify} messages.
         * @param message LoginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ILoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.LoginResp;

        /**
         * Decodes a LoginResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.LoginResp;

        /**
         * Verifies a LoginResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResp
         */
        public static fromObject(object: { [k: string]: any }): proto.LoginResp;

        /**
         * Creates a plain object from a LoginResp message. Also converts values to other types if specified.
         * @param message LoginResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.LoginResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a userHeadChangeReq. */
    interface IuserHeadChangeReq {

        /** userHeadChangeReq cfgId */
        cfgId?: (string|null);
    }

    /** Represents a userHeadChangeReq. */
    class userHeadChangeReq implements IuserHeadChangeReq {

        /**
         * Constructs a new userHeadChangeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IuserHeadChangeReq);

        /** userHeadChangeReq cfgId. */
        public cfgId: string;

        /**
         * Creates a new userHeadChangeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns userHeadChangeReq instance
         */
        public static create(properties?: proto.IuserHeadChangeReq): proto.userHeadChangeReq;

        /**
         * Encodes the specified userHeadChangeReq message. Does not implicitly {@link proto.userHeadChangeReq.verify|verify} messages.
         * @param message userHeadChangeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IuserHeadChangeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified userHeadChangeReq message, length delimited. Does not implicitly {@link proto.userHeadChangeReq.verify|verify} messages.
         * @param message userHeadChangeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IuserHeadChangeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a userHeadChangeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns userHeadChangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.userHeadChangeReq;

        /**
         * Decodes a userHeadChangeReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns userHeadChangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.userHeadChangeReq;

        /**
         * Verifies a userHeadChangeReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a userHeadChangeReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns userHeadChangeReq
         */
        public static fromObject(object: { [k: string]: any }): proto.userHeadChangeReq;

        /**
         * Creates a plain object from a userHeadChangeReq message. Also converts values to other types if specified.
         * @param message userHeadChangeReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.userHeadChangeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this userHeadChangeReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for userHeadChangeReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a userHeadChangeResp. */
    interface IuserHeadChangeResp {

        /** userHeadChangeResp code */
        code?: (proto.RetCode|null);

        /** userHeadChangeResp id */
        id?: (proto.MsgId|null);

        /** userHeadChangeResp headId */
        headId?: (string|null);
    }

    /** Represents a userHeadChangeResp. */
    class userHeadChangeResp implements IuserHeadChangeResp {

        /**
         * Constructs a new userHeadChangeResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IuserHeadChangeResp);

        /** userHeadChangeResp code. */
        public code: proto.RetCode;

        /** userHeadChangeResp id. */
        public id: proto.MsgId;

        /** userHeadChangeResp headId. */
        public headId: string;

        /**
         * Creates a new userHeadChangeResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns userHeadChangeResp instance
         */
        public static create(properties?: proto.IuserHeadChangeResp): proto.userHeadChangeResp;

        /**
         * Encodes the specified userHeadChangeResp message. Does not implicitly {@link proto.userHeadChangeResp.verify|verify} messages.
         * @param message userHeadChangeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IuserHeadChangeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified userHeadChangeResp message, length delimited. Does not implicitly {@link proto.userHeadChangeResp.verify|verify} messages.
         * @param message userHeadChangeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IuserHeadChangeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a userHeadChangeResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns userHeadChangeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.userHeadChangeResp;

        /**
         * Decodes a userHeadChangeResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns userHeadChangeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.userHeadChangeResp;

        /**
         * Verifies a userHeadChangeResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a userHeadChangeResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns userHeadChangeResp
         */
        public static fromObject(object: { [k: string]: any }): proto.userHeadChangeResp;

        /**
         * Creates a plain object from a userHeadChangeResp message. Also converts values to other types if specified.
         * @param message userHeadChangeResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.userHeadChangeResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this userHeadChangeResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for userHeadChangeResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
