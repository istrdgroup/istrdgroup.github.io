// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

const site = process.env.CI
  ? "https://istrdgroup.github.io"
  : "http://localhost:4321";

// https://astro.build/config
export default defineConfig({
  site,
  base: "/",
  output: "static",
  integrations: [react()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
