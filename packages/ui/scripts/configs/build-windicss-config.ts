import dts from 'vite-plugin-dts'
import { fileURLToPath } from 'node:url'
import { defu } from 'defu'
import { InlineConfig } from 'vite'

import { buildPack, createBuildConfig } from '../build-config'

const entry = fileURLToPath(new URL('../../src/windicss.ts', import.meta.url))

export async function buildWindicssConfig() {
  const config: InlineConfig = {
    build: {
      outDir: 'dist/windicss',
      rollupOptions: {
        external: ['windicss/helpers', 'defu', 'module'],
      },
    },
  }

  try {
    await Promise.all([
      buildPack(
        defu(
          {
            ...config,
            plugins: [dts({ copyDtsFiles: false })],
          },
          createBuildConfig(entry, 'es')
        )
      ),
      buildPack(defu(config, createBuildConfig(entry, 'cjs'))),
    ])
  } catch (error) {
    return Promise.reject(error)
  }
}
