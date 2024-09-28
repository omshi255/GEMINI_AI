import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'  // Ensure your output directory is "dist" if it's the default
  },
  server: {
    open: true
  }
});
