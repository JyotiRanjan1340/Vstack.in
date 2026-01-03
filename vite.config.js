import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'public/about.html'),
        products: resolve(__dirname, 'public/products.html'),
        team: resolve(__dirname, 'public/team.html'),
        'why-us': resolve(__dirname, 'public/why-us.html')
      }
    }
  }
})
