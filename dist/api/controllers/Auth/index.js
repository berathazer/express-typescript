"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Auth_1 = __importDefault(require("@/api/services/Auth"));
const Auth_2 = require("@/api/validations/Auth");
const http_status_codes_1 = require("http-status-codes");
const login = async (req, res) => {
    try {
        const result = Auth_2.LoginSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(result.error);
        }
        const { email, password } = result.data;
        const token = await Auth_1.default.loginHandler(email, password);
        return res.status(http_status_codes_1.StatusCodes.OK).json({ token });
    }
    catch (error) {
        console.log("Auth/Login Error: ", error.message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(error.message);
    }
};
const register = async (req, res) => {
    try {
        const result = Auth_2.RegisterSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(result.error);
        }
        const { email, password, username } = result.data;
        const user = await Auth_1.default.registerHandler(username, email, password);
        return res.status(http_status_codes_1.StatusCodes.OK).json({ user });
    }
    catch (error) {
        console.log("Auth/Register Error: ", error.message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(error.message);
    }
};
exports.default = {
    login, register
};
//# sourceMappingURL=index.js.map