"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToSlackTextMsg = exports.convertDateTime = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
var utc_1 = __importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.extend(utc_1.default);
exports.convertDateTime = function (unixtime) {
    return dayjs_1.default(unixtime * 1000).utcOffset(9).format("YYYY/MM/DD HH:mm:ss");
};
exports.sendToSlackTextMsg = function (text) {
    return {
        type: "section",
        text: {
            type: "mrkdwn",
            text: "" + text,
        },
    };
};
