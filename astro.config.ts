// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const site = process.env.CI
  ? "https://istrdgroup.github.io"
  : "http://localhost:4321";

// https://astro.build/config
export default defineConfig({
  site,
  base: "/",
  output: "static",
  integrations: [tailwind()],
});
