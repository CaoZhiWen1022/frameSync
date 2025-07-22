/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.BattleUserInfo = (function() {

        /**
         * Properties of a BattleUserInfo.
         * @memberof proto
         * @interface IBattleUserInfo
         * @property {proto.IUserInfo|null} [userInfo] BattleUserInfo userInfo
         * @property {string|null} [useHeroId] BattleUserInfo useHeroId
         */

        /**
         * Constructs a new BattleUserInfo.
         * @memberof proto
         * @classdesc Represents a BattleUserInfo.
         * @implements IBattleUserInfo
         * @constructor
         * @param {proto.IBattleUserInfo=} [properties] Properties to set
         */
        function BattleUserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleUserInfo userInfo.
         * @member {proto.IUserInfo|null|undefined} userInfo
         * @memberof proto.BattleUserInfo
         * @instance
         */
        BattleUserInfo.prototype.userInfo = null;

        /**
         * BattleUserInfo useHeroId.
         * @member {string} useHeroId
         * @memberof proto.BattleUserInfo
         * @instance
         */
        BattleUserInfo.prototype.useHeroId = "";

        /**
         * Creates a new BattleUserInfo instance using the specified properties.
         * @function create
         * @memberof proto.BattleUserInfo
         * @static
         * @param {proto.IBattleUserInfo=} [properties] Properties to set
         * @returns {proto.BattleUserInfo} BattleUserInfo instance
         */
        BattleUserInfo.create = function create(properties) {
            return new BattleUserInfo(properties);
        };

        /**
         * Encodes the specified BattleUserInfo message. Does not implicitly {@link proto.BattleUserInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.BattleUserInfo
         * @static
         * @param {proto.IBattleUserInfo} message BattleUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleUserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
                $root.proto.UserInfo.encode(message.userInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.useHeroId != null && Object.hasOwnProperty.call(message, "useHeroId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.useHeroId);
            return writer;
        };

        /**
         * Encodes the specified BattleUserInfo message, length delimited. Does not implicitly {@link proto.BattleUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.BattleUserInfo
         * @static
         * @param {proto.IBattleUserInfo} message BattleUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.BattleUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.BattleUserInfo} BattleUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleUserInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.BattleUserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.userInfo = $root.proto.UserInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.useHeroId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleUserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.BattleUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.BattleUserInfo} BattleUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleUserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleUserInfo message.
         * @function verify
         * @memberof proto.BattleUserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleUserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                var error = $root.proto.UserInfo.verify(message.userInfo);
                if (error)
                    return "userInfo." + error;
            }
            if (message.useHeroId != null && message.hasOwnProperty("useHeroId"))
                if (!$util.isString(message.useHeroId))
                    return "useHeroId: string expected";
            return null;
        };

        /**
         * Creates a BattleUserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.BattleUserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.BattleUserInfo} BattleUserInfo
         */
        BattleUserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.BattleUserInfo)
                return object;
            var message = new $root.proto.BattleUserInfo();
            if (object.userInfo != null) {
                if (typeof object.userInfo !== "object")
                    throw TypeError(".proto.BattleUserInfo.userInfo: object expected");
                message.userInfo = $root.proto.UserInfo.fromObject(object.userInfo);
            }
            if (object.useHeroId != null)
                message.useHeroId = String(object.useHeroId);
            return message;
        };

        /**
         * Creates a plain object from a BattleUserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.BattleUserInfo
         * @static
         * @param {proto.BattleUserInfo} message BattleUserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleUserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userInfo = null;
                object.useHeroId = "";
            }
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                object.userInfo = $root.proto.UserInfo.toObject(message.userInfo, options);
            if (message.useHeroId != null && message.hasOwnProperty("useHeroId"))
                object.useHeroId = message.useHeroId;
            return object;
        };

        /**
         * Converts this BattleUserInfo to JSON.
         * @function toJSON
         * @memberof proto.BattleUserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleUserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BattleUserInfo
         * @function getTypeUrl
         * @memberof proto.BattleUserInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattleUserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.BattleUserInfo";
        };

        return BattleUserInfo;
    })();

    proto.mathchingReq = (function() {

        /**
         * Properties of a mathchingReq.
         * @memberof proto
         * @interface ImathchingReq
         */

        /**
         * Constructs a new mathchingReq.
         * @memberof proto
         * @classdesc Represents a mathchingReq.
         * @implements ImathchingReq
         * @constructor
         * @param {proto.ImathchingReq=} [properties] Properties to set
         */
        function mathchingReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new mathchingReq instance using the specified properties.
         * @function create
         * @memberof proto.mathchingReq
         * @static
         * @param {proto.ImathchingReq=} [properties] Properties to set
         * @returns {proto.mathchingReq} mathchingReq instance
         */
        mathchingReq.create = function create(properties) {
            return new mathchingReq(properties);
        };

        /**
         * Encodes the specified mathchingReq message. Does not implicitly {@link proto.mathchingReq.verify|verify} messages.
         * @function encode
         * @memberof proto.mathchingReq
         * @static
         * @param {proto.ImathchingReq} message mathchingReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        mathchingReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified mathchingReq message, length delimited. Does not implicitly {@link proto.mathchingReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.mathchingReq
         * @static
         * @param {proto.ImathchingReq} message mathchingReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        mathchingReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a mathchingReq message from the specified reader or buffer.
         * @function decode
         * @memberof proto.mathchingReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.mathchingReq} mathchingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        mathchingReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mathchingReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a mathchingReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.mathchingReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.mathchingReq} mathchingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        mathchingReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a mathchingReq message.
         * @function verify
         * @memberof proto.mathchingReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        mathchingReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a mathchingReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.mathchingReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.mathchingReq} mathchingReq
         */
        mathchingReq.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.mathchingReq)
                return object;
            return new $root.proto.mathchingReq();
        };

        /**
         * Creates a plain object from a mathchingReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.mathchingReq
         * @static
         * @param {proto.mathchingReq} message mathchingReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        mathchingReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this mathchingReq to JSON.
         * @function toJSON
         * @memberof proto.mathchingReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        mathchingReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for mathchingReq
         * @function getTypeUrl
         * @memberof proto.mathchingReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        mathchingReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.mathchingReq";
        };

        return mathchingReq;
    })();

    proto.matchingResp = (function() {

        /**
         * Properties of a matchingResp.
         * @memberof proto
         * @interface ImatchingResp
         * @property {proto.RetCode|null} [code] matchingResp code
         * @property {proto.MsgId|null} [id] matchingResp id
         * @property {number|Long|null} [roomId] matchingResp roomId
         * @property {Array.<proto.IBattleUserInfo>|null} [users] matchingResp users
         */

        /**
         * Constructs a new matchingResp.
         * @memberof proto
         * @classdesc Represents a matchingResp.
         * @implements ImatchingResp
         * @constructor
         * @param {proto.ImatchingResp=} [properties] Properties to set
         */
        function matchingResp(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * matchingResp code.
         * @member {proto.RetCode} code
         * @memberof proto.matchingResp
         * @instance
         */
        matchingResp.prototype.code = 0;

        /**
         * matchingResp id.
         * @member {proto.MsgId} id
         * @memberof proto.matchingResp
         * @instance
         */
        matchingResp.prototype.id = 0;

        /**
         * matchingResp roomId.
         * @member {number|Long} roomId
         * @memberof proto.matchingResp
         * @instance
         */
        matchingResp.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * matchingResp users.
         * @member {Array.<proto.IBattleUserInfo>} users
         * @memberof proto.matchingResp
         * @instance
         */
        matchingResp.prototype.users = $util.emptyArray;

        /**
         * Creates a new matchingResp instance using the specified properties.
         * @function create
         * @memberof proto.matchingResp
         * @static
         * @param {proto.ImatchingResp=} [properties] Properties to set
         * @returns {proto.matchingResp} matchingResp instance
         */
        matchingResp.create = function create(properties) {
            return new matchingResp(properties);
        };

        /**
         * Encodes the specified matchingResp message. Does not implicitly {@link proto.matchingResp.verify|verify} messages.
         * @function encode
         * @memberof proto.matchingResp
         * @static
         * @param {proto.ImatchingResp} message matchingResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        matchingResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.roomId);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.proto.BattleUserInfo.encode(message.users[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified matchingResp message, length delimited. Does not implicitly {@link proto.matchingResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.matchingResp
         * @static
         * @param {proto.ImatchingResp} message matchingResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        matchingResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a matchingResp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.matchingResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.matchingResp} matchingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        matchingResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.matchingResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.id = reader.int32();
                        break;
                    }
                case 3: {
                        message.roomId = reader.int64();
                        break;
                    }
                case 4: {
                        if (!(message.users && message.users.length))
                            message.users = [];
                        message.users.push($root.proto.BattleUserInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a matchingResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.matchingResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.matchingResp} matchingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        matchingResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a matchingResp message.
         * @function verify
         * @memberof proto.matchingResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        matchingResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case -1:
                case -2:
                case -3:
                case -4:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                switch (message.id) {
                default:
                    return "id: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.proto.BattleUserInfo.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a matchingResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.matchingResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.matchingResp} matchingResp
         */
        matchingResp.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.matchingResp)
                return object;
            var message = new $root.proto.matchingResp();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "FAIL":
            case -1:
                message.code = -1;
                break;
            case "NOTACCOUNT":
            case -2:
                message.code = -2;
                break;
            case "ACCOUNTEXIST":
            case -3:
                message.code = -3;
                break;
            case "ACCOUNTNAMEEXIST":
            case -4:
                message.code = -4;
                break;
            }
            switch (object.id) {
            default:
                if (typeof object.id === "number") {
                    message.id = object.id;
                    break;
                }
                break;
            case "ID_FAIL":
            case 0:
                message.id = 0;
                break;
            case "ID_UserReqister":
            case 1:
                message.id = 1;
                break;
            case "ID_UserLogin":
            case 2:
                message.id = 2;
                break;
            case "ID_HeroInfo":
            case 3:
                message.id = 3;
                break;
            case "ID_HeroSwitch":
            case 4:
                message.id = 4;
                break;
            case "ID_UserHeadChange":
            case 5:
                message.id = 5;
                break;
            case "ID_Matching":
            case 6:
                message.id = 6;
                break;
            case "ID_ClientReady":
            case 7:
                message.id = 7;
                break;
            case "ID_GameStartDownTime":
            case 8:
                message.id = 8;
                break;
            case "ID_GameStart":
            case 9:
                message.id = 9;
                break;
            case "ID_BattleFrameDataInput":
            case 10:
                message.id = 10;
                break;
            case "ID_BattleFrameDataUpdate":
            case 11:
                message.id = 11;
                break;
            case "ID_GET_BattleFrameData":
            case 12:
                message.id = 12;
                break;
            case "ID_Heartbeat":
            case 13:
                message.id = 13;
                break;
            }
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".proto.matchingResp.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".proto.matchingResp.users: object expected");
                    message.users[i] = $root.proto.BattleUserInfo.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a matchingResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.matchingResp
         * @static
         * @param {proto.matchingResp} message matchingResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        matchingResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.code = options.enums === String ? "SUCCESS" : 0;
                object.id = options.enums === String ? "ID_FAIL" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.proto.RetCode[message.code] === undefined ? message.code : $root.proto.RetCode[message.code] : message.code;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.enums === String ? $root.proto.MsgId[message.id] === undefined ? message.id : $root.proto.MsgId[message.id] : message.id;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.proto.BattleUserInfo.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this matchingResp to JSON.
         * @function toJSON
         * @memberof proto.matchingResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        matchingResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for matchingResp
         * @function getTypeUrl
         * @memberof proto.matchingResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        matchingResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.matchingResp";
        };

        return matchingResp;
    })();

    proto.clientReadyReq = (function() {

        /**
         * Properties of a clientReadyReq.
         * @memberof proto
         * @interface IclientReadyReq
         * @property {number|null} [roomId] clientReadyReq roomId
         */

        /**
         * Constructs a new clientReadyReq.
         * @memberof proto
         * @classdesc Represents a clientReadyReq.
         * @implements IclientReadyReq
         * @constructor
         * @param {proto.IclientReadyReq=} [properties] Properties to set
         */
        function clientReadyReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * clientReadyReq roomId.
         * @member {number} roomId
         * @memberof proto.clientReadyReq
         * @instance
         */
        clientReadyReq.prototype.roomId = 0;

        /**
         * Creates a new clientReadyReq instance using the specified properties.
         * @function create
         * @memberof proto.clientReadyReq
         * @static
         * @param {proto.IclientReadyReq=} [properties] Properties to set
         * @returns {proto.clientReadyReq} clientReadyReq instance
         */
        clientReadyReq.create = function create(properties) {
            return new clientReadyReq(properties);
        };

        /**
         * Encodes the specified clientReadyReq message. Does not implicitly {@link proto.clientReadyReq.verify|verify} messages.
         * @function encode
         * @memberof proto.clientReadyReq
         * @static
         * @param {proto.IclientReadyReq} message clientReadyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        clientReadyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified clientReadyReq message, length delimited. Does not implicitly {@link proto.clientReadyReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.clientReadyReq
         * @static
         * @param {proto.IclientReadyReq} message clientReadyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        clientReadyReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a clientReadyReq message from the specified reader or buffer.
         * @function decode
         * @memberof proto.clientReadyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.clientReadyReq} clientReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        clientReadyReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.clientReadyReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a clientReadyReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.clientReadyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.clientReadyReq} clientReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        clientReadyReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a clientReadyReq message.
         * @function verify
         * @memberof proto.clientReadyReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        clientReadyReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates a clientReadyReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.clientReadyReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.clientReadyReq} clientReadyReq
         */
        clientReadyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.clientReadyReq)
                return object;
            var message = new $root.proto.clientReadyReq();
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from a clientReadyReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.clientReadyReq
         * @static
         * @param {proto.clientReadyReq} message clientReadyReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        clientReadyReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.roomId = 0;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this clientReadyReq to JSON.
         * @function toJSON
         * @memberof proto.clientReadyReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        clientReadyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for clientReadyReq
         * @function getTypeUrl
         * @memberof proto.clientReadyReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        clientReadyReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.clientReadyReq";
        };

        return clientReadyReq;
    })();

    proto.gameStartDownTimeResp = (function() {

        /**
         * Properties of a gameStartDownTimeResp.
         * @memberof proto
         * @interface IgameStartDownTimeResp
         * @property {proto.RetCode|null} [code] gameStartDownTimeResp code
         * @property {proto.MsgId|null} [id] gameStartDownTimeResp id
         * @property {number|null} [time] gameStartDownTimeResp time
         */

        /**
         * Constructs a new gameStartDownTimeResp.
         * @memberof proto
         * @classdesc Represents a gameStartDownTimeResp.
         * @implements IgameStartDownTimeResp
         * @constructor
         * @param {proto.IgameStartDownTimeResp=} [properties] Properties to set
         */
        function gameStartDownTimeResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * gameStartDownTimeResp code.
         * @member {proto.RetCode} code
         * @memberof proto.gameStartDownTimeResp
         * @instance
         */
        gameStartDownTimeResp.prototype.code = 0;

        /**
         * gameStartDownTimeResp id.
         * @member {proto.MsgId} id
         * @memberof proto.gameStartDownTimeResp
         * @instance
         */
        gameStartDownTimeResp.prototype.id = 0;

        /**
         * gameStartDownTimeResp time.
         * @member {number} time
         * @memberof proto.gameStartDownTimeResp
         * @instance
         */
        gameStartDownTimeResp.prototype.time = 0;

        /**
         * Creates a new gameStartDownTimeResp instance using the specified properties.
         * @function create
         * @memberof proto.gameStartDownTimeResp
         * @static
         * @param {proto.IgameStartDownTimeResp=} [properties] Properties to set
         * @returns {proto.gameStartDownTimeResp} gameStartDownTimeResp instance
         */
        gameStartDownTimeResp.create = function create(properties) {
            return new gameStartDownTimeResp(properties);
        };

        /**
         * Encodes the specified gameStartDownTimeResp message. Does not implicitly {@link proto.gameStartDownTimeResp.verify|verify} messages.
         * @function encode
         * @memberof proto.gameStartDownTimeResp
         * @static
         * @param {proto.IgameStartDownTimeResp} message gameStartDownTimeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        gameStartDownTimeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.time);
            return writer;
        };

        /**
         * Encodes the specified gameStartDownTimeResp message, length delimited. Does not implicitly {@link proto.gameStartDownTimeResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.gameStartDownTimeResp
         * @static
         * @param {proto.IgameStartDownTimeResp} message gameStartDownTimeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        gameStartDownTimeResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a gameStartDownTimeResp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.gameStartDownTimeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.gameStartDownTimeResp} gameStartDownTimeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        gameStartDownTimeResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.gameStartDownTimeResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.id = reader.int32();
                        break;
                    }
                case 3: {
                        message.time = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a gameStartDownTimeResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.gameStartDownTimeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.gameStartDownTimeResp} gameStartDownTimeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        gameStartDownTimeResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a gameStartDownTimeResp message.
         * @function verify
         * @memberof proto.gameStartDownTimeResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        gameStartDownTimeResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case -1:
                case -2:
                case -3:
                case -4:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                switch (message.id) {
                default:
                    return "id: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            return null;
        };

        /**
         * Creates a gameStartDownTimeResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.gameStartDownTimeResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.gameStartDownTimeResp} gameStartDownTimeResp
         */
        gameStartDownTimeResp.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.gameStartDownTimeResp)
                return object;
            var message = new $root.proto.gameStartDownTimeResp();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "FAIL":
            case -1:
                message.code = -1;
                break;
            case "NOTACCOUNT":
            case -2:
                message.code = -2;
                break;
            case "ACCOUNTEXIST":
            case -3:
                message.code = -3;
                break;
            case "ACCOUNTNAMEEXIST":
            case -4:
                message.code = -4;
                break;
            }
            switch (object.id) {
            default:
                if (typeof object.id === "number") {
                    message.id = object.id;
                    break;
                }
                break;
            case "ID_FAIL":
            case 0:
                message.id = 0;
                break;
            case "ID_UserReqister":
            case 1:
                message.id = 1;
                break;
            case "ID_UserLogin":
            case 2:
                message.id = 2;
                break;
            case "ID_HeroInfo":
            case 3:
                message.id = 3;
                break;
            case "ID_HeroSwitch":
            case 4:
                message.id = 4;
                break;
            case "ID_UserHeadChange":
            case 5:
                message.id = 5;
                break;
            case "ID_Matching":
            case 6:
                message.id = 6;
                break;
            case "ID_ClientReady":
            case 7:
                message.id = 7;
                break;
            case "ID_GameStartDownTime":
            case 8:
                message.id = 8;
                break;
            case "ID_GameStart":
            case 9:
                message.id = 9;
                break;
            case "ID_BattleFrameDataInput":
            case 10:
                message.id = 10;
                break;
            case "ID_BattleFrameDataUpdate":
            case 11:
                message.id = 11;
                break;
            case "ID_GET_BattleFrameData":
            case 12:
                message.id = 12;
                break;
            case "ID_Heartbeat":
            case 13:
                message.id = 13;
                break;
            }
            if (object.time != null)
                message.time = object.time | 0;
            return message;
        };

        /**
         * Creates a plain object from a gameStartDownTimeResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.gameStartDownTimeResp
         * @static
         * @param {proto.gameStartDownTimeResp} message gameStartDownTimeResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        gameStartDownTimeResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "SUCCESS" : 0;
                object.id = options.enums === String ? "ID_FAIL" : 0;
                object.time = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.proto.RetCode[message.code] === undefined ? message.code : $root.proto.RetCode[message.code] : message.code;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.enums === String ? $root.proto.MsgId[message.id] === undefined ? message.id : $root.proto.MsgId[message.id] : message.id;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            return object;
        };

        /**
         * Converts this gameStartDownTimeResp to JSON.
         * @function toJSON
         * @memberof proto.gameStartDownTimeResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        gameStartDownTimeResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for gameStartDownTimeResp
         * @function getTypeUrl
         * @memberof proto.gameStartDownTimeResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        gameStartDownTimeResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.gameStartDownTimeResp";
        };

        return gameStartDownTimeResp;
    })();

    proto.gameSatrtResp = (function() {

        /**
         * Properties of a gameSatrtResp.
         * @memberof proto
         * @interface IgameSatrtResp
         * @property {proto.RetCode|null} [code] gameSatrtResp code
         * @property {proto.MsgId|null} [id] gameSatrtResp id
         */

        /**
         * Constructs a new gameSatrtResp.
         * @memberof proto
         * @classdesc Represents a gameSatrtResp.
         * @implements IgameSatrtResp
         * @constructor
         * @param {proto.IgameSatrtResp=} [properties] Properties to set
         */
        function gameSatrtResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * gameSatrtResp code.
         * @member {proto.RetCode} code
         * @memberof proto.gameSatrtResp
         * @instance
         */
        gameSatrtResp.prototype.code = 0;

        /**
         * gameSatrtResp id.
         * @member {proto.MsgId} id
         * @memberof proto.gameSatrtResp
         * @instance
         */
        gameSatrtResp.prototype.id = 0;

        /**
         * Creates a new gameSatrtResp instance using the specified properties.
         * @function create
         * @memberof proto.gameSatrtResp
         * @static
         * @param {proto.IgameSatrtResp=} [properties] Properties to set
         * @returns {proto.gameSatrtResp} gameSatrtResp instance
         */
        gameSatrtResp.create = function create(properties) {
            return new gameSatrtResp(properties);
        };

        /**
         * Encodes the specified gameSatrtResp message. Does not implicitly {@link proto.gameSatrtResp.verify|verify} messages.
         * @function encode
         * @memberof proto.gameSatrtResp
         * @static
         * @param {proto.IgameSatrtResp} message gameSatrtResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        gameSatrtResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified gameSatrtResp message, length delimited. Does not implicitly {@link proto.gameSatrtResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.gameSatrtResp
         * @static
         * @param {proto.IgameSatrtResp} message gameSatrtResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        gameSatrtResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a gameSatrtResp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.gameSatrtResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.gameSatrtResp} gameSatrtResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        gameSatrtResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.gameSatrtResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.id = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a gameSatrtResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.gameSatrtResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.gameSatrtResp} gameSatrtResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        gameSatrtResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a gameSatrtResp message.
         * @function verify
         * @memberof proto.gameSatrtResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        gameSatrtResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case -1:
                case -2:
                case -3:
                case -4:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                switch (message.id) {
                default:
                    return "id: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            return null;
        };

        /**
         * Creates a gameSatrtResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.gameSatrtResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.gameSatrtResp} gameSatrtResp
         */
        gameSatrtResp.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.gameSatrtResp)
                return object;
            var message = new $root.proto.gameSatrtResp();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "FAIL":
            case -1:
                message.code = -1;
                break;
            case "NOTACCOUNT":
            case -2:
                message.code = -2;
                break;
            case "ACCOUNTEXIST":
            case -3:
                message.code = -3;
                break;
            case "ACCOUNTNAMEEXIST":
            case -4:
                message.code = -4;
                break;
            }
            switch (object.id) {
            default:
                if (typeof object.id === "number") {
                    message.id = object.id;
                    break;
                }
                break;
            case "ID_FAIL":
            case 0:
                message.id = 0;
                break;
            case "ID_UserReqister":
            case 1:
                message.id = 1;
                break;
            case "ID_UserLogin":
            case 2:
                message.id = 2;
                break;
            case "ID_HeroInfo":
            case 3:
                message.id = 3;
                break;
            case "ID_HeroSwitch":
            case 4:
                message.id = 4;
                break;
            case "ID_UserHeadChange":
            case 5:
                message.id = 5;
                break;
            case "ID_Matching":
            case 6:
                message.id = 6;
                break;
            case "ID_ClientReady":
            case 7:
                message.id = 7;
                break;
            case "ID_GameStartDownTime":
            case 8:
                message.id = 8;
                break;
            case "ID_GameStart":
            case 9:
                message.id = 9;
                break;
            case "ID_BattleFrameDataInput":
            case 10:
                message.id = 10;
                break;
            case "ID_BattleFrameDataUpdate":
            case 11:
                message.id = 11;
                break;
            case "ID_GET_BattleFrameData":
            case 12:
                message.id = 12;
                break;
            case "ID_Heartbeat":
            case 13:
                message.id = 13;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a gameSatrtResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.gameSatrtResp
         * @static
         * @param {proto.gameSatrtResp} message gameSatrtResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        gameSatrtResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "SUCCESS" : 0;
                object.id = options.enums === String ? "ID_FAIL" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.proto.RetCode[message.code] === undefined ? message.code : $root.proto.RetCode[message.code] : message.code;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.enums === String ? $root.proto.MsgId[message.id] === undefined ? message.id : $root.proto.MsgId[message.id] : message.id;
            return object;
        };

        /**
         * Converts this gameSatrtResp to JSON.
         * @function toJSON
         * @memberof proto.gameSatrtResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        gameSatrtResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for gameSatrtResp
         * @function getTypeUrl
         * @memberof proto.gameSatrtResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        gameSatrtResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.gameSatrtResp";
        };

        return gameSatrtResp;
    })();

    proto.v2 = (function() {

        /**
         * Properties of a v2.
         * @memberof proto
         * @interface Iv2
         * @property {number|null} [x] v2 x
         * @property {number|null} [y] v2 y
         */

        /**
         * Constructs a new v2.
         * @memberof proto
         * @classdesc Represents a v2.
         * @implements Iv2
         * @constructor
         * @param {proto.Iv2=} [properties] Properties to set
         */
        function v2(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * v2 x.
         * @member {number} x
         * @memberof proto.v2
         * @instance
         */
        v2.prototype.x = 0;

        /**
         * v2 y.
         * @member {number} y
         * @memberof proto.v2
         * @instance
         */
        v2.prototype.y = 0;

        /**
         * Creates a new v2 instance using the specified properties.
         * @function create
         * @memberof proto.v2
         * @static
         * @param {proto.Iv2=} [properties] Properties to set
         * @returns {proto.v2} v2 instance
         */
        v2.create = function create(properties) {
            return new v2(properties);
        };

        /**
         * Encodes the specified v2 message. Does not implicitly {@link proto.v2.verify|verify} messages.
         * @function encode
         * @memberof proto.v2
         * @static
         * @param {proto.Iv2} message v2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        v2.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            return writer;
        };

        /**
         * Encodes the specified v2 message, length delimited. Does not implicitly {@link proto.v2.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.v2
         * @static
         * @param {proto.Iv2} message v2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        v2.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a v2 message from the specified reader or buffer.
         * @function decode
         * @memberof proto.v2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.v2} v2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        v2.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.v2();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.int32();
                        break;
                    }
                case 2: {
                        message.y = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a v2 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.v2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.v2} v2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        v2.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a v2 message.
         * @function verify
         * @memberof proto.v2
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        v2.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };

        /**
         * Creates a v2 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.v2
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.v2} v2
         */
        v2.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.v2)
                return object;
            var message = new $root.proto.v2();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            return message;
        };

        /**
         * Creates a plain object from a v2 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.v2
         * @static
         * @param {proto.v2} message v2
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        v2.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this v2 to JSON.
         * @function toJSON
         * @memberof proto.v2
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        v2.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for v2
         * @function getTypeUrl
         * @memberof proto.v2
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        v2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.v2";
        };

        return v2;
    })();

    proto.battleMoveData = (function() {

        /**
         * Properties of a battleMoveData.
         * @memberof proto
         * @interface IbattleMoveData
         * @property {proto.Iv2|null} [target] battleMoveData target
         */

        /**
         * Constructs a new battleMoveData.
         * @memberof proto
         * @classdesc Represents a battleMoveData.
         * @implements IbattleMoveData
         * @constructor
         * @param {proto.IbattleMoveData=} [properties] Properties to set
         */
        function battleMoveData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * battleMoveData target.
         * @member {proto.Iv2|null|undefined} target
         * @memberof proto.battleMoveData
         * @instance
         */
        battleMoveData.prototype.target = null;

        /**
         * Creates a new battleMoveData instance using the specified properties.
         * @function create
         * @memberof proto.battleMoveData
         * @static
         * @param {proto.IbattleMoveData=} [properties] Properties to set
         * @returns {proto.battleMoveData} battleMoveData instance
         */
        battleMoveData.create = function create(properties) {
            return new battleMoveData(properties);
        };

        /**
         * Encodes the specified battleMoveData message. Does not implicitly {@link proto.battleMoveData.verify|verify} messages.
         * @function encode
         * @memberof proto.battleMoveData
         * @static
         * @param {proto.IbattleMoveData} message battleMoveData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        battleMoveData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                $root.proto.v2.encode(message.target, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified battleMoveData message, length delimited. Does not implicitly {@link proto.battleMoveData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.battleMoveData
         * @static
         * @param {proto.IbattleMoveData} message battleMoveData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        battleMoveData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a battleMoveData message from the specified reader or buffer.
         * @function decode
         * @memberof proto.battleMoveData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.battleMoveData} battleMoveData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        battleMoveData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.battleMoveData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.target = $root.proto.v2.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a battleMoveData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.battleMoveData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.battleMoveData} battleMoveData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        battleMoveData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a battleMoveData message.
         * @function verify
         * @memberof proto.battleMoveData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        battleMoveData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.target != null && message.hasOwnProperty("target")) {
                var error = $root.proto.v2.verify(message.target);
                if (error)
                    return "target." + error;
            }
            return null;
        };

        /**
         * Creates a battleMoveData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.battleMoveData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.battleMoveData} battleMoveData
         */
        battleMoveData.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.battleMoveData)
                return object;
            var message = new $root.proto.battleMoveData();
            if (object.target != null) {
                if (typeof object.target !== "object")
                    throw TypeError(".proto.battleMoveData.target: object expected");
                message.target = $root.proto.v2.fromObject(object.target);
            }
            return message;
        };

        /**
         * Creates a plain object from a battleMoveData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.battleMoveData
         * @static
         * @param {proto.battleMoveData} message battleMoveData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        battleMoveData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.target = null;
            if (message.target != null && message.hasOwnProperty("target"))
                object.target = $root.proto.v2.toObject(message.target, options);
            return object;
        };

        /**
         * Converts this battleMoveData to JSON.
         * @function toJSON
         * @memberof proto.battleMoveData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        battleMoveData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for battleMoveData
         * @function getTypeUrl
         * @memberof proto.battleMoveData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        battleMoveData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.battleMoveData";
        };

        return battleMoveData;
    })();

    proto.frameData = (function() {

        /**
         * Properties of a frameData.
         * @memberof proto
         * @interface IframeData
         * @property {number|null} [op] frameData op
         * @property {proto.IbattleMoveData|null} [moveData] frameData moveData
         */

        /**
         * Constructs a new frameData.
         * @memberof proto
         * @classdesc Represents a frameData.
         * @implements IframeData
         * @constructor
         * @param {proto.IframeData=} [properties] Properties to set
         */
        function frameData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * frameData op.
         * @member {number} op
         * @memberof proto.frameData
         * @instance
         */
        frameData.prototype.op = 0;

        /**
         * frameData moveData.
         * @member {proto.IbattleMoveData|null|undefined} moveData
         * @memberof proto.frameData
         * @instance
         */
        frameData.prototype.moveData = null;

        /**
         * Creates a new frameData instance using the specified properties.
         * @function create
         * @memberof proto.frameData
         * @static
         * @param {proto.IframeData=} [properties] Properties to set
         * @returns {proto.frameData} frameData instance
         */
        frameData.create = function create(properties) {
            return new frameData(properties);
        };

        /**
         * Encodes the specified frameData message. Does not implicitly {@link proto.frameData.verify|verify} messages.
         * @function encode
         * @memberof proto.frameData
         * @static
         * @param {proto.IframeData} message frameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        frameData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.op != null && Object.hasOwnProperty.call(message, "op"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.op);
            if (message.moveData != null && Object.hasOwnProperty.call(message, "moveData"))
                $root.proto.battleMoveData.encode(message.moveData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified frameData message, length delimited. Does not implicitly {@link proto.frameData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.frameData
         * @static
         * @param {proto.IframeData} message frameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        frameData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a frameData message from the specified reader or buffer.
         * @function decode
         * @memberof proto.frameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.frameData} frameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        frameData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.frameData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.op = reader.int32();
                        break;
                    }
                case 2: {
                        message.moveData = $root.proto.battleMoveData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a frameData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.frameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.frameData} frameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        frameData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a frameData message.
         * @function verify
         * @memberof proto.frameData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        frameData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.op != null && message.hasOwnProperty("op"))
                if (!$util.isInteger(message.op))
                    return "op: integer expected";
            if (message.moveData != null && message.hasOwnProperty("moveData")) {
                var error = $root.proto.battleMoveData.verify(message.moveData);
                if (error)
                    return "moveData." + error;
            }
            return null;
        };

        /**
         * Creates a frameData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.frameData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.frameData} frameData
         */
        frameData.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.frameData)
                return object;
            var message = new $root.proto.frameData();
            if (object.op != null)
                message.op = object.op | 0;
            if (object.moveData != null) {
                if (typeof object.moveData !== "object")
                    throw TypeError(".proto.frameData.moveData: object expected");
                message.moveData = $root.proto.battleMoveData.fromObject(object.moveData);
            }
            return message;
        };

        /**
         * Creates a plain object from a frameData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.frameData
         * @static
         * @param {proto.frameData} message frameData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        frameData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.op = 0;
                object.moveData = null;
            }
            if (message.op != null && message.hasOwnProperty("op"))
                object.op = message.op;
            if (message.moveData != null && message.hasOwnProperty("moveData"))
                object.moveData = $root.proto.battleMoveData.toObject(message.moveData, options);
            return object;
        };

        /**
         * Converts this frameData to JSON.
         * @function toJSON
         * @memberof proto.frameData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        frameData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for frameData
         * @function getTypeUrl
         * @memberof proto.frameData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        frameData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.frameData";
        };

        return frameData;
    })();

    proto.userFrameData = (function() {

        /**
         * Properties of a userFrameData.
         * @memberof proto
         * @interface IuserFrameData
         * @property {number|null} [userId] userFrameData userId
         * @property {proto.IframeData|null} [data] userFrameData data
         */

        /**
         * Constructs a new userFrameData.
         * @memberof proto
         * @classdesc Represents a userFrameData.
         * @implements IuserFrameData
         * @constructor
         * @param {proto.IuserFrameData=} [properties] Properties to set
         */
        function userFrameData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * userFrameData userId.
         * @member {number} userId
         * @memberof proto.userFrameData
         * @instance
         */
        userFrameData.prototype.userId = 0;

        /**
         * userFrameData data.
         * @member {proto.IframeData|null|undefined} data
         * @memberof proto.userFrameData
         * @instance
         */
        userFrameData.prototype.data = null;

        /**
         * Creates a new userFrameData instance using the specified properties.
         * @function create
         * @memberof proto.userFrameData
         * @static
         * @param {proto.IuserFrameData=} [properties] Properties to set
         * @returns {proto.userFrameData} userFrameData instance
         */
        userFrameData.create = function create(properties) {
            return new userFrameData(properties);
        };

        /**
         * Encodes the specified userFrameData message. Does not implicitly {@link proto.userFrameData.verify|verify} messages.
         * @function encode
         * @memberof proto.userFrameData
         * @static
         * @param {proto.IuserFrameData} message userFrameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        userFrameData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.proto.frameData.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified userFrameData message, length delimited. Does not implicitly {@link proto.userFrameData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.userFrameData
         * @static
         * @param {proto.IuserFrameData} message userFrameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        userFrameData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a userFrameData message from the specified reader or buffer.
         * @function decode
         * @memberof proto.userFrameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.userFrameData} userFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        userFrameData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.userFrameData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int32();
                        break;
                    }
                case 2: {
                        message.data = $root.proto.frameData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a userFrameData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.userFrameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.userFrameData} userFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        userFrameData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a userFrameData message.
         * @function verify
         * @memberof proto.userFrameData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        userFrameData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.proto.frameData.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates a userFrameData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.userFrameData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.userFrameData} userFrameData
         */
        userFrameData.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.userFrameData)
                return object;
            var message = new $root.proto.userFrameData();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".proto.userFrameData.data: object expected");
                message.data = $root.proto.frameData.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a userFrameData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.userFrameData
         * @static
         * @param {proto.userFrameData} message userFrameData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        userFrameData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.data = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.proto.frameData.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this userFrameData to JSON.
         * @function toJSON
         * @memberof proto.userFrameData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        userFrameData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for userFrameData
         * @function getTypeUrl
         * @memberof proto.userFrameData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        userFrameData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.userFrameData";
        };

        return userFrameData;
    })();

    proto.frameDataGather = (function() {

        /**
         * Properties of a frameDataGather.
         * @memberof proto
         * @interface IframeDataGather
         * @property {number|null} [frameIndex] frameDataGather frameIndex
         * @property {number|Long|null} [frameAt] frameDataGather frameAt
         * @property {Array.<proto.IuserFrameData>|null} [frameData] frameDataGather frameData
         */

        /**
         * Constructs a new frameDataGather.
         * @memberof proto
         * @classdesc Represents a frameDataGather.
         * @implements IframeDataGather
         * @constructor
         * @param {proto.IframeDataGather=} [properties] Properties to set
         */
        function frameDataGather(properties) {
            this.frameData = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * frameDataGather frameIndex.
         * @member {number} frameIndex
         * @memberof proto.frameDataGather
         * @instance
         */
        frameDataGather.prototype.frameIndex = 0;

        /**
         * frameDataGather frameAt.
         * @member {number|Long} frameAt
         * @memberof proto.frameDataGather
         * @instance
         */
        frameDataGather.prototype.frameAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * frameDataGather frameData.
         * @member {Array.<proto.IuserFrameData>} frameData
         * @memberof proto.frameDataGather
         * @instance
         */
        frameDataGather.prototype.frameData = $util.emptyArray;

        /**
         * Creates a new frameDataGather instance using the specified properties.
         * @function create
         * @memberof proto.frameDataGather
         * @static
         * @param {proto.IframeDataGather=} [properties] Properties to set
         * @returns {proto.frameDataGather} frameDataGather instance
         */
        frameDataGather.create = function create(properties) {
            return new frameDataGather(properties);
        };

        /**
         * Encodes the specified frameDataGather message. Does not implicitly {@link proto.frameDataGather.verify|verify} messages.
         * @function encode
         * @memberof proto.frameDataGather
         * @static
         * @param {proto.IframeDataGather} message frameDataGather message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        frameDataGather.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.frameIndex != null && Object.hasOwnProperty.call(message, "frameIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.frameIndex);
            if (message.frameAt != null && Object.hasOwnProperty.call(message, "frameAt"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.frameAt);
            if (message.frameData != null && message.frameData.length)
                for (var i = 0; i < message.frameData.length; ++i)
                    $root.proto.userFrameData.encode(message.frameData[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified frameDataGather message, length delimited. Does not implicitly {@link proto.frameDataGather.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.frameDataGather
         * @static
         * @param {proto.IframeDataGather} message frameDataGather message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        frameDataGather.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a frameDataGather message from the specified reader or buffer.
         * @function decode
         * @memberof proto.frameDataGather
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.frameDataGather} frameDataGather
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        frameDataGather.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.frameDataGather();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.frameIndex = reader.int32();
                        break;
                    }
                case 2: {
                        message.frameAt = reader.int64();
                        break;
                    }
                case 3: {
                        if (!(message.frameData && message.frameData.length))
                            message.frameData = [];
                        message.frameData.push($root.proto.userFrameData.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a frameDataGather message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.frameDataGather
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.frameDataGather} frameDataGather
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        frameDataGather.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a frameDataGather message.
         * @function verify
         * @memberof proto.frameDataGather
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        frameDataGather.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.frameIndex != null && message.hasOwnProperty("frameIndex"))
                if (!$util.isInteger(message.frameIndex))
                    return "frameIndex: integer expected";
            if (message.frameAt != null && message.hasOwnProperty("frameAt"))
                if (!$util.isInteger(message.frameAt) && !(message.frameAt && $util.isInteger(message.frameAt.low) && $util.isInteger(message.frameAt.high)))
                    return "frameAt: integer|Long expected";
            if (message.frameData != null && message.hasOwnProperty("frameData")) {
                if (!Array.isArray(message.frameData))
                    return "frameData: array expected";
                for (var i = 0; i < message.frameData.length; ++i) {
                    var error = $root.proto.userFrameData.verify(message.frameData[i]);
                    if (error)
                        return "frameData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a frameDataGather message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.frameDataGather
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.frameDataGather} frameDataGather
         */
        frameDataGather.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.frameDataGather)
                return object;
            var message = new $root.proto.frameDataGather();
            if (object.frameIndex != null)
                message.frameIndex = object.frameIndex | 0;
            if (object.frameAt != null)
                if ($util.Long)
                    (message.frameAt = $util.Long.fromValue(object.frameAt)).unsigned = false;
                else if (typeof object.frameAt === "string")
                    message.frameAt = parseInt(object.frameAt, 10);
                else if (typeof object.frameAt === "number")
                    message.frameAt = object.frameAt;
                else if (typeof object.frameAt === "object")
                    message.frameAt = new $util.LongBits(object.frameAt.low >>> 0, object.frameAt.high >>> 0).toNumber();
            if (object.frameData) {
                if (!Array.isArray(object.frameData))
                    throw TypeError(".proto.frameDataGather.frameData: array expected");
                message.frameData = [];
                for (var i = 0; i < object.frameData.length; ++i) {
                    if (typeof object.frameData[i] !== "object")
                        throw TypeError(".proto.frameDataGather.frameData: object expected");
                    message.frameData[i] = $root.proto.userFrameData.fromObject(object.frameData[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a frameDataGather message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.frameDataGather
         * @static
         * @param {proto.frameDataGather} message frameDataGather
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        frameDataGather.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.frameData = [];
            if (options.defaults) {
                object.frameIndex = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.frameAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.frameAt = options.longs === String ? "0" : 0;
            }
            if (message.frameIndex != null && message.hasOwnProperty("frameIndex"))
                object.frameIndex = message.frameIndex;
            if (message.frameAt != null && message.hasOwnProperty("frameAt"))
                if (typeof message.frameAt === "number")
                    object.frameAt = options.longs === String ? String(message.frameAt) : message.frameAt;
                else
                    object.frameAt = options.longs === String ? $util.Long.prototype.toString.call(message.frameAt) : options.longs === Number ? new $util.LongBits(message.frameAt.low >>> 0, message.frameAt.high >>> 0).toNumber() : message.frameAt;
            if (message.frameData && message.frameData.length) {
                object.frameData = [];
                for (var j = 0; j < message.frameData.length; ++j)
                    object.frameData[j] = $root.proto.userFrameData.toObject(message.frameData[j], options);
            }
            return object;
        };

        /**
         * Converts this frameDataGather to JSON.
         * @function toJSON
         * @memberof proto.frameDataGather
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        frameDataGather.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for frameDataGather
         * @function getTypeUrl
         * @memberof proto.frameDataGather
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        frameDataGather.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.frameDataGather";
        };

        return frameDataGather;
    })();

    proto.battleFrameDataInputReq = (function() {

        /**
         * Properties of a battleFrameDataInputReq.
         * @memberof proto
         * @interface IbattleFrameDataInputReq
         * @property {number|null} [frameIndex] battleFrameDataInputReq frameIndex
         * @property {proto.IframeData|null} [data] battleFrameDataInputReq data
         */

        /**
         * Constructs a new battleFrameDataInputReq.
         * @memberof proto
         * @classdesc Represents a battleFrameDataInputReq.
         * @implements IbattleFrameDataInputReq
         * @constructor
         * @param {proto.IbattleFrameDataInputReq=} [properties] Properties to set
         */
        function battleFrameDataInputReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * battleFrameDataInputReq frameIndex.
         * @member {number} frameIndex
         * @memberof proto.battleFrameDataInputReq
         * @instance
         */
        battleFrameDataInputReq.prototype.frameIndex = 0;

        /**
         * battleFrameDataInputReq data.
         * @member {proto.IframeData|null|undefined} data
         * @memberof proto.battleFrameDataInputReq
         * @instance
         */
        battleFrameDataInputReq.prototype.data = null;

        /**
         * Creates a new battleFrameDataInputReq instance using the specified properties.
         * @function create
         * @memberof proto.battleFrameDataInputReq
         * @static
         * @param {proto.IbattleFrameDataInputReq=} [properties] Properties to set
         * @returns {proto.battleFrameDataInputReq} battleFrameDataInputReq instance
         */
        battleFrameDataInputReq.create = function create(properties) {
            return new battleFrameDataInputReq(properties);
        };

        /**
         * Encodes the specified battleFrameDataInputReq message. Does not implicitly {@link proto.battleFrameDataInputReq.verify|verify} messages.
         * @function encode
         * @memberof proto.battleFrameDataInputReq
         * @static
         * @param {proto.IbattleFrameDataInputReq} message battleFrameDataInputReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        battleFrameDataInputReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.frameIndex != null && Object.hasOwnProperty.call(message, "frameIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.frameIndex);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.proto.frameData.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified battleFrameDataInputReq message, length delimited. Does not implicitly {@link proto.battleFrameDataInputReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.battleFrameDataInputReq
         * @static
         * @param {proto.IbattleFrameDataInputReq} message battleFrameDataInputReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        battleFrameDataInputReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a battleFrameDataInputReq message from the specified reader or buffer.
         * @function decode
         * @memberof proto.battleFrameDataInputReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.battleFrameDataInputReq} battleFrameDataInputReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        battleFrameDataInputReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.battleFrameDataInputReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.frameIndex = reader.int32();
                        break;
                    }
                case 2: {
                        message.data = $root.proto.frameData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a battleFrameDataInputReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.battleFrameDataInputReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.battleFrameDataInputReq} battleFrameDataInputReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        battleFrameDataInputReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a battleFrameDataInputReq message.
         * @function verify
         * @memberof proto.battleFrameDataInputReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        battleFrameDataInputReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.frameIndex != null && message.hasOwnProperty("frameIndex"))
                if (!$util.isInteger(message.frameIndex))
                    return "frameIndex: integer expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.proto.frameData.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates a battleFrameDataInputReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.battleFrameDataInputReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.battleFrameDataInputReq} battleFrameDataInputReq
         */
        battleFrameDataInputReq.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.battleFrameDataInputReq)
                return object;
            var message = new $root.proto.battleFrameDataInputReq();
            if (object.frameIndex != null)
                message.frameIndex = object.frameIndex | 0;
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".proto.battleFrameDataInputReq.data: object expected");
                message.data = $root.proto.frameData.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a battleFrameDataInputReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.battleFrameDataInputReq
         * @static
         * @param {proto.battleFrameDataInputReq} message battleFrameDataInputReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        battleFrameDataInputReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.frameIndex = 0;
                object.data = null;
            }
            if (message.frameIndex != null && message.hasOwnProperty("frameIndex"))
                object.frameIndex = message.frameIndex;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.proto.frameData.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this battleFrameDataInputReq to JSON.
         * @function toJSON
         * @memberof proto.battleFrameDataInputReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        battleFrameDataInputReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for battleFrameDataInputReq
         * @function getTypeUrl
         * @memberof proto.battleFrameDataInputReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        battleFrameDataInputReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.battleFrameDataInputReq";
        };

        return battleFrameDataInputReq;
    })();

    proto.battleFrameResp = (function() {

        /**
         * Properties of a battleFrameResp.
         * @memberof proto
         * @interface IbattleFrameResp
         * @property {proto.RetCode|null} [code] battleFrameResp code
         * @property {proto.MsgId|null} [id] battleFrameResp id
         * @property {proto.IframeDataGather|null} [data] battleFrameResp data
         */

        /**
         * Constructs a new battleFrameResp.
         * @memberof proto
         * @classdesc Represents a battleFrameResp.
         * @implements IbattleFrameResp
         * @constructor
         * @param {proto.IbattleFrameResp=} [properties] Properties to set
         */
        function battleFrameResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * battleFrameResp code.
         * @member {proto.RetCode} code
         * @memberof proto.battleFrameResp
         * @instance
         */
        battleFrameResp.prototype.code = 0;

        /**
         * battleFrameResp id.
         * @member {proto.MsgId} id
         * @memberof proto.battleFrameResp
         * @instance
         */
        battleFrameResp.prototype.id = 0;

        /**
         * battleFrameResp data.
         * @member {proto.IframeDataGather|null|undefined} data
         * @memberof proto.battleFrameResp
         * @instance
         */
        battleFrameResp.prototype.data = null;

        /**
         * Creates a new battleFrameResp instance using the specified properties.
         * @function create
         * @memberof proto.battleFrameResp
         * @static
         * @param {proto.IbattleFrameResp=} [properties] Properties to set
         * @returns {proto.battleFrameResp} battleFrameResp instance
         */
        battleFrameResp.create = function create(properties) {
            return new battleFrameResp(properties);
        };

        /**
         * Encodes the specified battleFrameResp message. Does not implicitly {@link proto.battleFrameResp.verify|verify} messages.
         * @function encode
         * @memberof proto.battleFrameResp
         * @static
         * @param {proto.IbattleFrameResp} message battleFrameResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        battleFrameResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.proto.frameDataGather.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified battleFrameResp message, length delimited. Does not implicitly {@link proto.battleFrameResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.battleFrameResp
         * @static
         * @param {proto.IbattleFrameResp} message battleFrameResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        battleFrameResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a battleFrameResp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.battleFrameResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.battleFrameResp} battleFrameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        battleFrameResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.battleFrameResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.id = reader.int32();
                        break;
                    }
                case 3: {
                        message.data = $root.proto.frameDataGather.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a battleFrameResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.battleFrameResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.battleFrameResp} battleFrameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        battleFrameResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a battleFrameResp message.
         * @function verify
         * @memberof proto.battleFrameResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        battleFrameResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case -1:
                case -2:
                case -3:
                case -4:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                switch (message.id) {
                default:
                    return "id: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.proto.frameDataGather.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates a battleFrameResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.battleFrameResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.battleFrameResp} battleFrameResp
         */
        battleFrameResp.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.battleFrameResp)
                return object;
            var message = new $root.proto.battleFrameResp();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "FAIL":
            case -1:
                message.code = -1;
                break;
            case "NOTACCOUNT":
            case -2:
                message.code = -2;
                break;
            case "ACCOUNTEXIST":
            case -3:
                message.code = -3;
                break;
            case "ACCOUNTNAMEEXIST":
            case -4:
                message.code = -4;
                break;
            }
            switch (object.id) {
            default:
                if (typeof object.id === "number") {
                    message.id = object.id;
                    break;
                }
                break;
            case "ID_FAIL":
            case 0:
                message.id = 0;
                break;
            case "ID_UserReqister":
            case 1:
                message.id = 1;
                break;
            case "ID_UserLogin":
            case 2:
                message.id = 2;
                break;
            case "ID_HeroInfo":
            case 3:
                message.id = 3;
                break;
            case "ID_HeroSwitch":
            case 4:
                message.id = 4;
                break;
            case "ID_UserHeadChange":
            case 5:
                message.id = 5;
                break;
            case "ID_Matching":
            case 6:
                message.id = 6;
                break;
            case "ID_ClientReady":
            case 7:
                message.id = 7;
                break;
            case "ID_GameStartDownTime":
            case 8:
                message.id = 8;
                break;
            case "ID_GameStart":
            case 9:
                message.id = 9;
                break;
            case "ID_BattleFrameDataInput":
            case 10:
                message.id = 10;
                break;
            case "ID_BattleFrameDataUpdate":
            case 11:
                message.id = 11;
                break;
            case "ID_GET_BattleFrameData":
            case 12:
                message.id = 12;
                break;
            case "ID_Heartbeat":
            case 13:
                message.id = 13;
                break;
            }
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".proto.battleFrameResp.data: object expected");
                message.data = $root.proto.frameDataGather.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a battleFrameResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.battleFrameResp
         * @static
         * @param {proto.battleFrameResp} message battleFrameResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        battleFrameResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "SUCCESS" : 0;
                object.id = options.enums === String ? "ID_FAIL" : 0;
                object.data = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.proto.RetCode[message.code] === undefined ? message.code : $root.proto.RetCode[message.code] : message.code;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.enums === String ? $root.proto.MsgId[message.id] === undefined ? message.id : $root.proto.MsgId[message.id] : message.id;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.proto.frameDataGather.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this battleFrameResp to JSON.
         * @function toJSON
         * @memberof proto.battleFrameResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        battleFrameResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for battleFrameResp
         * @function getTypeUrl
         * @memberof proto.battleFrameResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        battleFrameResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.battleFrameResp";
        };

        return battleFrameResp;
    })();

    proto.getBattleFrameDataReq = (function() {

        /**
         * Properties of a getBattleFrameDataReq.
         * @memberof proto
         * @interface IgetBattleFrameDataReq
         * @property {number|null} [frameIndex] getBattleFrameDataReq frameIndex
         */

        /**
         * Constructs a new getBattleFrameDataReq.
         * @memberof proto
         * @classdesc Represents a getBattleFrameDataReq.
         * @implements IgetBattleFrameDataReq
         * @constructor
         * @param {proto.IgetBattleFrameDataReq=} [properties] Properties to set
         */
        function getBattleFrameDataReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * getBattleFrameDataReq frameIndex.
         * @member {number} frameIndex
         * @memberof proto.getBattleFrameDataReq
         * @instance
         */
        getBattleFrameDataReq.prototype.frameIndex = 0;

        /**
         * Creates a new getBattleFrameDataReq instance using the specified properties.
         * @function create
         * @memberof proto.getBattleFrameDataReq
         * @static
         * @param {proto.IgetBattleFrameDataReq=} [properties] Properties to set
         * @returns {proto.getBattleFrameDataReq} getBattleFrameDataReq instance
         */
        getBattleFrameDataReq.create = function create(properties) {
            return new getBattleFrameDataReq(properties);
        };

        /**
         * Encodes the specified getBattleFrameDataReq message. Does not implicitly {@link proto.getBattleFrameDataReq.verify|verify} messages.
         * @function encode
         * @memberof proto.getBattleFrameDataReq
         * @static
         * @param {proto.IgetBattleFrameDataReq} message getBattleFrameDataReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        getBattleFrameDataReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.frameIndex != null && Object.hasOwnProperty.call(message, "frameIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.frameIndex);
            return writer;
        };

        /**
         * Encodes the specified getBattleFrameDataReq message, length delimited. Does not implicitly {@link proto.getBattleFrameDataReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.getBattleFrameDataReq
         * @static
         * @param {proto.IgetBattleFrameDataReq} message getBattleFrameDataReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        getBattleFrameDataReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a getBattleFrameDataReq message from the specified reader or buffer.
         * @function decode
         * @memberof proto.getBattleFrameDataReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.getBattleFrameDataReq} getBattleFrameDataReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        getBattleFrameDataReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.getBattleFrameDataReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.frameIndex = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a getBattleFrameDataReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.getBattleFrameDataReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.getBattleFrameDataReq} getBattleFrameDataReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        getBattleFrameDataReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a getBattleFrameDataReq message.
         * @function verify
         * @memberof proto.getBattleFrameDataReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        getBattleFrameDataReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.frameIndex != null && message.hasOwnProperty("frameIndex"))
                if (!$util.isInteger(message.frameIndex))
                    return "frameIndex: integer expected";
            return null;
        };

        /**
         * Creates a getBattleFrameDataReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.getBattleFrameDataReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.getBattleFrameDataReq} getBattleFrameDataReq
         */
        getBattleFrameDataReq.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.getBattleFrameDataReq)
                return object;
            var message = new $root.proto.getBattleFrameDataReq();
            if (object.frameIndex != null)
                message.frameIndex = object.frameIndex | 0;
            return message;
        };

        /**
         * Creates a plain object from a getBattleFrameDataReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.getBattleFrameDataReq
         * @static
         * @param {proto.getBattleFrameDataReq} message getBattleFrameDataReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        getBattleFrameDataReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.frameIndex = 0;
            if (message.frameIndex != null && message.hasOwnProperty("frameIndex"))
                object.frameIndex = message.frameIndex;
            return object;
        };

        /**
         * Converts this getBattleFrameDataReq to JSON.
         * @function toJSON
         * @memberof proto.getBattleFrameDataReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        getBattleFrameDataReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for getBattleFrameDataReq
         * @function getTypeUrl
         * @memberof proto.getBattleFrameDataReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        getBattleFrameDataReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.getBattleFrameDataReq";
        };

        return getBattleFrameDataReq;
    })();

    proto.getBattleFrameDataResp = (function() {

        /**
         * Properties of a getBattleFrameDataResp.
         * @memberof proto
         * @interface IgetBattleFrameDataResp
         * @property {proto.RetCode|null} [code] getBattleFrameDataResp code
         * @property {proto.MsgId|null} [id] getBattleFrameDataResp id
         * @property {Array.<proto.IframeDataGather>|null} [data] getBattleFrameDataResp data
         */

        /**
         * Constructs a new getBattleFrameDataResp.
         * @memberof proto
         * @classdesc Represents a getBattleFrameDataResp.
         * @implements IgetBattleFrameDataResp
         * @constructor
         * @param {proto.IgetBattleFrameDataResp=} [properties] Properties to set
         */
        function getBattleFrameDataResp(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * getBattleFrameDataResp code.
         * @member {proto.RetCode} code
         * @memberof proto.getBattleFrameDataResp
         * @instance
         */
        getBattleFrameDataResp.prototype.code = 0;

        /**
         * getBattleFrameDataResp id.
         * @member {proto.MsgId} id
         * @memberof proto.getBattleFrameDataResp
         * @instance
         */
        getBattleFrameDataResp.prototype.id = 0;

        /**
         * getBattleFrameDataResp data.
         * @member {Array.<proto.IframeDataGather>} data
         * @memberof proto.getBattleFrameDataResp
         * @instance
         */
        getBattleFrameDataResp.prototype.data = $util.emptyArray;

        /**
         * Creates a new getBattleFrameDataResp instance using the specified properties.
         * @function create
         * @memberof proto.getBattleFrameDataResp
         * @static
         * @param {proto.IgetBattleFrameDataResp=} [properties] Properties to set
         * @returns {proto.getBattleFrameDataResp} getBattleFrameDataResp instance
         */
        getBattleFrameDataResp.create = function create(properties) {
            return new getBattleFrameDataResp(properties);
        };

        /**
         * Encodes the specified getBattleFrameDataResp message. Does not implicitly {@link proto.getBattleFrameDataResp.verify|verify} messages.
         * @function encode
         * @memberof proto.getBattleFrameDataResp
         * @static
         * @param {proto.IgetBattleFrameDataResp} message getBattleFrameDataResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        getBattleFrameDataResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.proto.frameDataGather.encode(message.data[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified getBattleFrameDataResp message, length delimited. Does not implicitly {@link proto.getBattleFrameDataResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.getBattleFrameDataResp
         * @static
         * @param {proto.IgetBattleFrameDataResp} message getBattleFrameDataResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        getBattleFrameDataResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a getBattleFrameDataResp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.getBattleFrameDataResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.getBattleFrameDataResp} getBattleFrameDataResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        getBattleFrameDataResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.getBattleFrameDataResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.id = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.data && message.data.length))
                            message.data = [];
                        message.data.push($root.proto.frameDataGather.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a getBattleFrameDataResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.getBattleFrameDataResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.getBattleFrameDataResp} getBattleFrameDataResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        getBattleFrameDataResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a getBattleFrameDataResp message.
         * @function verify
         * @memberof proto.getBattleFrameDataResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        getBattleFrameDataResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case -1:
                case -2:
                case -3:
                case -4:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                switch (message.id) {
                default:
                    return "id: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.proto.frameDataGather.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a getBattleFrameDataResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.getBattleFrameDataResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.getBattleFrameDataResp} getBattleFrameDataResp
         */
        getBattleFrameDataResp.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.getBattleFrameDataResp)
                return object;
            var message = new $root.proto.getBattleFrameDataResp();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "FAIL":
            case -1:
                message.code = -1;
                break;
            case "NOTACCOUNT":
            case -2:
                message.code = -2;
                break;
            case "ACCOUNTEXIST":
            case -3:
                message.code = -3;
                break;
            case "ACCOUNTNAMEEXIST":
            case -4:
                message.code = -4;
                break;
            }
            switch (object.id) {
            default:
                if (typeof object.id === "number") {
                    message.id = object.id;
                    break;
                }
                break;
            case "ID_FAIL":
            case 0:
                message.id = 0;
                break;
            case "ID_UserReqister":
            case 1:
                message.id = 1;
                break;
            case "ID_UserLogin":
            case 2:
                message.id = 2;
                break;
            case "ID_HeroInfo":
            case 3:
                message.id = 3;
                break;
            case "ID_HeroSwitch":
            case 4:
                message.id = 4;
                break;
            case "ID_UserHeadChange":
            case 5:
                message.id = 5;
                break;
            case "ID_Matching":
            case 6:
                message.id = 6;
                break;
            case "ID_ClientReady":
            case 7:
                message.id = 7;
                break;
            case "ID_GameStartDownTime":
            case 8:
                message.id = 8;
                break;
            case "ID_GameStart":
            case 9:
                message.id = 9;
                break;
            case "ID_BattleFrameDataInput":
            case 10:
                message.id = 10;
                break;
            case "ID_BattleFrameDataUpdate":
            case 11:
                message.id = 11;
                break;
            case "ID_GET_BattleFrameData":
            case 12:
                message.id = 12;
                break;
            case "ID_Heartbeat":
            case 13:
                message.id = 13;
                break;
            }
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".proto.getBattleFrameDataResp.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".proto.getBattleFrameDataResp.data: object expected");
                    message.data[i] = $root.proto.frameDataGather.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a getBattleFrameDataResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.getBattleFrameDataResp
         * @static
         * @param {proto.getBattleFrameDataResp} message getBattleFrameDataResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        getBattleFrameDataResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults) {
                object.code = options.enums === String ? "SUCCESS" : 0;
                object.id = options.enums === String ? "ID_FAIL" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.proto.RetCode[message.code] === undefined ? message.code : $root.proto.RetCode[message.code] : message.code;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.enums === String ? $root.proto.MsgId[message.id] === undefined ? message.id : $root.proto.MsgId[message.id] : message.id;
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.proto.frameDataGather.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this getBattleFrameDataResp to JSON.
         * @function toJSON
         * @memberof proto.getBattleFrameDataResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        getBattleFrameDataResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for getBattleFrameDataResp
         * @function getTypeUrl
         * @memberof proto.getBattleFrameDataResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        getBattleFrameDataResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.getBattleFrameDataResp";
        };

        return getBattleFrameDataResp;
    })();

    /**
     * RetCode enum.
     * @name proto.RetCode
     * @enum {number}
     * @property {number} SUCCESS=0 SUCCESS value
     * @property {number} FAIL=-1 FAIL value
     * @property {number} NOTACCOUNT=-2 NOTACCOUNT value
     * @property {number} ACCOUNTEXIST=-3 ACCOUNTEXIST value
     * @property {number} ACCOUNTNAMEEXIST=-4 ACCOUNTNAMEEXIST value
     */
    proto.RetCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SUCCESS"] = 0;
        values[valuesById[-1] = "FAIL"] = -1;
        values[valuesById[-2] = "NOTACCOUNT"] = -2;
        values[valuesById[-3] = "ACCOUNTEXIST"] = -3;
        values[valuesById[-4] = "ACCOUNTNAMEEXIST"] = -4;
        return values;
    })();

    /**
     * MsgId enum.
     * @name proto.MsgId
     * @enum {number}
     * @property {number} ID_FAIL=0 ID_FAIL value
     * @property {number} ID_UserReqister=1 ID_UserReqister value
     * @property {number} ID_UserLogin=2 ID_UserLogin value
     * @property {number} ID_HeroInfo=3 ID_HeroInfo value
     * @property {number} ID_HeroSwitch=4 ID_HeroSwitch value
     * @property {number} ID_UserHeadChange=5 ID_UserHeadChange value
     * @property {number} ID_Matching=6 ID_Matching value
     * @property {number} ID_ClientReady=7 ID_ClientReady value
     * @property {number} ID_GameStartDownTime=8 ID_GameStartDownTime value
     * @property {number} ID_GameStart=9 ID_GameStart value
     * @property {number} ID_BattleFrameDataInput=10 ID_BattleFrameDataInput value
     * @property {number} ID_BattleFrameDataUpdate=11 ID_BattleFrameDataUpdate value
     * @property {number} ID_GET_BattleFrameData=12 ID_GET_BattleFrameData value
     * @property {number} ID_Heartbeat=13 ID_Heartbeat value
     */
    proto.MsgId = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ID_FAIL"] = 0;
        values[valuesById[1] = "ID_UserReqister"] = 1;
        values[valuesById[2] = "ID_UserLogin"] = 2;
        values[valuesById[3] = "ID_HeroInfo"] = 3;
        values[valuesById[4] = "ID_HeroSwitch"] = 4;
        values[valuesById[5] = "ID_UserHeadChange"] = 5;
        values[valuesById[6] = "ID_Matching"] = 6;
        values[valuesById[7] = "ID_ClientReady"] = 7;
        values[valuesById[8] = "ID_GameStartDownTime"] = 8;
        values[valuesById[9] = "ID_GameStart"] = 9;
        values[valuesById[10] = "ID_BattleFrameDataInput"] = 10;
        values[valuesById[11] = "ID_BattleFrameDataUpdate"] = 11;
        values[valuesById[12] = "ID_GET_BattleFrameData"] = 12;
        values[valuesById[13] = "ID_Heartbeat"] = 13;
        return values;
    })();

    /**
     * battleOpType enum.
     * @name proto.battleOpType
     * @enum {number}
     * @property {number} move=0 move value
     */
    proto.battleOpType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "move"] = 0;
        return values;
    })();

    proto.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof proto
         * @interface IUserInfo
         * @property {number|null} [id] UserInfo id
         * @property {string|null} [userName] UserInfo userName
         * @property {number|null} [createTime] UserInfo createTime
         * @property {string|null} [account] UserInfo account
         * @property {string|null} [head] UserInfo head
         * @property {string|null} [password] UserInfo password
         */

        /**
         * Constructs a new UserInfo.
         * @memberof proto
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {proto.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo id.
         * @member {number} id
         * @memberof proto.UserInfo
         * @instance
         */
        UserInfo.prototype.id = 0;

        /**
         * UserInfo userName.
         * @member {string} userName
         * @memberof proto.UserInfo
         * @instance
         */
        UserInfo.prototype.userName = "";

        /**
         * UserInfo createTime.
         * @member {number} createTime
         * @memberof proto.UserInfo
         * @instance
         */
        UserInfo.prototype.createTime = 0;

        /**
         * UserInfo account.
         * @member {string} account
         * @memberof proto.UserInfo
         * @instance
         */
        UserInfo.prototype.account = "";

        /**
         * UserInfo head.
         * @member {string} head
         * @memberof proto.UserInfo
         * @instance
         */
        UserInfo.prototype.head = "";

        /**
         * UserInfo password.
         * @member {string} password
         * @memberof proto.UserInfo
         * @instance
         */
        UserInfo.prototype.password = "";

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof proto.UserInfo
         * @static
         * @param {proto.IUserInfo=} [properties] Properties to set
         * @returns {proto.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link proto.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.UserInfo
         * @static
         * @param {proto.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.createTime);
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.account);
            if (message.head != null && Object.hasOwnProperty.call(message, "head"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.head);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link proto.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.UserInfo
         * @static
         * @param {proto.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.userName = reader.string();
                        break;
                    }
                case 3: {
                        message.createTime = reader.int32();
                        break;
                    }
                case 4: {
                        message.account = reader.string();
                        break;
                    }
                case 5: {
                        message.head = reader.string();
                        break;
                    }
                case 6: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof proto.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime))
                    return "createTime: integer expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.head != null && message.hasOwnProperty("head"))
                if (!$util.isString(message.head))
                    return "head: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.UserInfo)
                return object;
            var message = new $root.proto.UserInfo();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.createTime != null)
                message.createTime = object.createTime | 0;
            if (object.account != null)
                message.account = String(object.account);
            if (object.head != null)
                message.head = String(object.head);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.UserInfo
         * @static
         * @param {proto.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.userName = "";
                object.createTime = 0;
                object.account = "";
                object.head = "";
                object.password = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                object.createTime = message.createTime;
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.head != null && message.hasOwnProperty("head"))
                object.head = message.head;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof proto.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserInfo
         * @function getTypeUrl
         * @memberof proto.UserInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.UserInfo";
        };

        return UserInfo;
    })();

    proto.CommonResp = (function() {

        /**
         * Properties of a CommonResp.
         * @memberof proto
         * @interface ICommonResp
         * @property {proto.RetCode|null} [code] CommonResp code
         */

        /**
         * Constructs a new CommonResp.
         * @memberof proto
         * @classdesc Represents a CommonResp.
         * @implements ICommonResp
         * @constructor
         * @param {proto.ICommonResp=} [properties] Properties to set
         */
        function CommonResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonResp code.
         * @member {proto.RetCode} code
         * @memberof proto.CommonResp
         * @instance
         */
        CommonResp.prototype.code = 0;

        /**
         * Creates a new CommonResp instance using the specified properties.
         * @function create
         * @memberof proto.CommonResp
         * @static
         * @param {proto.ICommonResp=} [properties] Properties to set
         * @returns {proto.CommonResp} CommonResp instance
         */
        CommonResp.create = function create(properties) {
            return new CommonResp(properties);
        };

        /**
         * Encodes the specified CommonResp message. Does not implicitly {@link proto.CommonResp.verify|verify} messages.
         * @function encode
         * @memberof proto.CommonResp
         * @static
         * @param {proto.ICommonResp} message CommonResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified CommonResp message, length delimited. Does not implicitly {@link proto.CommonResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.CommonResp
         * @static
         * @param {proto.ICommonResp} message CommonResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonResp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CommonResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.CommonResp} CommonResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CommonResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.CommonResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.CommonResp} CommonResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonResp message.
         * @function verify
         * @memberof proto.CommonResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case -1:
                case -2:
                case -3:
                case -4:
                    break;
                }
            return null;
        };

        /**
         * Creates a CommonResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.CommonResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.CommonResp} CommonResp
         */
        CommonResp.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.CommonResp)
                return object;
            var message = new $root.proto.CommonResp();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "FAIL":
            case -1:
                message.code = -1;
                break;
            case "NOTACCOUNT":
            case -2:
                message.code = -2;
                break;
            case "ACCOUNTEXIST":
            case -3:
                message.code = -3;
                break;
            case "ACCOUNTNAMEEXIST":
            case -4:
                message.code = -4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CommonResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.CommonResp
         * @static
         * @param {proto.CommonResp} message CommonResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.code = options.enums === String ? "SUCCESS" : 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.proto.RetCode[message.code] === undefined ? message.code : $root.proto.RetCode[message.code] : message.code;
            return object;
        };

        /**
         * Converts this CommonResp to JSON.
         * @function toJSON
         * @memberof proto.CommonResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CommonResp
         * @function getTypeUrl
         * @memberof proto.CommonResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CommonResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.CommonResp";
        };

        return CommonResp;
    })();

    proto.CommonReq = (function() {

        /**
         * Properties of a CommonReq.
         * @memberof proto
         * @interface ICommonReq
         */

        /**
         * Constructs a new CommonReq.
         * @memberof proto
         * @classdesc Represents a CommonReq.
         * @implements ICommonReq
         * @constructor
         * @param {proto.ICommonReq=} [properties] Properties to set
         */
        function CommonReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CommonReq instance using the specified properties.
         * @function create
         * @memberof proto.CommonReq
         * @static
         * @param {proto.ICommonReq=} [properties] Properties to set
         * @returns {proto.CommonReq} CommonReq instance
         */
        CommonReq.create = function create(properties) {
            return new CommonReq(properties);
        };

        /**
         * Encodes the specified CommonReq message. Does not implicitly {@link proto.CommonReq.verify|verify} messages.
         * @function encode
         * @memberof proto.CommonReq
         * @static
         * @param {proto.ICommonReq} message CommonReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CommonReq message, length delimited. Does not implicitly {@link proto.CommonReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.CommonReq
         * @static
         * @param {proto.ICommonReq} message CommonReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonReq message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CommonReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.CommonReq} CommonReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CommonReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.CommonReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.CommonReq} CommonReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonReq message.
         * @function verify
         * @memberof proto.CommonReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CommonReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.CommonReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.CommonReq} CommonReq
         */
        CommonReq.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.CommonReq)
                return object;
            return new $root.proto.CommonReq();
        };

        /**
         * Creates a plain object from a CommonReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.CommonReq
         * @static
         * @param {proto.CommonReq} message CommonReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CommonReq to JSON.
         * @function toJSON
         * @memberof proto.CommonReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CommonReq
         * @function getTypeUrl
         * @memberof proto.CommonReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CommonReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.CommonReq";
        };

        return CommonReq;
    })();

    proto.CommonFailResp = (function() {

        /**
         * Properties of a CommonFailResp.
         * @memberof proto
         * @interface ICommonFailResp
         * @property {proto.MsgId|null} [id] CommonFailResp id
         * @property {proto.RetCode|null} [code] CommonFailResp code
         * @property {string|null} [message] CommonFailResp message
         */

        /**
         * Constructs a new CommonFailResp.
         * @memberof proto
         * @classdesc Represents a CommonFailResp.
         * @implements ICommonFailResp
         * @constructor
         * @param {proto.ICommonFailResp=} [properties] Properties to set
         */
        function CommonFailResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonFailResp id.
         * @member {proto.MsgId} id
         * @memberof proto.CommonFailResp
         * @instance
         */
        CommonFailResp.prototype.id = 0;

        /**
         * CommonFailResp code.
         * @member {proto.RetCode} code
         * @memberof proto.CommonFailResp
         * @instance
         */
        CommonFailResp.prototype.code = 0;

        /**
         * CommonFailResp message.
         * @member {string} message
         * @memberof proto.CommonFailResp
         * @instance
         */
        CommonFailResp.prototype.message = "";

        /**
         * Creates a new CommonFailResp instance using the specified properties.
         * @function create
         * @memberof proto.CommonFailResp
         * @static
         * @param {proto.ICommonFailResp=} [properties] Properties to set
         * @returns {proto.CommonFailResp} CommonFailResp instance
         */
        CommonFailResp.create = function create(properties) {
            return new CommonFailResp(properties);
        };

        /**
         * Encodes the specified CommonFailResp message. Does not implicitly {@link proto.CommonFailResp.verify|verify} messages.
         * @function encode
         * @memberof proto.CommonFailResp
         * @static
         * @param {proto.ICommonFailResp} message CommonFailResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonFailResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified CommonFailResp message, length delimited. Does not implicitly {@link proto.CommonFailResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.CommonFailResp
         * @static
         * @param {proto.ICommonFailResp} message CommonFailResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonFailResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonFailResp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CommonFailResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.CommonFailResp} CommonFailResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonFailResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CommonFailResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.code = reader.int32();
                        break;
                    }
                case 3: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonFailResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.CommonFailResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.CommonFailResp} CommonFailResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonFailResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonFailResp message.
         * @function verify
         * @memberof proto.CommonFailResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonFailResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                switch (message.id) {
                default:
                    return "id: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case -1:
                case -2:
                case -3:
                case -4:
                    break;
                }
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a CommonFailResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.CommonFailResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.CommonFailResp} CommonFailResp
         */
        CommonFailResp.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.CommonFailResp)
                return object;
            var message = new $root.proto.CommonFailResp();
            switch (object.id) {
            default:
                if (typeof object.id === "number") {
                    message.id = object.id;
                    break;
                }
                break;
            case "ID_FAIL":
            case 0:
                message.id = 0;
                break;
            case "ID_UserReqister":
            case 1:
                message.id = 1;
                break;
            case "ID_UserLogin":
            case 2:
                message.id = 2;
                break;
            case "ID_HeroInfo":
            case 3:
                message.id = 3;
                break;
            case "ID_HeroSwitch":
            case 4:
                message.id = 4;
                break;
            case "ID_UserHeadChange":
            case 5:
                message.id = 5;
                break;
            case "ID_Matching":
            case 6:
                message.id = 6;
                break;
            case "ID_ClientReady":
            case 7:
                message.id = 7;
                break;
            case "ID_GameStartDownTime":
            case 8:
                message.id = 8;
                break;
            case "ID_GameStart":
            case 9:
                message.id = 9;
                break;
            case "ID_BattleFrameDataInput":
            case 10:
                message.id = 10;
                break;
            case "ID_BattleFrameDataUpdate":
            case 11:
                message.id = 11;
                break;
            case "ID_GET_BattleFrameData":
            case 12:
                message.id = 12;
                break;
            case "ID_Heartbeat":
            case 13:
                message.id = 13;
                break;
            }
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "FAIL":
            case -1:
                message.code = -1;
                break;
            case "NOTACCOUNT":
            case -2:
                message.code = -2;
                break;
            case "ACCOUNTEXIST":
            case -3:
                message.code = -3;
                break;
            case "ACCOUNTNAMEEXIST":
            case -4:
                message.code = -4;
                break;
            }
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a CommonFailResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.CommonFailResp
         * @static
         * @param {proto.CommonFailResp} message CommonFailResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonFailResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = options.enums === String ? "ID_FAIL" : 0;
                object.code = options.enums === String ? "SUCCESS" : 0;
                object.message = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.enums === String ? $root.proto.MsgId[message.id] === undefined ? message.id : $root.proto.MsgId[message.id] : message.id;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.proto.RetCode[message.code] === undefined ? message.code : $root.proto.RetCode[message.code] : message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this CommonFailResp to JSON.
         * @function toJSON
         * @memberof proto.CommonFailResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonFailResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CommonFailResp
         * @function getTypeUrl
         * @memberof proto.CommonFailResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CommonFailResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.CommonFailResp";
        };

        return CommonFailResp;
    })();

    proto.HeartbeatReq = (function() {

        /**
         * Properties of a HeartbeatReq.
         * @memberof proto
         * @interface IHeartbeatReq
         */

        /**
         * Constructs a new HeartbeatReq.
         * @memberof proto
         * @classdesc Represents a HeartbeatReq.
         * @implements IHeartbeatReq
         * @constructor
         * @param {proto.IHeartbeatReq=} [properties] Properties to set
         */
        function HeartbeatReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new HeartbeatReq instance using the specified properties.
         * @function create
         * @memberof proto.HeartbeatReq
         * @static
         * @param {proto.IHeartbeatReq=} [properties] Properties to set
         * @returns {proto.HeartbeatReq} HeartbeatReq instance
         */
        HeartbeatReq.create = function create(properties) {
            return new HeartbeatReq(properties);
        };

        /**
         * Encodes the specified HeartbeatReq message. Does not implicitly {@link proto.HeartbeatReq.verify|verify} messages.
         * @function encode
         * @memberof proto.HeartbeatReq
         * @static
         * @param {proto.IHeartbeatReq} message HeartbeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified HeartbeatReq message, length delimited. Does not implicitly {@link proto.HeartbeatReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.HeartbeatReq
         * @static
         * @param {proto.IHeartbeatReq} message HeartbeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatReq message from the specified reader or buffer.
         * @function decode
         * @memberof proto.HeartbeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.HeartbeatReq} HeartbeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HeartbeatReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartbeatReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.HeartbeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.HeartbeatReq} HeartbeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatReq message.
         * @function verify
         * @memberof proto.HeartbeatReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a HeartbeatReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.HeartbeatReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.HeartbeatReq} HeartbeatReq
         */
        HeartbeatReq.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.HeartbeatReq)
                return object;
            return new $root.proto.HeartbeatReq();
        };

        /**
         * Creates a plain object from a HeartbeatReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.HeartbeatReq
         * @static
         * @param {proto.HeartbeatReq} message HeartbeatReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this HeartbeatReq to JSON.
         * @function toJSON
         * @memberof proto.HeartbeatReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeartbeatReq
         * @function getTypeUrl
         * @memberof proto.HeartbeatReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeartbeatReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.HeartbeatReq";
        };

        return HeartbeatReq;
    })();

    proto.HeartbeatResp = (function() {

        /**
         * Properties of a HeartbeatResp.
         * @memberof proto
         * @interface IHeartbeatResp
         * @property {proto.RetCode|null} [code] HeartbeatResp code
         * @property {proto.MsgId|null} [id] HeartbeatResp id
         */

        /**
         * Constructs a new HeartbeatResp.
         * @memberof proto
         * @classdesc Represents a HeartbeatResp.
         * @implements IHeartbeatResp
         * @constructor
         * @param {proto.IHeartbeatResp=} [properties] Properties to set
         */
        function HeartbeatResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartbeatResp code.
         * @member {proto.RetCode} code
         * @memberof proto.HeartbeatResp
         * @instance
         */
        HeartbeatResp.prototype.code = 0;

        /**
         * HeartbeatResp id.
         * @member {proto.MsgId} id
         * @memberof proto.HeartbeatResp
         * @instance
         */
        HeartbeatResp.prototype.id = 0;

        /**
         * Creates a new HeartbeatResp instance using the specified properties.
         * @function create
         * @memberof proto.HeartbeatResp
         * @static
         * @param {proto.IHeartbeatResp=} [properties] Properties to set
         * @returns {proto.HeartbeatResp} HeartbeatResp instance
         */
        HeartbeatResp.create = function create(properties) {
            return new HeartbeatResp(properties);
        };

        /**
         * Encodes the specified HeartbeatResp message. Does not implicitly {@link proto.HeartbeatResp.verify|verify} messages.
         * @function encode
         * @memberof proto.HeartbeatResp
         * @static
         * @param {proto.IHeartbeatResp} message HeartbeatResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified HeartbeatResp message, length delimited. Does not implicitly {@link proto.HeartbeatResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.HeartbeatResp
         * @static
         * @param {proto.IHeartbeatResp} message HeartbeatResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatResp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.HeartbeatResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.HeartbeatResp} HeartbeatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HeartbeatResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.id = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartbeatResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.HeartbeatResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.HeartbeatResp} HeartbeatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatResp message.
         * @function verify
         * @memberof proto.HeartbeatResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case -1:
                case -2:
                case -3:
                case -4:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                switch (message.id) {
                default:
                    return "id: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            return null;
        };

        /**
         * Creates a HeartbeatResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.HeartbeatResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.HeartbeatResp} HeartbeatResp
         */
        HeartbeatResp.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.HeartbeatResp)
                return object;
            var message = new $root.proto.HeartbeatResp();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "FAIL":
            case -1:
                message.code = -1;
                break;
            case "NOTACCOUNT":
            case -2:
                message.code = -2;
                break;
            case "ACCOUNTEXIST":
            case -3:
                message.code = -3;
                break;
            case "ACCOUNTNAMEEXIST":
            case -4:
                message.code = -4;
                break;
            }
            switch (object.id) {
            default:
                if (typeof object.id === "number") {
                    message.id = object.id;
                    break;
                }
                break;
            case "ID_FAIL":
            case 0:
                message.id = 0;
                break;
            case "ID_UserReqister":
            case 1:
                message.id = 1;
                break;
            case "ID_UserLogin":
            case 2:
                message.id = 2;
                break;
            case "ID_HeroInfo":
            case 3:
                message.id = 3;
                break;
            case "ID_HeroSwitch":
            case 4:
                message.id = 4;
                break;
            case "ID_UserHeadChange":
            case 5:
                message.id = 5;
                break;
            case "ID_Matching":
            case 6:
                message.id = 6;
                break;
            case "ID_ClientReady":
            case 7:
                message.id = 7;
                break;
            case "ID_GameStartDownTime":
            case 8:
                message.id = 8;
                break;
            case "ID_GameStart":
            case 9:
                message.id = 9;
                break;
            case "ID_BattleFrameDataInput":
            case 10:
                message.id = 10;
                break;
            case "ID_BattleFrameDataUpdate":
            case 11:
                message.id = 11;
                break;
            case "ID_GET_BattleFrameData":
            case 12:
                message.id = 12;
                break;
            case "ID_Heartbeat":
            case 13:
                message.id = 13;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a HeartbeatResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.HeartbeatResp
         * @static
         * @param {proto.HeartbeatResp} message HeartbeatResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "SUCCESS" : 0;
                object.id = options.enums === String ? "ID_FAIL" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.proto.RetCode[message.code] === undefined ? message.code : $root.proto.RetCode[message.code] : message.code;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.enums === String ? $root.proto.MsgId[message.id] === undefined ? message.id : $root.proto.MsgId[message.id] : message.id;
            return object;
        };

        /**
         * Converts this HeartbeatResp to JSON.
         * @function toJSON
         * @memberof proto.HeartbeatResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeartbeatResp
         * @function getTypeUrl
         * @memberof proto.HeartbeatResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeartbeatResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.HeartbeatResp";
        };

        return HeartbeatResp;
    })();

    proto.HeroInfo = (function() {

        /**
         * Properties of a HeroInfo.
         * @memberof proto
         * @interface IHeroInfo
         * @property {string|null} [heroId] HeroInfo heroId
         */

        /**
         * Constructs a new HeroInfo.
         * @memberof proto
         * @classdesc Represents a HeroInfo.
         * @implements IHeroInfo
         * @constructor
         * @param {proto.IHeroInfo=} [properties] Properties to set
         */
        function HeroInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroInfo heroId.
         * @member {string} heroId
         * @memberof proto.HeroInfo
         * @instance
         */
        HeroInfo.prototype.heroId = "";

        /**
         * Creates a new HeroInfo instance using the specified properties.
         * @function create
         * @memberof proto.HeroInfo
         * @static
         * @param {proto.IHeroInfo=} [properties] Properties to set
         * @returns {proto.HeroInfo} HeroInfo instance
         */
        HeroInfo.create = function create(properties) {
            return new HeroInfo(properties);
        };

        /**
         * Encodes the specified HeroInfo message. Does not implicitly {@link proto.HeroInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.HeroInfo
         * @static
         * @param {proto.IHeroInfo} message HeroInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroId != null && Object.hasOwnProperty.call(message, "heroId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.heroId);
            return writer;
        };

        /**
         * Encodes the specified HeroInfo message, length delimited. Does not implicitly {@link proto.HeroInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.HeroInfo
         * @static
         * @param {proto.IHeroInfo} message HeroInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.HeroInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.HeroInfo} HeroInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HeroInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.heroId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.HeroInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.HeroInfo} HeroInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroInfo message.
         * @function verify
         * @memberof proto.HeroInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                if (!$util.isString(message.heroId))
                    return "heroId: string expected";
            return null;
        };

        /**
         * Creates a HeroInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.HeroInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.HeroInfo} HeroInfo
         */
        HeroInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.HeroInfo)
                return object;
            var message = new $root.proto.HeroInfo();
            if (object.heroId != null)
                message.heroId = String(object.heroId);
            return message;
        };

        /**
         * Creates a plain object from a HeroInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.HeroInfo
         * @static
         * @param {proto.HeroInfo} message HeroInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.heroId = "";
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                object.heroId = message.heroId;
            return object;
        };

        /**
         * Converts this HeroInfo to JSON.
         * @function toJSON
         * @memberof proto.HeroInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroInfo
         * @function getTypeUrl
         * @memberof proto.HeroInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.HeroInfo";
        };

        return HeroInfo;
    })();

    proto.HeroInfoReq = (function() {

        /**
         * Properties of a HeroInfoReq.
         * @memberof proto
         * @interface IHeroInfoReq
         */

        /**
         * Constructs a new HeroInfoReq.
         * @memberof proto
         * @classdesc Represents a HeroInfoReq.
         * @implements IHeroInfoReq
         * @constructor
         * @param {proto.IHeroInfoReq=} [properties] Properties to set
         */
        function HeroInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new HeroInfoReq instance using the specified properties.
         * @function create
         * @memberof proto.HeroInfoReq
         * @static
         * @param {proto.IHeroInfoReq=} [properties] Properties to set
         * @returns {proto.HeroInfoReq} HeroInfoReq instance
         */
        HeroInfoReq.create = function create(properties) {
            return new HeroInfoReq(properties);
        };

        /**
         * Encodes the specified HeroInfoReq message. Does not implicitly {@link proto.HeroInfoReq.verify|verify} messages.
         * @function encode
         * @memberof proto.HeroInfoReq
         * @static
         * @param {proto.IHeroInfoReq} message HeroInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified HeroInfoReq message, length delimited. Does not implicitly {@link proto.HeroInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.HeroInfoReq
         * @static
         * @param {proto.IHeroInfoReq} message HeroInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof proto.HeroInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.HeroInfoReq} HeroInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroInfoReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HeroInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.HeroInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.HeroInfoReq} HeroInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroInfoReq message.
         * @function verify
         * @memberof proto.HeroInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a HeroInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.HeroInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.HeroInfoReq} HeroInfoReq
         */
        HeroInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.HeroInfoReq)
                return object;
            return new $root.proto.HeroInfoReq();
        };

        /**
         * Creates a plain object from a HeroInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.HeroInfoReq
         * @static
         * @param {proto.HeroInfoReq} message HeroInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroInfoReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this HeroInfoReq to JSON.
         * @function toJSON
         * @memberof proto.HeroInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroInfoReq
         * @function getTypeUrl
         * @memberof proto.HeroInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.HeroInfoReq";
        };

        return HeroInfoReq;
    })();

    proto.HeroInfoResp = (function() {

        /**
         * Properties of a HeroInfoResp.
         * @memberof proto
         * @interface IHeroInfoResp
         * @property {proto.RetCode|null} [code] HeroInfoResp code
         * @property {proto.MsgId|null} [id] HeroInfoResp id
         * @property {proto.IHeroInfo|null} [heroInfo] HeroInfoResp heroInfo
         */

        /**
         * Constructs a new HeroInfoResp.
         * @memberof proto
         * @classdesc Represents a HeroInfoResp.
         * @implements IHeroInfoResp
         * @constructor
         * @param {proto.IHeroInfoResp=} [properties] Properties to set
         */
        function HeroInfoResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroInfoResp code.
         * @member {proto.RetCode} code
         * @memberof proto.HeroInfoResp
         * @instance
         */
        HeroInfoResp.prototype.code = 0;

        /**
         * HeroInfoResp id.
         * @member {proto.MsgId} id
         * @memberof proto.HeroInfoResp
         * @instance
         */
        HeroInfoResp.prototype.id = 0;

        /**
         * HeroInfoResp heroInfo.
         * @member {proto.IHeroInfo|null|undefined} heroInfo
         * @memberof proto.HeroInfoResp
         * @instance
         */
        HeroInfoResp.prototype.heroInfo = null;

        /**
         * Creates a new HeroInfoResp instance using the specified properties.
         * @function create
         * @memberof proto.HeroInfoResp
         * @static
         * @param {proto.IHeroInfoResp=} [properties] Properties to set
         * @returns {proto.HeroInfoResp} HeroInfoResp instance
         */
        HeroInfoResp.create = function create(properties) {
            return new HeroInfoResp(properties);
        };

        /**
         * Encodes the specified HeroInfoResp message. Does not implicitly {@link proto.HeroInfoResp.verify|verify} messages.
         * @function encode
         * @memberof proto.HeroInfoResp
         * @static
         * @param {proto.IHeroInfoResp} message HeroInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroInfoResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.heroInfo != null && Object.hasOwnProperty.call(message, "heroInfo"))
                $root.proto.HeroInfo.encode(message.heroInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroInfoResp message, length delimited. Does not implicitly {@link proto.HeroInfoResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.HeroInfoResp
         * @static
         * @param {proto.IHeroInfoResp} message HeroInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroInfoResp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.HeroInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.HeroInfoResp} HeroInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroInfoResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HeroInfoResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.id = reader.int32();
                        break;
                    }
                case 3: {
                        message.heroInfo = $root.proto.HeroInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroInfoResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.HeroInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.HeroInfoResp} HeroInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroInfoResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroInfoResp message.
         * @function verify
         * @memberof proto.HeroInfoResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroInfoResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case -1:
                case -2:
                case -3:
                case -4:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                switch (message.id) {
                default:
                    return "id: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            if (message.heroInfo != null && message.hasOwnProperty("heroInfo")) {
                var error = $root.proto.HeroInfo.verify(message.heroInfo);
                if (error)
                    return "heroInfo." + error;
            }
            return null;
        };

        /**
         * Creates a HeroInfoResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.HeroInfoResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.HeroInfoResp} HeroInfoResp
         */
        HeroInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.HeroInfoResp)
                return object;
            var message = new $root.proto.HeroInfoResp();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "FAIL":
            case -1:
                message.code = -1;
                break;
            case "NOTACCOUNT":
            case -2:
                message.code = -2;
                break;
            case "ACCOUNTEXIST":
            case -3:
                message.code = -3;
                break;
            case "ACCOUNTNAMEEXIST":
            case -4:
                message.code = -4;
                break;
            }
            switch (object.id) {
            default:
                if (typeof object.id === "number") {
                    message.id = object.id;
                    break;
                }
                break;
            case "ID_FAIL":
            case 0:
                message.id = 0;
                break;
            case "ID_UserReqister":
            case 1:
                message.id = 1;
                break;
            case "ID_UserLogin":
            case 2:
                message.id = 2;
                break;
            case "ID_HeroInfo":
            case 3:
                message.id = 3;
                break;
            case "ID_HeroSwitch":
            case 4:
                message.id = 4;
                break;
            case "ID_UserHeadChange":
            case 5:
                message.id = 5;
                break;
            case "ID_Matching":
            case 6:
                message.id = 6;
                break;
            case "ID_ClientReady":
            case 7:
                message.id = 7;
                break;
            case "ID_GameStartDownTime":
            case 8:
                message.id = 8;
                break;
            case "ID_GameStart":
            case 9:
                message.id = 9;
                break;
            case "ID_BattleFrameDataInput":
            case 10:
                message.id = 10;
                break;
            case "ID_BattleFrameDataUpdate":
            case 11:
                message.id = 11;
                break;
            case "ID_GET_BattleFrameData":
            case 12:
                message.id = 12;
                break;
            case "ID_Heartbeat":
            case 13:
                message.id = 13;
                break;
            }
            if (object.heroInfo != null) {
                if (typeof object.heroInfo !== "object")
                    throw TypeError(".proto.HeroInfoResp.heroInfo: object expected");
                message.heroInfo = $root.proto.HeroInfo.fromObject(object.heroInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroInfoResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.HeroInfoResp
         * @static
         * @param {proto.HeroInfoResp} message HeroInfoResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroInfoResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "SUCCESS" : 0;
                object.id = options.enums === String ? "ID_FAIL" : 0;
                object.heroInfo = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.proto.RetCode[message.code] === undefined ? message.code : $root.proto.RetCode[message.code] : message.code;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.enums === String ? $root.proto.MsgId[message.id] === undefined ? message.id : $root.proto.MsgId[message.id] : message.id;
            if (message.heroInfo != null && message.hasOwnProperty("heroInfo"))
                object.heroInfo = $root.proto.HeroInfo.toObject(message.heroInfo, options);
            return object;
        };

        /**
         * Converts this HeroInfoResp to JSON.
         * @function toJSON
         * @memberof proto.HeroInfoResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroInfoResp
         * @function getTypeUrl
         * @memberof proto.HeroInfoResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroInfoResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.HeroInfoResp";
        };

        return HeroInfoResp;
    })();

    proto.HeroSwitchReq = (function() {

        /**
         * Properties of a HeroSwitchReq.
         * @memberof proto
         * @interface IHeroSwitchReq
         * @property {string|null} [heroId] HeroSwitchReq heroId
         */

        /**
         * Constructs a new HeroSwitchReq.
         * @memberof proto
         * @classdesc Represents a HeroSwitchReq.
         * @implements IHeroSwitchReq
         * @constructor
         * @param {proto.IHeroSwitchReq=} [properties] Properties to set
         */
        function HeroSwitchReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroSwitchReq heroId.
         * @member {string} heroId
         * @memberof proto.HeroSwitchReq
         * @instance
         */
        HeroSwitchReq.prototype.heroId = "";

        /**
         * Creates a new HeroSwitchReq instance using the specified properties.
         * @function create
         * @memberof proto.HeroSwitchReq
         * @static
         * @param {proto.IHeroSwitchReq=} [properties] Properties to set
         * @returns {proto.HeroSwitchReq} HeroSwitchReq instance
         */
        HeroSwitchReq.create = function create(properties) {
            return new HeroSwitchReq(properties);
        };

        /**
         * Encodes the specified HeroSwitchReq message. Does not implicitly {@link proto.HeroSwitchReq.verify|verify} messages.
         * @function encode
         * @memberof proto.HeroSwitchReq
         * @static
         * @param {proto.IHeroSwitchReq} message HeroSwitchReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroSwitchReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heroId != null && Object.hasOwnProperty.call(message, "heroId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.heroId);
            return writer;
        };

        /**
         * Encodes the specified HeroSwitchReq message, length delimited. Does not implicitly {@link proto.HeroSwitchReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.HeroSwitchReq
         * @static
         * @param {proto.IHeroSwitchReq} message HeroSwitchReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroSwitchReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroSwitchReq message from the specified reader or buffer.
         * @function decode
         * @memberof proto.HeroSwitchReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.HeroSwitchReq} HeroSwitchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroSwitchReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HeroSwitchReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.heroId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroSwitchReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.HeroSwitchReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.HeroSwitchReq} HeroSwitchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroSwitchReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroSwitchReq message.
         * @function verify
         * @memberof proto.HeroSwitchReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroSwitchReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                if (!$util.isString(message.heroId))
                    return "heroId: string expected";
            return null;
        };

        /**
         * Creates a HeroSwitchReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.HeroSwitchReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.HeroSwitchReq} HeroSwitchReq
         */
        HeroSwitchReq.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.HeroSwitchReq)
                return object;
            var message = new $root.proto.HeroSwitchReq();
            if (object.heroId != null)
                message.heroId = String(object.heroId);
            return message;
        };

        /**
         * Creates a plain object from a HeroSwitchReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.HeroSwitchReq
         * @static
         * @param {proto.HeroSwitchReq} message HeroSwitchReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroSwitchReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.heroId = "";
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                object.heroId = message.heroId;
            return object;
        };

        /**
         * Converts this HeroSwitchReq to JSON.
         * @function toJSON
         * @memberof proto.HeroSwitchReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroSwitchReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroSwitchReq
         * @function getTypeUrl
         * @memberof proto.HeroSwitchReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroSwitchReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.HeroSwitchReq";
        };

        return HeroSwitchReq;
    })();

    proto.HeroSwitchResp = (function() {

        /**
         * Properties of a HeroSwitchResp.
         * @memberof proto
         * @interface IHeroSwitchResp
         * @property {proto.RetCode|null} [code] HeroSwitchResp code
         * @property {proto.MsgId|null} [id] HeroSwitchResp id
         * @property {proto.IHeroInfo|null} [heroInfo] HeroSwitchResp heroInfo
         */

        /**
         * Constructs a new HeroSwitchResp.
         * @memberof proto
         * @classdesc Represents a HeroSwitchResp.
         * @implements IHeroSwitchResp
         * @constructor
         * @param {proto.IHeroSwitchResp=} [properties] Properties to set
         */
        function HeroSwitchResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroSwitchResp code.
         * @member {proto.RetCode} code
         * @memberof proto.HeroSwitchResp
         * @instance
         */
        HeroSwitchResp.prototype.code = 0;

        /**
         * HeroSwitchResp id.
         * @member {proto.MsgId} id
         * @memberof proto.HeroSwitchResp
         * @instance
         */
        HeroSwitchResp.prototype.id = 0;

        /**
         * HeroSwitchResp heroInfo.
         * @member {proto.IHeroInfo|null|undefined} heroInfo
         * @memberof proto.HeroSwitchResp
         * @instance
         */
        HeroSwitchResp.prototype.heroInfo = null;

        /**
         * Creates a new HeroSwitchResp instance using the specified properties.
         * @function create
         * @memberof proto.HeroSwitchResp
         * @static
         * @param {proto.IHeroSwitchResp=} [properties] Properties to set
         * @returns {proto.HeroSwitchResp} HeroSwitchResp instance
         */
        HeroSwitchResp.create = function create(properties) {
            return new HeroSwitchResp(properties);
        };

        /**
         * Encodes the specified HeroSwitchResp message. Does not implicitly {@link proto.HeroSwitchResp.verify|verify} messages.
         * @function encode
         * @memberof proto.HeroSwitchResp
         * @static
         * @param {proto.IHeroSwitchResp} message HeroSwitchResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroSwitchResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.heroInfo != null && Object.hasOwnProperty.call(message, "heroInfo"))
                $root.proto.HeroInfo.encode(message.heroInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroSwitchResp message, length delimited. Does not implicitly {@link proto.HeroSwitchResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.HeroSwitchResp
         * @static
         * @param {proto.IHeroSwitchResp} message HeroSwitchResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroSwitchResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroSwitchResp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.HeroSwitchResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.HeroSwitchResp} HeroSwitchResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroSwitchResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HeroSwitchResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.id = reader.int32();
                        break;
                    }
                case 3: {
                        message.heroInfo = $root.proto.HeroInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroSwitchResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.HeroSwitchResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.HeroSwitchResp} HeroSwitchResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroSwitchResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroSwitchResp message.
         * @function verify
         * @memberof proto.HeroSwitchResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroSwitchResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case -1:
                case -2:
                case -3:
                case -4:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                switch (message.id) {
                default:
                    return "id: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            if (message.heroInfo != null && message.hasOwnProperty("heroInfo")) {
                var error = $root.proto.HeroInfo.verify(message.heroInfo);
                if (error)
                    return "heroInfo." + error;
            }
            return null;
        };

        /**
         * Creates a HeroSwitchResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.HeroSwitchResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.HeroSwitchResp} HeroSwitchResp
         */
        HeroSwitchResp.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.HeroSwitchResp)
                return object;
            var message = new $root.proto.HeroSwitchResp();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "FAIL":
            case -1:
                message.code = -1;
                break;
            case "NOTACCOUNT":
            case -2:
                message.code = -2;
                break;
            case "ACCOUNTEXIST":
            case -3:
                message.code = -3;
                break;
            case "ACCOUNTNAMEEXIST":
            case -4:
                message.code = -4;
                break;
            }
            switch (object.id) {
            default:
                if (typeof object.id === "number") {
                    message.id = object.id;
                    break;
                }
                break;
            case "ID_FAIL":
            case 0:
                message.id = 0;
                break;
            case "ID_UserReqister":
            case 1:
                message.id = 1;
                break;
            case "ID_UserLogin":
            case 2:
                message.id = 2;
                break;
            case "ID_HeroInfo":
            case 3:
                message.id = 3;
                break;
            case "ID_HeroSwitch":
            case 4:
                message.id = 4;
                break;
            case "ID_UserHeadChange":
            case 5:
                message.id = 5;
                break;
            case "ID_Matching":
            case 6:
                message.id = 6;
                break;
            case "ID_ClientReady":
            case 7:
                message.id = 7;
                break;
            case "ID_GameStartDownTime":
            case 8:
                message.id = 8;
                break;
            case "ID_GameStart":
            case 9:
                message.id = 9;
                break;
            case "ID_BattleFrameDataInput":
            case 10:
                message.id = 10;
                break;
            case "ID_BattleFrameDataUpdate":
            case 11:
                message.id = 11;
                break;
            case "ID_GET_BattleFrameData":
            case 12:
                message.id = 12;
                break;
            case "ID_Heartbeat":
            case 13:
                message.id = 13;
                break;
            }
            if (object.heroInfo != null) {
                if (typeof object.heroInfo !== "object")
                    throw TypeError(".proto.HeroSwitchResp.heroInfo: object expected");
                message.heroInfo = $root.proto.HeroInfo.fromObject(object.heroInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroSwitchResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.HeroSwitchResp
         * @static
         * @param {proto.HeroSwitchResp} message HeroSwitchResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroSwitchResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "SUCCESS" : 0;
                object.id = options.enums === String ? "ID_FAIL" : 0;
                object.heroInfo = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.proto.RetCode[message.code] === undefined ? message.code : $root.proto.RetCode[message.code] : message.code;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.enums === String ? $root.proto.MsgId[message.id] === undefined ? message.id : $root.proto.MsgId[message.id] : message.id;
            if (message.heroInfo != null && message.hasOwnProperty("heroInfo"))
                object.heroInfo = $root.proto.HeroInfo.toObject(message.heroInfo, options);
            return object;
        };

        /**
         * Converts this HeroSwitchResp to JSON.
         * @function toJSON
         * @memberof proto.HeroSwitchResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroSwitchResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeroSwitchResp
         * @function getTypeUrl
         * @memberof proto.HeroSwitchResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeroSwitchResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.HeroSwitchResp";
        };

        return HeroSwitchResp;
    })();

    proto.RegisterReq = (function() {

        /**
         * Properties of a RegisterReq.
         * @memberof proto
         * @interface IRegisterReq
         * @property {string|null} [account] RegisterReq account
         * @property {string|null} [password] RegisterReq password
         * @property {string|null} [name] RegisterReq name
         */

        /**
         * Constructs a new RegisterReq.
         * @memberof proto
         * @classdesc Represents a RegisterReq.
         * @implements IRegisterReq
         * @constructor
         * @param {proto.IRegisterReq=} [properties] Properties to set
         */
        function RegisterReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterReq account.
         * @member {string} account
         * @memberof proto.RegisterReq
         * @instance
         */
        RegisterReq.prototype.account = "";

        /**
         * RegisterReq password.
         * @member {string} password
         * @memberof proto.RegisterReq
         * @instance
         */
        RegisterReq.prototype.password = "";

        /**
         * RegisterReq name.
         * @member {string} name
         * @memberof proto.RegisterReq
         * @instance
         */
        RegisterReq.prototype.name = "";

        /**
         * Creates a new RegisterReq instance using the specified properties.
         * @function create
         * @memberof proto.RegisterReq
         * @static
         * @param {proto.IRegisterReq=} [properties] Properties to set
         * @returns {proto.RegisterReq} RegisterReq instance
         */
        RegisterReq.create = function create(properties) {
            return new RegisterReq(properties);
        };

        /**
         * Encodes the specified RegisterReq message. Does not implicitly {@link proto.RegisterReq.verify|verify} messages.
         * @function encode
         * @memberof proto.RegisterReq
         * @static
         * @param {proto.IRegisterReq} message RegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified RegisterReq message, length delimited. Does not implicitly {@link proto.RegisterReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RegisterReq
         * @static
         * @param {proto.IRegisterReq} message RegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterReq message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RegisterReq} RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RegisterReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.account = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RegisterReq} RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterReq message.
         * @function verify
         * @memberof proto.RegisterReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a RegisterReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RegisterReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RegisterReq} RegisterReq
         */
        RegisterReq.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RegisterReq)
                return object;
            var message = new $root.proto.RegisterReq();
            if (object.account != null)
                message.account = String(object.account);
            if (object.password != null)
                message.password = String(object.password);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a RegisterReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RegisterReq
         * @static
         * @param {proto.RegisterReq} message RegisterReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.password = "";
                object.name = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this RegisterReq to JSON.
         * @function toJSON
         * @memberof proto.RegisterReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegisterReq
         * @function getTypeUrl
         * @memberof proto.RegisterReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RegisterReq";
        };

        return RegisterReq;
    })();

    proto.RegisterResp = (function() {

        /**
         * Properties of a RegisterResp.
         * @memberof proto
         * @interface IRegisterResp
         * @property {proto.RetCode|null} [code] RegisterResp code
         * @property {proto.MsgId|null} [id] RegisterResp id
         */

        /**
         * Constructs a new RegisterResp.
         * @memberof proto
         * @classdesc Represents a RegisterResp.
         * @implements IRegisterResp
         * @constructor
         * @param {proto.IRegisterResp=} [properties] Properties to set
         */
        function RegisterResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterResp code.
         * @member {proto.RetCode} code
         * @memberof proto.RegisterResp
         * @instance
         */
        RegisterResp.prototype.code = 0;

        /**
         * RegisterResp id.
         * @member {proto.MsgId} id
         * @memberof proto.RegisterResp
         * @instance
         */
        RegisterResp.prototype.id = 0;

        /**
         * Creates a new RegisterResp instance using the specified properties.
         * @function create
         * @memberof proto.RegisterResp
         * @static
         * @param {proto.IRegisterResp=} [properties] Properties to set
         * @returns {proto.RegisterResp} RegisterResp instance
         */
        RegisterResp.create = function create(properties) {
            return new RegisterResp(properties);
        };

        /**
         * Encodes the specified RegisterResp message. Does not implicitly {@link proto.RegisterResp.verify|verify} messages.
         * @function encode
         * @memberof proto.RegisterResp
         * @static
         * @param {proto.IRegisterResp} message RegisterResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified RegisterResp message, length delimited. Does not implicitly {@link proto.RegisterResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RegisterResp
         * @static
         * @param {proto.IRegisterResp} message RegisterResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterResp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RegisterResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RegisterResp} RegisterResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RegisterResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.id = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RegisterResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RegisterResp} RegisterResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterResp message.
         * @function verify
         * @memberof proto.RegisterResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case -1:
                case -2:
                case -3:
                case -4:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                switch (message.id) {
                default:
                    return "id: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            return null;
        };

        /**
         * Creates a RegisterResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RegisterResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RegisterResp} RegisterResp
         */
        RegisterResp.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RegisterResp)
                return object;
            var message = new $root.proto.RegisterResp();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "FAIL":
            case -1:
                message.code = -1;
                break;
            case "NOTACCOUNT":
            case -2:
                message.code = -2;
                break;
            case "ACCOUNTEXIST":
            case -3:
                message.code = -3;
                break;
            case "ACCOUNTNAMEEXIST":
            case -4:
                message.code = -4;
                break;
            }
            switch (object.id) {
            default:
                if (typeof object.id === "number") {
                    message.id = object.id;
                    break;
                }
                break;
            case "ID_FAIL":
            case 0:
                message.id = 0;
                break;
            case "ID_UserReqister":
            case 1:
                message.id = 1;
                break;
            case "ID_UserLogin":
            case 2:
                message.id = 2;
                break;
            case "ID_HeroInfo":
            case 3:
                message.id = 3;
                break;
            case "ID_HeroSwitch":
            case 4:
                message.id = 4;
                break;
            case "ID_UserHeadChange":
            case 5:
                message.id = 5;
                break;
            case "ID_Matching":
            case 6:
                message.id = 6;
                break;
            case "ID_ClientReady":
            case 7:
                message.id = 7;
                break;
            case "ID_GameStartDownTime":
            case 8:
                message.id = 8;
                break;
            case "ID_GameStart":
            case 9:
                message.id = 9;
                break;
            case "ID_BattleFrameDataInput":
            case 10:
                message.id = 10;
                break;
            case "ID_BattleFrameDataUpdate":
            case 11:
                message.id = 11;
                break;
            case "ID_GET_BattleFrameData":
            case 12:
                message.id = 12;
                break;
            case "ID_Heartbeat":
            case 13:
                message.id = 13;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a RegisterResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RegisterResp
         * @static
         * @param {proto.RegisterResp} message RegisterResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "SUCCESS" : 0;
                object.id = options.enums === String ? "ID_FAIL" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.proto.RetCode[message.code] === undefined ? message.code : $root.proto.RetCode[message.code] : message.code;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.enums === String ? $root.proto.MsgId[message.id] === undefined ? message.id : $root.proto.MsgId[message.id] : message.id;
            return object;
        };

        /**
         * Converts this RegisterResp to JSON.
         * @function toJSON
         * @memberof proto.RegisterResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegisterResp
         * @function getTypeUrl
         * @memberof proto.RegisterResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RegisterResp";
        };

        return RegisterResp;
    })();

    proto.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof proto
         * @interface ILoginReq
         * @property {string|null} [account] LoginReq account
         * @property {string|null} [password] LoginReq password
         */

        /**
         * Constructs a new LoginReq.
         * @memberof proto
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {proto.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq account.
         * @member {string} account
         * @memberof proto.LoginReq
         * @instance
         */
        LoginReq.prototype.account = "";

        /**
         * LoginReq password.
         * @member {string} password
         * @memberof proto.LoginReq
         * @instance
         */
        LoginReq.prototype.password = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof proto.LoginReq
         * @static
         * @param {proto.ILoginReq=} [properties] Properties to set
         * @returns {proto.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link proto.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof proto.LoginReq
         * @static
         * @param {proto.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link proto.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.LoginReq
         * @static
         * @param {proto.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof proto.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.account = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof proto.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.LoginReq)
                return object;
            var message = new $root.proto.LoginReq();
            if (object.account != null)
                message.account = String(object.account);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.LoginReq
         * @static
         * @param {proto.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.password = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof proto.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginReq
         * @function getTypeUrl
         * @memberof proto.LoginReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.LoginReq";
        };

        return LoginReq;
    })();

    proto.LoginResp = (function() {

        /**
         * Properties of a LoginResp.
         * @memberof proto
         * @interface ILoginResp
         * @property {proto.RetCode|null} [code] LoginResp code
         * @property {proto.MsgId|null} [id] LoginResp id
         * @property {proto.IUserInfo|null} [userInfo] LoginResp userInfo
         */

        /**
         * Constructs a new LoginResp.
         * @memberof proto
         * @classdesc Represents a LoginResp.
         * @implements ILoginResp
         * @constructor
         * @param {proto.ILoginResp=} [properties] Properties to set
         */
        function LoginResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResp code.
         * @member {proto.RetCode} code
         * @memberof proto.LoginResp
         * @instance
         */
        LoginResp.prototype.code = 0;

        /**
         * LoginResp id.
         * @member {proto.MsgId} id
         * @memberof proto.LoginResp
         * @instance
         */
        LoginResp.prototype.id = 0;

        /**
         * LoginResp userInfo.
         * @member {proto.IUserInfo|null|undefined} userInfo
         * @memberof proto.LoginResp
         * @instance
         */
        LoginResp.prototype.userInfo = null;

        /**
         * Creates a new LoginResp instance using the specified properties.
         * @function create
         * @memberof proto.LoginResp
         * @static
         * @param {proto.ILoginResp=} [properties] Properties to set
         * @returns {proto.LoginResp} LoginResp instance
         */
        LoginResp.create = function create(properties) {
            return new LoginResp(properties);
        };

        /**
         * Encodes the specified LoginResp message. Does not implicitly {@link proto.LoginResp.verify|verify} messages.
         * @function encode
         * @memberof proto.LoginResp
         * @static
         * @param {proto.ILoginResp} message LoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
                $root.proto.UserInfo.encode(message.userInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginResp message, length delimited. Does not implicitly {@link proto.LoginResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.LoginResp
         * @static
         * @param {proto.ILoginResp} message LoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.LoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.LoginResp} LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.LoginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.id = reader.int32();
                        break;
                    }
                case 3: {
                        message.userInfo = $root.proto.UserInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.LoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.LoginResp} LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResp message.
         * @function verify
         * @memberof proto.LoginResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case -1:
                case -2:
                case -3:
                case -4:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                switch (message.id) {
                default:
                    return "id: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                var error = $root.proto.UserInfo.verify(message.userInfo);
                if (error)
                    return "userInfo." + error;
            }
            return null;
        };

        /**
         * Creates a LoginResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.LoginResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.LoginResp} LoginResp
         */
        LoginResp.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.LoginResp)
                return object;
            var message = new $root.proto.LoginResp();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "FAIL":
            case -1:
                message.code = -1;
                break;
            case "NOTACCOUNT":
            case -2:
                message.code = -2;
                break;
            case "ACCOUNTEXIST":
            case -3:
                message.code = -3;
                break;
            case "ACCOUNTNAMEEXIST":
            case -4:
                message.code = -4;
                break;
            }
            switch (object.id) {
            default:
                if (typeof object.id === "number") {
                    message.id = object.id;
                    break;
                }
                break;
            case "ID_FAIL":
            case 0:
                message.id = 0;
                break;
            case "ID_UserReqister":
            case 1:
                message.id = 1;
                break;
            case "ID_UserLogin":
            case 2:
                message.id = 2;
                break;
            case "ID_HeroInfo":
            case 3:
                message.id = 3;
                break;
            case "ID_HeroSwitch":
            case 4:
                message.id = 4;
                break;
            case "ID_UserHeadChange":
            case 5:
                message.id = 5;
                break;
            case "ID_Matching":
            case 6:
                message.id = 6;
                break;
            case "ID_ClientReady":
            case 7:
                message.id = 7;
                break;
            case "ID_GameStartDownTime":
            case 8:
                message.id = 8;
                break;
            case "ID_GameStart":
            case 9:
                message.id = 9;
                break;
            case "ID_BattleFrameDataInput":
            case 10:
                message.id = 10;
                break;
            case "ID_BattleFrameDataUpdate":
            case 11:
                message.id = 11;
                break;
            case "ID_GET_BattleFrameData":
            case 12:
                message.id = 12;
                break;
            case "ID_Heartbeat":
            case 13:
                message.id = 13;
                break;
            }
            if (object.userInfo != null) {
                if (typeof object.userInfo !== "object")
                    throw TypeError(".proto.LoginResp.userInfo: object expected");
                message.userInfo = $root.proto.UserInfo.fromObject(object.userInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.LoginResp
         * @static
         * @param {proto.LoginResp} message LoginResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "SUCCESS" : 0;
                object.id = options.enums === String ? "ID_FAIL" : 0;
                object.userInfo = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.proto.RetCode[message.code] === undefined ? message.code : $root.proto.RetCode[message.code] : message.code;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.enums === String ? $root.proto.MsgId[message.id] === undefined ? message.id : $root.proto.MsgId[message.id] : message.id;
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                object.userInfo = $root.proto.UserInfo.toObject(message.userInfo, options);
            return object;
        };

        /**
         * Converts this LoginResp to JSON.
         * @function toJSON
         * @memberof proto.LoginResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginResp
         * @function getTypeUrl
         * @memberof proto.LoginResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.LoginResp";
        };

        return LoginResp;
    })();

    proto.userHeadChangeReq = (function() {

        /**
         * Properties of a userHeadChangeReq.
         * @memberof proto
         * @interface IuserHeadChangeReq
         * @property {string|null} [cfgId] userHeadChangeReq cfgId
         */

        /**
         * Constructs a new userHeadChangeReq.
         * @memberof proto
         * @classdesc Represents a userHeadChangeReq.
         * @implements IuserHeadChangeReq
         * @constructor
         * @param {proto.IuserHeadChangeReq=} [properties] Properties to set
         */
        function userHeadChangeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * userHeadChangeReq cfgId.
         * @member {string} cfgId
         * @memberof proto.userHeadChangeReq
         * @instance
         */
        userHeadChangeReq.prototype.cfgId = "";

        /**
         * Creates a new userHeadChangeReq instance using the specified properties.
         * @function create
         * @memberof proto.userHeadChangeReq
         * @static
         * @param {proto.IuserHeadChangeReq=} [properties] Properties to set
         * @returns {proto.userHeadChangeReq} userHeadChangeReq instance
         */
        userHeadChangeReq.create = function create(properties) {
            return new userHeadChangeReq(properties);
        };

        /**
         * Encodes the specified userHeadChangeReq message. Does not implicitly {@link proto.userHeadChangeReq.verify|verify} messages.
         * @function encode
         * @memberof proto.userHeadChangeReq
         * @static
         * @param {proto.IuserHeadChangeReq} message userHeadChangeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        userHeadChangeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cfgId != null && Object.hasOwnProperty.call(message, "cfgId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cfgId);
            return writer;
        };

        /**
         * Encodes the specified userHeadChangeReq message, length delimited. Does not implicitly {@link proto.userHeadChangeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.userHeadChangeReq
         * @static
         * @param {proto.IuserHeadChangeReq} message userHeadChangeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        userHeadChangeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a userHeadChangeReq message from the specified reader or buffer.
         * @function decode
         * @memberof proto.userHeadChangeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.userHeadChangeReq} userHeadChangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        userHeadChangeReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.userHeadChangeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.cfgId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a userHeadChangeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.userHeadChangeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.userHeadChangeReq} userHeadChangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        userHeadChangeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a userHeadChangeReq message.
         * @function verify
         * @memberof proto.userHeadChangeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        userHeadChangeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cfgId != null && message.hasOwnProperty("cfgId"))
                if (!$util.isString(message.cfgId))
                    return "cfgId: string expected";
            return null;
        };

        /**
         * Creates a userHeadChangeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.userHeadChangeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.userHeadChangeReq} userHeadChangeReq
         */
        userHeadChangeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.userHeadChangeReq)
                return object;
            var message = new $root.proto.userHeadChangeReq();
            if (object.cfgId != null)
                message.cfgId = String(object.cfgId);
            return message;
        };

        /**
         * Creates a plain object from a userHeadChangeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.userHeadChangeReq
         * @static
         * @param {proto.userHeadChangeReq} message userHeadChangeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        userHeadChangeReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.cfgId = "";
            if (message.cfgId != null && message.hasOwnProperty("cfgId"))
                object.cfgId = message.cfgId;
            return object;
        };

        /**
         * Converts this userHeadChangeReq to JSON.
         * @function toJSON
         * @memberof proto.userHeadChangeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        userHeadChangeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for userHeadChangeReq
         * @function getTypeUrl
         * @memberof proto.userHeadChangeReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        userHeadChangeReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.userHeadChangeReq";
        };

        return userHeadChangeReq;
    })();

    proto.userHeadChangeResp = (function() {

        /**
         * Properties of a userHeadChangeResp.
         * @memberof proto
         * @interface IuserHeadChangeResp
         * @property {proto.RetCode|null} [code] userHeadChangeResp code
         * @property {proto.MsgId|null} [id] userHeadChangeResp id
         * @property {string|null} [headId] userHeadChangeResp headId
         */

        /**
         * Constructs a new userHeadChangeResp.
         * @memberof proto
         * @classdesc Represents a userHeadChangeResp.
         * @implements IuserHeadChangeResp
         * @constructor
         * @param {proto.IuserHeadChangeResp=} [properties] Properties to set
         */
        function userHeadChangeResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * userHeadChangeResp code.
         * @member {proto.RetCode} code
         * @memberof proto.userHeadChangeResp
         * @instance
         */
        userHeadChangeResp.prototype.code = 0;

        /**
         * userHeadChangeResp id.
         * @member {proto.MsgId} id
         * @memberof proto.userHeadChangeResp
         * @instance
         */
        userHeadChangeResp.prototype.id = 0;

        /**
         * userHeadChangeResp headId.
         * @member {string} headId
         * @memberof proto.userHeadChangeResp
         * @instance
         */
        userHeadChangeResp.prototype.headId = "";

        /**
         * Creates a new userHeadChangeResp instance using the specified properties.
         * @function create
         * @memberof proto.userHeadChangeResp
         * @static
         * @param {proto.IuserHeadChangeResp=} [properties] Properties to set
         * @returns {proto.userHeadChangeResp} userHeadChangeResp instance
         */
        userHeadChangeResp.create = function create(properties) {
            return new userHeadChangeResp(properties);
        };

        /**
         * Encodes the specified userHeadChangeResp message. Does not implicitly {@link proto.userHeadChangeResp.verify|verify} messages.
         * @function encode
         * @memberof proto.userHeadChangeResp
         * @static
         * @param {proto.IuserHeadChangeResp} message userHeadChangeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        userHeadChangeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.headId != null && Object.hasOwnProperty.call(message, "headId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.headId);
            return writer;
        };

        /**
         * Encodes the specified userHeadChangeResp message, length delimited. Does not implicitly {@link proto.userHeadChangeResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.userHeadChangeResp
         * @static
         * @param {proto.IuserHeadChangeResp} message userHeadChangeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        userHeadChangeResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a userHeadChangeResp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.userHeadChangeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.userHeadChangeResp} userHeadChangeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        userHeadChangeResp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.userHeadChangeResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.id = reader.int32();
                        break;
                    }
                case 3: {
                        message.headId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a userHeadChangeResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.userHeadChangeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.userHeadChangeResp} userHeadChangeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        userHeadChangeResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a userHeadChangeResp message.
         * @function verify
         * @memberof proto.userHeadChangeResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        userHeadChangeResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case -1:
                case -2:
                case -3:
                case -4:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                switch (message.id) {
                default:
                    return "id: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            if (message.headId != null && message.hasOwnProperty("headId"))
                if (!$util.isString(message.headId))
                    return "headId: string expected";
            return null;
        };

        /**
         * Creates a userHeadChangeResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.userHeadChangeResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.userHeadChangeResp} userHeadChangeResp
         */
        userHeadChangeResp.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.userHeadChangeResp)
                return object;
            var message = new $root.proto.userHeadChangeResp();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.code = 0;
                break;
            case "FAIL":
            case -1:
                message.code = -1;
                break;
            case "NOTACCOUNT":
            case -2:
                message.code = -2;
                break;
            case "ACCOUNTEXIST":
            case -3:
                message.code = -3;
                break;
            case "ACCOUNTNAMEEXIST":
            case -4:
                message.code = -4;
                break;
            }
            switch (object.id) {
            default:
                if (typeof object.id === "number") {
                    message.id = object.id;
                    break;
                }
                break;
            case "ID_FAIL":
            case 0:
                message.id = 0;
                break;
            case "ID_UserReqister":
            case 1:
                message.id = 1;
                break;
            case "ID_UserLogin":
            case 2:
                message.id = 2;
                break;
            case "ID_HeroInfo":
            case 3:
                message.id = 3;
                break;
            case "ID_HeroSwitch":
            case 4:
                message.id = 4;
                break;
            case "ID_UserHeadChange":
            case 5:
                message.id = 5;
                break;
            case "ID_Matching":
            case 6:
                message.id = 6;
                break;
            case "ID_ClientReady":
            case 7:
                message.id = 7;
                break;
            case "ID_GameStartDownTime":
            case 8:
                message.id = 8;
                break;
            case "ID_GameStart":
            case 9:
                message.id = 9;
                break;
            case "ID_BattleFrameDataInput":
            case 10:
                message.id = 10;
                break;
            case "ID_BattleFrameDataUpdate":
            case 11:
                message.id = 11;
                break;
            case "ID_GET_BattleFrameData":
            case 12:
                message.id = 12;
                break;
            case "ID_Heartbeat":
            case 13:
                message.id = 13;
                break;
            }
            if (object.headId != null)
                message.headId = String(object.headId);
            return message;
        };

        /**
         * Creates a plain object from a userHeadChangeResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.userHeadChangeResp
         * @static
         * @param {proto.userHeadChangeResp} message userHeadChangeResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        userHeadChangeResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "SUCCESS" : 0;
                object.id = options.enums === String ? "ID_FAIL" : 0;
                object.headId = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.proto.RetCode[message.code] === undefined ? message.code : $root.proto.RetCode[message.code] : message.code;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.enums === String ? $root.proto.MsgId[message.id] === undefined ? message.id : $root.proto.MsgId[message.id] : message.id;
            if (message.headId != null && message.hasOwnProperty("headId"))
                object.headId = message.headId;
            return object;
        };

        /**
         * Converts this userHeadChangeResp to JSON.
         * @function toJSON
         * @memberof proto.userHeadChangeResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        userHeadChangeResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for userHeadChangeResp
         * @function getTypeUrl
         * @memberof proto.userHeadChangeResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        userHeadChangeResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.userHeadChangeResp";
        };

        return userHeadChangeResp;
    })();

    return proto;
})();

module.exports = $root;
