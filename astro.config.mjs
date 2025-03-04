// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Activate SSR
  output: "server",
  adapter: cloudflare(),
  vite: {
      plugins: [tailwindcss()], 
  },
});
