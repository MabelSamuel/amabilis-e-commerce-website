import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/amabilis-e-commerce-website/',
  build: {
    chunkSizeWarningLimit: 1000, // Increase limit to 1 MB
  },
})
