import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Use root base '/' by default for Vercel and local dev
  // Only use '/sidmi-website/' if explicitly targeting GitHub Pages
  const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages';

  return {
    base: isGitHubPages ? '/sidmi-website/' : '/',
    server: {
      host: '0.0.0.0',
      port: 5173,
      strictPort: true,
    },
    plugins: [
      react(),
      tailwindcss(),
    ],
  };
})
