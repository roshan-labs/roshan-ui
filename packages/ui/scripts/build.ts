import { buildStart } from './steps'
import { buildCJS } from './configs/build-cjs'
import { buildES } from './configs/build-es'
import { buildIIFE } from './configs/build-iife'
import { buildStyles } from './configs/build-style'

async function build() {
  buildStart()

  await Promise.all([buildCJS(), buildES(), buildIIFE(), buildStyles()])
}

build().catch((error: Error) => {
  console.error(error)
  process.exit(1)
})
