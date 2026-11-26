import Fastify, { type FastifyInstance } from "fastify";
import type { HealthResponse } from "@hexday/shared";


export interface AppDependencies {
  /** Resolves true if the database answers, false if it doesn't. */
  checkDatabase: () => Promise<boolean>;
}


export function buildApp(deps: AppDependencies): FastifyInstance {
  const app = Fastify({ logger: true });

  app.get("/health", async (_request, reply): Promise<HealthResponse> => {
    const databaseIsUp = await deps.checkDatabase();

    if (!databaseIsUp) {
      reply.code(503);
      return { status: "degraded", database: "disconnected" };
    }

    return { status: "ok", database: "connected" };
  });

  return app;
}
