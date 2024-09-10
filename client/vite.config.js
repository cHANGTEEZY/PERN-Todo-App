import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/todos": "https://changteezy.onrender.com",
      "/register": "https://changteezy.onrender.com",
      "/signin": "https://changteezy.onrender.com",
    },
  },
  build: {
    outDir: "build",
  },
});
