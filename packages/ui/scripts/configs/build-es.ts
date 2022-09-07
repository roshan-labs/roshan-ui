import { buildPack, createBuildConfig } from '../build-config'

export function buildES() {
  return buildPack(createBuildConfig('es'))
}
