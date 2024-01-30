"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Auth_1 = require("@/api/validations/Auth");
const http_status_codes_1 = require("http-status-codes");
const login = (req, res) => {
    try {
        const result = Auth_1.LoginSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(result.error);
        }
        const { email, password } = result.data;
    }
    catch (error) {
        // Handle other errors
        console.log("Auth/Login Error: ", error.message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(error.message);
    }
};
const register = (req, res) => {
};
exports.default = {
    login, register
};
//# sourceMappingURL=index.js.map