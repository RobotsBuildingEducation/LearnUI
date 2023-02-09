import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
  },

  define: {
    global: {},
    "process.env": {},
  },

  resolve: {
    alias: {
      url: "url",
      os: "os-browserify",
    },
  },
});
