import { fileURLToPath } from "node:url";
import { config } from "dotenv";

// Load the repo-root .env for local development.
// If the file doesn't exist (e.g. in CI or production), real environment variables are used instead.
config({ path: fileURLToPath(new URL("../../../.env", import.meta.url)), quiet: true });
