import { useEffect, useState } from "react";
import type { HealthResponse } from "@hexday/shared";

type ApiState = "checking" | "connected" | "unavailable";

export function App() {
  const [apiState, setApiState] = useState<ApiState>("checking");

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/health", { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const body = (await response.json()) as HealthResponse;
        setApiState(body.status === "ok" ? "connected" : "unavailable");
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setApiState("unavailable");
      });

    return () => controller.abort();
  }, []);

  return (
    <main className="shell">
      <h1 className="wordmark">Hexday</h1>
      <p className="tagline">A calm planner for busy bees.</p>
      <p className="status" data-state={apiState} role="status">
        API: {apiState}
      </p>
    </main>
  );
}
