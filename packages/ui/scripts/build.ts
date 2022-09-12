import { buildEnd, buildStart } from './steps'
import { buildCJS } from './configs/build-cjs'
import { buildESAndTypes } from './configs/build-es-and-types'
import { buildIIFE } from './configs/build-iife'
import { buildStyle } from './configs/build-style'
import { buildWindicssConfig } from './configs/build-windicss-config'

async function build() {
  buildStart()

  await Promise.all([
    buildCJS(),
    buildESAndTypes(),
    buildIIFE(),
    buildStyle(),
    buildWindicssConfig(),
  ])

  buildEnd()
}

build().catch((error: Error) => {
  console.error(error)
  process.exit(1)
})
