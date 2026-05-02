import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Proxy API calls to your backend during development
    proxy: {
      '/chat': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});
