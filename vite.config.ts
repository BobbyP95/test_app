import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [
    react(),
    ghPages({
      branch: 'gh-pages', // Ensure this matches your GitHub Pages branch
      dotfiles: true, // Include dotfiles (e.g., .nojekyll)
    }),
  ],
  base: '/test_app/', // Correct for custom domains
  build: {
    outDir: 'dist', // Ensure the build outputs to the 'dist' folder
    emptyOutDir: true, // Clear the output directory before building
  },
});