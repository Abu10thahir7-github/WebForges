import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { default as compare } from 'react-fast-compare';
// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['react-fast-compare'], // force Vite to pre-bundle it correctly
  },
  plugins: [react()],
  server: {
    host: true, // Enable network access

  }
})
