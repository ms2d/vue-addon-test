import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    base: './',
    open: true, // open in browser right away
    host: true, // listen on any IP that Docker wants to assign to it
  },
})
