import windicss from 'vite-plugin-windicss'
import { defu } from 'defu'
import { fileURLToPath } from 'node:url'

import { buildPack, createBuildConfig } from '../build-config'

export function buildStyles() {
  return buildPack(
    defu(
      {
        build: {
          lib: {
            entry: fileURLToPath(new URL('../../src/style.ts', import.meta.url)),
          },
          outDir: 'dist/style',
          assetsDir: './',
          sourcemap: false,
        },
        plugins: [windicss()],
      },
      createBuildConfig('cjs')
    )
  )
}
