import windicss from 'vite-plugin-windicss'
import { defu } from 'defu'
import { fileURLToPath } from 'node:url'

import { buildPack, createBuildConfig } from '../build-config'

const entry = fileURLToPath(new URL('../../src/style.ts', import.meta.url))

export function buildStyle() {
  return buildPack(
    defu(
      {
        build: {
          outDir: 'dist/style',
          assetsDir: './',
          sourcemap: false,
        },
        plugins: [windicss()],
      },
      createBuildConfig(entry, 'cjs')
    )
  )
}
