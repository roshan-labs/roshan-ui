import { buildPack } from './build-config'
import { buildStart } from './steps'

async function build() {
  try {
    buildStart()

    await Promise.all([buildPack('es'), buildPack('cjs'), buildPack('iife')])
  } catch (error) {
    return Promise.reject(error)
  }
}

build().catch((error: Error) => {
  console.error(error)
  process.exit(1)
})
