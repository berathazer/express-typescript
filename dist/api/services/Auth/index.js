"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("@/api/repositories/User"));
const auth_1 = require("@/api/utils/auth");
const loginHandler = async (email, password) => {
    try {
        const user = await User_1.default.findUserByEmail(email);
        if (!user) {
            throw new Error("User not found");
        }
        const isAuthenticated = await (0, auth_1.comparePassword)(password, user.password);
        if (!isAuthenticated) {
            throw new Error("Invalid password");
        }
        const token = (0, auth_1.generateJwtToken)(user);
        return token;
    }
    catch (error) {
        throw error;
    }
};
const registerHandler = async (username, email, password) => {
    try {
        const user = await User_1.default.findUserByEmailOrUsername(email, username);
        if (user) {
            throw new Error("User already exists");
        }
        const hashedPassword = await (0, auth_1.encryptPassword)(password);
        return await User_1.default.createUser(username, email, hashedPassword);
    }
    catch (error) {
        throw error;
    }
};
exports.default = {
    loginHandler,
    registerHandler
};
//# sourceMappingURL=index.js.map