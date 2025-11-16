import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://oliver-jaeger.de',
  base: '/geo',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  output: 'static',
});
