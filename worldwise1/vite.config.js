import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin({
    cache: false, // 只在开发环境中禁用缓存
    cacheLocation: '.cache/type-check',
  })],
})
