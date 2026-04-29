import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  base: '/design-system/',
  build: {
    outDir: resolve(__dirname, '../../public/design-system'),
    emptyOutDir: true,
    sourcemap: true,
  },
  server: { port: 5173 },
});
