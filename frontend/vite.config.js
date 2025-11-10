import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  optimizeDeps: {
    include: ['svelte'],
    exclude: []
  },
  server: {
    fs: {
      // Allow serving files from one level up from the package root
      allow: ['..']
    }
  }
});
