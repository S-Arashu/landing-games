import { defineConfig } from "vite";

export default defineConfig({
  base: "/", // просто слеш заменить на '/my-repo/' если деплой будет на GitHub Pages
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "oxc",
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
