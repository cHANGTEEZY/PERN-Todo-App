import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/todos": "http://localhost:3000",
      "/register": "http://localhost:3000",
      "/signin": "http://localhost:3000",
    },
  },
  build: {
    outDir: "build",
  },
});
