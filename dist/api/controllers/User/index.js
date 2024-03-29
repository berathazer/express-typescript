"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("@/api/repositories/User"));
const getUsers = async (req, res) => {
    const users = await User_1.default.getUsers();
    return res.json({ users, currentUser: req.query.user });
};
exports.default = {
    getUsers
};
//# sourceMappingURL=index.js.map