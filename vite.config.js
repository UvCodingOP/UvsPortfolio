import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'; // Import the plugin
import commonjs from 'vite-plugin-commonjs'; // Import the commonjs plugin
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    glsl(), // Add the glsl plugin
    commonjs({
      include: ['node_modules/controlkit/**', 'node_modules/sheryjs/**']
    }) // Add the commonjs plugin
  ],
  assetsInclude: ['**/*.glsl'],
  resolve: {
    alias: {
      'controlkit': path.resolve(__dirname, 'node_modules/controlkit/index.js')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  define: {
    global: 'globalThis'
  },
  server: {
    fs: {
      allow: ['..']
    }
  },
  optimizeDeps: {
    exclude: ['sheryjs'],
    include: ['three', 'controlkit'],
    esbuildOptions: {
      target: 'es2020'
    }
  },
  build: {
    rollupOptions: {
      external: ['sheryjs']
    }
  }
})