import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'
import commonjs from 'vite-plugin-commonjs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    glsl(),
    commonjs({
      include: ['node_modules/controlkit/**', 'node_modules/sheryjs/**']
    })
  ],
  assetsInclude: ['**/*.glsl'],
  resolve: {
    alias: {
      'controlkit': path.resolve(__dirname, 'node_modules/controlkit/index.js'),
      'three': path.resolve(__dirname, 'node_modules/three')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  define: {
    global: 'globalThis',
    'process.env': {}
  },
  server: {
    fs: {
      allow: ['..']
    }
  },
  optimizeDeps: {
    include: ['three', 'controlkit', 'gsap'],
    exclude: ['sheryjs'],
    esbuildOptions: {
      target: 'es2020'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          gsap: ['gsap']
        }
      }
    }
  }
})