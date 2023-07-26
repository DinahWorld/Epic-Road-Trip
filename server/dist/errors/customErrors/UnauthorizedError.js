"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusCode_1 = __importDefault(require("../statusCode"));
class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Unauthorized';
        this.status = statusCode_1.default.UNAUTHORIZED;
    }
}
exports.default = UnauthorizedError;
