"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterSchema = exports.LoginSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.LoginSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6).max(100)
});
exports.RegisterSchema = zod_1.default.object({
    username: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6).max(100),
});
//# sourceMappingURL=index.js.map