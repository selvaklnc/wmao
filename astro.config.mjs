import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// RSS helper
import rss from "@astrojs/rss";

export default defineConfig({
  site: "https://www.wikimint.com",
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      entryLimit: 5000,
      sitemapName: "sitemap.xml", // force filename
    }),
  ],
  markdown: {
    remarkPlugins: [
      [
        "remark-toc",
        {
          heading: null,   // no extra "Table of contents" heading
          tight: true,     // cleaner <ul>
        }
      ]
    ]
  }
});
