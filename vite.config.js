import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the output dir from dist to build
  build: {
    outDir: "build",
  },
  plugins: [
    react({
      jsxRuntime: 'classic'
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3005',
        changeOrigin: true,
      },
    },
  },
});
