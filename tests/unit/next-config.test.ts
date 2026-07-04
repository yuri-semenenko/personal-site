import { afterEach, describe, expect, it, vi } from "vitest";
import nextConfig from "../../next.config";

async function getContentSecurityPolicy() {
  const headerRoutes = await nextConfig.headers?.();
  const headers = headerRoutes?.flatMap((route) => route.headers) ?? [];
  const header = headers.find((item) => item.key === "Content-Security-Policy");

  if (!header) throw new Error("Content-Security-Policy header is not configured");

  return header.value;
}

describe("next config security headers", () => {
  afterEach(() => vi.unstubAllEnvs());

  it("allows unsafe-eval only in development CSP", async () => {
    vi.stubEnv("NODE_ENV", "development");
    await expect(getContentSecurityPolicy()).resolves.toContain("'unsafe-eval'");

    vi.stubEnv("NODE_ENV", "production");
    await expect(getContentSecurityPolicy()).resolves.not.toContain("'unsafe-eval'");
  });
});
