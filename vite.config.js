import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: './',
  server: {
    host: true,

    watch: {
      usePolling: true,
      interval: 100
    },

    hmr: {
      clientPort: 5173
    }
  }
})
