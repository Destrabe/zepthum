import { defineConfig } from "astro/config";
import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  vite: {
    define: {
      __APP_VERSION__: JSON.stringify("1.0.0"),
    },
    server: {
      proxy: {
        "/api": import.meta.env.PUBLIC_API_URL ?? "http://localhost:3000",
      },
    },
  },
});
