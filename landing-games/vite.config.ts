import { defineConfig } from "vite";

export default defineConfig({
  base: "/landing-games", // просто слеш заменить на '/my-repo/' если деплой будет на GitHub Pages
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
  },
  server: {
    port: 3000,
    open: true,
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
