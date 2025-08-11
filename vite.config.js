import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 自定义端口
    open: true  // 自动打开浏览器
  },
  resolve: {
    alias: {
      '@': '/src' // 设置路径别名
    }
  }
})
