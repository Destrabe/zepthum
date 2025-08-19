import { defineConfig } from "astro/config";
import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  server: {
    port: 3000,
  },
});
