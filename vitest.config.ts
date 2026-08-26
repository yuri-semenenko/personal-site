import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "happy-dom",
    include: ["tests/unit/**/*.test.{ts,tsx}"],
    globals: false,
    restoreMocks: true,
    clearMocks: true,
    // Node 25 turns its experimental Web Storage API on by default, so
    // globalThis.localStorage already exists when the test environment is built.
    // vitest's populateGlobal leaves an existing global alone unless the name is
    // on its own hardcoded key list, and localStorage is not on it — so Node's
    // stub (an empty object, no --localstorage-file given) shadows happy-dom's
    // Storage and every call throws "localStorage.clear is not a function".
    // Dropping the Node globals hands those names back to happy-dom.
    // TRADEOFF(ceiling: this is Node's experimental spelling of the flag, so it
    // disappears when Web Storage stabilises; upgrade: delete the line once
    // vitest lists localStorage in populateGlobal's keys): accepted on Node 22,
    // 24 and 25, and CI pins 24.
    execArgv: ["--no-experimental-webstorage"],
  },
});
