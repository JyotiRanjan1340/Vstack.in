import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // If your html files are in the repository root, leave root as default.
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        products: resolve(__dirname, 'products.html'),
        team: resolve(__dirname, 'team.html'),
        'why-us': resolve(__dirname, 'why-us.html')
      }
    }
  }
})
