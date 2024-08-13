import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://pedrovelasquez9.github.io",
    base: "/astro-test",
    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"],
        routing: {
            prefixDefaultLocale: true
        }
    }
});
