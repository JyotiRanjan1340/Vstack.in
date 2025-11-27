import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        team: resolve(__dirname, 'team.html'),
        products: resolve(__dirname, 'products.html'),
        'why-us': resolve(__dirname, 'why-us.html')
      }
    }
  }
})
