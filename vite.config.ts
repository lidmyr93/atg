import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@api": resolve(__dirname, "./src/api"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@queries": resolve(__dirname, "./src/queries"),
      "@routes": resolve(__dirname, "./src/routes"),
    },
  },
});
