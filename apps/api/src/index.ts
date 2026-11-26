import "./env.ts";

import { buildApp } from "./app.ts";
import { checkDatabase, prisma } from "./db.ts";

const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? "127.0.0.1";

const app = buildApp({ checkDatabase });

// Close database connections cleanly when the server shuts down.
app.addHook("onClose", async () => {
  await prisma.$disconnect();
});

try {
  await app.listen({ port, host });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
