"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const setup_server_1 = __importDefault(require("./config/setup-server"));
const User_1 = __importDefault(require("@/api/routes/User"));
const Auth_1 = __importDefault(require("@/api/routes/Auth"));
const constants_1 = require("./config/constants");
setup_server_1.default.get("/api", (req, res) => {
    return res.send("Hello Typescript");
});
setup_server_1.default.use("/api/users", User_1.default);
setup_server_1.default.use("/api/auth", Auth_1.default);
setup_server_1.default.listen(constants_1.PORT, () => {
    console.log(`Server listening on port http://localhost:${constants_1.PORT}/api`);
});
//# sourceMappingURL=app.js.map