import Fastify, { type FastifyInstance } from "fastify";
import type { HealthResponse } from "@hexday/shared";

/**
 * Builds the Fastify app without starting a server, so tests can exercise
 * routes in-process with `app.inject()`.
 */
export function buildApp(): FastifyInstance {
  const app = Fastify({ logger: true });

  app.get("/health", async (): Promise<HealthResponse> => {
    return { status: "ok" };
  });

  return app;
}
