import { defineConfig } from 'vite'
import { resolve } from 'pathe'
import vue from '@vitejs/plugin-vue'

/**
 * Vite configuration for library build
 *
 * @doc https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^@vuescape\/vuescape\//,
        replacement: `${resolve(__dirname)}/src/`,
      },
    ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'main.ts'),
      name: 'VueScape',
      filename: format => `vuescape.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['dist', 'lib', 'package', 'scripts'],
  },
})
