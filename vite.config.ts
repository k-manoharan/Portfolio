import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages deploys to: https://k-manoharan.github.io/portfolio/
// The base must match the repository name for asset paths to resolve correctly.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
})
