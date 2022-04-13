"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaTest = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const prismaTest = async (req, res) => {
    res.json('...hello!!');
};
exports.prismaTest = prismaTest;
