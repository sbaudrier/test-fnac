import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import path from 'path'

export default defineConfig({
  root: './',
  base: '/test-fnac/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    devSourcemap: true
  },
  plugins: [
    handlebars({ partialDirectory: 'src/partials' }),
    {
      name: 'hbs-hmr',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.hbs')) {
          server.ws.send({ type: 'full-reload', path: '*' })
        }
      }
    }
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100,
      ignored: false
    }
  }
})
