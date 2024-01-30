"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJwtToken = exports.comparePassword = exports.encryptPassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const encryptPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcryptjs_1.default.hash(password, saltRounds);
    return hashedPassword;
};
exports.encryptPassword = encryptPassword;
const comparePassword = async (password, hashedPassword) => {
    const isMatch = await bcryptjs_1.default.compare(password, hashedPassword);
    return isMatch;
};
exports.comparePassword = comparePassword;
const generateJwtToken = (user) => {
    const tokenValue = {
        id: user.id,
        email: user.email,
        role: user.role,
        username: user.username
    };
    return jsonwebtoken_1.default.sign(tokenValue, process.env.JWT_SECRET_KEY, { expiresIn: "1m" });
};
exports.generateJwtToken = generateJwtToken;
//# sourceMappingURL=auth.js.map