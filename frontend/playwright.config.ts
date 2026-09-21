import { defineConfig, devices } from "@playwright/test";
import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Load the repository-root `.env`, the same file `tests/config.ts` reads.
 *
 * `process.loadEnvFile` is Node's built-in reader, so nothing here depends on
 * `dotenv` — which was never a declared dependency of this workspace and only
 * resolved by hoisting. The file is optional because CI puts these values in
 * the environment directly, and `loadEnvFile` throws when it is missing.
 */
const envFile = path.resolve(import.meta.dirname, "../.env");
if (existsSync(envFile)) {
  process.loadEnvFile(envFile);
}

/**
 * Playwright configuration. See https://app-lbe-doc.vercel.app/testing.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "Microsoft Edge",
      use: { ...devices["Desktop Edge"], channel: "msedge" },
    },
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12"] },
    },
  ],
  webServer: {
    command: "vp dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
  },
});
