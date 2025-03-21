// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Activate SSR
  output: "server",

  vite: {
      plugins: [tailwindcss()], 
  },

  adapter: vercel(),
});
