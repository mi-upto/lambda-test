"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerPost = exports.handlerNext = exports.handlerNow = void 0;
var api_client_1 = require("./api-client");
function handlerNow(event) {
    return __awaiter(this, void 0, void 0, function () {
        var responseData, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    responseData = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api_client_1.client.get("/league/now")];
                case 2:
                    data = (_a.sent()).data;
                    responseData = data;
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, {
                        statusCode: 200,
                        body: JSON.stringify({
                            responseData: responseData,
                        }),
                    }];
            }
        });
    });
}
exports.handlerNow = handlerNow;
function handlerNext(event) {
    return __awaiter(this, void 0, void 0, function () {
        var responseData, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    responseData = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api_client_1.client.get("/league/next")];
                case 2:
                    data = (_a.sent()).data;
                    responseData = data;
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    console.log(e_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, {
                        statusCode: 200,
                        body: JSON.stringify({
                            responseData: responseData,
                        }),
                    }];
            }
        });
    });
}
exports.handlerNext = handlerNext;
function handlerPost(event) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("starting handlerPost", event);
            return [2 /*return*/, {
                    statusCode: 200,
                    body: JSON.stringify({
                        response_type: "in_channel",
                        blocks: [
                            {
                                type: "section",
                                text: {
                                    type: "mrkdwn",
                                    text: "現在 `ガチホコバトル` 開催中！",
                                },
                            },
                            {
                                type: "context",
                                elements: [
                                    {
                                        type: "mrkdwn",
                                        text: "*Map:* モズク農園, アンチョビットゲームズ",
                                    },
                                ],
                            },
                            {
                                type: "image",
                                title: {
                                    type: "plain_text",
                                    text: "モズク農園",
                                    emoji: true,
                                },
                                image_url: "https://app.splatoon2.nintendo.net/images/stage/a12e4bf9f871677a5f3735d421317fbbf09e1a78.png",
                                alt_text: "モズク農園",
                            },
                            {
                                type: "image",
                                title: {
                                    type: "plain_text",
                                    text: "アンチョビットゲームズ",
                                    emoji: true,
                                },
                                image_url: "https://app.splatoon2.nintendo.net/images/stage/1430e5ac7ae9396a126078eeab824a186b490b5a.png",
                                alt_text: "アンチョビットゲームズ",
                            },
                        ],
                    }),
                }];
        });
    });
}
exports.handlerPost = handlerPost;
