import { fileURLToPath } from 'node:url'
import { build, InlineConfig } from 'vite'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import vue from '@vitejs/plugin-vue'

import { dependencies, peerDependencies } from '../package.json'

const deps = [...Object.keys(dependencies), ...Object.keys(peerDependencies)]
const external = { external: deps }

export const uiEntry = fileURLToPath(new URL('../src/index.ts', import.meta.url))

export function createBuildConfig(entry: string, format: 'cjs' | 'iife' | 'es') {
  const config: InlineConfig = {
    build: {
      lib: {
        entry,
        formats: [format],
        fileName: 'index',
        // For iife/umd
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
      // reportCompressedSize: false,
      outDir: `dist/${format}`,
      sourcemap: true,
      cssCodeSplit: false,
      minify: 'terser',
      terserOptions: {
        keep_fnames: true,
      },
    },
    plugins: [vue({ isProduction: true })],
  }

  if (format === 'es') {
    config.plugins?.push(chunkSplitPlugin({ strategy: 'unbundle' }))
  }

  return config
}

export async function buildPack(config: InlineConfig) {
  try {
    await build(config)
  } catch (error) {
    return Promise.reject(error)
  }
}
