import { fileURLToPath } from 'node:url'
import { build, InlineConfig } from 'vite'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import vue from '@vitejs/plugin-vue'

import * as pkg from '../package.json'

const dependencies = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)]
const external = { external: dependencies }

export function createBuildConfig(format: 'cjs' | 'iife' | 'es'): InlineConfig {
  const isESM = ['es'].includes(format)
  const config: InlineConfig = {
    build: {
      lib: {
        entry: fileURLToPath(new URL('../src/index.ts', import.meta.url)),
        formats: [format],
        fileName: 'index',
        /** iife/umd */
        name: 'Roshan',
      },
      rollupOptions:
        format === 'iife'
          ? {
              ...external,
              output: {
                globals: {
                  vue: 'Vue',
                },
              },
            }
          : external,
      reportCompressedSize: false,
      outDir: `dist/${format}`,
      sourcemap: true,
      cssCodeSplit: false,
      minify: 'terser',
      terserOptions: {
        keep_fnames: true,
      },
    },
    plugins: [
      vue({
        isProduction: true,
      }),
    ],
  }

  isESM && config.plugins?.push(chunkSplitPlugin({ strategy: 'unbundle' }))

  return config
}

export async function buildPack(config: InlineConfig) {
  try {
    await build(config)
  } catch (error) {
    return Promise.reject(error)
  }
}
