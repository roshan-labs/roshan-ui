import dts from 'vite-plugin-dts'
import { defu } from 'defu'

import { buildPack, createBuildConfig, uiEntry } from '../build-config'

export async function buildESAndTypes() {
  return buildPack(
    defu(
      {
        plugins: [
          dts({
            outputDir: 'dist/types',
            copyDtsFiles: false,
          }),
        ],
      },
      createBuildConfig(uiEntry, 'es')
    )
  )
}
