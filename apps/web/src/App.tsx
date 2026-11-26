import { useEffect, useState } from "react";
import type { HealthResponse } from "@hexday/shared";

type ConnectionState = "checking" | "connected" | "unavailable";

export function App() {
  const [apiState, setApiState] = useState<ConnectionState>("checking");
  const [databaseState, setDatabaseState] = useState<ConnectionState>("checking");

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/health", { signal: controller.signal })
      .then(async (response) => {
        // The API answers with JSON even when the database is down (HTTP 503),
        // so read the body before deciding what to show.
        const body = (await response.json()) as HealthResponse;
        setApiState("connected");
        setDatabaseState(body.database === "connected" ? "connected" : "unavailable");
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setApiState("unavailable");
        setDatabaseState("unavailable");
      });

    return () => controller.abort();
  }, []);

  return (
    <main className="shell">
      <h1 className="wordmark">Hexday</h1>
      <p className="tagline">A calm planner for busy bees.</p>
      <div className="statuses" role="status">
        <p className="status" data-state={apiState}>
          API: {apiState}
        </p>
        <p className="status" data-state={databaseState}>
          Database: {databaseState}
        </p>
      </div>
    </main>
  );
}
