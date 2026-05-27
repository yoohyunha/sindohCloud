import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL || "https://sindoh-cloud.pages.dev",
  integrations: [sitemap()],
  output: "static"
});
