// frontend/vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api/shopping': {
        target: 'http://shopping-nginx',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/shopping/, '/api')
      },
      '/api/order': {
        target: 'http://order-nginx',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/order/, '/api')
      }
    }
  }
})