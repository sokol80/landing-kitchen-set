// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/', // Используем корень сайта как базу для корректной работы dev-сервера
  root: 'src',

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/assets/components'),
      '@images': resolve(__dirname, 'src/assets/images'),
      '@styles': resolve(__dirname, 'src/assets/styles'),
      '@pages': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
    assetsDir: 'assets',
    minify: 'terser',
    cssMinify: true,
  },
  server: {
    port: 3000,
    open: '/',
    trailingSlash: 'never',
  },
  css: {
    devSourcemap: true,
  },
  publicDir: resolve(__dirname, 'public'),
});
