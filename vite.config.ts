import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/Items": {
        target: "http://mrmr12-001-site1.otempurl.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
