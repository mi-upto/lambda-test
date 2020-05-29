"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWhenText = exports.isRequestParameter = void 0;
exports.isRequestParameter = function (value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    return 'text' in value;
};
exports.isWhenText = function (value) {
    if (value === "now" || value === "next") {
        return true;
    }
    return false;
};
