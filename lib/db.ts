import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

// Memeriksa apakah klien Prisma sudah ada di global scope
const db = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = db; // Memperbaiki NODE.ENV menjadi NODE_ENV

export default db;
