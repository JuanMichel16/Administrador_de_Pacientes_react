import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@interfaces': path.resolve(__dirname, 'interfaces'),
      '@schemas' : path.resolve(__dirname, 'schemas')
    },
  },
})
