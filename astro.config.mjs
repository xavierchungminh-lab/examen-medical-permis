import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://examen-medical-permis.ch',
  integrations: [sitemap()],
  compressHTML: true,
});
