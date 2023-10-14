import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    base: "/shreeji/",
    plugins: [react()],
  };

  if (command !== "serve") {
    config.base = "/react-vite-gh-pages/";
  }

  return config;
});
