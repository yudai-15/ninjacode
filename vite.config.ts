import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  css: {
    transformer: "lightningcss",
    lightningcss: {
      drafts: {
        customMedia: true,
      },
      targets: browserslistToTargets(browserslist(">= 0.25%")),
    },
  },
  build: {
    cssMinify: "lightningcss",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested_01: resolve(__dirname, "nested_01/index.html"),
        nested_02: resolve(__dirname, "nested_02/index.html"),
      },
    },
    watch: {
      // https://rollupjs.org/configuration-options/#watch
    },
  },
});
