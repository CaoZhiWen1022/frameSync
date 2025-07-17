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
        BattleUserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.BattleUserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
        mathchingReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.mathchingReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
        matchingResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.matchingResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
            case "ID_BattleFrame":
            case 10:
                message.id = 10;
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
        clientReadyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.clientReadyReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
        gameStartDownTimeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.gameStartDownTimeResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
            case "ID_BattleFrame":
            case 10:
                message.id = 10;
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
        gameSatrtResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.gameSatrtResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
            case "ID_BattleFrame":
            case 10:
                message.id = 10;
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
        v2.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.v2();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
         * @property {proto.Iv2|null} [start] battleMoveData start
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
         * battleMoveData start.
         * @member {proto.Iv2|null|undefined} start
         * @memberof proto.battleMoveData
         * @instance
         */
        battleMoveData.prototype.start = null;

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
            if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                $root.proto.v2.encode(message.start, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                $root.proto.v2.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
        battleMoveData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.battleMoveData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.start = $root.proto.v2.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
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
            if (message.start != null && message.hasOwnProperty("start")) {
                var error = $root.proto.v2.verify(message.start);
                if (error)
                    return "start." + error;
            }
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
            if (object.start != null) {
                if (typeof object.start !== "object")
                    throw TypeError(".proto.battleMoveData.start: object expected");
                message.start = $root.proto.v2.fromObject(object.start);
            }
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
            if (options.defaults) {
                object.start = null;
                object.target = null;
            }
            if (message.start != null && message.hasOwnProperty("start"))
                object.start = $root.proto.v2.toObject(message.start, options);
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

    proto.battleClientFrameData = (function() {

        /**
         * Properties of a battleClientFrameData.
         * @memberof proto
         * @interface IbattleClientFrameData
         * @property {number|null} [op] battleClientFrameData op
         * @property {proto.IbattleMoveData|null} [moveData] battleClientFrameData moveData
         */

        /**
         * Constructs a new battleClientFrameData.
         * @memberof proto
         * @classdesc Represents a battleClientFrameData.
         * @implements IbattleClientFrameData
         * @constructor
         * @param {proto.IbattleClientFrameData=} [properties] Properties to set
         */
        function battleClientFrameData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * battleClientFrameData op.
         * @member {number} op
         * @memberof proto.battleClientFrameData
         * @instance
         */
        battleClientFrameData.prototype.op = 0;

        /**
         * battleClientFrameData moveData.
         * @member {proto.IbattleMoveData|null|undefined} moveData
         * @memberof proto.battleClientFrameData
         * @instance
         */
        battleClientFrameData.prototype.moveData = null;

        /**
         * Creates a new battleClientFrameData instance using the specified properties.
         * @function create
         * @memberof proto.battleClientFrameData
         * @static
         * @param {proto.IbattleClientFrameData=} [properties] Properties to set
         * @returns {proto.battleClientFrameData} battleClientFrameData instance
         */
        battleClientFrameData.create = function create(properties) {
            return new battleClientFrameData(properties);
        };

        /**
         * Encodes the specified battleClientFrameData message. Does not implicitly {@link proto.battleClientFrameData.verify|verify} messages.
         * @function encode
         * @memberof proto.battleClientFrameData
         * @static
         * @param {proto.IbattleClientFrameData} message battleClientFrameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        battleClientFrameData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.op != null && Object.hasOwnProperty.call(message, "op"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.op);
            if (message.moveData != null && Object.hasOwnProperty.call(message, "moveData"))
                $root.proto.battleMoveData.encode(message.moveData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified battleClientFrameData message, length delimited. Does not implicitly {@link proto.battleClientFrameData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.battleClientFrameData
         * @static
         * @param {proto.IbattleClientFrameData} message battleClientFrameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        battleClientFrameData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a battleClientFrameData message from the specified reader or buffer.
         * @function decode
         * @memberof proto.battleClientFrameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.battleClientFrameData} battleClientFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        battleClientFrameData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.battleClientFrameData();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
         * Decodes a battleClientFrameData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.battleClientFrameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.battleClientFrameData} battleClientFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        battleClientFrameData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a battleClientFrameData message.
         * @function verify
         * @memberof proto.battleClientFrameData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        battleClientFrameData.verify = function verify(message) {
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
         * Creates a battleClientFrameData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.battleClientFrameData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.battleClientFrameData} battleClientFrameData
         */
        battleClientFrameData.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.battleClientFrameData)
                return object;
            var message = new $root.proto.battleClientFrameData();
            if (object.op != null)
                message.op = object.op | 0;
            if (object.moveData != null) {
                if (typeof object.moveData !== "object")
                    throw TypeError(".proto.battleClientFrameData.moveData: object expected");
                message.moveData = $root.proto.battleMoveData.fromObject(object.moveData);
            }
            return message;
        };

        /**
         * Creates a plain object from a battleClientFrameData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.battleClientFrameData
         * @static
         * @param {proto.battleClientFrameData} message battleClientFrameData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        battleClientFrameData.toObject = function toObject(message, options) {
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
         * Converts this battleClientFrameData to JSON.
         * @function toJSON
         * @memberof proto.battleClientFrameData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        battleClientFrameData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for battleClientFrameData
         * @function getTypeUrl
         * @memberof proto.battleClientFrameData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        battleClientFrameData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.battleClientFrameData";
        };

        return battleClientFrameData;
    })();

    proto.battleFrameReq = (function() {

        /**
         * Properties of a battleFrameReq.
         * @memberof proto
         * @interface IbattleFrameReq
         * @property {number|null} [frameIndex] battleFrameReq frameIndex
         * @property {proto.IbattleClientFrameData|null} [data] battleFrameReq data
         */

        /**
         * Constructs a new battleFrameReq.
         * @memberof proto
         * @classdesc Represents a battleFrameReq.
         * @implements IbattleFrameReq
         * @constructor
         * @param {proto.IbattleFrameReq=} [properties] Properties to set
         */
        function battleFrameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * battleFrameReq frameIndex.
         * @member {number} frameIndex
         * @memberof proto.battleFrameReq
         * @instance
         */
        battleFrameReq.prototype.frameIndex = 0;

        /**
         * battleFrameReq data.
         * @member {proto.IbattleClientFrameData|null|undefined} data
         * @memberof proto.battleFrameReq
         * @instance
         */
        battleFrameReq.prototype.data = null;

        /**
         * Creates a new battleFrameReq instance using the specified properties.
         * @function create
         * @memberof proto.battleFrameReq
         * @static
         * @param {proto.IbattleFrameReq=} [properties] Properties to set
         * @returns {proto.battleFrameReq} battleFrameReq instance
         */
        battleFrameReq.create = function create(properties) {
            return new battleFrameReq(properties);
        };

        /**
         * Encodes the specified battleFrameReq message. Does not implicitly {@link proto.battleFrameReq.verify|verify} messages.
         * @function encode
         * @memberof proto.battleFrameReq
         * @static
         * @param {proto.IbattleFrameReq} message battleFrameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        battleFrameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.frameIndex != null && Object.hasOwnProperty.call(message, "frameIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.frameIndex);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.proto.battleClientFrameData.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified battleFrameReq message, length delimited. Does not implicitly {@link proto.battleFrameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.battleFrameReq
         * @static
         * @param {proto.IbattleFrameReq} message battleFrameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        battleFrameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a battleFrameReq message from the specified reader or buffer.
         * @function decode
         * @memberof proto.battleFrameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.battleFrameReq} battleFrameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        battleFrameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.battleFrameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.frameIndex = reader.int32();
                        break;
                    }
                case 2: {
                        message.data = $root.proto.battleClientFrameData.decode(reader, reader.uint32());
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
         * Decodes a battleFrameReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.battleFrameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.battleFrameReq} battleFrameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        battleFrameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a battleFrameReq message.
         * @function verify
         * @memberof proto.battleFrameReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        battleFrameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.frameIndex != null && message.hasOwnProperty("frameIndex"))
                if (!$util.isInteger(message.frameIndex))
                    return "frameIndex: integer expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.proto.battleClientFrameData.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates a battleFrameReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.battleFrameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.battleFrameReq} battleFrameReq
         */
        battleFrameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.battleFrameReq)
                return object;
            var message = new $root.proto.battleFrameReq();
            if (object.frameIndex != null)
                message.frameIndex = object.frameIndex | 0;
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".proto.battleFrameReq.data: object expected");
                message.data = $root.proto.battleClientFrameData.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a battleFrameReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.battleFrameReq
         * @static
         * @param {proto.battleFrameReq} message battleFrameReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        battleFrameReq.toObject = function toObject(message, options) {
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
                object.data = $root.proto.battleClientFrameData.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this battleFrameReq to JSON.
         * @function toJSON
         * @memberof proto.battleFrameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        battleFrameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for battleFrameReq
         * @function getTypeUrl
         * @memberof proto.battleFrameReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        battleFrameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.battleFrameReq";
        };

        return battleFrameReq;
    })();

    proto.battleServerFrameData = (function() {

        /**
         * Properties of a battleServerFrameData.
         * @memberof proto
         * @interface IbattleServerFrameData
         * @property {number|null} [userId] battleServerFrameData userId
         * @property {proto.IbattleClientFrameData|null} [data] battleServerFrameData data
         */

        /**
         * Constructs a new battleServerFrameData.
         * @memberof proto
         * @classdesc Represents a battleServerFrameData.
         * @implements IbattleServerFrameData
         * @constructor
         * @param {proto.IbattleServerFrameData=} [properties] Properties to set
         */
        function battleServerFrameData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * battleServerFrameData userId.
         * @member {number} userId
         * @memberof proto.battleServerFrameData
         * @instance
         */
        battleServerFrameData.prototype.userId = 0;

        /**
         * battleServerFrameData data.
         * @member {proto.IbattleClientFrameData|null|undefined} data
         * @memberof proto.battleServerFrameData
         * @instance
         */
        battleServerFrameData.prototype.data = null;

        /**
         * Creates a new battleServerFrameData instance using the specified properties.
         * @function create
         * @memberof proto.battleServerFrameData
         * @static
         * @param {proto.IbattleServerFrameData=} [properties] Properties to set
         * @returns {proto.battleServerFrameData} battleServerFrameData instance
         */
        battleServerFrameData.create = function create(properties) {
            return new battleServerFrameData(properties);
        };

        /**
         * Encodes the specified battleServerFrameData message. Does not implicitly {@link proto.battleServerFrameData.verify|verify} messages.
         * @function encode
         * @memberof proto.battleServerFrameData
         * @static
         * @param {proto.IbattleServerFrameData} message battleServerFrameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        battleServerFrameData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.proto.battleClientFrameData.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified battleServerFrameData message, length delimited. Does not implicitly {@link proto.battleServerFrameData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.battleServerFrameData
         * @static
         * @param {proto.IbattleServerFrameData} message battleServerFrameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        battleServerFrameData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a battleServerFrameData message from the specified reader or buffer.
         * @function decode
         * @memberof proto.battleServerFrameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.battleServerFrameData} battleServerFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        battleServerFrameData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.battleServerFrameData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int32();
                        break;
                    }
                case 2: {
                        message.data = $root.proto.battleClientFrameData.decode(reader, reader.uint32());
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
         * Decodes a battleServerFrameData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.battleServerFrameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.battleServerFrameData} battleServerFrameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        battleServerFrameData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a battleServerFrameData message.
         * @function verify
         * @memberof proto.battleServerFrameData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        battleServerFrameData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.proto.battleClientFrameData.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates a battleServerFrameData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.battleServerFrameData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.battleServerFrameData} battleServerFrameData
         */
        battleServerFrameData.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.battleServerFrameData)
                return object;
            var message = new $root.proto.battleServerFrameData();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".proto.battleServerFrameData.data: object expected");
                message.data = $root.proto.battleClientFrameData.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a battleServerFrameData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.battleServerFrameData
         * @static
         * @param {proto.battleServerFrameData} message battleServerFrameData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        battleServerFrameData.toObject = function toObject(message, options) {
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
                object.data = $root.proto.battleClientFrameData.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this battleServerFrameData to JSON.
         * @function toJSON
         * @memberof proto.battleServerFrameData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        battleServerFrameData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for battleServerFrameData
         * @function getTypeUrl
         * @memberof proto.battleServerFrameData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        battleServerFrameData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.battleServerFrameData";
        };

        return battleServerFrameData;
    })();

    proto.battleFrameResp = (function() {

        /**
         * Properties of a battleFrameResp.
         * @memberof proto
         * @interface IbattleFrameResp
         * @property {proto.RetCode|null} [code] battleFrameResp code
         * @property {proto.MsgId|null} [id] battleFrameResp id
         * @property {number|null} [frameIndex] battleFrameResp frameIndex
         * @property {Array.<proto.IbattleServerFrameData>|null} [data] battleFrameResp data
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
            this.data = [];
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
         * battleFrameResp frameIndex.
         * @member {number} frameIndex
         * @memberof proto.battleFrameResp
         * @instance
         */
        battleFrameResp.prototype.frameIndex = 0;

        /**
         * battleFrameResp data.
         * @member {Array.<proto.IbattleServerFrameData>} data
         * @memberof proto.battleFrameResp
         * @instance
         */
        battleFrameResp.prototype.data = $util.emptyArray;

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
            if (message.frameIndex != null && Object.hasOwnProperty.call(message, "frameIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.frameIndex);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.proto.battleServerFrameData.encode(message.data[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
        battleFrameResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.battleFrameResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                        message.frameIndex = reader.int32();
                        break;
                    }
                case 4: {
                        if (!(message.data && message.data.length))
                            message.data = [];
                        message.data.push($root.proto.battleServerFrameData.decode(reader, reader.uint32()));
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
                    break;
                }
            if (message.frameIndex != null && message.hasOwnProperty("frameIndex"))
                if (!$util.isInteger(message.frameIndex))
                    return "frameIndex: integer expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.proto.battleServerFrameData.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
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
            case "ID_BattleFrame":
            case 10:
                message.id = 10;
                break;
            }
            if (object.frameIndex != null)
                message.frameIndex = object.frameIndex | 0;
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".proto.battleFrameResp.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".proto.battleFrameResp.data: object expected");
                    message.data[i] = $root.proto.battleServerFrameData.fromObject(object.data[i]);
                }
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
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults) {
                object.code = options.enums === String ? "SUCCESS" : 0;
                object.id = options.enums === String ? "ID_FAIL" : 0;
                object.frameIndex = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.proto.RetCode[message.code] === undefined ? message.code : $root.proto.RetCode[message.code] : message.code;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.enums === String ? $root.proto.MsgId[message.id] === undefined ? message.id : $root.proto.MsgId[message.id] : message.id;
            if (message.frameIndex != null && message.hasOwnProperty("frameIndex"))
                object.frameIndex = message.frameIndex;
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.proto.battleServerFrameData.toObject(message.data[j], options);
            }
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
     * @property {number} ID_BattleFrame=10 ID_BattleFrame value
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
        values[valuesById[10] = "ID_BattleFrame"] = 10;
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
        CommonResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CommonResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
        CommonReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CommonReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
        CommonFailResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CommonFailResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
            case "ID_BattleFrame":
            case 10:
                message.id = 10;
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
        HeroInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HeroInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
        HeroInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HeroInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
        HeroInfoResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HeroInfoResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
            case "ID_BattleFrame":
            case 10:
                message.id = 10;
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
        HeroSwitchReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HeroSwitchReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
        HeroSwitchResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HeroSwitchResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
            case "ID_BattleFrame":
            case 10:
                message.id = 10;
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
        RegisterReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RegisterReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
        RegisterResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RegisterResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
            case "ID_BattleFrame":
            case 10:
                message.id = 10;
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
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
        LoginResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.LoginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
            case "ID_BattleFrame":
            case 10:
                message.id = 10;
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
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
        userHeadChangeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.userHeadChangeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
        userHeadChangeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.userHeadChangeResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
            case "ID_BattleFrame":
            case 10:
                message.id = 10;
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
