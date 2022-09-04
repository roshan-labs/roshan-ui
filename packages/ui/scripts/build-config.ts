import { fileURLToPath } from 'node:url'
import { build, InlineConfig } from 'vite'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import vue from '@vitejs/plugin-vue'
import windicss from 'vite-plugin-windicss'

function createBuildConfig(format: 'es' | 'cjs'): InlineConfig {
  const isESM = ['es'].includes(format)
  const config: InlineConfig = {
    build: {
      lib: {
        entry: fileURLToPath(new URL('../src/index.ts', import.meta.url)),
        formats: [format],
        fileName: 'roshan',
        /** iife/umd */
        name: 'roshan',
      },
      outDir: `dist/${format}`,
      sourcemap: true,
      cssCodeSplit: isESM,
      minify: 'terser',
      terserOptions: {
        keep_fnames: true,
      },
    },
    plugins: [
      vue({
        isProduction: true,
      }),
      windicss(),
    ],
  }

  isESM && config.plugins?.push(chunkSplitPlugin({ strategy: 'unbundle' }))

  return config
}

export async function buildPack(format: 'es' | 'cjs') {
  try {
    await build(createBuildConfig(format))
  } catch (error) {
    return Promise.reject(error)
  }
}
