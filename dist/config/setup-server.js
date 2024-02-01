"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const logging_middleware_1 = require("@/api/middlewares/logging-middleware");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
app.use(logging_middleware_1.loggingMiddleware);
exports.default = app;
//# sourceMappingURL=setup-server.js.map