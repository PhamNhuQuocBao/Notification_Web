import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000, // Use $PORT or fallback to 3000
  },
})
