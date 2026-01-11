// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://dakkang03.github.io",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
  content: {
    collections: ["projects"],
  },
});
