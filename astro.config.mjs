import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  vite: {
    server: {
      // Permitir cualquier host de Cloudflare Tunnel
      allowedHosts: [
        "localhost",
        "127.0.0.1",
        ".trycloudflare.com", // <= permite todos los subdominios dinámicos
      ],
    },
  },
});
