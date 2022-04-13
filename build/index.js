"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const colors_1 = __importDefault(require("colors"));
const logDecoration_1 = __importDefault(require("./util/logDecoration"));
dotenv_1.default.config();
colors_1.default.enable();
const app = (0, express_1.default)();
const port = process.env.PORT || "3825";
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
// api routes go here
app.use('/api/test', require('./routes/testRoutes'));
// server
app.listen(port, () => {
    (0, logDecoration_1.default)(port);
});
