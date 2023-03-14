import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend' // setup name 增强
import { resolve, join } from 'path'
import { deleteall } from './util/util'
import { createStyleImportPlugin, VxeTableResolve } from 'vite-plugin-style-import'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import terser from '@rollup/plugin-terser'
import { createHtmlPlugin } from 'vite-plugin-html'

deleteall('./dist') // 打包前先移除dist文件夹

// https://vitejs.dev/config/
export default ({ mode, command }) => {
  const env = loadEnv(mode, `${process.cwd()}/src/pages`)
  return defineConfig({
    mode: 'esnext',
    root: './src/pages/',
    base: env.VITE_APP_BASE_URL,
    publicDir: '../../public',

    plugins: [
      vue(),
      VueSetupExtend(),
      splitVendorChunkPlugin(),
      ElementPlusResolver({ importStyle: 'sass' }),
      // createHtmlPlugin({
      //   minify: true,
      //   pages: [
      //     {
      //       entry: '/main/main.ts',
      //       filename: 'index.html',
      //       template: '/main/index.html',
      //       injectOptions: {
      //         data: {
      //           title: 666
      //         }
      //       }
      //     }
      //   ]
      // })
    ],

    server: {
      host: '0.0.0.0',
      port: 3000,
      strictPort: false,
      open: '/index.html'
    },

    resolve: {
      alias: {
        '@': join(__dirname, 'src'),
        '@p': join(__dirname, 'src/pages'),
        '@c': join(__dirname, 'src/common'),
        '@a': join(__dirname, 'src/assets'),
        '@s': join(__dirname, 'src/store'),
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'] // 忽略.vue后缀
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "cctc-epc/theme/index.scss" as *;`
          // additionalData: `@use "@a/css/index.scss" as *;`
        }
      }
    },

    build: {
      target: 'esnext',
      outDir: '../../dist',
      assetsDir: '../../assets',
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      sourcemap: false,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/pages/main/index.html'),
        },
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        },
        plugins: [
          createStyleImportPlugin({
            resolves: [VxeTableResolve()]
          }),
          terser()
        ]
      }
    }
  })
}
