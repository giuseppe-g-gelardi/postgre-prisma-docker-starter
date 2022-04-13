"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("colors"));
colors_1.default.enable();
function connectMessage(serverPort) {
    console.log(`=====================================`.rainbow);
    console.log("🚀" + " " + "App listening on the port:".dim + " " + `${serverPort}`.italic.cyan + " " + "🚀");
    console.log(`=====================================`.rainbow);
}
exports.default = connectMessage;
