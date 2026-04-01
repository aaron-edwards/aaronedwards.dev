import path from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      "@workspace/ui": path.resolve(__dirname, "../../packages/ui/src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    include: [
      "__tests__/**/*.{test,spec}.{ts,tsx}",
      "**/__tests__/**/*.{test,spec}.{ts,tsx}",
    ],
    setupFiles: ["__tests__/setup.ts"],
  },
})
