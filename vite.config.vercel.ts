import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel build target: disable Cloudflare-specific build plugin.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
  },
});
