import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom Domain: https://manoharank.me/
// With a custom root domain on GitHub Pages, the base path is '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
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
