import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Plain Vite + React setup. No router, no UI library - see project brief.
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 }
})
