import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Use base path only for production (GitHub Pages)
  // In development, use root path
  base: command === 'build' ? '/sidmi-website/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
}))
