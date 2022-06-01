/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.aruba_telemetry = (function() {

    /**
     * Namespace aruba_telemetry.
     * @exports aruba_telemetry
     * @namespace
     */
    var aruba_telemetry = {};

    /**
     * ActionStatus enum.
     * @name aruba_telemetry.ActionStatus
     * @enum {string}
     * @property {number} failureGeneric=0 failureGeneric value
     * @property {number} success=1 success value
     * @property {number} deviceNotFound=2 deviceNotFound value
     * @property {number} apNotFound=3 apNotFound value
     * @property {number} actionTimeout=4 actionTimeout value
     * @property {number} connectionAborted=5 connectionAborted value
     * @property {number} authenticationFailed=6 authenticationFailed value
     * @property {number} notConnected=7 notConnected value
     * @property {number} previousActionFailed=8 previousActionFailed value
     * @property {number} alreadyConnected=9 alreadyConnected value
     * @property {number} noMoreConnectionSlots=10 noMoreConnectionSlots value
     * @property {number} decodingFailed=11 decodingFailed value
     * @property {number} characteristicNotFound=12 characteristicNotFound value
     * @property {number} invalidRequest=13 invalidRequest value
     * @property {number} gattError=14 gattError value
     * @property {number} encryptionFailed=15 encryptionFailed value
     */
    aruba_telemetry.ActionStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "failureGeneric"] = 0;
        values[valuesById[1] = "success"] = 1;
        values[valuesById[2] = "deviceNotFound"] = 2;
        values[valuesById[3] = "apNotFound"] = 3;
        values[valuesById[4] = "actionTimeout"] = 4;
        values[valuesById[5] = "connectionAborted"] = 5;
        values[valuesById[6] = "authenticationFailed"] = 6;
        values[valuesById[7] = "notConnected"] = 7;
        values[valuesById[8] = "previousActionFailed"] = 8;
        values[valuesById[9] = "alreadyConnected"] = 9;
        values[valuesById[10] = "noMoreConnectionSlots"] = 10;
        values[valuesById[11] = "decodingFailed"] = 11;
        values[valuesById[12] = "characteristicNotFound"] = 12;
        values[valuesById[13] = "invalidRequest"] = 13;
        values[valuesById[14] = "gattError"] = 14;
        values[valuesById[15] = "encryptionFailed"] = 15;
        return values;
    })();

    aruba_telemetry.ActionResult = (function() {

        /**
         * Properties of an ActionResult.
         * @memberof aruba_telemetry
         * @interface IActionResult
         * @property {string|null} [actionId] ActionResult actionId
         * @property {aruba_telemetry.ActionType|null} [type] ActionResult type
         * @property {Uint8Array|null} [deviceMac] ActionResult deviceMac
         * @property {aruba_telemetry.ActionStatus|null} [status] ActionResult status
         * @property {string|null} [statusString] ActionResult statusString
         * @property {aruba_telemetry.IBleBondingKey|null} [bondingKey] ActionResult bondingKey
         * @property {Uint8Array|null} [apbMac] ActionResult apbMac
         */

        /**
         * Constructs a new ActionResult.
         * @memberof aruba_telemetry
         * @classdesc Represents an ActionResult.
         * @implements IActionResult
         * @constructor
         * @param {aruba_telemetry.IActionResult=} [properties] Properties to set
         */
        function ActionResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActionResult actionId.
         * @member {string} actionId
         * @memberof aruba_telemetry.ActionResult
         * @instance
         */
        ActionResult.prototype.actionId = "";

        /**
         * ActionResult type.
         * @member {aruba_telemetry.ActionType} type
         * @memberof aruba_telemetry.ActionResult
         * @instance
         */
        ActionResult.prototype.type = 0;

        /**
         * ActionResult deviceMac.
         * @member {Uint8Array} deviceMac
         * @memberof aruba_telemetry.ActionResult
         * @instance
         */
        ActionResult.prototype.deviceMac = $util.newBuffer([]);

        /**
         * ActionResult status.
         * @member {aruba_telemetry.ActionStatus} status
         * @memberof aruba_telemetry.ActionResult
         * @instance
         */
        ActionResult.prototype.status = 0;

        /**
         * ActionResult statusString.
         * @member {string} statusString
         * @memberof aruba_telemetry.ActionResult
         * @instance
         */
        ActionResult.prototype.statusString = "";

        /**
         * ActionResult bondingKey.
         * @member {aruba_telemetry.IBleBondingKey|null|undefined} bondingKey
         * @memberof aruba_telemetry.ActionResult
         * @instance
         */
        ActionResult.prototype.bondingKey = null;

        /**
         * ActionResult apbMac.
         * @member {Uint8Array} apbMac
         * @memberof aruba_telemetry.ActionResult
         * @instance
         */
        ActionResult.prototype.apbMac = $util.newBuffer([]);

        /**
         * Creates a new ActionResult instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.ActionResult
         * @static
         * @param {aruba_telemetry.IActionResult=} [properties] Properties to set
         * @returns {aruba_telemetry.ActionResult} ActionResult instance
         */
        ActionResult.create = function create(properties) {
            return new ActionResult(properties);
        };

        /**
         * Encodes the specified ActionResult message. Does not implicitly {@link aruba_telemetry.ActionResult.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.ActionResult
         * @static
         * @param {aruba_telemetry.IActionResult} message ActionResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.actionId != null && message.hasOwnProperty("actionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.actionId);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.deviceMac != null && message.hasOwnProperty("deviceMac"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.deviceMac);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
            if (message.statusString != null && message.hasOwnProperty("statusString"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.statusString);
            if (message.bondingKey != null && message.hasOwnProperty("bondingKey"))
                $root.aruba_telemetry.BleBondingKey.encode(message.bondingKey, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.apbMac != null && message.hasOwnProperty("apbMac"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.apbMac);
            return writer;
        };

        /**
         * Encodes the specified ActionResult message, length delimited. Does not implicitly {@link aruba_telemetry.ActionResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.ActionResult
         * @static
         * @param {aruba_telemetry.IActionResult} message ActionResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActionResult message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.ActionResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.ActionResult} ActionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.ActionResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.actionId = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.deviceMac = reader.bytes().toString('hex');
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.statusString = reader.string();
                    break;
                case 6:
                    message.bondingKey = $root.aruba_telemetry.BleBondingKey.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.apbMac = reader.bytes().toString('hex');
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ActionResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.ActionResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.ActionResult} ActionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActionResult message.
         * @function verify
         * @memberof aruba_telemetry.ActionResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.actionId != null && message.hasOwnProperty("actionId"))
                if (!$util.isString(message.actionId))
                    return "actionId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            if (message.deviceMac != null && message.hasOwnProperty("deviceMac"))
                if (!(message.deviceMac && typeof message.deviceMac.length === "number" || $util.isString(message.deviceMac)))
                    return "deviceMac: buffer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
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
                case 14:
                case 15:
                    break;
                }
            if (message.statusString != null && message.hasOwnProperty("statusString"))
                if (!$util.isString(message.statusString))
                    return "statusString: string expected";
            if (message.bondingKey != null && message.hasOwnProperty("bondingKey")) {
                var error = $root.aruba_telemetry.BleBondingKey.verify(message.bondingKey);
                if (error)
                    return "bondingKey." + error;
            }
            if (message.apbMac != null && message.hasOwnProperty("apbMac"))
                if (!(message.apbMac && typeof message.apbMac.length === "number" || $util.isString(message.apbMac)))
                    return "apbMac: buffer expected";
            return null;
        };

        /**
         * Creates an ActionResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.ActionResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.ActionResult} ActionResult
         */
        ActionResult.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.ActionResult)
                return object;
            var message = new $root.aruba_telemetry.ActionResult();
            if (object.actionId != null)
                message.actionId = String(object.actionId);
            switch (object.type) {
            case "bleConnect":
            case 0:
                message.type = 0;
                break;
            case "bleDisconnect":
            case 1:
                message.type = 1;
                break;
            case "gattRead":
            case 2:
                message.type = 2;
                break;
            case "gattWrite":
            case 3:
                message.type = 3;
                break;
            case "gattWriteWithResponse":
            case 4:
                message.type = 4;
                break;
            case "gattNotification":
            case 5:
                message.type = 5;
                break;
            case "gattIndication":
            case 6:
                message.type = 6;
                break;
            case "bleAuthenticate":
            case 7:
                message.type = 7;
                break;
            case "bleEncrypt":
            case 8:
                message.type = 8;
                break;
            }
            if (object.deviceMac != null)
                if (typeof object.deviceMac === "string")
                    $util.base64.decode(object.deviceMac, message.deviceMac = $util.newBuffer($util.base64.length(object.deviceMac)), 0);
                else if (object.deviceMac.length)
                    message.deviceMac = object.deviceMac;
            switch (object.status) {
            case "failureGeneric":
            case 0:
                message.status = 0;
                break;
            case "success":
            case 1:
                message.status = 1;
                break;
            case "deviceNotFound":
            case 2:
                message.status = 2;
                break;
            case "apNotFound":
            case 3:
                message.status = 3;
                break;
            case "actionTimeout":
            case 4:
                message.status = 4;
                break;
            case "connectionAborted":
            case 5:
                message.status = 5;
                break;
            case "authenticationFailed":
            case 6:
                message.status = 6;
                break;
            case "notConnected":
            case 7:
                message.status = 7;
                break;
            case "previousActionFailed":
            case 8:
                message.status = 8;
                break;
            case "alreadyConnected":
            case 9:
                message.status = 9;
                break;
            case "noMoreConnectionSlots":
            case 10:
                message.status = 10;
                break;
            case "decodingFailed":
            case 11:
                message.status = 11;
                break;
            case "characteristicNotFound":
            case 12:
                message.status = 12;
                break;
            case "invalidRequest":
            case 13:
                message.status = 13;
                break;
            case "gattError":
            case 14:
                message.status = 14;
                break;
            case "encryptionFailed":
            case 15:
                message.status = 15;
                break;
            }
            if (object.statusString != null)
                message.statusString = String(object.statusString);
            if (object.bondingKey != null) {
                if (typeof object.bondingKey !== "object")
                    throw TypeError(".aruba_telemetry.ActionResult.bondingKey: object expected");
                message.bondingKey = $root.aruba_telemetry.BleBondingKey.fromObject(object.bondingKey);
            }
            if (object.apbMac != null)
                if (typeof object.apbMac === "string")
                    $util.base64.decode(object.apbMac, message.apbMac = $util.newBuffer($util.base64.length(object.apbMac)), 0);
                else if (object.apbMac.length)
                    message.apbMac = object.apbMac;
            return message;
        };

        /**
         * Creates a plain object from an ActionResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.ActionResult
         * @static
         * @param {aruba_telemetry.ActionResult} message ActionResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.actionId = "";
                object.type = options.enums === String ? "bleConnect" : 0;
                if (options.bytes === String)
                    object.deviceMac = "";
                else {
                    object.deviceMac = [];
                    if (options.bytes !== Array)
                        object.deviceMac = $util.newBuffer(object.deviceMac);
                }
                object.status = options.enums === String ? "failureGeneric" : 0;
                object.statusString = "";
                object.bondingKey = null;
                if (options.bytes === String)
                    object.apbMac = "";
                else {
                    object.apbMac = [];
                    if (options.bytes !== Array)
                        object.apbMac = $util.newBuffer(object.apbMac);
                }
            }
            if (message.actionId != null && message.hasOwnProperty("actionId"))
                object.actionId = message.actionId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.aruba_telemetry.ActionType[message.type] : message.type;
            if (message.deviceMac != null && message.hasOwnProperty("deviceMac"))
                object.deviceMac = message.deviceMac;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.aruba_telemetry.ActionStatus[message.status] : message.status;
            if (message.statusString != null && message.hasOwnProperty("statusString"))
                object.statusString = message.statusString;
            if (message.bondingKey != null && message.hasOwnProperty("bondingKey"))
                object.bondingKey = $root.aruba_telemetry.BleBondingKey.toObject(message.bondingKey, options);
            if (message.apbMac != null && message.hasOwnProperty("apbMac"))
                object.apbMac = message.apbMac;
            return object;
        };

        /**
         * Converts this ActionResult to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.ActionResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActionResult;
    })();

    /**
     * deviceClassEnum enum.
     * @name aruba_telemetry.deviceClassEnum
     * @enum {string}
     * @property {number} unclassified=0 unclassified value
     * @property {number} arubaBeacon=1 arubaBeacon value
     * @property {number} arubaTag=2 arubaTag value
     * @property {number} zfTag=3 zfTag value
     * @property {number} stanleyTag=4 stanleyTag value
     * @property {number} virginBeacon=5 virginBeacon value
     * @property {number} enoceanSensor=6 enoceanSensor value
     * @property {number} enoceanSwitch=7 enoceanSwitch value
     * @property {number} iBeacon=8 iBeacon value
     * @property {number} allBleData=9 allBleData value
     * @property {number} RawBleData=10 RawBleData value
     * @property {number} eddystone=11 eddystone value
     * @property {number} assaAbloy=12 assaAbloy value
     * @property {number} arubaSensor=13 arubaSensor value
     * @property {number} abbSensor=14 abbSensor value
     * @property {number} wifiTag=15 wifiTag value
     * @property {number} wifiAssocSta=16 wifiAssocSta value
     * @property {number} wifiUnassocSta=17 wifiUnassocSta value
     * @property {number} mysphera=18 mysphera value
     * @property {number} sBeacon=19 sBeacon value
     * @property {number} wiliot=20 wiliot value
     * @property {number} ZSD=21 ZSD value
     * @property {number} serialdata=22 serialdata value
     * @property {number} exposureNotification=23 exposureNotification value
     * @property {number} onity=24 onity value
     * @property {number} minew=25 minew value
     * @property {number} google=26 google value
     * @property {number} polestar=27 polestar value
     * @property {number} blyott=28 blyott value
     * @property {number} diract=29 diract value
     * @property {number} gwahygiene=30 gwahygiene value
     * @property {number} noneBleData=31 noneBleData value
     */
    aruba_telemetry.deviceClassEnum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "unclassified"] = 0;
        values[valuesById[1] = "arubaBeacon"] = 1;
        values[valuesById[2] = "arubaTag"] = 2;
        values[valuesById[3] = "zfTag"] = 3;
        values[valuesById[4] = "stanleyTag"] = 4;
        values[valuesById[5] = "virginBeacon"] = 5;
        values[valuesById[6] = "enoceanSensor"] = 6;
        values[valuesById[7] = "enoceanSwitch"] = 7;
        values[valuesById[8] = "iBeacon"] = 8;
        values[valuesById[9] = "allBleData"] = 9;
        values[valuesById[10] = "RawBleData"] = 10;
        values[valuesById[11] = "eddystone"] = 11;
        values[valuesById[12] = "assaAbloy"] = 12;
        values[valuesById[13] = "arubaSensor"] = 13;
        values[valuesById[14] = "abbSensor"] = 14;
        values[valuesById[15] = "wifiTag"] = 15;
        values[valuesById[16] = "wifiAssocSta"] = 16;
        values[valuesById[17] = "wifiUnassocSta"] = 17;
        values[valuesById[18] = "mysphera"] = 18;
        values[valuesById[19] = "sBeacon"] = 19;
        values[valuesById[20] = "wiliot"] = 20;
        values[valuesById[21] = "ZSD"] = 21;
        values[valuesById[22] = "serialdata"] = 22;
        values[valuesById[23] = "exposureNotification"] = 23;
        values[valuesById[24] = "onity"] = 24;
        values[valuesById[25] = "minew"] = 25;
        values[valuesById[26] = "google"] = 26;
        values[valuesById[27] = "polestar"] = 27;
        values[valuesById[28] = "blyott"] = 28;
        values[valuesById[29] = "diract"] = 29;
        values[valuesById[30] = "gwahygiene"] = 30;
        values[valuesById[31] = "noneBleData"] = 31;
        return values;
    })();

    /**
     * ActionType enum.
     * @name aruba_telemetry.ActionType
     * @enum {string}
     * @property {number} bleConnect=0 bleConnect value
     * @property {number} bleDisconnect=1 bleDisconnect value
     * @property {number} gattRead=2 gattRead value
     * @property {number} gattWrite=3 gattWrite value
     * @property {number} gattWriteWithResponse=4 gattWriteWithResponse value
     * @property {number} gattNotification=5 gattNotification value
     * @property {number} gattIndication=6 gattIndication value
     * @property {number} bleAuthenticate=7 bleAuthenticate value
     * @property {number} bleEncrypt=8 bleEncrypt value
     */
    aruba_telemetry.ActionType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "bleConnect"] = 0;
        values[valuesById[1] = "bleDisconnect"] = 1;
        values[valuesById[2] = "gattRead"] = 2;
        values[valuesById[3] = "gattWrite"] = 3;
        values[valuesById[4] = "gattWriteWithResponse"] = 4;
        values[valuesById[5] = "gattNotification"] = 5;
        values[valuesById[6] = "gattIndication"] = 6;
        values[valuesById[7] = "bleAuthenticate"] = 7;
        values[valuesById[8] = "bleEncrypt"] = 8;
        return values;
    })();

    /**
     * NbTopic enum.
     * @name aruba_telemetry.NbTopic
     * @enum {string}
     * @property {number} telemetry=0 telemetry value
     * @property {number} actionResults=1 actionResults value
     * @property {number} characteristics=2 characteristics value
     * @property {number} bleData=3 bleData value
     * @property {number} wifiData=4 wifiData value
     * @property {number} deviceCount=5 deviceCount value
     * @property {number} status=6 status value
     * @property {number} zbNbData=7 zbNbData value
     * @property {number} serialDataNb=8 serialDataNb value
     * @property {number} apHealthUpdate=9 apHealthUpdate value
     */
    aruba_telemetry.NbTopic = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "telemetry"] = 0;
        values[valuesById[1] = "actionResults"] = 1;
        values[valuesById[2] = "characteristics"] = 2;
        values[valuesById[3] = "bleData"] = 3;
        values[valuesById[4] = "wifiData"] = 4;
        values[valuesById[5] = "deviceCount"] = 5;
        values[valuesById[6] = "status"] = 6;
        values[valuesById[7] = "zbNbData"] = 7;
        values[valuesById[8] = "serialDataNb"] = 8;
        values[valuesById[9] = "apHealthUpdate"] = 9;
        return values;
    })();

    /**
     * SbTopic enum.
     * @name aruba_telemetry.SbTopic
     * @enum {string}
     * @property {number} actions=0 actions value
     * @property {number} config=1 config value
     * @property {number} sbStatus=2 sbStatus value
     * @property {number} zbSbData=3 zbSbData value
     * @property {number} serialDataSb=4 serialDataSb value
     */
    aruba_telemetry.SbTopic = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "actions"] = 0;
        values[valuesById[1] = "config"] = 1;
        values[valuesById[2] = "sbStatus"] = 2;
        values[valuesById[3] = "zbSbData"] = 3;
        values[valuesById[4] = "serialDataSb"] = 4;
        return values;
    })();

    aruba_telemetry.BleBondingKey = (function() {

        /**
         * Properties of a BleBondingKey.
         * @memberof aruba_telemetry
         * @interface IBleBondingKey
         * @property {Uint8Array|null} [key] BleBondingKey key
         */

        /**
         * Constructs a new BleBondingKey.
         * @memberof aruba_telemetry
         * @classdesc Represents a BleBondingKey.
         * @implements IBleBondingKey
         * @constructor
         * @param {aruba_telemetry.IBleBondingKey=} [properties] Properties to set
         */
        function BleBondingKey(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BleBondingKey key.
         * @member {Uint8Array} key
         * @memberof aruba_telemetry.BleBondingKey
         * @instance
         */
        BleBondingKey.prototype.key = $util.newBuffer([]);

        /**
         * Creates a new BleBondingKey instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.BleBondingKey
         * @static
         * @param {aruba_telemetry.IBleBondingKey=} [properties] Properties to set
         * @returns {aruba_telemetry.BleBondingKey} BleBondingKey instance
         */
        BleBondingKey.create = function create(properties) {
            return new BleBondingKey(properties);
        };

        /**
         * Encodes the specified BleBondingKey message. Does not implicitly {@link aruba_telemetry.BleBondingKey.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.BleBondingKey
         * @static
         * @param {aruba_telemetry.IBleBondingKey} message BleBondingKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BleBondingKey.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.key);
            return writer;
        };

        /**
         * Encodes the specified BleBondingKey message, length delimited. Does not implicitly {@link aruba_telemetry.BleBondingKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.BleBondingKey
         * @static
         * @param {aruba_telemetry.IBleBondingKey} message BleBondingKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BleBondingKey.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BleBondingKey message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.BleBondingKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.BleBondingKey} BleBondingKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BleBondingKey.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.BleBondingKey();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes().toString('hex');
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BleBondingKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.BleBondingKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.BleBondingKey} BleBondingKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BleBondingKey.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BleBondingKey message.
         * @function verify
         * @memberof aruba_telemetry.BleBondingKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BleBondingKey.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                    return "key: buffer expected";
            return null;
        };

        /**
         * Creates a BleBondingKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.BleBondingKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.BleBondingKey} BleBondingKey
         */
        BleBondingKey.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.BleBondingKey)
                return object;
            var message = new $root.aruba_telemetry.BleBondingKey();
            if (object.key != null)
                if (typeof object.key === "string")
                    $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                else if (object.key.length)
                    message.key = object.key;
            return message;
        };

        /**
         * Creates a plain object from a BleBondingKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.BleBondingKey
         * @static
         * @param {aruba_telemetry.BleBondingKey} message BleBondingKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BleBondingKey.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.key = "";
                else {
                    object.key = [];
                    if (options.bytes !== Array)
                        object.key = $util.newBuffer(object.key);
                }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            return object;
        };

        /**
         * Converts this BleBondingKey to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.BleBondingKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BleBondingKey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BleBondingKey;
    })();

    aruba_telemetry.Meta = (function() {

        /**
         * Properties of a Meta.
         * @memberof aruba_telemetry
         * @interface IMeta
         * @property {number|Long} version Meta version
         * @property {string|null} [access_token] Meta access_token
         * @property {aruba_telemetry.NbTopic|null} [nbTopic] Meta nbTopic
         * @property {aruba_telemetry.SbTopic|null} [sbTopic] Meta sbTopic
         */

        /**
         * Constructs a new Meta.
         * @memberof aruba_telemetry
         * @classdesc Represents a Meta.
         * @implements IMeta
         * @constructor
         * @param {aruba_telemetry.IMeta=} [properties] Properties to set
         */
        function Meta(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Meta version.
         * @member {number|Long} version
         * @memberof aruba_telemetry.Meta
         * @instance
         */
        Meta.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Meta access_token.
         * @member {string} access_token
         * @memberof aruba_telemetry.Meta
         * @instance
         */
        Meta.prototype.access_token = "";

        /**
         * Meta nbTopic.
         * @member {aruba_telemetry.NbTopic} nbTopic
         * @memberof aruba_telemetry.Meta
         * @instance
         */
        Meta.prototype.nbTopic = 0;

        /**
         * Meta sbTopic.
         * @member {aruba_telemetry.SbTopic} sbTopic
         * @memberof aruba_telemetry.Meta
         * @instance
         */
        Meta.prototype.sbTopic = 0;

        /**
         * Creates a new Meta instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Meta
         * @static
         * @param {aruba_telemetry.IMeta=} [properties] Properties to set
         * @returns {aruba_telemetry.Meta} Meta instance
         */
        Meta.create = function create(properties) {
            return new Meta(properties);
        };

        /**
         * Encodes the specified Meta message. Does not implicitly {@link aruba_telemetry.Meta.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Meta
         * @static
         * @param {aruba_telemetry.IMeta} message Meta message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Meta.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
            if (message.access_token != null && message.hasOwnProperty("access_token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.access_token);
            if (message.nbTopic != null && message.hasOwnProperty("nbTopic"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nbTopic);
            if (message.sbTopic != null && message.hasOwnProperty("sbTopic"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sbTopic);
            return writer;
        };

        /**
         * Encodes the specified Meta message, length delimited. Does not implicitly {@link aruba_telemetry.Meta.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Meta
         * @static
         * @param {aruba_telemetry.IMeta} message Meta message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Meta.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Meta message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Meta
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Meta} Meta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Meta.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Meta();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.uint64();
                    break;
                case 2:
                    message.access_token = reader.string();
                    break;
                case 3:
                    message.nbTopic = reader.int32();
                    break;
                case 4:
                    message.sbTopic = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("version"))
                throw $util.ProtocolError("missing required 'version'", { instance: message });
            return message;
        };

        /**
         * Decodes a Meta message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Meta
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Meta} Meta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Meta.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Meta message.
         * @function verify
         * @memberof aruba_telemetry.Meta
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Meta.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                return "version: integer|Long expected";
            if (message.access_token != null && message.hasOwnProperty("access_token"))
                if (!$util.isString(message.access_token))
                    return "access_token: string expected";
            if (message.nbTopic != null && message.hasOwnProperty("nbTopic"))
                switch (message.nbTopic) {
                default:
                    return "nbTopic: enum value expected";
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
                    break;
                }
            if (message.sbTopic != null && message.hasOwnProperty("sbTopic"))
                switch (message.sbTopic) {
                default:
                    return "sbTopic: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a Meta message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Meta
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Meta} Meta
         */
        Meta.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Meta)
                return object;
            var message = new $root.aruba_telemetry.Meta();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            if (object.access_token != null)
                message.access_token = String(object.access_token);
            switch (object.nbTopic) {
            case "telemetry":
            case 0:
                message.nbTopic = 0;
                break;
            case "actionResults":
            case 1:
                message.nbTopic = 1;
                break;
            case "characteristics":
            case 2:
                message.nbTopic = 2;
                break;
            case "bleData":
            case 3:
                message.nbTopic = 3;
                break;
            case "wifiData":
            case 4:
                message.nbTopic = 4;
                break;
            case "deviceCount":
            case 5:
                message.nbTopic = 5;
                break;
            case "status":
            case 6:
                message.nbTopic = 6;
                break;
            case "zbNbData":
            case 7:
                message.nbTopic = 7;
                break;
            case "serialDataNb":
            case 8:
                message.nbTopic = 8;
                break;
            case "apHealthUpdate":
            case 9:
                message.nbTopic = 9;
                break;
            }
            switch (object.sbTopic) {
            case "actions":
            case 0:
                message.sbTopic = 0;
                break;
            case "config":
            case 1:
                message.sbTopic = 1;
                break;
            case "sbStatus":
            case 2:
                message.sbTopic = 2;
                break;
            case "zbSbData":
            case 3:
                message.sbTopic = 3;
                break;
            case "serialDataSb":
            case 4:
                message.sbTopic = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Meta message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Meta
         * @static
         * @param {aruba_telemetry.Meta} message Meta
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Meta.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
                object.access_token = "";
                object.nbTopic = options.enums === String ? "telemetry" : 0;
                object.sbTopic = options.enums === String ? "actions" : 0;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
            if (message.access_token != null && message.hasOwnProperty("access_token"))
                object.access_token = message.access_token;
            if (message.nbTopic != null && message.hasOwnProperty("nbTopic"))
                object.nbTopic = options.enums === String ? $root.aruba_telemetry.NbTopic[message.nbTopic] : message.nbTopic;
            if (message.sbTopic != null && message.hasOwnProperty("sbTopic"))
                object.sbTopic = options.enums === String ? $root.aruba_telemetry.SbTopic[message.sbTopic] : message.sbTopic;
            return object;
        };

        /**
         * Converts this Meta to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Meta
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Meta.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Meta;
    })();

    /**
     * HealthStatus enum.
     * @name aruba_telemetry.HealthStatus
     * @enum {string}
     * @property {number} healthy=0 healthy value
     * @property {number} degraded=1 degraded value
     * @property {number} unavailable=2 unavailable value
     */
    aruba_telemetry.HealthStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "healthy"] = 0;
        values[valuesById[1] = "degraded"] = 1;
        values[valuesById[2] = "unavailable"] = 2;
        return values;
    })();

    /**
     * IotRadioFirmware enum.
     * @name aruba_telemetry.IotRadioFirmware
     * @enum {string}
     * @property {number} arubaDefault=0 arubaDefault value
     */
    aruba_telemetry.IotRadioFirmware = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "arubaDefault"] = 0;
        return values;
    })();

    /**
     * IotRadioType enum.
     * @name aruba_telemetry.IotRadioType
     * @enum {string}
     * @property {number} gen1=0 gen1 value
     * @property {number} gen2=1 gen2 value
     */
    aruba_telemetry.IotRadioType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "gen1"] = 0;
        values[valuesById[1] = "gen2"] = 1;
        return values;
    })();

    aruba_telemetry.IotRadio = (function() {

        /**
         * Properties of an IotRadio.
         * @memberof aruba_telemetry
         * @interface IIotRadio
         * @property {Uint8Array|null} [mac] IotRadio mac
         * @property {aruba_telemetry.IotRadioType|null} [hardware] IotRadio hardware
         * @property {aruba_telemetry.IotRadioFirmware|null} [firmware] IotRadio firmware
         * @property {aruba_telemetry.HealthStatus|null} [health] IotRadio health
         * @property {boolean|null} [external] IotRadio external
         */

        /**
         * Constructs a new IotRadio.
         * @memberof aruba_telemetry
         * @classdesc Represents an IotRadio.
         * @implements IIotRadio
         * @constructor
         * @param {aruba_telemetry.IIotRadio=} [properties] Properties to set
         */
        function IotRadio(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IotRadio mac.
         * @member {Uint8Array} mac
         * @memberof aruba_telemetry.IotRadio
         * @instance
         */
        IotRadio.prototype.mac = $util.newBuffer([]);

        /**
         * IotRadio hardware.
         * @member {aruba_telemetry.IotRadioType} hardware
         * @memberof aruba_telemetry.IotRadio
         * @instance
         */
        IotRadio.prototype.hardware = 0;

        /**
         * IotRadio firmware.
         * @member {aruba_telemetry.IotRadioFirmware} firmware
         * @memberof aruba_telemetry.IotRadio
         * @instance
         */
        IotRadio.prototype.firmware = 0;

        /**
         * IotRadio health.
         * @member {aruba_telemetry.HealthStatus} health
         * @memberof aruba_telemetry.IotRadio
         * @instance
         */
        IotRadio.prototype.health = 0;

        /**
         * IotRadio external.
         * @member {boolean} external
         * @memberof aruba_telemetry.IotRadio
         * @instance
         */
        IotRadio.prototype.external = false;

        /**
         * Creates a new IotRadio instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.IotRadio
         * @static
         * @param {aruba_telemetry.IIotRadio=} [properties] Properties to set
         * @returns {aruba_telemetry.IotRadio} IotRadio instance
         */
        IotRadio.create = function create(properties) {
            return new IotRadio(properties);
        };

        /**
         * Encodes the specified IotRadio message. Does not implicitly {@link aruba_telemetry.IotRadio.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.IotRadio
         * @static
         * @param {aruba_telemetry.IIotRadio} message IotRadio message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IotRadio.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mac != null && message.hasOwnProperty("mac"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.mac);
            if (message.hardware != null && message.hasOwnProperty("hardware"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.hardware);
            if (message.firmware != null && message.hasOwnProperty("firmware"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.firmware);
            if (message.health != null && message.hasOwnProperty("health"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.health);
            if (message.external != null && message.hasOwnProperty("external"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.external);
            return writer;
        };

        /**
         * Encodes the specified IotRadio message, length delimited. Does not implicitly {@link aruba_telemetry.IotRadio.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.IotRadio
         * @static
         * @param {aruba_telemetry.IIotRadio} message IotRadio message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IotRadio.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IotRadio message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.IotRadio
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.IotRadio} IotRadio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IotRadio.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.IotRadio();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mac = reader.bytes().toString('hex');
                    break;
                case 2:
                    message.hardware = reader.int32();
                    break;
                case 3:
                    message.firmware = reader.int32();
                    break;
                case 4:
                    message.health = reader.int32();
                    break;
                case 5:
                    message.external = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IotRadio message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.IotRadio
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.IotRadio} IotRadio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IotRadio.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IotRadio message.
         * @function verify
         * @memberof aruba_telemetry.IotRadio
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IotRadio.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mac != null && message.hasOwnProperty("mac"))
                if (!(message.mac && typeof message.mac.length === "number" || $util.isString(message.mac)))
                    return "mac: buffer expected";
            if (message.hardware != null && message.hasOwnProperty("hardware"))
                switch (message.hardware) {
                default:
                    return "hardware: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.firmware != null && message.hasOwnProperty("firmware"))
                switch (message.firmware) {
                default:
                    return "firmware: enum value expected";
                case 0:
                    break;
                }
            if (message.health != null && message.hasOwnProperty("health"))
                switch (message.health) {
                default:
                    return "health: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.external != null && message.hasOwnProperty("external"))
                if (typeof message.external !== "boolean")
                    return "external: boolean expected";
            return null;
        };

        /**
         * Creates an IotRadio message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.IotRadio
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.IotRadio} IotRadio
         */
        IotRadio.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.IotRadio)
                return object;
            var message = new $root.aruba_telemetry.IotRadio();
            if (object.mac != null)
                if (typeof object.mac === "string")
                    $util.base64.decode(object.mac, message.mac = $util.newBuffer($util.base64.length(object.mac)), 0);
                else if (object.mac.length)
                    message.mac = object.mac;
            switch (object.hardware) {
            case "gen1":
            case 0:
                message.hardware = 0;
                break;
            case "gen2":
            case 1:
                message.hardware = 1;
                break;
            }
            switch (object.firmware) {
            case "arubaDefault":
            case 0:
                message.firmware = 0;
                break;
            }
            switch (object.health) {
            case "healthy":
            case 0:
                message.health = 0;
                break;
            case "degraded":
            case 1:
                message.health = 1;
                break;
            case "unavailable":
            case 2:
                message.health = 2;
                break;
            }
            if (object.external != null)
                message.external = Boolean(object.external);
            return message;
        };

        /**
         * Creates a plain object from an IotRadio message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.IotRadio
         * @static
         * @param {aruba_telemetry.IotRadio} message IotRadio
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IotRadio.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.mac = "";
                else {
                    object.mac = [];
                    if (options.bytes !== Array)
                        object.mac = $util.newBuffer(object.mac);
                }
                object.hardware = options.enums === String ? "gen1" : 0;
                object.firmware = options.enums === String ? "arubaDefault" : 0;
                object.health = options.enums === String ? "healthy" : 0;
                object.external = false;
            }
            if (message.mac != null && message.hasOwnProperty("mac"))
                object.mac = message.mac;
            if (message.hardware != null && message.hasOwnProperty("hardware"))
                object.hardware = options.enums === String ? $root.aruba_telemetry.IotRadioType[message.hardware] : message.hardware;
            if (message.firmware != null && message.hasOwnProperty("firmware"))
                object.firmware = options.enums === String ? $root.aruba_telemetry.IotRadioFirmware[message.firmware] : message.firmware;
            if (message.health != null && message.hasOwnProperty("health"))
                object.health = options.enums === String ? $root.aruba_telemetry.HealthStatus[message.health] : message.health;
            if (message.external != null && message.hasOwnProperty("external"))
                object.external = message.external;
            return object;
        };

        /**
         * Converts this IotRadio to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.IotRadio
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IotRadio.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IotRadio;
    })();

    aruba_telemetry.UsbDevice = (function() {

        /**
         * Properties of a UsbDevice.
         * @memberof aruba_telemetry
         * @interface IUsbDevice
         * @property {string|null} [identifier] UsbDevice identifier
         * @property {aruba_telemetry.HealthStatus|null} [health] UsbDevice health
         */

        /**
         * Constructs a new UsbDevice.
         * @memberof aruba_telemetry
         * @classdesc Represents a UsbDevice.
         * @implements IUsbDevice
         * @constructor
         * @param {aruba_telemetry.IUsbDevice=} [properties] Properties to set
         */
        function UsbDevice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UsbDevice identifier.
         * @member {string} identifier
         * @memberof aruba_telemetry.UsbDevice
         * @instance
         */
        UsbDevice.prototype.identifier = "";

        /**
         * UsbDevice health.
         * @member {aruba_telemetry.HealthStatus} health
         * @memberof aruba_telemetry.UsbDevice
         * @instance
         */
        UsbDevice.prototype.health = 0;

        /**
         * Creates a new UsbDevice instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.UsbDevice
         * @static
         * @param {aruba_telemetry.IUsbDevice=} [properties] Properties to set
         * @returns {aruba_telemetry.UsbDevice} UsbDevice instance
         */
        UsbDevice.create = function create(properties) {
            return new UsbDevice(properties);
        };

        /**
         * Encodes the specified UsbDevice message. Does not implicitly {@link aruba_telemetry.UsbDevice.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.UsbDevice
         * @static
         * @param {aruba_telemetry.IUsbDevice} message UsbDevice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UsbDevice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.identifier != null && message.hasOwnProperty("identifier"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.identifier);
            if (message.health != null && message.hasOwnProperty("health"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.health);
            return writer;
        };

        /**
         * Encodes the specified UsbDevice message, length delimited. Does not implicitly {@link aruba_telemetry.UsbDevice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.UsbDevice
         * @static
         * @param {aruba_telemetry.IUsbDevice} message UsbDevice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UsbDevice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UsbDevice message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.UsbDevice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.UsbDevice} UsbDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UsbDevice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.UsbDevice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
                    break;
                case 2:
                    message.health = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UsbDevice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.UsbDevice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.UsbDevice} UsbDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UsbDevice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UsbDevice message.
         * @function verify
         * @memberof aruba_telemetry.UsbDevice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UsbDevice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.identifier != null && message.hasOwnProperty("identifier"))
                if (!$util.isString(message.identifier))
                    return "identifier: string expected";
            if (message.health != null && message.hasOwnProperty("health"))
                switch (message.health) {
                default:
                    return "health: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a UsbDevice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.UsbDevice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.UsbDevice} UsbDevice
         */
        UsbDevice.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.UsbDevice)
                return object;
            var message = new $root.aruba_telemetry.UsbDevice();
            if (object.identifier != null)
                message.identifier = String(object.identifier);
            switch (object.health) {
            case "healthy":
            case 0:
                message.health = 0;
                break;
            case "degraded":
            case 1:
                message.health = 1;
                break;
            case "unavailable":
            case 2:
                message.health = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a UsbDevice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.UsbDevice
         * @static
         * @param {aruba_telemetry.UsbDevice} message UsbDevice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UsbDevice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.identifier = "";
                object.health = options.enums === String ? "healthy" : 0;
            }
            if (message.identifier != null && message.hasOwnProperty("identifier"))
                object.identifier = message.identifier;
            if (message.health != null && message.hasOwnProperty("health"))
                object.health = options.enums === String ? $root.aruba_telemetry.HealthStatus[message.health] : message.health;
            return object;
        };

        /**
         * Converts this UsbDevice to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.UsbDevice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UsbDevice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UsbDevice;
    })();

    aruba_telemetry.ApHealthUpdate = (function() {

        /**
         * Properties of an ApHealthUpdate.
         * @memberof aruba_telemetry
         * @interface IApHealthUpdate
         * @property {aruba_telemetry.HealthStatus|null} [apStatus] ApHealthUpdate apStatus
         * @property {Array.<aruba_telemetry.IIotRadio>|null} [radio] ApHealthUpdate radio
         * @property {Array.<aruba_telemetry.IUsbDevice>|null} [usb] ApHealthUpdate usb
         */

        /**
         * Constructs a new ApHealthUpdate.
         * @memberof aruba_telemetry
         * @classdesc Represents an ApHealthUpdate.
         * @implements IApHealthUpdate
         * @constructor
         * @param {aruba_telemetry.IApHealthUpdate=} [properties] Properties to set
         */
        function ApHealthUpdate(properties) {
            this.radio = [];
            this.usb = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ApHealthUpdate apStatus.
         * @member {aruba_telemetry.HealthStatus} apStatus
         * @memberof aruba_telemetry.ApHealthUpdate
         * @instance
         */
        ApHealthUpdate.prototype.apStatus = 0;

        /**
         * ApHealthUpdate radio.
         * @member {Array.<aruba_telemetry.IIotRadio>} radio
         * @memberof aruba_telemetry.ApHealthUpdate
         * @instance
         */
        ApHealthUpdate.prototype.radio = $util.emptyArray;

        /**
         * ApHealthUpdate usb.
         * @member {Array.<aruba_telemetry.IUsbDevice>} usb
         * @memberof aruba_telemetry.ApHealthUpdate
         * @instance
         */
        ApHealthUpdate.prototype.usb = $util.emptyArray;

        /**
         * Creates a new ApHealthUpdate instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.ApHealthUpdate
         * @static
         * @param {aruba_telemetry.IApHealthUpdate=} [properties] Properties to set
         * @returns {aruba_telemetry.ApHealthUpdate} ApHealthUpdate instance
         */
        ApHealthUpdate.create = function create(properties) {
            return new ApHealthUpdate(properties);
        };

        /**
         * Encodes the specified ApHealthUpdate message. Does not implicitly {@link aruba_telemetry.ApHealthUpdate.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.ApHealthUpdate
         * @static
         * @param {aruba_telemetry.IApHealthUpdate} message ApHealthUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApHealthUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.apStatus != null && message.hasOwnProperty("apStatus"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.apStatus);
            if (message.radio != null && message.radio.length)
                for (var i = 0; i < message.radio.length; ++i)
                    $root.aruba_telemetry.IotRadio.encode(message.radio[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.usb != null && message.usb.length)
                for (var i = 0; i < message.usb.length; ++i)
                    $root.aruba_telemetry.UsbDevice.encode(message.usb[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ApHealthUpdate message, length delimited. Does not implicitly {@link aruba_telemetry.ApHealthUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.ApHealthUpdate
         * @static
         * @param {aruba_telemetry.IApHealthUpdate} message ApHealthUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApHealthUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ApHealthUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.ApHealthUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.ApHealthUpdate} ApHealthUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApHealthUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.ApHealthUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.apStatus = reader.int32();
                    break;
                case 2:
                    if (!(message.radio && message.radio.length))
                        message.radio = [];
                    message.radio.push($root.aruba_telemetry.IotRadio.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.usb && message.usb.length))
                        message.usb = [];
                    message.usb.push($root.aruba_telemetry.UsbDevice.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ApHealthUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.ApHealthUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.ApHealthUpdate} ApHealthUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApHealthUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ApHealthUpdate message.
         * @function verify
         * @memberof aruba_telemetry.ApHealthUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ApHealthUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.apStatus != null && message.hasOwnProperty("apStatus"))
                switch (message.apStatus) {
                default:
                    return "apStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.radio != null && message.hasOwnProperty("radio")) {
                if (!Array.isArray(message.radio))
                    return "radio: array expected";
                for (var i = 0; i < message.radio.length; ++i) {
                    var error = $root.aruba_telemetry.IotRadio.verify(message.radio[i]);
                    if (error)
                        return "radio." + error;
                }
            }
            if (message.usb != null && message.hasOwnProperty("usb")) {
                if (!Array.isArray(message.usb))
                    return "usb: array expected";
                for (var i = 0; i < message.usb.length; ++i) {
                    var error = $root.aruba_telemetry.UsbDevice.verify(message.usb[i]);
                    if (error)
                        return "usb." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ApHealthUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.ApHealthUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.ApHealthUpdate} ApHealthUpdate
         */
        ApHealthUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.ApHealthUpdate)
                return object;
            var message = new $root.aruba_telemetry.ApHealthUpdate();
            switch (object.apStatus) {
            case "healthy":
            case 0:
                message.apStatus = 0;
                break;
            case "degraded":
            case 1:
                message.apStatus = 1;
                break;
            case "unavailable":
            case 2:
                message.apStatus = 2;
                break;
            }
            if (object.radio) {
                if (!Array.isArray(object.radio))
                    throw TypeError(".aruba_telemetry.ApHealthUpdate.radio: array expected");
                message.radio = [];
                for (var i = 0; i < object.radio.length; ++i) {
                    if (typeof object.radio[i] !== "object")
                        throw TypeError(".aruba_telemetry.ApHealthUpdate.radio: object expected");
                    message.radio[i] = $root.aruba_telemetry.IotRadio.fromObject(object.radio[i]);
                }
            }
            if (object.usb) {
                if (!Array.isArray(object.usb))
                    throw TypeError(".aruba_telemetry.ApHealthUpdate.usb: array expected");
                message.usb = [];
                for (var i = 0; i < object.usb.length; ++i) {
                    if (typeof object.usb[i] !== "object")
                        throw TypeError(".aruba_telemetry.ApHealthUpdate.usb: object expected");
                    message.usb[i] = $root.aruba_telemetry.UsbDevice.fromObject(object.usb[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ApHealthUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.ApHealthUpdate
         * @static
         * @param {aruba_telemetry.ApHealthUpdate} message ApHealthUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ApHealthUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.radio = [];
                object.usb = [];
            }
            if (options.defaults)
                object.apStatus = options.enums === String ? "healthy" : 0;
            if (message.apStatus != null && message.hasOwnProperty("apStatus"))
                object.apStatus = options.enums === String ? $root.aruba_telemetry.HealthStatus[message.apStatus] : message.apStatus;
            if (message.radio && message.radio.length) {
                object.radio = [];
                for (var j = 0; j < message.radio.length; ++j)
                    object.radio[j] = $root.aruba_telemetry.IotRadio.toObject(message.radio[j], options);
            }
            if (message.usb && message.usb.length) {
                object.usb = [];
                for (var j = 0; j < message.usb.length; ++j)
                    object.usb[j] = $root.aruba_telemetry.UsbDevice.toObject(message.usb[j], options);
            }
            return object;
        };

        /**
         * Converts this ApHealthUpdate to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.ApHealthUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ApHealthUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ApHealthUpdate;
    })();

    /**
     * BleFrameType enum.
     * @name aruba_telemetry.BleFrameType
     * @enum {string}
     * @property {number} adv_ind=0 adv_ind value
     * @property {number} adv_direct_ind=1 adv_direct_ind value
     * @property {number} adv_nonconn_ind=2 adv_nonconn_ind value
     * @property {number} scan_rsp=4 scan_rsp value
     * @property {number} adv_scan_ind=6 adv_scan_ind value
     */
    aruba_telemetry.BleFrameType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "adv_ind"] = 0;
        values[valuesById[1] = "adv_direct_ind"] = 1;
        values[valuesById[2] = "adv_nonconn_ind"] = 2;
        values[valuesById[4] = "scan_rsp"] = 4;
        values[valuesById[6] = "adv_scan_ind"] = 6;
        return values;
    })();

    /**
     * MacAddrType enum.
     * @name aruba_telemetry.MacAddrType
     * @enum {string}
     * @property {number} addr_type_public=0 addr_type_public value
     * @property {number} addr_type_static=1 addr_type_static value
     * @property {number} addr_type_private_non_resolvable=2 addr_type_private_non_resolvable value
     * @property {number} addr_type_private_resolvable=3 addr_type_private_resolvable value
     */
    aruba_telemetry.MacAddrType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "addr_type_public"] = 0;
        values[valuesById[1] = "addr_type_static"] = 1;
        values[valuesById[2] = "addr_type_private_non_resolvable"] = 2;
        values[valuesById[3] = "addr_type_private_resolvable"] = 3;
        return values;
    })();

    aruba_telemetry.BleData = (function() {

        /**
         * Properties of a BleData.
         * @memberof aruba_telemetry
         * @interface IBleData
         * @property {Uint8Array|null} [mac] BleData mac
         * @property {aruba_telemetry.BleFrameType|null} [frameType] BleData frameType
         * @property {Uint8Array|null} [data] BleData data
         * @property {number|null} [rssi] BleData rssi
         * @property {aruba_telemetry.MacAddrType|null} [addrType] BleData addrType
         * @property {Uint8Array|null} [apbMac] BleData apbMac
         */

        /**
         * Constructs a new BleData.
         * @memberof aruba_telemetry
         * @classdesc Represents a BleData.
         * @implements IBleData
         * @constructor
         * @param {aruba_telemetry.IBleData=} [properties] Properties to set
         */
        function BleData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BleData mac.
         * @member {Uint8Array} mac
         * @memberof aruba_telemetry.BleData
         * @instance
         */
        BleData.prototype.mac = $util.newBuffer([]);

        /**
         * BleData frameType.
         * @member {aruba_telemetry.BleFrameType} frameType
         * @memberof aruba_telemetry.BleData
         * @instance
         */
        BleData.prototype.frameType = 0;

        /**
         * BleData data.
         * @member {Uint8Array} data
         * @memberof aruba_telemetry.BleData
         * @instance
         */
        BleData.prototype.data = $util.newBuffer([]);

        /**
         * BleData rssi.
         * @member {number} rssi
         * @memberof aruba_telemetry.BleData
         * @instance
         */
        BleData.prototype.rssi = 0;

        /**
         * BleData addrType.
         * @member {aruba_telemetry.MacAddrType} addrType
         * @memberof aruba_telemetry.BleData
         * @instance
         */
        BleData.prototype.addrType = 0;

        /**
         * BleData apbMac.
         * @member {Uint8Array} apbMac
         * @memberof aruba_telemetry.BleData
         * @instance
         */
        BleData.prototype.apbMac = $util.newBuffer([]);

        /**
         * Creates a new BleData instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.BleData
         * @static
         * @param {aruba_telemetry.IBleData=} [properties] Properties to set
         * @returns {aruba_telemetry.BleData} BleData instance
         */
        BleData.create = function create(properties) {
            return new BleData(properties);
        };

        /**
         * Encodes the specified BleData message. Does not implicitly {@link aruba_telemetry.BleData.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.BleData
         * @static
         * @param {aruba_telemetry.IBleData} message BleData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BleData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mac != null && message.hasOwnProperty("mac"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.mac);
            if (message.frameType != null && message.hasOwnProperty("frameType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.frameType);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            if (message.rssi != null && message.hasOwnProperty("rssi"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.rssi);
            if (message.addrType != null && message.hasOwnProperty("addrType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.addrType);
            if (message.apbMac != null && message.hasOwnProperty("apbMac"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.apbMac);
            return writer;
        };

        /**
         * Encodes the specified BleData message, length delimited. Does not implicitly {@link aruba_telemetry.BleData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.BleData
         * @static
         * @param {aruba_telemetry.IBleData} message BleData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BleData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BleData message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.BleData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.BleData} BleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BleData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.BleData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mac = reader.bytes().toString('hex');
                    break;
                case 2:
                    message.frameType = reader.int32();
                    break;
                case 3:
                    message.data = reader.bytes().toString('hex');
                    break;
                case 4:
                    message.rssi = reader.sint32();
                    break;
                case 5:
                    message.addrType = reader.int32();
                    break;
                case 6:
                    message.apbMac = reader.bytes().toString('hex');
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BleData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.BleData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.BleData} BleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BleData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BleData message.
         * @function verify
         * @memberof aruba_telemetry.BleData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BleData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mac != null && message.hasOwnProperty("mac"))
                if (!(message.mac && typeof message.mac.length === "number" || $util.isString(message.mac)))
                    return "mac: buffer expected";
            if (message.frameType != null && message.hasOwnProperty("frameType"))
                switch (message.frameType) {
                default:
                    return "frameType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 4:
                case 6:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.rssi != null && message.hasOwnProperty("rssi"))
                if (!$util.isInteger(message.rssi))
                    return "rssi: integer expected";
            if (message.addrType != null && message.hasOwnProperty("addrType"))
                switch (message.addrType) {
                default:
                    return "addrType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.apbMac != null && message.hasOwnProperty("apbMac"))
                if (!(message.apbMac && typeof message.apbMac.length === "number" || $util.isString(message.apbMac)))
                    return "apbMac: buffer expected";
            return null;
        };

        /**
         * Creates a BleData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.BleData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.BleData} BleData
         */
        BleData.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.BleData)
                return object;
            var message = new $root.aruba_telemetry.BleData();
            if (object.mac != null)
                if (typeof object.mac === "string")
                    $util.base64.decode(object.mac, message.mac = $util.newBuffer($util.base64.length(object.mac)), 0);
                else if (object.mac.length)
                    message.mac = object.mac;
            switch (object.frameType) {
            case "adv_ind":
            case 0:
                message.frameType = 0;
                break;
            case "adv_direct_ind":
            case 1:
                message.frameType = 1;
                break;
            case "adv_nonconn_ind":
            case 2:
                message.frameType = 2;
                break;
            case "scan_rsp":
            case 4:
                message.frameType = 4;
                break;
            case "adv_scan_ind":
            case 6:
                message.frameType = 6;
                break;
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            if (object.rssi != null)
                message.rssi = object.rssi | 0;
            switch (object.addrType) {
            case "addr_type_public":
            case 0:
                message.addrType = 0;
                break;
            case "addr_type_static":
            case 1:
                message.addrType = 1;
                break;
            case "addr_type_private_non_resolvable":
            case 2:
                message.addrType = 2;
                break;
            case "addr_type_private_resolvable":
            case 3:
                message.addrType = 3;
                break;
            }
            if (object.apbMac != null)
                if (typeof object.apbMac === "string")
                    $util.base64.decode(object.apbMac, message.apbMac = $util.newBuffer($util.base64.length(object.apbMac)), 0);
                else if (object.apbMac.length)
                    message.apbMac = object.apbMac;
            return message;
        };

        /**
         * Creates a plain object from a BleData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.BleData
         * @static
         * @param {aruba_telemetry.BleData} message BleData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BleData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.mac = "";
                else {
                    object.mac = [];
                    if (options.bytes !== Array)
                        object.mac = $util.newBuffer(object.mac);
                }
                object.frameType = options.enums === String ? "adv_ind" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.rssi = 0;
                object.addrType = options.enums === String ? "addr_type_public" : 0;
                if (options.bytes === String)
                    object.apbMac = "";
                else {
                    object.apbMac = [];
                    if (options.bytes !== Array)
                        object.apbMac = $util.newBuffer(object.apbMac);
                }
            }
            if (message.mac != null && message.hasOwnProperty("mac"))
                object.mac = message.mac;
            if (message.frameType != null && message.hasOwnProperty("frameType"))
                object.frameType = options.enums === String ? $root.aruba_telemetry.BleFrameType[message.frameType] : message.frameType;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            if (message.rssi != null && message.hasOwnProperty("rssi"))
                object.rssi = message.rssi;
            if (message.addrType != null && message.hasOwnProperty("addrType"))
                object.addrType = options.enums === String ? $root.aruba_telemetry.MacAddrType[message.addrType] : message.addrType;
            if (message.apbMac != null && message.hasOwnProperty("apbMac"))
                object.apbMac = message.apbMac;
            return object;
        };

        /**
         * Converts this BleData to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.BleData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BleData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BleData;
    })();

    /**
     * CharProperty enum.
     * @name aruba_telemetry.CharProperty
     * @enum {string}
     * @property {number} broadcast=0 broadcast value
     * @property {number} read=1 read value
     * @property {number} writeWithoutResponse=2 writeWithoutResponse value
     * @property {number} writeWithResponse=3 writeWithResponse value
     * @property {number} notify=4 notify value
     * @property {number} indicate=5 indicate value
     * @property {number} signedWrite=6 signedWrite value
     * @property {number} writeReliable=7 writeReliable value
     * @property {number} writeAux=8 writeAux value
     */
    aruba_telemetry.CharProperty = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "broadcast"] = 0;
        values[valuesById[1] = "read"] = 1;
        values[valuesById[2] = "writeWithoutResponse"] = 2;
        values[valuesById[3] = "writeWithResponse"] = 3;
        values[valuesById[4] = "notify"] = 4;
        values[valuesById[5] = "indicate"] = 5;
        values[valuesById[6] = "signedWrite"] = 6;
        values[valuesById[7] = "writeReliable"] = 7;
        values[valuesById[8] = "writeAux"] = 8;
        return values;
    })();

    aruba_telemetry.Characteristic = (function() {

        /**
         * Properties of a Characteristic.
         * @memberof aruba_telemetry
         * @interface ICharacteristic
         * @property {Uint8Array|null} [deviceMac] Characteristic deviceMac
         * @property {Uint8Array|null} [serviceUuid] Characteristic serviceUuid
         * @property {Uint8Array|null} [characteristicUuid] Characteristic characteristicUuid
         * @property {Uint8Array|null} [value] Characteristic value
         * @property {string|null} [description] Characteristic description
         * @property {Array.<aruba_telemetry.CharProperty>|null} [properties] Characteristic properties
         */

        /**
         * Constructs a new Characteristic.
         * @memberof aruba_telemetry
         * @classdesc Represents a Characteristic.
         * @implements ICharacteristic
         * @constructor
         * @param {aruba_telemetry.ICharacteristic=} [properties] Properties to set
         */
        function Characteristic(properties) {
            this.properties = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Characteristic deviceMac.
         * @member {Uint8Array} deviceMac
         * @memberof aruba_telemetry.Characteristic
         * @instance
         */
        Characteristic.prototype.deviceMac = $util.newBuffer([]);

        /**
         * Characteristic serviceUuid.
         * @member {Uint8Array} serviceUuid
         * @memberof aruba_telemetry.Characteristic
         * @instance
         */
        Characteristic.prototype.serviceUuid = $util.newBuffer([]);

        /**
         * Characteristic characteristicUuid.
         * @member {Uint8Array} characteristicUuid
         * @memberof aruba_telemetry.Characteristic
         * @instance
         */
        Characteristic.prototype.characteristicUuid = $util.newBuffer([]);

        /**
         * Characteristic value.
         * @member {Uint8Array} value
         * @memberof aruba_telemetry.Characteristic
         * @instance
         */
        Characteristic.prototype.value = $util.newBuffer([]);

        /**
         * Characteristic description.
         * @member {string} description
         * @memberof aruba_telemetry.Characteristic
         * @instance
         */
        Characteristic.prototype.description = "";

        /**
         * Characteristic properties.
         * @member {Array.<aruba_telemetry.CharProperty>} properties
         * @memberof aruba_telemetry.Characteristic
         * @instance
         */
        Characteristic.prototype.properties = $util.emptyArray;

        /**
         * Creates a new Characteristic instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Characteristic
         * @static
         * @param {aruba_telemetry.ICharacteristic=} [properties] Properties to set
         * @returns {aruba_telemetry.Characteristic} Characteristic instance
         */
        Characteristic.create = function create(properties) {
            return new Characteristic(properties);
        };

        /**
         * Encodes the specified Characteristic message. Does not implicitly {@link aruba_telemetry.Characteristic.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Characteristic
         * @static
         * @param {aruba_telemetry.ICharacteristic} message Characteristic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Characteristic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceMac != null && message.hasOwnProperty("deviceMac"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.deviceMac);
            if (message.serviceUuid != null && message.hasOwnProperty("serviceUuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.serviceUuid);
            if (message.characteristicUuid != null && message.hasOwnProperty("characteristicUuid"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.characteristicUuid);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.value);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
            if (message.properties != null && message.properties.length)
                for (var i = 0; i < message.properties.length; ++i)
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.properties[i]);
            return writer;
        };

        /**
         * Encodes the specified Characteristic message, length delimited. Does not implicitly {@link aruba_telemetry.Characteristic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Characteristic
         * @static
         * @param {aruba_telemetry.ICharacteristic} message Characteristic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Characteristic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Characteristic message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Characteristic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Characteristic} Characteristic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Characteristic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Characteristic();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deviceMac = reader.bytes().toString('hex');
                    break;
                case 2:
                    message.serviceUuid = reader.bytes().toString('hex');
                    break;
                case 3:
                    message.characteristicUuid = reader.bytes().toString('hex');
                    break;
                case 4:
                    message.value = reader.bytes().toString('hex');
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    if (!(message.properties && message.properties.length))
                        message.properties = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.properties.push(reader.int32());
                    } else
                        message.properties.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Characteristic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Characteristic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Characteristic} Characteristic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Characteristic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Characteristic message.
         * @function verify
         * @memberof aruba_telemetry.Characteristic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Characteristic.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceMac != null && message.hasOwnProperty("deviceMac"))
                if (!(message.deviceMac && typeof message.deviceMac.length === "number" || $util.isString(message.deviceMac)))
                    return "deviceMac: buffer expected";
            if (message.serviceUuid != null && message.hasOwnProperty("serviceUuid"))
                if (!(message.serviceUuid && typeof message.serviceUuid.length === "number" || $util.isString(message.serviceUuid)))
                    return "serviceUuid: buffer expected";
            if (message.characteristicUuid != null && message.hasOwnProperty("characteristicUuid"))
                if (!(message.characteristicUuid && typeof message.characteristicUuid.length === "number" || $util.isString(message.characteristicUuid)))
                    return "characteristicUuid: buffer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                    return "value: buffer expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.properties != null && message.hasOwnProperty("properties")) {
                if (!Array.isArray(message.properties))
                    return "properties: array expected";
                for (var i = 0; i < message.properties.length; ++i)
                    switch (message.properties[i]) {
                    default:
                        return "properties: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        break;
                    }
            }
            return null;
        };

        /**
         * Creates a Characteristic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Characteristic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Characteristic} Characteristic
         */
        Characteristic.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Characteristic)
                return object;
            var message = new $root.aruba_telemetry.Characteristic();
            if (object.deviceMac != null)
                if (typeof object.deviceMac === "string")
                    $util.base64.decode(object.deviceMac, message.deviceMac = $util.newBuffer($util.base64.length(object.deviceMac)), 0);
                else if (object.deviceMac.length)
                    message.deviceMac = object.deviceMac;
            if (object.serviceUuid != null)
                if (typeof object.serviceUuid === "string")
                    $util.base64.decode(object.serviceUuid, message.serviceUuid = $util.newBuffer($util.base64.length(object.serviceUuid)), 0);
                else if (object.serviceUuid.length)
                    message.serviceUuid = object.serviceUuid;
            if (object.characteristicUuid != null)
                if (typeof object.characteristicUuid === "string")
                    $util.base64.decode(object.characteristicUuid, message.characteristicUuid = $util.newBuffer($util.base64.length(object.characteristicUuid)), 0);
                else if (object.characteristicUuid.length)
                    message.characteristicUuid = object.characteristicUuid;
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length)
                    message.value = object.value;
            if (object.description != null)
                message.description = String(object.description);
            if (object.properties) {
                if (!Array.isArray(object.properties))
                    throw TypeError(".aruba_telemetry.Characteristic.properties: array expected");
                message.properties = [];
                for (var i = 0; i < object.properties.length; ++i)
                    switch (object.properties[i]) {
                    default:
                    case "broadcast":
                    case 0:
                        message.properties[i] = 0;
                        break;
                    case "read":
                    case 1:
                        message.properties[i] = 1;
                        break;
                    case "writeWithoutResponse":
                    case 2:
                        message.properties[i] = 2;
                        break;
                    case "writeWithResponse":
                    case 3:
                        message.properties[i] = 3;
                        break;
                    case "notify":
                    case 4:
                        message.properties[i] = 4;
                        break;
                    case "indicate":
                    case 5:
                        message.properties[i] = 5;
                        break;
                    case "signedWrite":
                    case 6:
                        message.properties[i] = 6;
                        break;
                    case "writeReliable":
                    case 7:
                        message.properties[i] = 7;
                        break;
                    case "writeAux":
                    case 8:
                        message.properties[i] = 8;
                        break;
                    }
            }
            return message;
        };

        /**
         * Creates a plain object from a Characteristic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Characteristic
         * @static
         * @param {aruba_telemetry.Characteristic} message Characteristic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Characteristic.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.properties = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.deviceMac = "";
                else {
                    object.deviceMac = [];
                    if (options.bytes !== Array)
                        object.deviceMac = $util.newBuffer(object.deviceMac);
                }
                if (options.bytes === String)
                    object.serviceUuid = "";
                else {
                    object.serviceUuid = [];
                    if (options.bytes !== Array)
                        object.serviceUuid = $util.newBuffer(object.serviceUuid);
                }
                if (options.bytes === String)
                    object.characteristicUuid = "";
                else {
                    object.characteristicUuid = [];
                    if (options.bytes !== Array)
                        object.characteristicUuid = $util.newBuffer(object.characteristicUuid);
                }
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
                object.description = "";
            }
            if (message.deviceMac != null && message.hasOwnProperty("deviceMac"))
                object.deviceMac = message.deviceMac;
            if (message.serviceUuid != null && message.hasOwnProperty("serviceUuid"))
                object.serviceUuid = message.serviceUuid;
            if (message.characteristicUuid != null && message.hasOwnProperty("characteristicUuid"))
                object.characteristicUuid = message.characteristicUuid;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.properties && message.properties.length) {
                object.properties = [];
                for (var j = 0; j < message.properties.length; ++j)
                    object.properties[j] = options.enums === String ? $root.aruba_telemetry.CharProperty[message.properties[j]] : message.properties[j];
            }
            return object;
        };

        /**
         * Converts this Characteristic to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Characteristic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Characteristic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Characteristic;
    })();

    aruba_telemetry.DeviceCount = (function() {

        /**
         * Properties of a DeviceCount.
         * @memberof aruba_telemetry
         * @interface IDeviceCount
         * @property {number|null} [dev_unclassified] DeviceCount dev_unclassified
         * @property {number|null} [dev_arubaBeacon] DeviceCount dev_arubaBeacon
         * @property {number|null} [dev_arubaTag] DeviceCount dev_arubaTag
         * @property {number|null} [dev_zfTag] DeviceCount dev_zfTag
         * @property {number|null} [dev_stanleyTag] DeviceCount dev_stanleyTag
         * @property {number|null} [dev_virginBeacon] DeviceCount dev_virginBeacon
         * @property {number|null} [dev_enoceanSensor] DeviceCount dev_enoceanSensor
         * @property {number|null} [dev_enoceanSwitch] DeviceCount dev_enoceanSwitch
         * @property {number|null} [dev_iBeacon] DeviceCount dev_iBeacon
         * @property {number|null} [dev_allBleData] DeviceCount dev_allBleData
         * @property {number|null} [dev_RawBleData] DeviceCount dev_RawBleData
         * @property {number|null} [dev_eddystone] DeviceCount dev_eddystone
         * @property {number|null} [dev_assaAbloy] DeviceCount dev_assaAbloy
         * @property {number|null} [dev_arubaSensor] DeviceCount dev_arubaSensor
         * @property {number|null} [dev_abbSensor] DeviceCount dev_abbSensor
         * @property {number|null} [dev_wifiTag] DeviceCount dev_wifiTag
         * @property {number|null} [dev_wifiAssocSta] DeviceCount dev_wifiAssocSta
         * @property {number|null} [dev_wifiUnassocSta] DeviceCount dev_wifiUnassocSta
         * @property {number|null} [dev_mysphera] DeviceCount dev_mysphera
         * @property {number|null} [dev_sBeacon] DeviceCount dev_sBeacon
         * @property {number|null} [dev_onity] DeviceCount dev_onity
         * @property {number|null} [dev_minew] DeviceCount dev_minew
         * @property {number|null} [dev_google] DeviceCount dev_google
         * @property {number|null} [dev_polestar] DeviceCount dev_polestar
         * @property {number|null} [dev_blyott] DeviceCount dev_blyott
         * @property {number|null} [dev_diract] DeviceCount dev_diract
         * @property {number|null} [dev_gwahygiene] DeviceCount dev_gwahygiene
         */

        /**
         * Constructs a new DeviceCount.
         * @memberof aruba_telemetry
         * @classdesc Represents a DeviceCount.
         * @implements IDeviceCount
         * @constructor
         * @param {aruba_telemetry.IDeviceCount=} [properties] Properties to set
         */
        function DeviceCount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeviceCount dev_unclassified.
         * @member {number} dev_unclassified
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_unclassified = 0;

        /**
         * DeviceCount dev_arubaBeacon.
         * @member {number} dev_arubaBeacon
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_arubaBeacon = 0;

        /**
         * DeviceCount dev_arubaTag.
         * @member {number} dev_arubaTag
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_arubaTag = 0;

        /**
         * DeviceCount dev_zfTag.
         * @member {number} dev_zfTag
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_zfTag = 0;

        /**
         * DeviceCount dev_stanleyTag.
         * @member {number} dev_stanleyTag
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_stanleyTag = 0;

        /**
         * DeviceCount dev_virginBeacon.
         * @member {number} dev_virginBeacon
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_virginBeacon = 0;

        /**
         * DeviceCount dev_enoceanSensor.
         * @member {number} dev_enoceanSensor
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_enoceanSensor = 0;

        /**
         * DeviceCount dev_enoceanSwitch.
         * @member {number} dev_enoceanSwitch
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_enoceanSwitch = 0;

        /**
         * DeviceCount dev_iBeacon.
         * @member {number} dev_iBeacon
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_iBeacon = 0;

        /**
         * DeviceCount dev_allBleData.
         * @member {number} dev_allBleData
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_allBleData = 0;

        /**
         * DeviceCount dev_RawBleData.
         * @member {number} dev_RawBleData
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_RawBleData = 0;

        /**
         * DeviceCount dev_eddystone.
         * @member {number} dev_eddystone
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_eddystone = 0;

        /**
         * DeviceCount dev_assaAbloy.
         * @member {number} dev_assaAbloy
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_assaAbloy = 0;

        /**
         * DeviceCount dev_arubaSensor.
         * @member {number} dev_arubaSensor
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_arubaSensor = 0;

        /**
         * DeviceCount dev_abbSensor.
         * @member {number} dev_abbSensor
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_abbSensor = 0;

        /**
         * DeviceCount dev_wifiTag.
         * @member {number} dev_wifiTag
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_wifiTag = 0;

        /**
         * DeviceCount dev_wifiAssocSta.
         * @member {number} dev_wifiAssocSta
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_wifiAssocSta = 0;

        /**
         * DeviceCount dev_wifiUnassocSta.
         * @member {number} dev_wifiUnassocSta
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_wifiUnassocSta = 0;

        /**
         * DeviceCount dev_mysphera.
         * @member {number} dev_mysphera
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_mysphera = 0;

        /**
         * DeviceCount dev_sBeacon.
         * @member {number} dev_sBeacon
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_sBeacon = 0;

        /**
         * DeviceCount dev_onity.
         * @member {number} dev_onity
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_onity = 0;

        /**
         * DeviceCount dev_minew.
         * @member {number} dev_minew
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_minew = 0;

        /**
         * DeviceCount dev_google.
         * @member {number} dev_google
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_google = 0;

        /**
         * DeviceCount dev_polestar.
         * @member {number} dev_polestar
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_polestar = 0;

        /**
         * DeviceCount dev_blyott.
         * @member {number} dev_blyott
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_blyott = 0;

        /**
         * DeviceCount dev_diract.
         * @member {number} dev_diract
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_diract = 0;

        /**
         * DeviceCount dev_gwahygiene.
         * @member {number} dev_gwahygiene
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         */
        DeviceCount.prototype.dev_gwahygiene = 0;

        /**
         * Creates a new DeviceCount instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.DeviceCount
         * @static
         * @param {aruba_telemetry.IDeviceCount=} [properties] Properties to set
         * @returns {aruba_telemetry.DeviceCount} DeviceCount instance
         */
        DeviceCount.create = function create(properties) {
            return new DeviceCount(properties);
        };

        /**
         * Encodes the specified DeviceCount message. Does not implicitly {@link aruba_telemetry.DeviceCount.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.DeviceCount
         * @static
         * @param {aruba_telemetry.IDeviceCount} message DeviceCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceCount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dev_unclassified != null && message.hasOwnProperty("dev_unclassified"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.dev_unclassified);
            if (message.dev_arubaBeacon != null && message.hasOwnProperty("dev_arubaBeacon"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.dev_arubaBeacon);
            if (message.dev_arubaTag != null && message.hasOwnProperty("dev_arubaTag"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.dev_arubaTag);
            if (message.dev_zfTag != null && message.hasOwnProperty("dev_zfTag"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.dev_zfTag);
            if (message.dev_stanleyTag != null && message.hasOwnProperty("dev_stanleyTag"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.dev_stanleyTag);
            if (message.dev_virginBeacon != null && message.hasOwnProperty("dev_virginBeacon"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.dev_virginBeacon);
            if (message.dev_enoceanSensor != null && message.hasOwnProperty("dev_enoceanSensor"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.dev_enoceanSensor);
            if (message.dev_enoceanSwitch != null && message.hasOwnProperty("dev_enoceanSwitch"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.dev_enoceanSwitch);
            if (message.dev_iBeacon != null && message.hasOwnProperty("dev_iBeacon"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.dev_iBeacon);
            if (message.dev_allBleData != null && message.hasOwnProperty("dev_allBleData"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.dev_allBleData);
            if (message.dev_RawBleData != null && message.hasOwnProperty("dev_RawBleData"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.dev_RawBleData);
            if (message.dev_eddystone != null && message.hasOwnProperty("dev_eddystone"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.dev_eddystone);
            if (message.dev_assaAbloy != null && message.hasOwnProperty("dev_assaAbloy"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.dev_assaAbloy);
            if (message.dev_arubaSensor != null && message.hasOwnProperty("dev_arubaSensor"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.dev_arubaSensor);
            if (message.dev_abbSensor != null && message.hasOwnProperty("dev_abbSensor"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.dev_abbSensor);
            if (message.dev_wifiTag != null && message.hasOwnProperty("dev_wifiTag"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.dev_wifiTag);
            if (message.dev_wifiAssocSta != null && message.hasOwnProperty("dev_wifiAssocSta"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.dev_wifiAssocSta);
            if (message.dev_wifiUnassocSta != null && message.hasOwnProperty("dev_wifiUnassocSta"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.dev_wifiUnassocSta);
            if (message.dev_mysphera != null && message.hasOwnProperty("dev_mysphera"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.dev_mysphera);
            if (message.dev_sBeacon != null && message.hasOwnProperty("dev_sBeacon"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.dev_sBeacon);
            if (message.dev_onity != null && message.hasOwnProperty("dev_onity"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.dev_onity);
            if (message.dev_minew != null && message.hasOwnProperty("dev_minew"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.dev_minew);
            if (message.dev_google != null && message.hasOwnProperty("dev_google"))
                writer.uint32(/* id 23, wireType 0 =*/184).int32(message.dev_google);
            if (message.dev_polestar != null && message.hasOwnProperty("dev_polestar"))
                writer.uint32(/* id 24, wireType 0 =*/192).int32(message.dev_polestar);
            if (message.dev_blyott != null && message.hasOwnProperty("dev_blyott"))
                writer.uint32(/* id 25, wireType 0 =*/200).int32(message.dev_blyott);
            if (message.dev_diract != null && message.hasOwnProperty("dev_diract"))
                writer.uint32(/* id 26, wireType 0 =*/208).int32(message.dev_diract);
            if (message.dev_gwahygiene != null && message.hasOwnProperty("dev_gwahygiene"))
                writer.uint32(/* id 27, wireType 0 =*/216).int32(message.dev_gwahygiene);
            return writer;
        };

        /**
         * Encodes the specified DeviceCount message, length delimited. Does not implicitly {@link aruba_telemetry.DeviceCount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.DeviceCount
         * @static
         * @param {aruba_telemetry.IDeviceCount} message DeviceCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceCount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeviceCount message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.DeviceCount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.DeviceCount} DeviceCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceCount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.DeviceCount();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dev_unclassified = reader.int32();
                    break;
                case 2:
                    message.dev_arubaBeacon = reader.int32();
                    break;
                case 3:
                    message.dev_arubaTag = reader.int32();
                    break;
                case 4:
                    message.dev_zfTag = reader.int32();
                    break;
                case 5:
                    message.dev_stanleyTag = reader.int32();
                    break;
                case 6:
                    message.dev_virginBeacon = reader.int32();
                    break;
                case 7:
                    message.dev_enoceanSensor = reader.int32();
                    break;
                case 8:
                    message.dev_enoceanSwitch = reader.int32();
                    break;
                case 9:
                    message.dev_iBeacon = reader.int32();
                    break;
                case 10:
                    message.dev_allBleData = reader.int32();
                    break;
                case 11:
                    message.dev_RawBleData = reader.int32();
                    break;
                case 12:
                    message.dev_eddystone = reader.int32();
                    break;
                case 13:
                    message.dev_assaAbloy = reader.int32();
                    break;
                case 14:
                    message.dev_arubaSensor = reader.int32();
                    break;
                case 15:
                    message.dev_abbSensor = reader.int32();
                    break;
                case 16:
                    message.dev_wifiTag = reader.int32();
                    break;
                case 17:
                    message.dev_wifiAssocSta = reader.int32();
                    break;
                case 18:
                    message.dev_wifiUnassocSta = reader.int32();
                    break;
                case 19:
                    message.dev_mysphera = reader.int32();
                    break;
                case 20:
                    message.dev_sBeacon = reader.int32();
                    break;
                case 21:
                    message.dev_onity = reader.int32();
                    break;
                case 22:
                    message.dev_minew = reader.int32();
                    break;
                case 23:
                    message.dev_google = reader.int32();
                    break;
                case 24:
                    message.dev_polestar = reader.int32();
                    break;
                case 25:
                    message.dev_blyott = reader.int32();
                    break;
                case 26:
                    message.dev_diract = reader.int32();
                    break;
                case 27:
                    message.dev_gwahygiene = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeviceCount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.DeviceCount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.DeviceCount} DeviceCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceCount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeviceCount message.
         * @function verify
         * @memberof aruba_telemetry.DeviceCount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceCount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dev_unclassified != null && message.hasOwnProperty("dev_unclassified"))
                if (!$util.isInteger(message.dev_unclassified))
                    return "dev_unclassified: integer expected";
            if (message.dev_arubaBeacon != null && message.hasOwnProperty("dev_arubaBeacon"))
                if (!$util.isInteger(message.dev_arubaBeacon))
                    return "dev_arubaBeacon: integer expected";
            if (message.dev_arubaTag != null && message.hasOwnProperty("dev_arubaTag"))
                if (!$util.isInteger(message.dev_arubaTag))
                    return "dev_arubaTag: integer expected";
            if (message.dev_zfTag != null && message.hasOwnProperty("dev_zfTag"))
                if (!$util.isInteger(message.dev_zfTag))
                    return "dev_zfTag: integer expected";
            if (message.dev_stanleyTag != null && message.hasOwnProperty("dev_stanleyTag"))
                if (!$util.isInteger(message.dev_stanleyTag))
                    return "dev_stanleyTag: integer expected";
            if (message.dev_virginBeacon != null && message.hasOwnProperty("dev_virginBeacon"))
                if (!$util.isInteger(message.dev_virginBeacon))
                    return "dev_virginBeacon: integer expected";
            if (message.dev_enoceanSensor != null && message.hasOwnProperty("dev_enoceanSensor"))
                if (!$util.isInteger(message.dev_enoceanSensor))
                    return "dev_enoceanSensor: integer expected";
            if (message.dev_enoceanSwitch != null && message.hasOwnProperty("dev_enoceanSwitch"))
                if (!$util.isInteger(message.dev_enoceanSwitch))
                    return "dev_enoceanSwitch: integer expected";
            if (message.dev_iBeacon != null && message.hasOwnProperty("dev_iBeacon"))
                if (!$util.isInteger(message.dev_iBeacon))
                    return "dev_iBeacon: integer expected";
            if (message.dev_allBleData != null && message.hasOwnProperty("dev_allBleData"))
                if (!$util.isInteger(message.dev_allBleData))
                    return "dev_allBleData: integer expected";
            if (message.dev_RawBleData != null && message.hasOwnProperty("dev_RawBleData"))
                if (!$util.isInteger(message.dev_RawBleData))
                    return "dev_RawBleData: integer expected";
            if (message.dev_eddystone != null && message.hasOwnProperty("dev_eddystone"))
                if (!$util.isInteger(message.dev_eddystone))
                    return "dev_eddystone: integer expected";
            if (message.dev_assaAbloy != null && message.hasOwnProperty("dev_assaAbloy"))
                if (!$util.isInteger(message.dev_assaAbloy))
                    return "dev_assaAbloy: integer expected";
            if (message.dev_arubaSensor != null && message.hasOwnProperty("dev_arubaSensor"))
                if (!$util.isInteger(message.dev_arubaSensor))
                    return "dev_arubaSensor: integer expected";
            if (message.dev_abbSensor != null && message.hasOwnProperty("dev_abbSensor"))
                if (!$util.isInteger(message.dev_abbSensor))
                    return "dev_abbSensor: integer expected";
            if (message.dev_wifiTag != null && message.hasOwnProperty("dev_wifiTag"))
                if (!$util.isInteger(message.dev_wifiTag))
                    return "dev_wifiTag: integer expected";
            if (message.dev_wifiAssocSta != null && message.hasOwnProperty("dev_wifiAssocSta"))
                if (!$util.isInteger(message.dev_wifiAssocSta))
                    return "dev_wifiAssocSta: integer expected";
            if (message.dev_wifiUnassocSta != null && message.hasOwnProperty("dev_wifiUnassocSta"))
                if (!$util.isInteger(message.dev_wifiUnassocSta))
                    return "dev_wifiUnassocSta: integer expected";
            if (message.dev_mysphera != null && message.hasOwnProperty("dev_mysphera"))
                if (!$util.isInteger(message.dev_mysphera))
                    return "dev_mysphera: integer expected";
            if (message.dev_sBeacon != null && message.hasOwnProperty("dev_sBeacon"))
                if (!$util.isInteger(message.dev_sBeacon))
                    return "dev_sBeacon: integer expected";
            if (message.dev_onity != null && message.hasOwnProperty("dev_onity"))
                if (!$util.isInteger(message.dev_onity))
                    return "dev_onity: integer expected";
            if (message.dev_minew != null && message.hasOwnProperty("dev_minew"))
                if (!$util.isInteger(message.dev_minew))
                    return "dev_minew: integer expected";
            if (message.dev_google != null && message.hasOwnProperty("dev_google"))
                if (!$util.isInteger(message.dev_google))
                    return "dev_google: integer expected";
            if (message.dev_polestar != null && message.hasOwnProperty("dev_polestar"))
                if (!$util.isInteger(message.dev_polestar))
                    return "dev_polestar: integer expected";
            if (message.dev_blyott != null && message.hasOwnProperty("dev_blyott"))
                if (!$util.isInteger(message.dev_blyott))
                    return "dev_blyott: integer expected";
            if (message.dev_diract != null && message.hasOwnProperty("dev_diract"))
                if (!$util.isInteger(message.dev_diract))
                    return "dev_diract: integer expected";
            if (message.dev_gwahygiene != null && message.hasOwnProperty("dev_gwahygiene"))
                if (!$util.isInteger(message.dev_gwahygiene))
                    return "dev_gwahygiene: integer expected";
            return null;
        };

        /**
         * Creates a DeviceCount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.DeviceCount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.DeviceCount} DeviceCount
         */
        DeviceCount.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.DeviceCount)
                return object;
            var message = new $root.aruba_telemetry.DeviceCount();
            if (object.dev_unclassified != null)
                message.dev_unclassified = object.dev_unclassified | 0;
            if (object.dev_arubaBeacon != null)
                message.dev_arubaBeacon = object.dev_arubaBeacon | 0;
            if (object.dev_arubaTag != null)
                message.dev_arubaTag = object.dev_arubaTag | 0;
            if (object.dev_zfTag != null)
                message.dev_zfTag = object.dev_zfTag | 0;
            if (object.dev_stanleyTag != null)
                message.dev_stanleyTag = object.dev_stanleyTag | 0;
            if (object.dev_virginBeacon != null)
                message.dev_virginBeacon = object.dev_virginBeacon | 0;
            if (object.dev_enoceanSensor != null)
                message.dev_enoceanSensor = object.dev_enoceanSensor | 0;
            if (object.dev_enoceanSwitch != null)
                message.dev_enoceanSwitch = object.dev_enoceanSwitch | 0;
            if (object.dev_iBeacon != null)
                message.dev_iBeacon = object.dev_iBeacon | 0;
            if (object.dev_allBleData != null)
                message.dev_allBleData = object.dev_allBleData | 0;
            if (object.dev_RawBleData != null)
                message.dev_RawBleData = object.dev_RawBleData | 0;
            if (object.dev_eddystone != null)
                message.dev_eddystone = object.dev_eddystone | 0;
            if (object.dev_assaAbloy != null)
                message.dev_assaAbloy = object.dev_assaAbloy | 0;
            if (object.dev_arubaSensor != null)
                message.dev_arubaSensor = object.dev_arubaSensor | 0;
            if (object.dev_abbSensor != null)
                message.dev_abbSensor = object.dev_abbSensor | 0;
            if (object.dev_wifiTag != null)
                message.dev_wifiTag = object.dev_wifiTag | 0;
            if (object.dev_wifiAssocSta != null)
                message.dev_wifiAssocSta = object.dev_wifiAssocSta | 0;
            if (object.dev_wifiUnassocSta != null)
                message.dev_wifiUnassocSta = object.dev_wifiUnassocSta | 0;
            if (object.dev_mysphera != null)
                message.dev_mysphera = object.dev_mysphera | 0;
            if (object.dev_sBeacon != null)
                message.dev_sBeacon = object.dev_sBeacon | 0;
            if (object.dev_onity != null)
                message.dev_onity = object.dev_onity | 0;
            if (object.dev_minew != null)
                message.dev_minew = object.dev_minew | 0;
            if (object.dev_google != null)
                message.dev_google = object.dev_google | 0;
            if (object.dev_polestar != null)
                message.dev_polestar = object.dev_polestar | 0;
            if (object.dev_blyott != null)
                message.dev_blyott = object.dev_blyott | 0;
            if (object.dev_diract != null)
                message.dev_diract = object.dev_diract | 0;
            if (object.dev_gwahygiene != null)
                message.dev_gwahygiene = object.dev_gwahygiene | 0;
            return message;
        };

        /**
         * Creates a plain object from a DeviceCount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.DeviceCount
         * @static
         * @param {aruba_telemetry.DeviceCount} message DeviceCount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceCount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.dev_unclassified = 0;
                object.dev_arubaBeacon = 0;
                object.dev_arubaTag = 0;
                object.dev_zfTag = 0;
                object.dev_stanleyTag = 0;
                object.dev_virginBeacon = 0;
                object.dev_enoceanSensor = 0;
                object.dev_enoceanSwitch = 0;
                object.dev_iBeacon = 0;
                object.dev_allBleData = 0;
                object.dev_RawBleData = 0;
                object.dev_eddystone = 0;
                object.dev_assaAbloy = 0;
                object.dev_arubaSensor = 0;
                object.dev_abbSensor = 0;
                object.dev_wifiTag = 0;
                object.dev_wifiAssocSta = 0;
                object.dev_wifiUnassocSta = 0;
                object.dev_mysphera = 0;
                object.dev_sBeacon = 0;
                object.dev_onity = 0;
                object.dev_minew = 0;
                object.dev_google = 0;
                object.dev_polestar = 0;
                object.dev_blyott = 0;
                object.dev_diract = 0;
                object.dev_gwahygiene = 0;
            }
            if (message.dev_unclassified != null && message.hasOwnProperty("dev_unclassified"))
                object.dev_unclassified = message.dev_unclassified;
            if (message.dev_arubaBeacon != null && message.hasOwnProperty("dev_arubaBeacon"))
                object.dev_arubaBeacon = message.dev_arubaBeacon;
            if (message.dev_arubaTag != null && message.hasOwnProperty("dev_arubaTag"))
                object.dev_arubaTag = message.dev_arubaTag;
            if (message.dev_zfTag != null && message.hasOwnProperty("dev_zfTag"))
                object.dev_zfTag = message.dev_zfTag;
            if (message.dev_stanleyTag != null && message.hasOwnProperty("dev_stanleyTag"))
                object.dev_stanleyTag = message.dev_stanleyTag;
            if (message.dev_virginBeacon != null && message.hasOwnProperty("dev_virginBeacon"))
                object.dev_virginBeacon = message.dev_virginBeacon;
            if (message.dev_enoceanSensor != null && message.hasOwnProperty("dev_enoceanSensor"))
                object.dev_enoceanSensor = message.dev_enoceanSensor;
            if (message.dev_enoceanSwitch != null && message.hasOwnProperty("dev_enoceanSwitch"))
                object.dev_enoceanSwitch = message.dev_enoceanSwitch;
            if (message.dev_iBeacon != null && message.hasOwnProperty("dev_iBeacon"))
                object.dev_iBeacon = message.dev_iBeacon;
            if (message.dev_allBleData != null && message.hasOwnProperty("dev_allBleData"))
                object.dev_allBleData = message.dev_allBleData;
            if (message.dev_RawBleData != null && message.hasOwnProperty("dev_RawBleData"))
                object.dev_RawBleData = message.dev_RawBleData;
            if (message.dev_eddystone != null && message.hasOwnProperty("dev_eddystone"))
                object.dev_eddystone = message.dev_eddystone;
            if (message.dev_assaAbloy != null && message.hasOwnProperty("dev_assaAbloy"))
                object.dev_assaAbloy = message.dev_assaAbloy;
            if (message.dev_arubaSensor != null && message.hasOwnProperty("dev_arubaSensor"))
                object.dev_arubaSensor = message.dev_arubaSensor;
            if (message.dev_abbSensor != null && message.hasOwnProperty("dev_abbSensor"))
                object.dev_abbSensor = message.dev_abbSensor;
            if (message.dev_wifiTag != null && message.hasOwnProperty("dev_wifiTag"))
                object.dev_wifiTag = message.dev_wifiTag;
            if (message.dev_wifiAssocSta != null && message.hasOwnProperty("dev_wifiAssocSta"))
                object.dev_wifiAssocSta = message.dev_wifiAssocSta;
            if (message.dev_wifiUnassocSta != null && message.hasOwnProperty("dev_wifiUnassocSta"))
                object.dev_wifiUnassocSta = message.dev_wifiUnassocSta;
            if (message.dev_mysphera != null && message.hasOwnProperty("dev_mysphera"))
                object.dev_mysphera = message.dev_mysphera;
            if (message.dev_sBeacon != null && message.hasOwnProperty("dev_sBeacon"))
                object.dev_sBeacon = message.dev_sBeacon;
            if (message.dev_onity != null && message.hasOwnProperty("dev_onity"))
                object.dev_onity = message.dev_onity;
            if (message.dev_minew != null && message.hasOwnProperty("dev_minew"))
                object.dev_minew = message.dev_minew;
            if (message.dev_google != null && message.hasOwnProperty("dev_google"))
                object.dev_google = message.dev_google;
            if (message.dev_polestar != null && message.hasOwnProperty("dev_polestar"))
                object.dev_polestar = message.dev_polestar;
            if (message.dev_blyott != null && message.hasOwnProperty("dev_blyott"))
                object.dev_blyott = message.dev_blyott;
            if (message.dev_diract != null && message.hasOwnProperty("dev_diract"))
                object.dev_diract = message.dev_diract;
            if (message.dev_gwahygiene != null && message.hasOwnProperty("dev_gwahygiene"))
                object.dev_gwahygiene = message.dev_gwahygiene;
            return object;
        };

        /**
         * Converts this DeviceCount to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.DeviceCount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceCount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeviceCount;
    })();

    aruba_telemetry.NbSerialData = (function() {

        /**
         * Properties of a NbSerialData.
         * @memberof aruba_telemetry
         * @interface INbSerialData
         * @property {Uint8Array|null} [nbSerialPayload] NbSerialData nbSerialPayload
         * @property {string|null} [nbDeviceId] NbSerialData nbDeviceId
         */

        /**
         * Constructs a new NbSerialData.
         * @memberof aruba_telemetry
         * @classdesc Represents a NbSerialData.
         * @implements INbSerialData
         * @constructor
         * @param {aruba_telemetry.INbSerialData=} [properties] Properties to set
         */
        function NbSerialData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NbSerialData nbSerialPayload.
         * @member {Uint8Array} nbSerialPayload
         * @memberof aruba_telemetry.NbSerialData
         * @instance
         */
        NbSerialData.prototype.nbSerialPayload = $util.newBuffer([]);

        /**
         * NbSerialData nbDeviceId.
         * @member {string} nbDeviceId
         * @memberof aruba_telemetry.NbSerialData
         * @instance
         */
        NbSerialData.prototype.nbDeviceId = "";

        /**
         * Creates a new NbSerialData instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.NbSerialData
         * @static
         * @param {aruba_telemetry.INbSerialData=} [properties] Properties to set
         * @returns {aruba_telemetry.NbSerialData} NbSerialData instance
         */
        NbSerialData.create = function create(properties) {
            return new NbSerialData(properties);
        };

        /**
         * Encodes the specified NbSerialData message. Does not implicitly {@link aruba_telemetry.NbSerialData.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.NbSerialData
         * @static
         * @param {aruba_telemetry.INbSerialData} message NbSerialData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NbSerialData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nbSerialPayload != null && message.hasOwnProperty("nbSerialPayload"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.nbSerialPayload);
            if (message.nbDeviceId != null && message.hasOwnProperty("nbDeviceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nbDeviceId);
            return writer;
        };

        /**
         * Encodes the specified NbSerialData message, length delimited. Does not implicitly {@link aruba_telemetry.NbSerialData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.NbSerialData
         * @static
         * @param {aruba_telemetry.INbSerialData} message NbSerialData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NbSerialData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NbSerialData message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.NbSerialData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.NbSerialData} NbSerialData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NbSerialData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.NbSerialData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nbSerialPayload = reader.bytes().toString('hex');
                    break;
                case 2:
                    message.nbDeviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NbSerialData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.NbSerialData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.NbSerialData} NbSerialData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NbSerialData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NbSerialData message.
         * @function verify
         * @memberof aruba_telemetry.NbSerialData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NbSerialData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nbSerialPayload != null && message.hasOwnProperty("nbSerialPayload"))
                if (!(message.nbSerialPayload && typeof message.nbSerialPayload.length === "number" || $util.isString(message.nbSerialPayload)))
                    return "nbSerialPayload: buffer expected";
            if (message.nbDeviceId != null && message.hasOwnProperty("nbDeviceId"))
                if (!$util.isString(message.nbDeviceId))
                    return "nbDeviceId: string expected";
            return null;
        };

        /**
         * Creates a NbSerialData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.NbSerialData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.NbSerialData} NbSerialData
         */
        NbSerialData.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.NbSerialData)
                return object;
            var message = new $root.aruba_telemetry.NbSerialData();
            if (object.nbSerialPayload != null)
                if (typeof object.nbSerialPayload === "string")
                    $util.base64.decode(object.nbSerialPayload, message.nbSerialPayload = $util.newBuffer($util.base64.length(object.nbSerialPayload)), 0);
                else if (object.nbSerialPayload.length)
                    message.nbSerialPayload = object.nbSerialPayload;
            if (object.nbDeviceId != null)
                message.nbDeviceId = String(object.nbDeviceId);
            return message;
        };

        /**
         * Creates a plain object from a NbSerialData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.NbSerialData
         * @static
         * @param {aruba_telemetry.NbSerialData} message NbSerialData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NbSerialData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.nbSerialPayload = "";
                else {
                    object.nbSerialPayload = [];
                    if (options.bytes !== Array)
                        object.nbSerialPayload = $util.newBuffer(object.nbSerialPayload);
                }
                object.nbDeviceId = "";
            }
            if (message.nbSerialPayload != null && message.hasOwnProperty("nbSerialPayload"))
                object.nbSerialPayload = message.nbSerialPayload;
            if (message.nbDeviceId != null && message.hasOwnProperty("nbDeviceId"))
                object.nbDeviceId = message.nbDeviceId;
            return object;
        };

        /**
         * Converts this NbSerialData to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.NbSerialData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NbSerialData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NbSerialData;
    })();

    /**
     * statusValue enum.
     * @name aruba_telemetry.statusValue
     * @enum {string}
     * @property {number} deviceDisconnected=0 deviceDisconnected value
     * @property {number} inactivityTimeout=1 inactivityTimeout value
     * @property {number} connectionUpdate=2 connectionUpdate value
     */
    aruba_telemetry.statusValue = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "deviceDisconnected"] = 0;
        values[valuesById[1] = "inactivityTimeout"] = 1;
        values[valuesById[2] = "connectionUpdate"] = 2;
        return values;
    })();

    aruba_telemetry.ConnUpdate = (function() {

        /**
         * Properties of a ConnUpdate.
         * @memberof aruba_telemetry
         * @interface IConnUpdate
         * @property {number|null} [mtu_value] ConnUpdate mtu_value
         */

        /**
         * Constructs a new ConnUpdate.
         * @memberof aruba_telemetry
         * @classdesc Represents a ConnUpdate.
         * @implements IConnUpdate
         * @constructor
         * @param {aruba_telemetry.IConnUpdate=} [properties] Properties to set
         */
        function ConnUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnUpdate mtu_value.
         * @member {number} mtu_value
         * @memberof aruba_telemetry.ConnUpdate
         * @instance
         */
        ConnUpdate.prototype.mtu_value = 0;

        /**
         * Creates a new ConnUpdate instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.ConnUpdate
         * @static
         * @param {aruba_telemetry.IConnUpdate=} [properties] Properties to set
         * @returns {aruba_telemetry.ConnUpdate} ConnUpdate instance
         */
        ConnUpdate.create = function create(properties) {
            return new ConnUpdate(properties);
        };

        /**
         * Encodes the specified ConnUpdate message. Does not implicitly {@link aruba_telemetry.ConnUpdate.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.ConnUpdate
         * @static
         * @param {aruba_telemetry.IConnUpdate} message ConnUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mtu_value != null && message.hasOwnProperty("mtu_value"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.mtu_value);
            return writer;
        };

        /**
         * Encodes the specified ConnUpdate message, length delimited. Does not implicitly {@link aruba_telemetry.ConnUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.ConnUpdate
         * @static
         * @param {aruba_telemetry.IConnUpdate} message ConnUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.ConnUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.ConnUpdate} ConnUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.ConnUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mtu_value = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.ConnUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.ConnUpdate} ConnUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnUpdate message.
         * @function verify
         * @memberof aruba_telemetry.ConnUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mtu_value != null && message.hasOwnProperty("mtu_value"))
                if (!$util.isInteger(message.mtu_value))
                    return "mtu_value: integer expected";
            return null;
        };

        /**
         * Creates a ConnUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.ConnUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.ConnUpdate} ConnUpdate
         */
        ConnUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.ConnUpdate)
                return object;
            var message = new $root.aruba_telemetry.ConnUpdate();
            if (object.mtu_value != null)
                message.mtu_value = object.mtu_value >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ConnUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.ConnUpdate
         * @static
         * @param {aruba_telemetry.ConnUpdate} message ConnUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.mtu_value = 0;
            if (message.mtu_value != null && message.hasOwnProperty("mtu_value"))
                object.mtu_value = message.mtu_value;
            return object;
        };

        /**
         * Converts this ConnUpdate to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.ConnUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConnUpdate;
    })();

    aruba_telemetry.Status = (function() {

        /**
         * Properties of a Status.
         * @memberof aruba_telemetry
         * @interface IStatus
         * @property {Uint8Array|null} [deviceMac] Status deviceMac
         * @property {aruba_telemetry.statusValue|null} [status] Status status
         * @property {string|null} [statusString] Status statusString
         * @property {aruba_telemetry.IConnUpdate|null} [connUpdate] Status connUpdate
         */

        /**
         * Constructs a new Status.
         * @memberof aruba_telemetry
         * @classdesc Represents a Status.
         * @implements IStatus
         * @constructor
         * @param {aruba_telemetry.IStatus=} [properties] Properties to set
         */
        function Status(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Status deviceMac.
         * @member {Uint8Array} deviceMac
         * @memberof aruba_telemetry.Status
         * @instance
         */
        Status.prototype.deviceMac = $util.newBuffer([]);

        /**
         * Status status.
         * @member {aruba_telemetry.statusValue} status
         * @memberof aruba_telemetry.Status
         * @instance
         */
        Status.prototype.status = 0;

        /**
         * Status statusString.
         * @member {string} statusString
         * @memberof aruba_telemetry.Status
         * @instance
         */
        Status.prototype.statusString = "";

        /**
         * Status connUpdate.
         * @member {aruba_telemetry.IConnUpdate|null|undefined} connUpdate
         * @memberof aruba_telemetry.Status
         * @instance
         */
        Status.prototype.connUpdate = null;

        /**
         * Creates a new Status instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Status
         * @static
         * @param {aruba_telemetry.IStatus=} [properties] Properties to set
         * @returns {aruba_telemetry.Status} Status instance
         */
        Status.create = function create(properties) {
            return new Status(properties);
        };

        /**
         * Encodes the specified Status message. Does not implicitly {@link aruba_telemetry.Status.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Status
         * @static
         * @param {aruba_telemetry.IStatus} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Status.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceMac != null && message.hasOwnProperty("deviceMac"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.deviceMac);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.statusString != null && message.hasOwnProperty("statusString"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.statusString);
            if (message.connUpdate != null && message.hasOwnProperty("connUpdate"))
                $root.aruba_telemetry.ConnUpdate.encode(message.connUpdate, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Status message, length delimited. Does not implicitly {@link aruba_telemetry.Status.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Status
         * @static
         * @param {aruba_telemetry.IStatus} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Status.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Status message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Status} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Status.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Status();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deviceMac = reader.bytes().toString('hex');
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.statusString = reader.string();
                    break;
                case 4:
                    message.connUpdate = $root.aruba_telemetry.ConnUpdate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Status message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Status} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Status.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Status message.
         * @function verify
         * @memberof aruba_telemetry.Status
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Status.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceMac != null && message.hasOwnProperty("deviceMac"))
                if (!(message.deviceMac && typeof message.deviceMac.length === "number" || $util.isString(message.deviceMac)))
                    return "deviceMac: buffer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.statusString != null && message.hasOwnProperty("statusString"))
                if (!$util.isString(message.statusString))
                    return "statusString: string expected";
            if (message.connUpdate != null && message.hasOwnProperty("connUpdate")) {
                var error = $root.aruba_telemetry.ConnUpdate.verify(message.connUpdate);
                if (error)
                    return "connUpdate." + error;
            }
            return null;
        };

        /**
         * Creates a Status message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Status
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Status} Status
         */
        Status.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Status)
                return object;
            var message = new $root.aruba_telemetry.Status();
            if (object.deviceMac != null)
                if (typeof object.deviceMac === "string")
                    $util.base64.decode(object.deviceMac, message.deviceMac = $util.newBuffer($util.base64.length(object.deviceMac)), 0);
                else if (object.deviceMac.length)
                    message.deviceMac = object.deviceMac;
            switch (object.status) {
            case "deviceDisconnected":
            case 0:
                message.status = 0;
                break;
            case "inactivityTimeout":
            case 1:
                message.status = 1;
                break;
            case "connectionUpdate":
            case 2:
                message.status = 2;
                break;
            }
            if (object.statusString != null)
                message.statusString = String(object.statusString);
            if (object.connUpdate != null) {
                if (typeof object.connUpdate !== "object")
                    throw TypeError(".aruba_telemetry.Status.connUpdate: object expected");
                message.connUpdate = $root.aruba_telemetry.ConnUpdate.fromObject(object.connUpdate);
            }
            return message;
        };

        /**
         * Creates a plain object from a Status message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Status
         * @static
         * @param {aruba_telemetry.Status} message Status
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Status.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.deviceMac = "";
                else {
                    object.deviceMac = [];
                    if (options.bytes !== Array)
                        object.deviceMac = $util.newBuffer(object.deviceMac);
                }
                object.status = options.enums === String ? "deviceDisconnected" : 0;
                object.statusString = "";
                object.connUpdate = null;
            }
            if (message.deviceMac != null && message.hasOwnProperty("deviceMac"))
                object.deviceMac = message.deviceMac;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.aruba_telemetry.statusValue[message.status] : message.status;
            if (message.statusString != null && message.hasOwnProperty("statusString"))
                object.statusString = message.statusString;
            if (message.connUpdate != null && message.hasOwnProperty("connUpdate"))
                object.connUpdate = $root.aruba_telemetry.ConnUpdate.toObject(message.connUpdate, options);
            return object;
        };

        /**
         * Converts this Status to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Status
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Status.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Status;
    })();

    /**
     * rockerSwitchPosition enum.
     * @name aruba_telemetry.rockerSwitchPosition
     * @enum {string}
     * @property {number} idle=0 idle value
     * @property {number} topPressed=1 topPressed value
     * @property {number} bottomPressed=2 bottomPressed value
     */
    aruba_telemetry.rockerSwitchPosition = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "idle"] = 0;
        values[valuesById[1] = "topPressed"] = 1;
        values[valuesById[2] = "bottomPressed"] = 2;
        return values;
    })();

    aruba_telemetry.Firmware = (function() {

        /**
         * Properties of a Firmware.
         * @memberof aruba_telemetry
         * @interface IFirmware
         * @property {string|null} [version] Firmware version
         * @property {string|null} [bankA] Firmware bankA
         * @property {string|null} [bankB] Firmware bankB
         */

        /**
         * Constructs a new Firmware.
         * @memberof aruba_telemetry
         * @classdesc Represents a Firmware.
         * @implements IFirmware
         * @constructor
         * @param {aruba_telemetry.IFirmware=} [properties] Properties to set
         */
        function Firmware(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Firmware version.
         * @member {string} version
         * @memberof aruba_telemetry.Firmware
         * @instance
         */
        Firmware.prototype.version = "";

        /**
         * Firmware bankA.
         * @member {string} bankA
         * @memberof aruba_telemetry.Firmware
         * @instance
         */
        Firmware.prototype.bankA = "";

        /**
         * Firmware bankB.
         * @member {string} bankB
         * @memberof aruba_telemetry.Firmware
         * @instance
         */
        Firmware.prototype.bankB = "";

        /**
         * Creates a new Firmware instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Firmware
         * @static
         * @param {aruba_telemetry.IFirmware=} [properties] Properties to set
         * @returns {aruba_telemetry.Firmware} Firmware instance
         */
        Firmware.create = function create(properties) {
            return new Firmware(properties);
        };

        /**
         * Encodes the specified Firmware message. Does not implicitly {@link aruba_telemetry.Firmware.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Firmware
         * @static
         * @param {aruba_telemetry.IFirmware} message Firmware message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Firmware.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
            if (message.bankA != null && message.hasOwnProperty("bankA"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.bankA);
            if (message.bankB != null && message.hasOwnProperty("bankB"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.bankB);
            return writer;
        };

        /**
         * Encodes the specified Firmware message, length delimited. Does not implicitly {@link aruba_telemetry.Firmware.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Firmware
         * @static
         * @param {aruba_telemetry.IFirmware} message Firmware message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Firmware.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Firmware message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Firmware
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Firmware} Firmware
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Firmware.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Firmware();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.bankA = reader.string();
                    break;
                case 3:
                    message.bankB = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Firmware message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Firmware
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Firmware} Firmware
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Firmware.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Firmware message.
         * @function verify
         * @memberof aruba_telemetry.Firmware
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Firmware.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.bankA != null && message.hasOwnProperty("bankA"))
                if (!$util.isString(message.bankA))
                    return "bankA: string expected";
            if (message.bankB != null && message.hasOwnProperty("bankB"))
                if (!$util.isString(message.bankB))
                    return "bankB: string expected";
            return null;
        };

        /**
         * Creates a Firmware message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Firmware
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Firmware} Firmware
         */
        Firmware.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Firmware)
                return object;
            var message = new $root.aruba_telemetry.Firmware();
            if (object.version != null)
                message.version = String(object.version);
            if (object.bankA != null)
                message.bankA = String(object.bankA);
            if (object.bankB != null)
                message.bankB = String(object.bankB);
            return message;
        };

        /**
         * Creates a plain object from a Firmware message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Firmware
         * @static
         * @param {aruba_telemetry.Firmware} message Firmware
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Firmware.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = "";
                object.bankA = "";
                object.bankB = "";
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.bankA != null && message.hasOwnProperty("bankA"))
                object.bankA = message.bankA;
            if (message.bankB != null && message.hasOwnProperty("bankB"))
                object.bankB = message.bankB;
            return object;
        };

        /**
         * Converts this Firmware to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Firmware
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Firmware.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Firmware;
    })();

    aruba_telemetry.History = (function() {

        /**
         * Properties of a History.
         * @memberof aruba_telemetry
         * @interface IHistory
         * @property {number|Long} time History time
         * @property {number} rssi History rssi
         * @property {number|null} [rxRadioId] History rxRadioId
         * @property {number|null} [antenna] History antenna
         */

        /**
         * Constructs a new History.
         * @memberof aruba_telemetry
         * @classdesc Represents a History.
         * @implements IHistory
         * @constructor
         * @param {aruba_telemetry.IHistory=} [properties] Properties to set
         */
        function History(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * History time.
         * @member {number|Long} time
         * @memberof aruba_telemetry.History
         * @instance
         */
        History.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * History rssi.
         * @member {number} rssi
         * @memberof aruba_telemetry.History
         * @instance
         */
        History.prototype.rssi = 0;

        /**
         * History rxRadioId.
         * @member {number} rxRadioId
         * @memberof aruba_telemetry.History
         * @instance
         */
        History.prototype.rxRadioId = 0;

        /**
         * History antenna.
         * @member {number} antenna
         * @memberof aruba_telemetry.History
         * @instance
         */
        History.prototype.antenna = 0;

        /**
         * Creates a new History instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.History
         * @static
         * @param {aruba_telemetry.IHistory=} [properties] Properties to set
         * @returns {aruba_telemetry.History} History instance
         */
        History.create = function create(properties) {
            return new History(properties);
        };

        /**
         * Encodes the specified History message. Does not implicitly {@link aruba_telemetry.History.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.History
         * @static
         * @param {aruba_telemetry.IHistory} message History message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        History.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.time);
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.rssi);
            if (message.rxRadioId != null && message.hasOwnProperty("rxRadioId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.rxRadioId);
            if (message.antenna != null && message.hasOwnProperty("antenna"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.antenna);
            return writer;
        };

        /**
         * Encodes the specified History message, length delimited. Does not implicitly {@link aruba_telemetry.History.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.History
         * @static
         * @param {aruba_telemetry.IHistory} message History message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        History.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a History message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.History
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.History} History
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        History.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.History();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time = reader.uint64();
                    break;
                case 2:
                    message.rssi = reader.sint32();
                    break;
                case 3:
                    message.rxRadioId = reader.int32();
                    break;
                case 4:
                    message.antenna = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("time"))
                throw $util.ProtocolError("missing required 'time'", { instance: message });
            if (!message.hasOwnProperty("rssi"))
                throw $util.ProtocolError("missing required 'rssi'", { instance: message });
            return message;
        };

        /**
         * Decodes a History message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.History
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.History} History
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        History.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a History message.
         * @function verify
         * @memberof aruba_telemetry.History
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        History.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
            if (!$util.isInteger(message.rssi))
                return "rssi: integer expected";
            if (message.rxRadioId != null && message.hasOwnProperty("rxRadioId"))
                if (!$util.isInteger(message.rxRadioId))
                    return "rxRadioId: integer expected";
            if (message.antenna != null && message.hasOwnProperty("antenna"))
                if (!$util.isInteger(message.antenna))
                    return "antenna: integer expected";
            return null;
        };

        /**
         * Creates a History message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.History
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.History} History
         */
        History.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.History)
                return object;
            var message = new $root.aruba_telemetry.History();
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
            if (object.rssi != null)
                message.rssi = object.rssi | 0;
            if (object.rxRadioId != null)
                message.rxRadioId = object.rxRadioId | 0;
            if (object.antenna != null)
                message.antenna = object.antenna | 0;
            return message;
        };

        /**
         * Creates a plain object from a History message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.History
         * @static
         * @param {aruba_telemetry.History} message History
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        History.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
                object.rssi = 0;
                object.rxRadioId = 0;
                object.antenna = 0;
            }
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
            if (message.rssi != null && message.hasOwnProperty("rssi"))
                object.rssi = message.rssi;
            if (message.rxRadioId != null && message.hasOwnProperty("rxRadioId"))
                object.rxRadioId = message.rxRadioId;
            if (message.antenna != null && message.hasOwnProperty("antenna"))
                object.antenna = message.antenna;
            return object;
        };

        /**
         * Converts this History to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.History
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        History.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return History;
    })();

    aruba_telemetry.Rssi = (function() {

        /**
         * Properties of a Rssi.
         * @memberof aruba_telemetry
         * @interface IRssi
         * @property {number|null} [last] Rssi last
         * @property {number|null} [avg] Rssi avg
         * @property {number|null} [max] Rssi max
         * @property {Array.<aruba_telemetry.IHistory>|null} [history] Rssi history
         * @property {number|null} [smooth] Rssi smooth
         */

        /**
         * Constructs a new Rssi.
         * @memberof aruba_telemetry
         * @classdesc Represents a Rssi.
         * @implements IRssi
         * @constructor
         * @param {aruba_telemetry.IRssi=} [properties] Properties to set
         */
        function Rssi(properties) {
            this.history = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Rssi last.
         * @member {number} last
         * @memberof aruba_telemetry.Rssi
         * @instance
         */
        Rssi.prototype.last = 0;

        /**
         * Rssi avg.
         * @member {number} avg
         * @memberof aruba_telemetry.Rssi
         * @instance
         */
        Rssi.prototype.avg = 0;

        /**
         * Rssi max.
         * @member {number} max
         * @memberof aruba_telemetry.Rssi
         * @instance
         */
        Rssi.prototype.max = 0;

        /**
         * Rssi history.
         * @member {Array.<aruba_telemetry.IHistory>} history
         * @memberof aruba_telemetry.Rssi
         * @instance
         */
        Rssi.prototype.history = $util.emptyArray;

        /**
         * Rssi smooth.
         * @member {number} smooth
         * @memberof aruba_telemetry.Rssi
         * @instance
         */
        Rssi.prototype.smooth = 0;

        /**
         * Creates a new Rssi instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Rssi
         * @static
         * @param {aruba_telemetry.IRssi=} [properties] Properties to set
         * @returns {aruba_telemetry.Rssi} Rssi instance
         */
        Rssi.create = function create(properties) {
            return new Rssi(properties);
        };

        /**
         * Encodes the specified Rssi message. Does not implicitly {@link aruba_telemetry.Rssi.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Rssi
         * @static
         * @param {aruba_telemetry.IRssi} message Rssi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rssi.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.last != null && message.hasOwnProperty("last"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.last);
            if (message.avg != null && message.hasOwnProperty("avg"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.avg);
            if (message.max != null && message.hasOwnProperty("max"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.max);
            if (message.history != null && message.history.length)
                for (var i = 0; i < message.history.length; ++i)
                    $root.aruba_telemetry.History.encode(message.history[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.smooth != null && message.hasOwnProperty("smooth"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.smooth);
            return writer;
        };

        /**
         * Encodes the specified Rssi message, length delimited. Does not implicitly {@link aruba_telemetry.Rssi.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Rssi
         * @static
         * @param {aruba_telemetry.IRssi} message Rssi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rssi.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Rssi message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Rssi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Rssi} Rssi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rssi.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Rssi();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.last = reader.sint32();
                    break;
                case 2:
                    message.avg = reader.sint32();
                    break;
                case 3:
                    message.max = reader.sint32();
                    break;
                case 4:
                    if (!(message.history && message.history.length))
                        message.history = [];
                    message.history.push($root.aruba_telemetry.History.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.smooth = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Rssi message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Rssi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Rssi} Rssi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rssi.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Rssi message.
         * @function verify
         * @memberof aruba_telemetry.Rssi
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Rssi.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.last != null && message.hasOwnProperty("last"))
                if (!$util.isInteger(message.last))
                    return "last: integer expected";
            if (message.avg != null && message.hasOwnProperty("avg"))
                if (!$util.isInteger(message.avg))
                    return "avg: integer expected";
            if (message.max != null && message.hasOwnProperty("max"))
                if (!$util.isInteger(message.max))
                    return "max: integer expected";
            if (message.history != null && message.hasOwnProperty("history")) {
                if (!Array.isArray(message.history))
                    return "history: array expected";
                for (var i = 0; i < message.history.length; ++i) {
                    var error = $root.aruba_telemetry.History.verify(message.history[i]);
                    if (error)
                        return "history." + error;
                }
            }
            if (message.smooth != null && message.hasOwnProperty("smooth"))
                if (!$util.isInteger(message.smooth))
                    return "smooth: integer expected";
            return null;
        };

        /**
         * Creates a Rssi message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Rssi
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Rssi} Rssi
         */
        Rssi.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Rssi)
                return object;
            var message = new $root.aruba_telemetry.Rssi();
            if (object.last != null)
                message.last = object.last | 0;
            if (object.avg != null)
                message.avg = object.avg | 0;
            if (object.max != null)
                message.max = object.max | 0;
            if (object.history) {
                if (!Array.isArray(object.history))
                    throw TypeError(".aruba_telemetry.Rssi.history: array expected");
                message.history = [];
                for (var i = 0; i < object.history.length; ++i) {
                    if (typeof object.history[i] !== "object")
                        throw TypeError(".aruba_telemetry.Rssi.history: object expected");
                    message.history[i] = $root.aruba_telemetry.History.fromObject(object.history[i]);
                }
            }
            if (object.smooth != null)
                message.smooth = object.smooth | 0;
            return message;
        };

        /**
         * Creates a plain object from a Rssi message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Rssi
         * @static
         * @param {aruba_telemetry.Rssi} message Rssi
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Rssi.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.history = [];
            if (options.defaults) {
                object.last = 0;
                object.avg = 0;
                object.max = 0;
                object.smooth = 0;
            }
            if (message.last != null && message.hasOwnProperty("last"))
                object.last = message.last;
            if (message.avg != null && message.hasOwnProperty("avg"))
                object.avg = message.avg;
            if (message.max != null && message.hasOwnProperty("max"))
                object.max = message.max;
            if (message.history && message.history.length) {
                object.history = [];
                for (var j = 0; j < message.history.length; ++j)
                    object.history[j] = $root.aruba_telemetry.History.toObject(message.history[j], options);
            }
            if (message.smooth != null && message.hasOwnProperty("smooth"))
                object.smooth = message.smooth;
            return object;
        };

        /**
         * Converts this Rssi to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Rssi
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Rssi.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Rssi;
    })();

    /**
     * CellEvent enum.
     * @name aruba_telemetry.CellEvent
     * @enum {string}
     * @property {number} entry=0 entry value
     * @property {number} exit=1 exit value
     * @property {number} update=2 update value
     * @property {number} ageout=3 ageout value
     */
    aruba_telemetry.CellEvent = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "entry"] = 0;
        values[valuesById[1] = "exit"] = 1;
        values[valuesById[2] = "update"] = 2;
        values[valuesById[3] = "ageout"] = 3;
        return values;
    })();

    aruba_telemetry.BeaconEvent = (function() {

        /**
         * Properties of a BeaconEvent.
         * @memberof aruba_telemetry
         * @interface IBeaconEvent
         * @property {aruba_telemetry.CellEvent|null} [event] BeaconEvent event
         */

        /**
         * Constructs a new BeaconEvent.
         * @memberof aruba_telemetry
         * @classdesc Represents a BeaconEvent.
         * @implements IBeaconEvent
         * @constructor
         * @param {aruba_telemetry.IBeaconEvent=} [properties] Properties to set
         */
        function BeaconEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BeaconEvent event.
         * @member {aruba_telemetry.CellEvent} event
         * @memberof aruba_telemetry.BeaconEvent
         * @instance
         */
        BeaconEvent.prototype.event = 0;

        /**
         * Creates a new BeaconEvent instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.BeaconEvent
         * @static
         * @param {aruba_telemetry.IBeaconEvent=} [properties] Properties to set
         * @returns {aruba_telemetry.BeaconEvent} BeaconEvent instance
         */
        BeaconEvent.create = function create(properties) {
            return new BeaconEvent(properties);
        };

        /**
         * Encodes the specified BeaconEvent message. Does not implicitly {@link aruba_telemetry.BeaconEvent.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.BeaconEvent
         * @static
         * @param {aruba_telemetry.IBeaconEvent} message BeaconEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeaconEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event != null && message.hasOwnProperty("event"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.event);
            return writer;
        };

        /**
         * Encodes the specified BeaconEvent message, length delimited. Does not implicitly {@link aruba_telemetry.BeaconEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.BeaconEvent
         * @static
         * @param {aruba_telemetry.IBeaconEvent} message BeaconEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeaconEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BeaconEvent message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.BeaconEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.BeaconEvent} BeaconEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeaconEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.BeaconEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.event = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BeaconEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.BeaconEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.BeaconEvent} BeaconEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeaconEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BeaconEvent message.
         * @function verify
         * @memberof aruba_telemetry.BeaconEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BeaconEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event != null && message.hasOwnProperty("event"))
                switch (message.event) {
                default:
                    return "event: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a BeaconEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.BeaconEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.BeaconEvent} BeaconEvent
         */
        BeaconEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.BeaconEvent)
                return object;
            var message = new $root.aruba_telemetry.BeaconEvent();
            switch (object.event) {
            case "entry":
            case 0:
                message.event = 0;
                break;
            case "exit":
            case 1:
                message.event = 1;
                break;
            case "update":
            case 2:
                message.event = 2;
                break;
            case "ageout":
            case 3:
                message.event = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a BeaconEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.BeaconEvent
         * @static
         * @param {aruba_telemetry.BeaconEvent} message BeaconEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BeaconEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.event = options.enums === String ? "entry" : 0;
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = options.enums === String ? $root.aruba_telemetry.CellEvent[message.event] : message.event;
            return object;
        };

        /**
         * Converts this BeaconEvent to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.BeaconEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BeaconEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BeaconEvent;
    })();

    aruba_telemetry.Cell = (function() {

        /**
         * Properties of a Cell.
         * @memberof aruba_telemetry
         * @interface ICell
         * @property {boolean|null} [isInside] Cell isInside
         * @property {number|null} [distance] Cell distance
         */

        /**
         * Constructs a new Cell.
         * @memberof aruba_telemetry
         * @classdesc Represents a Cell.
         * @implements ICell
         * @constructor
         * @param {aruba_telemetry.ICell=} [properties] Properties to set
         */
        function Cell(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cell isInside.
         * @member {boolean} isInside
         * @memberof aruba_telemetry.Cell
         * @instance
         */
        Cell.prototype.isInside = false;

        /**
         * Cell distance.
         * @member {number} distance
         * @memberof aruba_telemetry.Cell
         * @instance
         */
        Cell.prototype.distance = 0;

        /**
         * Creates a new Cell instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Cell
         * @static
         * @param {aruba_telemetry.ICell=} [properties] Properties to set
         * @returns {aruba_telemetry.Cell} Cell instance
         */
        Cell.create = function create(properties) {
            return new Cell(properties);
        };

        /**
         * Encodes the specified Cell message. Does not implicitly {@link aruba_telemetry.Cell.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Cell
         * @static
         * @param {aruba_telemetry.ICell} message Cell message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cell.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isInside != null && message.hasOwnProperty("isInside"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isInside);
            if (message.distance != null && message.hasOwnProperty("distance"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.distance);
            return writer;
        };

        /**
         * Encodes the specified Cell message, length delimited. Does not implicitly {@link aruba_telemetry.Cell.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Cell
         * @static
         * @param {aruba_telemetry.ICell} message Cell message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cell.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Cell message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Cell
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Cell} Cell
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cell.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Cell();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isInside = reader.bool();
                    break;
                case 2:
                    message.distance = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Cell message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Cell
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Cell} Cell
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cell.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Cell message.
         * @function verify
         * @memberof aruba_telemetry.Cell
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Cell.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isInside != null && message.hasOwnProperty("isInside"))
                if (typeof message.isInside !== "boolean")
                    return "isInside: boolean expected";
            if (message.distance != null && message.hasOwnProperty("distance"))
                if (typeof message.distance !== "number")
                    return "distance: number expected";
            return null;
        };

        /**
         * Creates a Cell message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Cell
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Cell} Cell
         */
        Cell.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Cell)
                return object;
            var message = new $root.aruba_telemetry.Cell();
            if (object.isInside != null)
                message.isInside = Boolean(object.isInside);
            if (object.distance != null)
                message.distance = Number(object.distance);
            return message;
        };

        /**
         * Creates a plain object from a Cell message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Cell
         * @static
         * @param {aruba_telemetry.Cell} message Cell
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Cell.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.isInside = false;
                object.distance = 0;
            }
            if (message.isInside != null && message.hasOwnProperty("isInside"))
                object.isInside = message.isInside;
            if (message.distance != null && message.hasOwnProperty("distance"))
                object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
            return object;
        };

        /**
         * Converts this Cell to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Cell
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Cell.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Cell;
    })();

    aruba_telemetry.Ibeacon = (function() {

        /**
         * Properties of an Ibeacon.
         * @memberof aruba_telemetry
         * @interface IIbeacon
         * @property {Uint8Array} uuid Ibeacon uuid
         * @property {number} major Ibeacon major
         * @property {number} minor Ibeacon minor
         * @property {number} power Ibeacon power
         * @property {Uint8Array|null} [extra] Ibeacon extra
         */

        /**
         * Constructs a new Ibeacon.
         * @memberof aruba_telemetry
         * @classdesc Represents an Ibeacon.
         * @implements IIbeacon
         * @constructor
         * @param {aruba_telemetry.IIbeacon=} [properties] Properties to set
         */
        function Ibeacon(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ibeacon uuid.
         * @member {Uint8Array} uuid
         * @memberof aruba_telemetry.Ibeacon
         * @instance
         */
        Ibeacon.prototype.uuid = $util.newBuffer([]);

        /**
         * Ibeacon major.
         * @member {number} major
         * @memberof aruba_telemetry.Ibeacon
         * @instance
         */
        Ibeacon.prototype.major = 0;

        /**
         * Ibeacon minor.
         * @member {number} minor
         * @memberof aruba_telemetry.Ibeacon
         * @instance
         */
        Ibeacon.prototype.minor = 0;

        /**
         * Ibeacon power.
         * @member {number} power
         * @memberof aruba_telemetry.Ibeacon
         * @instance
         */
        Ibeacon.prototype.power = 0;

        /**
         * Ibeacon extra.
         * @member {Uint8Array} extra
         * @memberof aruba_telemetry.Ibeacon
         * @instance
         */
        Ibeacon.prototype.extra = $util.newBuffer([]);

        /**
         * Creates a new Ibeacon instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Ibeacon
         * @static
         * @param {aruba_telemetry.IIbeacon=} [properties] Properties to set
         * @returns {aruba_telemetry.Ibeacon} Ibeacon instance
         */
        Ibeacon.create = function create(properties) {
            return new Ibeacon(properties);
        };

        /**
         * Encodes the specified Ibeacon message. Does not implicitly {@link aruba_telemetry.Ibeacon.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Ibeacon
         * @static
         * @param {aruba_telemetry.IIbeacon} message Ibeacon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ibeacon.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.uuid);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.major);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.minor);
            writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.power);
            if (message.extra != null && message.hasOwnProperty("extra"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.extra);
            return writer;
        };

        /**
         * Encodes the specified Ibeacon message, length delimited. Does not implicitly {@link aruba_telemetry.Ibeacon.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Ibeacon
         * @static
         * @param {aruba_telemetry.IIbeacon} message Ibeacon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ibeacon.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ibeacon message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Ibeacon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Ibeacon} Ibeacon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ibeacon.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Ibeacon();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.bytes().toString('hex');
                    break;
                case 2:
                    message.major = reader.uint32();
                    break;
                case 3:
                    message.minor = reader.uint32();
                    break;
                case 4:
                    message.power = reader.sint32();
                    break;
                case 5:
                    message.extra = reader.bytes().toString('hex');
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uuid"))
                throw $util.ProtocolError("missing required 'uuid'", { instance: message });
            if (!message.hasOwnProperty("major"))
                throw $util.ProtocolError("missing required 'major'", { instance: message });
            if (!message.hasOwnProperty("minor"))
                throw $util.ProtocolError("missing required 'minor'", { instance: message });
            if (!message.hasOwnProperty("power"))
                throw $util.ProtocolError("missing required 'power'", { instance: message });
            return message;
        };

        /**
         * Decodes an Ibeacon message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Ibeacon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Ibeacon} Ibeacon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ibeacon.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ibeacon message.
         * @function verify
         * @memberof aruba_telemetry.Ibeacon
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ibeacon.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.uuid && typeof message.uuid.length === "number" || $util.isString(message.uuid)))
                return "uuid: buffer expected";
            if (!$util.isInteger(message.major))
                return "major: integer expected";
            if (!$util.isInteger(message.minor))
                return "minor: integer expected";
            if (!$util.isInteger(message.power))
                return "power: integer expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!(message.extra && typeof message.extra.length === "number" || $util.isString(message.extra)))
                    return "extra: buffer expected";
            return null;
        };

        /**
         * Creates an Ibeacon message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Ibeacon
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Ibeacon} Ibeacon
         */
        Ibeacon.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Ibeacon)
                return object;
            var message = new $root.aruba_telemetry.Ibeacon();
            if (object.uuid != null)
                if (typeof object.uuid === "string")
                    $util.base64.decode(object.uuid, message.uuid = $util.newBuffer($util.base64.length(object.uuid)), 0);
                else if (object.uuid.length)
                    message.uuid = object.uuid;
            if (object.major != null)
                message.major = object.major >>> 0;
            if (object.minor != null)
                message.minor = object.minor >>> 0;
            if (object.power != null)
                message.power = object.power | 0;
            if (object.extra != null)
                if (typeof object.extra === "string")
                    $util.base64.decode(object.extra, message.extra = $util.newBuffer($util.base64.length(object.extra)), 0);
                else if (object.extra.length)
                    message.extra = object.extra;
            return message;
        };

        /**
         * Creates a plain object from an Ibeacon message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Ibeacon
         * @static
         * @param {aruba_telemetry.Ibeacon} message Ibeacon
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ibeacon.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.uuid = "";
                else {
                    object.uuid = [];
                    if (options.bytes !== Array)
                        object.uuid = $util.newBuffer(object.uuid);
                }
                object.major = 0;
                object.minor = 0;
                object.power = 0;
                if (options.bytes === String)
                    object.extra = "";
                else {
                    object.extra = [];
                    if (options.bytes !== Array)
                        object.extra = $util.newBuffer(object.extra);
                }
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.major != null && message.hasOwnProperty("major"))
                object.major = message.major;
            if (message.minor != null && message.hasOwnProperty("minor"))
                object.minor = message.minor;
            if (message.power != null && message.hasOwnProperty("power"))
                object.power = message.power;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this Ibeacon to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Ibeacon
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ibeacon.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Ibeacon;
    })();

    aruba_telemetry.EddyUID = (function() {

        /**
         * Properties of an EddyUID.
         * @memberof aruba_telemetry
         * @interface IEddyUID
         * @property {Uint8Array} nid EddyUID nid
         * @property {Uint8Array} bid EddyUID bid
         */

        /**
         * Constructs a new EddyUID.
         * @memberof aruba_telemetry
         * @classdesc Represents an EddyUID.
         * @implements IEddyUID
         * @constructor
         * @param {aruba_telemetry.IEddyUID=} [properties] Properties to set
         */
        function EddyUID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EddyUID nid.
         * @member {Uint8Array} nid
         * @memberof aruba_telemetry.EddyUID
         * @instance
         */
        EddyUID.prototype.nid = $util.newBuffer([]);

        /**
         * EddyUID bid.
         * @member {Uint8Array} bid
         * @memberof aruba_telemetry.EddyUID
         * @instance
         */
        EddyUID.prototype.bid = $util.newBuffer([]);

        /**
         * Creates a new EddyUID instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.EddyUID
         * @static
         * @param {aruba_telemetry.IEddyUID=} [properties] Properties to set
         * @returns {aruba_telemetry.EddyUID} EddyUID instance
         */
        EddyUID.create = function create(properties) {
            return new EddyUID(properties);
        };

        /**
         * Encodes the specified EddyUID message. Does not implicitly {@link aruba_telemetry.EddyUID.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.EddyUID
         * @static
         * @param {aruba_telemetry.IEddyUID} message EddyUID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EddyUID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.nid);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.bid);
            return writer;
        };

        /**
         * Encodes the specified EddyUID message, length delimited. Does not implicitly {@link aruba_telemetry.EddyUID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.EddyUID
         * @static
         * @param {aruba_telemetry.IEddyUID} message EddyUID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EddyUID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EddyUID message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.EddyUID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.EddyUID} EddyUID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EddyUID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.EddyUID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nid = reader.bytes().toString('hex');
                    break;
                case 2:
                    message.bid = reader.bytes().toString('hex');
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("nid"))
                throw $util.ProtocolError("missing required 'nid'", { instance: message });
            if (!message.hasOwnProperty("bid"))
                throw $util.ProtocolError("missing required 'bid'", { instance: message });
            return message;
        };

        /**
         * Decodes an EddyUID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.EddyUID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.EddyUID} EddyUID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EddyUID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EddyUID message.
         * @function verify
         * @memberof aruba_telemetry.EddyUID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EddyUID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.nid && typeof message.nid.length === "number" || $util.isString(message.nid)))
                return "nid: buffer expected";
            if (!(message.bid && typeof message.bid.length === "number" || $util.isString(message.bid)))
                return "bid: buffer expected";
            return null;
        };

        /**
         * Creates an EddyUID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.EddyUID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.EddyUID} EddyUID
         */
        EddyUID.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.EddyUID)
                return object;
            var message = new $root.aruba_telemetry.EddyUID();
            if (object.nid != null)
                if (typeof object.nid === "string")
                    $util.base64.decode(object.nid, message.nid = $util.newBuffer($util.base64.length(object.nid)), 0);
                else if (object.nid.length)
                    message.nid = object.nid;
            if (object.bid != null)
                if (typeof object.bid === "string")
                    $util.base64.decode(object.bid, message.bid = $util.newBuffer($util.base64.length(object.bid)), 0);
                else if (object.bid.length)
                    message.bid = object.bid;
            return message;
        };

        /**
         * Creates a plain object from an EddyUID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.EddyUID
         * @static
         * @param {aruba_telemetry.EddyUID} message EddyUID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EddyUID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.nid = "";
                else {
                    object.nid = [];
                    if (options.bytes !== Array)
                        object.nid = $util.newBuffer(object.nid);
                }
                if (options.bytes === String)
                    object.bid = "";
                else {
                    object.bid = [];
                    if (options.bytes !== Array)
                        object.bid = $util.newBuffer(object.bid);
                }
            }
            if (message.nid != null && message.hasOwnProperty("nid"))
                object.nid = message.nid;
            if (message.bid != null && message.hasOwnProperty("bid"))
                object.bid = message.bid;
            return object;
        };

        /**
         * Converts this EddyUID to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.EddyUID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EddyUID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EddyUID;
    })();

    aruba_telemetry.EddyURL = (function() {

        /**
         * Properties of an EddyURL.
         * @memberof aruba_telemetry
         * @interface IEddyURL
         * @property {number} prefix EddyURL prefix
         * @property {Uint8Array} encodedUrl EddyURL encodedUrl
         */

        /**
         * Constructs a new EddyURL.
         * @memberof aruba_telemetry
         * @classdesc Represents an EddyURL.
         * @implements IEddyURL
         * @constructor
         * @param {aruba_telemetry.IEddyURL=} [properties] Properties to set
         */
        function EddyURL(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EddyURL prefix.
         * @member {number} prefix
         * @memberof aruba_telemetry.EddyURL
         * @instance
         */
        EddyURL.prototype.prefix = 0;

        /**
         * EddyURL encodedUrl.
         * @member {Uint8Array} encodedUrl
         * @memberof aruba_telemetry.EddyURL
         * @instance
         */
        EddyURL.prototype.encodedUrl = $util.newBuffer([]);

        /**
         * Creates a new EddyURL instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.EddyURL
         * @static
         * @param {aruba_telemetry.IEddyURL=} [properties] Properties to set
         * @returns {aruba_telemetry.EddyURL} EddyURL instance
         */
        EddyURL.create = function create(properties) {
            return new EddyURL(properties);
        };

        /**
         * Encodes the specified EddyURL message. Does not implicitly {@link aruba_telemetry.EddyURL.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.EddyURL
         * @static
         * @param {aruba_telemetry.IEddyURL} message EddyURL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EddyURL.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.prefix);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.encodedUrl);
            return writer;
        };

        /**
         * Encodes the specified EddyURL message, length delimited. Does not implicitly {@link aruba_telemetry.EddyURL.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.EddyURL
         * @static
         * @param {aruba_telemetry.IEddyURL} message EddyURL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EddyURL.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EddyURL message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.EddyURL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.EddyURL} EddyURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EddyURL.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.EddyURL();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.prefix = reader.uint32();
                    break;
                case 2:
                    message.encodedUrl = reader.bytes().toString('hex');
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("prefix"))
                throw $util.ProtocolError("missing required 'prefix'", { instance: message });
            if (!message.hasOwnProperty("encodedUrl"))
                throw $util.ProtocolError("missing required 'encodedUrl'", { instance: message });
            return message;
        };

        /**
         * Decodes an EddyURL message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.EddyURL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.EddyURL} EddyURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EddyURL.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EddyURL message.
         * @function verify
         * @memberof aruba_telemetry.EddyURL
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EddyURL.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.prefix))
                return "prefix: integer expected";
            if (!(message.encodedUrl && typeof message.encodedUrl.length === "number" || $util.isString(message.encodedUrl)))
                return "encodedUrl: buffer expected";
            return null;
        };

        /**
         * Creates an EddyURL message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.EddyURL
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.EddyURL} EddyURL
         */
        EddyURL.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.EddyURL)
                return object;
            var message = new $root.aruba_telemetry.EddyURL();
            if (object.prefix != null)
                message.prefix = object.prefix >>> 0;
            if (object.encodedUrl != null)
                if (typeof object.encodedUrl === "string")
                    $util.base64.decode(object.encodedUrl, message.encodedUrl = $util.newBuffer($util.base64.length(object.encodedUrl)), 0);
                else if (object.encodedUrl.length)
                    message.encodedUrl = object.encodedUrl;
            return message;
        };

        /**
         * Creates a plain object from an EddyURL message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.EddyURL
         * @static
         * @param {aruba_telemetry.EddyURL} message EddyURL
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EddyURL.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.prefix = 0;
                if (options.bytes === String)
                    object.encodedUrl = "";
                else {
                    object.encodedUrl = [];
                    if (options.bytes !== Array)
                        object.encodedUrl = $util.newBuffer(object.encodedUrl);
                }
            }
            if (message.prefix != null && message.hasOwnProperty("prefix"))
                object.prefix = message.prefix;
            if (message.encodedUrl != null && message.hasOwnProperty("encodedUrl"))
                object.encodedUrl = message.encodedUrl;
            return object;
        };

        /**
         * Converts this EddyURL to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.EddyURL
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EddyURL.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EddyURL;
    })();

    aruba_telemetry.Eddystone = (function() {

        /**
         * Properties of an Eddystone.
         * @memberof aruba_telemetry
         * @interface IEddystone
         * @property {number|null} [power] Eddystone power
         * @property {aruba_telemetry.IEddyUID|null} [uid] Eddystone uid
         * @property {aruba_telemetry.IEddyURL|null} [url] Eddystone url
         */

        /**
         * Constructs a new Eddystone.
         * @memberof aruba_telemetry
         * @classdesc Represents an Eddystone.
         * @implements IEddystone
         * @constructor
         * @param {aruba_telemetry.IEddystone=} [properties] Properties to set
         */
        function Eddystone(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Eddystone power.
         * @member {number} power
         * @memberof aruba_telemetry.Eddystone
         * @instance
         */
        Eddystone.prototype.power = 0;

        /**
         * Eddystone uid.
         * @member {aruba_telemetry.IEddyUID|null|undefined} uid
         * @memberof aruba_telemetry.Eddystone
         * @instance
         */
        Eddystone.prototype.uid = null;

        /**
         * Eddystone url.
         * @member {aruba_telemetry.IEddyURL|null|undefined} url
         * @memberof aruba_telemetry.Eddystone
         * @instance
         */
        Eddystone.prototype.url = null;

        /**
         * Creates a new Eddystone instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Eddystone
         * @static
         * @param {aruba_telemetry.IEddystone=} [properties] Properties to set
         * @returns {aruba_telemetry.Eddystone} Eddystone instance
         */
        Eddystone.create = function create(properties) {
            return new Eddystone(properties);
        };

        /**
         * Encodes the specified Eddystone message. Does not implicitly {@link aruba_telemetry.Eddystone.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Eddystone
         * @static
         * @param {aruba_telemetry.IEddystone} message Eddystone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Eddystone.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.power != null && message.hasOwnProperty("power"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.power);
            if (message.uid != null && message.hasOwnProperty("uid"))
                $root.aruba_telemetry.EddyUID.encode(message.uid, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.url != null && message.hasOwnProperty("url"))
                $root.aruba_telemetry.EddyURL.encode(message.url, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Eddystone message, length delimited. Does not implicitly {@link aruba_telemetry.Eddystone.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Eddystone
         * @static
         * @param {aruba_telemetry.IEddystone} message Eddystone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Eddystone.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Eddystone message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Eddystone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Eddystone} Eddystone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Eddystone.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Eddystone();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.power = reader.sint32();
                    break;
                case 2:
                    message.uid = $root.aruba_telemetry.EddyUID.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.url = $root.aruba_telemetry.EddyURL.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Eddystone message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Eddystone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Eddystone} Eddystone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Eddystone.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Eddystone message.
         * @function verify
         * @memberof aruba_telemetry.Eddystone
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Eddystone.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.power != null && message.hasOwnProperty("power"))
                if (!$util.isInteger(message.power))
                    return "power: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid")) {
                var error = $root.aruba_telemetry.EddyUID.verify(message.uid);
                if (error)
                    return "uid." + error;
            }
            if (message.url != null && message.hasOwnProperty("url")) {
                var error = $root.aruba_telemetry.EddyURL.verify(message.url);
                if (error)
                    return "url." + error;
            }
            return null;
        };

        /**
         * Creates an Eddystone message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Eddystone
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Eddystone} Eddystone
         */
        Eddystone.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Eddystone)
                return object;
            var message = new $root.aruba_telemetry.Eddystone();
            if (object.power != null)
                message.power = object.power | 0;
            if (object.uid != null) {
                if (typeof object.uid !== "object")
                    throw TypeError(".aruba_telemetry.Eddystone.uid: object expected");
                message.uid = $root.aruba_telemetry.EddyUID.fromObject(object.uid);
            }
            if (object.url != null) {
                if (typeof object.url !== "object")
                    throw TypeError(".aruba_telemetry.Eddystone.url: object expected");
                message.url = $root.aruba_telemetry.EddyURL.fromObject(object.url);
            }
            return message;
        };

        /**
         * Creates a plain object from an Eddystone message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Eddystone
         * @static
         * @param {aruba_telemetry.Eddystone} message Eddystone
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Eddystone.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.power = 0;
                object.uid = null;
                object.url = null;
            }
            if (message.power != null && message.hasOwnProperty("power"))
                object.power = message.power;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = $root.aruba_telemetry.EddyUID.toObject(message.uid, options);
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = $root.aruba_telemetry.EddyURL.toObject(message.url, options);
            return object;
        };

        /**
         * Converts this Eddystone to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Eddystone
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Eddystone.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Eddystone;
    })();

    aruba_telemetry.Beacons = (function() {

        /**
         * Properties of a Beacons.
         * @memberof aruba_telemetry
         * @interface IBeacons
         * @property {aruba_telemetry.IIbeacon|null} [ibeacon] Beacons ibeacon
         * @property {aruba_telemetry.IEddystone|null} [eddystone] Beacons eddystone
         */

        /**
         * Constructs a new Beacons.
         * @memberof aruba_telemetry
         * @classdesc Represents a Beacons.
         * @implements IBeacons
         * @constructor
         * @param {aruba_telemetry.IBeacons=} [properties] Properties to set
         */
        function Beacons(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Beacons ibeacon.
         * @member {aruba_telemetry.IIbeacon|null|undefined} ibeacon
         * @memberof aruba_telemetry.Beacons
         * @instance
         */
        Beacons.prototype.ibeacon = null;

        /**
         * Beacons eddystone.
         * @member {aruba_telemetry.IEddystone|null|undefined} eddystone
         * @memberof aruba_telemetry.Beacons
         * @instance
         */
        Beacons.prototype.eddystone = null;

        /**
         * Creates a new Beacons instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Beacons
         * @static
         * @param {aruba_telemetry.IBeacons=} [properties] Properties to set
         * @returns {aruba_telemetry.Beacons} Beacons instance
         */
        Beacons.create = function create(properties) {
            return new Beacons(properties);
        };

        /**
         * Encodes the specified Beacons message. Does not implicitly {@link aruba_telemetry.Beacons.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Beacons
         * @static
         * @param {aruba_telemetry.IBeacons} message Beacons message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Beacons.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ibeacon != null && message.hasOwnProperty("ibeacon"))
                $root.aruba_telemetry.Ibeacon.encode(message.ibeacon, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.eddystone != null && message.hasOwnProperty("eddystone"))
                $root.aruba_telemetry.Eddystone.encode(message.eddystone, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Beacons message, length delimited. Does not implicitly {@link aruba_telemetry.Beacons.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Beacons
         * @static
         * @param {aruba_telemetry.IBeacons} message Beacons message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Beacons.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Beacons message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Beacons
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Beacons} Beacons
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Beacons.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Beacons();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ibeacon = $root.aruba_telemetry.Ibeacon.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.eddystone = $root.aruba_telemetry.Eddystone.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Beacons message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Beacons
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Beacons} Beacons
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Beacons.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Beacons message.
         * @function verify
         * @memberof aruba_telemetry.Beacons
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Beacons.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ibeacon != null && message.hasOwnProperty("ibeacon")) {
                var error = $root.aruba_telemetry.Ibeacon.verify(message.ibeacon);
                if (error)
                    return "ibeacon." + error;
            }
            if (message.eddystone != null && message.hasOwnProperty("eddystone")) {
                var error = $root.aruba_telemetry.Eddystone.verify(message.eddystone);
                if (error)
                    return "eddystone." + error;
            }
            return null;
        };

        /**
         * Creates a Beacons message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Beacons
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Beacons} Beacons
         */
        Beacons.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Beacons)
                return object;
            var message = new $root.aruba_telemetry.Beacons();
            if (object.ibeacon != null) {
                if (typeof object.ibeacon !== "object")
                    throw TypeError(".aruba_telemetry.Beacons.ibeacon: object expected");
                message.ibeacon = $root.aruba_telemetry.Ibeacon.fromObject(object.ibeacon);
            }
            if (object.eddystone != null) {
                if (typeof object.eddystone !== "object")
                    throw TypeError(".aruba_telemetry.Beacons.eddystone: object expected");
                message.eddystone = $root.aruba_telemetry.Eddystone.fromObject(object.eddystone);
            }
            return message;
        };

        /**
         * Creates a plain object from a Beacons message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Beacons
         * @static
         * @param {aruba_telemetry.Beacons} message Beacons
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Beacons.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ibeacon = null;
                object.eddystone = null;
            }
            if (message.ibeacon != null && message.hasOwnProperty("ibeacon"))
                object.ibeacon = $root.aruba_telemetry.Ibeacon.toObject(message.ibeacon, options);
            if (message.eddystone != null && message.hasOwnProperty("eddystone"))
                object.eddystone = $root.aruba_telemetry.Eddystone.toObject(message.eddystone, options);
            return object;
        };

        /**
         * Converts this Beacons to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Beacons
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Beacons.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Beacons;
    })();

    /**
     * AccelStatus enum.
     * @name aruba_telemetry.AccelStatus
     * @enum {string}
     * @property {number} ok=0 ok value
     * @property {number} outOfRange=1 outOfRange value
     * @property {number} threshold1=2 threshold1 value
     * @property {number} threshold2=3 threshold2 value
     */
    aruba_telemetry.AccelStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ok"] = 0;
        values[valuesById[1] = "outOfRange"] = 1;
        values[valuesById[2] = "threshold1"] = 2;
        values[valuesById[3] = "threshold2"] = 3;
        return values;
    })();

    aruba_telemetry.Accelerometer = (function() {

        /**
         * Properties of an Accelerometer.
         * @memberof aruba_telemetry
         * @interface IAccelerometer
         * @property {number} x Accelerometer x
         * @property {number} y Accelerometer y
         * @property {number} z Accelerometer z
         * @property {aruba_telemetry.AccelStatus|null} [status] Accelerometer status
         */

        /**
         * Constructs a new Accelerometer.
         * @memberof aruba_telemetry
         * @classdesc Represents an Accelerometer.
         * @implements IAccelerometer
         * @constructor
         * @param {aruba_telemetry.IAccelerometer=} [properties] Properties to set
         */
        function Accelerometer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Accelerometer x.
         * @member {number} x
         * @memberof aruba_telemetry.Accelerometer
         * @instance
         */
        Accelerometer.prototype.x = 0;

        /**
         * Accelerometer y.
         * @member {number} y
         * @memberof aruba_telemetry.Accelerometer
         * @instance
         */
        Accelerometer.prototype.y = 0;

        /**
         * Accelerometer z.
         * @member {number} z
         * @memberof aruba_telemetry.Accelerometer
         * @instance
         */
        Accelerometer.prototype.z = 0;

        /**
         * Accelerometer status.
         * @member {aruba_telemetry.AccelStatus} status
         * @memberof aruba_telemetry.Accelerometer
         * @instance
         */
        Accelerometer.prototype.status = 0;

        /**
         * Creates a new Accelerometer instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Accelerometer
         * @static
         * @param {aruba_telemetry.IAccelerometer=} [properties] Properties to set
         * @returns {aruba_telemetry.Accelerometer} Accelerometer instance
         */
        Accelerometer.create = function create(properties) {
            return new Accelerometer(properties);
        };

        /**
         * Encodes the specified Accelerometer message. Does not implicitly {@link aruba_telemetry.Accelerometer.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Accelerometer
         * @static
         * @param {aruba_telemetry.IAccelerometer} message Accelerometer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Accelerometer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified Accelerometer message, length delimited. Does not implicitly {@link aruba_telemetry.Accelerometer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Accelerometer
         * @static
         * @param {aruba_telemetry.IAccelerometer} message Accelerometer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Accelerometer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Accelerometer message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Accelerometer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Accelerometer} Accelerometer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Accelerometer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Accelerometer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.float();
                    break;
                case 2:
                    message.y = reader.float();
                    break;
                case 3:
                    message.z = reader.float();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("x"))
                throw $util.ProtocolError("missing required 'x'", { instance: message });
            if (!message.hasOwnProperty("y"))
                throw $util.ProtocolError("missing required 'y'", { instance: message });
            if (!message.hasOwnProperty("z"))
                throw $util.ProtocolError("missing required 'z'", { instance: message });
            return message;
        };

        /**
         * Decodes an Accelerometer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Accelerometer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Accelerometer} Accelerometer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Accelerometer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Accelerometer message.
         * @function verify
         * @memberof aruba_telemetry.Accelerometer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Accelerometer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.x !== "number")
                return "x: number expected";
            if (typeof message.y !== "number")
                return "y: number expected";
            if (typeof message.z !== "number")
                return "z: number expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates an Accelerometer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Accelerometer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Accelerometer} Accelerometer
         */
        Accelerometer.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Accelerometer)
                return object;
            var message = new $root.aruba_telemetry.Accelerometer();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            switch (object.status) {
            case "ok":
            case 0:
                message.status = 0;
                break;
            case "outOfRange":
            case 1:
                message.status = 1;
                break;
            case "threshold1":
            case 2:
                message.status = 2;
                break;
            case "threshold2":
            case 3:
                message.status = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an Accelerometer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Accelerometer
         * @static
         * @param {aruba_telemetry.Accelerometer} message Accelerometer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Accelerometer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.status = options.enums === String ? "ok" : 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.aruba_telemetry.AccelStatus[message.status] : message.status;
            return object;
        };

        /**
         * Converts this Accelerometer to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Accelerometer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Accelerometer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Accelerometer;
    })();

    aruba_telemetry.RockerSwitch = (function() {

        /**
         * Properties of a RockerSwitch.
         * @memberof aruba_telemetry
         * @interface IRockerSwitch
         * @property {string} id RockerSwitch id
         * @property {aruba_telemetry.rockerSwitchPosition} state RockerSwitch state
         */

        /**
         * Constructs a new RockerSwitch.
         * @memberof aruba_telemetry
         * @classdesc Represents a RockerSwitch.
         * @implements IRockerSwitch
         * @constructor
         * @param {aruba_telemetry.IRockerSwitch=} [properties] Properties to set
         */
        function RockerSwitch(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RockerSwitch id.
         * @member {string} id
         * @memberof aruba_telemetry.RockerSwitch
         * @instance
         */
        RockerSwitch.prototype.id = "";

        /**
         * RockerSwitch state.
         * @member {aruba_telemetry.rockerSwitchPosition} state
         * @memberof aruba_telemetry.RockerSwitch
         * @instance
         */
        RockerSwitch.prototype.state = 0;

        /**
         * Creates a new RockerSwitch instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.RockerSwitch
         * @static
         * @param {aruba_telemetry.IRockerSwitch=} [properties] Properties to set
         * @returns {aruba_telemetry.RockerSwitch} RockerSwitch instance
         */
        RockerSwitch.create = function create(properties) {
            return new RockerSwitch(properties);
        };

        /**
         * Encodes the specified RockerSwitch message. Does not implicitly {@link aruba_telemetry.RockerSwitch.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.RockerSwitch
         * @static
         * @param {aruba_telemetry.IRockerSwitch} message RockerSwitch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RockerSwitch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified RockerSwitch message, length delimited. Does not implicitly {@link aruba_telemetry.RockerSwitch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.RockerSwitch
         * @static
         * @param {aruba_telemetry.IRockerSwitch} message RockerSwitch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RockerSwitch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RockerSwitch message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.RockerSwitch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.RockerSwitch} RockerSwitch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RockerSwitch.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.RockerSwitch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("state"))
                throw $util.ProtocolError("missing required 'state'", { instance: message });
            return message;
        };

        /**
         * Decodes a RockerSwitch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.RockerSwitch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.RockerSwitch} RockerSwitch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RockerSwitch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RockerSwitch message.
         * @function verify
         * @memberof aruba_telemetry.RockerSwitch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RockerSwitch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            switch (message.state) {
            default:
                return "state: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            return null;
        };

        /**
         * Creates a RockerSwitch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.RockerSwitch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.RockerSwitch} RockerSwitch
         */
        RockerSwitch.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.RockerSwitch)
                return object;
            var message = new $root.aruba_telemetry.RockerSwitch();
            if (object.id != null)
                message.id = String(object.id);
            switch (object.state) {
            case "idle":
            case 0:
                message.state = 0;
                break;
            case "topPressed":
            case 1:
                message.state = 1;
                break;
            case "bottomPressed":
            case 2:
                message.state = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a RockerSwitch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.RockerSwitch
         * @static
         * @param {aruba_telemetry.RockerSwitch} message RockerSwitch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RockerSwitch.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.state = options.enums === String ? "idle" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.aruba_telemetry.rockerSwitchPosition[message.state] : message.state;
            return object;
        };

        /**
         * Converts this RockerSwitch to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.RockerSwitch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RockerSwitch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RockerSwitch;
    })();

    /**
     * Alarm enum.
     * @name aruba_telemetry.Alarm
     * @enum {string}
     * @property {number} water=1 water value
     * @property {number} smoke=2 smoke value
     * @property {number} fire=3 fire value
     * @property {number} glassbreak=4 glassbreak value
     * @property {number} intrusion=5 intrusion value
     */
    aruba_telemetry.Alarm = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "water"] = 1;
        values[valuesById[2] = "smoke"] = 2;
        values[valuesById[3] = "fire"] = 3;
        values[valuesById[4] = "glassbreak"] = 4;
        values[valuesById[5] = "intrusion"] = 5;
        return values;
    })();

    /**
     * ContactPosition enum.
     * @name aruba_telemetry.ContactPosition
     * @enum {string}
     * @property {number} open=1 open value
     * @property {number} closed=2 closed value
     */
    aruba_telemetry.ContactPosition = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "open"] = 1;
        values[valuesById[2] = "closed"] = 2;
        return values;
    })();

    aruba_telemetry.Contact = (function() {

        /**
         * Properties of a Contact.
         * @memberof aruba_telemetry
         * @interface IContact
         * @property {number} id Contact id
         * @property {aruba_telemetry.ContactPosition} state Contact state
         */

        /**
         * Constructs a new Contact.
         * @memberof aruba_telemetry
         * @classdesc Represents a Contact.
         * @implements IContact
         * @constructor
         * @param {aruba_telemetry.IContact=} [properties] Properties to set
         */
        function Contact(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Contact id.
         * @member {number} id
         * @memberof aruba_telemetry.Contact
         * @instance
         */
        Contact.prototype.id = 0;

        /**
         * Contact state.
         * @member {aruba_telemetry.ContactPosition} state
         * @memberof aruba_telemetry.Contact
         * @instance
         */
        Contact.prototype.state = 1;

        /**
         * Creates a new Contact instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Contact
         * @static
         * @param {aruba_telemetry.IContact=} [properties] Properties to set
         * @returns {aruba_telemetry.Contact} Contact instance
         */
        Contact.create = function create(properties) {
            return new Contact(properties);
        };

        /**
         * Encodes the specified Contact message. Does not implicitly {@link aruba_telemetry.Contact.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Contact
         * @static
         * @param {aruba_telemetry.IContact} message Contact message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Contact.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified Contact message, length delimited. Does not implicitly {@link aruba_telemetry.Contact.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Contact
         * @static
         * @param {aruba_telemetry.IContact} message Contact message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Contact.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Contact message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Contact
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Contact} Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Contact.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Contact();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("state"))
                throw $util.ProtocolError("missing required 'state'", { instance: message });
            return message;
        };

        /**
         * Decodes a Contact message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Contact
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Contact} Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Contact.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Contact message.
         * @function verify
         * @memberof aruba_telemetry.Contact
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Contact.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            switch (message.state) {
            default:
                return "state: enum value expected";
            case 1:
            case 2:
                break;
            }
            return null;
        };

        /**
         * Creates a Contact message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Contact
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Contact} Contact
         */
        Contact.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Contact)
                return object;
            var message = new $root.aruba_telemetry.Contact();
            if (object.id != null)
                message.id = object.id >>> 0;
            switch (object.state) {
            case "open":
            case 1:
                message.state = 1;
                break;
            case "closed":
            case 2:
                message.state = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Contact message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Contact
         * @static
         * @param {aruba_telemetry.Contact} message Contact
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Contact.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.state = options.enums === String ? "open" : 1;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.aruba_telemetry.ContactPosition[message.state] : message.state;
            return object;
        };

        /**
         * Converts this Contact to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Contact
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Contact.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Contact;
    })();

    aruba_telemetry.Occupancy = (function() {

        /**
         * Properties of an Occupancy.
         * @memberof aruba_telemetry
         * @interface IOccupancy
         * @property {number|null} [level] Occupancy level
         */

        /**
         * Constructs a new Occupancy.
         * @memberof aruba_telemetry
         * @classdesc Represents an Occupancy.
         * @implements IOccupancy
         * @constructor
         * @param {aruba_telemetry.IOccupancy=} [properties] Properties to set
         */
        function Occupancy(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Occupancy level.
         * @member {number} level
         * @memberof aruba_telemetry.Occupancy
         * @instance
         */
        Occupancy.prototype.level = 0;

        /**
         * Creates a new Occupancy instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Occupancy
         * @static
         * @param {aruba_telemetry.IOccupancy=} [properties] Properties to set
         * @returns {aruba_telemetry.Occupancy} Occupancy instance
         */
        Occupancy.create = function create(properties) {
            return new Occupancy(properties);
        };

        /**
         * Encodes the specified Occupancy message. Does not implicitly {@link aruba_telemetry.Occupancy.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Occupancy
         * @static
         * @param {aruba_telemetry.IOccupancy} message Occupancy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Occupancy.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.level);
            return writer;
        };

        /**
         * Encodes the specified Occupancy message, length delimited. Does not implicitly {@link aruba_telemetry.Occupancy.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Occupancy
         * @static
         * @param {aruba_telemetry.IOccupancy} message Occupancy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Occupancy.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Occupancy message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Occupancy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Occupancy} Occupancy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Occupancy.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Occupancy();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.level = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Occupancy message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Occupancy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Occupancy} Occupancy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Occupancy.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Occupancy message.
         * @function verify
         * @memberof aruba_telemetry.Occupancy
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Occupancy.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            return null;
        };

        /**
         * Creates an Occupancy message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Occupancy
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Occupancy} Occupancy
         */
        Occupancy.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Occupancy)
                return object;
            var message = new $root.aruba_telemetry.Occupancy();
            if (object.level != null)
                message.level = object.level >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Occupancy message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Occupancy
         * @static
         * @param {aruba_telemetry.Occupancy} message Occupancy
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Occupancy.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.level = 0;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            return object;
        };

        /**
         * Converts this Occupancy to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Occupancy
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Occupancy.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Occupancy;
    })();

    /**
     * MechanicalH enum.
     * @name aruba_telemetry.MechanicalH
     * @enum {string}
     * @property {number} upToRight=1 upToRight value
     * @property {number} rightToDown=2 rightToDown value
     * @property {number} downToLeft=3 downToLeft value
     * @property {number} leftToUp=4 leftToUp value
     * @property {number} upToLeft=5 upToLeft value
     * @property {number} leftToDown=6 leftToDown value
     * @property {number} downToRight=7 downToRight value
     * @property {number} rightToUp=8 rightToUp value
     */
    aruba_telemetry.MechanicalH = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "upToRight"] = 1;
        values[valuesById[2] = "rightToDown"] = 2;
        values[valuesById[3] = "downToLeft"] = 3;
        values[valuesById[4] = "leftToUp"] = 4;
        values[valuesById[5] = "upToLeft"] = 5;
        values[valuesById[6] = "leftToDown"] = 6;
        values[valuesById[7] = "downToRight"] = 7;
        values[valuesById[8] = "rightToUp"] = 8;
        return values;
    })();

    aruba_telemetry.Sensors = (function() {

        /**
         * Properties of a Sensors.
         * @memberof aruba_telemetry
         * @interface ISensors
         * @property {aruba_telemetry.IAccelerometer|null} [accelerometer] Sensors accelerometer
         * @property {number|null} [battery] Sensors battery
         * @property {number|null} [temperatureC] Sensors temperatureC
         * @property {number|null} [humidity] Sensors humidity
         * @property {number|null} [voltage] Sensors voltage
         * @property {number|null} [illumination] Sensors illumination
         * @property {boolean|null} [motion] Sensors motion
         * @property {number|null} [current] Sensors current
         * @property {number|null} [CO] Sensors CO
         * @property {number|null} [CO2] Sensors CO2
         * @property {number|null} [VOC] Sensors VOC
         * @property {number|null} [resistance] Sensors resistance
         * @property {number|null} [pressure] Sensors pressure
         * @property {Array.<aruba_telemetry.Alarm>|null} [alarm] Sensors alarm
         * @property {Array.<aruba_telemetry.IContact>|null} [contact] Sensors contact
         * @property {aruba_telemetry.IOccupancy|null} [occupancy] Sensors occupancy
         * @property {aruba_telemetry.MechanicalH|null} [mechanicalHandle] Sensors mechanicalHandle
         * @property {number|null} [distance] Sensors distance
         * @property {number|null} [capacitance] Sensors capacitance
         */

        /**
         * Constructs a new Sensors.
         * @memberof aruba_telemetry
         * @classdesc Represents a Sensors.
         * @implements ISensors
         * @constructor
         * @param {aruba_telemetry.ISensors=} [properties] Properties to set
         */
        function Sensors(properties) {
            this.alarm = [];
            this.contact = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sensors accelerometer.
         * @member {aruba_telemetry.IAccelerometer|null|undefined} accelerometer
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.accelerometer = null;

        /**
         * Sensors battery.
         * @member {number} battery
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.battery = 0;

        /**
         * Sensors temperatureC.
         * @member {number} temperatureC
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.temperatureC = 0;

        /**
         * Sensors humidity.
         * @member {number} humidity
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.humidity = 0;

        /**
         * Sensors voltage.
         * @member {number} voltage
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.voltage = 0;

        /**
         * Sensors illumination.
         * @member {number} illumination
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.illumination = 0;

        /**
         * Sensors motion.
         * @member {boolean} motion
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.motion = false;

        /**
         * Sensors current.
         * @member {number} current
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.current = 0;

        /**
         * Sensors CO.
         * @member {number} CO
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.CO = 0;

        /**
         * Sensors CO2.
         * @member {number} CO2
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.CO2 = 0;

        /**
         * Sensors VOC.
         * @member {number} VOC
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.VOC = 0;

        /**
         * Sensors resistance.
         * @member {number} resistance
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.resistance = 0;

        /**
         * Sensors pressure.
         * @member {number} pressure
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.pressure = 0;

        /**
         * Sensors alarm.
         * @member {Array.<aruba_telemetry.Alarm>} alarm
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.alarm = $util.emptyArray;

        /**
         * Sensors contact.
         * @member {Array.<aruba_telemetry.IContact>} contact
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.contact = $util.emptyArray;

        /**
         * Sensors occupancy.
         * @member {aruba_telemetry.IOccupancy|null|undefined} occupancy
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.occupancy = null;

        /**
         * Sensors mechanicalHandle.
         * @member {aruba_telemetry.MechanicalH} mechanicalHandle
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.mechanicalHandle = 1;

        /**
         * Sensors distance.
         * @member {number} distance
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.distance = 0;

        /**
         * Sensors capacitance.
         * @member {number} capacitance
         * @memberof aruba_telemetry.Sensors
         * @instance
         */
        Sensors.prototype.capacitance = 0;

        /**
         * Creates a new Sensors instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Sensors
         * @static
         * @param {aruba_telemetry.ISensors=} [properties] Properties to set
         * @returns {aruba_telemetry.Sensors} Sensors instance
         */
        Sensors.create = function create(properties) {
            return new Sensors(properties);
        };

        /**
         * Encodes the specified Sensors message. Does not implicitly {@link aruba_telemetry.Sensors.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Sensors
         * @static
         * @param {aruba_telemetry.ISensors} message Sensors message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sensors.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accelerometer != null && message.hasOwnProperty("accelerometer"))
                $root.aruba_telemetry.Accelerometer.encode(message.accelerometer, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.battery != null && message.hasOwnProperty("battery"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.battery);
            if (message.temperatureC != null && message.hasOwnProperty("temperatureC"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.temperatureC);
            if (message.humidity != null && message.hasOwnProperty("humidity"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.humidity);
            if (message.voltage != null && message.hasOwnProperty("voltage"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.voltage);
            if (message.illumination != null && message.hasOwnProperty("illumination"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.illumination);
            if (message.motion != null && message.hasOwnProperty("motion"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.motion);
            if (message.current != null && message.hasOwnProperty("current"))
                writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.current);
            if (message.CO != null && message.hasOwnProperty("CO"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.CO);
            if (message.CO2 != null && message.hasOwnProperty("CO2"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.CO2);
            if (message.VOC != null && message.hasOwnProperty("VOC"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.VOC);
            if (message.resistance != null && message.hasOwnProperty("resistance"))
                writer.uint32(/* id 12, wireType 5 =*/101).float(message.resistance);
            if (message.pressure != null && message.hasOwnProperty("pressure"))
                writer.uint32(/* id 13, wireType 0 =*/104).sint32(message.pressure);
            if (message.alarm != null && message.alarm.length)
                for (var i = 0; i < message.alarm.length; ++i)
                    writer.uint32(/* id 14, wireType 0 =*/112).int32(message.alarm[i]);
            if (message.contact != null && message.contact.length)
                for (var i = 0; i < message.contact.length; ++i)
                    $root.aruba_telemetry.Contact.encode(message.contact[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.occupancy != null && message.hasOwnProperty("occupancy"))
                $root.aruba_telemetry.Occupancy.encode(message.occupancy, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.mechanicalHandle != null && message.hasOwnProperty("mechanicalHandle"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.mechanicalHandle);
            if (message.distance != null && message.hasOwnProperty("distance"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.distance);
            if (message.capacitance != null && message.hasOwnProperty("capacitance"))
                writer.uint32(/* id 19, wireType 5 =*/157).float(message.capacitance);
            return writer;
        };

        /**
         * Encodes the specified Sensors message, length delimited. Does not implicitly {@link aruba_telemetry.Sensors.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Sensors
         * @static
         * @param {aruba_telemetry.ISensors} message Sensors message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sensors.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Sensors message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Sensors
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Sensors} Sensors
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sensors.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Sensors();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accelerometer = $root.aruba_telemetry.Accelerometer.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.battery = reader.int32();
                    break;
                case 3:
                    message.temperatureC = reader.float();
                    break;
                case 4:
                    message.humidity = reader.int32();
                    break;
                case 5:
                    message.voltage = reader.float();
                    break;
                case 6:
                    message.illumination = reader.int32();
                    break;
                case 7:
                    message.motion = reader.bool();
                    break;
                case 8:
                    message.current = reader.sint32();
                    break;
                case 9:
                    message.CO = reader.int32();
                    break;
                case 10:
                    message.CO2 = reader.int32();
                    break;
                case 11:
                    message.VOC = reader.int32();
                    break;
                case 12:
                    message.resistance = reader.float();
                    break;
                case 13:
                    message.pressure = reader.sint32();
                    break;
                case 14:
                    if (!(message.alarm && message.alarm.length))
                        message.alarm = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.alarm.push(reader.int32());
                    } else
                        message.alarm.push(reader.int32());
                    break;
                case 15:
                    if (!(message.contact && message.contact.length))
                        message.contact = [];
                    message.contact.push($root.aruba_telemetry.Contact.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.occupancy = $root.aruba_telemetry.Occupancy.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.mechanicalHandle = reader.int32();
                    break;
                case 18:
                    message.distance = reader.int32();
                    break;
                case 19:
                    message.capacitance = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Sensors message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Sensors
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Sensors} Sensors
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sensors.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Sensors message.
         * @function verify
         * @memberof aruba_telemetry.Sensors
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Sensors.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accelerometer != null && message.hasOwnProperty("accelerometer")) {
                var error = $root.aruba_telemetry.Accelerometer.verify(message.accelerometer);
                if (error)
                    return "accelerometer." + error;
            }
            if (message.battery != null && message.hasOwnProperty("battery"))
                if (!$util.isInteger(message.battery))
                    return "battery: integer expected";
            if (message.temperatureC != null && message.hasOwnProperty("temperatureC"))
                if (typeof message.temperatureC !== "number")
                    return "temperatureC: number expected";
            if (message.humidity != null && message.hasOwnProperty("humidity"))
                if (!$util.isInteger(message.humidity))
                    return "humidity: integer expected";
            if (message.voltage != null && message.hasOwnProperty("voltage"))
                if (typeof message.voltage !== "number")
                    return "voltage: number expected";
            if (message.illumination != null && message.hasOwnProperty("illumination"))
                if (!$util.isInteger(message.illumination))
                    return "illumination: integer expected";
            if (message.motion != null && message.hasOwnProperty("motion"))
                if (typeof message.motion !== "boolean")
                    return "motion: boolean expected";
            if (message.current != null && message.hasOwnProperty("current"))
                if (!$util.isInteger(message.current))
                    return "current: integer expected";
            if (message.CO != null && message.hasOwnProperty("CO"))
                if (!$util.isInteger(message.CO))
                    return "CO: integer expected";
            if (message.CO2 != null && message.hasOwnProperty("CO2"))
                if (!$util.isInteger(message.CO2))
                    return "CO2: integer expected";
            if (message.VOC != null && message.hasOwnProperty("VOC"))
                if (!$util.isInteger(message.VOC))
                    return "VOC: integer expected";
            if (message.resistance != null && message.hasOwnProperty("resistance"))
                if (typeof message.resistance !== "number")
                    return "resistance: number expected";
            if (message.pressure != null && message.hasOwnProperty("pressure"))
                if (!$util.isInteger(message.pressure))
                    return "pressure: integer expected";
            if (message.alarm != null && message.hasOwnProperty("alarm")) {
                if (!Array.isArray(message.alarm))
                    return "alarm: array expected";
                for (var i = 0; i < message.alarm.length; ++i)
                    switch (message.alarm[i]) {
                    default:
                        return "alarm: enum value[] expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
            }
            if (message.contact != null && message.hasOwnProperty("contact")) {
                if (!Array.isArray(message.contact))
                    return "contact: array expected";
                for (var i = 0; i < message.contact.length; ++i) {
                    var error = $root.aruba_telemetry.Contact.verify(message.contact[i]);
                    if (error)
                        return "contact." + error;
                }
            }
            if (message.occupancy != null && message.hasOwnProperty("occupancy")) {
                var error = $root.aruba_telemetry.Occupancy.verify(message.occupancy);
                if (error)
                    return "occupancy." + error;
            }
            if (message.mechanicalHandle != null && message.hasOwnProperty("mechanicalHandle"))
                switch (message.mechanicalHandle) {
                default:
                    return "mechanicalHandle: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            if (message.distance != null && message.hasOwnProperty("distance"))
                if (!$util.isInteger(message.distance))
                    return "distance: integer expected";
            if (message.capacitance != null && message.hasOwnProperty("capacitance"))
                if (typeof message.capacitance !== "number")
                    return "capacitance: number expected";
            return null;
        };

        /**
         * Creates a Sensors message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Sensors
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Sensors} Sensors
         */
        Sensors.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Sensors)
                return object;
            var message = new $root.aruba_telemetry.Sensors();
            if (object.accelerometer != null) {
                if (typeof object.accelerometer !== "object")
                    throw TypeError(".aruba_telemetry.Sensors.accelerometer: object expected");
                message.accelerometer = $root.aruba_telemetry.Accelerometer.fromObject(object.accelerometer);
            }
            if (object.battery != null)
                message.battery = object.battery | 0;
            if (object.temperatureC != null)
                message.temperatureC = Number(object.temperatureC);
            if (object.humidity != null)
                message.humidity = object.humidity | 0;
            if (object.voltage != null)
                message.voltage = Number(object.voltage);
            if (object.illumination != null)
                message.illumination = object.illumination | 0;
            if (object.motion != null)
                message.motion = Boolean(object.motion);
            if (object.current != null)
                message.current = object.current | 0;
            if (object.CO != null)
                message.CO = object.CO | 0;
            if (object.CO2 != null)
                message.CO2 = object.CO2 | 0;
            if (object.VOC != null)
                message.VOC = object.VOC | 0;
            if (object.resistance != null)
                message.resistance = Number(object.resistance);
            if (object.pressure != null)
                message.pressure = object.pressure | 0;
            if (object.alarm) {
                if (!Array.isArray(object.alarm))
                    throw TypeError(".aruba_telemetry.Sensors.alarm: array expected");
                message.alarm = [];
                for (var i = 0; i < object.alarm.length; ++i)
                    switch (object.alarm[i]) {
                    default:
                    case "water":
                    case 1:
                        message.alarm[i] = 1;
                        break;
                    case "smoke":
                    case 2:
                        message.alarm[i] = 2;
                        break;
                    case "fire":
                    case 3:
                        message.alarm[i] = 3;
                        break;
                    case "glassbreak":
                    case 4:
                        message.alarm[i] = 4;
                        break;
                    case "intrusion":
                    case 5:
                        message.alarm[i] = 5;
                        break;
                    }
            }
            if (object.contact) {
                if (!Array.isArray(object.contact))
                    throw TypeError(".aruba_telemetry.Sensors.contact: array expected");
                message.contact = [];
                for (var i = 0; i < object.contact.length; ++i) {
                    if (typeof object.contact[i] !== "object")
                        throw TypeError(".aruba_telemetry.Sensors.contact: object expected");
                    message.contact[i] = $root.aruba_telemetry.Contact.fromObject(object.contact[i]);
                }
            }
            if (object.occupancy != null) {
                if (typeof object.occupancy !== "object")
                    throw TypeError(".aruba_telemetry.Sensors.occupancy: object expected");
                message.occupancy = $root.aruba_telemetry.Occupancy.fromObject(object.occupancy);
            }
            switch (object.mechanicalHandle) {
            case "upToRight":
            case 1:
                message.mechanicalHandle = 1;
                break;
            case "rightToDown":
            case 2:
                message.mechanicalHandle = 2;
                break;
            case "downToLeft":
            case 3:
                message.mechanicalHandle = 3;
                break;
            case "leftToUp":
            case 4:
                message.mechanicalHandle = 4;
                break;
            case "upToLeft":
            case 5:
                message.mechanicalHandle = 5;
                break;
            case "leftToDown":
            case 6:
                message.mechanicalHandle = 6;
                break;
            case "downToRight":
            case 7:
                message.mechanicalHandle = 7;
                break;
            case "rightToUp":
            case 8:
                message.mechanicalHandle = 8;
                break;
            }
            if (object.distance != null)
                message.distance = object.distance | 0;
            if (object.capacitance != null)
                message.capacitance = Number(object.capacitance);
            return message;
        };

        /**
         * Creates a plain object from a Sensors message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Sensors
         * @static
         * @param {aruba_telemetry.Sensors} message Sensors
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Sensors.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.alarm = [];
                object.contact = [];
            }
            if (options.defaults) {
                object.accelerometer = null;
                object.battery = 0;
                object.temperatureC = 0;
                object.humidity = 0;
                object.voltage = 0;
                object.illumination = 0;
                object.motion = false;
                object.current = 0;
                object.CO = 0;
                object.CO2 = 0;
                object.VOC = 0;
                object.resistance = 0;
                object.pressure = 0;
                object.occupancy = null;
                object.mechanicalHandle = options.enums === String ? "upToRight" : 1;
                object.distance = 0;
                object.capacitance = 0;
            }
            if (message.accelerometer != null && message.hasOwnProperty("accelerometer"))
                object.accelerometer = $root.aruba_telemetry.Accelerometer.toObject(message.accelerometer, options);
            if (message.battery != null && message.hasOwnProperty("battery"))
                object.battery = message.battery;
            if (message.temperatureC != null && message.hasOwnProperty("temperatureC"))
                object.temperatureC = options.json && !isFinite(message.temperatureC) ? String(message.temperatureC) : message.temperatureC;
            if (message.humidity != null && message.hasOwnProperty("humidity"))
                object.humidity = message.humidity;
            if (message.voltage != null && message.hasOwnProperty("voltage"))
                object.voltage = options.json && !isFinite(message.voltage) ? String(message.voltage) : message.voltage;
            if (message.illumination != null && message.hasOwnProperty("illumination"))
                object.illumination = message.illumination;
            if (message.motion != null && message.hasOwnProperty("motion"))
                object.motion = message.motion;
            if (message.current != null && message.hasOwnProperty("current"))
                object.current = message.current;
            if (message.CO != null && message.hasOwnProperty("CO"))
                object.CO = message.CO;
            if (message.CO2 != null && message.hasOwnProperty("CO2"))
                object.CO2 = message.CO2;
            if (message.VOC != null && message.hasOwnProperty("VOC"))
                object.VOC = message.VOC;
            if (message.resistance != null && message.hasOwnProperty("resistance"))
                object.resistance = options.json && !isFinite(message.resistance) ? String(message.resistance) : message.resistance;
            if (message.pressure != null && message.hasOwnProperty("pressure"))
                object.pressure = message.pressure;
            if (message.alarm && message.alarm.length) {
                object.alarm = [];
                for (var j = 0; j < message.alarm.length; ++j)
                    object.alarm[j] = options.enums === String ? $root.aruba_telemetry.Alarm[message.alarm[j]] : message.alarm[j];
            }
            if (message.contact && message.contact.length) {
                object.contact = [];
                for (var j = 0; j < message.contact.length; ++j)
                    object.contact[j] = $root.aruba_telemetry.Contact.toObject(message.contact[j], options);
            }
            if (message.occupancy != null && message.hasOwnProperty("occupancy"))
                object.occupancy = $root.aruba_telemetry.Occupancy.toObject(message.occupancy, options);
            if (message.mechanicalHandle != null && message.hasOwnProperty("mechanicalHandle"))
                object.mechanicalHandle = options.enums === String ? $root.aruba_telemetry.MechanicalH[message.mechanicalHandle] : message.mechanicalHandle;
            if (message.distance != null && message.hasOwnProperty("distance"))
                object.distance = message.distance;
            if (message.capacitance != null && message.hasOwnProperty("capacitance"))
                object.capacitance = options.json && !isFinite(message.capacitance) ? String(message.capacitance) : message.capacitance;
            return object;
        };

        /**
         * Converts this Sensors to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Sensors
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Sensors.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Sensors;
    })();

    aruba_telemetry.Stats = (function() {

        /**
         * Properties of a Stats.
         * @memberof aruba_telemetry
         * @interface IStats
         * @property {number|Long|null} [uptime] Stats uptime
         * @property {number|Long|null} [adv_cnt] Stats adv_cnt
         * @property {number|null} [seq_nr] Stats seq_nr
         * @property {number} frame_cnt Stats frame_cnt
         */

        /**
         * Constructs a new Stats.
         * @memberof aruba_telemetry
         * @classdesc Represents a Stats.
         * @implements IStats
         * @constructor
         * @param {aruba_telemetry.IStats=} [properties] Properties to set
         */
        function Stats(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Stats uptime.
         * @member {number|Long} uptime
         * @memberof aruba_telemetry.Stats
         * @instance
         */
        Stats.prototype.uptime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Stats adv_cnt.
         * @member {number|Long} adv_cnt
         * @memberof aruba_telemetry.Stats
         * @instance
         */
        Stats.prototype.adv_cnt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Stats seq_nr.
         * @member {number} seq_nr
         * @memberof aruba_telemetry.Stats
         * @instance
         */
        Stats.prototype.seq_nr = 0;

        /**
         * Stats frame_cnt.
         * @member {number} frame_cnt
         * @memberof aruba_telemetry.Stats
         * @instance
         */
        Stats.prototype.frame_cnt = 0;

        /**
         * Creates a new Stats instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Stats
         * @static
         * @param {aruba_telemetry.IStats=} [properties] Properties to set
         * @returns {aruba_telemetry.Stats} Stats instance
         */
        Stats.create = function create(properties) {
            return new Stats(properties);
        };

        /**
         * Encodes the specified Stats message. Does not implicitly {@link aruba_telemetry.Stats.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Stats
         * @static
         * @param {aruba_telemetry.IStats} message Stats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Stats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uptime != null && message.hasOwnProperty("uptime"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.uptime);
            if (message.adv_cnt != null && message.hasOwnProperty("adv_cnt"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.adv_cnt);
            if (message.seq_nr != null && message.hasOwnProperty("seq_nr"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.seq_nr);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.frame_cnt);
            return writer;
        };

        /**
         * Encodes the specified Stats message, length delimited. Does not implicitly {@link aruba_telemetry.Stats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Stats
         * @static
         * @param {aruba_telemetry.IStats} message Stats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Stats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Stats message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Stats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Stats} Stats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Stats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Stats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uptime = reader.uint64();
                    break;
                case 2:
                    message.adv_cnt = reader.uint64();
                    break;
                case 3:
                    message.seq_nr = reader.uint32();
                    break;
                case 4:
                    message.frame_cnt = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("frame_cnt"))
                throw $util.ProtocolError("missing required 'frame_cnt'", { instance: message });
            return message;
        };

        /**
         * Decodes a Stats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Stats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Stats} Stats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Stats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Stats message.
         * @function verify
         * @memberof aruba_telemetry.Stats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Stats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uptime != null && message.hasOwnProperty("uptime"))
                if (!$util.isInteger(message.uptime) && !(message.uptime && $util.isInteger(message.uptime.low) && $util.isInteger(message.uptime.high)))
                    return "uptime: integer|Long expected";
            if (message.adv_cnt != null && message.hasOwnProperty("adv_cnt"))
                if (!$util.isInteger(message.adv_cnt) && !(message.adv_cnt && $util.isInteger(message.adv_cnt.low) && $util.isInteger(message.adv_cnt.high)))
                    return "adv_cnt: integer|Long expected";
            if (message.seq_nr != null && message.hasOwnProperty("seq_nr"))
                if (!$util.isInteger(message.seq_nr))
                    return "seq_nr: integer expected";
            if (!$util.isInteger(message.frame_cnt))
                return "frame_cnt: integer expected";
            return null;
        };

        /**
         * Creates a Stats message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Stats
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Stats} Stats
         */
        Stats.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Stats)
                return object;
            var message = new $root.aruba_telemetry.Stats();
            if (object.uptime != null)
                if ($util.Long)
                    (message.uptime = $util.Long.fromValue(object.uptime)).unsigned = true;
                else if (typeof object.uptime === "string")
                    message.uptime = parseInt(object.uptime, 10);
                else if (typeof object.uptime === "number")
                    message.uptime = object.uptime;
                else if (typeof object.uptime === "object")
                    message.uptime = new $util.LongBits(object.uptime.low >>> 0, object.uptime.high >>> 0).toNumber(true);
            if (object.adv_cnt != null)
                if ($util.Long)
                    (message.adv_cnt = $util.Long.fromValue(object.adv_cnt)).unsigned = true;
                else if (typeof object.adv_cnt === "string")
                    message.adv_cnt = parseInt(object.adv_cnt, 10);
                else if (typeof object.adv_cnt === "number")
                    message.adv_cnt = object.adv_cnt;
                else if (typeof object.adv_cnt === "object")
                    message.adv_cnt = new $util.LongBits(object.adv_cnt.low >>> 0, object.adv_cnt.high >>> 0).toNumber(true);
            if (object.seq_nr != null)
                message.seq_nr = object.seq_nr >>> 0;
            if (object.frame_cnt != null)
                message.frame_cnt = object.frame_cnt >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Stats message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Stats
         * @static
         * @param {aruba_telemetry.Stats} message Stats
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Stats.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.uptime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uptime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.adv_cnt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.adv_cnt = options.longs === String ? "0" : 0;
                object.seq_nr = 0;
                object.frame_cnt = 0;
            }
            if (message.uptime != null && message.hasOwnProperty("uptime"))
                if (typeof message.uptime === "number")
                    object.uptime = options.longs === String ? String(message.uptime) : message.uptime;
                else
                    object.uptime = options.longs === String ? $util.Long.prototype.toString.call(message.uptime) : options.longs === Number ? new $util.LongBits(message.uptime.low >>> 0, message.uptime.high >>> 0).toNumber(true) : message.uptime;
            if (message.adv_cnt != null && message.hasOwnProperty("adv_cnt"))
                if (typeof message.adv_cnt === "number")
                    object.adv_cnt = options.longs === String ? String(message.adv_cnt) : message.adv_cnt;
                else
                    object.adv_cnt = options.longs === String ? $util.Long.prototype.toString.call(message.adv_cnt) : options.longs === Number ? new $util.LongBits(message.adv_cnt.low >>> 0, message.adv_cnt.high >>> 0).toNumber(true) : message.adv_cnt;
            if (message.seq_nr != null && message.hasOwnProperty("seq_nr"))
                object.seq_nr = message.seq_nr;
            if (message.frame_cnt != null && message.hasOwnProperty("frame_cnt"))
                object.frame_cnt = message.frame_cnt;
            return object;
        };

        /**
         * Converts this Stats to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Stats
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Stats.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Stats;
    })();

    /**
     * switchState enum.
     * @name aruba_telemetry.switchState
     * @enum {string}
     * @property {number} unknown=1 unknown value
     * @property {number} on=2 on value
     * @property {number} off=3 off value
     */
    aruba_telemetry.switchState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "unknown"] = 1;
        values[valuesById[2] = "on"] = 2;
        values[valuesById[3] = "off"] = 3;
        return values;
    })();

    aruba_telemetry.Inputs = (function() {

        /**
         * Properties of an Inputs.
         * @memberof aruba_telemetry
         * @interface IInputs
         * @property {Array.<aruba_telemetry.IRockerSwitch>|null} [rocker] Inputs rocker
         * @property {Array.<aruba_telemetry.switchState>|null} [switchIndex] Inputs switchIndex
         */

        /**
         * Constructs a new Inputs.
         * @memberof aruba_telemetry
         * @classdesc Represents an Inputs.
         * @implements IInputs
         * @constructor
         * @param {aruba_telemetry.IInputs=} [properties] Properties to set
         */
        function Inputs(properties) {
            this.rocker = [];
            this.switchIndex = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Inputs rocker.
         * @member {Array.<aruba_telemetry.IRockerSwitch>} rocker
         * @memberof aruba_telemetry.Inputs
         * @instance
         */
        Inputs.prototype.rocker = $util.emptyArray;

        /**
         * Inputs switchIndex.
         * @member {Array.<aruba_telemetry.switchState>} switchIndex
         * @memberof aruba_telemetry.Inputs
         * @instance
         */
        Inputs.prototype.switchIndex = $util.emptyArray;

        /**
         * Creates a new Inputs instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Inputs
         * @static
         * @param {aruba_telemetry.IInputs=} [properties] Properties to set
         * @returns {aruba_telemetry.Inputs} Inputs instance
         */
        Inputs.create = function create(properties) {
            return new Inputs(properties);
        };

        /**
         * Encodes the specified Inputs message. Does not implicitly {@link aruba_telemetry.Inputs.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Inputs
         * @static
         * @param {aruba_telemetry.IInputs} message Inputs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Inputs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rocker != null && message.rocker.length)
                for (var i = 0; i < message.rocker.length; ++i)
                    $root.aruba_telemetry.RockerSwitch.encode(message.rocker[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.switchIndex != null && message.switchIndex.length)
                for (var i = 0; i < message.switchIndex.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.switchIndex[i]);
            return writer;
        };

        /**
         * Encodes the specified Inputs message, length delimited. Does not implicitly {@link aruba_telemetry.Inputs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Inputs
         * @static
         * @param {aruba_telemetry.IInputs} message Inputs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Inputs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Inputs message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Inputs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Inputs} Inputs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Inputs.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Inputs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.rocker && message.rocker.length))
                        message.rocker = [];
                    message.rocker.push($root.aruba_telemetry.RockerSwitch.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.switchIndex && message.switchIndex.length))
                        message.switchIndex = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.switchIndex.push(reader.int32());
                    } else
                        message.switchIndex.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Inputs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Inputs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Inputs} Inputs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Inputs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Inputs message.
         * @function verify
         * @memberof aruba_telemetry.Inputs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Inputs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rocker != null && message.hasOwnProperty("rocker")) {
                if (!Array.isArray(message.rocker))
                    return "rocker: array expected";
                for (var i = 0; i < message.rocker.length; ++i) {
                    var error = $root.aruba_telemetry.RockerSwitch.verify(message.rocker[i]);
                    if (error)
                        return "rocker." + error;
                }
            }
            if (message.switchIndex != null && message.hasOwnProperty("switchIndex")) {
                if (!Array.isArray(message.switchIndex))
                    return "switchIndex: array expected";
                for (var i = 0; i < message.switchIndex.length; ++i)
                    switch (message.switchIndex[i]) {
                    default:
                        return "switchIndex: enum value[] expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
            }
            return null;
        };

        /**
         * Creates an Inputs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Inputs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Inputs} Inputs
         */
        Inputs.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Inputs)
                return object;
            var message = new $root.aruba_telemetry.Inputs();
            if (object.rocker) {
                if (!Array.isArray(object.rocker))
                    throw TypeError(".aruba_telemetry.Inputs.rocker: array expected");
                message.rocker = [];
                for (var i = 0; i < object.rocker.length; ++i) {
                    if (typeof object.rocker[i] !== "object")
                        throw TypeError(".aruba_telemetry.Inputs.rocker: object expected");
                    message.rocker[i] = $root.aruba_telemetry.RockerSwitch.fromObject(object.rocker[i]);
                }
            }
            if (object.switchIndex) {
                if (!Array.isArray(object.switchIndex))
                    throw TypeError(".aruba_telemetry.Inputs.switchIndex: array expected");
                message.switchIndex = [];
                for (var i = 0; i < object.switchIndex.length; ++i)
                    switch (object.switchIndex[i]) {
                    default:
                    case "unknown":
                    case 1:
                        message.switchIndex[i] = 1;
                        break;
                    case "on":
                    case 2:
                        message.switchIndex[i] = 2;
                        break;
                    case "off":
                    case 3:
                        message.switchIndex[i] = 3;
                        break;
                    }
            }
            return message;
        };

        /**
         * Creates a plain object from an Inputs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Inputs
         * @static
         * @param {aruba_telemetry.Inputs} message Inputs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Inputs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.rocker = [];
                object.switchIndex = [];
            }
            if (message.rocker && message.rocker.length) {
                object.rocker = [];
                for (var j = 0; j < message.rocker.length; ++j)
                    object.rocker[j] = $root.aruba_telemetry.RockerSwitch.toObject(message.rocker[j], options);
            }
            if (message.switchIndex && message.switchIndex.length) {
                object.switchIndex = [];
                for (var j = 0; j < message.switchIndex.length; ++j)
                    object.switchIndex[j] = options.enums === String ? $root.aruba_telemetry.switchState[message.switchIndex[j]] : message.switchIndex[j];
            }
            return object;
        };

        /**
         * Converts this Inputs to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Inputs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Inputs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Inputs;
    })();

    aruba_telemetry.VendorData = (function() {

        /**
         * Properties of a VendorData.
         * @memberof aruba_telemetry
         * @interface IVendorData
         * @property {string|null} [vendor] VendorData vendor
         * @property {Uint8Array} data VendorData data
         */

        /**
         * Constructs a new VendorData.
         * @memberof aruba_telemetry
         * @classdesc Represents a VendorData.
         * @implements IVendorData
         * @constructor
         * @param {aruba_telemetry.IVendorData=} [properties] Properties to set
         */
        function VendorData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VendorData vendor.
         * @member {string} vendor
         * @memberof aruba_telemetry.VendorData
         * @instance
         */
        VendorData.prototype.vendor = "";

        /**
         * VendorData data.
         * @member {Uint8Array} data
         * @memberof aruba_telemetry.VendorData
         * @instance
         */
        VendorData.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new VendorData instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.VendorData
         * @static
         * @param {aruba_telemetry.IVendorData=} [properties] Properties to set
         * @returns {aruba_telemetry.VendorData} VendorData instance
         */
        VendorData.create = function create(properties) {
            return new VendorData(properties);
        };

        /**
         * Encodes the specified VendorData message. Does not implicitly {@link aruba_telemetry.VendorData.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.VendorData
         * @static
         * @param {aruba_telemetry.IVendorData} message VendorData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VendorData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vendor != null && message.hasOwnProperty("vendor"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.vendor);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified VendorData message, length delimited. Does not implicitly {@link aruba_telemetry.VendorData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.VendorData
         * @static
         * @param {aruba_telemetry.IVendorData} message VendorData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VendorData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VendorData message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.VendorData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.VendorData} VendorData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VendorData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.VendorData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.vendor = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes().toString('hex');
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("data"))
                throw $util.ProtocolError("missing required 'data'", { instance: message });
            return message;
        };

        /**
         * Decodes a VendorData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.VendorData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.VendorData} VendorData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VendorData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VendorData message.
         * @function verify
         * @memberof aruba_telemetry.VendorData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VendorData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vendor != null && message.hasOwnProperty("vendor"))
                if (!$util.isString(message.vendor))
                    return "vendor: string expected";
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
            return null;
        };

        /**
         * Creates a VendorData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.VendorData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.VendorData} VendorData
         */
        VendorData.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.VendorData)
                return object;
            var message = new $root.aruba_telemetry.VendorData();
            if (object.vendor != null)
                message.vendor = String(object.vendor);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a VendorData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.VendorData
         * @static
         * @param {aruba_telemetry.VendorData} message VendorData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VendorData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.vendor = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.vendor != null && message.hasOwnProperty("vendor"))
                object.vendor = message.vendor;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };

        /**
         * Converts this VendorData to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.VendorData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VendorData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VendorData;
    })();

    aruba_telemetry.BTCompanyID = (function() {

        /**
         * Properties of a BTCompanyID.
         * @memberof aruba_telemetry
         * @interface IBTCompanyID
         * @property {number|null} [value] BTCompanyID value
         * @property {string|null} [description] BTCompanyID description
         */

        /**
         * Constructs a new BTCompanyID.
         * @memberof aruba_telemetry
         * @classdesc Represents a BTCompanyID.
         * @implements IBTCompanyID
         * @constructor
         * @param {aruba_telemetry.IBTCompanyID=} [properties] Properties to set
         */
        function BTCompanyID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BTCompanyID value.
         * @member {number} value
         * @memberof aruba_telemetry.BTCompanyID
         * @instance
         */
        BTCompanyID.prototype.value = 0;

        /**
         * BTCompanyID description.
         * @member {string} description
         * @memberof aruba_telemetry.BTCompanyID
         * @instance
         */
        BTCompanyID.prototype.description = "";

        /**
         * Creates a new BTCompanyID instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.BTCompanyID
         * @static
         * @param {aruba_telemetry.IBTCompanyID=} [properties] Properties to set
         * @returns {aruba_telemetry.BTCompanyID} BTCompanyID instance
         */
        BTCompanyID.create = function create(properties) {
            return new BTCompanyID(properties);
        };

        /**
         * Encodes the specified BTCompanyID message. Does not implicitly {@link aruba_telemetry.BTCompanyID.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.BTCompanyID
         * @static
         * @param {aruba_telemetry.IBTCompanyID} message BTCompanyID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BTCompanyID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified BTCompanyID message, length delimited. Does not implicitly {@link aruba_telemetry.BTCompanyID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.BTCompanyID
         * @static
         * @param {aruba_telemetry.IBTCompanyID} message BTCompanyID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BTCompanyID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BTCompanyID message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.BTCompanyID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.BTCompanyID} BTCompanyID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BTCompanyID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.BTCompanyID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.uint32();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BTCompanyID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.BTCompanyID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.BTCompanyID} BTCompanyID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BTCompanyID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BTCompanyID message.
         * @function verify
         * @memberof aruba_telemetry.BTCompanyID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BTCompanyID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates a BTCompanyID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.BTCompanyID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.BTCompanyID} BTCompanyID
         */
        BTCompanyID.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.BTCompanyID)
                return object;
            var message = new $root.aruba_telemetry.BTCompanyID();
            if (object.value != null)
                message.value = object.value >>> 0;
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from a BTCompanyID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.BTCompanyID
         * @static
         * @param {aruba_telemetry.BTCompanyID} message BTCompanyID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BTCompanyID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.value = 0;
                object.description = "";
            }
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this BTCompanyID to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.BTCompanyID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BTCompanyID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BTCompanyID;
    })();

    aruba_telemetry.Reported = (function() {

        /**
         * Properties of a Reported.
         * @memberof aruba_telemetry
         * @interface IReported
         * @property {Uint8Array|null} [mac] Reported mac
         * @property {Array.<aruba_telemetry.deviceClassEnum>|null} [deviceClass] Reported deviceClass
         * @property {string|null} [model] Reported model
         * @property {aruba_telemetry.IFirmware|null} [firmware] Reported firmware
         * @property {string|null} [assetId] Reported assetId
         * @property {Uint8Array|null} [publicKey] Reported publicKey
         * @property {number|Long|null} [lastSeen] Reported lastSeen
         * @property {aruba_telemetry.IBeaconEvent|null} [bevent] Reported bevent
         * @property {aruba_telemetry.IRssi|null} [rssi] Reported rssi
         * @property {aruba_telemetry.ICell|null} [cell] Reported cell
         * @property {Array.<aruba_telemetry.IBeacons>|null} [beacons] Reported beacons
         * @property {number|null} [txpower] Reported txpower
         * @property {aruba_telemetry.ISensors|null} [sensors] Reported sensors
         * @property {aruba_telemetry.IStats|null} [stats] Reported stats
         * @property {aruba_telemetry.IInputs|null} [inputs] Reported inputs
         * @property {aruba_telemetry.IVendorData|null} [vendorData] Reported vendorData
         * @property {string|null} [vendorName] Reported vendorName
         * @property {number|Long|null} [sensorTimestamp] Reported sensorTimestamp
         * @property {number|null} [flags] Reported flags
         * @property {string|null} [localName] Reported localName
         * @property {string|null} [identity] Reported identity
         * @property {Array.<aruba_telemetry.IBTCompanyID>|null} [companyIdentifier] Reported companyIdentifier
         */

        /**
         * Constructs a new Reported.
         * @memberof aruba_telemetry
         * @classdesc Represents a Reported.
         * @implements IReported
         * @constructor
         * @param {aruba_telemetry.IReported=} [properties] Properties to set
         */
        function Reported(properties) {
            this.deviceClass = [];
            this.beacons = [];
            this.companyIdentifier = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Reported mac.
         * @member {Uint8Array} mac
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.mac = $util.newBuffer([]);

        /**
         * Reported deviceClass.
         * @member {Array.<aruba_telemetry.deviceClassEnum>} deviceClass
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.deviceClass = $util.emptyArray;

        /**
         * Reported model.
         * @member {string} model
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.model = "";

        /**
         * Reported firmware.
         * @member {aruba_telemetry.IFirmware|null|undefined} firmware
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.firmware = null;

        /**
         * Reported assetId.
         * @member {string} assetId
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.assetId = "";

        /**
         * Reported publicKey.
         * @member {Uint8Array} publicKey
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.publicKey = $util.newBuffer([]);

        /**
         * Reported lastSeen.
         * @member {number|Long} lastSeen
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.lastSeen = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Reported bevent.
         * @member {aruba_telemetry.IBeaconEvent|null|undefined} bevent
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.bevent = null;

        /**
         * Reported rssi.
         * @member {aruba_telemetry.IRssi|null|undefined} rssi
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.rssi = null;

        /**
         * Reported cell.
         * @member {aruba_telemetry.ICell|null|undefined} cell
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.cell = null;

        /**
         * Reported beacons.
         * @member {Array.<aruba_telemetry.IBeacons>} beacons
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.beacons = $util.emptyArray;

        /**
         * Reported txpower.
         * @member {number} txpower
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.txpower = 0;

        /**
         * Reported sensors.
         * @member {aruba_telemetry.ISensors|null|undefined} sensors
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.sensors = null;

        /**
         * Reported stats.
         * @member {aruba_telemetry.IStats|null|undefined} stats
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.stats = null;

        /**
         * Reported inputs.
         * @member {aruba_telemetry.IInputs|null|undefined} inputs
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.inputs = null;

        /**
         * Reported vendorData.
         * @member {aruba_telemetry.IVendorData|null|undefined} vendorData
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.vendorData = null;

        /**
         * Reported vendorName.
         * @member {string} vendorName
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.vendorName = "";

        /**
         * Reported sensorTimestamp.
         * @member {number|Long} sensorTimestamp
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.sensorTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Reported flags.
         * @member {number} flags
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.flags = 0;

        /**
         * Reported localName.
         * @member {string} localName
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.localName = "";

        /**
         * Reported identity.
         * @member {string} identity
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.identity = "";

        /**
         * Reported companyIdentifier.
         * @member {Array.<aruba_telemetry.IBTCompanyID>} companyIdentifier
         * @memberof aruba_telemetry.Reported
         * @instance
         */
        Reported.prototype.companyIdentifier = $util.emptyArray;

        /**
         * Creates a new Reported instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Reported
         * @static
         * @param {aruba_telemetry.IReported=} [properties] Properties to set
         * @returns {aruba_telemetry.Reported} Reported instance
         */
        Reported.create = function create(properties) {
            return new Reported(properties);
        };

        /**
         * Encodes the specified Reported message. Does not implicitly {@link aruba_telemetry.Reported.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Reported
         * @static
         * @param {aruba_telemetry.IReported} message Reported message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reported.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mac != null && message.hasOwnProperty("mac"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.mac);
            if (message.deviceClass != null && message.deviceClass.length)
                for (var i = 0; i < message.deviceClass.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.deviceClass[i]);
            if (message.model != null && message.hasOwnProperty("model"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.model);
            if (message.firmware != null && message.hasOwnProperty("firmware"))
                $root.aruba_telemetry.Firmware.encode(message.firmware, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.assetId);
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.publicKey);
            if (message.lastSeen != null && message.hasOwnProperty("lastSeen"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.lastSeen);
            if (message.bevent != null && message.hasOwnProperty("bevent"))
                $root.aruba_telemetry.BeaconEvent.encode(message.bevent, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.rssi != null && message.hasOwnProperty("rssi"))
                $root.aruba_telemetry.Rssi.encode(message.rssi, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.cell != null && message.hasOwnProperty("cell"))
                $root.aruba_telemetry.Cell.encode(message.cell, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.beacons != null && message.beacons.length)
                for (var i = 0; i < message.beacons.length; ++i)
                    $root.aruba_telemetry.Beacons.encode(message.beacons[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.txpower != null && message.hasOwnProperty("txpower"))
                writer.uint32(/* id 13, wireType 0 =*/104).sint32(message.txpower);
            if (message.sensors != null && message.hasOwnProperty("sensors"))
                $root.aruba_telemetry.Sensors.encode(message.sensors, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.stats != null && message.hasOwnProperty("stats"))
                $root.aruba_telemetry.Stats.encode(message.stats, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.inputs != null && message.hasOwnProperty("inputs"))
                $root.aruba_telemetry.Inputs.encode(message.inputs, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.vendorData != null && message.hasOwnProperty("vendorData"))
                $root.aruba_telemetry.VendorData.encode(message.vendorData, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.vendorName != null && message.hasOwnProperty("vendorName"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.vendorName);
            if (message.sensorTimestamp != null && message.hasOwnProperty("sensorTimestamp"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint64(message.sensorTimestamp);
            if (message.flags != null && message.hasOwnProperty("flags"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.flags);
            if (message.localName != null && message.hasOwnProperty("localName"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.localName);
            if (message.identity != null && message.hasOwnProperty("identity"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.identity);
            if (message.companyIdentifier != null && message.companyIdentifier.length)
                for (var i = 0; i < message.companyIdentifier.length; ++i)
                    $root.aruba_telemetry.BTCompanyID.encode(message.companyIdentifier[i], writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Reported message, length delimited. Does not implicitly {@link aruba_telemetry.Reported.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Reported
         * @static
         * @param {aruba_telemetry.IReported} message Reported message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reported.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Reported message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Reported
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Reported} Reported
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reported.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Reported();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mac = reader.bytes().toString('hex');
                    break;
                case 2:
                    if (!(message.deviceClass && message.deviceClass.length))
                        message.deviceClass = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.deviceClass.push(reader.int32());
                    } else
                        message.deviceClass.push(reader.int32());
                    break;
                case 3:
                    message.model = reader.string();
                    break;
                case 4:
                    message.firmware = $root.aruba_telemetry.Firmware.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.assetId = reader.string();
                    break;
                case 6:
                    message.publicKey = reader.bytes().toString('hex');
                    break;
                case 7:
                    message.lastSeen = reader.uint64();
                    break;
                case 9:
                    message.bevent = $root.aruba_telemetry.BeaconEvent.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.rssi = $root.aruba_telemetry.Rssi.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.cell = $root.aruba_telemetry.Cell.decode(reader, reader.uint32());
                    break;
                case 12:
                    if (!(message.beacons && message.beacons.length))
                        message.beacons = [];
                    message.beacons.push($root.aruba_telemetry.Beacons.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.txpower = reader.sint32();
                    break;
                case 14:
                    message.sensors = $root.aruba_telemetry.Sensors.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.stats = $root.aruba_telemetry.Stats.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.inputs = $root.aruba_telemetry.Inputs.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.vendorData = $root.aruba_telemetry.VendorData.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.vendorName = reader.string();
                    break;
                case 20:
                    message.sensorTimestamp = reader.uint64();
                    break;
                case 21:
                    message.flags = reader.uint32();
                    break;
                case 22:
                    message.localName = reader.string();
                    break;
                case 23:
                    message.identity = reader.string();
                    break;
                case 24:
                    if (!(message.companyIdentifier && message.companyIdentifier.length))
                        message.companyIdentifier = [];
                    message.companyIdentifier.push($root.aruba_telemetry.BTCompanyID.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Reported message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Reported
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Reported} Reported
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reported.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Reported message.
         * @function verify
         * @memberof aruba_telemetry.Reported
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Reported.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mac != null && message.hasOwnProperty("mac"))
                if (!(message.mac && typeof message.mac.length === "number" || $util.isString(message.mac)))
                    return "mac: buffer expected";
            if (message.deviceClass != null && message.hasOwnProperty("deviceClass")) {
                if (!Array.isArray(message.deviceClass))
                    return "deviceClass: array expected";
                for (var i = 0; i < message.deviceClass.length; ++i)
                    switch (message.deviceClass[i]) {
                    default:
                        return "deviceClass: enum value[] expected";
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
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                    case 24:
                    case 25:
                    case 26:
                    case 27:
                    case 28:
                    case 29:
                    case 30:
                    case 31:
                        break;
                    }
            }
            if (message.model != null && message.hasOwnProperty("model"))
                if (!$util.isString(message.model))
                    return "model: string expected";
            if (message.firmware != null && message.hasOwnProperty("firmware")) {
                var error = $root.aruba_telemetry.Firmware.verify(message.firmware);
                if (error)
                    return "firmware." + error;
            }
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!$util.isString(message.assetId))
                    return "assetId: string expected";
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                    return "publicKey: buffer expected";
            if (message.lastSeen != null && message.hasOwnProperty("lastSeen"))
                if (!$util.isInteger(message.lastSeen) && !(message.lastSeen && $util.isInteger(message.lastSeen.low) && $util.isInteger(message.lastSeen.high)))
                    return "lastSeen: integer|Long expected";
            if (message.bevent != null && message.hasOwnProperty("bevent")) {
                var error = $root.aruba_telemetry.BeaconEvent.verify(message.bevent);
                if (error)
                    return "bevent." + error;
            }
            if (message.rssi != null && message.hasOwnProperty("rssi")) {
                var error = $root.aruba_telemetry.Rssi.verify(message.rssi);
                if (error)
                    return "rssi." + error;
            }
            if (message.cell != null && message.hasOwnProperty("cell")) {
                var error = $root.aruba_telemetry.Cell.verify(message.cell);
                if (error)
                    return "cell." + error;
            }
            if (message.beacons != null && message.hasOwnProperty("beacons")) {
                if (!Array.isArray(message.beacons))
                    return "beacons: array expected";
                for (var i = 0; i < message.beacons.length; ++i) {
                    var error = $root.aruba_telemetry.Beacons.verify(message.beacons[i]);
                    if (error)
                        return "beacons." + error;
                }
            }
            if (message.txpower != null && message.hasOwnProperty("txpower"))
                if (!$util.isInteger(message.txpower))
                    return "txpower: integer expected";
            if (message.sensors != null && message.hasOwnProperty("sensors")) {
                var error = $root.aruba_telemetry.Sensors.verify(message.sensors);
                if (error)
                    return "sensors." + error;
            }
            if (message.stats != null && message.hasOwnProperty("stats")) {
                var error = $root.aruba_telemetry.Stats.verify(message.stats);
                if (error)
                    return "stats." + error;
            }
            if (message.inputs != null && message.hasOwnProperty("inputs")) {
                var error = $root.aruba_telemetry.Inputs.verify(message.inputs);
                if (error)
                    return "inputs." + error;
            }
            if (message.vendorData != null && message.hasOwnProperty("vendorData")) {
                var error = $root.aruba_telemetry.VendorData.verify(message.vendorData);
                if (error)
                    return "vendorData." + error;
            }
            if (message.vendorName != null && message.hasOwnProperty("vendorName"))
                if (!$util.isString(message.vendorName))
                    return "vendorName: string expected";
            if (message.sensorTimestamp != null && message.hasOwnProperty("sensorTimestamp"))
                if (!$util.isInteger(message.sensorTimestamp) && !(message.sensorTimestamp && $util.isInteger(message.sensorTimestamp.low) && $util.isInteger(message.sensorTimestamp.high)))
                    return "sensorTimestamp: integer|Long expected";
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
            if (message.localName != null && message.hasOwnProperty("localName"))
                if (!$util.isString(message.localName))
                    return "localName: string expected";
            if (message.identity != null && message.hasOwnProperty("identity"))
                if (!$util.isString(message.identity))
                    return "identity: string expected";
            if (message.companyIdentifier != null && message.hasOwnProperty("companyIdentifier")) {
                if (!Array.isArray(message.companyIdentifier))
                    return "companyIdentifier: array expected";
                for (var i = 0; i < message.companyIdentifier.length; ++i) {
                    var error = $root.aruba_telemetry.BTCompanyID.verify(message.companyIdentifier[i]);
                    if (error)
                        return "companyIdentifier." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Reported message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Reported
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Reported} Reported
         */
        Reported.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Reported)
                return object;
            var message = new $root.aruba_telemetry.Reported();
            if (object.mac != null)
                if (typeof object.mac === "string")
                    $util.base64.decode(object.mac, message.mac = $util.newBuffer($util.base64.length(object.mac)), 0);
                else if (object.mac.length)
                    message.mac = object.mac;
            if (object.deviceClass) {
                if (!Array.isArray(object.deviceClass))
                    throw TypeError(".aruba_telemetry.Reported.deviceClass: array expected");
                message.deviceClass = [];
                for (var i = 0; i < object.deviceClass.length; ++i)
                    switch (object.deviceClass[i]) {
                    default:
                    case "unclassified":
                    case 0:
                        message.deviceClass[i] = 0;
                        break;
                    case "arubaBeacon":
                    case 1:
                        message.deviceClass[i] = 1;
                        break;
                    case "arubaTag":
                    case 2:
                        message.deviceClass[i] = 2;
                        break;
                    case "zfTag":
                    case 3:
                        message.deviceClass[i] = 3;
                        break;
                    case "stanleyTag":
                    case 4:
                        message.deviceClass[i] = 4;
                        break;
                    case "virginBeacon":
                    case 5:
                        message.deviceClass[i] = 5;
                        break;
                    case "enoceanSensor":
                    case 6:
                        message.deviceClass[i] = 6;
                        break;
                    case "enoceanSwitch":
                    case 7:
                        message.deviceClass[i] = 7;
                        break;
                    case "iBeacon":
                    case 8:
                        message.deviceClass[i] = 8;
                        break;
                    case "allBleData":
                    case 9:
                        message.deviceClass[i] = 9;
                        break;
                    case "RawBleData":
                    case 10:
                        message.deviceClass[i] = 10;
                        break;
                    case "eddystone":
                    case 11:
                        message.deviceClass[i] = 11;
                        break;
                    case "assaAbloy":
                    case 12:
                        message.deviceClass[i] = 12;
                        break;
                    case "arubaSensor":
                    case 13:
                        message.deviceClass[i] = 13;
                        break;
                    case "abbSensor":
                    case 14:
                        message.deviceClass[i] = 14;
                        break;
                    case "wifiTag":
                    case 15:
                        message.deviceClass[i] = 15;
                        break;
                    case "wifiAssocSta":
                    case 16:
                        message.deviceClass[i] = 16;
                        break;
                    case "wifiUnassocSta":
                    case 17:
                        message.deviceClass[i] = 17;
                        break;
                    case "mysphera":
                    case 18:
                        message.deviceClass[i] = 18;
                        break;
                    case "sBeacon":
                    case 19:
                        message.deviceClass[i] = 19;
                        break;
                    case "wiliot":
                    case 20:
                        message.deviceClass[i] = 20;
                        break;
                    case "ZSD":
                    case 21:
                        message.deviceClass[i] = 21;
                        break;
                    case "serialdata":
                    case 22:
                        message.deviceClass[i] = 22;
                        break;
                    case "exposureNotification":
                    case 23:
                        message.deviceClass[i] = 23;
                        break;
                    case "onity":
                    case 24:
                        message.deviceClass[i] = 24;
                        break;
                    case "minew":
                    case 25:
                        message.deviceClass[i] = 25;
                        break;
                    case "google":
                    case 26:
                        message.deviceClass[i] = 26;
                        break;
                    case "polestar":
                    case 27:
                        message.deviceClass[i] = 27;
                        break;
                    case "blyott":
                    case 28:
                        message.deviceClass[i] = 28;
                        break;
                    case "diract":
                    case 29:
                        message.deviceClass[i] = 29;
                        break;
                    case "gwahygiene":
                    case 30:
                        message.deviceClass[i] = 30;
                        break;
                    case "noneBleData":
                    case 31:
                        message.deviceClass[i] = 31;
                        break;
                    }
            }
            if (object.model != null)
                message.model = String(object.model);
            if (object.firmware != null) {
                if (typeof object.firmware !== "object")
                    throw TypeError(".aruba_telemetry.Reported.firmware: object expected");
                message.firmware = $root.aruba_telemetry.Firmware.fromObject(object.firmware);
            }
            if (object.assetId != null)
                message.assetId = String(object.assetId);
            if (object.publicKey != null)
                if (typeof object.publicKey === "string")
                    $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                else if (object.publicKey.length)
                    message.publicKey = object.publicKey;
            if (object.lastSeen != null)
                if ($util.Long)
                    (message.lastSeen = $util.Long.fromValue(object.lastSeen)).unsigned = true;
                else if (typeof object.lastSeen === "string")
                    message.lastSeen = parseInt(object.lastSeen, 10);
                else if (typeof object.lastSeen === "number")
                    message.lastSeen = object.lastSeen;
                else if (typeof object.lastSeen === "object")
                    message.lastSeen = new $util.LongBits(object.lastSeen.low >>> 0, object.lastSeen.high >>> 0).toNumber(true);
            if (object.bevent != null) {
                if (typeof object.bevent !== "object")
                    throw TypeError(".aruba_telemetry.Reported.bevent: object expected");
                message.bevent = $root.aruba_telemetry.BeaconEvent.fromObject(object.bevent);
            }
            if (object.rssi != null) {
                if (typeof object.rssi !== "object")
                    throw TypeError(".aruba_telemetry.Reported.rssi: object expected");
                message.rssi = $root.aruba_telemetry.Rssi.fromObject(object.rssi);
            }
            if (object.cell != null) {
                if (typeof object.cell !== "object")
                    throw TypeError(".aruba_telemetry.Reported.cell: object expected");
                message.cell = $root.aruba_telemetry.Cell.fromObject(object.cell);
            }
            if (object.beacons) {
                if (!Array.isArray(object.beacons))
                    throw TypeError(".aruba_telemetry.Reported.beacons: array expected");
                message.beacons = [];
                for (var i = 0; i < object.beacons.length; ++i) {
                    if (typeof object.beacons[i] !== "object")
                        throw TypeError(".aruba_telemetry.Reported.beacons: object expected");
                    message.beacons[i] = $root.aruba_telemetry.Beacons.fromObject(object.beacons[i]);
                }
            }
            if (object.txpower != null)
                message.txpower = object.txpower | 0;
            if (object.sensors != null) {
                if (typeof object.sensors !== "object")
                    throw TypeError(".aruba_telemetry.Reported.sensors: object expected");
                message.sensors = $root.aruba_telemetry.Sensors.fromObject(object.sensors);
            }
            if (object.stats != null) {
                if (typeof object.stats !== "object")
                    throw TypeError(".aruba_telemetry.Reported.stats: object expected");
                message.stats = $root.aruba_telemetry.Stats.fromObject(object.stats);
            }
            if (object.inputs != null) {
                if (typeof object.inputs !== "object")
                    throw TypeError(".aruba_telemetry.Reported.inputs: object expected");
                message.inputs = $root.aruba_telemetry.Inputs.fromObject(object.inputs);
            }
            if (object.vendorData != null) {
                if (typeof object.vendorData !== "object")
                    throw TypeError(".aruba_telemetry.Reported.vendorData: object expected");
                message.vendorData = $root.aruba_telemetry.VendorData.fromObject(object.vendorData);
            }
            if (object.vendorName != null)
                message.vendorName = String(object.vendorName);
            if (object.sensorTimestamp != null)
                if ($util.Long)
                    (message.sensorTimestamp = $util.Long.fromValue(object.sensorTimestamp)).unsigned = true;
                else if (typeof object.sensorTimestamp === "string")
                    message.sensorTimestamp = parseInt(object.sensorTimestamp, 10);
                else if (typeof object.sensorTimestamp === "number")
                    message.sensorTimestamp = object.sensorTimestamp;
                else if (typeof object.sensorTimestamp === "object")
                    message.sensorTimestamp = new $util.LongBits(object.sensorTimestamp.low >>> 0, object.sensorTimestamp.high >>> 0).toNumber(true);
            if (object.flags != null)
                message.flags = object.flags >>> 0;
            if (object.localName != null)
                message.localName = String(object.localName);
            if (object.identity != null)
                message.identity = String(object.identity);
            if (object.companyIdentifier) {
                if (!Array.isArray(object.companyIdentifier))
                    throw TypeError(".aruba_telemetry.Reported.companyIdentifier: array expected");
                message.companyIdentifier = [];
                for (var i = 0; i < object.companyIdentifier.length; ++i) {
                    if (typeof object.companyIdentifier[i] !== "object")
                        throw TypeError(".aruba_telemetry.Reported.companyIdentifier: object expected");
                    message.companyIdentifier[i] = $root.aruba_telemetry.BTCompanyID.fromObject(object.companyIdentifier[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Reported message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Reported
         * @static
         * @param {aruba_telemetry.Reported} message Reported
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reported.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.deviceClass = [];
                object.beacons = [];
                object.companyIdentifier = [];
            }
            if (options.defaults) {
                if (options.bytes === String)
                    object.mac = "";
                else {
                    object.mac = [];
                    if (options.bytes !== Array)
                        object.mac = $util.newBuffer(object.mac);
                }
                object.model = "";
                object.firmware = null;
                object.assetId = "";
                if (options.bytes === String)
                    object.publicKey = "";
                else {
                    object.publicKey = [];
                    if (options.bytes !== Array)
                        object.publicKey = $util.newBuffer(object.publicKey);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lastSeen = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastSeen = options.longs === String ? "0" : 0;
                object.bevent = null;
                object.rssi = null;
                object.cell = null;
                object.txpower = 0;
                object.sensors = null;
                object.stats = null;
                object.inputs = null;
                object.vendorData = null;
                object.vendorName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.sensorTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sensorTimestamp = options.longs === String ? "0" : 0;
                object.flags = 0;
                object.localName = "";
                object.identity = "";
            }
            if (message.mac != null && message.hasOwnProperty("mac"))
                object.mac = message.mac;
            if (message.deviceClass && message.deviceClass.length) {
                object.deviceClass = [];
                for (var j = 0; j < message.deviceClass.length; ++j)
                    object.deviceClass[j] = options.enums === String ? $root.aruba_telemetry.deviceClassEnum[message.deviceClass[j]] : message.deviceClass[j];
            }
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = message.model;
            if (message.firmware != null && message.hasOwnProperty("firmware"))
                object.firmware = $root.aruba_telemetry.Firmware.toObject(message.firmware, options);
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = message.assetId;
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                object.publicKey = message.publicKey;
            if (message.lastSeen != null && message.hasOwnProperty("lastSeen"))
                if (typeof message.lastSeen === "number")
                    object.lastSeen = options.longs === String ? String(message.lastSeen) : message.lastSeen;
                else
                    object.lastSeen = options.longs === String ? $util.Long.prototype.toString.call(message.lastSeen) : options.longs === Number ? new $util.LongBits(message.lastSeen.low >>> 0, message.lastSeen.high >>> 0).toNumber(true) : message.lastSeen;
            if (message.bevent != null && message.hasOwnProperty("bevent"))
                object.bevent = $root.aruba_telemetry.BeaconEvent.toObject(message.bevent, options);
            if (message.rssi != null && message.hasOwnProperty("rssi"))
                object.rssi = $root.aruba_telemetry.Rssi.toObject(message.rssi, options);
            if (message.cell != null && message.hasOwnProperty("cell"))
                object.cell = $root.aruba_telemetry.Cell.toObject(message.cell, options);
            if (message.beacons && message.beacons.length) {
                object.beacons = [];
                for (var j = 0; j < message.beacons.length; ++j)
                    object.beacons[j] = $root.aruba_telemetry.Beacons.toObject(message.beacons[j], options);
            }
            if (message.txpower != null && message.hasOwnProperty("txpower"))
                object.txpower = message.txpower;
            if (message.sensors != null && message.hasOwnProperty("sensors"))
                object.sensors = $root.aruba_telemetry.Sensors.toObject(message.sensors, options);
            if (message.stats != null && message.hasOwnProperty("stats"))
                object.stats = $root.aruba_telemetry.Stats.toObject(message.stats, options);
            if (message.inputs != null && message.hasOwnProperty("inputs"))
                object.inputs = $root.aruba_telemetry.Inputs.toObject(message.inputs, options);
            if (message.vendorData != null && message.hasOwnProperty("vendorData"))
                object.vendorData = $root.aruba_telemetry.VendorData.toObject(message.vendorData, options);
            if (message.vendorName != null && message.hasOwnProperty("vendorName"))
                object.vendorName = message.vendorName;
            if (message.sensorTimestamp != null && message.hasOwnProperty("sensorTimestamp"))
                if (typeof message.sensorTimestamp === "number")
                    object.sensorTimestamp = options.longs === String ? String(message.sensorTimestamp) : message.sensorTimestamp;
                else
                    object.sensorTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.sensorTimestamp) : options.longs === Number ? new $util.LongBits(message.sensorTimestamp.low >>> 0, message.sensorTimestamp.high >>> 0).toNumber(true) : message.sensorTimestamp;
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
            if (message.localName != null && message.hasOwnProperty("localName"))
                object.localName = message.localName;
            if (message.identity != null && message.hasOwnProperty("identity"))
                object.identity = message.identity;
            if (message.companyIdentifier && message.companyIdentifier.length) {
                object.companyIdentifier = [];
                for (var j = 0; j < message.companyIdentifier.length; ++j)
                    object.companyIdentifier[j] = $root.aruba_telemetry.BTCompanyID.toObject(message.companyIdentifier[j], options);
            }
            return object;
        };

        /**
         * Converts this Reported to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Reported
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Reported.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Reported;
    })();

    aruba_telemetry.WiFiData = (function() {

        /**
         * Properties of a WiFiData.
         * @memberof aruba_telemetry
         * @interface IWiFiData
         * @property {Uint8Array|null} [mac] WiFiData mac
         * @property {Array.<aruba_telemetry.deviceClassEnum>|null} [deviceClass] WiFiData deviceClass
         * @property {number|null} [rssi] WiFiData rssi
         * @property {Uint8Array|null} [rtls_payload] WiFiData rtls_payload
         */

        /**
         * Constructs a new WiFiData.
         * @memberof aruba_telemetry
         * @classdesc Represents a WiFiData.
         * @implements IWiFiData
         * @constructor
         * @param {aruba_telemetry.IWiFiData=} [properties] Properties to set
         */
        function WiFiData(properties) {
            this.deviceClass = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WiFiData mac.
         * @member {Uint8Array} mac
         * @memberof aruba_telemetry.WiFiData
         * @instance
         */
        WiFiData.prototype.mac = $util.newBuffer([]);

        /**
         * WiFiData deviceClass.
         * @member {Array.<aruba_telemetry.deviceClassEnum>} deviceClass
         * @memberof aruba_telemetry.WiFiData
         * @instance
         */
        WiFiData.prototype.deviceClass = $util.emptyArray;

        /**
         * WiFiData rssi.
         * @member {number} rssi
         * @memberof aruba_telemetry.WiFiData
         * @instance
         */
        WiFiData.prototype.rssi = 0;

        /**
         * WiFiData rtls_payload.
         * @member {Uint8Array} rtls_payload
         * @memberof aruba_telemetry.WiFiData
         * @instance
         */
        WiFiData.prototype.rtls_payload = $util.newBuffer([]);

        /**
         * Creates a new WiFiData instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.WiFiData
         * @static
         * @param {aruba_telemetry.IWiFiData=} [properties] Properties to set
         * @returns {aruba_telemetry.WiFiData} WiFiData instance
         */
        WiFiData.create = function create(properties) {
            return new WiFiData(properties);
        };

        /**
         * Encodes the specified WiFiData message. Does not implicitly {@link aruba_telemetry.WiFiData.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.WiFiData
         * @static
         * @param {aruba_telemetry.IWiFiData} message WiFiData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WiFiData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mac != null && message.hasOwnProperty("mac"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.mac);
            if (message.deviceClass != null && message.deviceClass.length)
                for (var i = 0; i < message.deviceClass.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.deviceClass[i]);
            if (message.rssi != null && message.hasOwnProperty("rssi"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.rssi);
            if (message.rtls_payload != null && message.hasOwnProperty("rtls_payload"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.rtls_payload);
            return writer;
        };

        /**
         * Encodes the specified WiFiData message, length delimited. Does not implicitly {@link aruba_telemetry.WiFiData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.WiFiData
         * @static
         * @param {aruba_telemetry.IWiFiData} message WiFiData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WiFiData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WiFiData message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.WiFiData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.WiFiData} WiFiData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WiFiData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.WiFiData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mac = reader.bytes().toString('hex');
                    break;
                case 2:
                    if (!(message.deviceClass && message.deviceClass.length))
                        message.deviceClass = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.deviceClass.push(reader.int32());
                    } else
                        message.deviceClass.push(reader.int32());
                    break;
                case 3:
                    message.rssi = reader.sint32();
                    break;
                case 4:
                    message.rtls_payload = reader.bytes().toString('hex');
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WiFiData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.WiFiData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.WiFiData} WiFiData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WiFiData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WiFiData message.
         * @function verify
         * @memberof aruba_telemetry.WiFiData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WiFiData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mac != null && message.hasOwnProperty("mac"))
                if (!(message.mac && typeof message.mac.length === "number" || $util.isString(message.mac)))
                    return "mac: buffer expected";
            if (message.deviceClass != null && message.hasOwnProperty("deviceClass")) {
                if (!Array.isArray(message.deviceClass))
                    return "deviceClass: array expected";
                for (var i = 0; i < message.deviceClass.length; ++i)
                    switch (message.deviceClass[i]) {
                    default:
                        return "deviceClass: enum value[] expected";
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
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                    case 24:
                    case 25:
                    case 26:
                    case 27:
                    case 28:
                    case 29:
                    case 30:
                    case 31:
                        break;
                    }
            }
            if (message.rssi != null && message.hasOwnProperty("rssi"))
                if (!$util.isInteger(message.rssi))
                    return "rssi: integer expected";
            if (message.rtls_payload != null && message.hasOwnProperty("rtls_payload"))
                if (!(message.rtls_payload && typeof message.rtls_payload.length === "number" || $util.isString(message.rtls_payload)))
                    return "rtls_payload: buffer expected";
            return null;
        };

        /**
         * Creates a WiFiData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.WiFiData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.WiFiData} WiFiData
         */
        WiFiData.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.WiFiData)
                return object;
            var message = new $root.aruba_telemetry.WiFiData();
            if (object.mac != null)
                if (typeof object.mac === "string")
                    $util.base64.decode(object.mac, message.mac = $util.newBuffer($util.base64.length(object.mac)), 0);
                else if (object.mac.length)
                    message.mac = object.mac;
            if (object.deviceClass) {
                if (!Array.isArray(object.deviceClass))
                    throw TypeError(".aruba_telemetry.WiFiData.deviceClass: array expected");
                message.deviceClass = [];
                for (var i = 0; i < object.deviceClass.length; ++i)
                    switch (object.deviceClass[i]) {
                    default:
                    case "unclassified":
                    case 0:
                        message.deviceClass[i] = 0;
                        break;
                    case "arubaBeacon":
                    case 1:
                        message.deviceClass[i] = 1;
                        break;
                    case "arubaTag":
                    case 2:
                        message.deviceClass[i] = 2;
                        break;
                    case "zfTag":
                    case 3:
                        message.deviceClass[i] = 3;
                        break;
                    case "stanleyTag":
                    case 4:
                        message.deviceClass[i] = 4;
                        break;
                    case "virginBeacon":
                    case 5:
                        message.deviceClass[i] = 5;
                        break;
                    case "enoceanSensor":
                    case 6:
                        message.deviceClass[i] = 6;
                        break;
                    case "enoceanSwitch":
                    case 7:
                        message.deviceClass[i] = 7;
                        break;
                    case "iBeacon":
                    case 8:
                        message.deviceClass[i] = 8;
                        break;
                    case "allBleData":
                    case 9:
                        message.deviceClass[i] = 9;
                        break;
                    case "RawBleData":
                    case 10:
                        message.deviceClass[i] = 10;
                        break;
                    case "eddystone":
                    case 11:
                        message.deviceClass[i] = 11;
                        break;
                    case "assaAbloy":
                    case 12:
                        message.deviceClass[i] = 12;
                        break;
                    case "arubaSensor":
                    case 13:
                        message.deviceClass[i] = 13;
                        break;
                    case "abbSensor":
                    case 14:
                        message.deviceClass[i] = 14;
                        break;
                    case "wifiTag":
                    case 15:
                        message.deviceClass[i] = 15;
                        break;
                    case "wifiAssocSta":
                    case 16:
                        message.deviceClass[i] = 16;
                        break;
                    case "wifiUnassocSta":
                    case 17:
                        message.deviceClass[i] = 17;
                        break;
                    case "mysphera":
                    case 18:
                        message.deviceClass[i] = 18;
                        break;
                    case "sBeacon":
                    case 19:
                        message.deviceClass[i] = 19;
                        break;
                    case "wiliot":
                    case 20:
                        message.deviceClass[i] = 20;
                        break;
                    case "ZSD":
                    case 21:
                        message.deviceClass[i] = 21;
                        break;
                    case "serialdata":
                    case 22:
                        message.deviceClass[i] = 22;
                        break;
                    case "exposureNotification":
                    case 23:
                        message.deviceClass[i] = 23;
                        break;
                    case "onity":
                    case 24:
                        message.deviceClass[i] = 24;
                        break;
                    case "minew":
                    case 25:
                        message.deviceClass[i] = 25;
                        break;
                    case "google":
                    case 26:
                        message.deviceClass[i] = 26;
                        break;
                    case "polestar":
                    case 27:
                        message.deviceClass[i] = 27;
                        break;
                    case "blyott":
                    case 28:
                        message.deviceClass[i] = 28;
                        break;
                    case "diract":
                    case 29:
                        message.deviceClass[i] = 29;
                        break;
                    case "gwahygiene":
                    case 30:
                        message.deviceClass[i] = 30;
                        break;
                    case "noneBleData":
                    case 31:
                        message.deviceClass[i] = 31;
                        break;
                    }
            }
            if (object.rssi != null)
                message.rssi = object.rssi | 0;
            if (object.rtls_payload != null)
                if (typeof object.rtls_payload === "string")
                    $util.base64.decode(object.rtls_payload, message.rtls_payload = $util.newBuffer($util.base64.length(object.rtls_payload)), 0);
                else if (object.rtls_payload.length)
                    message.rtls_payload = object.rtls_payload;
            return message;
        };

        /**
         * Creates a plain object from a WiFiData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.WiFiData
         * @static
         * @param {aruba_telemetry.WiFiData} message WiFiData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WiFiData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.deviceClass = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.mac = "";
                else {
                    object.mac = [];
                    if (options.bytes !== Array)
                        object.mac = $util.newBuffer(object.mac);
                }
                object.rssi = 0;
                if (options.bytes === String)
                    object.rtls_payload = "";
                else {
                    object.rtls_payload = [];
                    if (options.bytes !== Array)
                        object.rtls_payload = $util.newBuffer(object.rtls_payload);
                }
            }
            if (message.mac != null && message.hasOwnProperty("mac"))
                object.mac = message.mac;
            if (message.deviceClass && message.deviceClass.length) {
                object.deviceClass = [];
                for (var j = 0; j < message.deviceClass.length; ++j)
                    object.deviceClass[j] = options.enums === String ? $root.aruba_telemetry.deviceClassEnum[message.deviceClass[j]] : message.deviceClass[j];
            }
            if (message.rssi != null && message.hasOwnProperty("rssi"))
                object.rssi = message.rssi;
            if (message.rtls_payload != null && message.hasOwnProperty("rtls_payload"))
                object.rtls_payload = message.rtls_payload;
            return object;
        };

        /**
         * Converts this WiFiData to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.WiFiData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WiFiData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WiFiData;
    })();

    aruba_telemetry.ZbNbReport = (function() {

        /**
         * Properties of a ZbNbReport.
         * @memberof aruba_telemetry
         * @interface IZbNbReport
         * @property {Uint8Array|null} [mac] ZbNbReport mac
         * @property {aruba_telemetry.IZbE2PC|null} [e2pc] ZbNbReport e2pc
         * @property {Uint8Array|null} [payload] ZbNbReport payload
         */

        /**
         * Constructs a new ZbNbReport.
         * @memberof aruba_telemetry
         * @classdesc Represents a ZbNbReport.
         * @implements IZbNbReport
         * @constructor
         * @param {aruba_telemetry.IZbNbReport=} [properties] Properties to set
         */
        function ZbNbReport(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZbNbReport mac.
         * @member {Uint8Array} mac
         * @memberof aruba_telemetry.ZbNbReport
         * @instance
         */
        ZbNbReport.prototype.mac = $util.newBuffer([]);

        /**
         * ZbNbReport e2pc.
         * @member {aruba_telemetry.IZbE2PC|null|undefined} e2pc
         * @memberof aruba_telemetry.ZbNbReport
         * @instance
         */
        ZbNbReport.prototype.e2pc = null;

        /**
         * ZbNbReport payload.
         * @member {Uint8Array} payload
         * @memberof aruba_telemetry.ZbNbReport
         * @instance
         */
        ZbNbReport.prototype.payload = $util.newBuffer([]);

        /**
         * Creates a new ZbNbReport instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.ZbNbReport
         * @static
         * @param {aruba_telemetry.IZbNbReport=} [properties] Properties to set
         * @returns {aruba_telemetry.ZbNbReport} ZbNbReport instance
         */
        ZbNbReport.create = function create(properties) {
            return new ZbNbReport(properties);
        };

        /**
         * Encodes the specified ZbNbReport message. Does not implicitly {@link aruba_telemetry.ZbNbReport.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.ZbNbReport
         * @static
         * @param {aruba_telemetry.IZbNbReport} message ZbNbReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbNbReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mac != null && message.hasOwnProperty("mac"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.mac);
            if (message.e2pc != null && message.hasOwnProperty("e2pc"))
                $root.aruba_telemetry.ZbE2PC.encode(message.e2pc, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.payload != null && message.hasOwnProperty("payload"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.payload);
            return writer;
        };

        /**
         * Encodes the specified ZbNbReport message, length delimited. Does not implicitly {@link aruba_telemetry.ZbNbReport.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.ZbNbReport
         * @static
         * @param {aruba_telemetry.IZbNbReport} message ZbNbReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbNbReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZbNbReport message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.ZbNbReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.ZbNbReport} ZbNbReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbNbReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.ZbNbReport();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mac = reader.bytes().toString('hex');
                    break;
                case 2:
                    message.e2pc = $root.aruba_telemetry.ZbE2PC.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.payload = reader.bytes().toString('hex');
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZbNbReport message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.ZbNbReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.ZbNbReport} ZbNbReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbNbReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZbNbReport message.
         * @function verify
         * @memberof aruba_telemetry.ZbNbReport
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZbNbReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mac != null && message.hasOwnProperty("mac"))
                if (!(message.mac && typeof message.mac.length === "number" || $util.isString(message.mac)))
                    return "mac: buffer expected";
            if (message.e2pc != null && message.hasOwnProperty("e2pc")) {
                var error = $root.aruba_telemetry.ZbE2PC.verify(message.e2pc);
                if (error)
                    return "e2pc." + error;
            }
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };

        /**
         * Creates a ZbNbReport message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.ZbNbReport
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.ZbNbReport} ZbNbReport
         */
        ZbNbReport.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.ZbNbReport)
                return object;
            var message = new $root.aruba_telemetry.ZbNbReport();
            if (object.mac != null)
                if (typeof object.mac === "string")
                    $util.base64.decode(object.mac, message.mac = $util.newBuffer($util.base64.length(object.mac)), 0);
                else if (object.mac.length)
                    message.mac = object.mac;
            if (object.e2pc != null) {
                if (typeof object.e2pc !== "object")
                    throw TypeError(".aruba_telemetry.ZbNbReport.e2pc: object expected");
                message.e2pc = $root.aruba_telemetry.ZbE2PC.fromObject(object.e2pc);
            }
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };

        /**
         * Creates a plain object from a ZbNbReport message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.ZbNbReport
         * @static
         * @param {aruba_telemetry.ZbNbReport} message ZbNbReport
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZbNbReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.mac = "";
                else {
                    object.mac = [];
                    if (options.bytes !== Array)
                        object.mac = $util.newBuffer(object.mac);
                }
                object.e2pc = null;
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.mac != null && message.hasOwnProperty("mac"))
                object.mac = message.mac;
            if (message.e2pc != null && message.hasOwnProperty("e2pc"))
                object.e2pc = $root.aruba_telemetry.ZbE2PC.toObject(message.e2pc, options);
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = message.payload;
            return object;
        };

        /**
         * Converts this ZbNbReport to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.ZbNbReport
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZbNbReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZbNbReport;
    })();

    aruba_telemetry.ZbNbAck = (function() {

        /**
         * Properties of a ZbNbAck.
         * @memberof aruba_telemetry
         * @interface IZbNbAck
         * @property {string|null} [reqid] ZbNbAck reqid
         * @property {aruba_telemetry.ZbResult|null} [result] ZbNbAck result
         * @property {aruba_telemetry.ZbAckCode|null} [code] ZbNbAck code
         */

        /**
         * Constructs a new ZbNbAck.
         * @memberof aruba_telemetry
         * @classdesc Represents a ZbNbAck.
         * @implements IZbNbAck
         * @constructor
         * @param {aruba_telemetry.IZbNbAck=} [properties] Properties to set
         */
        function ZbNbAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZbNbAck reqid.
         * @member {string} reqid
         * @memberof aruba_telemetry.ZbNbAck
         * @instance
         */
        ZbNbAck.prototype.reqid = "";

        /**
         * ZbNbAck result.
         * @member {aruba_telemetry.ZbResult} result
         * @memberof aruba_telemetry.ZbNbAck
         * @instance
         */
        ZbNbAck.prototype.result = 0;

        /**
         * ZbNbAck code.
         * @member {aruba_telemetry.ZbAckCode} code
         * @memberof aruba_telemetry.ZbNbAck
         * @instance
         */
        ZbNbAck.prototype.code = 0;

        /**
         * Creates a new ZbNbAck instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.ZbNbAck
         * @static
         * @param {aruba_telemetry.IZbNbAck=} [properties] Properties to set
         * @returns {aruba_telemetry.ZbNbAck} ZbNbAck instance
         */
        ZbNbAck.create = function create(properties) {
            return new ZbNbAck(properties);
        };

        /**
         * Encodes the specified ZbNbAck message. Does not implicitly {@link aruba_telemetry.ZbNbAck.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.ZbNbAck
         * @static
         * @param {aruba_telemetry.IZbNbAck} message ZbNbAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbNbAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reqid);
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified ZbNbAck message, length delimited. Does not implicitly {@link aruba_telemetry.ZbNbAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.ZbNbAck
         * @static
         * @param {aruba_telemetry.IZbNbAck} message ZbNbAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbNbAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZbNbAck message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.ZbNbAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.ZbNbAck} ZbNbAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbNbAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.ZbNbAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqid = reader.string();
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZbNbAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.ZbNbAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.ZbNbAck} ZbNbAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbNbAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZbNbAck message.
         * @function verify
         * @memberof aruba_telemetry.ZbNbAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZbNbAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                if (!$util.isString(message.reqid))
                    return "reqid: string expected";
            if (message.result != null && message.hasOwnProperty("result"))
                switch (message.result) {
                default:
                    return "result: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                    break;
                }
            return null;
        };

        /**
         * Creates a ZbNbAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.ZbNbAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.ZbNbAck} ZbNbAck
         */
        ZbNbAck.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.ZbNbAck)
                return object;
            var message = new $root.aruba_telemetry.ZbNbAck();
            if (object.reqid != null)
                message.reqid = String(object.reqid);
            switch (object.result) {
            case "SUCCEEDED":
            case 0:
                message.result = 0;
                break;
            case "FAILED":
            case 1:
                message.result = 1;
                break;
            }
            switch (object.code) {
            case "OK":
            case 0:
                message.code = 0;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ZbNbAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.ZbNbAck
         * @static
         * @param {aruba_telemetry.ZbNbAck} message ZbNbAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZbNbAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reqid = "";
                object.result = options.enums === String ? "SUCCEEDED" : 0;
                object.code = options.enums === String ? "OK" : 0;
            }
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                object.reqid = message.reqid;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.aruba_telemetry.ZbResult[message.result] : message.result;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.aruba_telemetry.ZbAckCode[message.code] : message.code;
            return object;
        };

        /**
         * Converts this ZbNbAck to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.ZbNbAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZbNbAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZbNbAck;
    })();

    aruba_telemetry.ZbNbRsp = (function() {

        /**
         * Properties of a ZbNbRsp.
         * @memberof aruba_telemetry
         * @interface IZbNbRsp
         * @property {string|null} [reqid] ZbNbRsp reqid
         */

        /**
         * Constructs a new ZbNbRsp.
         * @memberof aruba_telemetry
         * @classdesc Represents a ZbNbRsp.
         * @implements IZbNbRsp
         * @constructor
         * @param {aruba_telemetry.IZbNbRsp=} [properties] Properties to set
         */
        function ZbNbRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZbNbRsp reqid.
         * @member {string} reqid
         * @memberof aruba_telemetry.ZbNbRsp
         * @instance
         */
        ZbNbRsp.prototype.reqid = "";

        /**
         * Creates a new ZbNbRsp instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.ZbNbRsp
         * @static
         * @param {aruba_telemetry.IZbNbRsp=} [properties] Properties to set
         * @returns {aruba_telemetry.ZbNbRsp} ZbNbRsp instance
         */
        ZbNbRsp.create = function create(properties) {
            return new ZbNbRsp(properties);
        };

        /**
         * Encodes the specified ZbNbRsp message. Does not implicitly {@link aruba_telemetry.ZbNbRsp.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.ZbNbRsp
         * @static
         * @param {aruba_telemetry.IZbNbRsp} message ZbNbRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbNbRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reqid);
            return writer;
        };

        /**
         * Encodes the specified ZbNbRsp message, length delimited. Does not implicitly {@link aruba_telemetry.ZbNbRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.ZbNbRsp
         * @static
         * @param {aruba_telemetry.IZbNbRsp} message ZbNbRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbNbRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZbNbRsp message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.ZbNbRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.ZbNbRsp} ZbNbRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbNbRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.ZbNbRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZbNbRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.ZbNbRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.ZbNbRsp} ZbNbRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbNbRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZbNbRsp message.
         * @function verify
         * @memberof aruba_telemetry.ZbNbRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZbNbRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                if (!$util.isString(message.reqid))
                    return "reqid: string expected";
            return null;
        };

        /**
         * Creates a ZbNbRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.ZbNbRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.ZbNbRsp} ZbNbRsp
         */
        ZbNbRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.ZbNbRsp)
                return object;
            var message = new $root.aruba_telemetry.ZbNbRsp();
            if (object.reqid != null)
                message.reqid = String(object.reqid);
            return message;
        };

        /**
         * Creates a plain object from a ZbNbRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.ZbNbRsp
         * @static
         * @param {aruba_telemetry.ZbNbRsp} message ZbNbRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZbNbRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reqid = "";
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                object.reqid = message.reqid;
            return object;
        };

        /**
         * Converts this ZbNbRsp to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.ZbNbRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZbNbRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZbNbRsp;
    })();

    aruba_telemetry.NbZbMsg = (function() {

        /**
         * Properties of a NbZbMsg.
         * @memberof aruba_telemetry
         * @interface INbZbMsg
         * @property {Uint8Array|null} [radio_mac] NbZbMsg radio_mac
         * @property {aruba_telemetry.IZbNbReport|null} [report] NbZbMsg report
         * @property {aruba_telemetry.IZbNbAck|null} [ack] NbZbMsg ack
         * @property {aruba_telemetry.IZbNbRsp|null} [response] NbZbMsg response
         */

        /**
         * Constructs a new NbZbMsg.
         * @memberof aruba_telemetry
         * @classdesc Represents a NbZbMsg.
         * @implements INbZbMsg
         * @constructor
         * @param {aruba_telemetry.INbZbMsg=} [properties] Properties to set
         */
        function NbZbMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NbZbMsg radio_mac.
         * @member {Uint8Array} radio_mac
         * @memberof aruba_telemetry.NbZbMsg
         * @instance
         */
        NbZbMsg.prototype.radio_mac = $util.newBuffer([]);

        /**
         * NbZbMsg report.
         * @member {aruba_telemetry.IZbNbReport|null|undefined} report
         * @memberof aruba_telemetry.NbZbMsg
         * @instance
         */
        NbZbMsg.prototype.report = null;

        /**
         * NbZbMsg ack.
         * @member {aruba_telemetry.IZbNbAck|null|undefined} ack
         * @memberof aruba_telemetry.NbZbMsg
         * @instance
         */
        NbZbMsg.prototype.ack = null;

        /**
         * NbZbMsg response.
         * @member {aruba_telemetry.IZbNbRsp|null|undefined} response
         * @memberof aruba_telemetry.NbZbMsg
         * @instance
         */
        NbZbMsg.prototype.response = null;

        /**
         * Creates a new NbZbMsg instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.NbZbMsg
         * @static
         * @param {aruba_telemetry.INbZbMsg=} [properties] Properties to set
         * @returns {aruba_telemetry.NbZbMsg} NbZbMsg instance
         */
        NbZbMsg.create = function create(properties) {
            return new NbZbMsg(properties);
        };

        /**
         * Encodes the specified NbZbMsg message. Does not implicitly {@link aruba_telemetry.NbZbMsg.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.NbZbMsg
         * @static
         * @param {aruba_telemetry.INbZbMsg} message NbZbMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NbZbMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.radio_mac != null && message.hasOwnProperty("radio_mac"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.radio_mac);
            if (message.report != null && message.hasOwnProperty("report"))
                $root.aruba_telemetry.ZbNbReport.encode(message.report, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.ack != null && message.hasOwnProperty("ack"))
                $root.aruba_telemetry.ZbNbAck.encode(message.ack, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.response != null && message.hasOwnProperty("response"))
                $root.aruba_telemetry.ZbNbRsp.encode(message.response, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NbZbMsg message, length delimited. Does not implicitly {@link aruba_telemetry.NbZbMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.NbZbMsg
         * @static
         * @param {aruba_telemetry.INbZbMsg} message NbZbMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NbZbMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NbZbMsg message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.NbZbMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.NbZbMsg} NbZbMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NbZbMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.NbZbMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.radio_mac = reader.bytes().toString('hex');
                    break;
                case 2:
                    message.report = $root.aruba_telemetry.ZbNbReport.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ack = $root.aruba_telemetry.ZbNbAck.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.response = $root.aruba_telemetry.ZbNbRsp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NbZbMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.NbZbMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.NbZbMsg} NbZbMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NbZbMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NbZbMsg message.
         * @function verify
         * @memberof aruba_telemetry.NbZbMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NbZbMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.radio_mac != null && message.hasOwnProperty("radio_mac"))
                if (!(message.radio_mac && typeof message.radio_mac.length === "number" || $util.isString(message.radio_mac)))
                    return "radio_mac: buffer expected";
            if (message.report != null && message.hasOwnProperty("report")) {
                var error = $root.aruba_telemetry.ZbNbReport.verify(message.report);
                if (error)
                    return "report." + error;
            }
            if (message.ack != null && message.hasOwnProperty("ack")) {
                var error = $root.aruba_telemetry.ZbNbAck.verify(message.ack);
                if (error)
                    return "ack." + error;
            }
            if (message.response != null && message.hasOwnProperty("response")) {
                var error = $root.aruba_telemetry.ZbNbRsp.verify(message.response);
                if (error)
                    return "response." + error;
            }
            return null;
        };

        /**
         * Creates a NbZbMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.NbZbMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.NbZbMsg} NbZbMsg
         */
        NbZbMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.NbZbMsg)
                return object;
            var message = new $root.aruba_telemetry.NbZbMsg();
            if (object.radio_mac != null)
                if (typeof object.radio_mac === "string")
                    $util.base64.decode(object.radio_mac, message.radio_mac = $util.newBuffer($util.base64.length(object.radio_mac)), 0);
                else if (object.radio_mac.length)
                    message.radio_mac = object.radio_mac;
            if (object.report != null) {
                if (typeof object.report !== "object")
                    throw TypeError(".aruba_telemetry.NbZbMsg.report: object expected");
                message.report = $root.aruba_telemetry.ZbNbReport.fromObject(object.report);
            }
            if (object.ack != null) {
                if (typeof object.ack !== "object")
                    throw TypeError(".aruba_telemetry.NbZbMsg.ack: object expected");
                message.ack = $root.aruba_telemetry.ZbNbAck.fromObject(object.ack);
            }
            if (object.response != null) {
                if (typeof object.response !== "object")
                    throw TypeError(".aruba_telemetry.NbZbMsg.response: object expected");
                message.response = $root.aruba_telemetry.ZbNbRsp.fromObject(object.response);
            }
            return message;
        };

        /**
         * Creates a plain object from a NbZbMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.NbZbMsg
         * @static
         * @param {aruba_telemetry.NbZbMsg} message NbZbMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NbZbMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.radio_mac = "";
                else {
                    object.radio_mac = [];
                    if (options.bytes !== Array)
                        object.radio_mac = $util.newBuffer(object.radio_mac);
                }
                object.report = null;
                object.ack = null;
                object.response = null;
            }
            if (message.radio_mac != null && message.hasOwnProperty("radio_mac"))
                object.radio_mac = message.radio_mac;
            if (message.report != null && message.hasOwnProperty("report"))
                object.report = $root.aruba_telemetry.ZbNbReport.toObject(message.report, options);
            if (message.ack != null && message.hasOwnProperty("ack"))
                object.ack = $root.aruba_telemetry.ZbNbAck.toObject(message.ack, options);
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = $root.aruba_telemetry.ZbNbRsp.toObject(message.response, options);
            return object;
        };

        /**
         * Converts this NbZbMsg to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.NbZbMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NbZbMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NbZbMsg;
    })();

    aruba_telemetry.ZbEPC = (function() {

        /**
         * Properties of a ZbEPC.
         * @memberof aruba_telemetry
         * @interface IZbEPC
         * @property {number|null} [endpoint] ZbEPC endpoint
         * @property {number|null} [profile_id] ZbEPC profile_id
         * @property {number|null} [cluster_id] ZbEPC cluster_id
         */

        /**
         * Constructs a new ZbEPC.
         * @memberof aruba_telemetry
         * @classdesc Represents a ZbEPC.
         * @implements IZbEPC
         * @constructor
         * @param {aruba_telemetry.IZbEPC=} [properties] Properties to set
         */
        function ZbEPC(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZbEPC endpoint.
         * @member {number} endpoint
         * @memberof aruba_telemetry.ZbEPC
         * @instance
         */
        ZbEPC.prototype.endpoint = 0;

        /**
         * ZbEPC profile_id.
         * @member {number} profile_id
         * @memberof aruba_telemetry.ZbEPC
         * @instance
         */
        ZbEPC.prototype.profile_id = 0;

        /**
         * ZbEPC cluster_id.
         * @member {number} cluster_id
         * @memberof aruba_telemetry.ZbEPC
         * @instance
         */
        ZbEPC.prototype.cluster_id = 0;

        /**
         * Creates a new ZbEPC instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.ZbEPC
         * @static
         * @param {aruba_telemetry.IZbEPC=} [properties] Properties to set
         * @returns {aruba_telemetry.ZbEPC} ZbEPC instance
         */
        ZbEPC.create = function create(properties) {
            return new ZbEPC(properties);
        };

        /**
         * Encodes the specified ZbEPC message. Does not implicitly {@link aruba_telemetry.ZbEPC.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.ZbEPC
         * @static
         * @param {aruba_telemetry.IZbEPC} message ZbEPC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbEPC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.endpoint != null && message.hasOwnProperty("endpoint"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.endpoint);
            if (message.profile_id != null && message.hasOwnProperty("profile_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.profile_id);
            if (message.cluster_id != null && message.hasOwnProperty("cluster_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.cluster_id);
            return writer;
        };

        /**
         * Encodes the specified ZbEPC message, length delimited. Does not implicitly {@link aruba_telemetry.ZbEPC.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.ZbEPC
         * @static
         * @param {aruba_telemetry.IZbEPC} message ZbEPC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbEPC.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZbEPC message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.ZbEPC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.ZbEPC} ZbEPC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbEPC.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.ZbEPC();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.endpoint = reader.uint32();
                    break;
                case 2:
                    message.profile_id = reader.uint32();
                    break;
                case 3:
                    message.cluster_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZbEPC message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.ZbEPC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.ZbEPC} ZbEPC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbEPC.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZbEPC message.
         * @function verify
         * @memberof aruba_telemetry.ZbEPC
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZbEPC.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.endpoint != null && message.hasOwnProperty("endpoint"))
                if (!$util.isInteger(message.endpoint))
                    return "endpoint: integer expected";
            if (message.profile_id != null && message.hasOwnProperty("profile_id"))
                if (!$util.isInteger(message.profile_id))
                    return "profile_id: integer expected";
            if (message.cluster_id != null && message.hasOwnProperty("cluster_id"))
                if (!$util.isInteger(message.cluster_id))
                    return "cluster_id: integer expected";
            return null;
        };

        /**
         * Creates a ZbEPC message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.ZbEPC
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.ZbEPC} ZbEPC
         */
        ZbEPC.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.ZbEPC)
                return object;
            var message = new $root.aruba_telemetry.ZbEPC();
            if (object.endpoint != null)
                message.endpoint = object.endpoint >>> 0;
            if (object.profile_id != null)
                message.profile_id = object.profile_id >>> 0;
            if (object.cluster_id != null)
                message.cluster_id = object.cluster_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ZbEPC message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.ZbEPC
         * @static
         * @param {aruba_telemetry.ZbEPC} message ZbEPC
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZbEPC.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.endpoint = 0;
                object.profile_id = 0;
                object.cluster_id = 0;
            }
            if (message.endpoint != null && message.hasOwnProperty("endpoint"))
                object.endpoint = message.endpoint;
            if (message.profile_id != null && message.hasOwnProperty("profile_id"))
                object.profile_id = message.profile_id;
            if (message.cluster_id != null && message.hasOwnProperty("cluster_id"))
                object.cluster_id = message.cluster_id;
            return object;
        };

        /**
         * Converts this ZbEPC to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.ZbEPC
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZbEPC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZbEPC;
    })();

    aruba_telemetry.ZbE2PC = (function() {

        /**
         * Properties of a ZbE2PC.
         * @memberof aruba_telemetry
         * @interface IZbE2PC
         * @property {aruba_telemetry.IZbEPC|null} [destination] ZbE2PC destination
         * @property {number|null} [source_endpoint] ZbE2PC source_endpoint
         */

        /**
         * Constructs a new ZbE2PC.
         * @memberof aruba_telemetry
         * @classdesc Represents a ZbE2PC.
         * @implements IZbE2PC
         * @constructor
         * @param {aruba_telemetry.IZbE2PC=} [properties] Properties to set
         */
        function ZbE2PC(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZbE2PC destination.
         * @member {aruba_telemetry.IZbEPC|null|undefined} destination
         * @memberof aruba_telemetry.ZbE2PC
         * @instance
         */
        ZbE2PC.prototype.destination = null;

        /**
         * ZbE2PC source_endpoint.
         * @member {number} source_endpoint
         * @memberof aruba_telemetry.ZbE2PC
         * @instance
         */
        ZbE2PC.prototype.source_endpoint = 0;

        /**
         * Creates a new ZbE2PC instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.ZbE2PC
         * @static
         * @param {aruba_telemetry.IZbE2PC=} [properties] Properties to set
         * @returns {aruba_telemetry.ZbE2PC} ZbE2PC instance
         */
        ZbE2PC.create = function create(properties) {
            return new ZbE2PC(properties);
        };

        /**
         * Encodes the specified ZbE2PC message. Does not implicitly {@link aruba_telemetry.ZbE2PC.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.ZbE2PC
         * @static
         * @param {aruba_telemetry.IZbE2PC} message ZbE2PC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbE2PC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.destination != null && message.hasOwnProperty("destination"))
                $root.aruba_telemetry.ZbEPC.encode(message.destination, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.source_endpoint != null && message.hasOwnProperty("source_endpoint"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.source_endpoint);
            return writer;
        };

        /**
         * Encodes the specified ZbE2PC message, length delimited. Does not implicitly {@link aruba_telemetry.ZbE2PC.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.ZbE2PC
         * @static
         * @param {aruba_telemetry.IZbE2PC} message ZbE2PC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbE2PC.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZbE2PC message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.ZbE2PC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.ZbE2PC} ZbE2PC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbE2PC.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.ZbE2PC();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.destination = $root.aruba_telemetry.ZbEPC.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.source_endpoint = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZbE2PC message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.ZbE2PC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.ZbE2PC} ZbE2PC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbE2PC.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZbE2PC message.
         * @function verify
         * @memberof aruba_telemetry.ZbE2PC
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZbE2PC.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.destination != null && message.hasOwnProperty("destination")) {
                var error = $root.aruba_telemetry.ZbEPC.verify(message.destination);
                if (error)
                    return "destination." + error;
            }
            if (message.source_endpoint != null && message.hasOwnProperty("source_endpoint"))
                if (!$util.isInteger(message.source_endpoint))
                    return "source_endpoint: integer expected";
            return null;
        };

        /**
         * Creates a ZbE2PC message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.ZbE2PC
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.ZbE2PC} ZbE2PC
         */
        ZbE2PC.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.ZbE2PC)
                return object;
            var message = new $root.aruba_telemetry.ZbE2PC();
            if (object.destination != null) {
                if (typeof object.destination !== "object")
                    throw TypeError(".aruba_telemetry.ZbE2PC.destination: object expected");
                message.destination = $root.aruba_telemetry.ZbEPC.fromObject(object.destination);
            }
            if (object.source_endpoint != null)
                message.source_endpoint = object.source_endpoint >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ZbE2PC message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.ZbE2PC
         * @static
         * @param {aruba_telemetry.ZbE2PC} message ZbE2PC
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZbE2PC.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.destination = null;
                object.source_endpoint = 0;
            }
            if (message.destination != null && message.hasOwnProperty("destination"))
                object.destination = $root.aruba_telemetry.ZbEPC.toObject(message.destination, options);
            if (message.source_endpoint != null && message.hasOwnProperty("source_endpoint"))
                object.source_endpoint = message.source_endpoint;
            return object;
        };

        /**
         * Converts this ZbE2PC to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.ZbE2PC
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZbE2PC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZbE2PC;
    })();

    /**
     * ZbResult enum.
     * @name aruba_telemetry.ZbResult
     * @enum {string}
     * @property {number} SUCCEEDED=0 SUCCEEDED value
     * @property {number} FAILED=1 FAILED value
     */
    aruba_telemetry.ZbResult = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SUCCEEDED"] = 0;
        values[valuesById[1] = "FAILED"] = 1;
        return values;
    })();

    /**
     * ZbAckCode enum.
     * @name aruba_telemetry.ZbAckCode
     * @enum {string}
     * @property {number} OK=0 OK value
     */
    aruba_telemetry.ZbAckCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OK"] = 0;
        return values;
    })();

    aruba_telemetry.Reporter = (function() {

        /**
         * Properties of a Reporter.
         * @memberof aruba_telemetry
         * @interface IReporter
         * @property {string|null} [name] Reporter name
         * @property {Uint8Array|null} [mac] Reporter mac
         * @property {string|null} [ipv4] Reporter ipv4
         * @property {string|null} [ipv6] Reporter ipv6
         * @property {string|null} [hwType] Reporter hwType
         * @property {string|null} [swVersion] Reporter swVersion
         * @property {string|null} [swBuild] Reporter swBuild
         * @property {number|Long|null} [time] Reporter time
         */

        /**
         * Constructs a new Reporter.
         * @memberof aruba_telemetry
         * @classdesc Represents a Reporter.
         * @implements IReporter
         * @constructor
         * @param {aruba_telemetry.IReporter=} [properties] Properties to set
         */
        function Reporter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Reporter name.
         * @member {string} name
         * @memberof aruba_telemetry.Reporter
         * @instance
         */
        Reporter.prototype.name = "";

        /**
         * Reporter mac.
         * @member {Uint8Array} mac
         * @memberof aruba_telemetry.Reporter
         * @instance
         */
        Reporter.prototype.mac = $util.newBuffer([]);

        /**
         * Reporter ipv4.
         * @member {string} ipv4
         * @memberof aruba_telemetry.Reporter
         * @instance
         */
        Reporter.prototype.ipv4 = "";

        /**
         * Reporter ipv6.
         * @member {string} ipv6
         * @memberof aruba_telemetry.Reporter
         * @instance
         */
        Reporter.prototype.ipv6 = "";

        /**
         * Reporter hwType.
         * @member {string} hwType
         * @memberof aruba_telemetry.Reporter
         * @instance
         */
        Reporter.prototype.hwType = "";

        /**
         * Reporter swVersion.
         * @member {string} swVersion
         * @memberof aruba_telemetry.Reporter
         * @instance
         */
        Reporter.prototype.swVersion = "";

        /**
         * Reporter swBuild.
         * @member {string} swBuild
         * @memberof aruba_telemetry.Reporter
         * @instance
         */
        Reporter.prototype.swBuild = "";

        /**
         * Reporter time.
         * @member {number|Long} time
         * @memberof aruba_telemetry.Reporter
         * @instance
         */
        Reporter.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Reporter instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Reporter
         * @static
         * @param {aruba_telemetry.IReporter=} [properties] Properties to set
         * @returns {aruba_telemetry.Reporter} Reporter instance
         */
        Reporter.create = function create(properties) {
            return new Reporter(properties);
        };

        /**
         * Encodes the specified Reporter message. Does not implicitly {@link aruba_telemetry.Reporter.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Reporter
         * @static
         * @param {aruba_telemetry.IReporter} message Reporter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reporter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.mac != null && message.hasOwnProperty("mac"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.mac);
            if (message.ipv4 != null && message.hasOwnProperty("ipv4"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ipv4);
            if (message.ipv6 != null && message.hasOwnProperty("ipv6"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ipv6);
            if (message.hwType != null && message.hasOwnProperty("hwType"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.hwType);
            if (message.swVersion != null && message.hasOwnProperty("swVersion"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.swVersion);
            if (message.swBuild != null && message.hasOwnProperty("swBuild"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.swBuild);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.time);
            return writer;
        };

        /**
         * Encodes the specified Reporter message, length delimited. Does not implicitly {@link aruba_telemetry.Reporter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Reporter
         * @static
         * @param {aruba_telemetry.IReporter} message Reporter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reporter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Reporter message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Reporter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Reporter} Reporter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reporter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Reporter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.mac = reader.bytes().toString('hex');
                    break;
                case 3:
                    message.ipv4 = reader.string();
                    break;
                case 4:
                    message.ipv6 = reader.string();
                    break;
                case 5:
                    message.hwType = reader.string();
                    break;
                case 6:
                    message.swVersion = reader.string();
                    break;
                case 7:
                    message.swBuild = reader.string();
                    break;
                case 8:
                    message.time = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Reporter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Reporter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Reporter} Reporter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reporter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Reporter message.
         * @function verify
         * @memberof aruba_telemetry.Reporter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Reporter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.mac != null && message.hasOwnProperty("mac"))
                if (!(message.mac && typeof message.mac.length === "number" || $util.isString(message.mac)))
                    return "mac: buffer expected";
            if (message.ipv4 != null && message.hasOwnProperty("ipv4"))
                if (!$util.isString(message.ipv4))
                    return "ipv4: string expected";
            if (message.ipv6 != null && message.hasOwnProperty("ipv6"))
                if (!$util.isString(message.ipv6))
                    return "ipv6: string expected";
            if (message.hwType != null && message.hasOwnProperty("hwType"))
                if (!$util.isString(message.hwType))
                    return "hwType: string expected";
            if (message.swVersion != null && message.hasOwnProperty("swVersion"))
                if (!$util.isString(message.swVersion))
                    return "swVersion: string expected";
            if (message.swBuild != null && message.hasOwnProperty("swBuild"))
                if (!$util.isString(message.swBuild))
                    return "swBuild: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };

        /**
         * Creates a Reporter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Reporter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Reporter} Reporter
         */
        Reporter.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Reporter)
                return object;
            var message = new $root.aruba_telemetry.Reporter();
            if (object.name != null)
                message.name = String(object.name);
            if (object.mac != null)
                if (typeof object.mac === "string")
                    $util.base64.decode(object.mac, message.mac = $util.newBuffer($util.base64.length(object.mac)), 0);
                else if (object.mac.length)
                    message.mac = object.mac;
            if (object.ipv4 != null)
                message.ipv4 = String(object.ipv4);
            if (object.ipv6 != null)
                message.ipv6 = String(object.ipv6);
            if (object.hwType != null)
                message.hwType = String(object.hwType);
            if (object.swVersion != null)
                message.swVersion = String(object.swVersion);
            if (object.swBuild != null)
                message.swBuild = String(object.swBuild);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Reporter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Reporter
         * @static
         * @param {aruba_telemetry.Reporter} message Reporter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reporter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                if (options.bytes === String)
                    object.mac = "";
                else {
                    object.mac = [];
                    if (options.bytes !== Array)
                        object.mac = $util.newBuffer(object.mac);
                }
                object.ipv4 = "";
                object.ipv6 = "";
                object.hwType = "";
                object.swVersion = "";
                object.swBuild = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.mac != null && message.hasOwnProperty("mac"))
                object.mac = message.mac;
            if (message.ipv4 != null && message.hasOwnProperty("ipv4"))
                object.ipv4 = message.ipv4;
            if (message.ipv6 != null && message.hasOwnProperty("ipv6"))
                object.ipv6 = message.ipv6;
            if (message.hwType != null && message.hasOwnProperty("hwType"))
                object.hwType = message.hwType;
            if (message.swVersion != null && message.hasOwnProperty("swVersion"))
                object.swVersion = message.swVersion;
            if (message.swBuild != null && message.hasOwnProperty("swBuild"))
                object.swBuild = message.swBuild;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
            return object;
        };

        /**
         * Converts this Reporter to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Reporter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Reporter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Reporter;
    })();

    aruba_telemetry.Telemetry = (function() {

        /**
         * Properties of a Telemetry.
         * @memberof aruba_telemetry
         * @interface ITelemetry
         * @property {aruba_telemetry.IMeta} meta Telemetry meta
         * @property {aruba_telemetry.IReporter} reporter Telemetry reporter
         * @property {Array.<aruba_telemetry.IReported>|null} [reported] Telemetry reported
         * @property {Array.<aruba_telemetry.IActionResult>|null} [results] Telemetry results
         * @property {Array.<aruba_telemetry.ICharacteristic>|null} [characteristics] Telemetry characteristics
         * @property {Array.<aruba_telemetry.IBleData>|null} [bleData] Telemetry bleData
         * @property {Array.<aruba_telemetry.IWiFiData>|null} [wifiData] Telemetry wifiData
         * @property {aruba_telemetry.IDeviceCount|null} [devCount] Telemetry devCount
         * @property {aruba_telemetry.IStatus|null} [status] Telemetry status
         * @property {aruba_telemetry.INbZbMsg|null} [zigbee] Telemetry zigbee
         * @property {Array.<aruba_telemetry.INbSerialData>|null} [nbSData] Telemetry nbSData
         * @property {aruba_telemetry.IApHealthUpdate|null} [apHealth] Telemetry apHealth
         */

        /**
         * Constructs a new Telemetry.
         * @memberof aruba_telemetry
         * @classdesc Represents a Telemetry.
         * @implements ITelemetry
         * @constructor
         * @param {aruba_telemetry.ITelemetry=} [properties] Properties to set
         */
        function Telemetry(properties) {
            this.reported = [];
            this.results = [];
            this.characteristics = [];
            this.bleData = [];
            this.wifiData = [];
            this.nbSData = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Telemetry meta.
         * @member {aruba_telemetry.IMeta} meta
         * @memberof aruba_telemetry.Telemetry
         * @instance
         */
        Telemetry.prototype.meta = null;

        /**
         * Telemetry reporter.
         * @member {aruba_telemetry.IReporter} reporter
         * @memberof aruba_telemetry.Telemetry
         * @instance
         */
        Telemetry.prototype.reporter = null;

        /**
         * Telemetry reported.
         * @member {Array.<aruba_telemetry.IReported>} reported
         * @memberof aruba_telemetry.Telemetry
         * @instance
         */
        Telemetry.prototype.reported = $util.emptyArray;

        /**
         * Telemetry results.
         * @member {Array.<aruba_telemetry.IActionResult>} results
         * @memberof aruba_telemetry.Telemetry
         * @instance
         */
        Telemetry.prototype.results = $util.emptyArray;

        /**
         * Telemetry characteristics.
         * @member {Array.<aruba_telemetry.ICharacteristic>} characteristics
         * @memberof aruba_telemetry.Telemetry
         * @instance
         */
        Telemetry.prototype.characteristics = $util.emptyArray;

        /**
         * Telemetry bleData.
         * @member {Array.<aruba_telemetry.IBleData>} bleData
         * @memberof aruba_telemetry.Telemetry
         * @instance
         */
        Telemetry.prototype.bleData = $util.emptyArray;

        /**
         * Telemetry wifiData.
         * @member {Array.<aruba_telemetry.IWiFiData>} wifiData
         * @memberof aruba_telemetry.Telemetry
         * @instance
         */
        Telemetry.prototype.wifiData = $util.emptyArray;

        /**
         * Telemetry devCount.
         * @member {aruba_telemetry.IDeviceCount|null|undefined} devCount
         * @memberof aruba_telemetry.Telemetry
         * @instance
         */
        Telemetry.prototype.devCount = null;

        /**
         * Telemetry status.
         * @member {aruba_telemetry.IStatus|null|undefined} status
         * @memberof aruba_telemetry.Telemetry
         * @instance
         */
        Telemetry.prototype.status = null;

        /**
         * Telemetry zigbee.
         * @member {aruba_telemetry.INbZbMsg|null|undefined} zigbee
         * @memberof aruba_telemetry.Telemetry
         * @instance
         */
        Telemetry.prototype.zigbee = null;

        /**
         * Telemetry nbSData.
         * @member {Array.<aruba_telemetry.INbSerialData>} nbSData
         * @memberof aruba_telemetry.Telemetry
         * @instance
         */
        Telemetry.prototype.nbSData = $util.emptyArray;

        /**
         * Telemetry apHealth.
         * @member {aruba_telemetry.IApHealthUpdate|null|undefined} apHealth
         * @memberof aruba_telemetry.Telemetry
         * @instance
         */
        Telemetry.prototype.apHealth = null;

        /**
         * Creates a new Telemetry instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Telemetry
         * @static
         * @param {aruba_telemetry.ITelemetry=} [properties] Properties to set
         * @returns {aruba_telemetry.Telemetry} Telemetry instance
         */
        Telemetry.create = function create(properties) {
            return new Telemetry(properties);
        };

        /**
         * Encodes the specified Telemetry message. Does not implicitly {@link aruba_telemetry.Telemetry.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Telemetry
         * @static
         * @param {aruba_telemetry.ITelemetry} message Telemetry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Telemetry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.aruba_telemetry.Meta.encode(message.meta, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            $root.aruba_telemetry.Reporter.encode(message.reporter, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.reported != null && message.reported.length)
                for (var i = 0; i < message.reported.length; ++i)
                    $root.aruba_telemetry.Reported.encode(message.reported[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.results != null && message.results.length)
                for (var i = 0; i < message.results.length; ++i)
                    $root.aruba_telemetry.ActionResult.encode(message.results[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.characteristics != null && message.characteristics.length)
                for (var i = 0; i < message.characteristics.length; ++i)
                    $root.aruba_telemetry.Characteristic.encode(message.characteristics[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.bleData != null && message.bleData.length)
                for (var i = 0; i < message.bleData.length; ++i)
                    $root.aruba_telemetry.BleData.encode(message.bleData[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.wifiData != null && message.wifiData.length)
                for (var i = 0; i < message.wifiData.length; ++i)
                    $root.aruba_telemetry.WiFiData.encode(message.wifiData[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.devCount != null && message.hasOwnProperty("devCount"))
                $root.aruba_telemetry.DeviceCount.encode(message.devCount, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.status != null && message.hasOwnProperty("status"))
                $root.aruba_telemetry.Status.encode(message.status, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.zigbee != null && message.hasOwnProperty("zigbee"))
                $root.aruba_telemetry.NbZbMsg.encode(message.zigbee, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.nbSData != null && message.nbSData.length)
                for (var i = 0; i < message.nbSData.length; ++i)
                    $root.aruba_telemetry.NbSerialData.encode(message.nbSData[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.apHealth != null && message.hasOwnProperty("apHealth"))
                $root.aruba_telemetry.ApHealthUpdate.encode(message.apHealth, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Telemetry message, length delimited. Does not implicitly {@link aruba_telemetry.Telemetry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Telemetry
         * @static
         * @param {aruba_telemetry.ITelemetry} message Telemetry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Telemetry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Telemetry message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Telemetry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Telemetry} Telemetry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Telemetry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Telemetry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.meta = $root.aruba_telemetry.Meta.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.reporter = $root.aruba_telemetry.Reporter.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.reported && message.reported.length))
                        message.reported = [];
                    message.reported.push($root.aruba_telemetry.Reported.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.results && message.results.length))
                        message.results = [];
                    message.results.push($root.aruba_telemetry.ActionResult.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.characteristics && message.characteristics.length))
                        message.characteristics = [];
                    message.characteristics.push($root.aruba_telemetry.Characteristic.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.bleData && message.bleData.length))
                        message.bleData = [];
                    message.bleData.push($root.aruba_telemetry.BleData.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.wifiData && message.wifiData.length))
                        message.wifiData = [];
                    message.wifiData.push($root.aruba_telemetry.WiFiData.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.devCount = $root.aruba_telemetry.DeviceCount.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.status = $root.aruba_telemetry.Status.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.zigbee = $root.aruba_telemetry.NbZbMsg.decode(reader, reader.uint32());
                    break;
                case 11:
                    if (!(message.nbSData && message.nbSData.length))
                        message.nbSData = [];
                    message.nbSData.push($root.aruba_telemetry.NbSerialData.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.apHealth = $root.aruba_telemetry.ApHealthUpdate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("meta"))
                throw $util.ProtocolError("missing required 'meta'", { instance: message });
            if (!message.hasOwnProperty("reporter"))
                throw $util.ProtocolError("missing required 'reporter'", { instance: message });
            return message;
        };

        /**
         * Decodes a Telemetry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Telemetry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Telemetry} Telemetry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Telemetry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Telemetry message.
         * @function verify
         * @memberof aruba_telemetry.Telemetry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Telemetry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.aruba_telemetry.Meta.verify(message.meta);
                if (error)
                    return "meta." + error;
            }
            {
                var error = $root.aruba_telemetry.Reporter.verify(message.reporter);
                if (error)
                    return "reporter." + error;
            }
            if (message.reported != null && message.hasOwnProperty("reported")) {
                if (!Array.isArray(message.reported))
                    return "reported: array expected";
                for (var i = 0; i < message.reported.length; ++i) {
                    var error = $root.aruba_telemetry.Reported.verify(message.reported[i]);
                    if (error)
                        return "reported." + error;
                }
            }
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (var i = 0; i < message.results.length; ++i) {
                    var error = $root.aruba_telemetry.ActionResult.verify(message.results[i]);
                    if (error)
                        return "results." + error;
                }
            }
            if (message.characteristics != null && message.hasOwnProperty("characteristics")) {
                if (!Array.isArray(message.characteristics))
                    return "characteristics: array expected";
                for (var i = 0; i < message.characteristics.length; ++i) {
                    var error = $root.aruba_telemetry.Characteristic.verify(message.characteristics[i]);
                    if (error)
                        return "characteristics." + error;
                }
            }
            if (message.bleData != null && message.hasOwnProperty("bleData")) {
                if (!Array.isArray(message.bleData))
                    return "bleData: array expected";
                for (var i = 0; i < message.bleData.length; ++i) {
                    var error = $root.aruba_telemetry.BleData.verify(message.bleData[i]);
                    if (error)
                        return "bleData." + error;
                }
            }
            if (message.wifiData != null && message.hasOwnProperty("wifiData")) {
                if (!Array.isArray(message.wifiData))
                    return "wifiData: array expected";
                for (var i = 0; i < message.wifiData.length; ++i) {
                    var error = $root.aruba_telemetry.WiFiData.verify(message.wifiData[i]);
                    if (error)
                        return "wifiData." + error;
                }
            }
            if (message.devCount != null && message.hasOwnProperty("devCount")) {
                var error = $root.aruba_telemetry.DeviceCount.verify(message.devCount);
                if (error)
                    return "devCount." + error;
            }
            if (message.status != null && message.hasOwnProperty("status")) {
                var error = $root.aruba_telemetry.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.zigbee != null && message.hasOwnProperty("zigbee")) {
                var error = $root.aruba_telemetry.NbZbMsg.verify(message.zigbee);
                if (error)
                    return "zigbee." + error;
            }
            if (message.nbSData != null && message.hasOwnProperty("nbSData")) {
                if (!Array.isArray(message.nbSData))
                    return "nbSData: array expected";
                for (var i = 0; i < message.nbSData.length; ++i) {
                    var error = $root.aruba_telemetry.NbSerialData.verify(message.nbSData[i]);
                    if (error)
                        return "nbSData." + error;
                }
            }
            if (message.apHealth != null && message.hasOwnProperty("apHealth")) {
                var error = $root.aruba_telemetry.ApHealthUpdate.verify(message.apHealth);
                if (error)
                    return "apHealth." + error;
            }
            return null;
        };

        /**
         * Creates a Telemetry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Telemetry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Telemetry} Telemetry
         */
        Telemetry.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Telemetry)
                return object;
            var message = new $root.aruba_telemetry.Telemetry();
            if (object.meta != null) {
                if (typeof object.meta !== "object")
                    throw TypeError(".aruba_telemetry.Telemetry.meta: object expected");
                message.meta = $root.aruba_telemetry.Meta.fromObject(object.meta);
            }
            if (object.reporter != null) {
                if (typeof object.reporter !== "object")
                    throw TypeError(".aruba_telemetry.Telemetry.reporter: object expected");
                message.reporter = $root.aruba_telemetry.Reporter.fromObject(object.reporter);
            }
            if (object.reported) {
                if (!Array.isArray(object.reported))
                    throw TypeError(".aruba_telemetry.Telemetry.reported: array expected");
                message.reported = [];
                for (var i = 0; i < object.reported.length; ++i) {
                    if (typeof object.reported[i] !== "object")
                        throw TypeError(".aruba_telemetry.Telemetry.reported: object expected");
                    message.reported[i] = $root.aruba_telemetry.Reported.fromObject(object.reported[i]);
                }
            }
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".aruba_telemetry.Telemetry.results: array expected");
                message.results = [];
                for (var i = 0; i < object.results.length; ++i) {
                    if (typeof object.results[i] !== "object")
                        throw TypeError(".aruba_telemetry.Telemetry.results: object expected");
                    message.results[i] = $root.aruba_telemetry.ActionResult.fromObject(object.results[i]);
                }
            }
            if (object.characteristics) {
                if (!Array.isArray(object.characteristics))
                    throw TypeError(".aruba_telemetry.Telemetry.characteristics: array expected");
                message.characteristics = [];
                for (var i = 0; i < object.characteristics.length; ++i) {
                    if (typeof object.characteristics[i] !== "object")
                        throw TypeError(".aruba_telemetry.Telemetry.characteristics: object expected");
                    message.characteristics[i] = $root.aruba_telemetry.Characteristic.fromObject(object.characteristics[i]);
                }
            }
            if (object.bleData) {
                if (!Array.isArray(object.bleData))
                    throw TypeError(".aruba_telemetry.Telemetry.bleData: array expected");
                message.bleData = [];
                for (var i = 0; i < object.bleData.length; ++i) {
                    if (typeof object.bleData[i] !== "object")
                        throw TypeError(".aruba_telemetry.Telemetry.bleData: object expected");
                    message.bleData[i] = $root.aruba_telemetry.BleData.fromObject(object.bleData[i]);
                }
            }
            if (object.wifiData) {
                if (!Array.isArray(object.wifiData))
                    throw TypeError(".aruba_telemetry.Telemetry.wifiData: array expected");
                message.wifiData = [];
                for (var i = 0; i < object.wifiData.length; ++i) {
                    if (typeof object.wifiData[i] !== "object")
                        throw TypeError(".aruba_telemetry.Telemetry.wifiData: object expected");
                    message.wifiData[i] = $root.aruba_telemetry.WiFiData.fromObject(object.wifiData[i]);
                }
            }
            if (object.devCount != null) {
                if (typeof object.devCount !== "object")
                    throw TypeError(".aruba_telemetry.Telemetry.devCount: object expected");
                message.devCount = $root.aruba_telemetry.DeviceCount.fromObject(object.devCount);
            }
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".aruba_telemetry.Telemetry.status: object expected");
                message.status = $root.aruba_telemetry.Status.fromObject(object.status);
            }
            if (object.zigbee != null) {
                if (typeof object.zigbee !== "object")
                    throw TypeError(".aruba_telemetry.Telemetry.zigbee: object expected");
                message.zigbee = $root.aruba_telemetry.NbZbMsg.fromObject(object.zigbee);
            }
            if (object.nbSData) {
                if (!Array.isArray(object.nbSData))
                    throw TypeError(".aruba_telemetry.Telemetry.nbSData: array expected");
                message.nbSData = [];
                for (var i = 0; i < object.nbSData.length; ++i) {
                    if (typeof object.nbSData[i] !== "object")
                        throw TypeError(".aruba_telemetry.Telemetry.nbSData: object expected");
                    message.nbSData[i] = $root.aruba_telemetry.NbSerialData.fromObject(object.nbSData[i]);
                }
            }
            if (object.apHealth != null) {
                if (typeof object.apHealth !== "object")
                    throw TypeError(".aruba_telemetry.Telemetry.apHealth: object expected");
                message.apHealth = $root.aruba_telemetry.ApHealthUpdate.fromObject(object.apHealth);
            }
            return message;
        };

        /**
         * Creates a plain object from a Telemetry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Telemetry
         * @static
         * @param {aruba_telemetry.Telemetry} message Telemetry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Telemetry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.reported = [];
                object.results = [];
                object.characteristics = [];
                object.bleData = [];
                object.wifiData = [];
                object.nbSData = [];
            }
            if (options.defaults) {
                object.meta = null;
                object.reporter = null;
                object.devCount = null;
                object.status = null;
                object.zigbee = null;
                object.apHealth = null;
            }
            if (message.meta != null && message.hasOwnProperty("meta"))
                object.meta = $root.aruba_telemetry.Meta.toObject(message.meta, options);
            if (message.reporter != null && message.hasOwnProperty("reporter"))
                object.reporter = $root.aruba_telemetry.Reporter.toObject(message.reporter, options);
            if (message.reported && message.reported.length) {
                object.reported = [];
                for (var j = 0; j < message.reported.length; ++j)
                    object.reported[j] = $root.aruba_telemetry.Reported.toObject(message.reported[j], options);
            }
            if (message.results && message.results.length) {
                object.results = [];
                for (var j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.aruba_telemetry.ActionResult.toObject(message.results[j], options);
            }
            if (message.characteristics && message.characteristics.length) {
                object.characteristics = [];
                for (var j = 0; j < message.characteristics.length; ++j)
                    object.characteristics[j] = $root.aruba_telemetry.Characteristic.toObject(message.characteristics[j], options);
            }
            if (message.bleData && message.bleData.length) {
                object.bleData = [];
                for (var j = 0; j < message.bleData.length; ++j)
                    object.bleData[j] = $root.aruba_telemetry.BleData.toObject(message.bleData[j], options);
            }
            if (message.wifiData && message.wifiData.length) {
                object.wifiData = [];
                for (var j = 0; j < message.wifiData.length; ++j)
                    object.wifiData[j] = $root.aruba_telemetry.WiFiData.toObject(message.wifiData[j], options);
            }
            if (message.devCount != null && message.hasOwnProperty("devCount"))
                object.devCount = $root.aruba_telemetry.DeviceCount.toObject(message.devCount, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.aruba_telemetry.Status.toObject(message.status, options);
            if (message.zigbee != null && message.hasOwnProperty("zigbee"))
                object.zigbee = $root.aruba_telemetry.NbZbMsg.toObject(message.zigbee, options);
            if (message.nbSData && message.nbSData.length) {
                object.nbSData = [];
                for (var j = 0; j < message.nbSData.length; ++j)
                    object.nbSData[j] = $root.aruba_telemetry.NbSerialData.toObject(message.nbSData[j], options);
            }
            if (message.apHealth != null && message.hasOwnProperty("apHealth"))
                object.apHealth = $root.aruba_telemetry.ApHealthUpdate.toObject(message.apHealth, options);
            return object;
        };

        /**
         * Converts this Telemetry to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Telemetry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Telemetry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Telemetry;
    })();

    /**
     * AuthenticationMethod enum.
     * @name aruba_telemetry.AuthenticationMethod
     * @enum {string}
     * @property {number} none=0 none value
     * @property {number} passkey=1 passkey value
     * @property {number} oob=2 oob value
     * @property {number} lescNone=3 lescNone value
     * @property {number} lescPasskey=4 lescPasskey value
     * @property {number} lescOob=5 lescOob value
     */
    aruba_telemetry.AuthenticationMethod = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "none"] = 0;
        values[valuesById[1] = "passkey"] = 1;
        values[valuesById[2] = "oob"] = 2;
        values[valuesById[3] = "lescNone"] = 3;
        values[valuesById[4] = "lescPasskey"] = 4;
        values[valuesById[5] = "lescOob"] = 5;
        return values;
    })();

    aruba_telemetry.Authentication = (function() {

        /**
         * Properties of an Authentication.
         * @memberof aruba_telemetry
         * @interface IAuthentication
         * @property {aruba_telemetry.AuthenticationMethod|null} [method] Authentication method
         * @property {boolean|null} [bonding] Authentication bonding
         * @property {string|null} [passkey] Authentication passkey
         * @property {Uint8Array|null} [keyOob] Authentication keyOob
         * @property {Uint8Array|null} [keyOwn] Authentication keyOwn
         */

        /**
         * Constructs a new Authentication.
         * @memberof aruba_telemetry
         * @classdesc Represents an Authentication.
         * @implements IAuthentication
         * @constructor
         * @param {aruba_telemetry.IAuthentication=} [properties] Properties to set
         */
        function Authentication(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Authentication method.
         * @member {aruba_telemetry.AuthenticationMethod} method
         * @memberof aruba_telemetry.Authentication
         * @instance
         */
        Authentication.prototype.method = 0;

        /**
         * Authentication bonding.
         * @member {boolean} bonding
         * @memberof aruba_telemetry.Authentication
         * @instance
         */
        Authentication.prototype.bonding = false;

        /**
         * Authentication passkey.
         * @member {string} passkey
         * @memberof aruba_telemetry.Authentication
         * @instance
         */
        Authentication.prototype.passkey = "";

        /**
         * Authentication keyOob.
         * @member {Uint8Array} keyOob
         * @memberof aruba_telemetry.Authentication
         * @instance
         */
        Authentication.prototype.keyOob = $util.newBuffer([]);

        /**
         * Authentication keyOwn.
         * @member {Uint8Array} keyOwn
         * @memberof aruba_telemetry.Authentication
         * @instance
         */
        Authentication.prototype.keyOwn = $util.newBuffer([]);

        /**
         * Creates a new Authentication instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Authentication
         * @static
         * @param {aruba_telemetry.IAuthentication=} [properties] Properties to set
         * @returns {aruba_telemetry.Authentication} Authentication instance
         */
        Authentication.create = function create(properties) {
            return new Authentication(properties);
        };

        /**
         * Encodes the specified Authentication message. Does not implicitly {@link aruba_telemetry.Authentication.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Authentication
         * @static
         * @param {aruba_telemetry.IAuthentication} message Authentication message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Authentication.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.method != null && message.hasOwnProperty("method"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.method);
            if (message.bonding != null && message.hasOwnProperty("bonding"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.bonding);
            if (message.passkey != null && message.hasOwnProperty("passkey"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.passkey);
            if (message.keyOob != null && message.hasOwnProperty("keyOob"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.keyOob);
            if (message.keyOwn != null && message.hasOwnProperty("keyOwn"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.keyOwn);
            return writer;
        };

        /**
         * Encodes the specified Authentication message, length delimited. Does not implicitly {@link aruba_telemetry.Authentication.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Authentication
         * @static
         * @param {aruba_telemetry.IAuthentication} message Authentication message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Authentication.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Authentication message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Authentication
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Authentication} Authentication
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Authentication.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Authentication();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.method = reader.int32();
                    break;
                case 2:
                    message.bonding = reader.bool();
                    break;
                case 3:
                    message.passkey = reader.string();
                    break;
                case 4:
                    message.keyOob = reader.bytes().toString('hex');
                    break;
                case 5:
                    message.keyOwn = reader.bytes().toString('hex');
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Authentication message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Authentication
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Authentication} Authentication
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Authentication.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Authentication message.
         * @function verify
         * @memberof aruba_telemetry.Authentication
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Authentication.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.method != null && message.hasOwnProperty("method"))
                switch (message.method) {
                default:
                    return "method: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.bonding != null && message.hasOwnProperty("bonding"))
                if (typeof message.bonding !== "boolean")
                    return "bonding: boolean expected";
            if (message.passkey != null && message.hasOwnProperty("passkey"))
                if (!$util.isString(message.passkey))
                    return "passkey: string expected";
            if (message.keyOob != null && message.hasOwnProperty("keyOob"))
                if (!(message.keyOob && typeof message.keyOob.length === "number" || $util.isString(message.keyOob)))
                    return "keyOob: buffer expected";
            if (message.keyOwn != null && message.hasOwnProperty("keyOwn"))
                if (!(message.keyOwn && typeof message.keyOwn.length === "number" || $util.isString(message.keyOwn)))
                    return "keyOwn: buffer expected";
            return null;
        };

        /**
         * Creates an Authentication message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Authentication
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Authentication} Authentication
         */
        Authentication.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Authentication)
                return object;
            var message = new $root.aruba_telemetry.Authentication();
            switch (object.method) {
            case "none":
            case 0:
                message.method = 0;
                break;
            case "passkey":
            case 1:
                message.method = 1;
                break;
            case "oob":
            case 2:
                message.method = 2;
                break;
            case "lescNone":
            case 3:
                message.method = 3;
                break;
            case "lescPasskey":
            case 4:
                message.method = 4;
                break;
            case "lescOob":
            case 5:
                message.method = 5;
                break;
            }
            if (object.bonding != null)
                message.bonding = Boolean(object.bonding);
            if (object.passkey != null)
                message.passkey = String(object.passkey);
            if (object.keyOob != null)
                if (typeof object.keyOob === "string")
                    $util.base64.decode(object.keyOob, message.keyOob = $util.newBuffer($util.base64.length(object.keyOob)), 0);
                else if (object.keyOob.length)
                    message.keyOob = object.keyOob;
            if (object.keyOwn != null)
                if (typeof object.keyOwn === "string")
                    $util.base64.decode(object.keyOwn, message.keyOwn = $util.newBuffer($util.base64.length(object.keyOwn)), 0);
                else if (object.keyOwn.length)
                    message.keyOwn = object.keyOwn;
            return message;
        };

        /**
         * Creates a plain object from an Authentication message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Authentication
         * @static
         * @param {aruba_telemetry.Authentication} message Authentication
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Authentication.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.method = options.enums === String ? "none" : 0;
                object.bonding = false;
                object.passkey = "";
                if (options.bytes === String)
                    object.keyOob = "";
                else {
                    object.keyOob = [];
                    if (options.bytes !== Array)
                        object.keyOob = $util.newBuffer(object.keyOob);
                }
                if (options.bytes === String)
                    object.keyOwn = "";
                else {
                    object.keyOwn = [];
                    if (options.bytes !== Array)
                        object.keyOwn = $util.newBuffer(object.keyOwn);
                }
            }
            if (message.method != null && message.hasOwnProperty("method"))
                object.method = options.enums === String ? $root.aruba_telemetry.AuthenticationMethod[message.method] : message.method;
            if (message.bonding != null && message.hasOwnProperty("bonding"))
                object.bonding = message.bonding;
            if (message.passkey != null && message.hasOwnProperty("passkey"))
                object.passkey = message.passkey;
            if (message.keyOob != null && message.hasOwnProperty("keyOob"))
                object.keyOob = message.keyOob;
            if (message.keyOwn != null && message.hasOwnProperty("keyOwn"))
                object.keyOwn = message.keyOwn;
            return object;
        };

        /**
         * Converts this Authentication to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Authentication
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Authentication.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Authentication;
    })();

    aruba_telemetry.Action = (function() {

        /**
         * Properties of an Action.
         * @memberof aruba_telemetry
         * @interface IAction
         * @property {string|null} [actionId] Action actionId
         * @property {aruba_telemetry.ActionType|null} [type] Action type
         * @property {Uint8Array|null} [deviceMac] Action deviceMac
         * @property {Uint8Array|null} [serviceUuid] Action serviceUuid
         * @property {Uint8Array|null} [characteristicUuid] Action characteristicUuid
         * @property {number|null} [timeOut] Action timeOut
         * @property {Uint8Array|null} [value] Action value
         * @property {aruba_telemetry.IAuthentication|null} [authentication] Action authentication
         * @property {aruba_telemetry.IBleBondingKey|null} [bondingKey] Action bondingKey
         * @property {Uint8Array|null} [apbMac] Action apbMac
         */

        /**
         * Constructs a new Action.
         * @memberof aruba_telemetry
         * @classdesc Represents an Action.
         * @implements IAction
         * @constructor
         * @param {aruba_telemetry.IAction=} [properties] Properties to set
         */
        function Action(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Action actionId.
         * @member {string} actionId
         * @memberof aruba_telemetry.Action
         * @instance
         */
        Action.prototype.actionId = "";

        /**
         * Action type.
         * @member {aruba_telemetry.ActionType} type
         * @memberof aruba_telemetry.Action
         * @instance
         */
        Action.prototype.type = 0;

        /**
         * Action deviceMac.
         * @member {Uint8Array} deviceMac
         * @memberof aruba_telemetry.Action
         * @instance
         */
        Action.prototype.deviceMac = $util.newBuffer([]);

        /**
         * Action serviceUuid.
         * @member {Uint8Array} serviceUuid
         * @memberof aruba_telemetry.Action
         * @instance
         */
        Action.prototype.serviceUuid = $util.newBuffer([]);

        /**
         * Action characteristicUuid.
         * @member {Uint8Array} characteristicUuid
         * @memberof aruba_telemetry.Action
         * @instance
         */
        Action.prototype.characteristicUuid = $util.newBuffer([]);

        /**
         * Action timeOut.
         * @member {number} timeOut
         * @memberof aruba_telemetry.Action
         * @instance
         */
        Action.prototype.timeOut = 0;

        /**
         * Action value.
         * @member {Uint8Array} value
         * @memberof aruba_telemetry.Action
         * @instance
         */
        Action.prototype.value = $util.newBuffer([]);

        /**
         * Action authentication.
         * @member {aruba_telemetry.IAuthentication|null|undefined} authentication
         * @memberof aruba_telemetry.Action
         * @instance
         */
        Action.prototype.authentication = null;

        /**
         * Action bondingKey.
         * @member {aruba_telemetry.IBleBondingKey|null|undefined} bondingKey
         * @memberof aruba_telemetry.Action
         * @instance
         */
        Action.prototype.bondingKey = null;

        /**
         * Action apbMac.
         * @member {Uint8Array} apbMac
         * @memberof aruba_telemetry.Action
         * @instance
         */
        Action.prototype.apbMac = $util.newBuffer([]);

        /**
         * Creates a new Action instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Action
         * @static
         * @param {aruba_telemetry.IAction=} [properties] Properties to set
         * @returns {aruba_telemetry.Action} Action instance
         */
        Action.create = function create(properties) {
            return new Action(properties);
        };

        /**
         * Encodes the specified Action message. Does not implicitly {@link aruba_telemetry.Action.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Action
         * @static
         * @param {aruba_telemetry.IAction} message Action message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Action.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.actionId != null && message.hasOwnProperty("actionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.actionId);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.deviceMac != null && message.hasOwnProperty("deviceMac"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.deviceMac);
            if (message.serviceUuid != null && message.hasOwnProperty("serviceUuid"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.serviceUuid);
            if (message.characteristicUuid != null && message.hasOwnProperty("characteristicUuid"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.characteristicUuid);
            if (message.timeOut != null && message.hasOwnProperty("timeOut"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.timeOut);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.value);
            if (message.authentication != null && message.hasOwnProperty("authentication"))
                $root.aruba_telemetry.Authentication.encode(message.authentication, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.bondingKey != null && message.hasOwnProperty("bondingKey"))
                $root.aruba_telemetry.BleBondingKey.encode(message.bondingKey, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.apbMac != null && message.hasOwnProperty("apbMac"))
                writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.apbMac);
            return writer;
        };

        /**
         * Encodes the specified Action message, length delimited. Does not implicitly {@link aruba_telemetry.Action.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Action
         * @static
         * @param {aruba_telemetry.IAction} message Action message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Action.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Action
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Action} Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Action.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Action();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.actionId = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.deviceMac = reader.bytes().toString('hex');
                    break;
                case 4:
                    message.serviceUuid = reader.bytes().toString('hex');
                    break;
                case 5:
                    message.characteristicUuid = reader.bytes().toString('hex');
                    break;
                case 6:
                    message.timeOut = reader.uint32();
                    break;
                case 7:
                    message.value = reader.bytes().toString('hex');
                    break;
                case 8:
                    message.authentication = $root.aruba_telemetry.Authentication.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.bondingKey = $root.aruba_telemetry.BleBondingKey.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.apbMac = reader.bytes().toString('hex');
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Action message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Action
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Action} Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Action.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Action message.
         * @function verify
         * @memberof aruba_telemetry.Action
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Action.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.actionId != null && message.hasOwnProperty("actionId"))
                if (!$util.isString(message.actionId))
                    return "actionId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            if (message.deviceMac != null && message.hasOwnProperty("deviceMac"))
                if (!(message.deviceMac && typeof message.deviceMac.length === "number" || $util.isString(message.deviceMac)))
                    return "deviceMac: buffer expected";
            if (message.serviceUuid != null && message.hasOwnProperty("serviceUuid"))
                if (!(message.serviceUuid && typeof message.serviceUuid.length === "number" || $util.isString(message.serviceUuid)))
                    return "serviceUuid: buffer expected";
            if (message.characteristicUuid != null && message.hasOwnProperty("characteristicUuid"))
                if (!(message.characteristicUuid && typeof message.characteristicUuid.length === "number" || $util.isString(message.characteristicUuid)))
                    return "characteristicUuid: buffer expected";
            if (message.timeOut != null && message.hasOwnProperty("timeOut"))
                if (!$util.isInteger(message.timeOut))
                    return "timeOut: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                    return "value: buffer expected";
            if (message.authentication != null && message.hasOwnProperty("authentication")) {
                var error = $root.aruba_telemetry.Authentication.verify(message.authentication);
                if (error)
                    return "authentication." + error;
            }
            if (message.bondingKey != null && message.hasOwnProperty("bondingKey")) {
                var error = $root.aruba_telemetry.BleBondingKey.verify(message.bondingKey);
                if (error)
                    return "bondingKey." + error;
            }
            if (message.apbMac != null && message.hasOwnProperty("apbMac"))
                if (!(message.apbMac && typeof message.apbMac.length === "number" || $util.isString(message.apbMac)))
                    return "apbMac: buffer expected";
            return null;
        };

        /**
         * Creates an Action message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Action
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Action} Action
         */
        Action.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Action)
                return object;
            var message = new $root.aruba_telemetry.Action();
            if (object.actionId != null)
                message.actionId = String(object.actionId);
            switch (object.type) {
            case "bleConnect":
            case 0:
                message.type = 0;
                break;
            case "bleDisconnect":
            case 1:
                message.type = 1;
                break;
            case "gattRead":
            case 2:
                message.type = 2;
                break;
            case "gattWrite":
            case 3:
                message.type = 3;
                break;
            case "gattWriteWithResponse":
            case 4:
                message.type = 4;
                break;
            case "gattNotification":
            case 5:
                message.type = 5;
                break;
            case "gattIndication":
            case 6:
                message.type = 6;
                break;
            case "bleAuthenticate":
            case 7:
                message.type = 7;
                break;
            case "bleEncrypt":
            case 8:
                message.type = 8;
                break;
            }
            if (object.deviceMac != null)
                if (typeof object.deviceMac === "string")
                    $util.base64.decode(object.deviceMac, message.deviceMac = $util.newBuffer($util.base64.length(object.deviceMac)), 0);
                else if (object.deviceMac.length)
                    message.deviceMac = object.deviceMac;
            if (object.serviceUuid != null)
                if (typeof object.serviceUuid === "string")
                    $util.base64.decode(object.serviceUuid, message.serviceUuid = $util.newBuffer($util.base64.length(object.serviceUuid)), 0);
                else if (object.serviceUuid.length)
                    message.serviceUuid = object.serviceUuid;
            if (object.characteristicUuid != null)
                if (typeof object.characteristicUuid === "string")
                    $util.base64.decode(object.characteristicUuid, message.characteristicUuid = $util.newBuffer($util.base64.length(object.characteristicUuid)), 0);
                else if (object.characteristicUuid.length)
                    message.characteristicUuid = object.characteristicUuid;
            if (object.timeOut != null)
                message.timeOut = object.timeOut >>> 0;
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length)
                    message.value = object.value;
            if (object.authentication != null) {
                if (typeof object.authentication !== "object")
                    throw TypeError(".aruba_telemetry.Action.authentication: object expected");
                message.authentication = $root.aruba_telemetry.Authentication.fromObject(object.authentication);
            }
            if (object.bondingKey != null) {
                if (typeof object.bondingKey !== "object")
                    throw TypeError(".aruba_telemetry.Action.bondingKey: object expected");
                message.bondingKey = $root.aruba_telemetry.BleBondingKey.fromObject(object.bondingKey);
            }
            if (object.apbMac != null)
                if (typeof object.apbMac === "string")
                    $util.base64.decode(object.apbMac, message.apbMac = $util.newBuffer($util.base64.length(object.apbMac)), 0);
                else if (object.apbMac.length)
                    message.apbMac = object.apbMac;
            return message;
        };

        /**
         * Creates a plain object from an Action message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Action
         * @static
         * @param {aruba_telemetry.Action} message Action
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Action.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.actionId = "";
                object.type = options.enums === String ? "bleConnect" : 0;
                if (options.bytes === String)
                    object.deviceMac = "";
                else {
                    object.deviceMac = [];
                    if (options.bytes !== Array)
                        object.deviceMac = $util.newBuffer(object.deviceMac);
                }
                if (options.bytes === String)
                    object.serviceUuid = "";
                else {
                    object.serviceUuid = [];
                    if (options.bytes !== Array)
                        object.serviceUuid = $util.newBuffer(object.serviceUuid);
                }
                if (options.bytes === String)
                    object.characteristicUuid = "";
                else {
                    object.characteristicUuid = [];
                    if (options.bytes !== Array)
                        object.characteristicUuid = $util.newBuffer(object.characteristicUuid);
                }
                object.timeOut = 0;
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
                object.authentication = null;
                object.bondingKey = null;
                if (options.bytes === String)
                    object.apbMac = "";
                else {
                    object.apbMac = [];
                    if (options.bytes !== Array)
                        object.apbMac = $util.newBuffer(object.apbMac);
                }
            }
            if (message.actionId != null && message.hasOwnProperty("actionId"))
                object.actionId = message.actionId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.aruba_telemetry.ActionType[message.type] : message.type;
            if (message.deviceMac != null && message.hasOwnProperty("deviceMac"))
                object.deviceMac = message.deviceMac;
            if (message.serviceUuid != null && message.hasOwnProperty("serviceUuid"))
                object.serviceUuid = message.serviceUuid;
            if (message.characteristicUuid != null && message.hasOwnProperty("characteristicUuid"))
                object.characteristicUuid = message.characteristicUuid;
            if (message.timeOut != null && message.hasOwnProperty("timeOut"))
                object.timeOut = message.timeOut;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.authentication != null && message.hasOwnProperty("authentication"))
                object.authentication = $root.aruba_telemetry.Authentication.toObject(message.authentication, options);
            if (message.bondingKey != null && message.hasOwnProperty("bondingKey"))
                object.bondingKey = $root.aruba_telemetry.BleBondingKey.toObject(message.bondingKey, options);
            if (message.apbMac != null && message.hasOwnProperty("apbMac"))
                object.apbMac = message.apbMac;
            return object;
        };

        /**
         * Converts this Action to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Action
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Action.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Action;
    })();

    aruba_telemetry.TransportConfig = (function() {

        /**
         * Properties of a TransportConfig.
         * @memberof aruba_telemetry
         * @interface ITransportConfig
         * @property {number|null} [reportingPeriod] TransportConfig reportingPeriod
         * @property {number|null} [cellSize] TransportConfig cellSize
         */

        /**
         * Constructs a new TransportConfig.
         * @memberof aruba_telemetry
         * @classdesc Represents a TransportConfig.
         * @implements ITransportConfig
         * @constructor
         * @param {aruba_telemetry.ITransportConfig=} [properties] Properties to set
         */
        function TransportConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TransportConfig reportingPeriod.
         * @member {number} reportingPeriod
         * @memberof aruba_telemetry.TransportConfig
         * @instance
         */
        TransportConfig.prototype.reportingPeriod = 0;

        /**
         * TransportConfig cellSize.
         * @member {number} cellSize
         * @memberof aruba_telemetry.TransportConfig
         * @instance
         */
        TransportConfig.prototype.cellSize = 0;

        /**
         * Creates a new TransportConfig instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.TransportConfig
         * @static
         * @param {aruba_telemetry.ITransportConfig=} [properties] Properties to set
         * @returns {aruba_telemetry.TransportConfig} TransportConfig instance
         */
        TransportConfig.create = function create(properties) {
            return new TransportConfig(properties);
        };

        /**
         * Encodes the specified TransportConfig message. Does not implicitly {@link aruba_telemetry.TransportConfig.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.TransportConfig
         * @static
         * @param {aruba_telemetry.ITransportConfig} message TransportConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransportConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reportingPeriod != null && message.hasOwnProperty("reportingPeriod"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.reportingPeriod);
            if (message.cellSize != null && message.hasOwnProperty("cellSize"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.cellSize);
            return writer;
        };

        /**
         * Encodes the specified TransportConfig message, length delimited. Does not implicitly {@link aruba_telemetry.TransportConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.TransportConfig
         * @static
         * @param {aruba_telemetry.ITransportConfig} message TransportConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransportConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TransportConfig message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.TransportConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.TransportConfig} TransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransportConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.TransportConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reportingPeriod = reader.uint32();
                    break;
                case 2:
                    message.cellSize = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TransportConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.TransportConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.TransportConfig} TransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransportConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TransportConfig message.
         * @function verify
         * @memberof aruba_telemetry.TransportConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TransportConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reportingPeriod != null && message.hasOwnProperty("reportingPeriod"))
                if (!$util.isInteger(message.reportingPeriod))
                    return "reportingPeriod: integer expected";
            if (message.cellSize != null && message.hasOwnProperty("cellSize"))
                if (!$util.isInteger(message.cellSize))
                    return "cellSize: integer expected";
            return null;
        };

        /**
         * Creates a TransportConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.TransportConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.TransportConfig} TransportConfig
         */
        TransportConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.TransportConfig)
                return object;
            var message = new $root.aruba_telemetry.TransportConfig();
            if (object.reportingPeriod != null)
                message.reportingPeriod = object.reportingPeriod >>> 0;
            if (object.cellSize != null)
                message.cellSize = object.cellSize >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a TransportConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.TransportConfig
         * @static
         * @param {aruba_telemetry.TransportConfig} message TransportConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TransportConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reportingPeriod = 0;
                object.cellSize = 0;
            }
            if (message.reportingPeriod != null && message.hasOwnProperty("reportingPeriod"))
                object.reportingPeriod = message.reportingPeriod;
            if (message.cellSize != null && message.hasOwnProperty("cellSize"))
                object.cellSize = message.cellSize;
            return object;
        };

        /**
         * Converts this TransportConfig to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.TransportConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TransportConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TransportConfig;
    })();

    aruba_telemetry.SbSerialData = (function() {

        /**
         * Properties of a SbSerialData.
         * @memberof aruba_telemetry
         * @interface ISbSerialData
         * @property {string|null} [sbDeviceId] SbSerialData sbDeviceId
         * @property {Uint8Array|null} [sbSerialPayload] SbSerialData sbSerialPayload
         */

        /**
         * Constructs a new SbSerialData.
         * @memberof aruba_telemetry
         * @classdesc Represents a SbSerialData.
         * @implements ISbSerialData
         * @constructor
         * @param {aruba_telemetry.ISbSerialData=} [properties] Properties to set
         */
        function SbSerialData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SbSerialData sbDeviceId.
         * @member {string} sbDeviceId
         * @memberof aruba_telemetry.SbSerialData
         * @instance
         */
        SbSerialData.prototype.sbDeviceId = "";

        /**
         * SbSerialData sbSerialPayload.
         * @member {Uint8Array} sbSerialPayload
         * @memberof aruba_telemetry.SbSerialData
         * @instance
         */
        SbSerialData.prototype.sbSerialPayload = $util.newBuffer([]);

        /**
         * Creates a new SbSerialData instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.SbSerialData
         * @static
         * @param {aruba_telemetry.ISbSerialData=} [properties] Properties to set
         * @returns {aruba_telemetry.SbSerialData} SbSerialData instance
         */
        SbSerialData.create = function create(properties) {
            return new SbSerialData(properties);
        };

        /**
         * Encodes the specified SbSerialData message. Does not implicitly {@link aruba_telemetry.SbSerialData.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.SbSerialData
         * @static
         * @param {aruba_telemetry.ISbSerialData} message SbSerialData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SbSerialData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sbDeviceId != null && message.hasOwnProperty("sbDeviceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sbDeviceId);
            if (message.sbSerialPayload != null && message.hasOwnProperty("sbSerialPayload"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.sbSerialPayload);
            return writer;
        };

        /**
         * Encodes the specified SbSerialData message, length delimited. Does not implicitly {@link aruba_telemetry.SbSerialData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.SbSerialData
         * @static
         * @param {aruba_telemetry.ISbSerialData} message SbSerialData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SbSerialData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SbSerialData message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.SbSerialData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.SbSerialData} SbSerialData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SbSerialData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.SbSerialData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sbDeviceId = reader.string();
                    break;
                case 2:
                    message.sbSerialPayload = reader.bytes().toString('hex');
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SbSerialData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.SbSerialData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.SbSerialData} SbSerialData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SbSerialData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SbSerialData message.
         * @function verify
         * @memberof aruba_telemetry.SbSerialData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SbSerialData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sbDeviceId != null && message.hasOwnProperty("sbDeviceId"))
                if (!$util.isString(message.sbDeviceId))
                    return "sbDeviceId: string expected";
            if (message.sbSerialPayload != null && message.hasOwnProperty("sbSerialPayload"))
                if (!(message.sbSerialPayload && typeof message.sbSerialPayload.length === "number" || $util.isString(message.sbSerialPayload)))
                    return "sbSerialPayload: buffer expected";
            return null;
        };

        /**
         * Creates a SbSerialData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.SbSerialData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.SbSerialData} SbSerialData
         */
        SbSerialData.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.SbSerialData)
                return object;
            var message = new $root.aruba_telemetry.SbSerialData();
            if (object.sbDeviceId != null)
                message.sbDeviceId = String(object.sbDeviceId);
            if (object.sbSerialPayload != null)
                if (typeof object.sbSerialPayload === "string")
                    $util.base64.decode(object.sbSerialPayload, message.sbSerialPayload = $util.newBuffer($util.base64.length(object.sbSerialPayload)), 0);
                else if (object.sbSerialPayload.length)
                    message.sbSerialPayload = object.sbSerialPayload;
            return message;
        };

        /**
         * Creates a plain object from a SbSerialData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.SbSerialData
         * @static
         * @param {aruba_telemetry.SbSerialData} message SbSerialData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SbSerialData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sbDeviceId = "";
                if (options.bytes === String)
                    object.sbSerialPayload = "";
                else {
                    object.sbSerialPayload = [];
                    if (options.bytes !== Array)
                        object.sbSerialPayload = $util.newBuffer(object.sbSerialPayload);
                }
            }
            if (message.sbDeviceId != null && message.hasOwnProperty("sbDeviceId"))
                object.sbDeviceId = message.sbDeviceId;
            if (message.sbSerialPayload != null && message.hasOwnProperty("sbSerialPayload"))
                object.sbSerialPayload = message.sbSerialPayload;
            return object;
        };

        /**
         * Converts this SbSerialData to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.SbSerialData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SbSerialData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SbSerialData;
    })();

    /**
     * ConnectCode enum.
     * @name aruba_telemetry.ConnectCode
     * @enum {string}
     * @property {number} statusOK=0 statusOK value
     * @property {number} tokenExpire=1 tokenExpire value
     */
    aruba_telemetry.ConnectCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "statusOK"] = 0;
        values[valuesById[1] = "tokenExpire"] = 1;
        return values;
    })();

    aruba_telemetry.ConnectStatus = (function() {

        /**
         * Properties of a ConnectStatus.
         * @memberof aruba_telemetry
         * @interface IConnectStatus
         * @property {aruba_telemetry.ConnectCode|null} [connectCode] ConnectStatus connectCode
         * @property {string|null} [connectDescription] ConnectStatus connectDescription
         */

        /**
         * Constructs a new ConnectStatus.
         * @memberof aruba_telemetry
         * @classdesc Represents a ConnectStatus.
         * @implements IConnectStatus
         * @constructor
         * @param {aruba_telemetry.IConnectStatus=} [properties] Properties to set
         */
        function ConnectStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectStatus connectCode.
         * @member {aruba_telemetry.ConnectCode} connectCode
         * @memberof aruba_telemetry.ConnectStatus
         * @instance
         */
        ConnectStatus.prototype.connectCode = 0;

        /**
         * ConnectStatus connectDescription.
         * @member {string} connectDescription
         * @memberof aruba_telemetry.ConnectStatus
         * @instance
         */
        ConnectStatus.prototype.connectDescription = "";

        /**
         * Creates a new ConnectStatus instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.ConnectStatus
         * @static
         * @param {aruba_telemetry.IConnectStatus=} [properties] Properties to set
         * @returns {aruba_telemetry.ConnectStatus} ConnectStatus instance
         */
        ConnectStatus.create = function create(properties) {
            return new ConnectStatus(properties);
        };

        /**
         * Encodes the specified ConnectStatus message. Does not implicitly {@link aruba_telemetry.ConnectStatus.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.ConnectStatus
         * @static
         * @param {aruba_telemetry.IConnectStatus} message ConnectStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.connectCode != null && message.hasOwnProperty("connectCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.connectCode);
            if (message.connectDescription != null && message.hasOwnProperty("connectDescription"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.connectDescription);
            return writer;
        };

        /**
         * Encodes the specified ConnectStatus message, length delimited. Does not implicitly {@link aruba_telemetry.ConnectStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.ConnectStatus
         * @static
         * @param {aruba_telemetry.IConnectStatus} message ConnectStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectStatus message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.ConnectStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.ConnectStatus} ConnectStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.ConnectStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.connectCode = reader.int32();
                    break;
                case 2:
                    message.connectDescription = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.ConnectStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.ConnectStatus} ConnectStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectStatus message.
         * @function verify
         * @memberof aruba_telemetry.ConnectStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.connectCode != null && message.hasOwnProperty("connectCode"))
                switch (message.connectCode) {
                default:
                    return "connectCode: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.connectDescription != null && message.hasOwnProperty("connectDescription"))
                if (!$util.isString(message.connectDescription))
                    return "connectDescription: string expected";
            return null;
        };

        /**
         * Creates a ConnectStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.ConnectStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.ConnectStatus} ConnectStatus
         */
        ConnectStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.ConnectStatus)
                return object;
            var message = new $root.aruba_telemetry.ConnectStatus();
            switch (object.connectCode) {
            case "statusOK":
            case 0:
                message.connectCode = 0;
                break;
            case "tokenExpire":
            case 1:
                message.connectCode = 1;
                break;
            }
            if (object.connectDescription != null)
                message.connectDescription = String(object.connectDescription);
            return message;
        };

        /**
         * Creates a plain object from a ConnectStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.ConnectStatus
         * @static
         * @param {aruba_telemetry.ConnectStatus} message ConnectStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.connectCode = options.enums === String ? "statusOK" : 0;
                object.connectDescription = "";
            }
            if (message.connectCode != null && message.hasOwnProperty("connectCode"))
                object.connectCode = options.enums === String ? $root.aruba_telemetry.ConnectCode[message.connectCode] : message.connectCode;
            if (message.connectDescription != null && message.hasOwnProperty("connectDescription"))
                object.connectDescription = message.connectDescription;
            return object;
        };

        /**
         * Converts this ConnectStatus to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.ConnectStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConnectStatus;
    })();

    aruba_telemetry.ZbSbSend = (function() {

        /**
         * Properties of a ZbSbSend.
         * @memberof aruba_telemetry
         * @interface IZbSbSend
         * @property {string|null} [reqid] ZbSbSend reqid
         * @property {Uint8Array|null} [mac] ZbSbSend mac
         * @property {aruba_telemetry.IZbE2PC|null} [e2pc] ZbSbSend e2pc
         * @property {Uint8Array|null} [payload] ZbSbSend payload
         */

        /**
         * Constructs a new ZbSbSend.
         * @memberof aruba_telemetry
         * @classdesc Represents a ZbSbSend.
         * @implements IZbSbSend
         * @constructor
         * @param {aruba_telemetry.IZbSbSend=} [properties] Properties to set
         */
        function ZbSbSend(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZbSbSend reqid.
         * @member {string} reqid
         * @memberof aruba_telemetry.ZbSbSend
         * @instance
         */
        ZbSbSend.prototype.reqid = "";

        /**
         * ZbSbSend mac.
         * @member {Uint8Array} mac
         * @memberof aruba_telemetry.ZbSbSend
         * @instance
         */
        ZbSbSend.prototype.mac = $util.newBuffer([]);

        /**
         * ZbSbSend e2pc.
         * @member {aruba_telemetry.IZbE2PC|null|undefined} e2pc
         * @memberof aruba_telemetry.ZbSbSend
         * @instance
         */
        ZbSbSend.prototype.e2pc = null;

        /**
         * ZbSbSend payload.
         * @member {Uint8Array} payload
         * @memberof aruba_telemetry.ZbSbSend
         * @instance
         */
        ZbSbSend.prototype.payload = $util.newBuffer([]);

        /**
         * Creates a new ZbSbSend instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.ZbSbSend
         * @static
         * @param {aruba_telemetry.IZbSbSend=} [properties] Properties to set
         * @returns {aruba_telemetry.ZbSbSend} ZbSbSend instance
         */
        ZbSbSend.create = function create(properties) {
            return new ZbSbSend(properties);
        };

        /**
         * Encodes the specified ZbSbSend message. Does not implicitly {@link aruba_telemetry.ZbSbSend.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.ZbSbSend
         * @static
         * @param {aruba_telemetry.IZbSbSend} message ZbSbSend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbSbSend.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reqid);
            if (message.mac != null && message.hasOwnProperty("mac"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.mac);
            if (message.e2pc != null && message.hasOwnProperty("e2pc"))
                $root.aruba_telemetry.ZbE2PC.encode(message.e2pc, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.payload != null && message.hasOwnProperty("payload"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.payload);
            return writer;
        };

        /**
         * Encodes the specified ZbSbSend message, length delimited. Does not implicitly {@link aruba_telemetry.ZbSbSend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.ZbSbSend
         * @static
         * @param {aruba_telemetry.IZbSbSend} message ZbSbSend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbSbSend.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZbSbSend message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.ZbSbSend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.ZbSbSend} ZbSbSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbSbSend.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.ZbSbSend();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqid = reader.string();
                    break;
                case 2:
                    message.mac = reader.bytes().toString('hex');
                    break;
                case 3:
                    message.e2pc = $root.aruba_telemetry.ZbE2PC.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.payload = reader.bytes().toString('hex');
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZbSbSend message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.ZbSbSend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.ZbSbSend} ZbSbSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbSbSend.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZbSbSend message.
         * @function verify
         * @memberof aruba_telemetry.ZbSbSend
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZbSbSend.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                if (!$util.isString(message.reqid))
                    return "reqid: string expected";
            if (message.mac != null && message.hasOwnProperty("mac"))
                if (!(message.mac && typeof message.mac.length === "number" || $util.isString(message.mac)))
                    return "mac: buffer expected";
            if (message.e2pc != null && message.hasOwnProperty("e2pc")) {
                var error = $root.aruba_telemetry.ZbE2PC.verify(message.e2pc);
                if (error)
                    return "e2pc." + error;
            }
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };

        /**
         * Creates a ZbSbSend message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.ZbSbSend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.ZbSbSend} ZbSbSend
         */
        ZbSbSend.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.ZbSbSend)
                return object;
            var message = new $root.aruba_telemetry.ZbSbSend();
            if (object.reqid != null)
                message.reqid = String(object.reqid);
            if (object.mac != null)
                if (typeof object.mac === "string")
                    $util.base64.decode(object.mac, message.mac = $util.newBuffer($util.base64.length(object.mac)), 0);
                else if (object.mac.length)
                    message.mac = object.mac;
            if (object.e2pc != null) {
                if (typeof object.e2pc !== "object")
                    throw TypeError(".aruba_telemetry.ZbSbSend.e2pc: object expected");
                message.e2pc = $root.aruba_telemetry.ZbE2PC.fromObject(object.e2pc);
            }
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };

        /**
         * Creates a plain object from a ZbSbSend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.ZbSbSend
         * @static
         * @param {aruba_telemetry.ZbSbSend} message ZbSbSend
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZbSbSend.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reqid = "";
                if (options.bytes === String)
                    object.mac = "";
                else {
                    object.mac = [];
                    if (options.bytes !== Array)
                        object.mac = $util.newBuffer(object.mac);
                }
                object.e2pc = null;
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                object.reqid = message.reqid;
            if (message.mac != null && message.hasOwnProperty("mac"))
                object.mac = message.mac;
            if (message.e2pc != null && message.hasOwnProperty("e2pc"))
                object.e2pc = $root.aruba_telemetry.ZbE2PC.toObject(message.e2pc, options);
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = message.payload;
            return object;
        };

        /**
         * Converts this ZbSbSend to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.ZbSbSend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZbSbSend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZbSbSend;
    })();

    aruba_telemetry.ZbSbRead = (function() {

        /**
         * Properties of a ZbSbRead.
         * @memberof aruba_telemetry
         * @interface IZbSbRead
         * @property {string|null} [reqid] ZbSbRead reqid
         */

        /**
         * Constructs a new ZbSbRead.
         * @memberof aruba_telemetry
         * @classdesc Represents a ZbSbRead.
         * @implements IZbSbRead
         * @constructor
         * @param {aruba_telemetry.IZbSbRead=} [properties] Properties to set
         */
        function ZbSbRead(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZbSbRead reqid.
         * @member {string} reqid
         * @memberof aruba_telemetry.ZbSbRead
         * @instance
         */
        ZbSbRead.prototype.reqid = "";

        /**
         * Creates a new ZbSbRead instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.ZbSbRead
         * @static
         * @param {aruba_telemetry.IZbSbRead=} [properties] Properties to set
         * @returns {aruba_telemetry.ZbSbRead} ZbSbRead instance
         */
        ZbSbRead.create = function create(properties) {
            return new ZbSbRead(properties);
        };

        /**
         * Encodes the specified ZbSbRead message. Does not implicitly {@link aruba_telemetry.ZbSbRead.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.ZbSbRead
         * @static
         * @param {aruba_telemetry.IZbSbRead} message ZbSbRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbSbRead.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reqid);
            return writer;
        };

        /**
         * Encodes the specified ZbSbRead message, length delimited. Does not implicitly {@link aruba_telemetry.ZbSbRead.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.ZbSbRead
         * @static
         * @param {aruba_telemetry.IZbSbRead} message ZbSbRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbSbRead.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZbSbRead message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.ZbSbRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.ZbSbRead} ZbSbRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbSbRead.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.ZbSbRead();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZbSbRead message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.ZbSbRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.ZbSbRead} ZbSbRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbSbRead.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZbSbRead message.
         * @function verify
         * @memberof aruba_telemetry.ZbSbRead
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZbSbRead.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                if (!$util.isString(message.reqid))
                    return "reqid: string expected";
            return null;
        };

        /**
         * Creates a ZbSbRead message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.ZbSbRead
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.ZbSbRead} ZbSbRead
         */
        ZbSbRead.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.ZbSbRead)
                return object;
            var message = new $root.aruba_telemetry.ZbSbRead();
            if (object.reqid != null)
                message.reqid = String(object.reqid);
            return message;
        };

        /**
         * Creates a plain object from a ZbSbRead message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.ZbSbRead
         * @static
         * @param {aruba_telemetry.ZbSbRead} message ZbSbRead
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZbSbRead.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reqid = "";
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                object.reqid = message.reqid;
            return object;
        };

        /**
         * Converts this ZbSbRead to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.ZbSbRead
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZbSbRead.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZbSbRead;
    })();

    aruba_telemetry.ZbSbWrite = (function() {

        /**
         * Properties of a ZbSbWrite.
         * @memberof aruba_telemetry
         * @interface IZbSbWrite
         * @property {string|null} [reqid] ZbSbWrite reqid
         */

        /**
         * Constructs a new ZbSbWrite.
         * @memberof aruba_telemetry
         * @classdesc Represents a ZbSbWrite.
         * @implements IZbSbWrite
         * @constructor
         * @param {aruba_telemetry.IZbSbWrite=} [properties] Properties to set
         */
        function ZbSbWrite(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZbSbWrite reqid.
         * @member {string} reqid
         * @memberof aruba_telemetry.ZbSbWrite
         * @instance
         */
        ZbSbWrite.prototype.reqid = "";

        /**
         * Creates a new ZbSbWrite instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.ZbSbWrite
         * @static
         * @param {aruba_telemetry.IZbSbWrite=} [properties] Properties to set
         * @returns {aruba_telemetry.ZbSbWrite} ZbSbWrite instance
         */
        ZbSbWrite.create = function create(properties) {
            return new ZbSbWrite(properties);
        };

        /**
         * Encodes the specified ZbSbWrite message. Does not implicitly {@link aruba_telemetry.ZbSbWrite.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.ZbSbWrite
         * @static
         * @param {aruba_telemetry.IZbSbWrite} message ZbSbWrite message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbSbWrite.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reqid);
            return writer;
        };

        /**
         * Encodes the specified ZbSbWrite message, length delimited. Does not implicitly {@link aruba_telemetry.ZbSbWrite.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.ZbSbWrite
         * @static
         * @param {aruba_telemetry.IZbSbWrite} message ZbSbWrite message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbSbWrite.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZbSbWrite message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.ZbSbWrite
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.ZbSbWrite} ZbSbWrite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbSbWrite.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.ZbSbWrite();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZbSbWrite message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.ZbSbWrite
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.ZbSbWrite} ZbSbWrite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbSbWrite.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZbSbWrite message.
         * @function verify
         * @memberof aruba_telemetry.ZbSbWrite
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZbSbWrite.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                if (!$util.isString(message.reqid))
                    return "reqid: string expected";
            return null;
        };

        /**
         * Creates a ZbSbWrite message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.ZbSbWrite
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.ZbSbWrite} ZbSbWrite
         */
        ZbSbWrite.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.ZbSbWrite)
                return object;
            var message = new $root.aruba_telemetry.ZbSbWrite();
            if (object.reqid != null)
                message.reqid = String(object.reqid);
            return message;
        };

        /**
         * Creates a plain object from a ZbSbWrite message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.ZbSbWrite
         * @static
         * @param {aruba_telemetry.ZbSbWrite} message ZbSbWrite
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZbSbWrite.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reqid = "";
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                object.reqid = message.reqid;
            return object;
        };

        /**
         * Converts this ZbSbWrite to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.ZbSbWrite
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZbSbWrite.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZbSbWrite;
    })();

    aruba_telemetry.ZbSbAction = (function() {

        /**
         * Properties of a ZbSbAction.
         * @memberof aruba_telemetry
         * @interface IZbSbAction
         * @property {string|null} [reqid] ZbSbAction reqid
         */

        /**
         * Constructs a new ZbSbAction.
         * @memberof aruba_telemetry
         * @classdesc Represents a ZbSbAction.
         * @implements IZbSbAction
         * @constructor
         * @param {aruba_telemetry.IZbSbAction=} [properties] Properties to set
         */
        function ZbSbAction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZbSbAction reqid.
         * @member {string} reqid
         * @memberof aruba_telemetry.ZbSbAction
         * @instance
         */
        ZbSbAction.prototype.reqid = "";

        /**
         * Creates a new ZbSbAction instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.ZbSbAction
         * @static
         * @param {aruba_telemetry.IZbSbAction=} [properties] Properties to set
         * @returns {aruba_telemetry.ZbSbAction} ZbSbAction instance
         */
        ZbSbAction.create = function create(properties) {
            return new ZbSbAction(properties);
        };

        /**
         * Encodes the specified ZbSbAction message. Does not implicitly {@link aruba_telemetry.ZbSbAction.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.ZbSbAction
         * @static
         * @param {aruba_telemetry.IZbSbAction} message ZbSbAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbSbAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reqid);
            return writer;
        };

        /**
         * Encodes the specified ZbSbAction message, length delimited. Does not implicitly {@link aruba_telemetry.ZbSbAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.ZbSbAction
         * @static
         * @param {aruba_telemetry.IZbSbAction} message ZbSbAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbSbAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZbSbAction message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.ZbSbAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.ZbSbAction} ZbSbAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbSbAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.ZbSbAction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZbSbAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.ZbSbAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.ZbSbAction} ZbSbAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbSbAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZbSbAction message.
         * @function verify
         * @memberof aruba_telemetry.ZbSbAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZbSbAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                if (!$util.isString(message.reqid))
                    return "reqid: string expected";
            return null;
        };

        /**
         * Creates a ZbSbAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.ZbSbAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.ZbSbAction} ZbSbAction
         */
        ZbSbAction.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.ZbSbAction)
                return object;
            var message = new $root.aruba_telemetry.ZbSbAction();
            if (object.reqid != null)
                message.reqid = String(object.reqid);
            return message;
        };

        /**
         * Creates a plain object from a ZbSbAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.ZbSbAction
         * @static
         * @param {aruba_telemetry.ZbSbAction} message ZbSbAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZbSbAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reqid = "";
            if (message.reqid != null && message.hasOwnProperty("reqid"))
                object.reqid = message.reqid;
            return object;
        };

        /**
         * Converts this ZbSbAction to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.ZbSbAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZbSbAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZbSbAction;
    })();

    aruba_telemetry.ZbSbReq = (function() {

        /**
         * Properties of a ZbSbReq.
         * @memberof aruba_telemetry
         * @interface IZbSbReq
         * @property {aruba_telemetry.IZbSbRead|null} [read] ZbSbReq read
         * @property {aruba_telemetry.IZbSbWrite|null} [write] ZbSbReq write
         * @property {aruba_telemetry.IZbSbAction|null} [action] ZbSbReq action
         */

        /**
         * Constructs a new ZbSbReq.
         * @memberof aruba_telemetry
         * @classdesc Represents a ZbSbReq.
         * @implements IZbSbReq
         * @constructor
         * @param {aruba_telemetry.IZbSbReq=} [properties] Properties to set
         */
        function ZbSbReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZbSbReq read.
         * @member {aruba_telemetry.IZbSbRead|null|undefined} read
         * @memberof aruba_telemetry.ZbSbReq
         * @instance
         */
        ZbSbReq.prototype.read = null;

        /**
         * ZbSbReq write.
         * @member {aruba_telemetry.IZbSbWrite|null|undefined} write
         * @memberof aruba_telemetry.ZbSbReq
         * @instance
         */
        ZbSbReq.prototype.write = null;

        /**
         * ZbSbReq action.
         * @member {aruba_telemetry.IZbSbAction|null|undefined} action
         * @memberof aruba_telemetry.ZbSbReq
         * @instance
         */
        ZbSbReq.prototype.action = null;

        /**
         * Creates a new ZbSbReq instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.ZbSbReq
         * @static
         * @param {aruba_telemetry.IZbSbReq=} [properties] Properties to set
         * @returns {aruba_telemetry.ZbSbReq} ZbSbReq instance
         */
        ZbSbReq.create = function create(properties) {
            return new ZbSbReq(properties);
        };

        /**
         * Encodes the specified ZbSbReq message. Does not implicitly {@link aruba_telemetry.ZbSbReq.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.ZbSbReq
         * @static
         * @param {aruba_telemetry.IZbSbReq} message ZbSbReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbSbReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.read != null && message.hasOwnProperty("read"))
                $root.aruba_telemetry.ZbSbRead.encode(message.read, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.write != null && message.hasOwnProperty("write"))
                $root.aruba_telemetry.ZbSbWrite.encode(message.write, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.action != null && message.hasOwnProperty("action"))
                $root.aruba_telemetry.ZbSbAction.encode(message.action, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ZbSbReq message, length delimited. Does not implicitly {@link aruba_telemetry.ZbSbReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.ZbSbReq
         * @static
         * @param {aruba_telemetry.IZbSbReq} message ZbSbReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZbSbReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZbSbReq message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.ZbSbReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.ZbSbReq} ZbSbReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbSbReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.ZbSbReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.read = $root.aruba_telemetry.ZbSbRead.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.write = $root.aruba_telemetry.ZbSbWrite.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.action = $root.aruba_telemetry.ZbSbAction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZbSbReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.ZbSbReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.ZbSbReq} ZbSbReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZbSbReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZbSbReq message.
         * @function verify
         * @memberof aruba_telemetry.ZbSbReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZbSbReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.read != null && message.hasOwnProperty("read")) {
                var error = $root.aruba_telemetry.ZbSbRead.verify(message.read);
                if (error)
                    return "read." + error;
            }
            if (message.write != null && message.hasOwnProperty("write")) {
                var error = $root.aruba_telemetry.ZbSbWrite.verify(message.write);
                if (error)
                    return "write." + error;
            }
            if (message.action != null && message.hasOwnProperty("action")) {
                var error = $root.aruba_telemetry.ZbSbAction.verify(message.action);
                if (error)
                    return "action." + error;
            }
            return null;
        };

        /**
         * Creates a ZbSbReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.ZbSbReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.ZbSbReq} ZbSbReq
         */
        ZbSbReq.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.ZbSbReq)
                return object;
            var message = new $root.aruba_telemetry.ZbSbReq();
            if (object.read != null) {
                if (typeof object.read !== "object")
                    throw TypeError(".aruba_telemetry.ZbSbReq.read: object expected");
                message.read = $root.aruba_telemetry.ZbSbRead.fromObject(object.read);
            }
            if (object.write != null) {
                if (typeof object.write !== "object")
                    throw TypeError(".aruba_telemetry.ZbSbReq.write: object expected");
                message.write = $root.aruba_telemetry.ZbSbWrite.fromObject(object.write);
            }
            if (object.action != null) {
                if (typeof object.action !== "object")
                    throw TypeError(".aruba_telemetry.ZbSbReq.action: object expected");
                message.action = $root.aruba_telemetry.ZbSbAction.fromObject(object.action);
            }
            return message;
        };

        /**
         * Creates a plain object from a ZbSbReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.ZbSbReq
         * @static
         * @param {aruba_telemetry.ZbSbReq} message ZbSbReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZbSbReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.read = null;
                object.write = null;
                object.action = null;
            }
            if (message.read != null && message.hasOwnProperty("read"))
                object.read = $root.aruba_telemetry.ZbSbRead.toObject(message.read, options);
            if (message.write != null && message.hasOwnProperty("write"))
                object.write = $root.aruba_telemetry.ZbSbWrite.toObject(message.write, options);
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = $root.aruba_telemetry.ZbSbAction.toObject(message.action, options);
            return object;
        };

        /**
         * Converts this ZbSbReq to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.ZbSbReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZbSbReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZbSbReq;
    })();

    aruba_telemetry.SbZbMsg = (function() {

        /**
         * Properties of a SbZbMsg.
         * @memberof aruba_telemetry
         * @interface ISbZbMsg
         * @property {Uint8Array|null} [radio_mac] SbZbMsg radio_mac
         * @property {aruba_telemetry.IZbSbSend|null} [send] SbZbMsg send
         * @property {aruba_telemetry.IZbSbReq|null} [request] SbZbMsg request
         */

        /**
         * Constructs a new SbZbMsg.
         * @memberof aruba_telemetry
         * @classdesc Represents a SbZbMsg.
         * @implements ISbZbMsg
         * @constructor
         * @param {aruba_telemetry.ISbZbMsg=} [properties] Properties to set
         */
        function SbZbMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SbZbMsg radio_mac.
         * @member {Uint8Array} radio_mac
         * @memberof aruba_telemetry.SbZbMsg
         * @instance
         */
        SbZbMsg.prototype.radio_mac = $util.newBuffer([]);

        /**
         * SbZbMsg send.
         * @member {aruba_telemetry.IZbSbSend|null|undefined} send
         * @memberof aruba_telemetry.SbZbMsg
         * @instance
         */
        SbZbMsg.prototype.send = null;

        /**
         * SbZbMsg request.
         * @member {aruba_telemetry.IZbSbReq|null|undefined} request
         * @memberof aruba_telemetry.SbZbMsg
         * @instance
         */
        SbZbMsg.prototype.request = null;

        /**
         * Creates a new SbZbMsg instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.SbZbMsg
         * @static
         * @param {aruba_telemetry.ISbZbMsg=} [properties] Properties to set
         * @returns {aruba_telemetry.SbZbMsg} SbZbMsg instance
         */
        SbZbMsg.create = function create(properties) {
            return new SbZbMsg(properties);
        };

        /**
         * Encodes the specified SbZbMsg message. Does not implicitly {@link aruba_telemetry.SbZbMsg.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.SbZbMsg
         * @static
         * @param {aruba_telemetry.ISbZbMsg} message SbZbMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SbZbMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.radio_mac != null && message.hasOwnProperty("radio_mac"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.radio_mac);
            if (message.send != null && message.hasOwnProperty("send"))
                $root.aruba_telemetry.ZbSbSend.encode(message.send, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.request != null && message.hasOwnProperty("request"))
                $root.aruba_telemetry.ZbSbReq.encode(message.request, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SbZbMsg message, length delimited. Does not implicitly {@link aruba_telemetry.SbZbMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.SbZbMsg
         * @static
         * @param {aruba_telemetry.ISbZbMsg} message SbZbMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SbZbMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SbZbMsg message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.SbZbMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.SbZbMsg} SbZbMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SbZbMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.SbZbMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.radio_mac = reader.bytes().toString('hex');
                    break;
                case 2:
                    message.send = $root.aruba_telemetry.ZbSbSend.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.request = $root.aruba_telemetry.ZbSbReq.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SbZbMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.SbZbMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.SbZbMsg} SbZbMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SbZbMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SbZbMsg message.
         * @function verify
         * @memberof aruba_telemetry.SbZbMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SbZbMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.radio_mac != null && message.hasOwnProperty("radio_mac"))
                if (!(message.radio_mac && typeof message.radio_mac.length === "number" || $util.isString(message.radio_mac)))
                    return "radio_mac: buffer expected";
            if (message.send != null && message.hasOwnProperty("send")) {
                var error = $root.aruba_telemetry.ZbSbSend.verify(message.send);
                if (error)
                    return "send." + error;
            }
            if (message.request != null && message.hasOwnProperty("request")) {
                var error = $root.aruba_telemetry.ZbSbReq.verify(message.request);
                if (error)
                    return "request." + error;
            }
            return null;
        };

        /**
         * Creates a SbZbMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.SbZbMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.SbZbMsg} SbZbMsg
         */
        SbZbMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.SbZbMsg)
                return object;
            var message = new $root.aruba_telemetry.SbZbMsg();
            if (object.radio_mac != null)
                if (typeof object.radio_mac === "string")
                    $util.base64.decode(object.radio_mac, message.radio_mac = $util.newBuffer($util.base64.length(object.radio_mac)), 0);
                else if (object.radio_mac.length)
                    message.radio_mac = object.radio_mac;
            if (object.send != null) {
                if (typeof object.send !== "object")
                    throw TypeError(".aruba_telemetry.SbZbMsg.send: object expected");
                message.send = $root.aruba_telemetry.ZbSbSend.fromObject(object.send);
            }
            if (object.request != null) {
                if (typeof object.request !== "object")
                    throw TypeError(".aruba_telemetry.SbZbMsg.request: object expected");
                message.request = $root.aruba_telemetry.ZbSbReq.fromObject(object.request);
            }
            return message;
        };

        /**
         * Creates a plain object from a SbZbMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.SbZbMsg
         * @static
         * @param {aruba_telemetry.SbZbMsg} message SbZbMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SbZbMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.radio_mac = "";
                else {
                    object.radio_mac = [];
                    if (options.bytes !== Array)
                        object.radio_mac = $util.newBuffer(object.radio_mac);
                }
                object.send = null;
                object.request = null;
            }
            if (message.radio_mac != null && message.hasOwnProperty("radio_mac"))
                object.radio_mac = message.radio_mac;
            if (message.send != null && message.hasOwnProperty("send"))
                object.send = $root.aruba_telemetry.ZbSbSend.toObject(message.send, options);
            if (message.request != null && message.hasOwnProperty("request"))
                object.request = $root.aruba_telemetry.ZbSbReq.toObject(message.request, options);
            return object;
        };

        /**
         * Converts this SbZbMsg to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.SbZbMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SbZbMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SbZbMsg;
    })();

    aruba_telemetry.Receiver = (function() {

        /**
         * Properties of a Receiver.
         * @memberof aruba_telemetry
         * @interface IReceiver
         * @property {boolean|null} [all] Receiver all
         * @property {Uint8Array|null} [apMac] Receiver apMac
         */

        /**
         * Constructs a new Receiver.
         * @memberof aruba_telemetry
         * @classdesc Represents a Receiver.
         * @implements IReceiver
         * @constructor
         * @param {aruba_telemetry.IReceiver=} [properties] Properties to set
         */
        function Receiver(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Receiver all.
         * @member {boolean} all
         * @memberof aruba_telemetry.Receiver
         * @instance
         */
        Receiver.prototype.all = false;

        /**
         * Receiver apMac.
         * @member {Uint8Array} apMac
         * @memberof aruba_telemetry.Receiver
         * @instance
         */
        Receiver.prototype.apMac = $util.newBuffer([]);

        /**
         * Creates a new Receiver instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.Receiver
         * @static
         * @param {aruba_telemetry.IReceiver=} [properties] Properties to set
         * @returns {aruba_telemetry.Receiver} Receiver instance
         */
        Receiver.create = function create(properties) {
            return new Receiver(properties);
        };

        /**
         * Encodes the specified Receiver message. Does not implicitly {@link aruba_telemetry.Receiver.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.Receiver
         * @static
         * @param {aruba_telemetry.IReceiver} message Receiver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Receiver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.all != null && message.hasOwnProperty("all"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.all);
            if (message.apMac != null && message.hasOwnProperty("apMac"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.apMac);
            return writer;
        };

        /**
         * Encodes the specified Receiver message, length delimited. Does not implicitly {@link aruba_telemetry.Receiver.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.Receiver
         * @static
         * @param {aruba_telemetry.IReceiver} message Receiver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Receiver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Receiver message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.Receiver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.Receiver} Receiver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Receiver.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.Receiver();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.all = reader.bool();
                    break;
                case 2:
                    message.apMac = reader.bytes().toString('hex');
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Receiver message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.Receiver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.Receiver} Receiver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Receiver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Receiver message.
         * @function verify
         * @memberof aruba_telemetry.Receiver
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Receiver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.all != null && message.hasOwnProperty("all"))
                if (typeof message.all !== "boolean")
                    return "all: boolean expected";
            if (message.apMac != null && message.hasOwnProperty("apMac"))
                if (!(message.apMac && typeof message.apMac.length === "number" || $util.isString(message.apMac)))
                    return "apMac: buffer expected";
            return null;
        };

        /**
         * Creates a Receiver message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.Receiver
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.Receiver} Receiver
         */
        Receiver.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.Receiver)
                return object;
            var message = new $root.aruba_telemetry.Receiver();
            if (object.all != null)
                message.all = Boolean(object.all);
            if (object.apMac != null)
                if (typeof object.apMac === "string")
                    $util.base64.decode(object.apMac, message.apMac = $util.newBuffer($util.base64.length(object.apMac)), 0);
                else if (object.apMac.length)
                    message.apMac = object.apMac;
            return message;
        };

        /**
         * Creates a plain object from a Receiver message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.Receiver
         * @static
         * @param {aruba_telemetry.Receiver} message Receiver
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Receiver.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.all = false;
                if (options.bytes === String)
                    object.apMac = "";
                else {
                    object.apMac = [];
                    if (options.bytes !== Array)
                        object.apMac = $util.newBuffer(object.apMac);
                }
            }
            if (message.all != null && message.hasOwnProperty("all"))
                object.all = message.all;
            if (message.apMac != null && message.hasOwnProperty("apMac"))
                object.apMac = message.apMac;
            return object;
        };

        /**
         * Converts this Receiver to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.Receiver
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Receiver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Receiver;
    })();

    aruba_telemetry.IotSbMessage = (function() {

        /**
         * Properties of an IotSbMessage.
         * @memberof aruba_telemetry
         * @interface IIotSbMessage
         * @property {aruba_telemetry.IMeta} meta IotSbMessage meta
         * @property {aruba_telemetry.IReceiver|null} [receiver] IotSbMessage receiver
         * @property {Array.<aruba_telemetry.IAction>|null} [actions] IotSbMessage actions
         * @property {aruba_telemetry.ITransportConfig|null} [config] IotSbMessage config
         * @property {aruba_telemetry.IConnectStatus|null} [status] IotSbMessage status
         * @property {aruba_telemetry.ISbZbMsg|null} [zigbee] IotSbMessage zigbee
         * @property {Array.<aruba_telemetry.ISbSerialData>|null} [sbSData] IotSbMessage sbSData
         */

        /**
         * Constructs a new IotSbMessage.
         * @memberof aruba_telemetry
         * @classdesc Represents an IotSbMessage.
         * @implements IIotSbMessage
         * @constructor
         * @param {aruba_telemetry.IIotSbMessage=} [properties] Properties to set
         */
        function IotSbMessage(properties) {
            this.actions = [];
            this.sbSData = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IotSbMessage meta.
         * @member {aruba_telemetry.IMeta} meta
         * @memberof aruba_telemetry.IotSbMessage
         * @instance
         */
        IotSbMessage.prototype.meta = null;

        /**
         * IotSbMessage receiver.
         * @member {aruba_telemetry.IReceiver|null|undefined} receiver
         * @memberof aruba_telemetry.IotSbMessage
         * @instance
         */
        IotSbMessage.prototype.receiver = null;

        /**
         * IotSbMessage actions.
         * @member {Array.<aruba_telemetry.IAction>} actions
         * @memberof aruba_telemetry.IotSbMessage
         * @instance
         */
        IotSbMessage.prototype.actions = $util.emptyArray;

        /**
         * IotSbMessage config.
         * @member {aruba_telemetry.ITransportConfig|null|undefined} config
         * @memberof aruba_telemetry.IotSbMessage
         * @instance
         */
        IotSbMessage.prototype.config = null;

        /**
         * IotSbMessage status.
         * @member {aruba_telemetry.IConnectStatus|null|undefined} status
         * @memberof aruba_telemetry.IotSbMessage
         * @instance
         */
        IotSbMessage.prototype.status = null;

        /**
         * IotSbMessage zigbee.
         * @member {aruba_telemetry.ISbZbMsg|null|undefined} zigbee
         * @memberof aruba_telemetry.IotSbMessage
         * @instance
         */
        IotSbMessage.prototype.zigbee = null;

        /**
         * IotSbMessage sbSData.
         * @member {Array.<aruba_telemetry.ISbSerialData>} sbSData
         * @memberof aruba_telemetry.IotSbMessage
         * @instance
         */
        IotSbMessage.prototype.sbSData = $util.emptyArray;

        /**
         * Creates a new IotSbMessage instance using the specified properties.
         * @function create
         * @memberof aruba_telemetry.IotSbMessage
         * @static
         * @param {aruba_telemetry.IIotSbMessage=} [properties] Properties to set
         * @returns {aruba_telemetry.IotSbMessage} IotSbMessage instance
         */
        IotSbMessage.create = function create(properties) {
            return new IotSbMessage(properties);
        };

        /**
         * Encodes the specified IotSbMessage message. Does not implicitly {@link aruba_telemetry.IotSbMessage.verify|verify} messages.
         * @function encode
         * @memberof aruba_telemetry.IotSbMessage
         * @static
         * @param {aruba_telemetry.IIotSbMessage} message IotSbMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IotSbMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.aruba_telemetry.Meta.encode(message.meta, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.receiver != null && message.hasOwnProperty("receiver"))
                $root.aruba_telemetry.Receiver.encode(message.receiver, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.actions != null && message.actions.length)
                for (var i = 0; i < message.actions.length; ++i)
                    $root.aruba_telemetry.Action.encode(message.actions[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.config != null && message.hasOwnProperty("config"))
                $root.aruba_telemetry.TransportConfig.encode(message.config, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.status != null && message.hasOwnProperty("status"))
                $root.aruba_telemetry.ConnectStatus.encode(message.status, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.zigbee != null && message.hasOwnProperty("zigbee"))
                $root.aruba_telemetry.SbZbMsg.encode(message.zigbee, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.sbSData != null && message.sbSData.length)
                for (var i = 0; i < message.sbSData.length; ++i)
                    $root.aruba_telemetry.SbSerialData.encode(message.sbSData[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IotSbMessage message, length delimited. Does not implicitly {@link aruba_telemetry.IotSbMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof aruba_telemetry.IotSbMessage
         * @static
         * @param {aruba_telemetry.IIotSbMessage} message IotSbMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IotSbMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IotSbMessage message from the specified reader or buffer.
         * @function decode
         * @memberof aruba_telemetry.IotSbMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {aruba_telemetry.IotSbMessage} IotSbMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IotSbMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aruba_telemetry.IotSbMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.meta = $root.aruba_telemetry.Meta.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.receiver = $root.aruba_telemetry.Receiver.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.actions && message.actions.length))
                        message.actions = [];
                    message.actions.push($root.aruba_telemetry.Action.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.config = $root.aruba_telemetry.TransportConfig.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.status = $root.aruba_telemetry.ConnectStatus.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.zigbee = $root.aruba_telemetry.SbZbMsg.decode(reader, reader.uint32());
                    break;
                case 7:
                    if (!(message.sbSData && message.sbSData.length))
                        message.sbSData = [];
                    message.sbSData.push($root.aruba_telemetry.SbSerialData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("meta"))
                throw $util.ProtocolError("missing required 'meta'", { instance: message });
            return message;
        };

        /**
         * Decodes an IotSbMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof aruba_telemetry.IotSbMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {aruba_telemetry.IotSbMessage} IotSbMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IotSbMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IotSbMessage message.
         * @function verify
         * @memberof aruba_telemetry.IotSbMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IotSbMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.aruba_telemetry.Meta.verify(message.meta);
                if (error)
                    return "meta." + error;
            }
            if (message.receiver != null && message.hasOwnProperty("receiver")) {
                var error = $root.aruba_telemetry.Receiver.verify(message.receiver);
                if (error)
                    return "receiver." + error;
            }
            if (message.actions != null && message.hasOwnProperty("actions")) {
                if (!Array.isArray(message.actions))
                    return "actions: array expected";
                for (var i = 0; i < message.actions.length; ++i) {
                    var error = $root.aruba_telemetry.Action.verify(message.actions[i]);
                    if (error)
                        return "actions." + error;
                }
            }
            if (message.config != null && message.hasOwnProperty("config")) {
                var error = $root.aruba_telemetry.TransportConfig.verify(message.config);
                if (error)
                    return "config." + error;
            }
            if (message.status != null && message.hasOwnProperty("status")) {
                var error = $root.aruba_telemetry.ConnectStatus.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.zigbee != null && message.hasOwnProperty("zigbee")) {
                var error = $root.aruba_telemetry.SbZbMsg.verify(message.zigbee);
                if (error)
                    return "zigbee." + error;
            }
            if (message.sbSData != null && message.hasOwnProperty("sbSData")) {
                if (!Array.isArray(message.sbSData))
                    return "sbSData: array expected";
                for (var i = 0; i < message.sbSData.length; ++i) {
                    var error = $root.aruba_telemetry.SbSerialData.verify(message.sbSData[i]);
                    if (error)
                        return "sbSData." + error;
                }
            }
            return null;
        };

        /**
         * Creates an IotSbMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof aruba_telemetry.IotSbMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {aruba_telemetry.IotSbMessage} IotSbMessage
         */
        IotSbMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.aruba_telemetry.IotSbMessage)
                return object;
            var message = new $root.aruba_telemetry.IotSbMessage();
            if (object.meta != null) {
                if (typeof object.meta !== "object")
                    throw TypeError(".aruba_telemetry.IotSbMessage.meta: object expected");
                message.meta = $root.aruba_telemetry.Meta.fromObject(object.meta);
            }
            if (object.receiver != null) {
                if (typeof object.receiver !== "object")
                    throw TypeError(".aruba_telemetry.IotSbMessage.receiver: object expected");
                message.receiver = $root.aruba_telemetry.Receiver.fromObject(object.receiver);
            }
            if (object.actions) {
                if (!Array.isArray(object.actions))
                    throw TypeError(".aruba_telemetry.IotSbMessage.actions: array expected");
                message.actions = [];
                for (var i = 0; i < object.actions.length; ++i) {
                    if (typeof object.actions[i] !== "object")
                        throw TypeError(".aruba_telemetry.IotSbMessage.actions: object expected");
                    message.actions[i] = $root.aruba_telemetry.Action.fromObject(object.actions[i]);
                }
            }
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".aruba_telemetry.IotSbMessage.config: object expected");
                message.config = $root.aruba_telemetry.TransportConfig.fromObject(object.config);
            }
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".aruba_telemetry.IotSbMessage.status: object expected");
                message.status = $root.aruba_telemetry.ConnectStatus.fromObject(object.status);
            }
            if (object.zigbee != null) {
                if (typeof object.zigbee !== "object")
                    throw TypeError(".aruba_telemetry.IotSbMessage.zigbee: object expected");
                message.zigbee = $root.aruba_telemetry.SbZbMsg.fromObject(object.zigbee);
            }
            if (object.sbSData) {
                if (!Array.isArray(object.sbSData))
                    throw TypeError(".aruba_telemetry.IotSbMessage.sbSData: array expected");
                message.sbSData = [];
                for (var i = 0; i < object.sbSData.length; ++i) {
                    if (typeof object.sbSData[i] !== "object")
                        throw TypeError(".aruba_telemetry.IotSbMessage.sbSData: object expected");
                    message.sbSData[i] = $root.aruba_telemetry.SbSerialData.fromObject(object.sbSData[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an IotSbMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof aruba_telemetry.IotSbMessage
         * @static
         * @param {aruba_telemetry.IotSbMessage} message IotSbMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IotSbMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.actions = [];
                object.sbSData = [];
            }
            if (options.defaults) {
                object.meta = null;
                object.receiver = null;
                object.config = null;
                object.status = null;
                object.zigbee = null;
            }
            if (message.meta != null && message.hasOwnProperty("meta"))
                object.meta = $root.aruba_telemetry.Meta.toObject(message.meta, options);
            if (message.receiver != null && message.hasOwnProperty("receiver"))
                object.receiver = $root.aruba_telemetry.Receiver.toObject(message.receiver, options);
            if (message.actions && message.actions.length) {
                object.actions = [];
                for (var j = 0; j < message.actions.length; ++j)
                    object.actions[j] = $root.aruba_telemetry.Action.toObject(message.actions[j], options);
            }
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = $root.aruba_telemetry.TransportConfig.toObject(message.config, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.aruba_telemetry.ConnectStatus.toObject(message.status, options);
            if (message.zigbee != null && message.hasOwnProperty("zigbee"))
                object.zigbee = $root.aruba_telemetry.SbZbMsg.toObject(message.zigbee, options);
            if (message.sbSData && message.sbSData.length) {
                object.sbSData = [];
                for (var j = 0; j < message.sbSData.length; ++j)
                    object.sbSData[j] = $root.aruba_telemetry.SbSerialData.toObject(message.sbSData[j], options);
            }
            return object;
        };

        /**
         * Converts this IotSbMessage to JSON.
         * @function toJSON
         * @memberof aruba_telemetry.IotSbMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IotSbMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IotSbMessage;
    })();

    return aruba_telemetry;
})();

module.exports = $root;
