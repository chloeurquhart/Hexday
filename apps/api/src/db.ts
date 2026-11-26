import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.ts";

const connectionString = process.env["DATABASE_URL"];
if (!connectionString) {
  throw new Error("DATABASE_URL is not set. Copy .env.example to .env in the repo root.");
}

const adapter = new PrismaPg({ connectionString });

export const prisma = new PrismaClient({ adapter });


/** Runs the simplest possible query. Returns false instead of throwing if the database is unreachable. */
export async function checkDatabase(): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch {
    return false;
  }
}
