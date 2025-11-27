import { defineConfig } from 'vite'

export default defineConfig({
  root: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'public/index.html',
        about: 'public/about.html',
        'why-us': 'public/why-us.html',
        team: 'public/team.html',
        products: 'public/products.html'
      }
    }
  }
})
