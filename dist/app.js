"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register"); // 👈 add this one
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const user_router_1 = __importDefault(require("./api/routes/user-router"));
const app = (0, express_1.default)();
const PORT = 8000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, compression_1.default)());
app.use((0, helmet_1.default)());
app.use((0, cookie_parser_1.default)());
app.get("/api", (req, res) => {
    return res.send("Hello Typescript");
});
app.use("/api/users", user_router_1.default);
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}/api`);
});
//# sourceMappingURL=app.js.map