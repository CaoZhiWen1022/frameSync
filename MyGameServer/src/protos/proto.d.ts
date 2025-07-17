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

        /** battleMoveData start */
        start?: (proto.Iv2|null);

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

        /** battleMoveData start. */
        public start?: (proto.Iv2|null);

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

    /** Properties of a battleClientFrameData. */
    interface IbattleClientFrameData {

        /** battleClientFrameData op */
        op?: (number|null);

        /** battleClientFrameData moveData */
        moveData?: (proto.IbattleMoveData|null);
    }

    /** Represents a battleClientFrameData. */
    class battleClientFrameData implements IbattleClientFrameData {

        /**
         * Constructs a new battleClientFrameData.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IbattleClientFrameData);

        /** battleClientFrameData op. */
        public op: number;

        /** battleClientFrameData moveData. */
        public moveData?: (proto.IbattleMoveData|null);

        /**
         * Creates a new battleClientFrameData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns battleClientFrameData instance
         */
        public static create(properties?: proto.IbattleClientFrameData): proto.battleClientFrameData;

        /**
         * Encodes the specified battleClientFrameData message. Does not implicitly {@link proto.battleClientFrameData.verify|verify} messages.
         * @param message battleClientFrameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IbattleClientFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified battleClientFrameData message, length delimited. Does not implicitly {@link proto.battleClientFrameData.verify|verify} messages.
         * @param message battleClientFrameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IbattleClientFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a battleClientFrameData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns battleClientFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.battleClientFrameData;

        /**
         * Decodes a battleClientFrameData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns battleClientFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.battleClientFrameData;

        /**
         * Verifies a battleClientFrameData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a battleClientFrameData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns battleClientFrameData
         */
        public static fromObject(object: { [k: string]: any }): proto.battleClientFrameData;

        /**
         * Creates a plain object from a battleClientFrameData message. Also converts values to other types if specified.
         * @param message battleClientFrameData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.battleClientFrameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this battleClientFrameData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for battleClientFrameData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a battleFrameReq. */
    interface IbattleFrameReq {

        /** battleFrameReq frameIndex */
        frameIndex?: (number|null);

        /** battleFrameReq data */
        data?: (proto.IbattleClientFrameData|null);
    }

    /** Represents a battleFrameReq. */
    class battleFrameReq implements IbattleFrameReq {

        /**
         * Constructs a new battleFrameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IbattleFrameReq);

        /** battleFrameReq frameIndex. */
        public frameIndex: number;

        /** battleFrameReq data. */
        public data?: (proto.IbattleClientFrameData|null);

        /**
         * Creates a new battleFrameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns battleFrameReq instance
         */
        public static create(properties?: proto.IbattleFrameReq): proto.battleFrameReq;

        /**
         * Encodes the specified battleFrameReq message. Does not implicitly {@link proto.battleFrameReq.verify|verify} messages.
         * @param message battleFrameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IbattleFrameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified battleFrameReq message, length delimited. Does not implicitly {@link proto.battleFrameReq.verify|verify} messages.
         * @param message battleFrameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IbattleFrameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a battleFrameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns battleFrameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.battleFrameReq;

        /**
         * Decodes a battleFrameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns battleFrameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.battleFrameReq;

        /**
         * Verifies a battleFrameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a battleFrameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns battleFrameReq
         */
        public static fromObject(object: { [k: string]: any }): proto.battleFrameReq;

        /**
         * Creates a plain object from a battleFrameReq message. Also converts values to other types if specified.
         * @param message battleFrameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.battleFrameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this battleFrameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for battleFrameReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a battleServerFrameData. */
    interface IbattleServerFrameData {

        /** battleServerFrameData userId */
        userId?: (number|null);

        /** battleServerFrameData data */
        data?: (proto.IbattleClientFrameData|null);
    }

    /** Represents a battleServerFrameData. */
    class battleServerFrameData implements IbattleServerFrameData {

        /**
         * Constructs a new battleServerFrameData.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IbattleServerFrameData);

        /** battleServerFrameData userId. */
        public userId: number;

        /** battleServerFrameData data. */
        public data?: (proto.IbattleClientFrameData|null);

        /**
         * Creates a new battleServerFrameData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns battleServerFrameData instance
         */
        public static create(properties?: proto.IbattleServerFrameData): proto.battleServerFrameData;

        /**
         * Encodes the specified battleServerFrameData message. Does not implicitly {@link proto.battleServerFrameData.verify|verify} messages.
         * @param message battleServerFrameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IbattleServerFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified battleServerFrameData message, length delimited. Does not implicitly {@link proto.battleServerFrameData.verify|verify} messages.
         * @param message battleServerFrameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IbattleServerFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a battleServerFrameData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns battleServerFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.battleServerFrameData;

        /**
         * Decodes a battleServerFrameData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns battleServerFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.battleServerFrameData;

        /**
         * Verifies a battleServerFrameData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a battleServerFrameData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns battleServerFrameData
         */
        public static fromObject(object: { [k: string]: any }): proto.battleServerFrameData;

        /**
         * Creates a plain object from a battleServerFrameData message. Also converts values to other types if specified.
         * @param message battleServerFrameData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.battleServerFrameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this battleServerFrameData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for battleServerFrameData
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

        /** battleFrameResp frameIndex */
        frameIndex?: (number|null);

        /** battleFrameResp data */
        data?: (proto.IbattleServerFrameData[]|null);
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

        /** battleFrameResp frameIndex. */
        public frameIndex: number;

        /** battleFrameResp data. */
        public data: proto.IbattleServerFrameData[];

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
        ID_BattleFrame = 10
    }

    /** battleOpType enum. */
    enum battleOpType {
        move = 0
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
