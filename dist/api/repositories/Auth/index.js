"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("@/config/prisma"));
const findUserByEmail = async (email) => {
    return await prisma_1.default.user.findUnique({
        where: {
            email
        }
    });
};
const findUserByEmailOrUsername = async (email, username) => {
    return await prisma_1.default.user.findFirst({
        where: {
            OR: [
                { email },
                { username }
            ]
        }
    });
};
const createUser = async (username, email, password) => {
    return await prisma_1.default.user.create({
        data: {
            username,
            email,
            password
        }
    });
};
exports.default = {
    findUserByEmail,
    findUserByEmailOrUsername,
    createUser
};
//# sourceMappingURL=index.js.map