import { defineConfig } from "astro/config";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "dracula",
      },
      remarkPlugins: [remarkToc],
      remarkRehype: {
        footnoteLabel: "Footnotes",
      },
      gfm: false,
    }),
    tailwind(),
  ],
});
