import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      redirectToDefaultLocale: true,
      prefixDefaultLocale: true
    }
  }
  // output: "server",
  // adapter: node({
  //   mode: "standalone"
  // })
});