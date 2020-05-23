"use strict";
// /src/api/client.js
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var axios_1 = __importDefault(require("axios"));
var camelcase_keys_1 = __importDefault(require("camelcase-keys"));
var SPLA2_API = "https://spla2.yuu26.com/";
exports.client = axios_1.default.create({
    baseURL: SPLA2_API,
    headers: {
        "Content-Type": "application/json",
    },
});
exports.client.interceptors.response.use(function (response) {
    var data = camelcase_keys_1.default(response.data, { deep: true });
    return __assign(__assign({}, response.data), { data: data });
});
