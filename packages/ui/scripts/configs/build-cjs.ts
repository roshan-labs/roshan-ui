import { buildPack, createBuildConfig } from '../build-config'

export function buildCJS() {
  return buildPack(createBuildConfig('cjs'))
}
