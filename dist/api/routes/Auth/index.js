"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_1 = __importDefault(require("@/api/controllers/Auth"));
const router = (0, express_1.Router)();
router.post("/login", Auth_1.default.login);
router.post("/register", Auth_1.default.register);
exports.default = router;
//# sourceMappingURL=index.js.map